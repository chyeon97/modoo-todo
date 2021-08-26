import { ITodo } from './localStorageHelper';
import { STATUS } from './constants/Status';
import { getFormattedDate } from 'utils';
interface IStatus {
  [key: string]: string;
}
const convertStatus: IStatus = {
  [STATUS.FINISHED]: 'status.FINISHED',
  [STATUS.ONGOING]: 'status.ONGOING',
  [STATUS.NOT_STARTED]: 'status.NOT_STARTED',
  [STATUS.ALL]: 'ALL',
};

export const OriginData = (data: ITodo[]): ITodo[] => {
  return data;
};

export const filterStatus = (status: string, data: ITodo[]): ITodo[] => {
  let cstatus = convertStatus[status];
  if (cstatus === 'ALL') {
    return data;
  } else {
    return data.filter((Itodo: ITodo) => Itodo.status === cstatus);
  }
};

export const filterDate = (date: null | Date, data: ITodo[]): ITodo[] => {
  if (!date) return [];
  let selectedDate = getFormattedDate(date);
  return data.filter((Itodo: ITodo) => Itodo.createdAt === selectedDate);
};

export const filterAll = (
  status: string,
  date: Date | null,
  data: ITodo[],
): ITodo[] => {
  const filter_status = filterStatus(status, data);
  return filterDate(date, filter_status);
};
