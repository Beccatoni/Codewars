// https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript

async function sayJoke(apiUrl, jokeId){
    const data = await fetch(apiUrl);

    const jokes = await data.json();
    if(!jokes) throw new Error(`No jokes at url: ${apiUrl}`);

    const jokeById = jokes.find(joke => joke.id === jokeId);
    if(!jokeById) throw new Error(`No jokes found id: ${jokeId}`);

    return {
        saySetup: ()=> jokeById.setup,
        sayPunchLine: ()=> jokeById.punchLine
    }


}

console.log(sayJoke('https://api.api-ninjas.com/v1/jokes', 2));


// new way
/*
const sayJoke = (apiUrl, jokeId) =>{
    return fetch(apiUrl)
       .then(response => response.json())
       .then(({jokes}) => jokes ? jokes.find(joke => joke.id === jokeId) : Promise.reject(new Error(`No jokes at url: ${apiUrl}`)))
       .then(joke => joke? {saySetup: ()=> joke.setup, sayPunchLine: ()=> joke.sayPunchLine} : Promise.resolve(new Error(`No jokes found id: ${jokeId}`)))
    }


*/
