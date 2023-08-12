
import { MediaFilterQueryDefinition, MediaFilterQueryParams } from 'src/app/core/typings/filter-params/media-filter-param';
import { createListParam } from 'src/app/core/utils/params.utils';
import { MimeTypes } from 'src/app/shared/widgets/media/typings/media';
import { ConjunctionOperator, FilterSortPaginateInput, QueryOperator } from 'src/schema/schema';

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

  if (queryParams && queryParams[MediaFilterQueryDefinition.mediaTypes]) {

    const mimeTypes = (typeof queryParams[MediaFilterQueryDefinition.mediaTypes] === 'string') ?
     [queryParams[MediaFilterQueryDefinition.mediaTypes]] :
     [...queryParams[MediaFilterQueryDefinition.mediaTypes]];

    if(mimeTypes.indexOf(MimeTypes.Files)! > -1){
      mimeTypes.splice(mimeTypes.indexOf(MimeTypes.Files)!, 1, 'word', 'pdf');
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
