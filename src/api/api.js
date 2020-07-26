import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/'
})

export const usersAPI = {
  getUsers() {
    return instance.get(`users?page=1&count=6`)
    .then(response => {
      console.log(response)
      return response.data
    })
  },
  getNextUsers(nextUrl) {
    return instance.get(`${nextUrl}`)
    .then(response => {
      console.log('Next_User_RESPONSE', response)
      return response.data
    })
  }
}