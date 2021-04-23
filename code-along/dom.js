let pageTitleElement = document.querySelector(`.page-title`)

// console.log(pageTitleElement)

// Modify title to movies to watch
pageTitleElement.innerHTML = `Movies to Watch`

// find the movies
let movieElements = document.querySelectorAll(`.movies-to-watch li`)

console.log(movieElements)

// for (let i = 0; i < movieElements.length; i++) {

//     let movieElement = movieElements[i]
//     // console.log(movieElement)

    


// }

// Store a reference for movie list

let movielist = document.querySelector(`.movies-to-watch`)


movielist.insertAdjacentHTML(`beforeend`,`

<li>The Martian</li>
<li>Anchorman</li>`)