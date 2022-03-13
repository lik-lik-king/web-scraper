// This project is using the "Express" package which is a backend framework for node.js. The Express philosophy is to provide small, robust tooling for HTTP servers, making it a great solution for single page applications, websites, hybrids, or public HTTP APIs. Express does not force you to use any specific ORM or template engine. With support for over 14 template engines via Consolidate.js, you can quickly craft your perfect framework.

// This project is using the package "Cheerio" which picks out "HTML" elements on a web page. It works by passing markup and provides an API by traversing and manipulating data structure. "Cheerio" select implementation, is similar to JQuery. It does not produce a visual rendering, apply CSS, load external resources, or execute JavaScript which is common for a SPA (single page application).

// This project is using "Axios" which is a promise based HTTP client for the browser and node.js. "Axios" essentially makes it easy to send HTTP requests to rest endpoints and perform crud operations. This is simply used for getting, posting, put, and deleting data. It executes on both client and server side, which makes an API request. It does the task to produce the result and specifies easier concepts to read and debug.

// Ive also run a "start" script on package.json to listen out for any changes on the js file.

// Below I need to require all of the packages I have installed. This allows us to use all of the packages needed.
// I also have the PORT 8000 to run on the server aka localhost 8000 and it listens out for PORT 8000 for any changes that are made
const PORT = 8000
const axios = require("axios")
const cheerio = require("cheerio")
const express = require("express")

// Below I am calling the "express" pkg and adding it to the variable "app" in order to now use one of many great features.

const App = express()

//When using axios, it works by passing through a URL and visiting the URL and getting the response from it. And in this case it gets the response data and saves it as HTML that I will work with.
// I am passing through the URL "https://wwww.example.com/" and saving it in the variable url
const url = "https://www.internetingishard.com/"
axios(url)
// Now I am going to be using an asynchronous JavaScript method called chaining. Where it will return a promise. And once the promise has been resolved then I can get the response of whats come back. 
// In this case I am getting the response data and saving as HTML.
.then(response => {
    const html = response.data
    // console.log(html)

    // Now I am using "cheerio" to pick out specific elements and I'm using the "load" method to pass through the HTML and load it on to my terminal and saving it as "$(dollar sign)"
    const $ = cheerio.load(html)

// Here is where the article pieces are going to be stored that I pushed from my 
const articles =[]

    // When scraping through the elements make sure you select the correct elements corresponding DOM selector.
    // In this example we are looking for the class name of ".main-nav"
    // Then we add the each method with a callback function that will grab any class like '' 
    $(".subheading", html).each(function(){
        // Here is where I am grabbing the text and the href inside of the class 
   const title = $(this).text()
    const url = $(this).find("p").attr("href")
    // Here I am pushing my title and url to the articles array
    articles.push({
        title,
        url
        })
    })
    console.log(articles)
}).catch(err => console.log(err))

// Below I have added the "listen" callback function "PORT" which is 8000. 
App.listen(PORT, () => console.log(`server running on PORT ${PORT}`))




