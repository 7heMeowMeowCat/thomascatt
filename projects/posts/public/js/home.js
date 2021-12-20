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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/jsx/home.jsx":
/*!********************************!*\
  !*** ./resources/jsx/home.jsx ***!
  \********************************/
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

try {
  var loadPosts = function loadPosts(callback) {
    request({
      action: "loadPosts"
    }, callback);
  };

  var likePost = window.likePost;
  var request = window.request;
  var csrf = window.csrf;
  var data = window.data;
  var csrf_field = window.csrf_field;

  var CreatePostSection = /*#__PURE__*/function (_React$Component) {
    _inherits(CreatePostSection, _React$Component);

    var _super = _createSuper(CreatePostSection);

    function CreatePostSection(props) {
      var _this;

      _classCallCheck(this, CreatePostSection);

      _this = _super.call(this, props);
      _this.state = {
        expanded: false,
        loading: false,
        mceLoading: true
      };
      _this.submitPost = _this.submitPost.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(CreatePostSection, [{
      key: "submitPost",
      value: function submitPost(e) {
        e.preventDefault();
        var postTitle = e.target.querySelector("input[name=content]").value.trim();
        var postDesc = tinymce.get()[0].getContent();
        if (postTitle == "") return alert("Why do you think I would have forgotten to block this?"); // console.log("Title: ", JSON.stringify(postTitle), "\nDescription: ", JSON.stringify(postDesc))

        this.setState({
          loading: true
        });
        request({
          action: "submit",
          content: postTitle,
          description: postDesc
        }, function (response) {
          document.querySelector('#reload-posts').click();
          e.target.querySelector("input[name=content]").value = '';
          tinymce.get()[0].setContent('');
          this.setState({
            loading: false,
            expanded: false
          });
        }.bind(this));
      }
    }, {
      key: "render",
      value: function render() {
        var _tinymce$init;

        return /*#__PURE__*/React.createElement("div", {
          className: "card"
        }, /*#__PURE__*/React.createElement("div", {
          className: "card-header"
        }, "Logged in as ", /*#__PURE__*/React.createElement("b", null, data.name), /*#__PURE__*/React.createElement("a", {
          href: "logout",
          style: {
            "float": "right"
          }
        }, /*#__PURE__*/React.createElement("i", {
          className: "fa fa-sign-out"
        }), " Logout")), /*#__PURE__*/React.createElement("div", {
          className: "card-body"
        }, /*#__PURE__*/React.createElement("form", {
          action: "/",
          method: "POST",
          onSubmit: this.submitPost
        }, /*#__PURE__*/React.createElement("input", {
          required: true,
          className: "form-control",
          name: "content",
          placeholder: "Post something...",
          style: {
            resize: "none",
            fontSize: "28px"
          }
        }), /*#__PURE__*/React.createElement("div", {
          hidden: !this.state.expanded
        }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
          name: "description",
          placeholder: "Post Body",
          className: "form-control"
        })), tinymce.init((_tinymce$init = {
          selector: "*[name=description]",
          toolbar: true,
          menubar: false,
          statusbar: false,
          plugins: 'link table autolink'
        }, _defineProperty(_tinymce$init, "toolbar", 'bold italic underline strikethrough | aligncenter alignjustify alignleft alignright | fontselect fontsizeselect | forecolor backcolor | indent outdent | subscript superscript | link table'), _defineProperty(_tinymce$init, "toolbar_mode", "sliding"), _defineProperty(_tinymce$init, "default_link_target", "_blank"), _defineProperty(_tinymce$init, "target_list", false), _defineProperty(_tinymce$init, "height", 400), _defineProperty(_tinymce$init, "setup", function (editor) {
          editor.on('init', function (e) {
            this.setState({
              mceLoading: false
            });
          }.bind(this));
        }.bind(this)), _tinymce$init)) ? "" : "", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
          className: "btn btn-primary",
          style: {
            "float": "right"
          },
          disabled: this.state.loading
        }, this.state.loading ? /*#__PURE__*/React.createElement(Loading, {
          inline: true,
          text: ""
        }) : /*#__PURE__*/React.createElement("i", {
          className: "fa fa-paper-plane"
        }), " Submit Post"), /*#__PURE__*/React.createElement("button", {
          onClick: function (e) {
            e.preventDefault();
            this.setState({
              expanded: !this.state.expanded
            });
          }.bind(this),
          className: "btn btn-outline-secondary",
          disabled: this.state.mceLoading,
          style: {
            "float": "right",
            marginRight: "5px"
          }
        }, this.state.mceLoading ? /*#__PURE__*/React.createElement(Loading, {
          inline: true,
          text: ""
        }) : /*#__PURE__*/React.createElement("i", {
          className: "fa fa-angle-" + (this.state.expanded ? "up" : "down")
        }), " ", this.state.expanded ? "Collapse" : "Expand", " full editor"))));
      }
    }]);

    return CreatePostSection;
  }(React.Component);

  var Posts = /*#__PURE__*/function (_React$Component2) {
    _inherits(Posts, _React$Component2);

    var _super2 = _createSuper(Posts);

    function Posts(props) {
      var _this2;

      _classCallCheck(this, Posts);

      _this2 = _super2.call(this, props);
      _this2.state = {
        content: /*#__PURE__*/React.createElement(Loading, {
          text: "Fetching Posts..."
        }),
        postsLoaded: false
      };
      _this2.setPosts = _this2.setPosts.bind(_assertThisInitialized(_this2));
      _this2.reloadPosts = _this2.reloadPosts.bind(_assertThisInitialized(_this2));
      loadPosts(_this2.setPosts);
      return _this2;
    }

    _createClass(Posts, [{
      key: "reloadPosts",
      value: function reloadPosts() {
        this.setState({
          postsLoaded: false,
          content: [/*#__PURE__*/React.createElement(Loading, {
            text: "Fetching Posts...",
            key: "foo"
          }), this.state.content]
        });
        loadPosts(this.setPosts);
      }
    }, {
      key: "setPosts",
      value: function setPosts(posts) {
        this.setState({
          content: /*#__PURE__*/React.createElement("div", null, posts.map(function (a) {
            return /*#__PURE__*/React.createElement(Post, {
              id: a.id,
              key: a.id,
              author: a.author,
              content: a.content,
              description: a.description,
              created_at: a.created_at,
              likes: a.likes == '' ? [] : JSON.parse(a.likes),
              dislikes: a.dislikes == '' ? [] : JSON.parse(a.dislikes)
            });
          })),
          postsLoaded: true
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
          hidden: true,
          onClick: this.reloadPosts,
          id: "reload-posts"
        }), this.state.content);
      }
    }]);

    return Posts;
  }(React.Component);

  ReactDOM.render( /*#__PURE__*/React.createElement(App, {
    app: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CreatePostSection, null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", null, "Your Feed"), /*#__PURE__*/React.createElement("div", {
      id: "posts-section"
    }, /*#__PURE__*/React.createElement(Posts, null)))
  }), document.getElementById('root'));
  var reportError = window.reportError;
  window.onerror = reportError;
} catch (e) {
  reportError(e);
}

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/jsx/home.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AMG\Documents\GitHub\website-thing\projects\posts\resources\jsx\home.jsx */"./resources/jsx/home.jsx");


/***/ })

/******/ });