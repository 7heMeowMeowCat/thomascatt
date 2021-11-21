
try {    
    var post_id = parseInt(document.querySelector('#post_id').innerText)
    document.querySelector('#post_id').outerHTML = ""

    
    ReactDOM.render(<div>
        <Post fetch={post_id} comments={true}/>
    </div>, document.getElementById('root'))
} catch(e) {
    ReactDOM.render(<div>
        HOly shit error lmao<br/>
        {e}
        <sup>sigma balls :)</sup>
    </div>, document.getElementById('root'))
}