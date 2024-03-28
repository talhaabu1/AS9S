import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    error: {
      url: `📛 Is not a valid Endpoint 👉 ${req.url} 🚧`,
      method: req.method,
      message: 'NOT FOUND URL 😵',
      validUrl: '🔧' + ' ' + req.hostname + '/api' + ' ' + '✔️',
    },
  });
};

export default notFound;
