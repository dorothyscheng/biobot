import { Request, Response } from 'express';
import { Send } from 'express-serve-static-core';

export interface CustomRequest<T> extends Request {
    body: T;
}

export interface CustomResponse<T> extends Response {
    json: Send<T, this>;
}
