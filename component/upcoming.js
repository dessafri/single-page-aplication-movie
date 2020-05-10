class upcoming extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render()
    }

    render() {
        fetch('')
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                let result = responseJson.results
                console.log(result)
                this.innerHTML = `
            <section class="recent con">
                <h3 style="margin-bottom: 25px;">Upcoming</h3>
                    <div class="row rowupcoming">
                        
                     </div>
            </section>
            `

                $.each(result, (i, data) => {
                    $('.rowupcoming').append(`
                        <div class="card col col-sm-3 col-md-2" style="border: none;">
                                <img src="http://image.tmdb.org/t/p/original/${data.poster_path}" style="width: 100%;">
                                <h5 class="card-title" style="margin-top: 10px;"><a href="">${data.title}</a></h5>
                        </div>
                    `)

                    if (i == 5) {
                        return false
                    }
                })
            })
    }
}

customElements.define('upcoming-film', upcoming)