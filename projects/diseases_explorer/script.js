var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

try {
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
                document.querySelector("input").onkeydown = function (e) {
                    if (e.key == "Enter" && e.target.value.replaceAll(" ", "") != "") {
                        document.querySelector(".disease-title").click();
                    }
                };
                clearTimeout(window.searchDelay);
                window.searchDelay = setTimeout(function () {
                    var searchText = e.target.value.toLowerCase(); // the search text
                    var searchTerms = searchText.split(" ").filter(function (a) {
                        return a != "";
                    }); // search text split on spaces to form 'terms' to match
                    if (searchTerms.length > 0) {
                        // only continue search if the search terms exist
                        var searchedItemsRelevance = []; // relevance array, stores relevance for each match, used for sorting later
                        var searchedItems = this.props.state.diseases.filter(function (a) {
                            // performs the actual matching
                            var matches = searchTerms.map(function (t) {
                                var terms = [a.tags, a.name, a.short_desc.split(" ").filter(function (a) {
                                    return a != "";
                                })].flat().map(function (a) {
                                    return a.toLowerCase();
                                });
                                return terms.map(function (tag) {
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
                }.bind(this), 100);
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

    var loadDiseases = function loadDiseases(callback) {
        if (location.href.includes(".github.io")) request("data.json", callback);else {
            var data = testData;
            setTimeout(function () {
                return callback(data);
            }, 200);
        }
    };

    var OpenDisease = function (_React$Component2) {
        _inherits(OpenDisease, _React$Component2);

        function OpenDisease(props) {
            _classCallCheck(this, OpenDisease);

            var _this2 = _possibleConstructorReturn(this, (OpenDisease.__proto__ || Object.getPrototypeOf(OpenDisease)).call(this, props));

            _this2.state = {
                data: _this2.props.data
            };
            return _this2;
        }

        _createClass(OpenDisease, [{
            key: "render",
            value: function render() {
                if (this.props.data) {
                    var details = [];
                    var detailsKeys = Object.keys(this.props.data.details);
                    var detailsValues = Object.values(this.props.data.details);
                    for (var i = 0; i < detailsKeys.length; i++) {
                        details.push(React.createElement(
                            "p",
                            { key: detailsKeys[i] },
                            React.createElement(
                                "b",
                                { style: { textTransform: "capitalize" } },
                                detailsKeys[i],
                                ": "
                            ),
                            React.createElement(
                                "span",
                                null,
                                detailsValues[i]
                            ),
                            React.createElement("br", null)
                        ));
                    }
                }
                return this.props.data == false ? React.createElement(
                    "span",
                    null,
                    "No item selected."
                ) : React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h1",
                        { style: { marginTop: "15px" } },
                        React.createElement(
                            "span",
                            { className: "clickable", onClick: function (e) {
                                    // document.querySelector("#desc div").innerHTML = ""
                                    navigateApp(false);
                                }.bind(this), style: { padding: "2%" } },
                            React.createElement("i", { className: "fas fa-arrow-left" }),
                            " Back"
                        ),
                        this.props.data.name
                    ),
                    React.createElement(
                        "h4",
                        null,
                        this.props.data.short_desc
                    ),
                    React.createElement("br", null),
                    details,
                    React.createElement("hr", null),
                    this.props.data.content.map(function (item) {
                        var title = Object.keys(item)[0];
                        var descrpition = Object.values(item)[0];
                        return React.createElement(
                            "div",
                            { key: title },
                            React.createElement("h2", { dangerouslySetInnerHTML: { __html: title } }),
                            React.createElement("p", { className: "grey", dangerouslySetInnerHTML: { __html: descrpition } })
                        );
                    })
                );
            }
        }]);

        return OpenDisease;
    }(React.Component);

    var Diseases = function (_React$Component3) {
        _inherits(Diseases, _React$Component3);

        function Diseases(props) {
            _classCallCheck(this, Diseases);

            var _this3 = _possibleConstructorReturn(this, (Diseases.__proto__ || Object.getPrototypeOf(Diseases)).call(this, props));

            _this3.state = {
                loaderText: "Fetching Diseases...",
                content: React.createElement("span", null),
                desc: React.createElement(
                    "span",
                    { onClick: function onClick(e) {
                            return navigateApp(false);
                        }, style: { color: "blue", cursor: "pointer", userSelect: "none" } },
                    "<",
                    " Back"
                ),
                diseases: [],
                diseaseData: false,
                diseasesLoaded: false
            };
            _this3.setDiseases = _this3.setDiseases.bind(_this3);
            _this3.setDiseaseData = _this3.setDiseaseData.bind(_this3);
            loadDiseases(function (d) {
                return _this3.setDiseases(d, true);
            });
            return _this3;
        }

        _createClass(Diseases, [{
            key: "setDiseaseData",
            value: function setDiseaseData(data) {
                this.setState({ diseaseData: data });
                navigateApp(true);
            }
        }, {
            key: "setDiseases",
            value: function setDiseases(diseases, fetched) {
                var _this4 = this;

                var searchedTx = React.createElement("span", null);
                if (fetched == "searched" && diseases.length < this.state.diseases.length) searchedTx = React.createElement(
                    "span",
                    { className: "grey" },
                    diseases.length < 1 ? React.createElement(
                        "center",
                        null,
                        React.createElement(
                            "h1",
                            { style: { color: "grey" } },
                            "No Results"
                        )
                    ) : React.createElement(
                        "span",
                        null,
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
                                    { className: "card card-body disease-title", key: Math.random(), onClick: function onClick(e) {
                                            return document.querySelector(".disease-app #list .disease-title") ? _this4.setDiseaseData(a) : false;
                                        } },
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
                    React.createElement(
                        "div",
                        { className: "disease-app" },
                        React.createElement(
                            "div",
                            { id: "list", style: { zIndex: '2' } },
                            this.state.diseasesLoaded ? this.state.content : React.createElement(Loading, { text: this.state.loaderText })
                        ),
                        React.createElement(
                            "div",
                            { id: "desc" },
                            React.createElement(OpenDisease, { data: this.state.diseaseData })
                        )
                    )
                );
            }
        }]);

        return Diseases;
    }(React.Component);

    var navigateApp = function navigateApp(open) {
        if (open) {
            if (document.querySelector(".disease-app")) document.querySelector(".disease-app").className = "disease-open";
            document.querySelector("#desc").style.zIndex = "2";
            document.querySelector("#list").style.zIndex = "1";
        } else {
            if (document.querySelector(".disease-open")) document.querySelector(".disease-open").className = "disease-app";
            document.querySelector("#list").style.zIndex = "2";
            document.querySelector("#desc").style.zIndex = "1";
        }
    };

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
                " BETA"
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
            { style: { marginTop: "25px" }, className: "credit grey" },
            "Diseases Explorer - by ",
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