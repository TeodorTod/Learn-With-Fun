import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/homeworks';

export const getAll = () => request.get(baseUrl);