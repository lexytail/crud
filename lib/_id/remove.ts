import { Model, CastError } from 'mongoose'
import { RequestHandler, Request, Response, NextFunction } from 'express'

function removeById(Model: Model<any>): RequestHandler {

  const handler: RequestHandler = (request: Request, response: Response, next: NextFunction): void => {

    const id: string = request.params['id']

    Model.findByIdAndRemove(id)

      .then(() => response.sendStatus(204))

      .catch((error: CastError) => next(error))

  }

  return handler

}

export default removeById