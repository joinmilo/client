import type { CodegenConfig } from '@graphql-codegen/cli';
import { graphqlGenerationApi } from '../../../../core/api/codegen/constants';

const config: CodegenConfig = {
  schema: graphqlGenerationApi,
  documents: [
    'src/app/core/api/documents/fragments/**/*.graphql',
    'src/app/features/media/api/documents/**/*.graphql',
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