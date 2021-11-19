const { data, post } = require("jquery")

try {
    
    
    class Post extends React.Component {
        static defaultProps = {
            id: 0,
            author: '[unknown]',
            content: "Failed to load post.",
            likes: [],
        }

        constructor(props) {
            super(props)
            this.state = {
                liked: this.props.likes.includes(window.data.name),
                likes: this.props.likes
            }
            this.togglePostLike = this.togglePostLike.bind(this)
        }

        togglePostLike() {
            var likesToSet = this.state.likes
            if (!this.state.liked  == true) likesToSet.push(window.data.name)
            else likesToSet = likesToSet.filter(a => a != window.data.name)
            this.setState({liked: !this.state.liked, likes: likesToSet})

            likePost(this.props.id, !this.state.liked)
        }

        render() {
            return (
                <div className={"card post "+(this.props.author == window.data.name ? "ownpost" : "")}>
                    <div className="card-header">
                        {this.props.author == window.data.name ? <b>Your Post</b> : <span>Posted by <b>{this.props.author}</b></span>}
                    </div>
                    <div className="card-body">
                        <p style={{fontSize: "24px"}}>{this.props.content}</p>
                        <hr/>
                        <button className={"btn btn-sm " + (this.state.liked ? "btn-primary" : "btn-outline-primary")} onClick={this.togglePostLike}>
                            <i className="fa fa-thumbs-up"></i>
                            &nbsp;{this.state.likes !== undefined ? this.state.likes.length : 0}
                        </button>
                        <a href={"posts/" + (this.props.id)} style={{float: "right"}} className="primary-link">
                            View Comments
                        </a>
                    </div>
                </div>        
            )
        }
        
    }
    
    function CreatePostSection() {
        return (
            <div className="card">
                <div className="card-header">
                        Logged in as <b>{window.data.name}</b><a href="logout" style={{float: "right"}}><i className="fa fa-sign-out"></i> Logout</a> <sub>mce</sub>
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
        fetch('/', {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrf,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: "loadPosts"
            }),
        }).then(a => a.json()).then(callback)
    }

    class Posts extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                content: (
                    <center>
                        <img src={imgbase64} className="loader"/>
                        <span style={{color: "grey"}}>Fetching Posts...</span>
                    </center>                    
                ),
                postsLoaded: false
            }
            this.setPosts = this.setPosts.bind(this)
            loadPosts(this.setPosts)
        }

        setPosts(posts) {
            console.log("Posts loaded")
            var content = <span></span>;
            
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