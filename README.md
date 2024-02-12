# Wooportal client

## Schema and services
Everytime a graphql file is written, the services need to be re-generated.

### Create codegen.ts file if not existing

1. create the following folder structure:

```
/path/to/your/module
|-- /api
|   |-- /codegen
|       |-- codegen.ts
|   |-- /documents
|       |-- /fragments
|           |-- some.fragment.graphql
|           |-- ...
|       |-- /mutations
|           |-- some.mutation.graphql
|           |-- ...
|       |-- /queries
|           |-- some.query.graphql
|           |-- ...
```

the name `codegen.ts` is important, otherwise the generation script will not find the generation definition.

All document files must have `*.graphql` file extension.

2. `codegen.ts` file looks like this:

```typescript
import type { CodegenConfig } from '@graphql-codegen/cli';
import { graphqlGenerationApi } from '../../../core/api/codegen/constants';

const config: CodegenConfig = {
  schema: graphqlGenerationApi,
  documents: [
    'src/app/core/api/documents/fragments/**/*.graphql',
    'path/to/your/documents/**/*.graphql', // <-- this is only path to change
  ],
  generates: {
    'src/app/core/api/generated': {
      preset: 'near-operation-file-preset',
      presetConfig: {
        baseTypesPath: 'schema.ts',
        folder: '../../generated'
      },
      plugins: [
        'typescript-operations',
        'typescript-apollo-angular',
        {
          'add': {
            content: '/* eslint-disable */'
          }
        }
      ],
      config: {
        addExplicitOverride: true,
      },
    },
  },
};
export default config;
```

### Re-generate schema


1. After adding new graphl documents, services have to be re-generated
2. Pull latest server and run via docker-compose
3. It's possible to run generation for all or only for one `codegen.ts`` file :

```bash
npm run generate
```

for Windows:
```bash
npm run generate-windows
```

Or only one module:

```bash
npm run generate -- path/to/your/module/api
```

for Windows:
```bash
npm run generate-windows -- path/to/your/module/api
```

Or within the docker service:

1. Change `/src/app/core/api/codegen/constants.ts` from:

```typescript
export const graphqlGenerationApi = 'http://localhost:8011/api/graphql'
```

to

```typescript
export const graphqlGenerationApi = 'http://server:80/api/graphql'
```

2. Then run:
```bash
docker compose run client npm run generate
```

### Use generated services
After generating the services you will see all services generated in the folder `generated`. You can then inject them as normal services in Angular.

```
/path/to/your/module
|-- /api
|   |-- /codegen
|       |-- codegen.ts
|   |-- /documents
|       |-- /fragments
|           |-- some.fragment.graphql
|           |-- ...
|       |-- /mutations
|           |-- some.mutation.graphql
|           |-- ...
|       |-- /queries
|           |-- some.query.graphql
|           |-- ...
|   |-- /generated <-- generated service, ready to use
|           |-- some.fragment.generated.ts
|           |-- some.mutation.generated.ts
|           |-- some.query.generated.ts
|           |-- ...
```


**Example**:

```graphql
query myFancyQuery($param: String!) {
  someQuery(param: $param) {
    result {
      id
      name
      etc
    }
  }
}
```

This will generate something like `MyFancyQueryGQL` in the `*.generated.ts` file. This can now be imported as usual:

```typescript
...

constructor(
  private myFancyQueryService: MyFancyQueryGQL,
) {

  this.myFancyQueryService.watch({
    param: 'SomeParam',
  }).valueChanges.subscribe(response => console.log(response));
}

...

```

## Translation / i18n

All static labels within the client are not hardcoded in the template because it's a multi language application. There are is a `i18nLabel` directive in the `core` module which should be used in order to display a labels.

The directive works as follows:
- it takes the `label` input and does a lookup on the previous loaded labels searching for the correct `tagId`.
- If the user switches the language, it'll automatically update the label content.

**Don't:**
``` html
...
<span>New events</span>
...
```

**Do:**
``` html
...
<span i18nLabel="newActivities"></span>
...
```

### How to get the right label?
It's crucial to take the correct labels because each new label will be translated into multiple languages. We have an auto translate mechanism but they might work naturally bad with one word labels. So a manual translation might be necessary which is costly and should only be done if there is really a need for new labels.

You can search for the labels in the Playground. Start the server (e.g. via docker compose) and open the playground in the browser (if started within the dev project, the URL is `http://localhost:8011/api/gui`).

Here you can search for the labels as follows:

```
query {
  getLabels(params: {
    sort: "tagId",
    search: "<PART-OF-YOUR-LABEL>"
  }) {
    result {
      id
      tagId
      translatables {
        id
        content
      }
    }
  }
}
```

Run the query and see if the label already exists. You can play around with the search to find the correct label. The `search` param is doing a fuzzy search. So if you search for `new` it will find labels like `new Activities` with the corresponding `tagId`=`newActivities`.

### How to use the label within the directive?

In case you find the right label, copy the `tagId` of the label and place it within as parameter in the label. In case you really don't find any label which matches the label, think of a new tagId. On startup the client will save the new `tagId` and automatically translate the label. 

**Example:**
``` html
...
<span i18nLabel="newActivities"></span>
...
