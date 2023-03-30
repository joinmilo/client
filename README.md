# Wooportal client

## Schema
Everytime a graphql file is written, the services need to be re-generated:

### Re-generate schema


1. Pull latest server and run via docker-compose
2. Generate the Typescript `schema.ts`:

  ```bash
  npm run generate
  ```

Or within the docker service:

```bash
docker compose run 

```

### Use generated services
After generating the schema.ts file you will see all services generated in that file. You can then inject them as normal services in Angular.

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

This will generate something like `MyFancyQueryGQL` in the `schema.ts` file. This can now be imported as usual:

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

All static labels within the client are not hardcoded in the template because it's a multi language application. There are is a `appLabel` directive in the `core` module which should be used in order to display a labels.

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
<span appLabel="newActivities"></span>
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
<span appLabel="newActivities"></span>
...
