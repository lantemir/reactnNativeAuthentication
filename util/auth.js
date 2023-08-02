import axios from "axios";

const API_KEY = 'AIzaSyD3kRDDqVqTNCy8JANL4lUimWZxGWipnqY'

async function authenticate(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url,  {
        email: email,
        password: password,
        returnSecureToken: true
    });
     console.log(response.data);
     
     const token = response.data.idToken;

     return token; 
}

export function createUser(email, password) {

    return  authenticate('signUp', email, password);

    return token;

    // const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY, 
    // {
    //     email: email,
    //     password: password,
    //     returnSecureToken: true
    // }
    // );
}

export  function login(email, password){
    return authenticate('signInWithPassword', email, password)
}