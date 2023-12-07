import { DragDropElementInput } from './drag-drop-input';

export interface DragDropElementComponent<T> {
  input?: DragDropElementInput<T>,
}