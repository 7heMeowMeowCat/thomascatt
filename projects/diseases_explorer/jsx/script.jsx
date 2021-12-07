try {
    var request = window.request
    
    function CreatePostSection() {
        return (
            <div className="card">
                <div className="card-header">
                    Welcome
                </div>

                <div className="card-body">
                    <form action="/" method="POST">
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

    
    
    function loadDiseases(callback) {
        request("data.json", (callback))
    }

    class Diseases extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                content: (
                    <Loading text="Fetching Diseases..."/>              
                ),
                diseasesLoaded: false
            }
            this.setDiseases = this.setDiseases.bind(this)
            loadDiseases(this.setDiseases)
        }

        setDiseases(diseases) {
            this.setState({content: <div>
                {
                    diseases.map(a => <div id={a.id} key={a.id} author={a.author} content={a.content} likes={a.likes == ''  ? [] : JSON.parse(a.likes)}/>)
                }
            </div>, diseasesLoaded: true})
        }
        
        render() {
            return <div>{this.state.content}</div>
        }
    }
    
    ReactDOM.render(<div>
        <CreatePostSection/>
        <br/><h2>Your Feed</h2>
        <div id="diseases-section">
            <Diseases/>
        </div>
    </div>, document.getElementById('root'))
} catch(e) {
    ReactDOM.render(<pre>
        {e}
    </pre>, document.getElementById('root'))
}