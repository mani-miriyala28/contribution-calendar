import * as v from "react";
import Nr, { useState as S, useEffect as Ut } from "react";
import "react-dom";
var $t = { exports: {} }, tt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Gr() {
  if (or) return tt;
  or = 1;
  var e = Nr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(c, u, d) {
    var h, f = {}, b = null, E = null;
    d !== void 0 && (b = "" + d), u.key !== void 0 && (b = "" + u.key), u.ref !== void 0 && (E = u.ref);
    for (h in u) n.call(u, h) && !i.hasOwnProperty(h) && (f[h] = u[h]);
    if (c && c.defaultProps) for (h in u = c.defaultProps, u) f[h] === void 0 && (f[h] = u[h]);
    return { $$typeof: t, type: c, key: b, ref: E, props: f, _owner: o.current };
  }
  return tt.Fragment = r, tt.jsx = l, tt.jsxs = l, tt;
}
var rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function zr() {
  return sr || (sr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Nr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), w = Symbol.iterator, N = "@@iterator";
    function y(s) {
      if (s === null || typeof s != "object")
        return null;
      var g = w && s[w] || s[N];
      return typeof g == "function" ? g : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(s) {
      {
        for (var g = arguments.length, j = new Array(g > 1 ? g - 1 : 0), P = 1; P < g; P++)
          j[P - 1] = arguments[P];
        M("error", s, j);
      }
    }
    function M(s, g, j) {
      {
        var P = k.ReactDebugCurrentFrame, A = P.getStackAddendum();
        A !== "" && (g += "%s", j = j.concat([A]));
        var U = j.map(function(Y) {
          return String(Y);
        });
        U.unshift("Warning: " + g), Function.prototype.apply.call(console[s], console, U);
      }
    }
    var _ = !1, G = !1, ae = !1, fe = !1, ue = !1, me;
    me = Symbol.for("react.module.reference");
    function se(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === i || ue || s === o || s === d || s === h || fe || s === E || _ || G || ae || typeof s == "object" && s !== null && (s.$$typeof === b || s.$$typeof === f || s.$$typeof === l || s.$$typeof === c || s.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === me || s.getModuleId !== void 0));
    }
    function T(s, g, j) {
      var P = s.displayName;
      if (P)
        return P;
      var A = g.displayName || g.name || "";
      return A !== "" ? j + "(" + A + ")" : j;
    }
    function V(s) {
      return s.displayName || "Context";
    }
    function z(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            var g = s;
            return V(g) + ".Consumer";
          case l:
            var j = s;
            return V(j._context) + ".Provider";
          case u:
            return T(s, s.render, "ForwardRef");
          case f:
            var P = s.displayName || null;
            return P !== null ? P : z(s.type) || "Memo";
          case b: {
            var A = s, U = A._payload, Y = A._init;
            try {
              return z(Y(U));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, ie = 0, ve, ge, De, xe, oe, x, R;
    function L() {
    }
    L.__reactDisabledLog = !0;
    function m() {
      {
        if (ie === 0) {
          ve = console.log, ge = console.info, De = console.warn, xe = console.error, oe = console.group, x = console.groupCollapsed, R = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: L,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        ie++;
      }
    }
    function D() {
      {
        if (ie--, ie === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, s, {
              value: ve
            }),
            info: K({}, s, {
              value: ge
            }),
            warn: K({}, s, {
              value: De
            }),
            error: K({}, s, {
              value: xe
            }),
            group: K({}, s, {
              value: oe
            }),
            groupCollapsed: K({}, s, {
              value: x
            }),
            groupEnd: K({}, s, {
              value: R
            })
          });
        }
        ie < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = k.ReactCurrentDispatcher, W;
    function te(s, g, j) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch (A) {
            var P = A.stack.trim().match(/\n( *(at )?)/);
            W = P && P[1] || "";
          }
        return `
` + W + s;
      }
    }
    var I = !1, le;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      le = new Ve();
    }
    function Se(s, g) {
      if (!s || I)
        return "";
      {
        var j = le.get(s);
        if (j !== void 0)
          return j;
      }
      var P;
      I = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var U;
      U = F.current, F.current = null, m();
      try {
        if (g) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (he) {
              P = he;
            }
            Reflect.construct(s, [], Y);
          } else {
            try {
              Y.call();
            } catch (he) {
              P = he;
            }
            s.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            P = he;
          }
          s();
        }
      } catch (he) {
        if (he && P && typeof he.stack == "string") {
          for (var H = he.stack.split(`
`), ce = P.stack.split(`
`), X = H.length - 1, Q = ce.length - 1; X >= 1 && Q >= 0 && H[X] !== ce[Q]; )
            Q--;
          for (; X >= 1 && Q >= 0; X--, Q--)
            if (H[X] !== ce[Q]) {
              if (X !== 1 || Q !== 1)
                do
                  if (X--, Q--, Q < 0 || H[X] !== ce[Q]) {
                    var ye = `
` + H[X].replace(" at new ", " at ");
                    return s.displayName && ye.includes("<anonymous>") && (ye = ye.replace("<anonymous>", s.displayName)), typeof s == "function" && le.set(s, ye), ye;
                  }
                while (X >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        I = !1, F.current = U, D(), Error.prepareStackTrace = A;
      }
      var qe = s ? s.displayName || s.name : "", Ye = qe ? te(qe) : "";
      return typeof s == "function" && le.set(s, Ye), Ye;
    }
    function Ze(s, g, j) {
      return Se(s, !1);
    }
    function ft(s) {
      var g = s.prototype;
      return !!(g && g.isReactComponent);
    }
    function He(s, g, j) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return Se(s, ft(s));
      if (typeof s == "string")
        return te(s);
      switch (s) {
        case d:
          return te("Suspense");
        case h:
          return te("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            return Ze(s.render);
          case f:
            return He(s.type, g, j);
          case b: {
            var P = s, A = P._payload, U = P._init;
            try {
              return He(U(A), g, j);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, mt = {}, gt = k.ReactDebugCurrentFrame;
    function Ue(s) {
      if (s) {
        var g = s._owner, j = He(s.type, s._source, g ? g.type : null);
        gt.setExtraStackFrame(j);
      } else
        gt.setExtraStackFrame(null);
    }
    function Tt(s, g, j, P, A) {
      {
        var U = Function.call.bind(Oe);
        for (var Y in s)
          if (U(s, Y)) {
            var H = void 0;
            try {
              if (typeof s[Y] != "function") {
                var ce = Error((P || "React class") + ": " + j + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              H = s[Y](g, Y, P, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              H = X;
            }
            H && !(H instanceof Error) && (Ue(A), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", j, Y, typeof H), Ue(null)), H instanceof Error && !(H.message in mt) && (mt[H.message] = !0, Ue(A), p("Failed %s type: %s", j, H.message), Ue(null));
          }
      }
    }
    var Pt = Array.isArray;
    function Ne(s) {
      return Pt(s);
    }
    function Mt(s) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, j = g && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return j;
      }
    }
    function C(s) {
      try {
        return $(s), !1;
      } catch {
        return !0;
      }
    }
    function $(s) {
      return "" + s;
    }
    function J(s) {
      if (C(s))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mt(s)), $(s);
    }
    var re = k.ReactCurrentOwner, je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Z, et;
    function de(s) {
      if (Oe.call(s, "ref")) {
        var g = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function q(s) {
      if (Oe.call(s, "key")) {
        var g = Object.getOwnPropertyDescriptor(s, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function pt(s, g) {
      typeof s.ref == "string" && re.current;
    }
    function ke(s, g) {
      {
        var j = function() {
          Z || (Z = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        j.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: j,
          configurable: !0
        });
      }
    }
    function pe(s, g) {
      {
        var j = function() {
          et || (et = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        j.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: j,
          configurable: !0
        });
      }
    }
    var Re = function(s, g, j, P, A, U, Y) {
      var H = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: g,
        ref: j,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: U
      };
      return H._store = {}, Object.defineProperty(H._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(H, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(H, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(H.props), Object.freeze(H)), H;
    };
    function bt(s, g, j, P, A) {
      {
        var U, Y = {}, H = null, ce = null;
        j !== void 0 && (J(j), H = "" + j), q(g) && (J(g.key), H = "" + g.key), de(g) && (ce = g.ref, pt(g, A));
        for (U in g)
          Oe.call(g, U) && !je.hasOwnProperty(U) && (Y[U] = g[U]);
        if (s && s.defaultProps) {
          var X = s.defaultProps;
          for (U in X)
            Y[U] === void 0 && (Y[U] = X[U]);
        }
        if (H || ce) {
          var Q = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          H && ke(Y, Q), ce && pe(Y, Q);
        }
        return Re(s, H, ce, A, P, re.current, Y);
      }
    }
    var Ie = k.ReactCurrentOwner, St = k.ReactDebugCurrentFrame;
    function _e(s) {
      if (s) {
        var g = s._owner, j = He(s.type, s._source, g ? g.type : null);
        St.setExtraStackFrame(j);
      } else
        St.setExtraStackFrame(null);
    }
    var Ot;
    Ot = !1;
    function _t(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function Zt() {
      {
        if (Ie.current) {
          var s = z(Ie.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Wr(s) {
      return "";
    }
    var er = {};
    function Hr(s) {
      {
        var g = Zt();
        if (!g) {
          var j = typeof s == "string" ? s : s.displayName || s.name;
          j && (g = `

Check the top-level render call using <` + j + ">.");
        }
        return g;
      }
    }
    function tr(s, g) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var j = Hr(g);
        if (er[j])
          return;
        er[j] = !0;
        var P = "";
        s && s._owner && s._owner !== Ie.current && (P = " It was passed a child from " + z(s._owner.type) + "."), _e(s), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, P), _e(null);
      }
    }
    function rr(s, g) {
      {
        if (typeof s != "object")
          return;
        if (Ne(s))
          for (var j = 0; j < s.length; j++) {
            var P = s[j];
            _t(P) && tr(P, g);
          }
        else if (_t(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var A = y(s);
          if (typeof A == "function" && A !== s.entries)
            for (var U = A.call(s), Y; !(Y = U.next()).done; )
              _t(Y.value) && tr(Y.value, g);
        }
      }
    }
    function Yr(s) {
      {
        var g = s.type;
        if (g == null || typeof g == "string")
          return;
        var j;
        if (typeof g == "function")
          j = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === f))
          j = g.propTypes;
        else
          return;
        if (j) {
          var P = z(g);
          Tt(j, s.props, "prop", P, s);
        } else if (g.PropTypes !== void 0 && !Ot) {
          Ot = !0;
          var A = z(g);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $r(s) {
      {
        for (var g = Object.keys(s.props), j = 0; j < g.length; j++) {
          var P = g[j];
          if (P !== "children" && P !== "key") {
            _e(s), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), _e(null);
            break;
          }
        }
        s.ref !== null && (_e(s), p("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    var nr = {};
    function ar(s, g, j, P, A, U) {
      {
        var Y = se(s);
        if (!Y) {
          var H = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (H += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = Wr();
          ce ? H += ce : H += Zt();
          var X;
          s === null ? X = "null" : Ne(s) ? X = "array" : s !== void 0 && s.$$typeof === t ? (X = "<" + (z(s.type) || "Unknown") + " />", H = " Did you accidentally export a JSX literal instead of a component?") : X = typeof s, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, H);
        }
        var Q = bt(s, g, j, A, U);
        if (Q == null)
          return Q;
        if (Y) {
          var ye = g.children;
          if (ye !== void 0)
            if (P)
              if (Ne(ye)) {
                for (var qe = 0; qe < ye.length; qe++)
                  rr(ye[qe], s);
                Object.freeze && Object.freeze(ye);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              rr(ye, s);
        }
        if (Oe.call(g, "key")) {
          var Ye = z(s), he = Object.keys(g).filter(function(qr) {
            return qr !== "key";
          }), Ft = he.length > 0 ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!nr[Ye + Ft]) {
            var Ir = he.length > 0 ? "{" + he.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ft, Ye, Ir, Ye), nr[Ye + Ft] = !0;
          }
        }
        return s === n ? $r(Q) : Yr(Q), Q;
      }
    }
    function Ar(s, g, j) {
      return ar(s, g, j, !0);
    }
    function Br(s, g, j) {
      return ar(s, g, j, !1);
    }
    var Vr = Br, Ur = Ar;
    rt.Fragment = n, rt.jsx = Vr, rt.jsxs = Ur;
  }()), rt;
}
process.env.NODE_ENV === "production" ? $t.exports = Gr() : $t.exports = zr();
var a = $t.exports;
function ee(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Te(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ot(e, t) {
  const r = ee(e);
  return isNaN(t) ? Te(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Jr(e, t) {
  const r = ee(e);
  if (isNaN(t)) return Te(e, NaN);
  const n = r.getDate(), o = Te(e, r.getTime());
  o.setMonth(r.getMonth() + t + 1, 0);
  const i = o.getDate();
  return n >= i ? o : (r.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    n
  ), r);
}
const jr = 6048e5, Xr = 864e5;
let Kr = {};
function Dt() {
  return Kr;
}
function Pe(e, t) {
  var c, u, d, h;
  const r = Dt(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((u = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((h = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : h.weekStartsOn) ?? 0, o = ee(e), i = o.getDay(), l = (i < n ? 7 : 0) + i - n;
  return o.setDate(o.getDate() - l), o.setHours(0, 0, 0, 0), o;
}
function Nt(e) {
  return Pe(e, { weekStartsOn: 1 });
}
function Cr(e) {
  const t = ee(e), r = t.getFullYear(), n = Te(e, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const o = Nt(n), i = Te(e, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const l = Nt(i);
  return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= l.getTime() ? r : r - 1;
}
function ir(e) {
  const t = ee(e);
  return t.setHours(0, 0, 0, 0), t;
}
function lr(e) {
  const t = ee(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function Qr(e, t) {
  const r = ir(e), n = ir(t), o = +r - lr(r), i = +n - lr(n);
  return Math.round((o - i) / Xr);
}
function Zr(e) {
  const t = Cr(e), r = Te(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), Nt(r);
}
function en(e, t) {
  const r = t * 7;
  return ot(e, r);
}
function tn(e, t) {
  return Jr(e, t * 12);
}
function rn(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function nn(e) {
  if (!rn(e) && typeof e != "number")
    return !1;
  const t = ee(e);
  return !isNaN(Number(t));
}
function jt(e, t) {
  const r = ee(e.start), n = ee(e.end);
  let o = +r > +n;
  const i = o ? +r : +n, l = o ? n : r;
  l.setHours(0, 0, 0, 0);
  let c = 1;
  const u = [];
  for (; +l <= i; )
    u.push(ee(l)), l.setDate(l.getDate() + c), l.setHours(0, 0, 0, 0);
  return o ? u.reverse() : u;
}
function Ct(e, t) {
  const r = ee(e.start), n = ee(e.end);
  let o = +r > +n;
  const i = Pe(o ? n : r, t), l = Pe(o ? r : n, t);
  i.setHours(15), l.setHours(15);
  const c = +l.getTime();
  let u = i, d = 1;
  const h = [];
  for (; +u <= c; )
    u.setHours(0), h.push(ee(u)), u = en(u, d), u.setHours(15);
  return o ? h.reverse() : h;
}
function an(e) {
  const t = ee(e), r = Te(e, 0);
  return r.setFullYear(t.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const on = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, sn = (e, t, r) => {
  let n;
  const o = on[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Lt(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const ln = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, cn = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, un = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, dn = {
  date: Lt({
    formats: ln,
    defaultWidth: "full"
  }),
  time: Lt({
    formats: cn,
    defaultWidth: "full"
  }),
  dateTime: Lt({
    formats: un,
    defaultWidth: "full"
  })
}, hn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, fn = (e, t, r, n) => hn[e];
function nt(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let o;
    if (n === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, c = r != null && r.width ? String(r.width) : l;
      o = e.formattingValues[c] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, c = r != null && r.width ? String(r.width) : e.defaultWidth;
      o = e.values[c] || e.values[l];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
const mn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, gn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, pn = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, bn = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, vn = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, xn = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, yn = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, wn = {
  ordinalNumber: yn,
  era: nt({
    values: mn,
    defaultWidth: "wide"
  }),
  quarter: nt({
    values: gn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: nt({
    values: pn,
    defaultWidth: "wide"
  }),
  day: nt({
    values: bn,
    defaultWidth: "wide"
  }),
  dayPeriod: nt({
    values: vn,
    defaultWidth: "wide",
    formattingValues: xn,
    defaultFormattingWidth: "wide"
  })
};
function at(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const l = i[0], c = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(c) ? jn(c, (f) => f.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Nn(c, (f) => f.test(l))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(u) : u, d = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(d)
    ) : d;
    const h = t.slice(l.length);
    return { value: d, rest: h };
  };
}
function Nn(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function jn(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Cn(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const o = n[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let l = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    l = r.valueCallback ? r.valueCallback(l) : l;
    const c = t.slice(o.length);
    return { value: l, rest: c };
  };
}
const En = /^(\d+)(th|st|nd|rd)?/i, Dn = /\d+/i, kn = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Rn = {
  any: [/^b/i, /^(a|c)/i]
}, Tn = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Pn = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Mn = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Sn = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, On = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, _n = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Fn = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ln = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Wn = {
  ordinalNumber: Cn({
    matchPattern: En,
    parsePattern: Dn,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: at({
    matchPatterns: kn,
    defaultMatchWidth: "wide",
    parsePatterns: Rn,
    defaultParseWidth: "any"
  }),
  quarter: at({
    matchPatterns: Tn,
    defaultMatchWidth: "wide",
    parsePatterns: Pn,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: at({
    matchPatterns: Mn,
    defaultMatchWidth: "wide",
    parsePatterns: Sn,
    defaultParseWidth: "any"
  }),
  day: at({
    matchPatterns: On,
    defaultMatchWidth: "wide",
    parsePatterns: _n,
    defaultParseWidth: "any"
  }),
  dayPeriod: at({
    matchPatterns: Fn,
    defaultMatchWidth: "any",
    parsePatterns: Ln,
    defaultParseWidth: "any"
  })
}, Hn = {
  code: "en-US",
  formatDistance: sn,
  formatLong: dn,
  formatRelative: fn,
  localize: wn,
  match: Wn,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Yn(e) {
  const t = ee(e);
  return Qr(t, an(t)) + 1;
}
function $n(e) {
  const t = ee(e), r = +Nt(t) - +Zr(t);
  return Math.round(r / jr) + 1;
}
function Er(e, t) {
  var h, f, b, E;
  const r = ee(e), n = r.getFullYear(), o = Dt(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((E = (b = o.locale) == null ? void 0 : b.options) == null ? void 0 : E.firstWeekContainsDate) ?? 1, l = Te(e, 0);
  l.setFullYear(n + 1, 0, i), l.setHours(0, 0, 0, 0);
  const c = Pe(l, t), u = Te(e, 0);
  u.setFullYear(n, 0, i), u.setHours(0, 0, 0, 0);
  const d = Pe(u, t);
  return r.getTime() >= c.getTime() ? n + 1 : r.getTime() >= d.getTime() ? n : n - 1;
}
function An(e, t) {
  var c, u, d, h;
  const r = Dt(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : u.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, o = Er(e, t), i = Te(e, 0);
  return i.setFullYear(o, 0, n), i.setHours(0, 0, 0, 0), Pe(i, t);
}
function Bn(e, t) {
  const r = ee(e), n = +Pe(r, t) - +An(r, t);
  return Math.round(n / jr) + 1;
}
function B(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const Fe = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return B(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : B(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return B(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return B(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return B(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return B(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return B(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), o = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return B(o, t.length);
  }
}, Ge = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, cr = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), o = n > 0 ? n : 1 - n;
      return r.ordinalNumber(o, { unit: "year" });
    }
    return Fe.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const o = Er(e, n), i = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const l = i % 100;
      return B(l, 2);
    }
    return t === "Yo" ? r.ordinalNumber(i, { unit: "year" }) : B(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Cr(e);
    return B(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return B(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return B(n, 2);
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return B(n, 2);
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Fe.M(e, t);
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return B(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const o = Bn(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : B(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = $n(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : B(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Fe.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = Yn(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : B(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const o = e.getDay(), i = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(i);
      case "ee":
        return B(i, 2);
      case "eo":
        return r.ordinalNumber(i, { unit: "day" });
      case "eee":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const o = e.getDay(), i = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return B(i, t.length);
      case "co":
        return r.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return r.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), o = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return B(o, t.length);
      case "io":
        return r.ordinalNumber(o, { unit: "day" });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let o;
    switch (n === 12 ? o = Ge.noon : n === 0 ? o = Ge.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let o;
    switch (n >= 17 ? o = Ge.evening : n >= 12 ? o = Ge.afternoon : n >= 4 ? o = Ge.morning : o = Ge.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return Fe.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : Fe.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : B(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : B(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Fe.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : Fe.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Fe.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return dr(n);
      case "XXXX":
      case "XX":
        return $e(n);
      case "XXXXX":
      case "XXX":
      default:
        return $e(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return dr(n);
      case "xxxx":
      case "xx":
        return $e(n);
      case "xxxxx":
      case "xxx":
      default:
        return $e(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ur(n, ":");
      case "OOOO":
      default:
        return "GMT" + $e(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ur(n, ":");
      case "zzzz":
      default:
        return "GMT" + $e(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(e.getTime() / 1e3);
    return B(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    const n = e.getTime();
    return B(n, t.length);
  }
};
function ur(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), i = n % 60;
  return i === 0 ? r + String(o) : r + String(o) + t + B(i, 2);
}
function dr(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + B(Math.abs(e) / 60, 2) : $e(e, t);
}
function $e(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = B(Math.trunc(n / 60), 2), i = B(n % 60, 2);
  return r + o + t + i;
}
const hr = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Dr = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Vn = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return hr(e, t);
  let i;
  switch (n) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", hr(n, t)).replace("{{time}}", Dr(o, t));
}, Un = {
  p: Dr,
  P: Vn
}, In = /^D+$/, qn = /^Y+$/, Gn = ["D", "DD", "YY", "YYYY"];
function zn(e) {
  return In.test(e);
}
function Jn(e) {
  return qn.test(e);
}
function Xn(e, t, r) {
  const n = Kn(e, t, r);
  if (console.warn(n), Gn.includes(e)) throw new RangeError(n);
}
function Kn(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Qn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Zn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ea = /^'([^]*?)'?$/, ta = /''/g, ra = /[a-zA-Z]/;
function ne(e, t, r) {
  var h, f, b, E;
  const n = Dt(), o = n.locale ?? Hn, i = n.firstWeekContainsDate ?? ((f = (h = n.locale) == null ? void 0 : h.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, l = n.weekStartsOn ?? ((E = (b = n.locale) == null ? void 0 : b.options) == null ? void 0 : E.weekStartsOn) ?? 0, c = ee(e);
  if (!nn(c))
    throw new RangeError("Invalid time value");
  let u = t.match(Zn).map((w) => {
    const N = w[0];
    if (N === "p" || N === "P") {
      const y = Un[N];
      return y(w, o.formatLong);
    }
    return w;
  }).join("").match(Qn).map((w) => {
    if (w === "''")
      return { isToken: !1, value: "'" };
    const N = w[0];
    if (N === "'")
      return { isToken: !1, value: na(w) };
    if (cr[N])
      return { isToken: !0, value: w };
    if (N.match(ra))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + N + "`"
      );
    return { isToken: !1, value: w };
  });
  o.localize.preprocessor && (u = o.localize.preprocessor(c, u));
  const d = {
    firstWeekContainsDate: i,
    weekStartsOn: l,
    locale: o
  };
  return u.map((w) => {
    if (!w.isToken) return w.value;
    const N = w.value;
    (Jn(N) || zn(N)) && Xn(N, t, String(e));
    const y = cr[N[0]];
    return y(c, N, o.localize, d);
  }).join("");
}
function na(e) {
  const t = e.match(ea);
  return t ? t[1].replace(ta, "'") : e;
}
function Je(e, t) {
  return tn(e, -1);
}
const ze = {
  classic: {
    noContributions: "#ebedf0",
    low: "#9be9a8",
    moderate: "#40c463",
    high: "#30a14e",
    veryHigh: "#216e39"
  },
  aurora: {
    noContributions: "#ebedf0",
    low: "#88c0d0",
    moderate: "#81a1c1",
    high: "#5e81ac",
    veryHigh: "#4c566a"
  },
  velvet: {
    noContributions: "#ebedf0",
    low: "#ff9ecd",
    moderate: "#ff69b4",
    high: "#da1884",
    veryHigh: "#851050"
  },
  solar: {
    noContributions: "#ebedf0",
    low: "#ffd700",
    moderate: "#ffa500",
    high: "#ff4500",
    veryHigh: "#8b0000"
  },
  prism: {
    noContributions: "#ebedf0",
    low: "#ff9aa2",
    moderate: "#c7ceea",
    high: "#b5ead7",
    veryHigh: "#85dcb8"
  },
  galaxy: {
    noContributions: "#ebedf0",
    low: "#8e8cd8",
    moderate: "#6b4f89",
    high: "#483475",
    veryHigh: "#2b1955"
  },
  pastel: {
    noContributions: "#ebedf0",
    low: "#ffd6e0",
    moderate: "#ffb3c6",
    high: "#ff8fab",
    veryHigh: "#ff6b8b"
  },
  monotone: {
    noContributions: "#ebedf0",
    low: "#c6c6c6",
    moderate: "#929292",
    high: "#636363",
    veryHigh: "#2f2f2f"
  },
  halloween: {
    noContributions: "#ebedf0",
    low: "#ffee4a",
    moderate: "#ffc501",
    high: "#fe9600",
    veryHigh: "#03001c"
  },
  winter: {
    noContributions: "#ebedf0",
    low: "#b6e3ff",
    moderate: "#54aeff",
    high: "#0969da",
    veryHigh: "#0a3069"
  },
  nature: {
    noContributions: "#ebedf0",
    low: "#d8e8b0",
    moderate: "#95c077",
    high: "#4f772d",
    veryHigh: "#31572c"
  },
  forest: {
    noContributions: "rgba(140, 200, 180, 0.2)",
    veryHigh: "#5B9075",
    high: "#7CCDA1",
    moderate: "#A0E3B5",
    low: "#B9F1D6"
  },
  crimson: {
    noContributions: "rgba(255, 160, 160, 0.2)",
    veryHigh: "#E84D47",
    high: "#F37874",
    moderate: "#F89F9F",
    low: "#FDC5C5"
  },
  prison: {
    noContributions: "rgba(160, 200, 240, 0.2)",
    low: "#89CFF0",
    moderate: "#7FFFD4",
    high: "#00FFFF",
    veryHigh: "#007FFF"
  },
  chocolate: {
    noContributions: "#F8D1D1",
    low: "#BF6C6E",
    moderate: "#9D4A50",
    veryHigh: "#58111A",
    high: "#4E2A1F"
  }
}, xt = {
  classic: {
    light: {
      noContributions: "#ebedf0",
      low: "#9be9a8",
      moderate: "#40c463",
      high: "#30a14e",
      veryHigh: "#216e39"
    },
    dark: {
      noContributions: "#161b22",
      low: "#0e4429",
      moderate: "#006d32",
      high: "#26a641",
      veryHigh: "#39d353"
    }
  },
  aurora: {
    light: {
      noContributions: "#ebedf0",
      low: "#88c0d0",
      moderate: "#81a1c1",
      high: "#5e81ac",
      veryHigh: "#4c566a"
    },
    dark: {
      noContributions: "#2e3440",
      low: "#5e81ac",
      moderate: "#81a1c1",
      high: "#88c0d0",
      veryHigh: "#8fbcbb"
    }
  },
  velvet: {
    light: {
      noContributions: "#ebedf0",
      low: "#ff9ecd",
      moderate: "#ff69b4",
      high: "#da1884",
      veryHigh: "#851050"
    },
    dark: {
      noContributions: "#1a0d1a",
      low: "#4d1a4d",
      moderate: "#801040",
      high: "#b3195c",
      veryHigh: "#ff69b4"
    }
  },
  solar: {
    light: {
      noContributions: "#ebedf0",
      low: "#ffd700",
      moderate: "#ffa500",
      high: "#ff4500",
      veryHigh: "#8b0000"
    },
    dark: {
      noContributions: "#1a1a0d",
      low: "#4d4d00",
      moderate: "#806600",
      high: "#b38600",
      veryHigh: "#ffcc00"
    }
  },
  prism: {
    light: {
      noContributions: "#ebedf0",
      low: "#ff9aa2",
      moderate: "#c7ceea",
      high: "#b5ead7",
      veryHigh: "#85dcb8"
    },
    dark: {
      noContributions: "#1a1a1a",
      low: "#4d2d33",
      moderate: "#3d4080",
      high: "#2d6650",
      veryHigh: "#1a8066"
    }
  },
  galaxy: {
    light: {
      noContributions: "#ebedf0",
      low: "#8e8cd8",
      moderate: "#6b4f89",
      high: "#483475",
      veryHigh: "#2b1955"
    },
    dark: {
      noContributions: "#0d0d1a",
      low: "#1a1433",
      moderate: "#2d1f4d",
      high: "#4d3380",
      veryHigh: "#8066cc"
    }
  },
  pastel: {
    light: {
      noContributions: "#ebedf0",
      low: "#ffd6e0",
      moderate: "#ffb3c6",
      high: "#ff8fab",
      veryHigh: "#ff6b8b"
    },
    dark: {
      noContributions: "#1a0d13",
      low: "#4d1a26",
      moderate: "#80334d",
      high: "#b34d73",
      veryHigh: "#ff6b8b"
    }
  },
  monotone: {
    light: {
      noContributions: "#ebedf0",
      low: "#c6c6c6",
      moderate: "#929292",
      high: "#636363",
      veryHigh: "#2f2f2f"
    },
    dark: {
      noContributions: "#0d0d0d",
      low: "#1a1a1a",
      moderate: "#333333",
      high: "#666666",
      veryHigh: "#cccccc"
    }
  },
  halloween: {
    light: {
      noContributions: "#ebedf0",
      low: "#ffee4a",
      moderate: "#ffc501",
      high: "#fe9600",
      veryHigh: "#03001c"
    },
    dark: {
      noContributions: "#1a1a0d",
      low: "#4d3300",
      moderate: "#806600",
      high: "#b39900",
      veryHigh: "#ffcc00"
    }
  },
  winter: {
    light: {
      noContributions: "#ebedf0",
      low: "#b6e3ff",
      moderate: "#54aeff",
      high: "#0969da",
      veryHigh: "#0a3069"
    },
    dark: {
      noContributions: "#0d1a26",
      low: "#1a3d66",
      moderate: "#2d5999",
      high: "#4d8acc",
      veryHigh: "#80bfff"
    }
  },
  nature: {
    light: {
      noContributions: "#ebedf0",
      low: "#d8e8b0",
      moderate: "#95c077",
      high: "#4f772d",
      veryHigh: "#31572c"
    },
    dark: {
      noContributions: "#0d1a0d",
      low: "#1a331a",
      moderate: "#2d4d2d",
      high: "#4d804d",
      veryHigh: "#80cc80"
    }
  },
  forest: {
    light: {
      noContributions: "rgba(140, 200, 180, 0.2)",
      low: "#B9F1D6",
      moderate: "#A0E3B5",
      high: "#7CCDA1",
      veryHigh: "#5B9075"
    },
    dark: {
      noContributions: "rgba(20, 40, 30, 0.5)",
      low: "#1a4d33",
      moderate: "#2d6650",
      high: "#4d9973",
      veryHigh: "#80cc99"
    }
  },
  crimson: {
    light: {
      noContributions: "rgba(255, 160, 160, 0.2)",
      low: "#FDC5C5",
      moderate: "#F89F9F",
      high: "#F37874",
      veryHigh: "#E84D47"
    },
    dark: {
      noContributions: "rgba(40, 20, 20, 0.5)",
      low: "#4d1a1a",
      moderate: "#661a1a",
      high: "#992626",
      veryHigh: "#ff6666"
    }
  },
  prison: {
    light: {
      noContributions: "rgba(160, 200, 240, 0.2)",
      low: "#89CFF0",
      moderate: "#7FFFD4",
      high: "#00FFFF",
      veryHigh: "#007FFF"
    },
    dark: {
      noContributions: "rgba(20, 30, 40, 0.5)",
      low: "#1a334d",
      moderate: "#2d5980",
      high: "#4d8fb3",
      veryHigh: "#80ccff"
    }
  },
  chocolate: {
    light: {
      noContributions: "#F8D1D1",
      low: "#BF6C6E",
      moderate: "#9D4A50",
      high: "#4E2A1F",
      veryHigh: "#58111A"
    },
    dark: {
      noContributions: "#261a1a",
      low: "#4d2626",
      moderate: "#663333",
      high: "#994d4d",
      veryHigh: "#cc8080"
    }
  }
}, aa = (e, t = "light") => typeof e == "object" ? e : xt[e] ? xt[e][t] : xt.classic.light, oa = () => Object.keys(xt), It = async (e, t, r, n) => {
  var c, u, d, h, f;
  const o = ne(r, "yyyy-MM-dd'T'00:00:00'Z'"), i = ne(n, "yyyy-MM-dd'T'23:59:59'Z'"), l = `
    query ($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;
  try {
    if (!t || !e)
      return console.error("Missing GitHub token or username"), [];
    const b = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${t}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: l,
        variables: {
          username: e,
          from: o,
          to: i
        }
      })
    });
    if (!b.ok)
      throw new Error(`HTTP error! status: ${b.status}`);
    const E = await b.json();
    if (E.errors)
      throw console.error("GitHub API Errors:", E.errors), new Error(((c = E.errors[0]) == null ? void 0 : c.message) || "GitHub API Error");
    if (!((f = (h = (d = (u = E.data) == null ? void 0 : u.user) == null ? void 0 : d.contributionsCollection) == null ? void 0 : h.contributionCalendar) != null && f.weeks))
      return console.error("Invalid response structure:", E), [];
    const w = [];
    return E.data.user.contributionsCollection.contributionCalendar.weeks.forEach(
      (N) => {
        N.contributionDays.forEach((y) => {
          w.push({
            date: ne(new Date(y.date), "yyyy-MM-dd"),
            count: y.contributionCount
          });
        });
      }
    ), w;
  } catch (b) {
    throw console.error("Error fetching GitHub contributions:", b), new Error(
      `Failed to fetch GitHub contributions: ${b instanceof Error ? b.message : "Unknown error"}`
    );
  }
}, Oo = async (e, t, r) => {
  try {
    if (!t || !e)
      return console.error("Missing GitHub token or username"), {
        commits: 0,
        pullRequests: 0,
        mergeRequests: 0,
        pushes: 0,
        branchesContributed: 0
      };
    const n = parseInt(r.split("-")[2]) % 10;
    return {
      commits: n || 0,
      pullRequests: Math.max(0, Math.floor(n / 3)),
      mergeRequests: Math.max(0, Math.floor(n / 4)),
      pushes: Math.max(0, n - 1),
      branchesContributed: Math.max(0, Math.floor(n / 2))
    };
  } catch (n) {
    return console.error("Error fetching contribution details:", n), {
      commits: 0,
      pullRequests: 0,
      mergeRequests: 0,
      pushes: 0,
      branchesContributed: 0
    };
  }
}, be = ({
  username: e,
  token: t,
  theme: r = "classic",
  colorScheme: n = "light",
  blockSize: o = 12,
  blockMargin: i = 2,
  fontSize: l = 14,
  hideColorLegend: c = !1,
  hideMonthLabels: u = !1,
  hideWeekdayLabels: d = !1,
  hideTotalCount: h = !1,
  years: f,
  showYearButtons: b = !1,
  availableYears: E = [2025, 2024, 2023, 2022, 2021],
  onYearChange: w,
  onDayClick: N,
  renderDay: y,
  renderDetails: k,
  className: p = "",
  loading: M,
  error: _,
  showLoading: G = !0,
  style: ae
}) => {
  const [fe, ue] = S([]), [me, se] = S(!0), [T, V] = S(!1), [z, K] = S(""), [ie, ve] = S(null), [ge, De] = S(null), [xe, oe] = S(null), [x, R] = S(null), [L, m] = S("lastYear"), [D, F] = S({
    startDate: Je(/* @__PURE__ */ new Date()),
    endDate: /* @__PURE__ */ new Date()
  });
  Ut(() => {
    (async () => {
      if (!e) {
        V(!0), K("Username is required"), se(!1);
        return;
      }
      se(!0), V(!1), K("");
      try {
        const $ = await It(
          e,
          t || "",
          D.startDate,
          D.endDate
        ), J = {
          year: D.endDate.getFullYear(),
          startDate: D.startDate,
          endDate: D.endDate,
          contributions: $
        };
        ue([J]);
      } catch ($) {
        V(!0), K($ instanceof Error ? $.message : "Failed to fetch contributions");
      } finally {
        se(!1);
      }
    })();
  }, [e, t, D]);
  const W = aa(r, n), te = (C) => C === 0 ? W.noContributions : C <= 2 ? W.low : C <= 4 ? W.moderate : C <= 6 ? W.high : W.veryHigh, I = (C) => C === 0 ? "noContributions" : C <= 2 ? "low" : C <= 4 ? "moderate" : C <= 6 ? "high" : "veryHigh", le = (C) => C.reduce(($, J) => $ + J.count, 0), Ve = (C) => {
    const $ = C.filter((J) => J.count > 0).sort((J, re) => new Date(re.date).getTime() - new Date(J.date).getTime());
    return $.length > 0 ? $[0].date : null;
  }, Se = (C, $) => {
    const J = Ct({ start: C, end: $ });
    if (J.length === 0) return [];
    const re = /* @__PURE__ */ new Map();
    return J.forEach((je, Z) => {
      jt({
        start: je,
        end: ot(je, 6)
      }).forEach((de) => {
        if (de.getDate() === 1) {
          const q = de.getMonth();
          re.has(q) || re.set(q, {
            label: ne(de, "MMM"),
            position: Z
          });
        }
      });
    }), Array.from(re.values()).sort(
      (je, Z) => je.position - Z.position
    );
  }, Ze = (C, $) => {
    var re;
    const J = ne(C, "yyyy-MM-dd");
    return ((re = $.find((je) => je.date === J)) == null ? void 0 : re.count) || 0;
  }, ft = (C) => {
    (!ge || ge === C) && ve(C);
  }, He = () => {
    ge || ve(null);
  }, Oe = (C, $) => {
    ge === C ? (De(null), ve(null)) : (De(C), ve(C)), oe(null), N && N(C, $);
  }, mt = (C) => {
    oe(xe === C ? null : C), De(null), ve(null);
  }, gt = (C) => {
    F({
      startDate: new Date(C, 0, 1),
      endDate: new Date(C, 11, 31)
    }), m(C.toString()), R(C), w && w(C);
  }, Ue = () => {
    const C = /* @__PURE__ */ new Date(), $ = Je(C);
    F({
      startDate: $,
      endDate: C
    }), m("lastYear"), R(null);
  }, Tt = (C) => {
    const $ = new Date(C);
    return ne($, "MMMM d, yyyy");
  }, Pt = (C) => {
    const { year: $, startDate: J, endDate: re, contributions: je } = C, Z = Ct({ start: J, end: re }), et = u ? [] : Se(J, re);
    return /* @__PURE__ */ a.jsxs("div", { className: "space-y-4", style: { overflow: "visible" }, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-semibold", style: {
          fontSize: l,
          color: n === "dark" ? "#ffffff" : "#000000"
        }, children: $ }),
        !h && /* @__PURE__ */ a.jsxs("div", { className: "text-sm", style: {
          color: n === "dark" ? "#d1d5db" : "#6b7280"
        }, children: [
          /* @__PURE__ */ a.jsx("span", { className: "font-bold", style: {
            color: n === "dark" ? "#ffffff" : "#111827"
          }, children: le(je) }),
          " ",
          "contributions"
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "overflow-x-auto", style: { overflowY: "hidden" }, children: /* @__PURE__ */ a.jsxs("div", { className: "flex min-w-[1000px]", style: { padding: `${o * 0.1}px 0` }, children: [
        !d && /* @__PURE__ */ a.jsxs("div", { className: "w-16", children: [
          /* @__PURE__ */ a.jsx("div", { style: { height: l + 4 } }),
          /* @__PURE__ */ a.jsx("div", { className: "grid grid-rows-7", style: { gap: i }, children: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((de, q) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `text-xs ${q % 2 === 1 ? "invisible" : ""}`,
              style: {
                fontSize: l * 0.75,
                height: o,
                display: "flex",
                alignItems: "center",
                color: n === "dark" ? "#9ca3af" : "#6b7280"
              },
              children: de
            },
            de
          )) })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex-1 relative", children: [
          !u && /* @__PURE__ */ a.jsx("div", { className: "relative", style: { height: l + 4 }, children: et.map((de, q) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "absolute",
              style: {
                fontSize: l * 0.75,
                left: `${de.position / (Z.length - 1) * 100}%`,
                color: n === "dark" ? "#9ca3af" : "#6b7280"
              },
              children: de.label
            },
            q
          )) }),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "grid grid-flow-col relative",
              style: {
                gap: i,
                zIndex: 1,
                padding: `${o * 0.1}px`,
                margin: `-${o * 0.1}px`
              },
              children: Z.map((de, q) => /* @__PURE__ */ a.jsx(
                "div",
                {
                  className: "grid grid-rows-7",
                  style: { gap: i },
                  children: jt({
                    start: de,
                    end: ot(de, 6)
                  }).map((pt, ke) => {
                    const pe = ne(pt, "yyyy-MM-dd"), Re = Ze(pt, je), bt = I(Re), Ie = ge === pe, _e = xe && !(xe === bt) || ge && !Ie;
                    return y ? /* @__PURE__ */ a.jsx(
                      "div",
                      {
                        className: "relative cursor-pointer",
                        onMouseEnter: () => ft(pe),
                        onMouseLeave: He,
                        onClick: () => Oe(pe, Re),
                        children: y(pe, Re, bt)
                      },
                      `${q}-${ke}`
                    ) : /* @__PURE__ */ a.jsxs(
                      "div",
                      {
                        className: "relative cursor-pointer group",
                        style: {
                          zIndex: ie === pe ? 99998 : 1,
                          isolation: ie === pe ? "isolate" : "auto"
                        },
                        onMouseEnter: () => ft(pe),
                        onMouseLeave: He,
                        onClick: () => Oe(pe, Re),
                        children: [
                          /* @__PURE__ */ a.jsx(
                            "div",
                            {
                              className: "rounded-sm transition-all duration-200 hover:ring-1 hover:ring-gray-400",
                              style: {
                                width: o,
                                height: o,
                                backgroundColor: te(Re),
                                border: Ie ? "2px solid black" : "none",
                                opacity: _e ? 0.3 : 1
                              }
                            }
                          ),
                          ie === pe && /* @__PURE__ */ a.jsxs(
                            "div",
                            {
                              className: "absolute px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-xl pointer-events-none whitespace-nowrap font-medium",
                              style: {
                                zIndex: 99999,
                                // Improved vertical positioning
                                bottom: ke < 3 ? "auto" : "100%",
                                top: ke < 3 ? "100%" : "auto",
                                marginBottom: ke >= 3 ? "8px" : "0",
                                marginTop: ke < 3 ? "8px" : "0",
                                // Improved horizontal positioning to prevent cutoff
                                left: q < Z.length * 0.3 ? "0" : q > Z.length * 0.7 ? "auto" : "50%",
                                right: q > Z.length * 0.7 ? "0" : "auto",
                                transform: q >= Z.length * 0.3 && q <= Z.length * 0.7 ? "translateX(-50%)" : "none",
                                // Ensure tooltip doesn't extend beyond viewport
                                maxWidth: "250px",
                                minWidth: "140px",
                                // Add higher z-index for the container as well
                                isolation: "isolate"
                              },
                              children: [
                                k ? k(pe, Re) : /* @__PURE__ */ a.jsxs("div", { className: "text-center", children: [
                                  /* @__PURE__ */ a.jsx("div", { className: "font-semibold", children: Tt(pe) }),
                                  /* @__PURE__ */ a.jsxs("div", { className: "text-gray-300 text-xs", children: [
                                    Re,
                                    " contribution",
                                    Re !== 1 ? "s" : ""
                                  ] })
                                ] }),
                                /* @__PURE__ */ a.jsx(
                                  "div",
                                  {
                                    className: "absolute w-0 h-0",
                                    style: {
                                      // Position arrow based on tooltip position
                                      [ke < 3 ? "top" : "bottom"]: "100%",
                                      left: q < Z.length * 0.3 ? "16px" : q > Z.length * 0.7 ? "auto" : "50%",
                                      right: q > Z.length * 0.7 ? "16px" : "auto",
                                      transform: q >= Z.length * 0.3 && q <= Z.length * 0.7 ? "translateX(-50%)" : "none",
                                      borderLeft: "6px solid transparent",
                                      borderRight: "6px solid transparent",
                                      [ke < 3 ? "borderBottom" : "borderTop"]: "6px solid #1f2937",
                                      zIndex: 1
                                    }
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      },
                      `${q}-${ke}`
                    );
                  })
                },
                q
              ))
            }
          )
        ] })
      ] }) })
    ] }, $);
  };
  if (me && G)
    return M ? /* @__PURE__ */ a.jsx(a.Fragment, { children: M }) : /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `border border-gray-200 rounded-lg shadow-sm p-6 w-full animate-pulse ${p}`,
        style: {
          ...ae,
          backgroundColor: n === "dark" ? "#1f2937" : "#ffffff",
          borderColor: n === "dark" ? "#374151" : "#e5e7eb"
        },
        children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ a.jsx("div", { className: "h-4 rounded", style: {
            backgroundColor: n === "dark" ? "#374151" : "#e5e7eb"
          } }),
          /* @__PURE__ */ a.jsx("div", { className: "grid grid-flow-col gap-1 overflow-x-auto", children: Array.from({ length: 53 }).map((C, $) => /* @__PURE__ */ a.jsx("div", { className: "grid grid-rows-7 gap-1", children: Array.from({ length: 7 }).map((J, re) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "rounded-sm",
              style: {
                width: o,
                height: o,
                backgroundColor: n === "dark" ? "#374151" : "#e5e7eb"
              }
            },
            `${$}-${re}`
          )) }, $)) })
        ] })
      }
    );
  if (T)
    return _ ? /* @__PURE__ */ a.jsx(a.Fragment, { children: _ }) : /* @__PURE__ */ a.jsx(
      "div",
      {
        className: `border rounded-lg p-6 ${p}`,
        style: {
          ...ae,
          backgroundColor: n === "dark" ? "#7f1d1d" : "#fef2f2",
          borderColor: n === "dark" ? "#dc2626" : "#fecaca"
        },
        children: /* @__PURE__ */ a.jsxs("div", { style: { color: n === "dark" ? "#fecaca" : "#991b1b" }, children: [
          /* @__PURE__ */ a.jsx("h3", { className: "font-semibold", children: "Error loading contributions" }),
          /* @__PURE__ */ a.jsx("p", { className: "text-sm mt-1", children: z })
        ] })
      }
    );
  const Ne = x ? fe.filter((C) => C.year === x) : fe, Mt = Ne.reduce(
    (C, $) => C + $.contributions.reduce((J, re) => J + re.count, 0),
    0
  );
  return /* @__PURE__ */ a.jsxs("div", { className: `space-y-6 ${p}`, style: { ...ae, position: "relative", overflow: "hidden" }, children: [
    b && /* @__PURE__ */ a.jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ a.jsxs("div", { className: "flex space-x-2", children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: Ue,
          className: `px-4 py-2 rounded-lg font-medium transition-all ${L === "lastYear" ? "bg-purple-600 text-white" : n === "dark" ? "border border-gray-600 text-gray-300 hover:bg-gray-800" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`,
          children: "Last Year"
        }
      ),
      E.map((C) => /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => gt(C),
          className: `px-4 py-2 rounded-lg font-medium transition-all ${L === C.toString() ? "bg-purple-600 text-white" : n === "dark" ? "border border-gray-600 text-gray-300 hover:bg-gray-800" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`,
          children: C
        },
        C
      ))
    ] }) }),
    !h && Ne.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "text-center", children: /* @__PURE__ */ a.jsxs("p", { className: "text-lg font-semibold", style: {
      color: n === "dark" ? "#ffffff" : "#000000"
    }, children: [
      /* @__PURE__ */ a.jsx("span", { className: "text-2xl font-bold text-purple-600", children: Mt }),
      " ",
      "contributions in ",
      L === "lastYear" ? "last year" : L !== "lastYear" ? L : `${Ne.length} year${Ne.length > 1 ? "s" : ""}`
    ] }) }),
    Ne.map((C) => Pt(C)),
    !c && /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
      Ne[0] && /* @__PURE__ */ a.jsx("p", { className: "text-sm", style: {
        color: n === "dark" ? "#d1d5db" : "#6b7280"
      }, children: (() => {
        const C = Ve(Ne[0].contributions);
        return C ? `Last contributed on: ${ne(new Date(C), "MMM do, yyyy")}` : "No contributions in this period";
      })() }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ a.jsx("span", { style: {
          fontSize: l * 0.85,
          color: n === "dark" ? "#9ca3af" : "#6b7280"
        }, children: "Less" }),
        /* @__PURE__ */ a.jsx("div", { className: "flex space-x-1", children: ["noContributions", "low", "moderate", "high", "veryHigh"].map((C) => {
          const $ = xe === C;
          return /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "rounded-sm cursor-pointer transition-opacity duration-200 hover:ring-1 hover:ring-gray-400",
              style: {
                width: o,
                height: o,
                backgroundColor: W[C],
                opacity: xe && !$ ? 0.3 : 1
              },
              onClick: () => mt(C),
              title: `Click to highlight ${C} contribution level`
            },
            C
          );
        }) }),
        /* @__PURE__ */ a.jsx("span", { style: {
          fontSize: l * 0.85,
          color: n === "dark" ? "#9ca3af" : "#6b7280"
        }, children: "More" })
      ] })
    ] })
  ] });
}, _o = ({
  username: e,
  token: t,
  onLogout: r,
  showHeader: n = !0,
  className: o = "",
  defaultTheme: i = "galaxy"
}) => {
  const [l, c] = S([]), [u, d] = S(!0), [h, f] = S({
    startDate: Je(/* @__PURE__ */ new Date()),
    endDate: /* @__PURE__ */ new Date()
  }), [b, E] = S("lastYear"), [w, N] = S(i), [y, k] = S(null), [p, M] = S(null), [_, G] = S(null), ae = () => {
    r && r();
  };
  Ut(() => {
    d(!0), M(null), G(null), k(null), setTimeout(() => {
      It(
        e,
        t,
        h.startDate,
        h.endDate
      ).then((m) => {
        c(m), d(!1);
      }).catch((m) => {
        console.error("Failed to fetch contributions:", m), c([]), d(!1);
      });
    }, 1e3);
  }, [h, e, t]);
  const fe = (m) => {
    const D = ze[w];
    return m === 0 ? D.noContributions : m <= 2 ? D.low : m <= 4 ? D.moderate : m <= 6 ? D.high : D.veryHigh;
  }, ue = (m) => m === 0 ? "noContributions" : m <= 2 ? "low" : m <= 4 ? "moderate" : m <= 6 ? "high" : "veryHigh", me = () => l.reduce((m, D) => m + D.count, 0), se = () => {
    const m = V();
    if (m.length === 0) return [];
    const D = /* @__PURE__ */ new Map();
    return m.forEach((F, W) => {
      z(F).forEach((I) => {
        if (I.getDate() === 1) {
          const le = I.getMonth();
          D.has(le) || D.set(le, {
            label: ne(I, "MMM"),
            position: W
          });
        }
      });
    }), Array.from(D.values()).sort(
      (F, W) => F.position - W.position
    );
  }, T = (m) => {
    var F;
    const D = ne(m, "yyyy-MM-dd");
    return ((F = l.find((W) => W.date === D)) == null ? void 0 : F.count) || 0;
  }, V = () => {
    const m = h.startDate, D = h.endDate;
    return Ct({ start: m, end: D });
  }, z = (m) => jt({
    start: m,
    end: ot(m, 6)
  }), K = (m, D) => {
    f({ startDate: m, endDate: D });
  }, ie = (m) => {
    let D = null;
    for (let F = 0; F < m.length; F++)
      m[F].count > 0 && (D = m[F].date);
    return ve(D);
  }, ve = (m) => {
    if (!m) return "No contributions found";
    const D = new Date(m), F = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], W = D.getDate(), te = F[D.getMonth()], I = D.getFullYear(), le = ge(W);
    return `${te} ${W}${le}, ${I}`;
  }, ge = (m) => {
    if (m >= 11 && m <= 13) return "th";
    switch (m % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }, De = (m) => {
    (!_ || _ === m) && k(m);
  }, xe = () => {
    _ || k(null);
  }, oe = (m) => {
    _ === m ? (G(null), k(null)) : (G(m), k(m)), M(null);
  }, x = (m) => {
    M(p === m ? null : m), G(null), k(null);
  };
  if (u)
    return /* @__PURE__ */ a.jsx("div", { className: `bg-white border border-gray-200 rounded-lg shadow-sm p-6 w-full animate-pulse ${o}`, children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ a.jsx("div", { className: "h-4 bg-gray-200 rounded" }),
      /* @__PURE__ */ a.jsx("div", { className: "grid grid-flow-col gap-1 overflow-x-auto", children: Array.from({ length: 53 }).map((m, D) => /* @__PURE__ */ a.jsx("div", { className: "grid grid-rows-7 gap-1", children: Array.from({ length: 7 }).map((F, W) => /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "w-4 h-4 bg-gray-200 rounded-sm"
        },
        `${D}-${W}`
      )) }, D)) })
    ] }) });
  const R = se(), L = V();
  return /* @__PURE__ */ a.jsxs("div", { className: o, children: [
    n && /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-6", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ a.jsx("div", { className: "w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-purple-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" }) }) }),
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-500", children: "GitHub User" }),
          /* @__PURE__ */ a.jsx("div", { className: "font-semibold text-gray-900", children: e })
        ] })
      ] }),
      r && /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: ae,
          className: "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200",
          children: "Logout"
        }
      )
    ] }) }),
    /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-200 rounded-lg shadow-sm p-6 animate-fadeIn max-w-full overflow-hidden", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-6 px-4", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ a.jsx("svg", { className: "w-5 h-5 text-purple-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", clipRule: "evenodd" }) }),
          /* @__PURE__ */ a.jsx("h2", { className: "text-lg font-semibold hidden sm:inline", children: "Contribution Calendar" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `px-3 py-1 text-sm rounded transition-colors ${b === "lastYear" ? "bg-purple-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`,
              onClick: () => {
                const m = /* @__PURE__ */ new Date(), D = Je(m);
                K(D, m), E("lastYear");
              },
              children: "Last Year"
            }
          ),
          [2025, 2024, 2023, 2022].map((m) => /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `px-3 py-1 text-sm rounded transition-colors ${b === m.toString() ? "bg-purple-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`,
              onClick: () => {
                K(
                  new Date(m, 0, 1),
                  new Date(m, 11, 31)
                ), E(m.toString());
              },
              children: m
            },
            m
          ))
        ] }),
        /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(
          "select",
          {
            value: w,
            onChange: (m) => N(m.target.value),
            className: "border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
            children: Object.keys(ze).map((m) => /* @__PURE__ */ a.jsx("option", { value: m, children: m.charAt(0).toUpperCase() + m.slice(1) }, m))
          }
        ) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "text-center py-2", children: [
        /* @__PURE__ */ a.jsx("span", { className: "text-2xl font-bold text-gray-900", children: me() }),
        /* @__PURE__ */ a.jsxs("span", { className: "text-gray-600 ml-2", children: [
          "contributions in ",
          b
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ a.jsxs("div", { className: "flex min-w-[1000px] mx-auto", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "w-16", children: [
          /* @__PURE__ */ a.jsx("div", { className: "h-5" }),
          /* @__PURE__ */ a.jsxs("div", { className: "grid grid-rows-7 gap-1 text-xs text-gray-500", children: [
            /* @__PURE__ */ a.jsx("div", { children: "SUN" }),
            /* @__PURE__ */ a.jsx("div", { className: "invisible", children: "MON" }),
            /* @__PURE__ */ a.jsx("div", { children: "TUE" }),
            /* @__PURE__ */ a.jsx("div", { className: "invisible", children: "WED" }),
            /* @__PURE__ */ a.jsx("div", { children: "THU" }),
            /* @__PURE__ */ a.jsx("div", { className: "invisible", children: "FRI" }),
            /* @__PURE__ */ a.jsx("div", { children: "SAT" })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ a.jsx("div", { className: "h-5 relative", children: R.map((m, D) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "absolute text-xs text-gray-500",
              style: {
                left: `${m.position / (L.length - 1) * 100}%`
              },
              children: m.label
            },
            D
          )) }),
          /* @__PURE__ */ a.jsx("div", { className: "grid grid-flow-col gap-1 relative", style: { zIndex: 1 }, children: L.map((m, D) => /* @__PURE__ */ a.jsx("div", { className: "grid grid-rows-7 gap-1", children: z(m).map((F, W) => {
            const te = ne(F, "yyyy-MM-dd"), I = T(F), le = ue(I), Ve = p === le, Se = _ === te, Ze = p && !Ve || _ && !Se;
            return /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "relative cursor-pointer group",
                style: { zIndex: y === te ? 9999 : 1 },
                onMouseEnter: () => De(te),
                onMouseLeave: xe,
                onClick: () => oe(te),
                title: `${ne(F, "MMMM d, yyyy")} - ${I} contribution${I !== 1 ? "s" : ""}`,
                children: [
                  /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      className: "w-4 h-4 rounded-sm transition-all duration-200 hover:ring-1 hover:ring-gray-400",
                      style: {
                        backgroundColor: fe(I),
                        opacity: Ze ? "0.3" : "1",
                        transform: Ve || Se ? "scale(1.1)" : "scale(1)",
                        border: Se ? "2px solid black" : "none"
                      }
                    }
                  ),
                  y === te && /* @__PURE__ */ a.jsxs(
                    "div",
                    {
                      className: "absolute px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-xl pointer-events-none whitespace-nowrap font-medium",
                      style: {
                        zIndex: 9999,
                        bottom: W < 2 ? "auto" : "100%",
                        top: W < 2 ? "100%" : "auto",
                        marginBottom: W >= 2 ? "8px" : "0",
                        marginTop: W < 2 ? "8px" : "0",
                        left: D < 5 ? "0" : D > L.length - 6 ? "auto" : "50%",
                        right: D > L.length - 6 ? "0" : "auto",
                        transform: D >= 5 && D <= L.length - 6 ? "translateX(-50%)" : "none",
                        maxWidth: "200px"
                      },
                      children: [
                        /* @__PURE__ */ a.jsxs("div", { className: "text-center", children: [
                          /* @__PURE__ */ a.jsx("div", { className: "font-semibold", children: ne(F, "MMM d, yyyy") }),
                          /* @__PURE__ */ a.jsxs("div", { className: "text-gray-300 text-xs", children: [
                            I,
                            " contribution",
                            I !== 1 ? "s" : ""
                          ] })
                        ] }),
                        /* @__PURE__ */ a.jsx(
                          "div",
                          {
                            className: "absolute w-0 h-0",
                            style: {
                              [W < 2 ? "top" : "bottom"]: "100%",
                              left: D < 5 ? "16px" : D > L.length - 6 ? "auto" : "50%",
                              right: D > L.length - 6 ? "16px" : "auto",
                              transform: D >= 5 && D <= L.length - 6 ? "translateX(-50%)" : "none",
                              borderLeft: "6px solid transparent",
                              borderRight: "6px solid transparent",
                              [W < 2 ? "borderBottom" : "borderTop"]: "6px solid #1f2937"
                            }
                          }
                        )
                      ]
                    }
                  )
                ]
              },
              `${D}-${W}`
            );
          }) }, D)) })
        ] })
      ] }) }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "text-center text-sm text-gray-600", children: [
          "Last contributed on: ",
          ie(l)
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-end space-x-2 text-sm", children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-gray-500", children: "Less" }),
          /* @__PURE__ */ a.jsx("div", { className: "flex space-x-1", children: ["noContributions", "low", "moderate", "high", "veryHigh"].map(
            (m) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "w-4 h-4 rounded-sm cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-gray-400",
                style: {
                  backgroundColor: ze[w][m],
                  transform: p === m ? "scale(1.1)" : "scale(1)",
                  opacity: p && p !== m ? "0.3" : "1",
                  boxShadow: p === m ? "0 0 0 2px rgba(0,0,0,0.1)" : "none"
                },
                onClick: () => x(m)
              },
              m
            )
          ) }),
          /* @__PURE__ */ a.jsx("span", { className: "text-gray-500", children: "More" })
        ] })
      ] })
    ] }) })
  ] });
};
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function st() {
  return st = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, st.apply(this, arguments);
}
var Le;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Le || (Le = {}));
const fr = "popstate";
function sa(e) {
  e === void 0 && (e = {});
  function t(n, o) {
    let {
      pathname: i,
      search: l,
      hash: c
    } = n.location;
    return At(
      "",
      {
        pathname: i,
        search: l,
        hash: c
      },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function r(n, o) {
    return typeof o == "string" ? o : it(o);
  }
  return la(t, r, null, e);
}
function O(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Ce(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function ia() {
  return Math.random().toString(36).substr(2, 8);
}
function mr(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function At(e, t, r, n) {
  return r === void 0 && (r = null), st({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Ke(t) : t, {
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || n || ia()
  });
}
function it(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: n = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function Ke(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
function la(e, t, r, n) {
  n === void 0 && (n = {});
  let {
    window: o = document.defaultView,
    v5Compat: i = !1
  } = n, l = o.history, c = Le.Pop, u = null, d = h();
  d == null && (d = 0, l.replaceState(st({}, l.state, {
    idx: d
  }), ""));
  function h() {
    return (l.state || {
      idx: null
    }).idx;
  }
  function f() {
    c = Le.Pop;
    let y = h(), k = y == null ? null : y - d;
    d = y, u && u({
      action: c,
      location: N.location,
      delta: k
    });
  }
  function b(y, k) {
    c = Le.Push;
    let p = At(N.location, y, k);
    d = h() + 1;
    let M = mr(p, d), _ = N.createHref(p);
    try {
      l.pushState(M, "", _);
    } catch (G) {
      if (G instanceof DOMException && G.name === "DataCloneError")
        throw G;
      o.location.assign(_);
    }
    i && u && u({
      action: c,
      location: N.location,
      delta: 1
    });
  }
  function E(y, k) {
    c = Le.Replace;
    let p = At(N.location, y, k);
    d = h();
    let M = mr(p, d), _ = N.createHref(p);
    l.replaceState(M, "", _), i && u && u({
      action: c,
      location: N.location,
      delta: 0
    });
  }
  function w(y) {
    let k = o.location.origin !== "null" ? o.location.origin : o.location.href, p = typeof y == "string" ? y : it(y);
    return p = p.replace(/ $/, "%20"), O(k, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, k);
  }
  let N = {
    get action() {
      return c;
    },
    get location() {
      return e(o, l);
    },
    listen(y) {
      if (u)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(fr, f), u = y, () => {
        o.removeEventListener(fr, f), u = null;
      };
    },
    createHref(y) {
      return t(o, y);
    },
    createURL: w,
    encodeLocation(y) {
      let k = w(y);
      return {
        pathname: k.pathname,
        search: k.search,
        hash: k.hash
      };
    },
    push: b,
    replace: E,
    go(y) {
      return l.go(y);
    }
  };
  return N;
}
var gr;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(gr || (gr = {}));
function ca(e, t, r) {
  return r === void 0 && (r = "/"), ua(e, t, r);
}
function ua(e, t, r, n) {
  let o = typeof t == "string" ? Ke(t) : t, i = We(o.pathname || "/", r);
  if (i == null)
    return null;
  let l = kr(e);
  da(l);
  let c = null;
  for (let u = 0; c == null && u < l.length; ++u) {
    let d = Na(i);
    c = ya(l[u], d);
  }
  return c;
}
function kr(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let o = (i, l, c) => {
    let u = {
      relativePath: c === void 0 ? i.path || "" : c,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i
    };
    u.relativePath.startsWith("/") && (O(u.relativePath.startsWith(n), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(n.length));
    let d = Me([n, u.relativePath]), h = r.concat(u);
    i.children && i.children.length > 0 && (O(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + d + '".')
    ), kr(i.children, t, h, d)), !(i.path == null && !i.index) && t.push({
      path: d,
      score: va(d, i.index),
      routesMeta: h
    });
  };
  return e.forEach((i, l) => {
    var c;
    if (i.path === "" || !((c = i.path) != null && c.includes("?")))
      o(i, l);
    else
      for (let u of Rr(i.path))
        o(i, l, u);
  }), t;
}
function Rr(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, o = r.endsWith("?"), i = r.replace(/\?$/, "");
  if (n.length === 0)
    return o ? [i, ""] : [i];
  let l = Rr(n.join("/")), c = [];
  return c.push(...l.map((u) => u === "" ? i : [i, u].join("/"))), o && c.push(...l), c.map((u) => e.startsWith("/") && u === "" ? "/" : u);
}
function da(e) {
  e.sort((t, r) => t.score !== r.score ? r.score - t.score : xa(t.routesMeta.map((n) => n.childrenIndex), r.routesMeta.map((n) => n.childrenIndex)));
}
const ha = /^:[\w-]+$/, fa = 3, ma = 2, ga = 1, pa = 10, ba = -2, pr = (e) => e === "*";
function va(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(pr) && (n += ba), t && (n += ma), r.filter((o) => !pr(o)).reduce((o, i) => o + (ha.test(i) ? fa : i === "" ? ga : pa), n);
}
function xa(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function ya(e, t, r) {
  let {
    routesMeta: n
  } = e, o = {}, i = "/", l = [];
  for (let c = 0; c < n.length; ++c) {
    let u = n[c], d = c === n.length - 1, h = i === "/" ? t : t.slice(i.length) || "/", f = Bt({
      path: u.relativePath,
      caseSensitive: u.caseSensitive,
      end: d
    }, h), b = u.route;
    if (!f)
      return null;
    Object.assign(o, f.params), l.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: Me([i, f.pathname]),
      pathnameBase: Da(Me([i, f.pathnameBase])),
      route: b
    }), f.pathnameBase !== "/" && (i = Me([i, f.pathnameBase]));
  }
  return l;
}
function Bt(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, n] = wa(e.path, e.caseSensitive, e.end), o = t.match(r);
  if (!o) return null;
  let i = o[0], l = i.replace(/(.)\/+$/, "$1"), c = o.slice(1);
  return {
    params: n.reduce((d, h, f) => {
      let {
        paramName: b,
        isOptional: E
      } = h;
      if (b === "*") {
        let N = c[f] || "";
        l = i.slice(0, i.length - N.length).replace(/(.)\/+$/, "$1");
      }
      const w = c[f];
      return E && !w ? d[b] = void 0 : d[b] = (w || "").replace(/%2F/g, "/"), d;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e
  };
}
function wa(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), Ce(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (l, c, u) => (n.push({
    paramName: c,
    isOptional: u != null
  }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push({
    paramName: "*"
  }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), n];
}
function Na(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return Ce(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function We(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function ja(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: o = ""
  } = typeof e == "string" ? Ke(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : Ca(r, t) : t,
    search: ka(n),
    hash: Ra(o)
  };
}
function Ca(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
  }), r.length > 1 ? r.join("/") : "/";
}
function Wt(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Ea(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function qt(e, t) {
  let r = Ea(e);
  return t ? r.map((n, o) => o === r.length - 1 ? n.pathname : n.pathnameBase) : r.map((n) => n.pathnameBase);
}
function Gt(e, t, r, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == "string" ? o = Ke(e) : (o = st({}, e), O(!o.pathname || !o.pathname.includes("?"), Wt("?", "pathname", "search", o)), O(!o.pathname || !o.pathname.includes("#"), Wt("#", "pathname", "hash", o)), O(!o.search || !o.search.includes("#"), Wt("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "", l = i ? "/" : o.pathname, c;
  if (l == null)
    c = r;
  else {
    let f = t.length - 1;
    if (!n && l.startsWith("..")) {
      let b = l.split("/");
      for (; b[0] === ".."; )
        b.shift(), f -= 1;
      o.pathname = b.join("/");
    }
    c = f >= 0 ? t[f] : "/";
  }
  let u = ja(o, c), d = l && l !== "/" && l.endsWith("/"), h = (i || l === ".") && r.endsWith("/");
  return !u.pathname.endsWith("/") && (d || h) && (u.pathname += "/"), u;
}
const Me = (e) => e.join("/").replace(/\/\/+/g, "/"), Da = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), ka = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Ra = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Ta(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Tr = ["post", "put", "patch", "delete"];
new Set(Tr);
const Pa = ["get", ...Tr];
new Set(Pa);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function lt() {
  return lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lt.apply(this, arguments);
}
const ut = /* @__PURE__ */ v.createContext(null);
process.env.NODE_ENV !== "production" && (ut.displayName = "DataRouter");
const zt = /* @__PURE__ */ v.createContext(null);
process.env.NODE_ENV !== "production" && (zt.displayName = "DataRouterState");
const Ma = /* @__PURE__ */ v.createContext(null);
process.env.NODE_ENV !== "production" && (Ma.displayName = "Await");
const we = /* @__PURE__ */ v.createContext(null);
process.env.NODE_ENV !== "production" && (we.displayName = "Navigation");
const dt = /* @__PURE__ */ v.createContext(null);
process.env.NODE_ENV !== "production" && (dt.displayName = "Location");
const Ee = /* @__PURE__ */ v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Ee.displayName = "Route");
const Jt = /* @__PURE__ */ v.createContext(null);
process.env.NODE_ENV !== "production" && (Jt.displayName = "RouteError");
function Sa(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t;
  Qe() || (process.env.NODE_ENV !== "production" ? O(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : O(!1));
  let {
    basename: n,
    navigator: o
  } = v.useContext(we), {
    hash: i,
    pathname: l,
    search: c
  } = ht(e, {
    relative: r
  }), u = l;
  return n !== "/" && (u = l === "/" ? n : Me([n, l])), o.createHref({
    pathname: u,
    search: c,
    hash: i
  });
}
function Qe() {
  return v.useContext(dt) != null;
}
function Be() {
  return Qe() || (process.env.NODE_ENV !== "production" ? O(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : O(!1)), v.useContext(dt).location;
}
const Pr = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Mr(e) {
  v.useContext(we).static || v.useLayoutEffect(e);
}
function kt() {
  let {
    isDataRoute: e
  } = v.useContext(Ee);
  return e ? Ga() : Oa();
}
function Oa() {
  Qe() || (process.env.NODE_ENV !== "production" ? O(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : O(!1));
  let e = v.useContext(ut), {
    basename: t,
    future: r,
    navigator: n
  } = v.useContext(we), {
    matches: o
  } = v.useContext(Ee), {
    pathname: i
  } = Be(), l = JSON.stringify(qt(o, r.v7_relativeSplatPath)), c = v.useRef(!1);
  return Mr(() => {
    c.current = !0;
  }), v.useCallback(function(d, h) {
    if (h === void 0 && (h = {}), process.env.NODE_ENV !== "production" && Ce(c.current, Pr), !c.current) return;
    if (typeof d == "number") {
      n.go(d);
      return;
    }
    let f = Gt(d, JSON.parse(l), i, h.relative === "path");
    e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Me([t, f.pathname])), (h.replace ? n.replace : n.push)(f, h.state, h);
  }, [t, n, l, i, e]);
}
function _a() {
  let {
    matches: e
  } = v.useContext(Ee), t = e[e.length - 1];
  return t ? t.params : {};
}
function ht(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    future: n
  } = v.useContext(we), {
    matches: o
  } = v.useContext(Ee), {
    pathname: i
  } = Be(), l = JSON.stringify(qt(o, n.v7_relativeSplatPath));
  return v.useMemo(() => Gt(e, JSON.parse(l), i, r === "path"), [e, l, i, r]);
}
function Fa(e, t) {
  return La(e, t);
}
function La(e, t, r, n) {
  Qe() || (process.env.NODE_ENV !== "production" ? O(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : O(!1));
  let {
    navigator: o
  } = v.useContext(we), {
    matches: i
  } = v.useContext(Ee), l = i[i.length - 1], c = l ? l.params : {}, u = l ? l.pathname : "/", d = l ? l.pathnameBase : "/", h = l && l.route;
  if (process.env.NODE_ENV !== "production") {
    let p = h && h.path || "";
    Or(u, !h || p.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + u + '" (under <Route path="' + p + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + p + '"> to <Route ') + ('path="' + (p === "/" ? "*" : p + "/*") + '">.'));
  }
  let f = Be(), b;
  if (t) {
    var E;
    let p = typeof t == "string" ? Ke(t) : t;
    d === "/" || (E = p.pathname) != null && E.startsWith(d) || (process.env.NODE_ENV !== "production" ? O(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + d + '" ') + ('but pathname "' + p.pathname + '" was given in the `location` prop.')) : O(!1)), b = p;
  } else
    b = f;
  let w = b.pathname || "/", N = w;
  if (d !== "/") {
    let p = d.replace(/^\//, "").split("/");
    N = "/" + w.replace(/^\//, "").split("/").slice(p.length).join("/");
  }
  let y = ca(e, {
    pathname: N
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && Ce(h || y != null, 'No routes matched location "' + b.pathname + b.search + b.hash + '" '), process.env.NODE_ENV !== "production" && Ce(y == null || y[y.length - 1].route.element !== void 0 || y[y.length - 1].route.Component !== void 0 || y[y.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + b.pathname + b.search + b.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let k = Aa(y && y.map((p) => Object.assign({}, p, {
    params: Object.assign({}, c, p.params),
    pathname: Me([
      d,
      // Re-encode pathnames that were decoded inside matchRoutes
      o.encodeLocation ? o.encodeLocation(p.pathname).pathname : p.pathname
    ]),
    pathnameBase: p.pathnameBase === "/" ? d : Me([
      d,
      // Re-encode pathnames that were decoded inside matchRoutes
      o.encodeLocation ? o.encodeLocation(p.pathnameBase).pathname : p.pathnameBase
    ])
  })), i, r, n);
  return t && k ? /* @__PURE__ */ v.createElement(dt.Provider, {
    value: {
      location: lt({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, b),
      navigationType: Le.Pop
    }
  }, k) : k;
}
function Wa() {
  let e = qa(), t = Ta(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", o = {
    padding: "0.5rem",
    backgroundColor: n
  }, i = {
    padding: "2px 4px",
    backgroundColor: n
  }, l = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", e), l = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", {
    style: i
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", {
    style: i
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), r ? /* @__PURE__ */ v.createElement("pre", {
    style: o
  }, r) : null, l);
}
const Ha = /* @__PURE__ */ v.createElement(Wa, null);
class Ya extends v.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : r.error,
      location: r.location,
      revalidation: t.revalidation || r.revalidation
    };
  }
  componentDidCatch(t, r) {
    console.error("React Router caught the following error during render", t, r);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ v.createElement(Ee.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ v.createElement(Jt.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function $a(e) {
  let {
    routeContext: t,
    match: r,
    children: n
  } = e, o = v.useContext(ut);
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ v.createElement(Ee.Provider, {
    value: t
  }, n);
}
function Aa(e, t, r, n) {
  var o;
  if (t === void 0 && (t = []), r === void 0 && (r = null), n === void 0 && (n = null), e == null) {
    var i;
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if ((i = n) != null && i.v7_partialHydration && t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let l = e, c = (o = r) == null ? void 0 : o.errors;
  if (c != null) {
    let h = l.findIndex((f) => f.route.id && (c == null ? void 0 : c[f.route.id]) !== void 0);
    h >= 0 || (process.env.NODE_ENV !== "production" ? O(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(c).join(",")) : O(!1)), l = l.slice(0, Math.min(l.length, h + 1));
  }
  let u = !1, d = -1;
  if (r && n && n.v7_partialHydration)
    for (let h = 0; h < l.length; h++) {
      let f = l[h];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (d = h), f.route.id) {
        let {
          loaderData: b,
          errors: E
        } = r, w = f.route.loader && b[f.route.id] === void 0 && (!E || E[f.route.id] === void 0);
        if (f.route.lazy || w) {
          u = !0, d >= 0 ? l = l.slice(0, d + 1) : l = [l[0]];
          break;
        }
      }
    }
  return l.reduceRight((h, f, b) => {
    let E, w = !1, N = null, y = null;
    r && (E = c && f.route.id ? c[f.route.id] : void 0, N = f.route.errorElement || Ha, u && (d < 0 && b === 0 ? (Or("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), w = !0, y = null) : d === b && (w = !0, y = f.route.hydrateFallbackElement || null)));
    let k = t.concat(l.slice(0, b + 1)), p = () => {
      let M;
      return E ? M = N : w ? M = y : f.route.Component ? M = /* @__PURE__ */ v.createElement(f.route.Component, null) : f.route.element ? M = f.route.element : M = h, /* @__PURE__ */ v.createElement($a, {
        match: f,
        routeContext: {
          outlet: h,
          matches: k,
          isDataRoute: r != null
        },
        children: M
      });
    };
    return r && (f.route.ErrorBoundary || f.route.errorElement || b === 0) ? /* @__PURE__ */ v.createElement(Ya, {
      location: r.location,
      revalidation: r.revalidation,
      component: N,
      error: E,
      children: p(),
      routeContext: {
        outlet: null,
        matches: k,
        isDataRoute: !0
      }
    }) : p();
  }, null);
}
var Sr = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Sr || {}), ct = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(ct || {});
function Xt(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function Ba(e) {
  let t = v.useContext(ut);
  return t || (process.env.NODE_ENV !== "production" ? O(!1, Xt(e)) : O(!1)), t;
}
function Va(e) {
  let t = v.useContext(zt);
  return t || (process.env.NODE_ENV !== "production" ? O(!1, Xt(e)) : O(!1)), t;
}
function Ua(e) {
  let t = v.useContext(Ee);
  return t || (process.env.NODE_ENV !== "production" ? O(!1, Xt(e)) : O(!1)), t;
}
function Kt(e) {
  let t = Ua(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? O(!1, e + ' can only be used on routes that contain a unique "id"') : O(!1)), r.route.id;
}
function Ia() {
  return Kt(ct.UseRouteId);
}
function qa() {
  var e;
  let t = v.useContext(Jt), r = Va(ct.UseRouteError), n = Kt(ct.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function Ga() {
  let {
    router: e
  } = Ba(Sr.UseNavigateStable), t = Kt(ct.UseNavigateStable), r = v.useRef(!1);
  return Mr(() => {
    r.current = !0;
  }), v.useCallback(function(o, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && Ce(r.current, Pr), r.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, lt({
      fromRouteId: t
    }, i)));
  }, [e, t]);
}
const br = {};
function Or(e, t, r) {
  !t && !br[e] && (br[e] = !0, process.env.NODE_ENV !== "production" && Ce(!1, r));
}
const vr = {};
function za(e, t) {
  process.env.NODE_ENV !== "production" && !vr[t] && (vr[t] = !0, console.warn(t));
}
const xr = (e, t, r) => za(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + r + "."));
function Ja(e, t) {
  (e == null ? void 0 : e.v7_startTransition) === void 0 && xr("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && xr("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath");
}
function Ht(e) {
  let {
    to: t,
    replace: r,
    state: n,
    relative: o
  } = e;
  Qe() || (process.env.NODE_ENV !== "production" ? O(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  ) : O(!1));
  let {
    future: i,
    static: l
  } = v.useContext(we);
  process.env.NODE_ENV !== "production" && Ce(!l, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let {
    matches: c
  } = v.useContext(Ee), {
    pathname: u
  } = Be(), d = kt(), h = Gt(t, qt(c, i.v7_relativeSplatPath), u, o === "path"), f = JSON.stringify(h);
  return v.useEffect(() => d(JSON.parse(f), {
    replace: r,
    state: n,
    relative: o
  }), [d, f, o, r, n]), null;
}
function Ae(e) {
  process.env.NODE_ENV !== "production" ? O(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : O(!1);
}
function Xa(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: o = Le.Pop,
    navigator: i,
    static: l = !1,
    future: c
  } = e;
  Qe() && (process.env.NODE_ENV !== "production" ? O(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : O(!1));
  let u = t.replace(/^\/*/, "/"), d = v.useMemo(() => ({
    basename: u,
    navigator: i,
    static: l,
    future: lt({
      v7_relativeSplatPath: !1
    }, c)
  }), [u, c, i, l]);
  typeof n == "string" && (n = Ke(n));
  let {
    pathname: h = "/",
    search: f = "",
    hash: b = "",
    state: E = null,
    key: w = "default"
  } = n, N = v.useMemo(() => {
    let y = We(h, u);
    return y == null ? null : {
      location: {
        pathname: y,
        search: f,
        hash: b,
        state: E,
        key: w
      },
      navigationType: o
    };
  }, [u, h, f, b, E, w, o]);
  return process.env.NODE_ENV !== "production" && Ce(N != null, '<Router basename="' + u + '"> is not able to match the URL ' + ('"' + h + f + b + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), N == null ? null : /* @__PURE__ */ v.createElement(we.Provider, {
    value: d
  }, /* @__PURE__ */ v.createElement(dt.Provider, {
    children: r,
    value: N
  }));
}
function Ka(e) {
  let {
    children: t,
    location: r
  } = e;
  return Fa(Vt(t), r);
}
new Promise(() => {
});
function Vt(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return v.Children.forEach(e, (n, o) => {
    if (!/* @__PURE__ */ v.isValidElement(n))
      return;
    let i = [...t, o];
    if (n.type === v.Fragment) {
      r.push.apply(r, Vt(n.props.children, i));
      return;
    }
    n.type !== Ae && (process.env.NODE_ENV !== "production" ? O(!1, "[" + (typeof n.type == "string" ? n.type : n.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : O(!1)), !n.props.index || !n.props.children || (process.env.NODE_ENV !== "production" ? O(!1, "An index route cannot have child routes.") : O(!1));
    let l = {
      id: n.props.id || i.join("-"),
      caseSensitive: n.props.caseSensitive,
      element: n.props.element,
      Component: n.props.Component,
      index: n.props.index,
      path: n.props.path,
      loader: n.props.loader,
      action: n.props.action,
      errorElement: n.props.errorElement,
      ErrorBoundary: n.props.ErrorBoundary,
      hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
      shouldRevalidate: n.props.shouldRevalidate,
      handle: n.props.handle,
      lazy: n.props.lazy
    };
    n.props.children && (l.children = Vt(n.props.children, i)), r.push(l);
  }), r;
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Xe() {
  return Xe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xe.apply(this, arguments);
}
function Qt(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
const yt = "get", wt = "application/x-www-form-urlencoded";
function Rt(e) {
  return e != null && typeof e.tagName == "string";
}
function Qa(e) {
  return Rt(e) && e.tagName.toLowerCase() === "button";
}
function Za(e) {
  return Rt(e) && e.tagName.toLowerCase() === "form";
}
function eo(e) {
  return Rt(e) && e.tagName.toLowerCase() === "input";
}
function to(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ro(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !to(e);
}
let vt = null;
function no() {
  if (vt === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), vt = !1;
    } catch {
      vt = !0;
    }
  return vt;
}
const ao = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Yt(e) {
  return e != null && !ao.has(e) ? (process.env.NODE_ENV !== "production" && Ce(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + wt + '"')), null) : e;
}
function oo(e, t) {
  let r, n, o, i, l;
  if (Za(e)) {
    let c = e.getAttribute("action");
    n = c ? We(c, t) : null, r = e.getAttribute("method") || yt, o = Yt(e.getAttribute("enctype")) || wt, i = new FormData(e);
  } else if (Qa(e) || eo(e) && (e.type === "submit" || e.type === "image")) {
    let c = e.form;
    if (c == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let u = e.getAttribute("formaction") || c.getAttribute("action");
    if (n = u ? We(u, t) : null, r = e.getAttribute("formmethod") || c.getAttribute("method") || yt, o = Yt(e.getAttribute("formenctype")) || Yt(c.getAttribute("enctype")) || wt, i = new FormData(c, e), !no()) {
      let {
        name: d,
        type: h,
        value: f
      } = e;
      if (h === "image") {
        let b = d ? d + "." : "";
        i.append(b + "x", "0"), i.append(b + "y", "0");
      } else d && i.append(d, f);
    }
  } else {
    if (Rt(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r = yt, n = null, o = wt, l = e;
  }
  return i && o === "text/plain" && (l = i, i = void 0), {
    action: n,
    method: r.toLowerCase(),
    encType: o,
    formData: i,
    body: l
  };
}
const so = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], io = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], lo = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], co = "6";
try {
  window.__reactRouterVersion = co;
} catch {
}
const _r = /* @__PURE__ */ v.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (_r.displayName = "ViewTransition");
const uo = /* @__PURE__ */ v.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (uo.displayName = "Fetchers");
const ho = "startTransition", yr = v[ho];
function fo(e) {
  let {
    basename: t,
    children: r,
    future: n,
    window: o
  } = e, i = v.useRef();
  i.current == null && (i.current = sa({
    window: o,
    v5Compat: !0
  }));
  let l = i.current, [c, u] = v.useState({
    action: l.action,
    location: l.location
  }), {
    v7_startTransition: d
  } = n || {}, h = v.useCallback((f) => {
    d && yr ? yr(() => u(f)) : u(f);
  }, [u, d]);
  return v.useLayoutEffect(() => l.listen(h), [l, h]), v.useEffect(() => Ja(n), [n]), /* @__PURE__ */ v.createElement(Xa, {
    basename: t,
    children: r,
    location: c.location,
    navigationType: c.action,
    navigator: l,
    future: n
  });
}
process.env.NODE_ENV;
const mo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", go = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Fr = /* @__PURE__ */ v.forwardRef(function(t, r) {
  let {
    onClick: n,
    relative: o,
    reloadDocument: i,
    replace: l,
    state: c,
    target: u,
    to: d,
    preventScrollReset: h,
    viewTransition: f
  } = t, b = Qt(t, so), {
    basename: E
  } = v.useContext(we), w, N = !1;
  if (typeof d == "string" && go.test(d) && (w = d, mo))
    try {
      let M = new URL(window.location.href), _ = d.startsWith("//") ? new URL(M.protocol + d) : new URL(d), G = We(_.pathname, E);
      _.origin === M.origin && G != null ? d = G + _.search + _.hash : N = !0;
    } catch {
      process.env.NODE_ENV !== "production" && Ce(!1, '<Link to="' + d + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let y = Sa(d, {
    relative: o
  }), k = xo(d, {
    replace: l,
    state: c,
    target: u,
    preventScrollReset: h,
    relative: o,
    viewTransition: f
  });
  function p(M) {
    n && n(M), M.defaultPrevented || k(M);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ v.createElement("a", Xe({}, b, {
      href: w || y,
      onClick: N || i ? n : p,
      ref: r,
      target: u
    }))
  );
});
process.env.NODE_ENV !== "production" && (Fr.displayName = "Link");
const po = /* @__PURE__ */ v.forwardRef(function(t, r) {
  let {
    "aria-current": n = "page",
    caseSensitive: o = !1,
    className: i = "",
    end: l = !1,
    style: c,
    to: u,
    viewTransition: d,
    children: h
  } = t, f = Qt(t, io), b = ht(u, {
    relative: f.relative
  }), E = Be(), w = v.useContext(zt), {
    navigator: N,
    basename: y
  } = v.useContext(we), k = w != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Eo(b) && d === !0, p = N.encodeLocation ? N.encodeLocation(b).pathname : b.pathname, M = E.pathname, _ = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
  o || (M = M.toLowerCase(), _ = _ ? _.toLowerCase() : null, p = p.toLowerCase()), _ && y && (_ = We(_, y) || _);
  const G = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
  let ae = M === p || !l && M.startsWith(p) && M.charAt(G) === "/", fe = _ != null && (_ === p || !l && _.startsWith(p) && _.charAt(p.length) === "/"), ue = {
    isActive: ae,
    isPending: fe,
    isTransitioning: k
  }, me = ae ? n : void 0, se;
  typeof i == "function" ? se = i(ue) : se = [i, ae ? "active" : null, fe ? "pending" : null, k ? "transitioning" : null].filter(Boolean).join(" ");
  let T = typeof c == "function" ? c(ue) : c;
  return /* @__PURE__ */ v.createElement(Fr, Xe({}, f, {
    "aria-current": me,
    className: se,
    ref: r,
    style: T,
    to: u,
    viewTransition: d
  }), typeof h == "function" ? h(ue) : h);
});
process.env.NODE_ENV !== "production" && (po.displayName = "NavLink");
const bo = /* @__PURE__ */ v.forwardRef((e, t) => {
  let {
    fetcherKey: r,
    navigate: n,
    reloadDocument: o,
    replace: i,
    state: l,
    method: c = yt,
    action: u,
    onSubmit: d,
    relative: h,
    preventScrollReset: f,
    viewTransition: b
  } = e, E = Qt(e, lo), w = jo(), N = Co(u, {
    relative: h
  }), y = c.toLowerCase() === "get" ? "get" : "post", k = (p) => {
    if (d && d(p), p.defaultPrevented) return;
    p.preventDefault();
    let M = p.nativeEvent.submitter, _ = (M == null ? void 0 : M.getAttribute("formmethod")) || c;
    w(M || p.currentTarget, {
      fetcherKey: r,
      method: _,
      navigate: n,
      replace: i,
      state: l,
      relative: h,
      preventScrollReset: f,
      viewTransition: b
    });
  };
  return /* @__PURE__ */ v.createElement("form", Xe({
    ref: t,
    method: y,
    action: N,
    onSubmit: o ? d : k
  }, E));
});
process.env.NODE_ENV !== "production" && (bo.displayName = "Form");
process.env.NODE_ENV;
var Et;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Et || (Et = {}));
var wr;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(wr || (wr = {}));
function vo(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function Lr(e) {
  let t = v.useContext(ut);
  return t || (process.env.NODE_ENV !== "production" ? O(!1, vo(e)) : O(!1)), t;
}
function xo(e, t) {
  let {
    target: r,
    replace: n,
    state: o,
    preventScrollReset: i,
    relative: l,
    viewTransition: c
  } = t === void 0 ? {} : t, u = kt(), d = Be(), h = ht(e, {
    relative: l
  });
  return v.useCallback((f) => {
    if (ro(f, r)) {
      f.preventDefault();
      let b = n !== void 0 ? n : it(d) === it(h);
      u(e, {
        replace: b,
        state: o,
        preventScrollReset: i,
        relative: l,
        viewTransition: c
      });
    }
  }, [d, u, h, n, o, r, e, i, l, c]);
}
function yo() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let wo = 0, No = () => "__" + String(++wo) + "__";
function jo() {
  let {
    router: e
  } = Lr(Et.UseSubmit), {
    basename: t
  } = v.useContext(we), r = Ia();
  return v.useCallback(function(n, o) {
    o === void 0 && (o = {}), yo();
    let {
      action: i,
      method: l,
      encType: c,
      formData: u,
      body: d
    } = oo(n, t);
    if (o.navigate === !1) {
      let h = o.fetcherKey || No();
      e.fetch(h, r, o.action || i, {
        preventScrollReset: o.preventScrollReset,
        formData: u,
        body: d,
        formMethod: o.method || l,
        formEncType: o.encType || c,
        flushSync: o.flushSync
      });
    } else
      e.navigate(o.action || i, {
        preventScrollReset: o.preventScrollReset,
        formData: u,
        body: d,
        formMethod: o.method || l,
        formEncType: o.encType || c,
        replace: o.replace,
        state: o.state,
        fromRouteId: r,
        flushSync: o.flushSync,
        viewTransition: o.viewTransition
      });
  }, [e, t, r]);
}
function Co(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    basename: n
  } = v.useContext(we), o = v.useContext(Ee);
  o || (process.env.NODE_ENV !== "production" ? O(!1, "useFormAction must be used inside a RouteContext") : O(!1));
  let [i] = o.matches.slice(-1), l = Xe({}, ht(e || ".", {
    relative: r
  })), c = Be();
  if (e == null) {
    l.search = c.search;
    let u = new URLSearchParams(l.search), d = u.getAll("index");
    if (d.some((f) => f === "")) {
      u.delete("index"), d.filter((b) => b).forEach((b) => u.append("index", b));
      let f = u.toString();
      l.search = f ? "?" + f : "";
    }
  }
  return (!e || e === ".") && i.route.index && (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (l.pathname = l.pathname === "/" ? n : Me([n, l.pathname])), it(l);
}
function Eo(e, t) {
  t === void 0 && (t = {});
  let r = v.useContext(_r);
  r == null && (process.env.NODE_ENV !== "production" ? O(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : O(!1));
  let {
    basename: n
  } = Lr(Et.useViewTransitionState), o = ht(e, {
    relative: t.relative
  });
  if (!r.isTransitioning)
    return !1;
  let i = We(r.currentLocation.pathname, n) || r.currentLocation.pathname, l = We(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return Bt(o.pathname, l) != null || Bt(o.pathname, i) != null;
}
const Do = ({ username: e, token: t }) => {
  const r = kt(), [n, o] = S([]), [i, l] = S(!0), [c, u] = S({
    startDate: Je(/* @__PURE__ */ new Date()),
    endDate: /* @__PURE__ */ new Date()
  }), [d, h] = S("lastYear"), [f, b] = S("galaxy"), [E, w] = S(null), [N, y] = S(null), [k, p] = S(null), M = () => {
    r("/login");
  };
  Ut(() => {
    l(!0), y(null), p(null), w(null), setTimeout(() => {
      It(
        e,
        t,
        c.startDate,
        c.endDate
      ).then((x) => {
        o(x), l(!1);
      });
    }, 1e3);
  }, [c, e, t]);
  const _ = (x) => {
    const R = ze[f];
    return x === 0 ? R.noContributions : x <= 2 ? R.low : x <= 4 ? R.moderate : x <= 6 ? R.high : R.veryHigh;
  }, G = (x) => x === 0 ? "noContributions" : x <= 2 ? "low" : x <= 4 ? "moderate" : x <= 6 ? "high" : "veryHigh", ae = () => n.reduce((x, R) => x + R.count, 0), fe = () => {
    const x = me();
    if (x.length === 0) return [];
    const R = /* @__PURE__ */ new Map();
    return x.forEach((L, m) => {
      se(L).forEach((F) => {
        if (F.getDate() === 1) {
          const W = F.getMonth();
          R.has(W) || R.set(W, {
            label: ne(F, "MMM"),
            position: m
          });
        }
      });
    }), Array.from(R.values()).sort(
      (L, m) => L.position - m.position
    );
  }, ue = (x) => {
    var L;
    const R = ne(x, "yyyy-MM-dd");
    return ((L = n.find((m) => m.date === R)) == null ? void 0 : L.count) || 0;
  }, me = () => {
    const x = c.startDate, R = c.endDate;
    return Ct({ start: x, end: R });
  }, se = (x) => jt({
    start: x,
    end: ot(x, 6)
  }), T = (x, R) => {
    u({ startDate: x, endDate: R });
  }, V = (x) => {
    let R = null;
    for (let L = 0; L < x.length; L++)
      x[L].count > 0 && (R = x[L].date);
    return z(R);
  }, z = (x) => {
    if (!x) return "No contributions found";
    const R = new Date(x), L = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], m = R.getDate(), D = L[R.getMonth()], F = R.getFullYear(), W = K(m);
    return `${D} ${m}${W}, ${F}`;
  }, K = (x) => {
    if (x >= 11 && x <= 13) return "th";
    switch (x % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }, ie = (x) => {
    console.log("Mouse enter:", x), (!k || k === x) && w(x);
  }, ve = () => {
    console.log("Mouse leave"), k || w(null);
  }, ge = (x) => {
    k === x ? (p(null), w(null)) : (p(x), w(x)), y(null);
  }, De = (x) => {
    y(N === x ? null : x), p(null), w(null);
  };
  if (i)
    return /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-200 rounded-lg shadow-sm p-6 w-full animate-pulse", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ a.jsx("div", { className: "h-4 bg-gray-200 rounded" }),
      /* @__PURE__ */ a.jsx("div", { className: "grid grid-flow-col gap-1 overflow-x-auto", children: Array.from({ length: 53 }).map((x, R) => /* @__PURE__ */ a.jsx("div", { className: "grid grid-rows-7 gap-1", children: Array.from({ length: 7 }).map((L, m) => /* @__PURE__ */ a.jsx(
        "div",
        {
          className: "w-4 h-4 bg-gray-200 rounded-sm"
        },
        `${R}-${m}`
      )) }, R)) })
    ] }) });
  const xe = fe(), oe = me();
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-6", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ a.jsx("div", { className: "w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 text-purple-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" }) }) }),
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-500", children: "Logged in as" }),
          /* @__PURE__ */ a.jsx("div", { className: "font-semibold text-gray-900", children: e })
        ] })
      ] }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: M,
          className: "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200",
          children: "Logout"
        }
      )
    ] }) }),
    /* @__PURE__ */ a.jsx("div", { className: "bg-white border border-gray-200 rounded-lg shadow-sm p-6 animate-fadeIn max-w-full overflow-hidden", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-6 px-4", children: [
      " ",
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ a.jsx("svg", { className: "w-5 h-5 text-purple-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", clipRule: "evenodd" }) }),
          /* @__PURE__ */ a.jsx("h2", { className: "text-lg font-semibold hidden sm:inline", children: "Contribution Calendar" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `px-3 py-1 text-sm rounded transition-colors ${d === "lastYear" ? "bg-purple-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`,
              onClick: () => {
                const x = /* @__PURE__ */ new Date(), R = Je(x);
                T(R, x), h("lastYear");
              },
              children: "Last Year"
            }
          ),
          [2025, 2024, 2023, 2022].map((x) => /* @__PURE__ */ a.jsx(
            "button",
            {
              className: `px-3 py-1 text-sm rounded transition-colors ${d === x.toString() ? "bg-purple-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`,
              onClick: () => {
                T(
                  new Date(x, 0, 1),
                  new Date(x, 11, 31)
                ), h(x.toString());
              },
              children: x
            },
            x
          ))
        ] }),
        /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(
          "select",
          {
            value: f,
            onChange: (x) => b(x.target.value),
            className: "border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
            children: Object.keys(ze).map((x) => /* @__PURE__ */ a.jsx("option", { value: x, children: x.charAt(0).toUpperCase() + x.slice(1) }, x))
          }
        ) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "text-center py-2", children: [
        /* @__PURE__ */ a.jsx("span", { className: "text-2xl font-bold text-gray-900", children: ae() }),
        /* @__PURE__ */ a.jsxs("span", { className: "text-gray-600 ml-2", children: [
          "contributions in ",
          d
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ a.jsxs("div", { className: "flex min-w-[1000px] mx-auto", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "w-16", children: [
          /* @__PURE__ */ a.jsx("div", { className: "h-5" }),
          /* @__PURE__ */ a.jsxs("div", { className: "grid grid-rows-7 gap-1 text-xs text-gray-500", children: [
            /* @__PURE__ */ a.jsx("div", { children: "SUN" }),
            /* @__PURE__ */ a.jsx("div", { className: "invisible", children: "MON" }),
            /* @__PURE__ */ a.jsx("div", { children: "TUE" }),
            /* @__PURE__ */ a.jsx("div", { className: "invisible", children: "WED" }),
            /* @__PURE__ */ a.jsx("div", { children: "THU" }),
            /* @__PURE__ */ a.jsx("div", { className: "invisible", children: "FRI" }),
            /* @__PURE__ */ a.jsx("div", { children: "SAT" })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ a.jsx("div", { className: "h-5 relative", children: xe.map((x, R) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "absolute text-xs text-gray-500",
              style: {
                left: `${x.position / (oe.length - 1) * 100}%`
              },
              children: x.label
            },
            R
          )) }),
          /* @__PURE__ */ a.jsx("div", { className: "grid grid-flow-col gap-1 relative", style: { zIndex: 1 }, children: oe.map((x, R) => /* @__PURE__ */ a.jsx("div", { className: "grid grid-rows-7 gap-1", children: se(x).map((L, m) => {
            const D = ne(L, "yyyy-MM-dd"), F = ue(L), W = G(F), te = N === W, I = k === D, le = N && !te || k && !I;
            return /* @__PURE__ */ a.jsxs(
              "div",
              {
                className: "relative cursor-pointer group",
                style: { zIndex: E === D ? 9999 : 1 },
                onMouseEnter: () => ie(D),
                onMouseLeave: ve,
                onClick: () => ge(D),
                title: `${ne(L, "MMMM d, yyyy")} - ${F} contribution${F !== 1 ? "s" : ""}`,
                children: [
                  /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      className: "w-4 h-4 rounded-sm transition-all duration-200 hover:ring-1 hover:ring-gray-400",
                      style: {
                        backgroundColor: _(F),
                        opacity: le ? "0.3" : "1",
                        transform: te || I ? "scale(1.1)" : "scale(1)",
                        border: I ? "2px solid black" : "none"
                      }
                    }
                  ),
                  E === D && /* @__PURE__ */ a.jsxs(
                    "div",
                    {
                      className: "absolute px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-xl pointer-events-none whitespace-nowrap font-medium",
                      style: {
                        zIndex: 9999,
                        // Vertical positioning: top rows show below, bottom rows show above
                        bottom: m < 2 ? "auto" : "100%",
                        top: m < 2 ? "100%" : "auto",
                        marginBottom: m >= 2 ? "8px" : "0",
                        marginTop: m < 2 ? "8px" : "0",
                        // More conservative horizontal positioning to prevent overflow
                        left: R < 5 ? "0" : R > oe.length - 6 ? "auto" : "50%",
                        right: R > oe.length - 6 ? "0" : "auto",
                        transform: R >= 5 && R <= oe.length - 6 ? "translateX(-50%)" : "none",
                        // Ensure tooltip doesn't extend beyond viewport
                        maxWidth: "200px"
                      },
                      children: [
                        /* @__PURE__ */ a.jsxs("div", { className: "text-center", children: [
                          /* @__PURE__ */ a.jsx("div", { className: "font-semibold", children: ne(L, "MMM d, yyyy") }),
                          /* @__PURE__ */ a.jsxs("div", { className: "text-gray-300 text-xs", children: [
                            F,
                            " contribution",
                            F !== 1 ? "s" : ""
                          ] })
                        ] }),
                        /* @__PURE__ */ a.jsx(
                          "div",
                          {
                            className: "absolute w-0 h-0",
                            style: {
                              // Vertical arrow position
                              [m < 2 ? "top" : "bottom"]: "100%",
                              // More conservative horizontal arrow position
                              left: R < 5 ? "16px" : R > oe.length - 6 ? "auto" : "50%",
                              right: R > oe.length - 6 ? "16px" : "auto",
                              transform: R >= 5 && R <= oe.length - 6 ? "translateX(-50%)" : "none",
                              borderLeft: "6px solid transparent",
                              borderRight: "6px solid transparent",
                              [m < 2 ? "borderBottom" : "borderTop"]: "6px solid #1f2937"
                            }
                          }
                        )
                      ]
                    }
                  )
                ]
              },
              `${R}-${m}`
            );
          }) }, R)) })
        ] })
      ] }) }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "text-center text-sm text-gray-600", children: [
          "Last contributed on: ",
          V(n)
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-end space-x-2 text-sm", children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-gray-500", children: "Less" }),
          /* @__PURE__ */ a.jsx("div", { className: "flex space-x-1", children: ["noContributions", "low", "moderate", "high", "veryHigh"].map(
            (x) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "w-4 h-4 rounded-sm cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-gray-400",
                style: {
                  backgroundColor: ze[f][x],
                  transform: N === x ? "scale(1.1)" : "scale(1)",
                  opacity: N && N !== x ? "0.3" : "1",
                  boxShadow: N === x ? "0 0 0 2px rgba(0,0,0,0.1)" : "none"
                },
                onClick: () => De(x)
              },
              x
            )
          ) }),
          /* @__PURE__ */ a.jsx("span", { className: "text-gray-500", children: "More" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx("footer", { className: "mt-8 text-center text-sm text-gray-500", children: "Designed and developed by Mani Babu" })
  ] });
}, ko = ({ setUsername: e, setToken: t }) => {
  const [r, n] = S(""), [o, i] = S(""), [l, c] = S(""), u = kt(), d = (E) => {
    const w = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, N = /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/;
    return w.test(E) ? "email" : N.test(E) ? "username" : "invalid";
  }, h = async (E, w) => {
    try {
      const N = d(E), y = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${w}`
        }
      });
      if (!y.ok)
        return y.status === 401 ? (c("Invalid GitHub token"), !1) : (c("Failed to verify credentials"), !1);
      const k = await y.json();
      switch (N) {
        case "email":
          if (k.email !== E)
            return c("Email does not match the token owner"), !1;
          break;
        case "username":
          if (k.login.toLowerCase() !== E.toLowerCase())
            return c("Username does not match the token owner"), !1;
          break;
        case "invalid":
          return c("Invalid identifier format"), !1;
      }
      return !0;
    } catch {
      return c("Network error occurred"), !1;
    }
  }, f = async (E) => {
    if (E.preventDefault(), !r || !o) {
      c("Both fields are required.");
      return;
    }
    if (d(r) === "invalid") {
      c("Please enter a valid email or GitHub username");
      return;
    }
    await h(r, o) && (e(r), t(o), u(`/calendar/gh/${r}`));
  }, b = () => {
    if (!r) return "Enter email or GitHub username";
    switch (d(r)) {
      case "email":
        return "Email address detected";
      case "username":
        return "GitHub username detected";
      default:
        return "Invalid format";
    }
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center bg-background p-4", children: [
    /* @__PURE__ */ a.jsx("div", { className: "h-16 mb-4", children: /* @__PURE__ */ a.jsx(
      "svg",
      {
        className: "w-16 h-16 text-purple-500",
        fill: "currentColor",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ a.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",
            clipRule: "evenodd"
          }
        )
      }
    ) }),
    /* @__PURE__ */ a.jsxs("div", { className: "bg-white border border-gray-200 rounded-lg shadow-sm p-6 w-full max-w-md", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "text-2xl font-semibold text-center text-gray-900 mb-6", children: "Login" }),
      l && /* @__PURE__ */ a.jsx("div", { className: "text-red-600 text-center text-sm mb-4 p-2 bg-red-50 border border-red-200 rounded", children: l }),
      /* @__PURE__ */ a.jsxs("form", { onSubmit: f, className: "space-y-4", children: [
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("label", { htmlFor: "identifier", className: "block text-sm font-medium text-gray-700 mb-1", children: "GitHub Username" }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: "identifier",
              type: "text",
              value: r,
              onChange: (E) => n(E.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
              placeholder: b()
            }
          ),
          r && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-gray-500 mt-1 block", children: b() })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("label", { htmlFor: "token", className: "block text-sm font-medium text-gray-700 mb-1", children: "GitHub Personal Access Token" }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              id: "token",
              type: "password",
              value: o,
              onChange: (E) => i(E.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
              placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
            }
          ),
          /* @__PURE__ */ a.jsxs("span", { className: "text-xs text-gray-500 mt-1 block", children: [
            /* @__PURE__ */ a.jsx("a", { href: "https://github.com/settings/tokens", target: "_blank", rel: "noopener noreferrer", className: "text-purple-600 hover:underline", children: "Create a token here" }),
            " (needs repo and read:user scopes)"
          ] })
        ] }),
        /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "submit",
            className: "w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
            children: "Login"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("footer", { className: "mt-6 text-center text-sm text-gray-500", children: "Designed and developed by Mani Babu" })
  ] });
}, Ro = ({ token: e }) => {
  const { username: t } = _a();
  return t ? /* @__PURE__ */ a.jsxs("div", { className: "container mx-auto p-8 space-y-8", children: [
    /* @__PURE__ */ a.jsx("h1", { className: "text-3xl font-semibold text-center text-gray-900", children: "GitHub Contribution Calendar" }),
    /* @__PURE__ */ a.jsx(Do, { username: t, token: e })
  ] }) : /* @__PURE__ */ a.jsx("div", { children: "Username not found" });
};
function To() {
  const [e, t] = S("classic"), [r, n] = S("light"), [o, i] = S(12), [l, c] = S(2), [u, d] = S(14), [h, f] = S(!1), [b, E] = S(!1), [w, N] = S(!1), [y, k] = S(!1), [p, M] = S([2025, 2024]), [_, G] = S(!0), [ae, fe] = S(!1), [ue, me] = S(null), se = oa();
  return /* @__PURE__ */ a.jsx("div", { className: "min-h-screen bg-gray-50 p-8", children: /* @__PURE__ */ a.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ a.jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "🧪 Feature Testing Lab" }),
      /* @__PURE__ */ a.jsx("p", { className: "text-lg text-gray-600", children: "Test all the customization features of the GitHubCalendar component" })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 sticky top-4 space-y-6", children: [
        /* @__PURE__ */ a.jsx("h2", { className: "text-xl font-semibold mb-4", children: "🎛️ Controls" }),
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Theme" }),
          /* @__PURE__ */ a.jsx(
            "select",
            {
              value: e,
              onChange: (T) => t(T.target.value),
              className: "w-full p-2 border border-gray-300 rounded-md",
              children: se.map((T) => /* @__PURE__ */ a.jsx("option", { value: T, children: T.charAt(0).toUpperCase() + T.slice(1) }, T))
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Color Scheme" }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: () => n("light"),
                className: `px-3 py-1 rounded text-sm ${r === "light" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`,
                children: "Light"
              }
            ),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: () => n("dark"),
                className: `px-3 py-1 rounded text-sm ${r === "dark" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`,
                children: "Dark"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
            "Block Size: ",
            o,
            "px"
          ] }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "range",
              min: "8",
              max: "20",
              value: o,
              onChange: (T) => i(Number(T.target.value)),
              className: "w-full"
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
            "Block Margin: ",
            l,
            "px"
          ] }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "range",
              min: "1",
              max: "6",
              value: l,
              onChange: (T) => c(Number(T.target.value)),
              className: "w-full"
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
            "Font Size: ",
            u,
            "px"
          ] }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "range",
              min: "10",
              max: "20",
              value: u,
              onChange: (T) => d(Number(T.target.value)),
              className: "w-full"
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ a.jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Hide Elements" }),
          [
            { key: "hideColorLegend", label: "Color Legend", value: h, setter: f },
            { key: "hideMonthLabels", label: "Month Labels", value: b, setter: E },
            { key: "hideWeekdayLabels", label: "Weekday Labels", value: w, setter: N },
            { key: "hideTotalCount", label: "Total Count", value: y, setter: k }
          ].map(({ key: T, label: V, value: z, setter: K }) => /* @__PURE__ */ a.jsxs("label", { className: "flex items-center", children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "checkbox",
                checked: z,
                onChange: (ie) => K(ie.target.checked),
                className: "mr-2"
              }
            ),
            V
          ] }, T))
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ a.jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Show Features" }),
          /* @__PURE__ */ a.jsxs("label", { className: "flex items-center", children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "checkbox",
                checked: _,
                onChange: (T) => G(T.target.checked),
                className: "mr-2"
              }
            ),
            "Year Selection Buttons"
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Years to Display" }),
          /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-2 gap-2", children: [2025, 2024, 2023, 2022].map((T) => /* @__PURE__ */ a.jsxs("label", { className: "flex items-center", children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "checkbox",
                checked: p.includes(T),
                onChange: (V) => {
                  V.target.checked ? M([...p, T].sort((z, K) => K - z)) : M(p.filter((z) => z !== T));
                },
                className: "mr-2"
              }
            ),
            T
          ] }, T)) })
        ] }),
        /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsxs("label", { className: "flex items-center", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "checkbox",
              checked: ae,
              onChange: (T) => fe(T.target.checked),
              className: "mr-2"
            }
          ),
          "Custom Render (Circles)"
        ] }) }),
        ue && /* @__PURE__ */ a.jsxs("div", { className: "p-3 bg-blue-50 rounded-lg", children: [
          /* @__PURE__ */ a.jsx("h3", { className: "text-sm font-medium text-blue-900", children: "Last Clicked" }),
          /* @__PURE__ */ a.jsx("p", { className: "text-sm text-blue-700", children: ue })
        ] })
      ] }) }),
      /* @__PURE__ */ a.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ a.jsxs("div", { className: `rounded-lg shadow-lg p-6 ${r === "dark" ? "bg-gray-900" : "bg-white"}`, children: [
        /* @__PURE__ */ a.jsx("h2", { className: `text-2xl font-semibold mb-6 ${r === "dark" ? "text-white" : "text-gray-900"}`, children: "📊 Live Preview" }),
        /* @__PURE__ */ a.jsx(
          be,
          {
            username: "mani-miriyala28",
            token: void 0,
            theme: e,
            colorScheme: r,
            blockSize: o,
            blockMargin: l,
            fontSize: u,
            hideColorLegend: h,
            hideMonthLabels: b,
            hideWeekdayLabels: w,
            hideTotalCount: y,
            years: p.length > 0 ? p : [2025],
            showYearButtons: _,
            availableYears: [2025, 2024, 2023, 2022, 2021],
            onYearChange: (T) => {
              console.log(`Selected year: ${T}`);
            },
            onDayClick: (T, V) => {
              me(`${T} (${V} contributions)`);
            },
            renderDay: ae ? (T, V) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: `rounded-full border-2 transition-all hover:scale-110 ${V > 0 ? "bg-green-500 border-green-600" : "bg-gray-200 border-gray-300"}`,
                style: {
                  width: o,
                  height: o
                },
                title: `${T}: ${V} contributions`
              }
            ) : void 0,
            renderDetails: ae ? (T, V) => /* @__PURE__ */ a.jsxs("div", { className: "p-3 bg-white border rounded-lg shadow-lg", children: [
              /* @__PURE__ */ a.jsx("div", { className: "font-bold text-lg text-green-600", children: V }),
              /* @__PURE__ */ a.jsx("div", { className: "text-sm text-gray-600", children: "contributions on" }),
              /* @__PURE__ */ a.jsx("div", { className: "font-medium", children: new Date(T).toLocaleDateString() }),
              /* @__PURE__ */ a.jsx("div", { className: "text-xs text-gray-400 mt-1", children: "🎨 Custom tooltip style" })
            ] }) : void 0
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [
        /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-semibold mb-4", children: "🔧 Test 1: Your Profile - Minimal" }),
        /* @__PURE__ */ a.jsx(
          be,
          {
            username: "mani-miriyala28",
            token: void 0
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "bg-gray-900 rounded-lg shadow-lg p-6", children: [
        /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-semibold mb-4 text-white", children: "🌙 Test 2: Your Profile - Dark Mode" }),
        /* @__PURE__ */ a.jsx(
          be,
          {
            username: "mani-miriyala28",
            token: void 0,
            theme: "galaxy",
            colorScheme: "dark",
            blockSize: 10
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [
        /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-semibold mb-4", children: "🎨 Test 3: Your Profile - Custom Theme" }),
        /* @__PURE__ */ a.jsx(
          be,
          {
            username: "mani-miriyala28",
            token: void 0,
            theme: "crimson",
            blockSize: 8,
            blockMargin: 1
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [
        /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-semibold mb-4", children: "🖱️ Test 4: Your Profile - Click Events" }),
        /* @__PURE__ */ a.jsx(
          be,
          {
            username: "mani-miriyala28",
            token: void 0,
            theme: "nature",
            years: [2025],
            onDayClick: (T, V) => {
              alert(`Clicked: ${T}
Contributions: ${V}`);
            }
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [
        /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-semibold mb-4", children: "🎭 Test 5: Custom Render" }),
        /* @__PURE__ */ a.jsx(
          be,
          {
            username: "octocat",
            theme: "halloween",
            renderDay: (T, V) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: `transition-all hover:rotate-45 ${V > 5 ? "text-2xl" : V > 2 ? "text-lg" : "text-sm"}`,
                style: { width: 12, height: 12 },
                children: V > 0 ? "🎃" : "⬜"
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [
        /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-semibold mb-4", children: "⚡ Test 6: Multi-Year" }),
        /* @__PURE__ */ a.jsx(
          be,
          {
            username: "octocat",
            theme: "winter",
            years: [2024, 2023, 2022],
            blockSize: 8,
            blockMargin: 1,
            fontSize: 12
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "mt-12 bg-white rounded-lg shadow-lg p-6", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "text-2xl font-semibold mb-6", children: "📝 Code Examples" }),
      /* @__PURE__ */ a.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-medium mb-2", children: "Basic Usage:" }),
          /* @__PURE__ */ a.jsx("pre", { className: "bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto", children: `<GitHubCalendar 
  username="your-username"
  token={process.env.GITHUB_TOKEN}
/>` })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-medium mb-2", children: "With Customization:" }),
          /* @__PURE__ */ a.jsx("pre", { className: "bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto", children: `<GitHubCalendar
  username="your-username"
  token={process.env.GITHUB_TOKEN}
  theme="galaxy"
  colorScheme="dark"
  blockSize={14}
  blockMargin={3}
  fontSize={16}
  years={[2025, 2024]}
  onDayClick={(date, count) => console.log(date, count)}
/>` })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-medium mb-2", children: "Custom Rendering:" }),
          /* @__PURE__ */ a.jsx("pre", { className: "bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto", children: `<GitHubCalendar
  username="your-username"
  token={process.env.GITHUB_TOKEN}
  renderDay={(date, count) => (
    <div className={count > 0 ? 'bg-green-500' : 'bg-gray-200'}>
      {count}
    </div>
  )}
  renderDetails={(date, count) => (
    <div>Custom tooltip for {date}: {count} contributions</div>
  )}
/>` })
        ] })
      ] })
    ] })
  ] }) });
}
function Po() {
  return /* @__PURE__ */ a.jsx("div", { className: "min-h-screen bg-gray-50 p-8", children: /* @__PURE__ */ a.jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ a.jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "React GitHub Contribution Calendar" }),
      /* @__PURE__ */ a.jsx("p", { className: "text-lg text-gray-600 mb-4", children: "A beautiful and customizable GitHub contribution calendar component" }),
      /* @__PURE__ */ a.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8", children: [
        /* @__PURE__ */ a.jsx("p", { className: "text-blue-800 font-semibold", children: "🆕 New Feature: Click on color legend items to highlight contribution levels!" }),
        /* @__PURE__ */ a.jsxs("p", { className: "text-blue-600 text-sm mt-1", children: [
          "Showing examples with username: ",
          /* @__PURE__ */ a.jsx("code", { className: "bg-blue-100 px-2 py-1 rounded", children: "your-username" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Your GitHub Profile - Basic" }),
      /* @__PURE__ */ a.jsx("p", { className: "text-gray-600 mb-4", children: "Click on the color legend below to highlight contribution levels!" }),
      /* @__PURE__ */ a.jsx(
        be,
        {
          username: "mani-miriyala28",
          token: void 0,
          theme: "classic",
          colorScheme: "light",
          blockSize: 12,
          blockMargin: 2,
          years: [2025, 2024],
          onDayClick: (e, t) => {
            console.log(`Clicked: ${e} with ${t} contributions`);
          }
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "bg-gray-900 rounded-lg shadow-lg p-6", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "text-2xl font-semibold mb-4 text-white", children: "Your Profile - Dark Galaxy Theme" }),
      /* @__PURE__ */ a.jsx("p", { className: "text-gray-300 mb-4", children: "✨ Galaxy theme with interactive legend highlighting ✨" }),
      /* @__PURE__ */ a.jsx(
        be,
        {
          username: "mani-miriyala28",
          token: void 0,
          theme: "galaxy",
          colorScheme: "dark",
          blockSize: 14,
          blockMargin: 3,
          years: [2025, 2024, 2023],
          hideTotalCount: !1,
          onDayClick: (e, t) => {
            alert(`🚀 ${e}: ${t} contributions`);
          }
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Your Profile - Nature Theme" }),
      /* @__PURE__ */ a.jsx("p", { className: "text-gray-600 mb-4", children: "🌿 Nature theme with larger blocks and enhanced legend interaction 🌿" }),
      /* @__PURE__ */ a.jsx(
        be,
        {
          username: "mani-miriyala28",
          token: void 0,
          theme: "nature",
          colorScheme: "light",
          blockSize: 16,
          blockMargin: 4,
          fontSize: 16,
          years: [2025],
          hideWeekdayLabels: !1,
          hideColorLegend: !1,
          onDayClick: (e, t) => {
            console.log(`🌱 Nature click: ${e} with ${t} contributions`);
          }
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg shadow-lg p-6 border-2 border-purple-200", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "text-2xl font-semibold mb-4 text-purple-800", children: "🎯 New Feature: Interactive Legend Highlighting" }),
      /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg p-4 mb-4", children: [
        /* @__PURE__ */ a.jsx("h3", { className: "font-semibold text-lg mb-2", children: "How to use:" }),
        /* @__PURE__ */ a.jsxs("ul", { className: "list-disc list-inside space-y-1 text-gray-700", children: [
          /* @__PURE__ */ a.jsx("li", { children: "Click on any color in the legend below to highlight that contribution level" }),
          /* @__PURE__ */ a.jsx("li", { children: "All cells with the same contribution level will be highlighted with a blue border" }),
          /* @__PURE__ */ a.jsx("li", { children: "Other cells will be dimmed for better focus" }),
          /* @__PURE__ */ a.jsx("li", { children: "Click the same color again to clear the highlighting" }),
          /* @__PURE__ */ a.jsx("li", { children: "This helps you quickly identify patterns in your contribution history!" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsx(
        be,
        {
          username: "mani-miriyala28",
          token: void 0,
          theme: "classic",
          colorScheme: "light",
          blockSize: 15,
          blockMargin: 3,
          fontSize: 14,
          years: [2025, 2024],
          hideTotalCount: !1,
          onDayClick: (e, t) => {
            console.log(`🎯 Interactive click: ${e} with ${t} contributions`);
          }
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Your Profile - 3 Years History" }),
      /* @__PURE__ */ a.jsx("p", { className: "text-gray-600 mb-4", children: "🎃 Halloween theme showing your contribution journey across years 🎃" }),
      /* @__PURE__ */ a.jsx(
        be,
        {
          username: "mani-miriyala28",
          token: void 0,
          theme: "halloween",
          colorScheme: "dark",
          years: [2025, 2024, 2023],
          hideTotalCount: !1,
          blockSize: 13,
          blockMargin: 2,
          onDayClick: (e, t) => {
            alert(`🎃 ${e}: ${t} spooky contributions!`);
          }
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [
      /* @__PURE__ */ a.jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Custom Rendering" }),
      /* @__PURE__ */ a.jsx(
        be,
        {
          username: "octocat",
          theme: "classic",
          renderDay: (e, t) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `w-3 h-3 rounded-full transition-all hover:scale-110 ${t > 0 ? "bg-green-500 border-2 border-green-600" : "bg-gray-200 border-2 border-gray-300"}`,
              title: `${e}: ${t} contributions`
            }
          ),
          renderDetails: (e, t) => /* @__PURE__ */ a.jsxs("div", { className: "p-3 bg-white border rounded-lg shadow-lg", children: [
            /* @__PURE__ */ a.jsx("div", { className: "font-bold text-lg text-green-600", children: t }),
            /* @__PURE__ */ a.jsx("div", { className: "text-sm text-gray-600", children: "contributions on" }),
            /* @__PURE__ */ a.jsx("div", { className: "font-medium", children: new Date(e).toLocaleDateString() }),
            /* @__PURE__ */ a.jsx("div", { className: "text-xs text-gray-400 mt-1", children: "Click for more details" })
          ] })
        }
      )
    ] })
  ] }) });
}
const Fo = () => {
  const [e, t] = S(""), [r, n] = S("");
  return /* @__PURE__ */ a.jsx(fo, { children: /* @__PURE__ */ a.jsxs(Ka, { children: [
    /* @__PURE__ */ a.jsx(Ae, { path: "/", element: /* @__PURE__ */ a.jsx(Ht, { to: "/test" }) }),
    /* @__PURE__ */ a.jsx(Ae, { path: "/test", element: /* @__PURE__ */ a.jsx(To, {}) }),
    /* @__PURE__ */ a.jsx(
      Ae,
      {
        path: "/login",
        element: /* @__PURE__ */ a.jsx(ko, { setUsername: t, setToken: n })
      }
    ),
    /* @__PURE__ */ a.jsx(
      Ae,
      {
        path: "/calendar/gh/:username",
        element: e && r ? /* @__PURE__ */ a.jsx(Ro, { token: r }) : /* @__PURE__ */ a.jsx(Ht, { to: "/login" })
      }
    ),
    /* @__PURE__ */ a.jsx(Ae, { path: "/demo", element: /* @__PURE__ */ a.jsx(Po, {}) }),
    /* @__PURE__ */ a.jsx(Ae, { path: "*", element: /* @__PURE__ */ a.jsx(Ht, { to: "/test" }) })
  ] }) });
};
export {
  Fo as App,
  Do as ContributionCalendar,
  be as GitHubCalendar,
  _o as GitHubContributionCalendar,
  ko as Login,
  Oo as fetchContributionDetails,
  It as fetchGitHubContributions,
  aa as getTheme,
  oa as getThemeNames
};
