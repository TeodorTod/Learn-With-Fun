const baseUrl = 'http://localhost:3030/data';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/courses`)

    let course = await response.json();

    let result = Object.values(course)

    return result; 
};

export const create = async (courseData, token) => {
    let res = await fetch(`${baseUrl}/courses`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': 'token'
        },
        body: JSON.stringify(petData)
    });

    let data = await res.json();
    
    return data;
}

export const getOne = async(courseId) => {
    let res = await fetch(`${baseUrl}/pets/${courseId}`)
    let data = await res.json();

    return data;
}