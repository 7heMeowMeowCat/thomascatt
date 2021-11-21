try {
    var likePost = window.likePost
    var request = window.request
    var csrf = window.csrf
    var data = window.data
    var csrf_field = window.csrf_field
    
    
    
    function CreatePostSection() {
        return (
            <div className="card">
                <div className="card-header">
                        Logged in as <b>{data.name}</b><a href="logout" style={{float: "right"}}><i className="fa fa-sign-out"></i> Logout</a> <sub>mce</sub>
                </div>

                <div className="card-body">
                    <form action="/" method="POST">
                        <input type="hidden" name="_token" value={csrf}/>
                        <input type="hidden" name="action" value="submit"/>
                        <div className="input-group">
                            <textarea required className="form-control" rows="1" name="content" placeholder="Post something..." style={{resize: "none"}}></textarea>
                            <button className="btn btn-outline-primary group-append">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    
    
    function loadPosts(callback) {
        request({
            action: "loadPosts"
        }, (callback))
    }

    class Posts extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                content: (
                    <Loading text="Fetching Posts..."/>              
                ),
                postsLoaded: false
            }
            this.setPosts = this.setPosts.bind(this)
            loadPosts(this.setPosts)
        }

        setPosts(posts) {
            this.setState({content: <div>{posts.map(a => <Post id={a.id} key={a.id} author={a.author} content={a.content} likes={a.likes == ''  ? [] : JSON.parse(a.likes)}/>)}</div>, postsLoaded: true})
        }
        
        render() {
            return <div>{this.state.content}</div>
        }
    }
    
    ReactDOM.render(<div>
        <CreatePostSection/>
        <br/><h2>Your Feed</h2>
        <div id="posts-section">
            <Posts/>
        </div>
    </div>, document.getElementById('root'))
} catch(e) {
    ReactDOM.render(<div>
        HOly shit error lmao<br/>
        {e}
        <sup>sigma balls :)</sup>
    </div>, document.getElementById('root'))
}