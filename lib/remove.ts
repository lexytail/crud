import { Model, CastError } from 'mongoose'
import { RequestHandler, Request, Response, NextFunction } from 'express'

function remove(Model: Model<any>): RequestHandler {

  const handler: RequestHandler = (request: Request, response: Response, next: NextFunction): void => {

    const query: MongooseQuery = request.query

    Model.remove(query)

      .then(() => response.sendStatus(204))

      .catch((error: CastError) => next(error))

  }

  return handler

}

export default remove