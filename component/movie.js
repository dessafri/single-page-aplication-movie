import "./list-movie.js"

class movieList extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        console.log("connected")
        this.render()
    }

    // set data(result) {
    //     this.data = result
    //     this.render();

    // }

    render() {
        let result = this.data
        let title = this.title
        // console.log(result)
        this.innerHTML = `
        <h3 style="margin-top:20px; margin-bottom: 10px; margin-left: 50px">List ${title}</h3>
        <div class="row" id="movieList" style="margin-left: 50px;">               
        </div>
        `
        const movieElement = $('#movieList');
        $.each(result, (i, result) => {
            const listMovie = document.createElement('list-movie');
            listMovie.data = result;
            movieElement.append(listMovie)

        })


        $(`#movies`).append(`
        <div class="modal fade bd-example-modal-lg" id="myReview" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content" id="modal-review">
                    ...
                </div>
            </div>
        </div>
            
   `)

        $('.movie-title-review').on('click', function (e) {
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
                        $('#modal-review').html(`
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

    }

}

customElements.define("movie-list", movieList);