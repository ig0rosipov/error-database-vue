type ErrorType = 'mechanical' | 'electrical';

interface Machine {
  _id: number;
  name: string;
}

interface ErrorItem {
  _id: number;
  heading: string;
  description: string;
  solution: string;
  type: ErrorType;
  images: string[];
  machine: Machine;
}

export const Machines: Machine[] = [
  { _id: 0, name: 'Гальваника' },
  { _id: 1, name: 'Покраска' },
  { _id: 2, name: 'Лазер' },
  { _id: 3, name: 'Листогиб' },
];

export const Data: ErrorItem[] = [
  {
    _id: 0,
    heading: 'qwer',
    description: 'asdf',
    solution: 'zxcv',
    type: 'mechanical',
    images: [
      'https://smart-lab.ru/uploads/images/00/97/85/2014/11/11/79e9dc.jpg',
    ],
    machine: {
      _id: 0,
      name: 'Покраска',
    },
  },
  {
    _id: 1,
    heading: 'ячсм',
    description: 'фыва',
    solution: 'йцук',
    type: 'electrical',
    images: [
      'https://smart-lab.ru/uploads/images/00/97/85/2014/11/11/79e9dc.jpg',
    ],
    machine: {
      _id: 1,
      name: 'Покраска',
    },
  },
  {
    _id: 2,
    heading: 'йцук',
    description: 'йцук',
    solution: 'йцук',
    type: 'electrical',
    images: [],
    machine: {
      _id: 0,
      name: 'Гальваника',
    },
  },
];
