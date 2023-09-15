export interface ITodo {
  id: string | number;
  value: string;
  isReady: boolean;
}

export type TFilterType = 'All' | 'Active' | 'Complited';
