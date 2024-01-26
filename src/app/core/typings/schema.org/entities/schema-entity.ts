export class Schema {

  public '@context' = 'https://schema.org';
  public '@type': string;

  constructor(
    type: string
  ) {
    this['@type'] =  type;
  }
}
