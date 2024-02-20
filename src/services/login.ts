
/** 登录接口 POST /api/login */
export async function login(body: any) {
  return fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((response) => {
    return response.json();
  });
}

/** 退出登录接口 POST /api/logout */
export async function logout() {
  return fetch('/api/logout', {
    method: 'POST',
  }).then((response) => {
    return response.json();
  });
}