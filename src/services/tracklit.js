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

function postHabit(body, token){
    const promise = axios.post(`${BASE_URL}/habits`, body,{ headers: {"Authorization" : `Bearer ${token}`} });
    return promise;
}

function getHabit(token){
    const promise = axios.get(`${BASE_URL}/habits`,{ headers: {"Authorization" : `Bearer ${token}`} });
    return promise;
}

function deleteHabit(idHabit,token){
    const promise = axios.get(`${BASE_URL}/habits/${idHabit}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    return promise;
}

function todayHabit(token){
    const promise= axios.get(`${BASE_URL}/habits/today`,{ headers: {"Authorization" : `Bearer ${token}`} });
    return promise;
}

function checkHabit(idHabit,token){
    const promise = axios.get(`${BASE_URL}/habits/${idHabit}/check`,{ headers: {"Authorization" : `Bearer ${token}`} });
    return promise;
}

function uncheckHabit(idHabit,token){
    const promise = axios.get(`${BASE_URL}/habits/${idHabit}/check`,{ headers: {"Authorization" : `Bearer ${token}`} });
    return promise;
}


function getHistory(token){
    const promise = axios.get(`${BASE_URL}/habits/history/daily`,{ headers: {"Authorization" : `Bearer ${token}`} });
    return promise;
}

export {postCad, postLogin, postHabit, getHabit, deleteHabit, todayHabit, checkHabit, uncheckHabit, getHistory}





    