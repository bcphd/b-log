let About = {
    render : async () => {
        let view =  /*html*/`
            <main id="main">
                <h1>About</h1>
                <p>Written in Go, Hugo is an open source static site generator available under the <a href="https://github.com/gohugoio/hugo/blob/master/LICENSE">Apache Licence 2.0.</a> Hugo supports TOML, YAML and JSON data file types, Markdown and HTML content files and uses shortcodes to add rich content. Other notable features are taxonomies, multilingual mode, image processing, custom output formats, HTML/CSS/JS minification and support for Sass SCSS workflows.</p>
                <p>Hugo makes use of a variety of open source projects including:</p>
                <ul>
                    <li><a href="https://github.com/yuin/goldmark">https://github.com/yuin/goldmark</a></li>
                    <li><a href="https://github.com/alecthomas/chroma">https://github.com/alecthomas/chroma</a></li>
                    <li><a href="https://github.com/muesli/smartcrop">https://github.com/muesli/smartcrop</a></li>
                    <li><a href="https://github.com/spf13/cobra">https://github.com/spf13/cobra</a></li>
                    <li><a href="https://github.com/spf13/viper">https://github.com/spf13/viper</a></li>
                </ul>
                <p>Hugo is ideal for blogs, corporate websites, creative portfolios, online magazines, single page applications or even a website with thousands of pages.</p>
                <p>Hugo is for people who want to hand code their own website without worrying about setting up complicated runtimes, dependencies and databases.</p>
                <p>Websites built with Hugo are extremelly fast, secure and can be deployed anywhere including, AWS, GitHub Pages, Heroku, Netlify and any other hosting provider.</p>
                <p>Learn more and contribute on <a href="https://github.com/gohugoio">GitHub</a>.</p>
            </main>
        `
        return view
    },
    after_render: async () => {}
        
}

export default About;