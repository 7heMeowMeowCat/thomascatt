
try {    
    var post_id = parseInt(document.querySelector('#post_id').innerText)
    document.querySelector('#post_id').outerHTML = ""

    
    ReactDOM.render(<App app={<div>
        <Post fetch={post_id} comments={true}/>
    </div>}/>, document.getElementById('root'))
    var reportError = window.reportError
} catch(e) {
    reportError(e)
}