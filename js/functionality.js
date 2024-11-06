

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
    changeColor(data.album);
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

function changeColor (album){
  let header = document.getElementById('page-header')
  let lyricsGenerator = document.getElementById('lyrics-generator')
  if (album=="Taylor Swift"){
    header.style.backgroundColor = '#a5c9a5';
    lyricsGenerator.style.backgroundColor ='#a5c9a5';
  } else if (album=="Fearless"){
    header.style.backgroundColor = '#efc180';
    lyricsGenerator.style.backgroundColor ='#efc180';
  } else if (album=="Speak Now"){
    header.style.backgroundColor = '#8a2c7c';
    lyricsGenerator.style.backgroundColor ='#8a2c7c';
  } else if (album=="Red"){
    header.style.backgroundColor = '#b22234';
    lyricsGenerator.style.backgroundColor ='#b22234';
  } else if (album=="1989"){
    header.style.backgroundColor = '#b5e5f8';
    lyricsGenerator.style.backgroundColor ='#b5e5f8';
  } else if(album=="Lover"){
    header.style.backgroundColor = '#f7b0cc';
    lyricsGenerator.style.backgroundColor ='#f7b0cc';
  } else if (album=="Reputation"){
    header.style.backgroundColor = 'black';
    lyricsGenerator.style.backgroundColor ='black';
  } else if(album=="Folklore"){
    header.style.backgroundColor = '#cdc9c1';
    lyricsGenerator.style.backgroundColor ='cdc9c1';
  } else if (album=="Evermore"){
    header.style.backgroundColor = '#c5ac90';
    lyricsGenerator.style.backgroundColor ='#c5ac90';
  } else if (album=="Midnights"){
    header.style.backgroundColor = '#4A5E94';
    lyricsGenerator.style.backgroundColor ='#4A5E94';
  } else if (album=="The Tortured Poets Department"){
    header.style.backgroundColor = '#746f70';
    lyricsGenerator.style.backgroundColor ='#746f70';
  }
}