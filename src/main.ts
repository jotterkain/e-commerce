import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { INestApplication, ValidationPipe, Logger } from '@nestjs/common'
import {
  PrismaClientKnownExceptionFilter,
  PrismaClientUnknownExceptionFilter,
  PrismaClientValidationExceptionFilter,
} from './prisma/prisma.filter'
import { ConfigService } from '@nestjs/config'
import { from } from 'rxjs'
import { NestExpressApplication } from '@nestjs/platform-express'

const startServer = (app: INestApplication) => {
  const configService = app.get<ConfigService>(ConfigService)
  const port = configService.getOrThrow<number>('PORT')
  from(app.listen(port, '0.0.0.0')).subscribe({
    next: () => Logger.verbose(`Server started successfully on port: ${port}`),
    error: (error: Error) => {
      Logger.error(error)
      process.exit(1)
    },
  })
}

from(NestFactory.create<NestExpressApplication>(AppModule)).subscribe({
  next: (app) => {
    app.enableCors()
    const httpAdapter = app.get(HttpAdapterHost)
    app.setGlobalPrefix('/api')
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
    app.useGlobalFilters(
      new PrismaClientUnknownExceptionFilter(httpAdapter),
      new PrismaClientKnownExceptionFilter(httpAdapter),
      new PrismaClientValidationExceptionFilter(httpAdapter),
    )
    startServer(app)
  },
  error: (error: Error) => {
    Logger.error(error)
    process.exit(1)
  },
})
