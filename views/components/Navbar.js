import Utils        from '/js/Utils.js'

let Navbar = {
    render: async () => {
        let view =  /*html*/`
          <div id="nav-border" class="container">
            <nav id="nav" class="nav justify-content-center">
                <a class="nav-link" href="/#/"><i data-feather="home"></i> Home</a>
                <a class="nav-link" href="/#/blog"><i data-feather="edit"></i> Blog</a>
                <a class="nav-link" href="/#/about"><i data-feather="smile"></i> About</a>
            </nav>
          </div>
        `
        return view
    },
    after_render: async () => {
      feather.replace();

      // Get the parsed URl from the addressbar
      let request = Utils.parseRequestURL()
      let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
      let hrefSearch = "a[href='/#" + parsedURL + "']";
      let els = document.querySelectorAll(hrefSearch);

      if( els.length > 0 ) els[0].classList.add('nav-link-active');
    }

}

export default Navbar;