import create from './create'
import update from './update'
import remove from './remove'
import read from './read'
import readById from './_id/read'
import removeById from './_id/remove'
import updateById from './_id/update'
import { Model } from 'mongoose'
import { RequestHandler } from 'express'

export class CRUD {

  public create: RequestHandler = create(this.model)

  public update: RequestHandler = update(this.model)

  public remove: RequestHandler = remove(this.model)

  public read: RequestHandler = read(this.model)

  public readById: RequestHandler = readById(this.model)

  public removeById: RequestHandler = removeById(this.model)

  public updateById: RequestHandler = updateById(this.model)

  constructor(public model: Model<any>) { }

}

export { default as create } from './create'
export { default as update } from './update'
export { default as remove } from './remove'
export { default as read } from './read'
export { default as readById } from './_id/read'
export { default as removeById } from './_id/remove'
export { default as updateById } from './_id/update'