const express = require('express')
const paginatedData = require('./middlewares/middlewares')
const app = express()
const port = 3000
const users = [
  {
    id: 1,
    name: 'harsh1',
  },
  {
    id: 2,
    name: 'harsh2',
  },
  {
    id: 3,
    name: 'harsh3',
  },
  {
    id: 4,
    name: 'harsh4',
  },
  {
    id: 5,
    name: 'harsh5',
  },
  {
    id: 6,
    name: 'harsh6',
  },
  {
    id: 7,
    name: 'harsh7',
  },
  {
    id: 8,
    name: 'harsh8',
  },
  {
    id: 9,
    name: 'harsh9',
  },
  {
    id: 10,
    name: 'harsh10',
  },
  {
    id: 11,
    name: 'harsh11',
  },
  {
    id: 12,
    name: 'harsh12',
  },
  {
    id: 13,
    name: 'harsh13',
  },
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', paginatedData(users), (req, res) => {
  const paginatedUsers = req.paginatedData
  res.json(paginatedUsers)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id === parseInt(id))
    res.json(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
