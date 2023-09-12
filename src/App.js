import React from "react";
import { useEffect } from "react";

// Key: 74cfd396

const API_URL = "http://www.omdbapi.com/?apikey=74cfd396&"


const App = () => { 

    const searchMovie = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search)
    }

    useEffect(() => {
        searchMovie("Spiderman")
    },[]);


    return (
        <h1>App</h1>
    );
 }



 export default App;