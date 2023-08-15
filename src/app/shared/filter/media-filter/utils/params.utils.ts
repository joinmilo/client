
import { MediaFilterQueryDefinition, MediaFilterQueryParams } from 'src/app/core/typings/filter-params/media-filter-param';
import { createListParam } from 'src/app/core/utils/params.utils';
import { FilterSortPaginateInput, QueryOperator } from 'src/schema/schema';
import { MimeTypeFilterOptions } from '../typing/media-filter';

export const createMediaParams = (queryParams?: MediaFilterQueryParams) => {
  const params = {
    expression: {
      conjunction: {
        operands: [],
      }
    }
  } as FilterSortPaginateInput;

  if (queryParams && queryParams[MediaFilterQueryDefinition.mediaCategories]) {
    params.expression?.conjunction?.operands?.push(
      createListParam(
        queryParams[MediaFilterQueryDefinition.mediaCategories],
        'category.id'
      )
    );
  }

  if (queryParams && queryParams[MediaFilterQueryDefinition.mediaTypes]?.length) {

    const mimeTypes = queryParams[MediaFilterQueryDefinition.mediaTypes];

    const fileIdx = mimeTypes.indexOf(MimeTypeFilterOptions.File);
    if (fileIdx > -1) {
      mimeTypes.splice(fileIdx, 1, 'word', 'pdf');
    }

    params.expression?.conjunction?.operands?.push(
      createListParam(
        mimeTypes,
        'media.mimeType',
        QueryOperator.Like
      )
    );
  }

  return params;
}
