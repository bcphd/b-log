let PM = {
    render: async () => {
        let view =  /*html*/`
            <main id="main">
                <h1>Project Management</h1>
                <p>Welcome to Project Management, for my course CSC420</p>
                <p>PM has lots of resources:</p>
                <ul>
                    <li><a href="https://docs.google.com/document/d/15EtT3USpaZYWGSVhNBW2zqaHJv6ICg4ScFR0yqyppS4" target="_blank">Syllabus</a></li>
                    <li><a href="#">ADD sources here</a></li>
                    <li><a href="#">ADD sources here</a></li>
                    <li><a href="#">ADD sources here</a></li>
                </ul>
                <p>Brian's Log for Project Management is ideal for startups, classes, and enterprise learning.</p>
                <p>PM is for people who want hands on learning with simple and lean techniques.</p>
            </main>
        `
        return view
    },
    after_render: async () => { }

}

export default PM;