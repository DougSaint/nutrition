const API_KEY = 'aa2e133d8d9af4942f86e2665541e42a';
const API_ID = '9b017fd1';
const  BASE_URL = 'https://api.edamam.com/api/nutrition-data';


export default function fetchApi(query){
    const REQ_URL = `${BASE_URL}?app_id=${API_ID}&app_key=${API_KEY}&nutrition-type=cooking&ingr=${query}`
    return fetch(REQ_URL).then((resp) => resp.json())

}