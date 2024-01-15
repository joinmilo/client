import { Maybe } from 'graphql/jsutils/Maybe'

export enum ConfirmDialogType  {
  Cancel = 'cancel',
  Change = 'change',
  Delete = 'delete',
  Reset = 'reset'
}

export type ConfirmDialogCustomSettings = {
  titleLabel: Maybe<string>,
  messageLabel: Maybe<string>,
  buttonColor: Maybe<string>,
  buttonLabel: Maybe<string>
}

export type ConfirmDialogData = {
  type?: ConfirmDialogType,
  customSettings?: ConfirmDialogCustomSettings,
  context?: Maybe<string>
}