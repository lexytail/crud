import { Model, CastError, Document } from 'mongoose'
import { RequestHandler, Request, Response, NextFunction } from 'express'

function updateById(Model: Model<any>): RequestHandler {

  const handler: RequestHandler = (request: Request, response: Response, next: NextFunction): void => {

    const id: string = request.params['id']

    Model.findByIdAndUpdate(id, request.body, { new: true })

      .then((doc: Document) => {

        if (doc === null) return response.status(404)

        response.json(doc)

      })

      .catch((error: CastError) => next(error))

  }

  return handler

}

export default updateById