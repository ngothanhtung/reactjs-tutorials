webpackJsonp([0,2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Layout = __webpack_require__(159);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = document.getElementById('app');
	_reactDom2.default.render(_react2.default.createElement(_Layout2.default, null), app);

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Header = __webpack_require__(160);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Layout = function (_React$Component) {
		_inherits(Layout, _React$Component);
	
		function Layout(props) {
			_classCallCheck(this, Layout);
	
			var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
	
			_this.state = {
				name: 'William'
			};
			return _this;
		}
	
		_createClass(Layout, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"h1",
					null,
					"It's abc ",
					this.state.name,
					"!"
				);
			}
		}]);
	
		return Layout;
	}(_react2.default.Component);
	
	exports.default = Layout;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_React$Component) {
		_inherits(Header, _React$Component);
	
		function Header() {
			_classCallCheck(this, Header);
	
			return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
		}
	
		_createClass(Header, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"header",
					null,
					"Header"
				);
			}
		}]);
	
		return Header;
	}(_react2.default.Component);
	
	exports.default = Header;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiTGF5b3V0IiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsS0FBTUEsTUFBTUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUFaO0FBQ0FDLG9CQUFTQyxNQUFULENBQWdCLDhCQUFDLGdCQUFELE9BQWhCLEVBQTRCSixHQUE1QixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCSyxNOzs7QUFDcEIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwrR0FDWkEsS0FEWTs7QUFFbEIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU07QUFETSxJQUFiO0FBRmtCO0FBS2xCOzs7OzRCQUNRO0FBQ1IsV0FDQztBQUFBO0FBQUE7QUFBQTtBQUFjLFVBQUtELEtBQUwsQ0FBV0MsSUFBekI7QUFBQTtBQUFBLEtBREQ7QUFHQTs7OztHQVhrQ0MsZ0JBQU1DLFM7O21CQUFyQkwsTTs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7Ozs7Ozs7Ozs7O0tBRXFCTSxNOzs7Ozs7Ozs7Ozs0QkFDWDtBQUNSLFdBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUREO0FBR0E7Ozs7R0FMa0NGLGdCQUFNQyxTOzttQkFBckJDLE0iLCJmaWxlIjoiY2xpZW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuUmVhY3RET00ucmVuZGVyKDxMYXlvdXQgLz4sIGFwcCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xpZW50LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5hbWU6ICdXaWxsaWFtJ1xuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxoMT5JdCdzIGFiYyB7dGhpcy5zdGF0ZS5uYW1lfSE8L2gxPlxuXHRcdCk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxoZWFkZXI+SGVhZGVyPC9oZWFkZXI+XG5cdFx0KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9