var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

try {
    var _class, _temp;

    window.imgbase64 = "data:image/png;base64,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";
    window.testData = [{
        "name": "Coolophobia",
        "short_desc": "People try to look cool, even when they shouldn't.",
        "details": {
            "targets": "Any, mostly males",
            "causes": "Slighly more knowledge in a certain field than most people.",
            "symptoms": "Trying to look cool, patient flexing their knowledge",
            "similarities": "Nervous Disorders, seizures",
            "treatment": "Psychological therapy, Social distancing from the patient",
            "total infected patients": "2,756,835,564",
            "total deaths": "1,279"
        },

        "tags": ["disease", "cool", "flex", "ahmad", "saleem"],
        "content": [{ "Deaths from Coolophobia:": "Although coolophobia is not considered a fatal disease, some cases still have come to observation that excessively affected coolophobia patients can cause the patient to fight with others which can be fatal for the others, as well as the patient. Several cases have been observed in which the patient commits suicide along with the people around them." }]
    }, {
        "name": "Gayphobia",
        "short_desc": "When gay",
        "details": {
            "targets": "Any male",
            "source": "Fortnite, Among us, BTS, and a lot of other sources are observed.",
            "causes": "Developing affection for the mentioned sources can cause this disease.",
            "symptoms": "Looking gay, affection for other men",
            "extreme symptoms": "Absolutely Haram activities with other men.",
            "similarities": "Nervous Disorders",
            "treatment": "None, killing any gayphobia patient upon sight is suggested",
            "total infected patients": "753,481,101",
            "total deaths": "98,231,090"
        },

        "tags": ["gayphobia", "gay", "geh", "gae", "lgbt", "fortnite", "fort", "nite"],
        "content": [{ "More Information:": "This is just a second name to being gay. Gayphobia is a widespead with over millions of patients. It's a life threatning disease." }]
    }, {
        "name": "Stickerphobia",
        "short_desc": "Annoying spamming of stickers even in inappropriate scenarios.",
        "details": {
            "targets": "16 - 20 year old males (saturated)",
            "organism": "Bacteria: Streptococcus Stickominiae",
            "organism kingdom": "Prokaryotes",
            "causes": "Badly polluted whatsapp groups, sticker spams, high amout of saved stickers",
            "symptoms": "Patient starts spamming whatsapp stickers in groups or direct messages with little to no regret",
            "extreme symptoms": "Patient refuses to send anything other than senseless stickers at potentially unsuitable occasions",
            "similarities": "none, entirely unique disease",
            "treatment": "Yet to be uncovered",
            "total infected patients": "1,738",
            "total deaths": "2"
        },

        "tags": ["stickerphobia", "sticker", "disease"],
        "content": [{ "Deaths from Stickerphobia:": "According to recent studies, it has been observed that a stickerphobia patient can cause mental pressure and anxiety for other people around him, mostly his friends or family. This phenomenon was observed in this case, when a patine t refused to take the situation seriously, even after he was forced quite heavily. 2 friends, trying their best to stop the patient, faced serious depression, and one by one, commited suicide because of the harming behaviour of the patient. This case was later proved by other people around, so it's confirmed that a stikerphobia patient can leave phenomenal effects." }]
    }, {
        "name": "PUBG-o-phobia",
        "short_desc": "Widespead disease of dangerously excessive addiction for PUBG.",
        "details": {
            "targets": "10 - 18 year olds",
            "source": "Tencent",
            "causes": "Interest in PUBG, trying out PUBG, or looking at PUBG can cause this disease.",
            "symptoms": "Patient feels uneasy when PUBG is not available.",
            "extreme symptoms": "Patient can trigger seizures upon unavailability of PUBG.",
            "similarities": "Nervous Disorders, seizures",
            "treatment": "Yet to be uncovered",
            "total infected patients": "1,438,124,772",
            "total deaths": "172,081"
        },

        "tags": ["pubg", "mobile", "addiction", "game", "gaming"],
        "content": [{ "About PUBG:": "PUBG Mobile, created by <span>Lightspeed & Quantom Studios</span>, and published by <span>Tencent</span>, is an extremely popular android & iOS mobile game, based on the original <span>PUBG</span> released in 2017. PUBG Mobile is an excessively degraded version of the original PUBG, which makes the game a lot less enjoyable. There are plenty of versions of PUBG, some of them including <span>PUBG Mobile Lite, PUBG New State</span>, and many others. But by far, the original PUBG experience is the most polished, and enjoyable experience of the battle royal game." }, { "<a href='https://play.google.com/store/apps/details?id=com.tencent.ig' target='_blank'>Game Link</a>": "" }]
    }];

    window.request = function (filename, callback) {
        callback = callback || function (a) {
            return true;
        };
        try {
            fetch(filename).then(function (a) {
                return a.json();
            }).then(callback);
        } catch (e) {
            callback({ error: e });
        }
    };

    var request = window.request;

    window.splitNewlines = function (s) {
        return s.split('\n').map(function (a) {
            return React.createElement(
                "p",
                null,
                a
            );
        });
    };

    window.ErrorMessage = function (_React$Component) {
        _inherits(ErrorMessage, _React$Component);

        function ErrorMessage(props) {
            _classCallCheck(this, ErrorMessage);

            return _possibleConstructorReturn(this, (ErrorMessage.__proto__ || Object.getPrototypeOf(ErrorMessage)).call(this, props));
        }

        _createClass(ErrorMessage, [{
            key: "render",
            value: function render() {
                return React.createElement(
                    "center",
                    { style: { padding: "15px" } },
                    React.createElement(
                        "span",
                        { style: { color: "grey" } },
                        React.createElement(
                            "b",
                            null,
                            this.props.title,
                            ":"
                        ),
                        " ",
                        this.props.desc,
                        " "
                    )
                );
            }
        }]);

        return ErrorMessage;
    }(React.Component);

    window.Loading = (_temp = _class = function (_React$Component2) {
        _inherits(Loading, _React$Component2);

        function Loading(props) {
            _classCallCheck(this, Loading);

            return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));
        }

        _createClass(Loading, [{
            key: "render",
            value: function render() {
                return React.createElement(
                    "center",
                    null,
                    React.createElement("img", { src: imgbase64, className: "loader" }),
                    React.createElement(
                        "span",
                        { style: { color: "grey" } },
                        this.props.text
                    )
                );
            }
        }]);

        return Loading;
    }(React.Component), _class.defaultProps = {
        text: "Loading..."
    }, _temp);

    var loadingInterval = setInterval(function () {
        document.querySelectorAll(".loader").forEach(function (loader) {
            var degreesRotation = parseInt(loader.style.transform.replace("rotate", "").replace("deg", "").replace("(", "").replace(")", "")) + 30;
            if (isNaN(degreesRotation)) degreesRotation = 0;
            degreesRotation = degreesRotation >= 360 ? 0 : degreesRotation;
            loader.style.transform = "rotate(" + degreesRotation + "deg)";
        });
    }, 50);

    document.body.style.opacity = 1;
} catch (e) {
    console.error(e);
}