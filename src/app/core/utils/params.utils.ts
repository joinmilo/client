import { ConjunctionOperator, Maybe, QueryExpressionInput, QueryOperator } from 'src/schema/schema';

export const createListParam = (
  param: Maybe<string[] | string>,
  field: string,
  operator: QueryOperator = QueryOperator.Equal): QueryExpressionInput => {
  return (typeof param === 'string' || param?.length === 1)
    ? {
      entity: {
        path: field,
        operator: operator,
        value: typeof param === 'string' ? param : param[0]
      }
    }
    : {
      conjunction: {
        operands: param?.map(id => ({
          entity: {
            path: field,
            operator: operator,
            value: id
          }
        })),
        operator: ConjunctionOperator.Or
      }
    };
}
