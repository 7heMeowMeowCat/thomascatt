try {
    var likePost = window.likePost
    var request = window.request
    var csrf = window.csrf
    var data = window.data
    var csrf_field = window.csrf_field

    
    
    
    class CreatePostSection extends React.Component {
        constructor(props) {
            super(props)


            this.state = {
                expanded: false,
                loading: false,
                mceLoading: true
            }

            this.submitPost = this.submitPost.bind(this)
        }

        submitPost(e) {
            e.preventDefault();
            var postTitle = (e.target.querySelector("input[name=content]").value).trim()
            var postDesc = tinymce.get()[0].getContent()
            if (postTitle == "") return alert("Why do you think I would have forgotten to block this?")
            // console.log("Title: ", JSON.stringify(postTitle), "\nDescription: ", JSON.stringify(postDesc))
            this.setState({loading: true})
            request({action: "submit", content: postTitle, description: postDesc}, (function(response) {
                document.querySelector('#reload-posts').click()
                e.target.querySelector("input[name=content]").value = ''
                tinymce.get()[0].setContent('')
                this.setState({loading: false, expanded: false})
            }).bind(this))
        }

        render() {            
            return (
                <div className="card">
                    <div className="card-header">
                            Logged in as <b>{data.name}</b><a href="logout" style={{float: "right"}}><i className="fa fa-sign-out"></i> Logout</a>
                    </div>
    
                    <div className="card-body">
                        <form action="/" method="POST" onSubmit={this.submitPost}>
                            <input required className="form-control" name="content" placeholder="Post something..." style={{resize: "none", fontSize: "28px"}}/>
                            <div hidden={!this.state.expanded}>
                                <br />
                                <div name="description" placeholder="Post Body" className="form-control"></div>
                            </div>
                            {
                                tinymce.init({
                                    selector: "*[name=description]",
                                    toolbar: true,
                                    menubar: false,
                                    statusbar: false,
                                    plugins: 'link table autolink',
                                    toolbar: 'bold italic underline strikethrough | aligncenter alignjustify alignleft alignright | fontselect fontsizeselect | forecolor backcolor | indent outdent | subscript superscript | link table',
                                    toolbar_mode: "sliding",
                                    default_link_target: "_blank",
                                    target_list: false,

                                    height: 400,
                                    
                                    setup: (function (editor) {
                                        editor.on('init', (function(e) {
                                            this.setState({mceLoading: false})
                                        }).bind(this))
                                    }).bind(this)
                                }) ? "" : ""
                            }
                            <br />

                            <button className="btn btn-primary" style={{float: "right"}} disabled={this.state.loading}>
                                {this.state.loading ? <Loading inline={true} text=""/> : <i className="fa fa-paper-plane"></i>} Submit Post
                            </button>
                            <button onClick={(function (e) { e.preventDefault(); this.setState({expanded: !this.state.expanded}) }).bind(this) } className="btn btn-outline-secondary" disabled={this.state.mceLoading} style={{float: "right", marginRight: "5px"}}>
                                {this.state.mceLoading ? <Loading inline={true} text=""/> : <i className={"fa fa-angle-"+(this.state.expanded ? "up" : "down")}></i>} {this.state.expanded ? "Collapse" : "Expand"} full editor
                            </button>
                        </form>
                    </div>
                </div>
            )
        }
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
            this.reloadPosts = this.reloadPosts.bind(this)
            loadPosts(this.setPosts)
        }

        reloadPosts() {
            this.setState({postsLoaded: false, content: [<Loading text="Fetching Posts..." key="foo"/>, this.state.content]})
            loadPosts(this.setPosts)
        }

        setPosts(posts) {
            this.setState({content: <div>{posts.map(a => <Post id={a.id} key={a.id} author={a.author} content={a.content} description={a.description} created_at={a.created_at} likes={a.likes == ''  ? [] : JSON.parse(a.likes)} dislikes={a.dislikes == ''  ? [] : JSON.parse(a.dislikes)}/>)}</div>, postsLoaded: true})
        }
        
        render() {
            return <div><span hidden={true} onClick={this.reloadPosts} id="reload-posts"></span>{this.state.content}</div>
        }
    }

    
    ReactDOM.render(<App app={<div>
        <CreatePostSection/>
        <br/><h2>Your Feed</h2>
        <div id="posts-section">
            <Posts/>
        </div>
    </div>}/>, document.getElementById('root'))
    var reportError = window.reportError
    window.onerror = reportError


} catch(e) {
    reportError(e)
}