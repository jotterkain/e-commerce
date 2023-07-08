import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  private readonly logger = new Logger(LoggerMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    res.once("finish", () => {
      const msg = `${req.ip} ${req.url} - ${res.statusCode} ${req.headers["user-agent"]}`
      if (res.statusCode < 400) this.logger.verbose(msg);
      else if (res.statusCode < 500) this.logger.warn(msg);
      else this.logger.error(msg);
    })
    next();
  }
}
