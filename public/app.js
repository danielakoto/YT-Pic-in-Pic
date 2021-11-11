// const makeVid = document.getElementById('makeVid');
const clear = document.getElementById('clear');
const thingsList = document.getElementById('thingsList');

var form = document.getElementById("form");
form.addEventListener('submit', makeVid);

function makeVid(event) {
    event.preventDefault();
    const input = document.getElementById('link')
    let l = document.getElementById('link').value;
    let link = l.substring(16, 29);
    console.log(link);
    thingsList.innerHTML = `<center>
                        <iframe width="300px" height=180px"" src="https://www.youtube.com/embed/${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </center>`
    input.value = ''
}
                  
clear.onclick = () => {
    thingsList.innerHTML = ``;
}
