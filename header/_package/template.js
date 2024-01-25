var oc=oc||{};oc.components=oc.components||{};oc.components['22077348fbb951e9523bdca47c495fd3ec389bfe']=function(model) {
    var __toOcStaticPathUrl = function(args) {
      return model.component.props._staticPath + 'public/' + args;
    } 
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = model.component.props;
    var __$$oc_initialData__ = rest;
    var __$$oc_Settings__ = {id: model.id, staticPath: _staticPath, baseUrl: _baseUrl, name: _componentName, version: _componentVersion};
    var innerFn = function(model){
  oc.reactComponents = oc.reactComponents || {};
  oc.reactComponents['f6468a7013f6cc54252dce38094c4031ad418f41'] = oc.reactComponents['f6468a7013f6cc54252dce38094c4031ad418f41'] || ((function() {
    var clientBundle = function(React2) {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = React2, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a)
      m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var DefaultContext = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  };
  var IconContext = React2.createContext && /* @__PURE__ */ React2.createContext(DefaultContext);
  var _excluded = ["attr", "size", "title"];
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
        _defineProperty(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function Tree2Element(tree) {
    return tree && tree.map((node, i) => /* @__PURE__ */ React2.createElement(node.tag, _objectSpread({
      key: i
    }, node.attr), Tree2Element(node.child)));
  }
  function GenIcon(data) {
    return (props) => /* @__PURE__ */ React2.createElement(IconBase, _extends({
      attr: _objectSpread({}, data.attr)
    }, props), Tree2Element(data.child));
  }
  function IconBase(props) {
    var elem = (conf) => {
      var {
        attr,
        size,
        title
      } = props, svgProps = _objectWithoutProperties(props, _excluded);
      var computedSize = size || conf.size || "1em";
      var className;
      if (conf.className)
        className = conf.className;
      if (props.className)
        className = (className ? className + " " : "") + props.className;
      return /* @__PURE__ */ React2.createElement("svg", _extends({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, conf.attr, attr, svgProps, {
        className,
        style: _objectSpread(_objectSpread({
          color: props.color || conf.color
        }, conf.style), props.style),
        height: computedSize,
        width: computedSize,
        xmlns: "http://www.w3.org/2000/svg"
      }), title && /* @__PURE__ */ React2.createElement("title", null, title), props.children);
    };
    return IconContext !== void 0 ? /* @__PURE__ */ React2.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
  }
  function FaShoppingCart(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 576 512" }, "child": [{ "tag": "path", "attr": { "d": "M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" }, "child": [] }] })(props);
  }
  const App = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", paddingLeft: "20px", paddingRight: "20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-400", style: { fontSize: "50px", fontWeight: "bold", padding: "10px" }, children: "Shopping Center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { background: "black", borderRadius: "30px", color: "white", width: "20px", height: "20px", display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", marginLeft: "45px", marginTop: "5px" }, children: "0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaShoppingCart, { style: { fontSize: "50px", padding: "8px", fill: "white" } })
      ] })
    ] }) });
  };
  var useData$1 = {};
  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(useData$1, "__esModule", { value: true });
  useData$1.useData = DataProvider_1 = useData$1.DataProvider = void 0;
  const jsx_runtime_1 = jsxRuntimeExports;
  const react_1 = __importDefault(React2);
  const DataContext = react_1.default.createContext({});
  const DataProvider = ({ children, ...props }) => {
    return (0, jsx_runtime_1.jsx)(DataContext.Provider, { value: props, children });
  };
  var DataProvider_1 = useData$1.DataProvider = DataProvider;
  function useData() {
    const { value: { getData, ...rest } } = react_1.default.useContext(DataContext);
    const asyncGetData = react_1.default.useCallback((data) => {
      return new Promise((resolve, reject) => {
        getData({ ...rest, ...data }, (err, newData) => {
          if (err) {
            reject(err);
          } else {
            resolve(newData);
          }
        });
      });
    }, []);
    return { getData: asyncGetData, ...rest };
  }
  useData$1.useData = useData;
  function OCProvider(props) {
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = props;
    React2.useEffect(() => {
      window.oc.events.fire("oc:componentDidMount", rest);
    }, []);
    function _getData(providerProps, parameters, cb) {
      return window.oc.getData(
        {
          name: providerProps._componentName,
          version: providerProps._componentVersion,
          baseUrl: providerProps._baseUrl,
          parameters
        },
        (err, data) => {
          if (err) {
            return cb(err);
          }
          const { _staticPath: _staticPath2, _baseUrl: _baseUrl2, _componentName: _componentName2, _componentVersion: _componentVersion2, ...rest2 } = data.component.props;
          cb(null, rest2, data.component.props);
        }
      );
    }
    function _getSetting(providerProps, setting) {
      const settingHash = {
        name: providerProps._componentName,
        version: providerProps._componentVersion,
        baseUrl: providerProps._baseUrl,
        staticPath: providerProps._staticPath
      };
      return settingHash[setting];
    }
    const getData = (parameters, cb) => {
      if (!cb || typeof cb !== "function") {
        return new Promise((resolve, reject) => {
          _getData(props, parameters, (err, data) => {
            if (err) {
              return reject(err);
            }
            resolve(data);
          });
        });
      }
      _getData(props, parameters, cb);
    };
    const getSetting = (setting) => _getSetting(props, setting);
    rest.getData = getData;
    rest.getSetting = getSetting;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DataProvider_1, { value: { ...rest }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, { ...rest }) });
  }
  function renderer(props, element, ssr) {
    if (window.ReactDOM.createRoot) {
      if (ssr) {
        window.ReactDOM.hydrateRoot(element, /* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }));
      } else {
        window.ReactDOM.createRoot(element).render(/* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }));
      }
    } else {
      if (ssr) {
        window.ReactDOM.hydrate(/* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }), element);
      } else {
        window.ReactDOM.render(/* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }), element);
      }
    }
  }
  renderer.component = OCProvider;
  return renderer;
}(React);

    return clientBundle;
  })());
  if (!model) return;
  var modelHTML =  model.__html ? model.__html : '';
  var ssr = !!modelHTML;
  var externals = [{"global":"React","url":"https://unpkg.com/react@18.2.0/umd/react.production.min.js","devUrl":"https://unpkg.com/react@18.2.0/umd/react.development.js","name":"react"},{"global":"ReactDOM","url":"https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js","devUrl":"https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js","name":"react-dom"}];
  var staticPath = model.component.props._staticPath;
  if (ssr) {
    externals.push({
      global: ['oc', 'components', '22077348fbb951e9523bdca47c495fd3ec389bfe'],
      url: staticPath + 'template.js',
      name: "template"
    });
  }
  var props = JSON.stringify(model.component.props);
  oc = oc || {};
  oc.__reactTemplate = oc.__reactTemplate || { count: 0 };
  var count = oc.__reactTemplate.count;
  var templateId = "oc-reactRoot-header-" + count;
  oc.__reactTemplate.count++;
  var ssrCall = 'oc.components["22077348fbb951e9523bdca47c495fd3ec389bfe"]({ component: { props:' + props + ' } });';

  return '<div id="' + templateId + '" class="oc-reactRoot-header">' + modelHTML + '</div>' +
    '' +
    '<script>' +
    'oc = oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    '' +
      'oc.requireSeries(' + JSON.stringify(externals) + ', function(){' +
        'var targetNode = document.getElementById("' + templateId + '");' +
        'targetNode.setAttribute("id","");' +
        (ssr ? ssrCall : '') +
        'oc.components["22077348fbb951e9523bdca47c495fd3ec389bfe"]({ component: { props:' + props + ' } });' +
        'oc.reactComponents["f6468a7013f6cc54252dce38094c4031ad418f41"](' + props + ', targetNode, ' + !!modelHTML  + ');' +
      '});' +
    '});' +
  '</script>'
};
    return innerFn(model);
  }
  