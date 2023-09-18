export const restoreSession = () => async (dispatch) => {
    const res = await fetch('/api/session');
    const token = res.headers.get('X-CSRF-Token');
    sessionStorage.setItem('X-CSRF-Token', token);
    const data = await res.json();
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
}

async function csrfFetch(url, options = {}) {
    options.method = options.method || 'GET';
    options.headers = options.headers || {};

    // if (options.method.toUpperCase() !== 'GET') {
    //     options.headers['Content-Type'] = 'application/json';
    //     options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
    // }

    if (options.method.toUpperCase() !== "GET") {
        if (!options.headers["Content-Type"] && !(options.body instanceof FormData)) {
            options.headers["Content-Type"] = "application/json";
        }
        options.headers["X-CSRF-Token"] = sessionStorage.getItem("X-CSRF-Token");
    }

    const res = await fetch(url, options);
    if (res.status >= 400) throw res;
    return res;
}
export default csrfFetch