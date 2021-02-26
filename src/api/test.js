import { get, post } from '@/plugins/axios'

export const testGet_api = () => {
  return get(`http://jsonplaceholder.typicode.com/users`)
}

export const testPost_api = () => {
  return post(`http://jsonplaceholder.typicode.com/users`)
}