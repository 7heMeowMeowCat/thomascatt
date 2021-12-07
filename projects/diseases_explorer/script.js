var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

try {
    var CreatePostSection = function CreatePostSection() {
        return React.createElement(
            "div",
            { className: "card" },
            React.createElement(
                "div",
                { className: "card-header" },
                "Welcome"
            ),
            React.createElement(
                "div",
                { className: "card-body" },
                React.createElement(
                    "form",
                    { action: "/", method: "POST" },
                    React.createElement("input", { type: "hidden", name: "action", value: "submit" }),
                    React.createElement(
                        "div",
                        { className: "input-group" },
                        React.createElement("textarea", { required: true, className: "form-control", rows: "1", name: "content", placeholder: "Post something...", style: { resize: "none" } }),
                        React.createElement(
                            "button",
                            { className: "btn btn-outline-primary group-append" },
                            "Submit"
                        )
                    )
                )
            )
        );
    };

    var loadDiseases = function loadDiseases(callback) {
        request("data.json", callback);
    };

    var request = window.request;

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
                                null,
                                JSON.stringify(a)
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
        React.createElement(CreatePostSection, null),
        React.createElement("br", null),
        React.createElement(
            "h2",
            null,
            "Your Feed"
        ),
        React.createElement(
            "div",
            { id: "diseases-section" },
            React.createElement(Diseases, null)
        )
    ), document.getElementById('root'));
} catch (e) {
    ReactDOM.render(React.createElement(
        "pre",
        null,
        e
    ), document.getElementById('root'));
}