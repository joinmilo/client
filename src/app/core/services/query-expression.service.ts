import {Injectable} from '@angular/core';
import {
  ConjunctionOperator,
  QueryConjunctionInput,
  QueryEntityInput,
  QueryExpressionInput,
  QueryOperator
} from 'src/schema/schema';


class QueryExpressionBuilder {
  expressions: QueryExpressionInput[] = []

  public maybeAdd(path: string, value: string | null | undefined, operator: QueryOperator = QueryOperator.Equal) {
    if (value) {
      this.add(path, value, operator)
    }
    return this
  }

  public add(path: string, value: string, operator: QueryOperator = QueryOperator.Equal) {
    return this.addEntity({path, value, operator});
  }

  public addEntity(entity: QueryEntityInput) {
    return this.addExpression({entity});
  }

  public addConjunction(conjunction: QueryConjunctionInput): QueryExpressionBuilder {
    return this.addExpression(({conjunction}))
  }

  public addExpression(expression: QueryExpressionInput): QueryExpressionBuilder {
    this.expressions.push(expression)
    return this;
  }

  public wrap(operator: ConjunctionOperator): QueryExpressionBuilder {
    this.expressions = [{
      conjunction: {
        operands: this.expressions,
        operator
      }
    }]
    return this;
  }

  public build(operator: ConjunctionOperator = ConjunctionOperator.And): QueryExpressionInput {
    if (this.expressions.length > 1) {
      this.wrap(operator)
    }
    return this.expressions[0]
  }
}

@Injectable({ providedIn: 'root' })
export class QueryExpressionService {

  public builder() {
    return new QueryExpressionBuilder();
  }
}
