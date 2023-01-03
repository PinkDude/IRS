import { GridDirection } from '@mui/material'
import { TDemoTable } from '../components/molecules/Tables/DemoTable'

export interface IContent {
  headerText: string
  text: string
  link: string
  img: string
  direction: GridDirection
  demoType: TDemoTable
  linkOnFiltered?: string
  fullText: string
}

export const clinContent: IContent =
  {
    headerText: 'Клиновидные таблицы',
    text: 'Расширение горизонтальной и вертикальной составляющей пятна ясного видения. Ежедневная работа с клиновидными' +
        ' таблицами по 5-7 минут помогут значительно ускорить скорость чтения и восприятие прочитанного.',
    link: '/clin',
    img: require('../assets/table.png'),
    direction: 'row',
    demoType: 'clin',
    linkOnFiltered: '/clin/filtering',
    fullText: ''
  }

export const shultContent: IContent =
    {
      headerText: 'Таблицы Шульте',
      text: 'Представляет собой листок бумаги, на котором нарисован квадрат со сторонами 20 (25) см. Квадрат разбивается' +
          ' на 25 ячеек, в которые вписываются в беспорядке числа от 1 до 25. Взгляд следует сосредоточивать в центре квадрата ' +
          'и боковым зрением пытаться найти все числа от единицы до двадцати пяти.',
      link: '/shult',
      img: require('../assets/shult.png'),
      direction: 'row-reverse',
      demoType: 'shult',
      linkOnFiltered: '/shult/filtering',
      fullText: ''
    }

export const reversContent: IContent =
    {
      headerText: 'Перевернутые слова',
      text: 'Расширение горизонтальной и вертикальной составляющей пятна ясного видения. Ежедневная работа с клиновидными' +
            ' таблицами по 5-7 минут помогут значительно ускорить скорость чтения и восприятие прочитанного.',
      link: '/revers',
      img: require('../assets/table.png'),
      direction: 'row',
      demoType: 'revers',
      linkOnFiltered: '/revers/filtering',
      fullText: ''
    }

export const shorthandContent: IContent =
    {
      headerText: 'Тексты для скорочтения',
      text: 'Расширение горизонтальной и вертикальной составляющей пятна ясного видения. Ежедневная работа с клиновидными' +
            ' таблицами по 5-7 минут помогут значительно ускорить скорость чтения и восприятие прочитанного.',
      link: '/shorthand',
      img: require('../assets/table.png'),
      direction: 'row-reverse',
      demoType: 'shorthand',
      fullText: ''
    }
