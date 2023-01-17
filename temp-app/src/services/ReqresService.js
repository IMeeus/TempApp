const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    else {
        return Promise.reject(`HTTP error ${response.status}: ${response.statusText}`);
    }
};

const parseJson = (response) => response.json();

const url = 'https://reqres.in/api';

const getUsers = async (pageNumber) => {
    return fetch(url + `/users?page=${pageNumber}`)
        .then(checkStatus)
        .then(parseJson)
        .then(response => response.data);
}

export {
    getUsers
}