document.addEventListener('DOMContentLoaded', function (){

let lyricsGenerator = document.getElementById('lyrics-generator')




lyricsGenerator.addEventListener('click', function(){

  fetch("https://taylorswiftapi.onrender.com/get")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    showLyrics(data);
    changeColorAndCover(data.album);
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });

});



});

function showLyrics (data) {
  let lyricsContainer = document.getElementById('lyrics-container')
  lyricsContainer.innerHTML = `<div class="card">
  <div class="card-header">
  Album: ${data.album}
  </div>
  <div class="card-body">
  <blockquote class="blockquote mb-0">
    <p>"${data.quote}"</p>
    <footer class="blockquote-footer">Song: ${data.song}</footer>
  </blockquote>
  </div>
  </div>`

}

function changeColorAndCover (album){
  let header = document.getElementById('page-header')
  let lyricsGenerator = document.getElementById('lyrics-generator')
  let cover = document.getElementById('album-cover')
  if (album=="Taylor Swift"){
    header.style.backgroundColor = '#a5c9a5';
    lyricsGenerator.style.backgroundColor ='#a5c9a5';
    cover.src = 'img/Taylor Swift.png';
  } else if (album=="Fearless"){
    header.style.backgroundColor = '#efc180';
    lyricsGenerator.style.backgroundColor ='#efc180';
    cover.src = 'img/fearless.jpg';
  } else if (album=="Speak Now"){
    header.style.backgroundColor = '#8a2c7c';
    lyricsGenerator.style.backgroundColor ='#8a2c7c';
    cover.src = 'img/speak now.jpeg';
  } else if (album=="Red"){
    header.style.backgroundColor = '#b22234';
    lyricsGenerator.style.backgroundColor ='#b22234';
    cover.src = 'img/red.jpg';
  } else if (album=="1989"){
    header.style.backgroundColor = '#b5e5f8';
    lyricsGenerator.style.backgroundColor ='#b5e5f8';
    cover.src = 'img/1989.jpg';
  } else if(album=="Lover"){
    header.style.backgroundColor = '#f7b0cc';
    lyricsGenerator.style.backgroundColor ='#f7b0cc';
    cover.src = 'img/lover.png';
  } else if (album=="Reputation"){
    header.style.backgroundColor = 'black';
    lyricsGenerator.style.backgroundColor ='black';
    cover.src = 'img/reputation.png';
  } else if(album=="Folklore"){
    header.style.backgroundColor = '#cdc9c1';
    lyricsGenerator.style.backgroundColor ='#cdc9c1';
    cover.src = 'img/folklore.jpeg';
  } else if (album=="Evermore"){
    header.style.backgroundColor = '#c5ac90';
    lyricsGenerator.style.backgroundColor ='#c5ac90';
    cover.src = 'img/evermore.jpeg';
  } else if (album=="Midnights"){
    header.style.backgroundColor = '#4A5E94';
    lyricsGenerator.style.backgroundColor ='#4A5E94';
    cover.src = 'img/midnights.jpeg';
  } else if (album=="The Tortured Poets Department"){
    header.style.backgroundColor = '#746f70';
    lyricsGenerator.style.backgroundColor ='#746f70';
    cover.src = 'img/ttpd.jpg';
  }
  applyFadeIn();
}

function applyFadeIn (){
  let cover = document.getElementById('album-cover')
  cover.classList.remove("fade-in");
  void cover.offsetWidth;  
  cover.classList.add("fade-in");
};

//API:
//MIT License

//Copyright (c) 2020 Mitanshi Kshatriya

//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.