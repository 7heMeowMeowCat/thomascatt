var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

try {
    var loadDiseases = function loadDiseases(callback) {
        if (location.href.includes(".github.io")) request("data.json", callback);else {
            var data = testData;
            setTimeout(function () {
                return callback(data);
            }, 200);
        }
    };

    var request = window.request;
    var testData = window.testData;

    var SearchDiseases = function (_React$Component) {
        _inherits(SearchDiseases, _React$Component);

        function SearchDiseases(props) {
            _classCallCheck(this, SearchDiseases);

            var _this = _possibleConstructorReturn(this, (SearchDiseases.__proto__ || Object.getPrototypeOf(SearchDiseases)).call(this, props));

            _this.onSearchChange = _this.onSearchChange.bind(_this);
            return _this;
        }

        _createClass(SearchDiseases, [{
            key: "onSearchChange",
            value: function onSearchChange(e) {
                clearTimeout(window.searchDelay);
                window.searchDelay = setTimeout(function () {
                    var searchText = e.target.value; // the search text
                    var searchTerms = searchText.split(" ").filter(function (a) {
                        return a != "";
                    }); // search text split on spaces to form 'terms' to match
                    if (searchTerms.length > 0) {
                        // only continue search if the search terms exist
                        var searchedItemsRelevance = []; // relevance array, stores relevance for each match, used for sorting later
                        var searchedItems = this.props.state.diseases.filter(function (a) {
                            // performs the actual matching
                            var matches = searchTerms.map(function (t) {
                                return a.tags.map(function (tag) {
                                    return tag.includes(t);
                                }).reduce(function (a, b) {
                                    return a || b;
                                });
                            }); // check for tags of each disease, and run a .includes() for each of the search terms
                            searchedItemsRelevance.push(matches.filter(function (a) {
                                return a == true;
                            }).length); // checks relevance, which is number of search terms found in tags
                            return matches.reduce(function (a, b) {
                                return a || b;
                            });
                        });

                        for (var i = 0; i < searchedItems.length; i++) {
                            // attach the separated search relevance to the searchedItems array
                            searchedItems[i]._relevance = searchedItemsRelevance[i];
                        }

                        searchedItems = searchedItems.sort(function (a, b) {
                            return a._relevance > b._relevance ? -1 : 1;
                        }); // sort results by relevance
                    }
                    // send the result
                    this.props.setDiseases(searchText == "" ? this.props.state.diseases : searchedItems, searchText != "" ? "searched" : false);
                }.bind(this), 200);
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "search" },
                    React.createElement("input", { type: "text", placeholder: "Search the diseases list", onChange: this.onSearchChange }),
                    React.createElement("i", { className: "fa fa-search" })
                );
            }
        }]);

        return SearchDiseases;
    }(React.Component);

    var Diseases = function (_React$Component2) {
        _inherits(Diseases, _React$Component2);

        function Diseases(props) {
            _classCallCheck(this, Diseases);

            var _this2 = _possibleConstructorReturn(this, (Diseases.__proto__ || Object.getPrototypeOf(Diseases)).call(this, props));

            _this2.state = {
                loaderText: "Fetching Diseases...",
                content: React.createElement("span", null),
                diseases: [],
                diseasesLoaded: false
            };
            _this2.setDiseases = _this2.setDiseases.bind(_this2);
            loadDiseases(function (d) {
                return _this2.setDiseases(d, true);
            });
            return _this2;
        }

        _createClass(Diseases, [{
            key: "setDiseases",
            value: function setDiseases(diseases, fetched) {
                var searchedTx = React.createElement("span", null);
                if (fetched == "searched" && diseases.length < this.state.diseases.length) searchedTx = React.createElement(
                    "span",
                    { className: "grey" },
                    "Filtered ",
                    React.createElement(
                        "b",
                        null,
                        diseases.length
                    ),
                    " out of ",
                    React.createElement(
                        "b",
                        null,
                        this.state.diseases.length,
                        " total items"
                    )
                );
                this.setState({ content: React.createElement(
                        "div",
                        null,
                        searchedTx,
                        React.createElement(
                            "div",
                            { style: { borderRadius: "15px", overflowX: "hidden" } },
                            diseases.map(function (a) {
                                return React.createElement(
                                    "div",
                                    { className: "card card-body", key: Math.random() },
                                    React.createElement(
                                        "div",
                                        null,
                                        React.createElement(
                                            "h3",
                                            null,
                                            a.name
                                        ),
                                        React.createElement(
                                            "p",
                                            { className: "grey" },
                                            a.short_desc
                                        )
                                    )
                                );
                            })
                        )
                    ), diseasesLoaded: true });
                if (fetched === true) this.setState({ diseases: diseases });
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(SearchDiseases, { state: this.state, setState: this.setState, setDiseases: this.setDiseases }),
                    this.state.diseasesLoaded ? this.state.content : React.createElement(Loading, { text: this.state.loaderText })
                );
            }
        }]);

        return Diseases;
    }(React.Component);

    ReactDOM.render(React.createElement(
        "div",
        null,
        React.createElement("br", null),
        React.createElement(
            "div",
            { className: "title" },
            React.createElement(
                "h2",
                { style: { display: "inline" } },
                "Diseases Explorer"
            ),
            React.createElement(
                "sup",
                { style: { display: "inline", color: "grey" } },
                " ALPHA"
            ),
            React.createElement(
                "p",
                null,
                "Search through the unofficially discovered diseases"
            )
        ),
        React.createElement(
            "div",
            { id: "diseases-section" },
            React.createElement(Diseases, null)
        ),
        React.createElement(
            "center",
            { style: { marginTop: "25px" }, className: "grey" },
            "Version 0.1, by ",
            React.createElement(
                "span",
                null,
                "Thomas Catt"
            )
        )
    ), document.getElementById('root'));
} catch (e) {
    ReactDOM.render(React.createElement(
        "pre",
        null,
        e
    ), document.getElementById('root'));
}