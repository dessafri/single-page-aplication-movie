class listMovie extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // console.log("list movie")
        this.render();
    }

    // set data(result) {
    //     this.data = result;
    // }


    render() {
        let movie = this.data;
        // console.log(movie)
        // console.log("")
        this.innerHTML = `
        <div class="card col col-sm-4 col-md-3"
        style="border: none; background: none;">
            <div style = "width: 200px;"class="movie-list" >
                <img src="http://image.tmdb.org/t/p/original/${movie.poster_path}"style="width:200px; height: 300px;" >
                <h5 class = "card-title movie-title-review" id="movieTitleReview" style="margin-top: 10px; margin-bottom:10px; font-size:12px; cursor: pointer;" data="${movie.id}" data-toggle="modal" data-target="#myReview">${movie.title}</h5>
            </div> 
        </div>


            <style>
                @media(min - width: 850 px) {
                .movie - list {
                        width: 100 px!important;
                    }
                    .movie - list img {
                        width: 100 px!important;
                    }
                }

            </style>
            `

        
    }
}
customElements.define('list-movie', listMovie);