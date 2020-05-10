class Mycomponent extends HTMLElement {
  constructor() {
    super();
  }

  // set movies(movie) {
  //     this.movie = movie
  // }



  connectedCallback() {
    this.render()
  }

  tes() {
    alert("sukes")
  }

  render() {

    this.innerHTML = `

        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand col col-md-2" href="#">MovieLur</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav col col-md-8">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Movie</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Upcoming</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Now Playing</a>
            </li>
          </ul>
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style="height: 25px; width: 80%;" id="search-box">
          <a href=""><i class="fas fa-search" id="btn-search" style="margin-left: 5px; margin-top: 5px; display: block;"></i></a>
        </div>
        </nav>
        `
  }
}
customElements.define('my-navbar', Mycomponent);