let Bottombar = {
    render: async () => {
        let view =  /*html*/`
          <footer id="footer" class="mt-auto text-center text-muted">
            <div class="container">
                Made with <a href="https://bcphd.com/">b'log</a> &amp; <a
                  href="https://github.com/bcphd/b-log">Get Code</a>
            </div>
          </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;