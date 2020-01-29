// --------------------------------
//  Define Data Sources
// --------------------------------

let getPostsList = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts`, options)
        const json = await response.json();
        // console.log(json)
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}


let Home = {
    render: async () => {
        //let posts = await getPostsList()
        let view =  /*html*/`
            <main id="main">
                <div id="home-jumbotron" class="jumbotron text-center">
                    <h1>Brian's Log</h1>
                    <p class="font-125">Welcome to Brian's Log - a place where I log details on a topics. Have a look around.</p>
                </div>
            </main>

            <h1>Tags</h1>

            <p>
                <a class="btn btn-outline-dark font-125" href="/#/blog">
                    <span class="badge badge-dark">4</span> The making of Brian's Log
                </a>
            </p>

            <p>
                <a class="btn btn-outline-dark font-125" href="/#/pm">
                    <span class="badge badge-dark">1</span> Project management (CSC420)
                </a>
            </p>

            <p>
                <a class="btn btn-outline-dark font-125" href="/#/js">
                    <span class="badge badge-dark">1</span> html/js/css
                </a>
            </p>

            <p>
                <a class="btn btn-outline-dark font-125" href="/#/markdown">
                    <span class="badge badge-dark">2</span> markdown
                </a>
            </p>

            <p>
                <a class="btn btn-outline-dark font-125" href="/#/security">
                    <span class="badge badge-dark">1</span> security
                </a>
            </p>

            <p>
                <a class="btn btn-outline-dark font-125" href="/#/nodejs">
                    <span class="badge badge-dark">1</span> nodejs
                </a>
            </p>

            <p>
                <a class="btn btn-outline-dark font-125" href="/#/dotnet">
                    <span class="badge badge-dark">1</span> .NET/C#
                </a>
            </p>

            <p>
                <a class="btn btn-outline-dark font-125" href="/#/azure">
                    <span class="badge badge-dark">1</span> Azure
                </a>
            </p>

        </main>

        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;