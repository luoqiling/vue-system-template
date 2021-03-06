const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

module.exports = [
  {
    url: '/table/list',
    type: 'get',
    response: (req, res) => {
      const items = data.items
      res.send({
        data: {
          total: items.length,
          items: items
        },
        code: 200,
        msg: "成功",
        success: true
      })
    }
  }
]
