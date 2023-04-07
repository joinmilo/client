import { EventEntity, Maybe } from "src/schema/schema";

export type ReducedSchedule = {
  id?: Maybe<string>;
  events: Array<Maybe<EventEntity>>;
  startDate: Date;
};