import { Maybe, ScheduleEntity } from 'src/schema/schema';

export const distinctStartDates = (schedules?: Maybe<ScheduleEntity>[]): Date[] | undefined => 
  schedules?.reduce((result, current) => {
    const startDate = new Date(current?.startDate);
    !result.find(date => date.toDateString() === startDate.toDateString()) 
      && result.push(startDate);

    return result;
  }, [] as Date[])