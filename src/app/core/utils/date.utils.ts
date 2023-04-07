import { Month } from "../typings/month";

export const dateToMonth = (date: Date): Month => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59);
    return {
      startDate: firstDay,
      endDate: lastDay,
    };
}