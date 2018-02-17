import { Model, Document, ValidationError } from 'mongoose'
import { RequestHandler, Request, Response, NextFunction } from 'express'

function create(Model: Model<any>): RequestHandler {

  const handler: RequestHandler = (request: Request, response: Response, next: NextFunction): void => {

    Model.create(request.body)

      .then((doc: Document) => response.json(doc))

      .catch((error: ValidationError) => next(error))

  }

  return handler

}

export default create