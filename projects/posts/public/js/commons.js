/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/jsx/commons.jsx":
/*!***********************************!*\
  !*** ./resources/jsx/commons.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var local = {};

try {
  var _class, _temp, _class2, _temp2, _class3, _temp3, _class4, _temp4, _class5, _temp5, _class6, _temp6;

  window.imgbase64 = "data:image/png;base64,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";
  window.data = JSON.parse(document.querySelector('#__info').innerText);
  window.csrf_field = document.querySelector('#__info input').outerHTML;
  window.csrf = document.querySelector('#__info input').value; // document.querySelector('#__info').outerHTML = ""

  if (window.data == undefined) window.data = {
    id: 0,
    name: '',
    email: '',
    updated_at: '',
    created_at: ''
  };

  window.formatNum = function (n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  window.prefixCount = function (n) {
    var vals = {
      k: 1000,
      m: 1000000,
      b: 1000000000,
      t: 1000000000000
    };
    var prefixNum = n;
    var prefixName = '';
    Object.keys(vals).forEach(function (a) {
      if (vals[a] < n) {
        prefixNum = Math.round(n / (vals[a] / 10)) / 10;
        prefixName = a;
      }
    });
    return prefixNum + prefixName.toUpperCase();
  };

  window.likePost = function (id, like) {
    request({
      action: like ? "likePost" : "unlikePost",
      like: true,
      id: id,
      post: true
    });
  };

  window.likeComment = function (id, like) {
    request({
      action: like ? "likePost" : "unlikePost",
      like: true,
      id: id,
      post: false
    });
  };

  window.dislikePost = function (id, dislike) {
    request({
      action: dislike ? "dislikePost" : "undislikePost",
      like: false,
      id: id,
      post: true
    });
  };

  window.dislikeComment = function (id, dislike) {
    request({
      action: dislike ? "dislikePost" : "undislikePost",
      like: false,
      id: id,
      post: false
    });
  };

  window.request = function (body, callback) {
    callback = callback || function (a) {
      return true;
    };

    fetch('/', {
      method: 'POST',
      headers: {
        'X-CSRF-TOKEN': csrf,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(function (a) {
      return a.json();
    }).then(callback);
  };

  var likePost = window.likePost;
  var prefixCount = window.prefixCount;
  var formatNum = window.formatNum;
  var request = window.request;
  var csrf = window.csrf;
  var data = window.data;
  var csrf_field = window.csrf_field;

  window.splitNewlines = function (s) {
    return s.split('\n').map(function (a) {
      return /*#__PURE__*/React.createElement("p", null, a);
    });
  };

  window.getInteraction = function (likes, dislikes) {
    return likes.includes(data.name) ? 'like' : dislikes.includes(data.name) ? 'dislike' : 'none';
  };

  window.getDifferenceString = function (date) {
    var diff = +new Date() - +date; // console.log("Difference: ", diff, " - Original: ", date)

    var consts = {
      second: 1000,
      minute: 1000 * 60,
      hour: 1000 * 60 * 60,
      day: 1000 * 60 * 60 * 24,
      month: 1000 * 60 * 60 * 24 * 30,
      year: 1000 * 60 * 60 * 24 * 365
    };
    var diffUnit = "seconds";
    var diffVal = 0;
    Object.keys(consts).forEach(function (unit) {
      if (diff >= consts[unit]) {
        diffUnit = unit;
        diffVal = Math.round(diff / consts[unit]);
      }
    });
    if (diffVal > 1) diffUnit += "s";
    return {
      str: diffVal < 1 ? "just now" : diffVal + " " + diffUnit + " ago",
      unit: diffUnit,
      value: diffVal
    };
  };

  window.ErrorMessage = /*#__PURE__*/function (_React$Component) {
    _inherits(ErrorMessage, _React$Component);

    var _super = _createSuper(ErrorMessage);

    function ErrorMessage(props) {
      _classCallCheck(this, ErrorMessage);

      return _super.call(this, props);
    }

    _createClass(ErrorMessage, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("center", {
          style: {
            padding: "15px"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: "grey"
          }
        }, /*#__PURE__*/React.createElement("b", null, this.props.title, ":"), " ", this.props.desc, " "));
      }
    }]);

    return ErrorMessage;
  }(React.Component);

  var LikeButton = /*#__PURE__*/function (_React$Component2) {
    _inherits(LikeButton, _React$Component2);

    var _super2 = _createSuper(LikeButton);

    function LikeButton(props) {
      var _this;

      _classCallCheck(this, LikeButton);

      _this = _super2.call(this, props);
      _this.state = {
        interaction: getInteraction(_this.props.likes, _this.props.dislikes),
        likes: _this.props.likes || [],
        dislikes: _this.props.dislikes || []
      };
      _this.interact = _this.interact.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(LikeButton, [{
      key: "interact",
      value: function interact(action) {
        var interactionSetTo;
        if (this.state.interaction == action) interactionSetTo = 'none';else interactionSetTo = action;
        this.setState({
          interaction: interactionSetTo
        });
        this.setState(this.props.callback(action == 'like'));
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var likes = this.state.likes !== undefined ? this.state.likes.length : 0;
        var dislikes = this.state.dislikes !== undefined ? this.state.dislikes.length : 0;
        var ratio = likes > 0 ? Math.floor(100 * (likes - dislikes) / (likes + dislikes)) : 0;
        var ratioUnit = likes > 0 ? "like" : "dislike";
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: "inline-block"
          }
        }, /*#__PURE__*/React.createElement("button", {
          className: "btn " + (this.props.small ? "btn-sm " : "") + (this.state.interaction == 'like' ? "btn-primary" : "btn-outline-primary"),
          onClick: function onClick(e) {
            return _this2.interact('like');
          },
          disabled: data.id == 0,
          style: {
            margin: '8px 4px',
            display: "inline-block"
          }
        }, /*#__PURE__*/React.createElement("span", {
          title: formatNum(likes) + " likes"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fa fa-thumbs-up"
        }), " ", prefixCount(likes))), /*#__PURE__*/React.createElement("button", {
          className: "btn " + (this.props.small ? "btn-sm " : "") + (this.state.interaction == 'dislike' ? "btn-danger" : "btn-outline-danger"),
          onClick: function onClick(e) {
            return _this2.interact('dislike');
          },
          disabled: data.id == 0,
          style: {
            margin: '8px 4px',
            display: "inline-block"
          }
        }, /*#__PURE__*/React.createElement("span", {
          title: formatNum(dislikes) + " dislikes"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fa fa-thumbs-down"
        }), " ", prefixCount(dislikes))), "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
          className: "grey"
        }, likes > 0 ? ratio + "% " + ratioUnit + "d" : ""));
      }
    }]);

    return LikeButton;
  }(React.Component);

  _defineProperty(LikeButton, "defaultProps", {
    likes: [],
    dislikes: [],
    callback: function callback() {
      return true;
    },
    small: false
  });

  window.PostComment = (_temp = _class = /*#__PURE__*/function (_React$Component3) {
    _inherits(PostComment, _React$Component3);

    var _super3 = _createSuper(PostComment);

    function PostComment(props) {
      var _this3;

      _classCallCheck(this, PostComment);

      _this3 = _super3.call(this, props);
      _this3.state = {
        likes: _this3.props.likes,
        dislikes: _this3.props.dislikes,
        interaction: getInteraction(_this3.props.likes, _this3.props.dislikes),
        author: _this3.props.author,
        content: _this3.props.content,
        id: _this3.props.id,
        created_at: _this3.props.created_at,
        loaded: true,
        error: ''
      };

      if (_this3.props.id == undefined) {
        _this3.state.loaded = 'error';
        _this3.state.error = 'An unknown error occured';
      }

      _this3.toggleCommentLike = _this3.toggleCommentLike.bind(_assertThisInitialized(_this3));
      return _this3;
    }

    _createClass(PostComment, [{
      key: "toggleCommentLike",
      value: function toggleCommentLike(action) {
        var likesToSet = this.state.likes;
        var dislikesToSet = this.state.dislikes;
        var listToModify = action ? likesToSet : dislikesToSet;
        var otherList = action ? dislikesToSet : likesToSet;
        ;
        action = action ? "like" : "dislike";
        var interaction = getInteraction(this.state.likes, this.state.dislikes);
        if (!(interaction == action)) listToModify.push(data.name);else listToModify = listToModify.filter(function (a) {
          return a != data.name;
        });
        otherList = otherList.filter(function (a) {
          return a != data.name;
        });
        likesToSet = action == "like" ? listToModify : otherList;
        dislikesToSet = action == "like" ? otherList : listToModify;
        this.setState({
          interaction: interaction == action ? 'none' : action,
          dislikes: dislikesToSet,
          likes: likesToSet
        });
        if (action == 'like') likeComment(this.state.id, interaction != action);else dislikeComment(this.state.id, interaction != action);
        return {
          dislikes: dislikesToSet,
          likes: likesToSet
        };
      } // toggleCommentLike() {
      //     var likesToSet = this.state.likes
      //     if ((!this.state.liked  == true) && !likesToSet.includes(data.name)) likesToSet.push(data.name)
      //     else likesToSet = likesToSet.filter(a => a != data.name)
      //     this.setState({liked: !this.state.liked, likes: likesToSet})
      //     likeComment(this.state.id, !this.state.liked)
      //     return {likes: likesToSet}
      // }
      // toggleCommentDislike() {
      //     var dislikesToSet = this.state.dislikes
      //     if ((!this.state.disliked  == true) && !dislikesToSet.includes(data.name)) dislikesToSet.push(data.name)
      //     else dislikesToSet = dislikesToSet.filter(a => a != data.name)
      //     this.setState({disliked: !this.state.disliked, dislikes: dislikesToSet})
      //     dislikeComment(this.state.id, !this.state.disliked)
      //     return {dislikes: dislikesToSet}
      // }

    }, {
      key: "render",
      value: function render() {
        var _this4 = this;

        if (this.state.loaded == false) return /*#__PURE__*/React.createElement(Loading, {
          text: " "
        });else if (this.state.loaded == 'error') return /*#__PURE__*/React.createElement(ErrorMessage, {
          title: "Failed to load comment",
          desc: this.state.error
        });
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: "block",
            margin: '0',
            padding: "4px 10px",
            borderBottom: "0px solid #bbb"
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: "12px",
            paddingBottom: '0'
          }
        }, this.state.author == data.name ? /*#__PURE__*/React.createElement("b", null, "Your Comment:") : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, this.state.author), " commented:")), /*#__PURE__*/React.createElement("div", {
          className: "comment " + (this.state.author == data.name ? "owncomment" : "")
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            padding: "5px 10px",
            marginBottom: "0px"
          }
        }, /*#__PURE__*/React.createElement("span", {
          key: this.state.id
        }, this.state.content), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("sub", {
          className: "grey"
        }, window.getDifferenceString(new Date(this.state.created_at)).str))), /*#__PURE__*/React.createElement("div", {
          title: data.id == 0 ? "Login to interact with this comment" : "",
          style: {
            marginBottom: "8px"
          }
        }, /*#__PURE__*/React.createElement(LikeButton, {
          small: true,
          likes: this.state.likes,
          dislikes: this.state.dislikes,
          callback: function callback(like) {
            return _this4.toggleCommentLike(like);
          }
        })));
      }
    }]);

    return PostComment;
  }(React.Component), _defineProperty(_class, "defaultProps", {
    id: undefined,
    author: '[unknown]',
    content: "Failed to load post.",
    likes: [],
    dislikes: []
  }), _temp);
  window.Post = (_temp2 = _class2 = /*#__PURE__*/function (_React$Component4) {
    _inherits(Post, _React$Component4);

    var _super4 = _createSuper(Post);

    function Post(props) {
      var _this5;

      _classCallCheck(this, Post);

      _this5 = _super4.call(this, props);
      _this5.state = {
        likes: _this5.props.likes,
        dislikes: _this5.props.dislikes,
        interaction: getInteraction(_this5.props.likes, _this5.props.dislikes),
        author: _this5.props.author,
        content: _this5.props.content,
        id: _this5.props.id,
        comments: _this5.props.comments,
        description: _this5.props.description,
        created_at: _this5.props.created_at,
        loaded: true,
        error: ''
      };

      if (_this5.props.id == undefined) {
        _this5.state.loaded = 'error';
        _this5.state.error = 'An unknown error occured';
      }

      _this5.togglePostLike = _this5.togglePostLike.bind(_assertThisInitialized(_this5));
      _this5.postLoaded = _this5.postLoaded.bind(_assertThisInitialized(_this5));

      if (_this5.props.fetch) {
        _this5.state.loaded = false;
        request({
          action: "getPost",
          id: _this5.props.fetch
        }, _this5.postLoaded);
      }

      return _this5;
    }

    _createClass(Post, [{
      key: "postLoaded",
      value: function postLoaded(post) {
        if (post.error !== undefined) this.setState({
          loaded: 'error',
          error: post.error
        });
        this.setState({
          loaded: true,
          id: post.id,
          author: post.author,
          content: post.content,
          description: post.description,
          created_at: post.created_at,
          likes: JSON.parse(post.likes),
          dislikes: JSON.parse(post.dislikes),
          interaction: getInteraction(JSON.parse(post.likes), JSON.parse(post.dislikes))
        });
      }
    }, {
      key: "togglePostLike",
      value: function togglePostLike(action) {
        var likesToSet = this.state.likes;
        var dislikesToSet = this.state.dislikes;
        var listToModify = action ? likesToSet : dislikesToSet;
        var otherList = action ? dislikesToSet : likesToSet;
        ;
        action = action ? "like" : "dislike";
        var interaction = getInteraction(this.state.likes, this.state.dislikes);
        if (!(interaction == action)) listToModify.push(data.name);else listToModify = listToModify.filter(function (a) {
          return a != data.name;
        });
        otherList = otherList.filter(function (a) {
          return a != data.name;
        });
        likesToSet = action == "like" ? listToModify : otherList;
        dislikesToSet = action == "like" ? otherList : listToModify;
        this.setState({
          interaction: interaction == 'like' ? 'none' : 'like',
          dislikes: dislikesToSet,
          likes: likesToSet
        });
        if (action == 'like') likePost(this.state.id, interaction != action);else dislikePost(this.state.id, interaction != action);
        return {
          dislikes: dislikesToSet,
          likes: likesToSet
        };
      }
    }, {
      key: "togglePostDislike",
      value: function togglePostDislike() {
        if (!(interaction == 'dislike')) dislikesToSet.push(data.name);else dislikesToSet = dislikesToSet.filter(function (a) {
          return a != data.name;
        });
        likesToSet = likesToSet.filter(function (a) {
          return a != data.name;
        });
        this.setState({
          disliked: interaction == 'dislike' ? 'none' : 'dislike',
          dislikes: dislikesToSet,
          likes: likesToSet
        });
        dislikePost(this.state.id);
        return {
          dislikes: dislikesToSet,
          likes: likesToSet
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this6 = this;

        if (this.state.loaded == false) return /*#__PURE__*/React.createElement(Loading, {
          key: this.state.id,
          text: " "
        });else if (this.state.loaded == 'error') return /*#__PURE__*/React.createElement(ErrorMessage, {
          title: "Failed to load post",
          desc: this.state.error
        });
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "card post " + (this.state.author == data.name ? "ownpost" : "")
        }, /*#__PURE__*/React.createElement("div", {
          className: "card-header"
        }, this.state.author == data.name ? /*#__PURE__*/React.createElement("b", null, "Your Post") : /*#__PURE__*/React.createElement("span", null, "Posted by ", /*#__PURE__*/React.createElement("b", null, this.state.author)), " - ", /*#__PURE__*/React.createElement("a", {
          href: "/posts/" + this.state.id,
          className: "grey"
        }, window.getDifferenceString(new Date(this.state.created_at)).str)), /*#__PURE__*/React.createElement("div", {
          className: "card-body"
        }, /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: "28px"
          }
        }, this.state.content), this.state.description === "" || this.state.description == undefined ? "" : /*#__PURE__*/React.createElement("div", {
          className: "post-description collapsed"
        }, /*#__PURE__*/React.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: this.state.description
          }
        }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("button", {
          className: "btn btn-sm btn-outline-primary",
          onClick: function onClick(e) {
            return e.target.parentElement.parentElement.classList.remove("collapsed");
          }
        }, " ", /*#__PURE__*/React.createElement("i", {
          className: "fa fa-arrow-down"
        }), " Show More"))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("span", {
          title: data.id == 0 ? "Login to interact with this post" : ""
        }, /*#__PURE__*/React.createElement(LikeButton, {
          likes: this.state.likes,
          dislikes: this.state.dislikes,
          callback: function callback(like) {
            return _this6.togglePostLike(like);
          }
        })), this.state.comments == false && /*#__PURE__*/React.createElement("a", {
          onClick: function (e) {
            this.setState({
              comments: true
            });
            e.preventDefault();
          }.bind(this),
          style: {
            "float": "right"
          },
          className: "primary-link",
          href: "#"
        }, "View Comments"))), this.state.comments && /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: "10px"
          }
        }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(PostComments, {
          closeComments: function closeComments(e) {
            return _this6.setState({
              comments: false
            });
          },
          key: this.state.id,
          post_id: this.state.id
        })));
      }
    }]);

    return Post;
  }(React.Component), _defineProperty(_class2, "defaultProps", {
    id: undefined,
    author: '[unknown]',
    content: "Failed to load post.",
    likes: [],
    dislikes: [],
    fetch: false,
    comments: false
  }), _temp2);
  window.SubmitComment = (_temp3 = _class3 = /*#__PURE__*/function (_React$Component5) {
    _inherits(SubmitComment, _React$Component5);

    var _super5 = _createSuper(SubmitComment);

    function SubmitComment(props) {
      var _this7;

      _classCallCheck(this, SubmitComment);

      _this7 = _super5.call(this, props);
      _this7.submitComment = _this7.submitComment.bind(_assertThisInitialized(_this7));
      _this7.state = {
        content: data.id == 0 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ErrorMessage, {
          title: "Login to Comment",
          desc: "Login or Signup to participate in this post."
        }), /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("a", {
          href: "/register",
          className: "btn btn-primary btn-sm"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fa fa-user-plus"
        }), " Register Now"))) : /*#__PURE__*/React.createElement("form", {
          onSubmit: function onSubmit(e) {
            return e.preventDefault();
          },
          className: "input-group",
          style: {
            marginTop: "15px"
          }
        }, /*#__PURE__*/React.createElement("textarea", {
          required: true,
          id: "comment-submit-textbox",
          className: "form-control",
          rows: "1",
          name: "content",
          placeholder: "Comment as " + data.name,
          style: {
            resize: "none"
          }
        }), /*#__PURE__*/React.createElement("input", {
          type: "submit",
          className: "btn btn-outline-primary group-append",
          onClick: _this7.submitComment,
          value: "Submit"
        }))
      };

      if (_this7.props.post_id == undefined) {
        _this7.state.content = /*#__PURE__*/React.createElement(ErrorMessage, {
          title: "Failed to load comments",
          desc: "Post ID not received"
        });
      }

      return _this7;
    }

    _createClass(SubmitComment, [{
      key: "submitComment",
      value: function submitComment() {
        var textbox = document.querySelector('#comment-submit-textbox');
        var content = textbox.value;

        if (content.replaceAll(' ', '') == '') {
          return textbox.reportValidity();
        }

        this.props.reload(false, true);
        request({
          action: "addComment",
          content: content,
          post_id: this.props.post_id
        }, this.props.reload);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("span", {
          key: Math.random()
        }, this.state.content);
      }
    }]);

    return SubmitComment;
  }(React.Component), _defineProperty(_class3, "defaultProps", {
    post_id: undefined
  }), _temp3);
  window.PostComments = (_temp4 = _class4 = /*#__PURE__*/function (_React$Component6) {
    _inherits(PostComments, _React$Component6);

    var _super6 = _createSuper(PostComments);

    function PostComments(props) {
      var _this8;

      _classCallCheck(this, PostComments);

      _this8 = _super6.call(this, props);
      _this8.state = {
        content: /*#__PURE__*/React.createElement(Loading, {
          text: "Loading Comments"
        }),
        length: 0
      };
      _this8.loadComments = _this8.loadComments.bind(_assertThisInitialized(_this8));
      _this8.reloadComments = _this8.reloadComments.bind(_assertThisInitialized(_this8));

      if (_this8.props.post_id == undefined) {
        _this8.state.content = /*#__PURE__*/React.createElement(ErrorMessage, {
          title: "Failed to load comments",
          desc: "Post ID not received"
        });
      } else {
        _this8.reloadComments(true);
      }

      return _this8;
    }

    _createClass(PostComments, [{
      key: "reloadComments",
      value: function reloadComments(set, loadOnly) {
        var toSet = /*#__PURE__*/React.createElement(Loading, {
          key: this.props.post_id,
          text: "Adding Comment..."
        });
        if (!set) this.setState({
          content: toSet
        });else this.state.content = /*#__PURE__*/React.createElement(Loading, {
          key: this.props.post_id,
          text: "Loading Comments..."
        });
        if (loadOnly) return false;
        request({
          action: 'getComments',
          id: this.props.post_id
        }, this.loadComments);
      }
    }, {
      key: "loadComments",
      value: function loadComments(comments) {
        var commentsList = [];

        if (comments.length == 0) {
          commentsList.push( /*#__PURE__*/React.createElement(ErrorMessage, {
            key: 10 * this.props.post_id,
            title: "No comments",
            desc: "No comments found for this post. Add one below."
          }));
        } else commentsList = comments.map(function (comment) {
          return /*#__PURE__*/React.createElement(PostComment, {
            key: comment.id,
            id: comment.id,
            author: comment.author,
            content: comment.content,
            created_at: comment.created_at,
            likes: JSON.parse(comment.likes),
            dislikes: JSON.parse(comment.dislikes)
          });
        });

        commentsList.push( /*#__PURE__*/React.createElement(SubmitComment, {
          key: this.props.post_id + "" + this.props.post_id,
          reload: this.reloadComments,
          style: {
            marginTop: "15px"
          },
          post_id: this.props.post_id
        }));
        this.setState({
          content: commentsList,
          length: comments.length
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "card"
        }, /*#__PURE__*/React.createElement("div", {
          className: "card-header"
        }, /*#__PURE__*/React.createElement("h2", null, this.state.length > 0 ? this.state.length + " " : "", "Comment", this.state.length == 1 ? "" : "s", ":", /*#__PURE__*/React.createElement("span", {
          style: {
            cursor: "pointer",
            "float": "right"
          },
          onClick: this.props.closeComments
        }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
          className: "card-body"
        }, this.state.content));
      }
    }]);

    return PostComments;
  }(React.Component), _defineProperty(_class4, "defaultProps", {
    post_id: undefined
  }), _temp4);
  window.Loading = (_temp5 = _class5 = /*#__PURE__*/function (_React$Component7) {
    _inherits(Loading, _React$Component7);

    var _super7 = _createSuper(Loading);

    function Loading(props) {
      _classCallCheck(this, Loading);

      return _super7.call(this, props);
    }

    _createClass(Loading, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("center", {
          style: this.props.inline ? {
            display: "inline-block"
          } : {}
        }, /*#__PURE__*/React.createElement("img", {
          src: imgbase64,
          className: "loader",
          style: this.props.inline ? {
            margin: "0"
          } : {}
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            color: "grey"
          }
        }, this.props.text));
      }
    }]);

    return Loading;
  }(React.Component), _defineProperty(_class5, "defaultProps", {
    text: "Loading...",
    inline: false
  }), _temp5);
  window.App = (_temp6 = _class6 = /*#__PURE__*/function (_React$Component8) {
    _inherits(App, _React$Component8);

    var _super8 = _createSuper(App);

    function App(props) {
      var _this9;

      _classCallCheck(this, App);

      _this9 = _super8.call(this, props);
      _this9.state = {
        error: false,
        errorStr: ''
      };
      window.reportError = _this9.reportError.bind(_assertThisInitialized(_this9));
      local.reportError = window.reportError;
      return _this9;
    }

    _createClass(App, [{
      key: "reportError",
      value: function reportError(errorStr) {
        this.setState({
          error: true,
          errorStr: errorStr
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this10 = this;

        if (this.state.error) return /*#__PURE__*/React.createElement("div", {
          className: "error-screen"
        }, /*#__PURE__*/React.createElement("h1", null, "Woopsies uh... I ran into an error :("), /*#__PURE__*/React.createElement("p", null, "Well that was unexpected. The page is (probably) broken now. But you can still try to ", /*#__PURE__*/React.createElement("a", {
          href: "#",
          onClick: function onClick(e) {
            return e.preventDefault(_this10.setState({
              error: false
            }));
          }
        }, "close this error"), " and continue your work."), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("p", null, "Anyway, here's all I know:"), /*#__PURE__*/React.createElement("pre", null, this.state.errorStr.stack));
        return this.props.app;
      }
    }]);

    return App;
  }(React.Component), _defineProperty(_class6, "defaultProps", {
    app: /*#__PURE__*/React.createElement("span", null, "if you can see this then something probably didnt do its job correctly")
  }), _temp6);
  var loadingInterval = setInterval(function () {
    document.querySelectorAll(".loader").forEach(function (loader) {
      var degreesRotation = parseInt(loader.style.transform.replace("rotate", "").replace("deg", "").replace("(", "").replace(")", "")) + 30;
      if (isNaN(degreesRotation)) degreesRotation = 0;
      degreesRotation = degreesRotation >= 360 ? 0 : degreesRotation;
      loader.style.transform = "rotate(" + degreesRotation + "deg)";
    });
  }, 50);

  var remove = function remove() {
    var element = Object.values(document.querySelectorAll("*")).filter(function (a) {
      return a.title == 'Hosted on free web hosting 000webhost.com. Host your own website for FREE.';
    });

    if (element.length > 0) {
      element[0].outerHTML = '';
      clearInterval(removeWatermark);
      window.remove = undefined;
    }
  };

  var removeWatermark = setInterval(remove, 50);
  remove();
} catch (e) {
  local.reportError(e);
}

/***/ }),

/***/ 2:
/*!*****************************************!*\
  !*** multi ./resources/jsx/commons.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AMG\Documents\GitHub\website-thing\projects\posts\resources\jsx\commons.jsx */"./resources/jsx/commons.jsx");


/***/ })

/******/ });