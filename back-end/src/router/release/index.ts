import Base from '../Base'
import create from './create'
import update from './update'
import list from './list'
import show from './show'

export default Base.setRouter([
  {
    path: '/create',
    router: create,
    method: 'post',
  },
  {
    path: '/list',
    router: list,
    method: 'get',
  },
  {
    path: '/:id/show',
    router: show,
    method: 'get',
  },
  {
    path: '/:id/update',
    router: update,
    method: 'post',
  },
])
