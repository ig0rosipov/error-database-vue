type ErrorType = 'mechanical' | 'electrical';

interface Machine {
  _id: number;
  name: string;
}

export interface ErrorItem {
  _id: number;
  name: string;
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
    name: 'qwer',
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
    name: 'ячсм',
    description: 'фыва',
    solution: 'qwerty',
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
    name: 'qwerty',
    description:
      'В разделе "Диагностика" отображается ошибки "Нельзя автоматически перемещать упоры вверх т.к. оси Z или ось U находятся не в исходном положении" и "Сбой двигателя: проверить двигателя в распределительном шкафу". Станок при этом не начинает выполнять программу, с панели вручную оси не двигаются.',
    solution: 'qwerty',
    type: 'electrical',
    images: [
      'https://blog.bystronicusa.com/wp-content/uploads/2014/03/PartID.jpg',
      'https://www.zastavki.com/pictures/originals/2015/Nature___Mountains_Mountain_landscape__picture_through_a_fisheye_lens_107810_.jpg',
      'https://www.zastavki.com/pictures/originals/2015/Nature___Mountains_Mountain_landscape__picture_through_a_fisheye_lens_107810_.jpg',
      'https://www.zastavki.com/pictures/originals/2015/Nature___Mountains_Mountain_landscape__picture_through_a_fisheye_lens_107810_.jpg',
      'https://www.zastavki.com/pictures/originals/2015/Nature___Mountains_Mountain_landscape__picture_through_a_fisheye_lens_107810_.jpg',
      'https://www.zastavki.com/pictures/originals/2015/Nature___Mountains_Mountain_landscape__picture_through_a_fisheye_lens_107810_.jpg',
      'https://www.zastavki.com/pictures/originals/2015/Nature___Mountains_Mountain_landscape__picture_through_a_fisheye_lens_107810_.jpg',
      'https://www.zastavki.com/pictures/originals/2015/Nature___Mountains_Mountain_landscape__picture_through_a_fisheye_lens_107810_.jpg',
      'https://www.zastavki.com/pictures/originals/2015/Nature___Mountains_Mountain_landscape__picture_through_a_fisheye_lens_107810_.jpg',
      'https://www.zastavki.com/pictures/originals/2015/Nature___Mountains_Mountain_landscape__picture_through_a_fisheye_lens_107810_.jpg',
    ],
    machine: {
      _id: 0,
      name: 'Гальваника',
    },
  },
  {
    _id: 2,
    name: 'Нельзя автоматически перемещать упоры вверх т.к. оси Z или ось U находятся не в исходном положении',
    description:
      'Не срабатывает датчик на верхний уровень или на нижний. 1) Если датчик не срабатывает на верхний уровень, вероятно, датчику не хватает чувствительности. Такое может происходить из-за смены краски на другую. 2) Если датчик не срабатывает на нижний уровень, значит он всегда в активном состоянии (видит верхний уровень). Это может случаться из-за высокой чувствительности или из-за большого "кипения" краски в баке.',
    solution: 'qwerty',
    type: 'electrical',
    images: [],
    machine: {
      _id: 0,
      name: 'Гальваника',
    },
  },
  {
    _id: 2,
    name: 'вапр',
    description: 'вапр',
    solution: 'авпр',
    type: 'electrical',
    images: [
      'https://up.moxiu.me/pic_360/9d/bc/db/9dbcdbb527950eb97369c1ed06776514.jpg',
    ],
    machine: {
      _id: 0,
      name: 'Листогиб',
    },
  },
];
