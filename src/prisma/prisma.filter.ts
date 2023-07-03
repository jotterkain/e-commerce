import { ArgumentsHost, Catch, ExceptionFilter, HttpAdapterHost, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';

let defaultMessage: string = 'Something went wrong on the server: database operation'

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientKnownExceptionFilter implements ExceptionFilter {

    constructor(private readonly httpAdapterHost: HttpAdapterHost) { }

    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost): void {

        const { httpAdapter } = this.httpAdapterHost;

        const ctx = host.switchToHttp();

        let statusCode: number
        let message: string | undefined
        let path: string = httpAdapter.getRequestUrl(ctx.getRequest())
        let timestamp: string = new Date().toISOString()
        let error = "PrismaClientKnownRequestError"
        if (exception instanceof Prisma.PrismaClientKnownRequestError) {
            switch (exception.code) {
                case 'P1008':
                    message = `Timeout : ${exception.meta.time}`
                    statusCode = 408
                    break
                case 'P2025' || 'P2018':
                    message = `${exception.meta.cause}`
                    statusCode = 404
                    break
                case 'P2002':
                    message = 'There is a unique constraint violation'
                    statusCode = 409
                    break
                case 'P2003':
                    message = `operation failed because it depends on one or more records that were required but not found: ${exception.meta.cause}`
                    statusCode = 404
                    break
                case "P5011":
                    message = `Validation error: Invalid type passed ${exception.meta.cause ?? ""}`
                    statusCode = 400
                    break
                case "P2023":
                    message = `Validation error: Invalid type passed in request`
                    statusCode = 400
                    Logger.error(exception)
                    break
                default:
                    message = defaultMessage
                    statusCode = 500
                    Logger.error(exception);
                    break
            }
        } else {
            message = defaultMessage
            statusCode = 500
            Logger.error(exception);
        }

        const responseBody = { statusCode: statusCode, message: message, timestamp: timestamp, path: path, error: error }

        httpAdapter.reply(ctx.getResponse(), responseBody, statusCode)
    }
}

@Catch(Prisma.PrismaClientValidationError)
export class PrismaClientValidationExceptionFilter implements ExceptionFilter {

    constructor(private readonly httpAdapterHost: HttpAdapterHost) { }

    catch(exception: Prisma.PrismaClientValidationError, host: ArgumentsHost): void {

        const { httpAdapter } = this.httpAdapterHost;

        const ctx = host.switchToHttp();

        let statusCode: number
        let message: string | undefined
        let path: string = httpAdapter.getRequestUrl(ctx.getRequest())
        let timestamp: string = new Date().toISOString()
        let error: string = "PrismaClientValidationError"

        if (exception instanceof Prisma.PrismaClientValidationError) {
            message = `Validation error: Invalid type passed`
            statusCode = 400
            Logger.error(exception.message)
        }
        else {
            message = defaultMessage
            statusCode = 500
            Logger.error(exception);
        }

        const responseBody = { statusCode: statusCode, message: message, timestamp: timestamp, path: path, error: error }

        httpAdapter.reply(ctx.getResponse(), responseBody, statusCode)
    }
}

@Catch(Prisma.PrismaClientUnknownRequestError)
export class PrismaClientUnknownExceptionFilter implements ExceptionFilter {

    constructor(private readonly httpAdapterHost: HttpAdapterHost) { }

    catch(exception: Prisma.PrismaClientUnknownRequestError, host: ArgumentsHost): void {

        const { httpAdapter } = this.httpAdapterHost;

        const ctx = host.switchToHttp();

        let statusCode: number
        let message: string | undefined
        let path: string = httpAdapter.getRequestUrl(ctx.getRequest())
        let timestamp: string = new Date().toISOString()
        let error: string = "PrismaClientUnknownRequestError"

        message = defaultMessage
        statusCode = 500
        Logger.error(exception);

        const responseBody = { statusCode: statusCode, message: message, timestamp: timestamp, path: path, error: error }

        httpAdapter.reply(ctx.getResponse(), responseBody, statusCode)
    }
}
