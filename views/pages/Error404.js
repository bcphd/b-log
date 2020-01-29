let Error404 = {

    render : async () => {
        let view =  /*html*/`
        <main id="main">
            <h1>404 Error</h1>
            <p>page not found</p>
        </main>
        `
        return view
    }
    , after_render: async () => {
    }
}
export default Error404;