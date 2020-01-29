let About = {
    render: async () => {
        let view =  /*html*/`
            <main id="main">
                <h1>About</h1>
                <p>Written using just html/js/css, Brian's Log is an open source design pattern/framework available under the <a href="https://github.com/bcphd/b-log/blob/master/LICENSE" target="_blank">Apache Licence 2.0.</a> Brian's Log supports HTML, CSS, JS and JSON along with Markdown and HTML content files and uses shortcodes to add rich content. Other notable features are taxonomies, multilingual mode, image processing, custom output formats, HTML/CSS/JS minification and support for Sass SCSS workflows.</p>
                <p>Brian's Log makes use of a variety of open source projects including:</p>
                <ul>
                    <li><a href="#">ADD sources here</a></li>
                    <li><a href="#">ADD sources here</a></li>
                    <li><a href="#">ADD sources here</a></li>
                    <li><a href="#">ADD sources here</a></li>
                </ul>
                <p>Brian's Log is ideal for blogs, corporate websites, creative portfolios, online magazines, single page applications or even a website with thousands of pages.</p>
                <p>Brian's Log is for people who want to hand code their own website without worrying about setting up complicated runtimes, dependencies and databases.</p>
                <p>Websites built with Brian's Log are extremelly fast, secure and can be deployed anywhere including, AWS, GitHub Pages, Heroku, Netlify and any other hosting provider.</p>
                <p>Learn more and contribute on <a href="https://github.com/bcphd/blog">GitHub</a>.</p>
            </main>
        `
        return view
    },
    after_render: async () => { }

}

export default About;