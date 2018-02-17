import { Model, CastError, Document } from 'mongoose'
import { RequestHandler, Request, Response, NextFunction } from 'express'

function read(Model: Model<any>): RequestHandler {

  const handler: RequestHandler = (request: Request, response: Response, next: NextFunction): void => {

    const query: MongooseQuery = request.query

    Model.find(query)

      .then((docs: Document[]) => {

        if (docs.length === 0) return response.status(404)

        response.json(docs)

      })

      .catch((error: CastError) => next(error))

  }

  return handler

}

export default read