import "./navbar.js";
import "./movies.js";
import "./most-popular.js";
import "./movie.js"



const main = () => {

    const movie = $('#movies')

    const home = () => {
        $("#movies").html("")
        $("#main").html(`
        <most-popular></most-popular>
                <list-movies data="popular"
                    api="https://api.themoviedb.org/3/movie/popular?api_key=5098a9e3ca4920eb139726beda7dbdf6">
                </list-movies>
                <list-movies data="upcoming"
                    api="https://api.themoviedb.org/3/movie/upcoming?api_key=5098a9e3ca4920eb139726beda7dbdf6">
                </list-movies>
                <list-movies data="now_playing"
                    api="https://api.themoviedb.org/3/movie/now_playing?api_key=5098a9e3ca4920eb139726beda7dbdf6">
                </list-movies>
                <list-movies data="trending"
                    api=" https://api.themoviedb.org/3/trending/all/day?api_key=5098a9e3ca4920eb139726beda7dbdf6">
                </list-movies>
        `)
        $(`#main`).append(`
        <div class="modal fade bd-example-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content" id="modal-body">
                    ...
                </div>
            </div>
        </div>
            
   `)
    }

    $('.nav-link, .navbar-brand').on('click', function () {

        let innerHtml = $(this).html();
        console.log(innerHtml)
        $('#main').html("")

        if (innerHtml.toLowerCase() == "movie") {
            $('#movies').html("")
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=5098a9e3ca4920eb139726beda7dbdf6&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
                .then(response => {
                    return response.json();
                })
                .then(responseJson => {
                    let result = responseJson.results
                    const movieList = document.createElement("movie-list")
                    movieList.data = result
                    movieList.title = innerHtml;
                    movie.append(movieList)
                })

        } else if ((innerHtml.toLowerCase() == "now playing")) {
            $('#movies').html("")
            setTimeout(() => {
                fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=5098a9e3ca4920eb139726beda7dbdf6')
                    .then(response => {
                        return response.json();
                    })
                    .then(responseJson => {
                        let result = responseJson.results
                        const movieList = document.createElement("movie-list")
                        movieList.data = result
                        movieList.title = innerHtml;
                        movie.append(movieList)
                    })
            }, 300);
        } else if ((innerHtml.toLowerCase() == "trending")) {
            $('#movies').html("")
            setTimeout(() => {
                fetch('https://api.themoviedb.org/3/trending/all/day?api_key=5098a9e3ca4920eb139726beda7dbdf6')
                    .then(response => {
                        return response.json();
                    })
                    .then(responseJson => {
                        let result = responseJson.results
                        const movieList = document.createElement("movie-list")
                        movieList.data = result
                        movieList.title = innerHtml;
                        movie.append(movieList)
                    })
            }, 300);
        } else if ((innerHtml.toLowerCase() == "upcoming")) {
            $('#movies').html("")
            setTimeout(() => {
                fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=5098a9e3ca4920eb139726beda7dbdf6')
                    .then(response => {
                        return response.json();
                    })
                    .then(responseJson => {
                        let result = responseJson.results
                        const movieList = document.createElement("movie-list")
                        movieList.data = result
                        movieList.title = innerHtml;
                        movie.append(movieList)
                    })
            }, 300);
        } else {
            $('#movies').html("")
            home();
        }



    });

    $(`#main`).append(`
        <div class="modal fade bd-example-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content" id="modal-body">
                    ...
                </div>
            </div>
        </div>
            
   `)


    $("input").keyup(function (e) {
        // if (e.keyCode === 13) {
        let val = $("#search-box").val();
        console.log(val)
        if (val.length != 0) {
            $("#main").html("")
            setTimeout(() => {
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=5098a9e3ca4920eb139726beda7dbdf6&query=${val}`)
                    .then(response => {
                        return response.json()
                    })
                    .then(responseJson => {

                        if (responseJson.total_results == 0) {

                        } else {
                            $("#movies").html("")
                            let result = responseJson.results
                            const movieList = document.createElement("movie-list")
                            movieList.data = result
                            movieList.title = val;
                            movie.append(movieList)
                        }
                    })
            }, 100);
        } else {
            home();
        }
        // }
    })






}

main();