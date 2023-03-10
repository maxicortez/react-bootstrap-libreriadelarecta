import axios from "axios";

const urlMe = `${process.env.REACT_APP_HOST}${process.env.REACT_APP_JWT_ME}`;
const url = `${process.env.REACT_APP_HOST}`;

export function getStorage(key) {
  return localStorage.getItem(key);
}

export function getToken() {
  try {
    const config = getStorage("config");
    const { jwt } = JSON.parse(config);
    return jwt;
  } catch (error) {
    return "";
  }
}

export function setStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return "ok";
  } catch (error) {
    return `Error: ${error}`;
  }
}

export function deleteStorage(key) {
  try {
    localStorage.removeItem(key);
    return "ok";
  } catch (error) {
    return `Error: ${error}`;
  }
}

export async function me() {
  try {
    const { jwt } = JSON.parse(getStorage("config"));
    const { data } = await axios.get(urlMe, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}

export async function login(username, password) {
  try {
    const data = await axios.post(`${url}/auth/login`, {
      username,
      password,
    });
    return data;
  } catch (error) {
    return { error };
  }
}

export function logout() {
  try {
    deleteStorage("config");
    return "ok";
  } catch (error) {
    return `Error: ${error}`;
  }
}
