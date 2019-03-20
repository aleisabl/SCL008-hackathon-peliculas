const card = document.getElementById('card');
const url = 'http://www.omdbapi.com/?apikey=6faa8fa5&t=';

const getData = (condition) => {
    fetch(url + condition)
    .then(resp => { return resp.json(); })
    .then(data => {


        card.innerHTML +=

                    `   
                    <div class="card" style="width: 13rem;">
                    <img class="card-img-top" src="${data.Poster}" alt="poster">
                    <div class="card-body">
                    <p class="card-text">${data.Genre}|${data.Runtime}|${data.Released}</p>
                    <h5 class="card-title"></h5>
                    <p class="card-text">${data.Title}</p>
                    <a href="#" class="btn btn-secondary">Ver más</a>
                    </div>
                    `

            /* data.forEach(element => {
                card.innerHTML +=

                    `   
                    <div class="card" style="width: 13rem;">
                    <img class="card-img-top" src="${element.Poster}" alt="poster">
                    <div class="card-body">
                    <p class="card-text">${element.Genre}|${element.Runtime}|${element.Released}</p>
                    <h5 class="card-title"></h5>
                    <p class="card-text">${element.Title}</p>
                    <a href="#" class="btn btn-secondary">Ver más</a>
                    </div>
                    `
            })         */
                
            });
        }


        document.getElementById('search-btn').addEventListener('click', () => {
            let condition = document.getElementById('search').value;
            document.getElementById('screen1').setAttribute('hidden', true);
            getData(condition)
            
        })

//window.onload = getData(); 