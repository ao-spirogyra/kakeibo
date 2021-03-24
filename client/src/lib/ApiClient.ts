type HttpProtocol = 'GET' | 'POST' | 'DELETE'

export const apiClient = <T> (method: HttpProtocol, url: string, body?: Object, cors = true): Promise<T> => {
  return fetch(`http://localhost:5000${url}`, {
    method: method,
    mode: cors ? 'cors' : 'no-cors',
    headers: {
      'content-type': 'application/json',
    },
    // memo Spread in object literals
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
    ...(body ? { body: JSON.stringify(body) } : {})
  }).then(async (res) => {
     return await res.json();
  });
};
