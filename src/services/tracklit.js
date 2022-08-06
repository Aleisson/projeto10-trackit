import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';


function postCad(user){
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, user);
    return promise;
}

function postLogin(user){
    const promise = axios.post(`${BASE_URL}/auth/login`, user);
    return promise;
}


export {postCad, postLogin }

// function postHabit(body, header){
//     const promise = axios.post(`${BASE_URL}/habits`, body, header);
//     return promise;
// }

// function getHabit(body){
//     const promise = axios.get(`${BASE_URL}/habits`);
//     return promise;
// }

// function deleteHabit({idHabit, {headers} })


// axios.delete(URL, {
//     headers: {
//       Authorization: authorizationToken
//     },
//     data: {
//       source: source
//     }
//   })

// const headers = {
//     'Authorization': authorizationToken
//   }
//   const data = {
//     user_id: 32
//   }
  
//   axios.delete(API_URL, {headers, data})

// function postBooking(body) {
//     const promise = axios.post(`${BASE_URL}/seats/book-many`, body);
//     return promise;
//   }
  


// function getMovies() {
//     const promise = axios.get(`${BASE_URL}/movies`);
//     return promise;
// }



// function getShowtimes(movieId) {
//     const promise = axios.get(`${BASE_URL}/movies/${movieId}/showtimes`);
//     return promise;
// }

