export const login = async (email, password) => {
    let res = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let jsonResult = await res.json()

    if (res.ok) {
        return jsonResult;
    } else {
        //TODO show notification
        alert(jsonResult.message);
        throw jsonResult.message;
        
    }
};

export const register = async (email, password, repass) => {
    let res = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let jsonResult = await res.json()

    if (res.ok && password == repass) {
        return jsonResult;
    } else {
        //TODO show notification
        alert('Psswords don\'t match');
        throw jsonResult.message;
    }
};

export const logout = () => {
    localStorage.removeItem('username');
}

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser())
};