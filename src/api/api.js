import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/'
})

// const principal = (token) => {
//   return { headers: { "Token": `${token}` } }
// }

export const usersAPI = {
  getUsers() {
    return instance.get(`users?page=1&count=6`)
      .then(response => {
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

export const registerAPI = {
  getToken() {
    return instance.get('token')
      .then(response => {
        return response.data
      })
  },
  getPositions() {
    return instance.get('positions')
      .then(response => {
        return response.data
      })
  },
  postUser(registerData, selectedPhoto, token) {
    let formData = new FormData();
    const phoneNumber = registerData.phone.split(' ').join('');

    formData.append('name', registerData.name);
    formData.append('email', registerData.email);
    formData.append('phone', phoneNumber);
    formData.append('position_id', registerData.id);
    formData.append('photo', selectedPhoto);

    return instance.post('users', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Token': token
      }
    })
      .then(response => {
        return response.data
      })
  }
}