import { environment } from 'src/environments/environment';

export const coreFeatureKey = 'coreState';
export const baseApi = `${environment.base}api`;


export const graphqlApi = `${baseApi}/graphql`;

export const mediaBaseApi = `${baseApi}/media`;
export const mediaDownloadApi = `${mediaBaseApi}/download`;
export const mediaExportApi = `${mediaBaseApi}/export`;
export const refreshKey = 'refresh';