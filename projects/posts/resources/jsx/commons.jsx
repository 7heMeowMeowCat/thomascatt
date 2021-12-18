try {
    window.imgbase64 = "data:image/png;base64,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"
    window.data = JSON.parse(document.querySelector('#__info').innerText)
    window.csrf_field = document.querySelector('#__info input').outerHTML
    window.csrf = document.querySelector('#__info input').value
    // document.querySelector('#__info').outerHTML = ""
    
    if (window.data == undefined) 
    window.data = {
        id: 0,
        name: '',
        email: '',
        updated_at: '',
        created_at: ''
    }
    
    console.log(window.data)
    
    window.likePost = function (id, like) {
        request({
            action: like ? "likePost" : "unlikePost",
            id: id,
            post: true
        })
    }
    
    window.likeComment = function (id, like) {
        request({
            action: like ? "likePost" : "unlikePost",
            id: id,
            post: false
        })
    }
    
    window.request = function (body, callback) {
        callback = callback || ((a) => true)
        fetch('/', {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrf,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        }).then(a => a.json()).then(callback)
    }

    var likePost = window.likePost
    var request = window.request
    var csrf = window.csrf
    var data = window.data
    var csrf_field = window.csrf_field
    
    window.splitNewlines = function (s) {
        return s.split('\n').map(a => <p>{a}</p>)
    }

    window.getDifferenceString = function (date) {
        var diff = (+ new Date()) - (+ date)
        // console.log("Difference: ", diff, " - Original: ", date)
    
        const consts = {
            second: 1000,
            minute: 1000 * 60,
            hour:   1000 * 60 * 60,
            day:    1000 * 60 * 60 * 24,
            month:  1000 * 60 * 60 * 24 * 30,
            year:   1000 * 60 * 60 * 24 * 365
        }
    
        var diffUnit = "seconds"
        var diffVal = 0
    
        Object.keys(consts).forEach(unit => {
            if (diff >= consts[unit]) {diffUnit = unit; diffVal = Math.round(diff / consts[unit])}
        })
    
        if (diffVal > 1) diffUnit += "s"
        
        return ({str: diffVal < 1 ? "just now" : diffVal + " " + diffUnit + " ago", unit: diffUnit, value: diffVal})
    }

    window.ErrorMessage = class ErrorMessage extends React.Component {
        constructor(props) {
            super(props)
        }

        render() {
            return <center style={{padding: "15px"}}>
                <span style={{color: "grey"}}><b>{this.props.title}:</b> {this.props.desc} </span>
            </center>
        }
    }
    
    window.PostComment = class PostComment extends React.Component {
        static defaultProps = {
            id: undefined,
            author: '[unknown]',
            content: "Failed to load post.",
            likes: [],
        }

        constructor(props) {
            super(props)
            this.state = {
                liked: this.props.likes.includes(data.name),
                likes: this.props.likes,

                author: this.props.author,
                content: this.props.content,
                id: this.props.id,
                created_at: this.props.created_at,
                
                loaded: true,
                error: ''
            }

            if (this.props.id == undefined) {
                this.state.loaded = 'error' 
                this.state.error = 'An unknown error occured' 
            }
            
            this.toggleCommentLike = this.toggleCommentLike.bind(this)
        }

        toggleCommentLike() {
            var likesToSet = this.state.likes
            if ((!this.state.liked  == true) && !likesToSet.includes(data.name)) likesToSet.push(data.name)
            else likesToSet = likesToSet.filter(a => a != data.name)
            this.setState({liked: !this.state.liked, likes: likesToSet})

            likeComment(this.state.id, !this.state.liked)
        }

        render() {
            if (this.state.loaded == false) return <Loading text=" "/>
            else if (this.state.loaded == 'error') return <ErrorMessage title="Failed to load comment" desc={this.state.error} />
            
            return (
                <div style={{display: "block", margin: '0', padding: "4px 10px", borderBottom: "0px solid #bbb"}}>
                    <div style={{fontSize: "12px", paddingBottom: '0'}}>
                        <b>{this.state.author}</b> commented:
                    </div>
                    <div className={"comment "+(this.state.author == data.name ? "ownpost" : "")}>
                        <div style={{padding: "5px 10px", marginBottom: "0px"}}>
                            <span key={this.state.id}>{(this.state.content)}</span><br/>
                            <sub className="grey">{window.getDifferenceString(new Date(this.state.created_at)).str}</sub>
                        </div>
                    </div>
                    <span title={data.id == 0 ? "Login to like this comment" : ""} >
                        <button className={"btn btn-sm " + (this.state.liked ? "btn-primary" : "btn-outline-primary")} onClick={this.toggleCommentLike} disabled={data.id == 0} style={{margin: '8px 12px'}}>
                            <i className="fa fa-thumbs-up"></i>
                            &nbsp;{this.state.likes !== undefined ? this.state.likes.length : 0}
                        </button>
                    </span>
                </div>
            )
        }
        
    }
    
    window.Post = class Post extends React.Component {
        static defaultProps = {
            id: undefined,
            author: '[unknown]',
            content: "Failed to load post.",
            likes: [],
            fetch: false,
            comments: false
        }

        constructor(props) {
            super(props)
            this.state = {
                liked: this.props.likes.includes(data.name),
                likes: this.props.likes,

                author: this.props.author,
                content: this.props.content,
                id: this.props.id,
                comments: this.props.comments,
                created_at: this.props.created_at,
                
                loaded: true,
                error: ''
            }

            if (this.props.id == undefined) {
                this.state.loaded = 'error' 
                this.state.error = 'An unknown error occured' 
            }
            
            this.togglePostLike = this.togglePostLike.bind(this)
            this.postLoaded = this.postLoaded.bind(this)

            if (this.props.fetch) {
                this.state.loaded = false
                request({
                    action: "getPost",
                    id: this.props.fetch
                }, this.postLoaded)
            }
        }

        postLoaded(post) {
            if (post.error !== undefined) this.setState({loaded: 'error', error: post.error})
            this.setState({loaded: true, id: post.id, author: post.author, content: post.content, created_at: post.created_at, likes: JSON.parse(post.likes), liked: JSON.parse(post.likes).includes(data.name)})
        }

        togglePostLike() {
            var likesToSet = this.state.likes
            if ((!this.state.liked  == true) && !likesToSet.includes(data.name)) likesToSet.push(data.name)
            else likesToSet = likesToSet.filter(a => a != data.name)
            this.setState({liked: !this.state.liked, likes: likesToSet})

            likePost(this.state.id, !this.state.liked)
        }

        render() {
            if (this.state.loaded == false) return <Loading key={this.state.id} text=" "/>
            else if (this.state.loaded == 'error') return <ErrorMessage title="Failed to load post" desc={this.state.error} />
            
            return (
                <div>
                    <div className={"card post "+(this.state.author == data.name ? "ownpost" : "")}>
                        <div className="card-header">
                            {this.state.author == data.name ? <b>Your Post</b> : <span>Posted by <b>{this.state.author}</b></span>} - <a href={"/posts/" + (this.state.id)}  className="grey">{window.getDifferenceString(new Date(this.state.created_at)).str}</a>
                        </div>
                        <div className="card-body">
                            <p style={{fontSize: "24px"}}>{this.state.content}</p>
                            <hr/>
                            <span title={data.id == 0 ? "Login to like this post" : ""} >
                                <button className={"btn btn-sm " + (this.state.liked ? "btn-primary" : "btn-outline-primary")} disabled={data.id == 0} onClick={this.togglePostLike}>
                                    <i className="fa fa-thumbs-up"></i>
                                    &nbsp;{this.state.likes !== undefined ? this.state.likes.length : 0}
                                </button>
                            </span>
                            {
                                this.state.comments == false && 
                                <a onClick={(function (e) {
                                    this.setState({comments: true})
                                    e.preventDefault()
                                }).bind(this)} style={{float: "right"}} className="primary-link" href="#">
                                    View Comments
                                </a>
                            }
                        </div>
                    </div>

                    {this.state.comments && <div style={{marginTop: "10px"}}><br/><PostComments closeComments={(e) => this.setState({comments: false})} key={this.state.id} post_id={this.state.id}/></div>}

                </div>
            )
        }
        
    }

    window.SubmitComment = class SubmitComment extends React.Component {
        static defaultProps = {
            post_id: undefined
        }

        constructor(props) {
            super(props)
            this.submitComment = this.submitComment.bind(this)    
            this.state = {
                content: (                    
                    data.id == 0 ? 
                    <div>
                        <hr />
                        <ErrorMessage title="Login to Comment" desc="Login or Signup to participate in this post." />
                        <center>
                            <a href="/register" className="btn btn-primary btn-sm"><i className="fa fa-user-plus"></i> Register Now</a>
                        </center>
                    </div> : 
                    <form onSubmit={(e) => e.preventDefault()} className="input-group" style={{marginTop: "15px"}}>
                        <textarea required id="comment-submit-textbox" className="form-control" rows="1" name="content" placeholder={"Comment as " + data.name} style={{resize: "none"}}></textarea>
                        <input type="submit" className="btn btn-outline-primary group-append" onClick={this.submitComment} value="Submit"/>
                    </form>
                )
            }
            if (this.props.post_id == undefined) {this.state.content = <ErrorMessage title="Failed to load comments" desc="Post ID not received"/>}
        }

        submitComment() {
            var textbox = document.querySelector('#comment-submit-textbox')
            var content = textbox.value
            if (content.replaceAll(' ', '') == '') {return textbox.reportValidity()}
            this.props.reload(false, true)
            request({
                action: "addComment",
                content: content,
                post_id: this.props.post_id
            }, this.props.reload)
        }
        
        render() {
            return <span key={Math.random()}>{this.state.content}</span>
        }
    }

    window.PostComments =  class PostComments extends React.Component {
        static defaultProps = {
            post_id: undefined
        }
        
        constructor(props) {
            super(props)
            this.state = {
                content: <Loading text="Loading Comments"/>
            }

            this.loadComments = this.loadComments.bind(this)
            this.reloadComments = this.reloadComments.bind(this)
            
            if (this.props.post_id == undefined) {this.state.content = <ErrorMessage title="Failed to load comments" desc="Post ID not received"/>}
            else {

                this.reloadComments(true)
            }
        }
        reloadComments(set, loadOnly) {
            var toSet = <Loading key={this.props.post_id} text="Adding Comment..."/>
            if (!set) this.setState({content: (toSet)})
            else this.state.content = (
                <Loading key={this.props.post_id} text="Loading Comments..."/>
            )
            if (loadOnly) return false
            
            request({
                action: 'getComments',
                id: this.props.post_id
            }, this.loadComments)

        }

        loadComments(comments) {
            var commentsList = [];
            if (comments.length == 0) {
                commentsList.push(<ErrorMessage key={10*this.props.post_id} title="No comments" desc="No comments found for this post. Add one below." />)
            } else 
            commentsList = comments.map(function (comment) {
                return <PostComment key={comment.id} id={comment.id} author={comment.author} content={comment.content} created_at={comment.created_at} likes={JSON.parse(comment.likes)} />
            })
            commentsList.push(<SubmitComment key={this.props.post_id+""+this.props.post_id} reload={this.reloadComments} style={{marginTop: "15px"}} post_id={this.props.post_id}/>)

            this.setState({content: commentsList})                
        }

        render() {
            return (
                <div className="card">
                    <div className="card-header">
                        <h2>Comments:

                        <span style={{cursor: "pointer", float: "right"}} onClick={this.props.closeComments}>&times;</span>
                        </h2>
                    </div>
                    <div className="card-body">
                        {this.state.content}
                    </div>
                </div>
            )
        }
    }

    window.Loading = class Loading extends React.Component {
        static defaultProps = {
            text: "Loading..."
        }
        constructor(props) {
            super(props)
        }

        render() {
            return (
                <center>
                    <img src={imgbase64} className="loader"/>
                    <span style={{color: "grey"}}>{this.props.text}</span>
                </center>      
            )
        }
    }


    var loadingInterval = setInterval(function () {
        document.querySelectorAll(".loader").forEach(
            function (loader) {
                var degreesRotation = parseInt((loader.style.transform.replace("rotate", "").replace("deg", "").replace("(", "").replace(")", ""))) + 30
                if (isNaN(degreesRotation)) degreesRotation = 0;
                degreesRotation = degreesRotation >= 360 ? 0 : degreesRotation
                loader.style.transform = "rotate(" + degreesRotation + "deg)"
            }
        )
    }, 50)

    var remove = function () {
        var element = Object.values(document.querySelectorAll("*")).filter(a => a.title == 'Hosted on free web hosting 000webhost.com. Host your own website for FREE.')
        if (element.length > 0)  {
            element[0].outerHTML = ''
            clearInterval(removeWatermark)
            window.remove = undefined
        }
    }

    var removeWatermark = setInterval( remove, 100)
    remove()
        
} catch(e) {
    console.error(e)
}