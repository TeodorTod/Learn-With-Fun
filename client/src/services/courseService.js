import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/';

export const getAll = () => request.get(`${baseUrl}/courses`);

export const getOne = async(courseId) => {
    let res = await fetch(`${baseUrl}/courses/${courseId}`)
    let data = await res.json();

    return data;
}