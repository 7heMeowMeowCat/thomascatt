try {
    var request = window.request
    var testData = window.testData
    
    function SearchDiseases() {
        return (
            <div className="search">
                <input type="text" placeholder="Search the diseases list"/>
                <i className={"fa fa-search"}></i>
            </div>
        )
    }

    
    
    function loadDiseases(callback) {
        if (location.href.includes(".github.io"))
            request("data.json", (callback))
        else {
            var data = testData
            setTimeout( () => callback(data), 200 )
        }
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
                    diseases.map(a => 
                        <div className={"card card-body"} key={Math.random()}>
                            {Object.keys(a).map(k => <span key={Math.random()}><b>{k}</b>: {a[k]}</span>)}
                        </div>)
                }
            </div>, diseasesLoaded: true})
        }
        
        render() {
            return <div>{this.state.content}</div>
        }
    }
    
    ReactDOM.render(<div>
        <br/>
        <div className="title">
            <h2 style={{display: "inline"}}>Diseases Explorer</h2><sup style={{display: "inline", color: "grey"}}> ALPHA</sup>
            <p>Search through the unofficially discovered diseases</p>
        </div>

        <SearchDiseases/>
        <div id="diseases-section">
            <Diseases/>
        </div>
        <center style={{color: "grey", marginTop: "25px"}}>Version 0.1, by <span style={{color: "black"}}>Thomas Catt</span></center>
    </div>, document.getElementById('root'))
} catch(e) {
    ReactDOM.render(<pre>
        {e}
    </pre>, document.getElementById('root'))
}