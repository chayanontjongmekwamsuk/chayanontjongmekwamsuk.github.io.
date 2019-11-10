
let inputfile = document.getElementById('inputFile')
let imShow = document.getElementById('blah')

let imfile
inputfile.onchange = function(e) {
    imfile = inputfile.files[0]

    let fileReader = new FileReader()
    fileReader.readAsDataURL(imfile)
    fileReader.onload = function(e) {
        imShow.src=e.target.result;
    }
    
}
// console.log(imShow)

function sendData() {

    var formData = new FormData();

// formData.append("username", "Groucho");
// formData.append("accountnum", 123456); // number 123456 is immediately converted to a string "123456"

// HTML file input, chosen by user
formData.append("userfile", imfile);

// JavaScript file-like object
var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
var blob = new Blob([content], { type: "text/xml"});

formData.append("webmasterfile", blob);

var request = new XMLHttpRequest();
request.setRequestHeader('Authorization', "Client-ID <154eeb72d8312ae>")
request.open("POST", "https://api.imgur.com/oauth2/addclient");
request.send(formData);

  }


// var request = new XMLHttpRequest();

// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

// request.onload = function () {



//   // Begin accessing JSON data here

//   var data = JSON.parse(this.response);

//   console.log(data)

//   if (request.status >= 200 && request.status < 400) {

//     data.forEach(movie => {

//       const card = document.createElement('div');

//       card.setAttribute('class', 'card');



//       const h1 = document.createElement('h1');

//       h1.textContent = movie.title;



//       const p = document.createElement('p');

//       movie.description = movie.description.substring(0, 300);

//       p.textContent = `${movie.description}...`;



//       container.appendChild(card);

//       card.appendChild(h1);

//       card.appendChild(p);

//     });

//   } else {

//     const errorMessage = document.createElement('marquee');

//     errorMessage.textContent = `Gah, it's not working!`;

//     app.appendChild(errorMessage);

//   }

// }
// request.send();



