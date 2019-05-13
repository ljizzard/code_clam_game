const baseURL = 'http://localhost:3000/api/creatures/'

export default {
  getCreatures(){
    return fetch(baseURL)
    .then(res => res.json())
  },
