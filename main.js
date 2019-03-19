const url = "http://www.omdbapi.com/?i=tt3896198&apikey=6faa8fa5";
const card = document.getElementById('card');

const getData = () => {

    fetch(url)
        .then(resp => {
            return resp.json();
        })

        .then(function (data) {
            console.log(data);
            showData(data)
        })

        .catch(error => error)
}

window.onload = getData;
