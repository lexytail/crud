import { Router } from 'express'
import { Model } from 'mongoose'
import { CRUD } from './src'

function router(Model: Model<any>): Router {

  const router = Router(), crud: CRUD = new CRUD(Model)

  router.get('/', crud.read)

  router.put('/', crud.create)

  router.patch('/', crud.update)

  router.delete('/', crud.remove)

  router.get('/:id', crud.readById)
  
  router.patch('/:id', crud.updateById)
  
  router.delete('/:id', crud.removeById)

  return router

}

export default router