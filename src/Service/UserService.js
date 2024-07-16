import axios from "axios";

export function InsertUsers(user) {
  return axios.post("http://localhost:5000/user", user);
}

export function GetUsers() {
 return axios.get(`http://localhost:5000/user`);
}

export function login(user) {
  return axios.post(`http://localhost:5000/login`,user);
 }
