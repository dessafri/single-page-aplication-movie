class popular extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }



    render() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5098a9e3ca4920eb139726beda7dbdf6`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                let result = responseJson.results[0]
                this.innerHTML = `
                    <div class="jumbotron mt-3 d-md-block d-sm-none" style="background-image: url('http://image.tmdb.org/t/p/original/${result.backdrop_path}'); background-size: cover; width: 100%; height: 350px;">
                        <div class="container">
                            <h2 style="font-weight: bold;">Most Popular</h2>
                            <h5>${result.title}</h5>
                            <p>
                            ${result.overview}
                            </p>
                            <p><span><h5>Release Date ${result.release_date}</span></p>
                        </div>
                    </div>
                    `

            })
            .catch(error => {
                console.log(error)
            })






    }
}
customElements.define('most-popular', popular);