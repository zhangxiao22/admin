import axios from 'axios'
var instance = axios.create({
  headers: {'content-type': 'application/x-www-form-urlencoded'}
});
let base = ''

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data) }

export const reqSaveUserProfile = params => { return axios.post(`${base}/user/profile`, params).then(res => res.data) }

export const reqGetUserList = params => { return axios.get(`${base}/user/list`, { params: params }) }

export const reqGetBookListPage = params => { return axios.get(`${base}/book/list`, { params: params }) }

export const reqDeleteBook = params => { return axios.get(`${base}/book/delete`, { params: params }) }

export const reqEditBook = params => { return axios.get(`${base}/book/edit`, { params: params }) }

export const reqBatchDeleteBook = params => { return axios.get(`${base}/book/batchdelete`, { params: params }) }

export const reqAddBook = params => { return axios.get(`${base}/book/add`, { params: params }) }

// export const leftMenu = () => { return axios.get('http://192.168.9.101:8080/emro_boss/staff/auth') }

export const menuTreeData = () => { return instance.get('http://192.168.9.78:8080/emro_boss/loginmenu/getMenuTreeData') }




