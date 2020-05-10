class movie extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render();
    }

    render() {
        fetch(`${this.getAttribute("api")}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                let movies = responseJson.results;
                let atribute = this.getAttribute("data");
                let title = ""
                if (atribute == "popular") {
                    title = "Top Popular"
                } else if (atribute == "upcoming") {
                    title = "Upcoming"
                } else if (atribute == "now_playing") {
                    title = "Now Playing"
                } else if (atribute == "trending") {
                    title = "Trending"
                }


                this.innerHTML = `
                <section class="recent con data" id="${atribute}Movie">
                    <h3 style="margin-bottom: 25px; cursor: pointer;">${title}</h3>
                        <div class="row" id="${atribute}" style="max-width: 100%;">
                            
                         </div>
                </section>
                
                `

                $.each(movies, (i, data) => {

                    $(`#${atribute}`).append(`
                    <div class="card col col-sm-4 col-md-3" style="border: none;">
                        <div style="width: 200px;" class="movie-list">
                            <img src="http://image.tmdb.org/t/p/original/${data.poster_path}" style="width: 200px; height: 300px;">
                            <h5 class="card-title movie-title-home" style="margin-top: 10px; margin-bottom:10px; font-size: 12px; cursor: pointer" id="movie-title" data="${data.id}" data-toggle="modal" data-target="#myModal">${data.title}</h5>
                        </div>
                    </div>
                    
                    
                    <style>
                    .see-more:hover{
                        opacity: .8;
                        font-size: 29px;
                    }
                    @media(min-width: 850px){
                        .movie-list{
                            width: 100px !important;
                        }
                        .movie-list img{
                            width: 100px !important;
                        }
                    }
                    
                    </style>
                    
                    
                    `)

                    if (i == 8) {
                        return false
                    }





                })

                $('#popularMovie').addClass("d-md-none")
                $('#popularMovie').addClass("d-sm-block")
                $('#popularMovie').removeClass("recent")

                $('.movie-title-home').on('click', function (e) {
                    let data = $(this).attr("data")
                    console.log(data)
                    fetch(`https://api.themoviedb.org/3/movie/${data}?api_key=5098a9e3ca4920eb139726beda7dbdf6`)
                        .then(response => {
                            return response.json();
                        })
                        .then(responseJson => {
                            let response = responseJson
                            let genres = response.genres
                            console.log(response)

                            console.log("sukses")
                            setTimeout(() => {
                                $('#modal-body').html(`
                                <div class="container-fluid" style="margin-left: -1px;">
                                    <div class="row">
                                        <div class="col col-md-4">
                                        <img src="http://image.tmdb.org/t/p/original/${response.poster_path}" style="width: 250px; height: 100%; margin-left: -15px;">
                                        </div>

                                        <div class="col col-md-8" style="color: black;">
                                            <div class="detail" style="margin-top: 10px;">
                                                <h3 style="font-size: 22px;">${response.title}</h3>
                                                <span>Release Date : ${response.release_date}</span>
                                                <div class="overview" style="margin-top: 18px;">
                                                <h5>Overview</h5>
                                                <p style="font-size: 14px;">${response.overview}</p>
                                                </div>
                                                <div class="review">
                                                </div>
                                                <div class="genre" style="margin-bottom: 10px;">
                                                    <h5>Genre</h5>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>                                                           
                                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal" style="border-radius: 0; margin-left: -1px;">Close</button>

                                `)
                                if (genres.length != 0) {

                                    $.each(genres, (i, data) => {
                                        $('.genre').append(`

                                        <span style="margin-top: -5px;">${data.name}</span>
                                    `)

                                    })
                                }
                            }, 300);

                        })

                    e.preventDefault()

                })



            })
            .catch(error => {
                console.log(error)
            })
    }
}

customElements.define('list-movies', movie);