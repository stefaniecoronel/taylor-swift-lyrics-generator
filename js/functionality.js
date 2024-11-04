

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

