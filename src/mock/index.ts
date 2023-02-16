import Mock from 'mockjs'

Mock.mock(/\/swiperList/, 'get', () => {
  return {
    code: 0,
    result: []
  }
})

Mock.mock(/\/navList/, 'get', () => {
  return {
    code: 0,
    result: [
      {
        text: '首页',
        id: '1'
      },
      {
        text: '首页2',
        id: '2'
      },
      {
        text: '首页3',
        id: '3'
      },
      {
        text: '首页4',
        id: '4'
      }
    ]
  }
})
