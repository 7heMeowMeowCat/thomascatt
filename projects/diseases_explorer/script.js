var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

try {
    var SearchDiseases = function SearchDiseases() {
        return React.createElement(
            "div",
            { className: "search" },
            React.createElement("input", { type: "text", placeholder: "Search the diseases list" }),
            React.createElement("i", { className: "fa fa-search" })
        );
    };

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

    var Diseases = function (_React$Component) {
        _inherits(Diseases, _React$Component);

        function Diseases(props) {
            _classCallCheck(this, Diseases);

            var _this = _possibleConstructorReturn(this, (Diseases.__proto__ || Object.getPrototypeOf(Diseases)).call(this, props));

            _this.state = {
                content: React.createElement(Loading, { text: "Fetching Diseases..." }),
                diseasesLoaded: false
            };
            _this.setDiseases = _this.setDiseases.bind(_this);
            loadDiseases(_this.setDiseases);
            return _this;
        }

        _createClass(Diseases, [{
            key: "setDiseases",
            value: function setDiseases(diseases) {
                this.setState({ content: React.createElement(
                        "div",
                        null,
                        diseases.map(function (a) {
                            return React.createElement(
                                "div",
                                { className: "card card-body", key: Math.random() },
                                Object.keys(a).map(function (k) {
                                    return React.createElement(
                                        "span",
                                        { key: Math.random() },
                                        React.createElement(
                                            "b",
                                            null,
                                            k
                                        ),
                                        ": ",
                                        a[k]
                                    );
                                })
                            );
                        })
                    ), diseasesLoaded: true });
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    this.state.content
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
        React.createElement(SearchDiseases, null),
        React.createElement(
            "div",
            { id: "diseases-section" },
            React.createElement(Diseases, null)
        ),
        React.createElement(
            "center",
            { style: { color: "grey", marginTop: "25px" } },
            "Version 0.1, by ",
            React.createElement(
                "span",
                { style: { color: "black" } },
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