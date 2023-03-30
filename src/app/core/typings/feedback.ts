export enum FeedbackType {
  Error = 'ERROR',
  Critical = 'CRITICAL',
  Info = 'INFO',
  Success = 'SUCCESS',
}

export interface Feedback {
  type: FeedbackType,
  labelMessage?: string,
  labelAction?: string,
}