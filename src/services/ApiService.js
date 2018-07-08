const config = require('@/config.json');

export default (url = '', method = 'GET', data = {}) => {
  const apiUrl = config.apiUrl + url;

  const payload = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${config.apiToken}`,
    },
  };

  if (method === 'POST') {
    payload.body = JSON.stringify(data);
  }

  return fetch(apiUrl, payload)
    .then(response => response.json());
};
