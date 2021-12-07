try {
    var request = window.request
    var testData = window.testData
    
    class SearchDiseases extends React.Component {
        constructor(props) {
            super(props)
            this.onSearchChange = this.onSearchChange.bind(this)
        }

        onSearchChange(e) {
            clearTimeout(window.searchDelay)
            window.searchDelay = setTimeout((function() {
                var searchText = e.target.value // the search text
                var searchTerms = searchText.split(" ").filter(a => a != "") // search text split on spaces to form 'terms' to match
                if (searchTerms.length > 0) { // only continue search if the search terms exist
                    var searchedItemsRelevance = [] // relevance array, stores relevance for each match, used for sorting later
                    var searchedItems = this.props.state.diseases.filter(function (a) { // performs the actual matching
                        var matches = searchTerms.map(t => a.tags.map(tag => tag.includes(t)).reduce( (a, b) => a || b)) // check for tags of each disease, and run a .includes() for each of the search terms
                        searchedItemsRelevance.push(matches.filter(a => a == true).length) // checks relevance, which is number of search terms found in tags
                        return matches.reduce( (a, b) => a || b)
                    })
                    
                    for (var i = 0; i < searchedItems.length; i++) { // attach the separated search relevance to the searchedItems array
                        searchedItems[i]._relevance = searchedItemsRelevance[i]
                    }
    
                    searchedItems = searchedItems.sort( (a, b) => a._relevance > b._relevance ? -1 : 1) // sort results by relevance
                }
                // send the result
                this.props.setDiseases(searchText == "" ? this.props.state.diseases : searchedItems, (searchText!= "") ? "searched" : false)
            }.bind(this)), 200)
        }
        
        render() {
            return (
                <div className="search">
                    <input type="text" placeholder="Search the diseases list"onChange={this.onSearchChange}/>
                    <i className={"fa fa-search"}></i>
                </div>
            )            
        } 
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
                loaderText: "Fetching Diseases...",
                content: (<span></span>),
                diseases: [],
                diseasesLoaded: false
            }
            this.setDiseases = this.setDiseases.bind(this)
            loadDiseases((d) => this.setDiseases(d, true))
        }

        setDiseases(diseases, fetched) {
            var searchedTx = <span></span>
            if (fetched == "searched" && diseases.length < this.state.diseases.length) searchedTx = <span className={"grey"}>Filtered <b>{diseases.length}</b> out of <b>{this.state.diseases.length} total items</b></span>
            this.setState({content: <div>{searchedTx}<div style={{borderRadius: "15px", overflowX: "hidden"}}>
                    {
                        diseases.map(a => 
                            <div className={"card card-body"} key={Math.random()}>
                                {<div><h3>{a.name}</h3><p className="grey">{a.short_desc}</p></div>}
                                {/* {Object.keys(a).filter(a => a != "_relevance").map(k => <span key={Math.random()}><b>{k}</b>: {a[k]}</span>)} */}
                            </div>)
                    }
                </div>
            </div>, diseasesLoaded: true})
            if (fetched === true) this.setState({diseases: diseases})
        }
        
        render() {
            return <div>
                <SearchDiseases state={this.state} setState={this.setState} setDiseases={this.setDiseases}/>
                {this.state.diseasesLoaded ? this.state.content : <Loading text={this.state.loaderText}/>}
                </div>
        }
    }
    
    ReactDOM.render(<div>
        <br/>
        <div className="title">
            <h2 style={{display: "inline"}}>Diseases Explorer</h2><sup style={{display: "inline", color: "grey"}}> ALPHA</sup>
            <p>Search through the unofficially discovered diseases</p>
        </div>

        <div id="diseases-section">
            <Diseases/>
        </div>
        <center style={{marginTop: "25px"}} className="grey">Version 0.1, by <span>Thomas Catt</span></center>
    </div>, document.getElementById('root'))
} catch(e) {
    ReactDOM.render(<pre>
        {e}
    </pre>, document.getElementById('root'))
}