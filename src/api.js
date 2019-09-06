export function checkStatus(response) {
    debugger;
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.statusText);

        error.response = response;

        throw error;
    }
}

function request(method, resource, body = null) {
    return window.fetch(resource, {
        method,
        mode: 'cors',
        // credentials: 'include',
        body,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    }); //.then(checkStatus);
}

export function GET(resource, params) {
    return request('GET', resource);
}

export function POST(resource, body) {
    return request('POST', resource, JSON.stringify(body));
}

export function PUT(resource, body) {
    return request('PUT', resource, JSON.stringify(body));
}