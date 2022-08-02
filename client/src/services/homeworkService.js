import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/homeworks';

export const getAll = () => request.get(baseUrl);

export const getOne = (homeworkId) => request.get(`${baseUrl}/${homeworkId}`);

export const create = (homeworkData) => request.post(baseUrl, homeworkData);

export const edit = (homeworkId, homeworkData) => request.put(`${baseUrl}/${homeworkId}`, homeworkData);