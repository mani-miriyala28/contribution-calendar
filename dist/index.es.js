import * as g from "react";
import nr, { useState as $, useEffect as ar } from "react";
import "react-dom";
var mt = { exports: {} }, ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function Ir() {
  if (Vt) return ke;
  Vt = 1;
  var e = nr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, d) {
    var f, h = {}, b = null, C = null;
    d !== void 0 && (b = "" + d), u.key !== void 0 && (b = "" + u.key), u.ref !== void 0 && (C = u.ref);
    for (f in u) n.call(u, f) && !i.hasOwnProperty(f) && (h[f] = u[f]);
    if (c && c.defaultProps) for (f in u = c.defaultProps, u) h[f] === void 0 && (h[f] = u[f]);
    return { $$typeof: t, type: c, key: b, ref: C, props: h, _owner: a.current };
  }
  return ke.Fragment = r, ke.jsx = s, ke.jsxs = s, ke;
}
var Fe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function qr() {
  return $t || ($t = 1, process.env.NODE_ENV !== "production" && function() {
    var e = nr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), E = Symbol.iterator, N = "@@iterator";
    function w(o) {
      if (o === null || typeof o != "object")
        return null;
      var p = E && o[E] || o[N];
      return typeof p == "function" ? p : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(o) {
      {
        for (var p = arguments.length, x = new Array(p > 1 ? p - 1 : 0), P = 1; P < p; P++)
          x[P - 1] = arguments[P];
        S("error", o, x);
      }
    }
    function S(o, p, x) {
      {
        var P = R.ReactDebugCurrentFrame, L = P.getStackAddendum();
        L !== "" && (p += "%s", x = x.concat([L]));
        var A = x.map(function(k) {
          return String(k);
        });
        A.unshift("Warning: " + p), Function.prototype.apply.call(console[o], console, A);
      }
    }
    var _ = !1, I = !1, ie = !1, fe = !1, se = !1, le;
    le = Symbol.for("react.module.reference");
    function ae(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === i || se || o === a || o === d || o === f || fe || o === C || _ || I || ie || typeof o == "object" && o !== null && (o.$$typeof === b || o.$$typeof === h || o.$$typeof === s || o.$$typeof === c || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === le || o.getModuleId !== void 0));
    }
    function he(o, p, x) {
      var P = o.displayName;
      if (P)
        return P;
      var L = p.displayName || p.name || "";
      return L !== "" ? x + "(" + L + ")" : x;
    }
    function ve(o) {
      return o.displayName || "Context";
    }
    function J(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            var p = o;
            return ve(p) + ".Consumer";
          case s:
            var x = o;
            return ve(x._context) + ".Provider";
          case u:
            return he(o, o.render, "ForwardRef");
          case h:
            var P = o.displayName || null;
            return P !== null ? P : J(o.type) || "Memo";
          case b: {
            var L = o, A = L._payload, k = L._init;
            try {
              return J(k(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, ce = 0, we, Ee, Ne, Ce, X, y, D;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function m() {
      {
        if (ce === 0) {
          we = console.log, Ee = console.info, Ne = console.warn, Ce = console.error, X = console.group, y = console.groupCollapsed, D = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: F,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        ce++;
      }
    }
    function j() {
      {
        if (ce--, ce === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, o, {
              value: we
            }),
            info: Z({}, o, {
              value: Ee
            }),
            warn: Z({}, o, {
              value: Ne
            }),
            error: Z({}, o, {
              value: Ce
            }),
            group: Z({}, o, {
              value: X
            }),
            groupCollapsed: Z({}, o, {
              value: y
            }),
            groupEnd: Z({}, o, {
              value: D
            })
          });
        }
        ce < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var T = R.ReactCurrentDispatcher, W;
    function q(o, p, x) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch (L) {
            var P = L.stack.trim().match(/\n( *(at )?)/);
            W = P && P[1] || "";
          }
        return `
` + W + o;
      }
    }
    var H = !1, Q;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new qe();
    }
    function je(o, p) {
      if (!o || H)
        return "";
      {
        var x = Q.get(o);
        if (x !== void 0)
          return x;
      }
      var P;
      H = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = T.current, T.current = null, m();
      try {
        if (p) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (z) {
              P = z;
            }
            Reflect.construct(o, [], k);
          } else {
            try {
              k.call();
            } catch (z) {
              P = z;
            }
            o.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            P = z;
          }
          o();
        }
      } catch (z) {
        if (z && P && typeof z.stack == "string") {
          for (var M = z.stack.split(`
`), G = P.stack.split(`
`), V = M.length - 1, B = G.length - 1; V >= 1 && B >= 0 && M[V] !== G[B]; )
            B--;
          for (; V >= 1 && B >= 0; V--, B--)
            if (M[V] !== G[B]) {
              if (V !== 1 || B !== 1)
                do
                  if (V--, B--, B < 0 || M[V] !== G[B]) {
                    var ee = `
` + M[V].replace(" at new ", " at ");
                    return o.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", o.displayName)), typeof o == "function" && Q.set(o, ee), ee;
                  }
                while (V >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        H = !1, T.current = A, j(), Error.prepareStackTrace = L;
      }
      var De = o ? o.displayName || o.name : "", ye = De ? q(De) : "";
      return typeof o == "function" && Q.set(o, ye), ye;
    }
    function at(o, p, x) {
      return je(o, !1);
    }
    function Er(o) {
      var p = o.prototype;
      return !!(p && p.isReactComponent);
    }
    function Ge(o, p, x) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return je(o, Er(o));
      if (typeof o == "string")
        return q(o);
      switch (o) {
        case d:
          return q("Suspense");
        case f:
          return q("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            return at(o.render);
          case h:
            return Ge(o.type, p, x);
          case b: {
            var P = o, L = P._payload, A = P._init;
            try {
              return Ge(A(L), p, x);
            } catch {
            }
          }
        }
      return "";
    }
    var _e = Object.prototype.hasOwnProperty, Rt = {}, Dt = R.ReactDebugCurrentFrame;
    function ze(o) {
      if (o) {
        var p = o._owner, x = Ge(o.type, o._source, p ? p.type : null);
        Dt.setExtraStackFrame(x);
      } else
        Dt.setExtraStackFrame(null);
    }
    function Nr(o, p, x, P, L) {
      {
        var A = Function.call.bind(_e);
        for (var k in o)
          if (A(o, k)) {
            var M = void 0;
            try {
              if (typeof o[k] != "function") {
                var G = Error((P || "React class") + ": " + x + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              M = o[k](p, k, P, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              M = V;
            }
            M && !(M instanceof Error) && (ze(L), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", x, k, typeof M), ze(null)), M instanceof Error && !(M.message in Rt) && (Rt[M.message] = !0, ze(L), v("Failed %s type: %s", x, M.message), ze(null));
          }
      }
    }
    var Cr = Array.isArray;
    function ot(o) {
      return Cr(o);
    }
    function jr(o) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, x = p && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return x;
      }
    }
    function Rr(o) {
      try {
        return Pt(o), !1;
      } catch {
        return !0;
      }
    }
    function Pt(o) {
      return "" + o;
    }
    function Ot(o) {
      if (Rr(o))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jr(o)), Pt(o);
    }
    var St = R.ReactCurrentOwner, Dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Tt, Mt;
    function Pr(o) {
      if (_e.call(o, "ref")) {
        var p = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Or(o) {
      if (_e.call(o, "key")) {
        var p = Object.getOwnPropertyDescriptor(o, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Sr(o, p) {
      typeof o.ref == "string" && St.current;
    }
    function Tr(o, p) {
      {
        var x = function() {
          Tt || (Tt = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        x.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Mr(o, p) {
      {
        var x = function() {
          Mt || (Mt = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        x.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var _r = function(o, p, x, P, L, A, k) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: p,
        ref: x,
        props: k,
        // Record the component responsible for creating this element.
        _owner: A
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function kr(o, p, x, P, L) {
      {
        var A, k = {}, M = null, G = null;
        x !== void 0 && (Ot(x), M = "" + x), Or(p) && (Ot(p.key), M = "" + p.key), Pr(p) && (G = p.ref, Sr(p, L));
        for (A in p)
          _e.call(p, A) && !Dr.hasOwnProperty(A) && (k[A] = p[A]);
        if (o && o.defaultProps) {
          var V = o.defaultProps;
          for (A in V)
            k[A] === void 0 && (k[A] = V[A]);
        }
        if (M || G) {
          var B = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          M && Tr(k, B), G && Mr(k, B);
        }
        return _r(o, M, G, L, P, St.current, k);
      }
    }
    var it = R.ReactCurrentOwner, _t = R.ReactDebugCurrentFrame;
    function Re(o) {
      if (o) {
        var p = o._owner, x = Ge(o.type, o._source, p ? p.type : null);
        _t.setExtraStackFrame(x);
      } else
        _t.setExtraStackFrame(null);
    }
    var st;
    st = !1;
    function lt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function kt() {
      {
        if (it.current) {
          var o = J(it.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Fr(o) {
      return "";
    }
    var Ft = {};
    function Lr(o) {
      {
        var p = kt();
        if (!p) {
          var x = typeof o == "string" ? o : o.displayName || o.name;
          x && (p = `

Check the top-level render call using <` + x + ">.");
        }
        return p;
      }
    }
    function Lt(o, p) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var x = Lr(p);
        if (Ft[x])
          return;
        Ft[x] = !0;
        var P = "";
        o && o._owner && o._owner !== it.current && (P = " It was passed a child from " + J(o._owner.type) + "."), Re(o), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, P), Re(null);
      }
    }
    function Wt(o, p) {
      {
        if (typeof o != "object")
          return;
        if (ot(o))
          for (var x = 0; x < o.length; x++) {
            var P = o[x];
            lt(P) && Lt(P, p);
          }
        else if (lt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var L = w(o);
          if (typeof L == "function" && L !== o.entries)
            for (var A = L.call(o), k; !(k = A.next()).done; )
              lt(k.value) && Lt(k.value, p);
        }
      }
    }
    function Wr(o) {
      {
        var p = o.type;
        if (p == null || typeof p == "string")
          return;
        var x;
        if (typeof p == "function")
          x = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === h))
          x = p.propTypes;
        else
          return;
        if (x) {
          var P = J(p);
          Nr(x, o.props, "prop", P, o);
        } else if (p.PropTypes !== void 0 && !st) {
          st = !0;
          var L = J(p);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yr(o) {
      {
        for (var p = Object.keys(o.props), x = 0; x < p.length; x++) {
          var P = p[x];
          if (P !== "children" && P !== "key") {
            Re(o), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), Re(null);
            break;
          }
        }
        o.ref !== null && (Re(o), v("Invalid attribute `ref` supplied to `React.Fragment`."), Re(null));
      }
    }
    var Yt = {};
    function At(o, p, x, P, L, A) {
      {
        var k = ae(o);
        if (!k) {
          var M = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = Fr();
          G ? M += G : M += kt();
          var V;
          o === null ? V = "null" : ot(o) ? V = "array" : o !== void 0 && o.$$typeof === t ? (V = "<" + (J(o.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : V = typeof o, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, M);
        }
        var B = kr(o, p, x, L, A);
        if (B == null)
          return B;
        if (k) {
          var ee = p.children;
          if (ee !== void 0)
            if (P)
              if (ot(ee)) {
                for (var De = 0; De < ee.length; De++)
                  Wt(ee[De], o);
                Object.freeze && Object.freeze(ee);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wt(ee, o);
        }
        if (_e.call(p, "key")) {
          var ye = J(o), z = Object.keys(p).filter(function(Ur) {
            return Ur !== "key";
          }), ct = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Yt[ye + ct]) {
            var Br = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ct, ye, Br, ye), Yt[ye + ct] = !0;
          }
        }
        return o === n ? Yr(B) : Wr(B), B;
      }
    }
    function Ar(o, p, x) {
      return At(o, p, x, !0);
    }
    function Vr(o, p, x) {
      return At(o, p, x, !1);
    }
    var $r = Vr, Hr = Ar;
    Fe.Fragment = n, Fe.jsx = $r, Fe.jsxs = Hr;
  }()), Fe;
}
process.env.NODE_ENV === "production" ? mt.exports = Ir() : mt.exports = qr();
var l = mt.exports;
function U(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function oe(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function yt(e, t) {
  const r = U(e);
  return isNaN(t) ? oe(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Gr(e, t) {
  const r = U(e);
  if (isNaN(t)) return oe(e, NaN);
  const n = r.getDate(), a = oe(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const i = a.getDate();
  return n >= i ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    n
  ), r);
}
const or = 6048e5, zr = 864e5;
let Jr = {};
function tt() {
  return Jr;
}
function ue(e, t) {
  var c, u, d, f;
  const r = tt(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((u = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((f = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, a = U(e), i = a.getDay(), s = (i < n ? 7 : 0) + i - n;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function Ke(e) {
  return ue(e, { weekStartsOn: 1 });
}
function ir(e) {
  const t = U(e), r = t.getFullYear(), n = oe(e, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const a = Ke(n), i = oe(e, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const s = Ke(i);
  return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= s.getTime() ? r : r - 1;
}
function Ht(e) {
  const t = U(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Bt(e) {
  const t = U(e), r = new Date(
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
function Xr(e, t) {
  const r = Ht(e), n = Ht(t), a = +r - Bt(r), i = +n - Bt(n);
  return Math.round((a - i) / zr);
}
function Qr(e) {
  const t = ir(e), r = oe(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), Ke(r);
}
function Kr(e, t) {
  const r = t * 7;
  return yt(e, r);
}
function Zr(e, t) {
  return Gr(e, t * 12);
}
function en(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function tn(e) {
  if (!en(e) && typeof e != "number")
    return !1;
  const t = U(e);
  return !isNaN(Number(t));
}
function sr(e, t) {
  const r = U(e.start), n = U(e.end);
  let a = +r > +n;
  const i = a ? +r : +n, s = a ? n : r;
  s.setHours(0, 0, 0, 0);
  let c = 1;
  const u = [];
  for (; +s <= i; )
    u.push(U(s)), s.setDate(s.getDate() + c), s.setHours(0, 0, 0, 0);
  return a ? u.reverse() : u;
}
function lr(e, t) {
  const r = U(e.start), n = U(e.end);
  let a = +r > +n;
  const i = ue(a ? n : r, t), s = ue(a ? r : n, t);
  i.setHours(15), s.setHours(15);
  const c = +s.getTime();
  let u = i, d = 1;
  const f = [];
  for (; +u <= c; )
    u.setHours(0), f.push(U(u)), u = Kr(u, d), u.setHours(15);
  return a ? f.reverse() : f;
}
function rn(e) {
  const t = U(e), r = oe(e, 0);
  return r.setFullYear(t.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const nn = {
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
}, an = (e, t, r) => {
  let n;
  const a = nn[e];
  return typeof a == "string" ? n = a : t === 1 ? n = a.one : n = a.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function ut(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const on = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, sn = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ln = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, cn = {
  date: ut({
    formats: on,
    defaultWidth: "full"
  }),
  time: ut({
    formats: sn,
    defaultWidth: "full"
  }),
  dateTime: ut({
    formats: ln,
    defaultWidth: "full"
  })
}, un = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, dn = (e, t, r, n) => un[e];
function Le(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let a;
    if (n === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, c = r != null && r.width ? String(r.width) : s;
      a = e.formattingValues[c] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, c = r != null && r.width ? String(r.width) : e.defaultWidth;
      a = e.values[c] || e.values[s];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[i];
  };
}
const fn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, hn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, mn = {
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
}, pn = {
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
}, gn = {
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
}, vn = {
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
}, bn = {
  ordinalNumber: yn,
  era: Le({
    values: fn,
    defaultWidth: "wide"
  }),
  quarter: Le({
    values: hn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Le({
    values: mn,
    defaultWidth: "wide"
  }),
  day: Le({
    values: pn,
    defaultWidth: "wide"
  }),
  dayPeriod: Le({
    values: gn,
    defaultWidth: "wide",
    formattingValues: vn,
    defaultFormattingWidth: "wide"
  })
};
function We(e) {
  return (t, r = {}) => {
    const n = r.width, a = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    const s = i[0], c = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(c) ? wn(c, (h) => h.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      xn(c, (h) => h.test(s))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(u) : u, d = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(d)
    ) : d;
    const f = t.slice(s.length);
    return { value: d, rest: f };
  };
}
function xn(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function wn(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function En(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const a = n[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    s = r.valueCallback ? r.valueCallback(s) : s;
    const c = t.slice(a.length);
    return { value: s, rest: c };
  };
}
const Nn = /^(\d+)(th|st|nd|rd)?/i, Cn = /\d+/i, jn = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Rn = {
  any: [/^b/i, /^(a|c)/i]
}, Dn = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Pn = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, On = {
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
}, Tn = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Mn = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, _n = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, kn = {
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
}, Fn = {
  ordinalNumber: En({
    matchPattern: Nn,
    parsePattern: Cn,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: We({
    matchPatterns: jn,
    defaultMatchWidth: "wide",
    parsePatterns: Rn,
    defaultParseWidth: "any"
  }),
  quarter: We({
    matchPatterns: Dn,
    defaultMatchWidth: "wide",
    parsePatterns: Pn,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: We({
    matchPatterns: On,
    defaultMatchWidth: "wide",
    parsePatterns: Sn,
    defaultParseWidth: "any"
  }),
  day: We({
    matchPatterns: Tn,
    defaultMatchWidth: "wide",
    parsePatterns: Mn,
    defaultParseWidth: "any"
  }),
  dayPeriod: We({
    matchPatterns: _n,
    defaultMatchWidth: "any",
    parsePatterns: kn,
    defaultParseWidth: "any"
  })
}, Ln = {
  code: "en-US",
  formatDistance: an,
  formatLong: cn,
  formatRelative: dn,
  localize: bn,
  match: Fn,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Wn(e) {
  const t = U(e);
  return Xr(t, rn(t)) + 1;
}
function Yn(e) {
  const t = U(e), r = +Ke(t) - +Qr(t);
  return Math.round(r / or) + 1;
}
function cr(e, t) {
  var f, h, b, C;
  const r = U(e), n = r.getFullYear(), a = tt(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((C = (b = a.locale) == null ? void 0 : b.options) == null ? void 0 : C.firstWeekContainsDate) ?? 1, s = oe(e, 0);
  s.setFullYear(n + 1, 0, i), s.setHours(0, 0, 0, 0);
  const c = ue(s, t), u = oe(e, 0);
  u.setFullYear(n, 0, i), u.setHours(0, 0, 0, 0);
  const d = ue(u, t);
  return r.getTime() >= c.getTime() ? n + 1 : r.getTime() >= d.getTime() ? n : n - 1;
}
function An(e, t) {
  var c, u, d, f;
  const r = tt(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : u.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((f = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, a = cr(e, t), i = oe(e, 0);
  return i.setFullYear(a, 0, n), i.setHours(0, 0, 0, 0), ue(i, t);
}
function Vn(e, t) {
  const r = U(e), n = +ue(r, t) - +An(r, t);
  return Math.round(n / or) + 1;
}
function Y(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const me = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return Y(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : Y(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Y(e.getDate(), t.length);
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
    return Y(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Y(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Y(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Y(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), a = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return Y(a, t.length);
  }
}, Pe = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ut = {
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
      const n = e.getFullYear(), a = n > 0 ? n : 1 - n;
      return r.ordinalNumber(a, { unit: "year" });
    }
    return me.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const a = cr(e, n), i = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const s = i % 100;
      return Y(s, 2);
    }
    return t === "Yo" ? r.ordinalNumber(i, { unit: "year" }) : Y(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = ir(e);
    return Y(r, t.length);
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
    return Y(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return Y(n, 2);
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
        return Y(n, 2);
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
        return me.M(e, t);
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
        return Y(n + 1, 2);
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
    const a = Vn(e, n);
    return t === "wo" ? r.ordinalNumber(a, { unit: "week" }) : Y(a, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Yn(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : Y(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : me.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = Wn(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : Y(n, t.length);
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
    const a = e.getDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(i);
      case "ee":
        return Y(i, 2);
      case "eo":
        return r.ordinalNumber(i, { unit: "day" });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const a = e.getDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return Y(i, t.length);
      case "co":
        return r.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), a = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return Y(a, t.length);
      case "io":
        return r.ordinalNumber(a, { unit: "day" });
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
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let a;
    switch (n === 12 ? a = Pe.noon : n === 0 ? a = Pe.midnight : a = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let a;
    switch (n >= 17 ? a = Pe.evening : n >= 12 ? a = Pe.afternoon : n >= 4 ? a = Pe.morning : a = Pe.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
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
    return me.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : me.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : Y(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : Y(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : me.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : me.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return me.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return qt(n);
      case "XXXX":
      case "XX":
        return be(n);
      case "XXXXX":
      case "XXX":
      default:
        return be(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return qt(n);
      case "xxxx":
      case "xx":
        return be(n);
      case "xxxxx":
      case "xxx":
      default:
        return be(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + It(n, ":");
      case "OOOO":
      default:
        return "GMT" + be(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + It(n, ":");
      case "zzzz":
      default:
        return "GMT" + be(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(e.getTime() / 1e3);
    return Y(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    const n = e.getTime();
    return Y(n, t.length);
  }
};
function It(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = Math.trunc(n / 60), i = n % 60;
  return i === 0 ? r + String(a) : r + String(a) + t + Y(i, 2);
}
function qt(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Y(Math.abs(e) / 60, 2) : be(e, t);
}
function be(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = Y(Math.trunc(n / 60), 2), i = Y(n % 60, 2);
  return r + a + t + i;
}
const Gt = (e, t) => {
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
}, ur = (e, t) => {
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
}, $n = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], a = r[2];
  if (!a)
    return Gt(e, t);
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
  return i.replace("{{date}}", Gt(n, t)).replace("{{time}}", ur(a, t));
}, Hn = {
  p: ur,
  P: $n
}, Bn = /^D+$/, Un = /^Y+$/, In = ["D", "DD", "YY", "YYYY"];
function qn(e) {
  return Bn.test(e);
}
function Gn(e) {
  return Un.test(e);
}
function zn(e, t, r) {
  const n = Jn(e, t, r);
  if (console.warn(n), In.includes(e)) throw new RangeError(n);
}
function Jn(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Xn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Qn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Kn = /^'([^]*?)'?$/, Zn = /''/g, ea = /[a-zA-Z]/;
function K(e, t, r) {
  var f, h, b, C;
  const n = tt(), a = n.locale ?? Ln, i = n.firstWeekContainsDate ?? ((h = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = n.weekStartsOn ?? ((C = (b = n.locale) == null ? void 0 : b.options) == null ? void 0 : C.weekStartsOn) ?? 0, c = U(e);
  if (!tn(c))
    throw new RangeError("Invalid time value");
  let u = t.match(Qn).map((E) => {
    const N = E[0];
    if (N === "p" || N === "P") {
      const w = Hn[N];
      return w(E, a.formatLong);
    }
    return E;
  }).join("").match(Xn).map((E) => {
    if (E === "''")
      return { isToken: !1, value: "'" };
    const N = E[0];
    if (N === "'")
      return { isToken: !1, value: ta(E) };
    if (Ut[N])
      return { isToken: !0, value: E };
    if (N.match(ea))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + N + "`"
      );
    return { isToken: !1, value: E };
  });
  a.localize.preprocessor && (u = a.localize.preprocessor(c, u));
  const d = {
    firstWeekContainsDate: i,
    weekStartsOn: s,
    locale: a
  };
  return u.map((E) => {
    if (!E.isToken) return E.value;
    const N = E.value;
    (Gn(N) || qn(N)) && zn(N, t, String(e));
    const w = Ut[N[0]];
    return w(c, N, a.localize, d);
  }).join("");
}
function ta(e) {
  const t = e.match(Kn);
  return t ? t[1].replace(Zn, "'") : e;
}
function Ze(e, t) {
  return Zr(e, -1);
}
const Oe = {
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
}, dr = async (e, t, r, n) => {
  var c, u, d, f, h;
  const a = K(r, "yyyy-MM-dd'T'00:00:00'Z'"), i = K(n, "yyyy-MM-dd'T'23:59:59'Z'"), s = `
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
        query: s,
        variables: {
          username: e,
          from: a,
          to: i
        }
      })
    });
    if (!b.ok)
      throw new Error(`HTTP error! status: ${b.status}`);
    const C = await b.json();
    if (C.errors)
      throw console.error("GitHub API Errors:", C.errors), new Error(((c = C.errors[0]) == null ? void 0 : c.message) || "GitHub API Error");
    if (!((h = (f = (d = (u = C.data) == null ? void 0 : u.user) == null ? void 0 : d.contributionsCollection) == null ? void 0 : f.contributionCalendar) != null && h.weeks))
      return console.error("Invalid response structure:", C), [];
    const E = [];
    return C.data.user.contributionsCollection.contributionCalendar.weeks.forEach(
      (N) => {
        N.contributionDays.forEach((w) => {
          E.push({
            date: K(new Date(w.date), "yyyy-MM-dd"),
            count: w.contributionCount
          });
        });
      }
    ), E;
  } catch (b) {
    throw console.error("Error fetching GitHub contributions:", b), new Error(
      `Failed to fetch GitHub contributions: ${b instanceof Error ? b.message : "Unknown error"}`
    );
  }
}, Do = async (e, t, r) => {
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
}, Po = ({
  username: e,
  token: t,
  onLogout: r,
  showHeader: n = !0,
  className: a = "",
  defaultTheme: i = "galaxy"
}) => {
  const [s, c] = $([]), [u, d] = $(!0), [f, h] = $({
    startDate: Ze(/* @__PURE__ */ new Date()),
    endDate: /* @__PURE__ */ new Date()
  }), [b, C] = $("lastYear"), [E, N] = $(i), [w, R] = $(null), [v, S] = $(null), [_, I] = $(null), ie = () => {
    r && r();
  };
  ar(() => {
    d(!0), S(null), I(null), R(null), setTimeout(() => {
      dr(
        e,
        t,
        f.startDate,
        f.endDate
      ).then((m) => {
        c(m), d(!1);
      }).catch((m) => {
        console.error("Failed to fetch contributions:", m), c([]), d(!1);
      });
    }, 1e3);
  }, [f, e, t]);
  const fe = (m) => {
    const j = Oe[E];
    return m === 0 ? j.noContributions : m <= 2 ? j.low : m <= 4 ? j.moderate : m <= 6 ? j.high : j.veryHigh;
  }, se = (m) => m === 0 ? "noContributions" : m <= 2 ? "low" : m <= 4 ? "moderate" : m <= 6 ? "high" : "veryHigh", le = () => s.reduce((m, j) => m + j.count, 0), ae = () => {
    const m = ve();
    if (m.length === 0) return [];
    const j = /* @__PURE__ */ new Map();
    return m.forEach((T, W) => {
      J(T).forEach((H) => {
        if (H.getDate() === 1) {
          const Q = H.getMonth();
          j.has(Q) || j.set(Q, {
            label: K(H, "MMM"),
            position: W
          });
        }
      });
    }), Array.from(j.values()).sort(
      (T, W) => T.position - W.position
    );
  }, he = (m) => {
    var T;
    const j = K(m, "yyyy-MM-dd");
    return ((T = s.find((W) => W.date === j)) == null ? void 0 : T.count) || 0;
  }, ve = () => {
    const m = f.startDate, j = f.endDate;
    return lr({ start: m, end: j });
  }, J = (m) => sr({
    start: m,
    end: yt(m, 6)
  }), Z = (m, j) => {
    h({ startDate: m, endDate: j });
  }, ce = (m) => {
    let j = null;
    for (let T = 0; T < m.length; T++)
      m[T].count > 0 && (j = m[T].date);
    return we(j);
  }, we = (m) => {
    if (!m) return "No contributions found";
    const j = new Date(m), T = [
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
    ], W = j.getDate(), q = T[j.getMonth()], H = j.getFullYear(), Q = Ee(W);
    return `${q} ${W}${Q}, ${H}`;
  }, Ee = (m) => {
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
  }, Ne = (m) => {
    (!_ || _ === m) && R(m);
  }, Ce = () => {
    _ || R(null);
  }, X = (m) => {
    _ === m ? (I(null), R(null)) : (I(m), R(m)), S(null);
  }, y = (m) => {
    S(v === m ? null : m), I(null), R(null);
  };
  if (u)
    return /* @__PURE__ */ l.jsx("div", { className: `bg-white border border-gray-200 rounded-lg shadow-sm p-6 w-full animate-pulse ${a}`, children: /* @__PURE__ */ l.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ l.jsx("div", { className: "h-4 bg-gray-200 rounded" }),
      /* @__PURE__ */ l.jsx("div", { className: "grid grid-flow-col gap-1 overflow-x-auto", children: Array.from({ length: 53 }).map((m, j) => /* @__PURE__ */ l.jsx("div", { className: "grid grid-rows-7 gap-1", children: Array.from({ length: 7 }).map((T, W) => /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "w-4 h-4 bg-gray-200 rounded-sm"
        },
        `${j}-${W}`
      )) }, j)) })
    ] }) });
  const D = ae(), F = ve();
  return /* @__PURE__ */ l.jsxs("div", { className: a, children: [
    n && /* @__PURE__ */ l.jsx("div", { className: "bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-6", children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ l.jsx("div", { className: "w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ l.jsx("svg", { className: "w-4 h-4 text-purple-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" }) }) }),
        /* @__PURE__ */ l.jsxs("div", { children: [
          /* @__PURE__ */ l.jsx("span", { className: "text-sm text-gray-500", children: "GitHub User" }),
          /* @__PURE__ */ l.jsx("div", { className: "font-semibold text-gray-900", children: e })
        ] })
      ] }),
      r && /* @__PURE__ */ l.jsx(
        "button",
        {
          onClick: ie,
          className: "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200",
          children: "Logout"
        }
      )
    ] }) }),
    /* @__PURE__ */ l.jsx("div", { className: "bg-white border border-gray-200 rounded-lg shadow-sm p-6 animate-fadeIn max-w-full overflow-hidden", children: /* @__PURE__ */ l.jsxs("div", { className: "space-y-6 px-4", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ l.jsx("svg", { className: "w-5 h-5 text-purple-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", clipRule: "evenodd" }) }),
          /* @__PURE__ */ l.jsx("h2", { className: "text-lg font-semibold hidden sm:inline", children: "Contribution Calendar" })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `px-3 py-1 text-sm rounded transition-colors ${b === "lastYear" ? "bg-purple-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`,
              onClick: () => {
                const m = /* @__PURE__ */ new Date(), j = Ze(m);
                Z(j, m), C("lastYear");
              },
              children: "Last Year"
            }
          ),
          [2025, 2024, 2023, 2022].map((m) => /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `px-3 py-1 text-sm rounded transition-colors ${b === m.toString() ? "bg-purple-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`,
              onClick: () => {
                Z(
                  new Date(m, 0, 1),
                  new Date(m, 11, 31)
                ), C(m.toString());
              },
              children: m
            },
            m
          ))
        ] }),
        /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx(
          "select",
          {
            value: E,
            onChange: (m) => N(m.target.value),
            className: "border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
            children: Object.keys(Oe).map((m) => /* @__PURE__ */ l.jsx("option", { value: m, children: m.charAt(0).toUpperCase() + m.slice(1) }, m))
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "text-center py-2", children: [
        /* @__PURE__ */ l.jsx("span", { className: "text-2xl font-bold text-gray-900", children: le() }),
        /* @__PURE__ */ l.jsxs("span", { className: "text-gray-600 ml-2", children: [
          "contributions in ",
          b
        ] })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-[1000px] mx-auto", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "w-16", children: [
          /* @__PURE__ */ l.jsx("div", { className: "h-5" }),
          /* @__PURE__ */ l.jsxs("div", { className: "grid grid-rows-7 gap-1 text-xs text-gray-500", children: [
            /* @__PURE__ */ l.jsx("div", { children: "SUN" }),
            /* @__PURE__ */ l.jsx("div", { className: "invisible", children: "MON" }),
            /* @__PURE__ */ l.jsx("div", { children: "TUE" }),
            /* @__PURE__ */ l.jsx("div", { className: "invisible", children: "WED" }),
            /* @__PURE__ */ l.jsx("div", { children: "THU" }),
            /* @__PURE__ */ l.jsx("div", { className: "invisible", children: "FRI" }),
            /* @__PURE__ */ l.jsx("div", { children: "SAT" })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ l.jsx("div", { className: "h-5 relative", children: D.map((m, j) => /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute text-xs text-gray-500",
              style: {
                left: `${m.position / (F.length - 1) * 100}%`
              },
              children: m.label
            },
            j
          )) }),
          /* @__PURE__ */ l.jsx("div", { className: "grid grid-flow-col gap-1 relative", style: { zIndex: 1 }, children: F.map((m, j) => /* @__PURE__ */ l.jsx("div", { className: "grid grid-rows-7 gap-1", children: J(m).map((T, W) => {
            const q = K(T, "yyyy-MM-dd"), H = he(T), Q = se(H), qe = v === Q, je = _ === q, at = v && !qe || _ && !je;
            return /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: "relative cursor-pointer group",
                style: { zIndex: w === q ? 9999 : 1 },
                onMouseEnter: () => Ne(q),
                onMouseLeave: Ce,
                onClick: () => X(q),
                title: `${K(T, "MMMM d, yyyy")} - ${H} contribution${H !== 1 ? "s" : ""}`,
                children: [
                  /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      className: "w-4 h-4 rounded-sm transition-all duration-200 hover:ring-1 hover:ring-gray-400",
                      style: {
                        backgroundColor: fe(H),
                        opacity: at ? "0.3" : "1",
                        transform: qe || je ? "scale(1.1)" : "scale(1)",
                        border: je ? "2px solid black" : "none"
                      }
                    }
                  ),
                  w === q && /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: "absolute px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-xl pointer-events-none whitespace-nowrap font-medium",
                      style: {
                        zIndex: 9999,
                        bottom: W < 2 ? "auto" : "100%",
                        top: W < 2 ? "100%" : "auto",
                        marginBottom: W >= 2 ? "8px" : "0",
                        marginTop: W < 2 ? "8px" : "0",
                        left: j < 5 ? "0" : j > F.length - 6 ? "auto" : "50%",
                        right: j > F.length - 6 ? "0" : "auto",
                        transform: j >= 5 && j <= F.length - 6 ? "translateX(-50%)" : "none",
                        maxWidth: "200px"
                      },
                      children: [
                        /* @__PURE__ */ l.jsxs("div", { className: "text-center", children: [
                          /* @__PURE__ */ l.jsx("div", { className: "font-semibold", children: K(T, "MMM d, yyyy") }),
                          /* @__PURE__ */ l.jsxs("div", { className: "text-gray-300 text-xs", children: [
                            H,
                            " contribution",
                            H !== 1 ? "s" : ""
                          ] })
                        ] }),
                        /* @__PURE__ */ l.jsx(
                          "div",
                          {
                            className: "absolute w-0 h-0",
                            style: {
                              [W < 2 ? "top" : "bottom"]: "100%",
                              left: j < 5 ? "16px" : j > F.length - 6 ? "auto" : "50%",
                              right: j > F.length - 6 ? "16px" : "auto",
                              transform: j >= 5 && j <= F.length - 6 ? "translateX(-50%)" : "none",
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
              `${j}-${W}`
            );
          }) }, j)) })
        ] })
      ] }) }),
      /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "text-center text-sm text-gray-600", children: [
          "Last contributed on: ",
          ce(s)
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-end space-x-2 text-sm", children: [
          /* @__PURE__ */ l.jsx("span", { className: "text-gray-500", children: "Less" }),
          /* @__PURE__ */ l.jsx("div", { className: "flex space-x-1", children: ["noContributions", "low", "moderate", "high", "veryHigh"].map(
            (m) => /* @__PURE__ */ l.jsx(
              "div",
              {
                className: "w-4 h-4 rounded-sm cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-gray-400",
                style: {
                  backgroundColor: Oe[E][m],
                  transform: v === m ? "scale(1.1)" : "scale(1)",
                  opacity: v && v !== m ? "0.3" : "1",
                  boxShadow: v === m ? "0 0 0 2px rgba(0,0,0,0.1)" : "none"
                },
                onClick: () => y(m)
              },
              m
            )
          ) }),
          /* @__PURE__ */ l.jsx("span", { className: "text-gray-500", children: "More" })
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
function Ae() {
  return Ae = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ae.apply(this, arguments);
}
var pe;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(pe || (pe = {}));
const zt = "popstate";
function ra(e) {
  e === void 0 && (e = {});
  function t(n, a) {
    let {
      pathname: i,
      search: s,
      hash: c
    } = n.location;
    return pt(
      "",
      {
        pathname: i,
        search: s,
        hash: c
      },
      // state defaults to `null` because `window.history.state` does
      a.state && a.state.usr || null,
      a.state && a.state.key || "default"
    );
  }
  function r(n, a) {
    return typeof a == "string" ? a : Ve(a);
  }
  return aa(t, r, null, e);
}
function O(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function re(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function na() {
  return Math.random().toString(36).substr(2, 8);
}
function Jt(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function pt(e, t, r, n) {
  return r === void 0 && (r = null), Ae({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Te(t) : t, {
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || n || na()
  });
}
function Ve(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: n = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function Te(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
function aa(e, t, r, n) {
  n === void 0 && (n = {});
  let {
    window: a = document.defaultView,
    v5Compat: i = !1
  } = n, s = a.history, c = pe.Pop, u = null, d = f();
  d == null && (d = 0, s.replaceState(Ae({}, s.state, {
    idx: d
  }), ""));
  function f() {
    return (s.state || {
      idx: null
    }).idx;
  }
  function h() {
    c = pe.Pop;
    let w = f(), R = w == null ? null : w - d;
    d = w, u && u({
      action: c,
      location: N.location,
      delta: R
    });
  }
  function b(w, R) {
    c = pe.Push;
    let v = pt(N.location, w, R);
    d = f() + 1;
    let S = Jt(v, d), _ = N.createHref(v);
    try {
      s.pushState(S, "", _);
    } catch (I) {
      if (I instanceof DOMException && I.name === "DataCloneError")
        throw I;
      a.location.assign(_);
    }
    i && u && u({
      action: c,
      location: N.location,
      delta: 1
    });
  }
  function C(w, R) {
    c = pe.Replace;
    let v = pt(N.location, w, R);
    d = f();
    let S = Jt(v, d), _ = N.createHref(v);
    s.replaceState(S, "", _), i && u && u({
      action: c,
      location: N.location,
      delta: 0
    });
  }
  function E(w) {
    let R = a.location.origin !== "null" ? a.location.origin : a.location.href, v = typeof w == "string" ? w : Ve(w);
    return v = v.replace(/ $/, "%20"), O(R, "No window.location.(origin|href) available to create URL for href: " + v), new URL(v, R);
  }
  let N = {
    get action() {
      return c;
    },
    get location() {
      return e(a, s);
    },
    listen(w) {
      if (u)
        throw new Error("A history only accepts one active listener");
      return a.addEventListener(zt, h), u = w, () => {
        a.removeEventListener(zt, h), u = null;
      };
    },
    createHref(w) {
      return t(a, w);
    },
    createURL: E,
    encodeLocation(w) {
      let R = E(w);
      return {
        pathname: R.pathname,
        search: R.search,
        hash: R.hash
      };
    },
    push: b,
    replace: C,
    go(w) {
      return s.go(w);
    }
  };
  return N;
}
var Xt;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Xt || (Xt = {}));
function oa(e, t, r) {
  return r === void 0 && (r = "/"), ia(e, t, r);
}
function ia(e, t, r, n) {
  let a = typeof t == "string" ? Te(t) : t, i = ge(a.pathname || "/", r);
  if (i == null)
    return null;
  let s = fr(e);
  sa(s);
  let c = null;
  for (let u = 0; c == null && u < s.length; ++u) {
    let d = ya(i);
    c = ga(s[u], d);
  }
  return c;
}
function fr(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let a = (i, s, c) => {
    let u = {
      relativePath: c === void 0 ? i.path || "" : c,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i
    };
    u.relativePath.startsWith("/") && (O(u.relativePath.startsWith(n), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(n.length));
    let d = de([n, u.relativePath]), f = r.concat(u);
    i.children && i.children.length > 0 && (O(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + d + '".')
    ), fr(i.children, t, f, d)), !(i.path == null && !i.index) && t.push({
      path: d,
      score: ma(d, i.index),
      routesMeta: f
    });
  };
  return e.forEach((i, s) => {
    var c;
    if (i.path === "" || !((c = i.path) != null && c.includes("?")))
      a(i, s);
    else
      for (let u of hr(i.path))
        a(i, s, u);
  }), t;
}
function hr(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, a = r.endsWith("?"), i = r.replace(/\?$/, "");
  if (n.length === 0)
    return a ? [i, ""] : [i];
  let s = hr(n.join("/")), c = [];
  return c.push(...s.map((u) => u === "" ? i : [i, u].join("/"))), a && c.push(...s), c.map((u) => e.startsWith("/") && u === "" ? "/" : u);
}
function sa(e) {
  e.sort((t, r) => t.score !== r.score ? r.score - t.score : pa(t.routesMeta.map((n) => n.childrenIndex), r.routesMeta.map((n) => n.childrenIndex)));
}
const la = /^:[\w-]+$/, ca = 3, ua = 2, da = 1, fa = 10, ha = -2, Qt = (e) => e === "*";
function ma(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(Qt) && (n += ha), t && (n += ua), r.filter((a) => !Qt(a)).reduce((a, i) => a + (la.test(i) ? ca : i === "" ? da : fa), n);
}
function pa(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a]) ? (
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
function ga(e, t, r) {
  let {
    routesMeta: n
  } = e, a = {}, i = "/", s = [];
  for (let c = 0; c < n.length; ++c) {
    let u = n[c], d = c === n.length - 1, f = i === "/" ? t : t.slice(i.length) || "/", h = gt({
      path: u.relativePath,
      caseSensitive: u.caseSensitive,
      end: d
    }, f), b = u.route;
    if (!h)
      return null;
    Object.assign(a, h.params), s.push({
      // TODO: Can this as be avoided?
      params: a,
      pathname: de([i, h.pathname]),
      pathnameBase: Ea(de([i, h.pathnameBase])),
      route: b
    }), h.pathnameBase !== "/" && (i = de([i, h.pathnameBase]));
  }
  return s;
}
function gt(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, n] = va(e.path, e.caseSensitive, e.end), a = t.match(r);
  if (!a) return null;
  let i = a[0], s = i.replace(/(.)\/+$/, "$1"), c = a.slice(1);
  return {
    params: n.reduce((d, f, h) => {
      let {
        paramName: b,
        isOptional: C
      } = f;
      if (b === "*") {
        let N = c[h] || "";
        s = i.slice(0, i.length - N.length).replace(/(.)\/+$/, "$1");
      }
      const E = c[h];
      return C && !E ? d[b] = void 0 : d[b] = (E || "").replace(/%2F/g, "/"), d;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e
  };
}
function va(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), re(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, c, u) => (n.push({
    paramName: c,
    isOptional: u != null
  }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push({
    paramName: "*"
  }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n];
}
function ya(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return re(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function ge(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function ba(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: a = ""
  } = typeof e == "string" ? Te(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : xa(r, t) : t,
    search: Na(n),
    hash: Ca(a)
  };
}
function xa(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
  }), r.length > 1 ? r.join("/") : "/";
}
function dt(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function wa(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function bt(e, t) {
  let r = wa(e);
  return t ? r.map((n, a) => a === r.length - 1 ? n.pathname : n.pathnameBase) : r.map((n) => n.pathnameBase);
}
function xt(e, t, r, n) {
  n === void 0 && (n = !1);
  let a;
  typeof e == "string" ? a = Te(e) : (a = Ae({}, e), O(!a.pathname || !a.pathname.includes("?"), dt("?", "pathname", "search", a)), O(!a.pathname || !a.pathname.includes("#"), dt("#", "pathname", "hash", a)), O(!a.search || !a.search.includes("#"), dt("#", "search", "hash", a)));
  let i = e === "" || a.pathname === "", s = i ? "/" : a.pathname, c;
  if (s == null)
    c = r;
  else {
    let h = t.length - 1;
    if (!n && s.startsWith("..")) {
      let b = s.split("/");
      for (; b[0] === ".."; )
        b.shift(), h -= 1;
      a.pathname = b.join("/");
    }
    c = h >= 0 ? t[h] : "/";
  }
  let u = ba(a, c), d = s && s !== "/" && s.endsWith("/"), f = (i || s === ".") && r.endsWith("/");
  return !u.pathname.endsWith("/") && (d || f) && (u.pathname += "/"), u;
}
const de = (e) => e.join("/").replace(/\/\/+/g, "/"), Ea = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Na = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Ca = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function ja(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const mr = ["post", "put", "patch", "delete"];
new Set(mr);
const Ra = ["get", ...mr];
new Set(Ra);
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
function $e() {
  return $e = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $e.apply(this, arguments);
}
const Be = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (Be.displayName = "DataRouter");
const wt = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (wt.displayName = "DataRouterState");
const Da = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (Da.displayName = "Await");
const te = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (te.displayName = "Navigation");
const Ue = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (Ue.displayName = "Location");
const ne = /* @__PURE__ */ g.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (ne.displayName = "Route");
const Et = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (Et.displayName = "RouteError");
function Pa(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t;
  Me() || (process.env.NODE_ENV !== "production" ? O(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : O(!1));
  let {
    basename: n,
    navigator: a
  } = g.useContext(te), {
    hash: i,
    pathname: s,
    search: c
  } = Ie(e, {
    relative: r
  }), u = s;
  return n !== "/" && (u = s === "/" ? n : de([n, s])), a.createHref({
    pathname: u,
    search: c,
    hash: i
  });
}
function Me() {
  return g.useContext(Ue) != null;
}
function xe() {
  return Me() || (process.env.NODE_ENV !== "production" ? O(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : O(!1)), g.useContext(Ue).location;
}
const pr = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function gr(e) {
  g.useContext(te).static || g.useLayoutEffect(e);
}
function rt() {
  let {
    isDataRoute: e
  } = g.useContext(ne);
  return e ? Ba() : Oa();
}
function Oa() {
  Me() || (process.env.NODE_ENV !== "production" ? O(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : O(!1));
  let e = g.useContext(Be), {
    basename: t,
    future: r,
    navigator: n
  } = g.useContext(te), {
    matches: a
  } = g.useContext(ne), {
    pathname: i
  } = xe(), s = JSON.stringify(bt(a, r.v7_relativeSplatPath)), c = g.useRef(!1);
  return gr(() => {
    c.current = !0;
  }), g.useCallback(function(d, f) {
    if (f === void 0 && (f = {}), process.env.NODE_ENV !== "production" && re(c.current, pr), !c.current) return;
    if (typeof d == "number") {
      n.go(d);
      return;
    }
    let h = xt(d, JSON.parse(s), i, f.relative === "path");
    e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : de([t, h.pathname])), (f.replace ? n.replace : n.push)(h, f.state, f);
  }, [t, n, s, i, e]);
}
function Sa() {
  let {
    matches: e
  } = g.useContext(ne), t = e[e.length - 1];
  return t ? t.params : {};
}
function Ie(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    future: n
  } = g.useContext(te), {
    matches: a
  } = g.useContext(ne), {
    pathname: i
  } = xe(), s = JSON.stringify(bt(a, n.v7_relativeSplatPath));
  return g.useMemo(() => xt(e, JSON.parse(s), i, r === "path"), [e, s, i, r]);
}
function Ta(e, t) {
  return Ma(e, t);
}
function Ma(e, t, r, n) {
  Me() || (process.env.NODE_ENV !== "production" ? O(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : O(!1));
  let {
    navigator: a
  } = g.useContext(te), {
    matches: i
  } = g.useContext(ne), s = i[i.length - 1], c = s ? s.params : {}, u = s ? s.pathname : "/", d = s ? s.pathnameBase : "/", f = s && s.route;
  if (process.env.NODE_ENV !== "production") {
    let v = f && f.path || "";
    yr(u, !f || v.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + u + '" (under <Route path="' + v + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + v + '"> to <Route ') + ('path="' + (v === "/" ? "*" : v + "/*") + '">.'));
  }
  let h = xe(), b;
  if (t) {
    var C;
    let v = typeof t == "string" ? Te(t) : t;
    d === "/" || (C = v.pathname) != null && C.startsWith(d) || (process.env.NODE_ENV !== "production" ? O(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + d + '" ') + ('but pathname "' + v.pathname + '" was given in the `location` prop.')) : O(!1)), b = v;
  } else
    b = h;
  let E = b.pathname || "/", N = E;
  if (d !== "/") {
    let v = d.replace(/^\//, "").split("/");
    N = "/" + E.replace(/^\//, "").split("/").slice(v.length).join("/");
  }
  let w = oa(e, {
    pathname: N
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && re(f || w != null, 'No routes matched location "' + b.pathname + b.search + b.hash + '" '), process.env.NODE_ENV !== "production" && re(w == null || w[w.length - 1].route.element !== void 0 || w[w.length - 1].route.Component !== void 0 || w[w.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + b.pathname + b.search + b.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let R = Wa(w && w.map((v) => Object.assign({}, v, {
    params: Object.assign({}, c, v.params),
    pathname: de([
      d,
      // Re-encode pathnames that were decoded inside matchRoutes
      a.encodeLocation ? a.encodeLocation(v.pathname).pathname : v.pathname
    ]),
    pathnameBase: v.pathnameBase === "/" ? d : de([
      d,
      // Re-encode pathnames that were decoded inside matchRoutes
      a.encodeLocation ? a.encodeLocation(v.pathnameBase).pathname : v.pathnameBase
    ])
  })), i, r, n);
  return t && R ? /* @__PURE__ */ g.createElement(Ue.Provider, {
    value: {
      location: $e({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, b),
      navigationType: pe.Pop
    }
  }, R) : R;
}
function _a() {
  let e = Ha(), t = ja(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", a = {
    padding: "0.5rem",
    backgroundColor: n
  }, i = {
    padding: "2px 4px",
    backgroundColor: n
  }, s = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", e), s = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ g.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ g.createElement("code", {
    style: i
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ g.createElement("code", {
    style: i
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ g.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), r ? /* @__PURE__ */ g.createElement("pre", {
    style: a
  }, r) : null, s);
}
const ka = /* @__PURE__ */ g.createElement(_a, null);
class Fa extends g.Component {
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
    return this.state.error !== void 0 ? /* @__PURE__ */ g.createElement(ne.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ g.createElement(Et.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function La(e) {
  let {
    routeContext: t,
    match: r,
    children: n
  } = e, a = g.useContext(Be);
  return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ g.createElement(ne.Provider, {
    value: t
  }, n);
}
function Wa(e, t, r, n) {
  var a;
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
  let s = e, c = (a = r) == null ? void 0 : a.errors;
  if (c != null) {
    let f = s.findIndex((h) => h.route.id && (c == null ? void 0 : c[h.route.id]) !== void 0);
    f >= 0 || (process.env.NODE_ENV !== "production" ? O(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(c).join(",")) : O(!1)), s = s.slice(0, Math.min(s.length, f + 1));
  }
  let u = !1, d = -1;
  if (r && n && n.v7_partialHydration)
    for (let f = 0; f < s.length; f++) {
      let h = s[f];
      if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (d = f), h.route.id) {
        let {
          loaderData: b,
          errors: C
        } = r, E = h.route.loader && b[h.route.id] === void 0 && (!C || C[h.route.id] === void 0);
        if (h.route.lazy || E) {
          u = !0, d >= 0 ? s = s.slice(0, d + 1) : s = [s[0]];
          break;
        }
      }
    }
  return s.reduceRight((f, h, b) => {
    let C, E = !1, N = null, w = null;
    r && (C = c && h.route.id ? c[h.route.id] : void 0, N = h.route.errorElement || ka, u && (d < 0 && b === 0 ? (yr("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), E = !0, w = null) : d === b && (E = !0, w = h.route.hydrateFallbackElement || null)));
    let R = t.concat(s.slice(0, b + 1)), v = () => {
      let S;
      return C ? S = N : E ? S = w : h.route.Component ? S = /* @__PURE__ */ g.createElement(h.route.Component, null) : h.route.element ? S = h.route.element : S = f, /* @__PURE__ */ g.createElement(La, {
        match: h,
        routeContext: {
          outlet: f,
          matches: R,
          isDataRoute: r != null
        },
        children: S
      });
    };
    return r && (h.route.ErrorBoundary || h.route.errorElement || b === 0) ? /* @__PURE__ */ g.createElement(Fa, {
      location: r.location,
      revalidation: r.revalidation,
      component: N,
      error: C,
      children: v(),
      routeContext: {
        outlet: null,
        matches: R,
        isDataRoute: !0
      }
    }) : v();
  }, null);
}
var vr = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(vr || {}), He = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(He || {});
function Nt(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function Ya(e) {
  let t = g.useContext(Be);
  return t || (process.env.NODE_ENV !== "production" ? O(!1, Nt(e)) : O(!1)), t;
}
function Aa(e) {
  let t = g.useContext(wt);
  return t || (process.env.NODE_ENV !== "production" ? O(!1, Nt(e)) : O(!1)), t;
}
function Va(e) {
  let t = g.useContext(ne);
  return t || (process.env.NODE_ENV !== "production" ? O(!1, Nt(e)) : O(!1)), t;
}
function Ct(e) {
  let t = Va(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? O(!1, e + ' can only be used on routes that contain a unique "id"') : O(!1)), r.route.id;
}
function $a() {
  return Ct(He.UseRouteId);
}
function Ha() {
  var e;
  let t = g.useContext(Et), r = Aa(He.UseRouteError), n = Ct(He.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function Ba() {
  let {
    router: e
  } = Ya(vr.UseNavigateStable), t = Ct(He.UseNavigateStable), r = g.useRef(!1);
  return gr(() => {
    r.current = !0;
  }), g.useCallback(function(a, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && re(r.current, pr), r.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, $e({
      fromRouteId: t
    }, i)));
  }, [e, t]);
}
const Kt = {};
function yr(e, t, r) {
  !t && !Kt[e] && (Kt[e] = !0, process.env.NODE_ENV !== "production" && re(!1, r));
}
const Zt = {};
function Ua(e, t) {
  process.env.NODE_ENV !== "production" && !Zt[t] && (Zt[t] = !0, console.warn(t));
}
const er = (e, t, r) => Ua(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + r + "."));
function Ia(e, t) {
  (e == null ? void 0 : e.v7_startTransition) === void 0 && er("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && er("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath");
}
function ft(e) {
  let {
    to: t,
    replace: r,
    state: n,
    relative: a
  } = e;
  Me() || (process.env.NODE_ENV !== "production" ? O(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  ) : O(!1));
  let {
    future: i,
    static: s
  } = g.useContext(te);
  process.env.NODE_ENV !== "production" && re(!s, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let {
    matches: c
  } = g.useContext(ne), {
    pathname: u
  } = xe(), d = rt(), f = xt(t, bt(c, i.v7_relativeSplatPath), u, a === "path"), h = JSON.stringify(f);
  return g.useEffect(() => d(JSON.parse(h), {
    replace: r,
    state: n,
    relative: a
  }), [d, h, a, r, n]), null;
}
function Ye(e) {
  process.env.NODE_ENV !== "production" ? O(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : O(!1);
}
function qa(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: a = pe.Pop,
    navigator: i,
    static: s = !1,
    future: c
  } = e;
  Me() && (process.env.NODE_ENV !== "production" ? O(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : O(!1));
  let u = t.replace(/^\/*/, "/"), d = g.useMemo(() => ({
    basename: u,
    navigator: i,
    static: s,
    future: $e({
      v7_relativeSplatPath: !1
    }, c)
  }), [u, c, i, s]);
  typeof n == "string" && (n = Te(n));
  let {
    pathname: f = "/",
    search: h = "",
    hash: b = "",
    state: C = null,
    key: E = "default"
  } = n, N = g.useMemo(() => {
    let w = ge(f, u);
    return w == null ? null : {
      location: {
        pathname: w,
        search: h,
        hash: b,
        state: C,
        key: E
      },
      navigationType: a
    };
  }, [u, f, h, b, C, E, a]);
  return process.env.NODE_ENV !== "production" && re(N != null, '<Router basename="' + u + '"> is not able to match the URL ' + ('"' + f + h + b + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), N == null ? null : /* @__PURE__ */ g.createElement(te.Provider, {
    value: d
  }, /* @__PURE__ */ g.createElement(Ue.Provider, {
    children: r,
    value: N
  }));
}
function Ga(e) {
  let {
    children: t,
    location: r
  } = e;
  return Ta(vt(t), r);
}
new Promise(() => {
});
function vt(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return g.Children.forEach(e, (n, a) => {
    if (!/* @__PURE__ */ g.isValidElement(n))
      return;
    let i = [...t, a];
    if (n.type === g.Fragment) {
      r.push.apply(r, vt(n.props.children, i));
      return;
    }
    n.type !== Ye && (process.env.NODE_ENV !== "production" ? O(!1, "[" + (typeof n.type == "string" ? n.type : n.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : O(!1)), !n.props.index || !n.props.children || (process.env.NODE_ENV !== "production" ? O(!1, "An index route cannot have child routes.") : O(!1));
    let s = {
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
    n.props.children && (s.children = vt(n.props.children, i)), r.push(s);
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
function Se() {
  return Se = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Se.apply(this, arguments);
}
function jt(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
const Xe = "get", Qe = "application/x-www-form-urlencoded";
function nt(e) {
  return e != null && typeof e.tagName == "string";
}
function za(e) {
  return nt(e) && e.tagName.toLowerCase() === "button";
}
function Ja(e) {
  return nt(e) && e.tagName.toLowerCase() === "form";
}
function Xa(e) {
  return nt(e) && e.tagName.toLowerCase() === "input";
}
function Qa(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ka(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Qa(e);
}
let Je = null;
function Za() {
  if (Je === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Je = !1;
    } catch {
      Je = !0;
    }
  return Je;
}
const eo = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function ht(e) {
  return e != null && !eo.has(e) ? (process.env.NODE_ENV !== "production" && re(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + Qe + '"')), null) : e;
}
function to(e, t) {
  let r, n, a, i, s;
  if (Ja(e)) {
    let c = e.getAttribute("action");
    n = c ? ge(c, t) : null, r = e.getAttribute("method") || Xe, a = ht(e.getAttribute("enctype")) || Qe, i = new FormData(e);
  } else if (za(e) || Xa(e) && (e.type === "submit" || e.type === "image")) {
    let c = e.form;
    if (c == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let u = e.getAttribute("formaction") || c.getAttribute("action");
    if (n = u ? ge(u, t) : null, r = e.getAttribute("formmethod") || c.getAttribute("method") || Xe, a = ht(e.getAttribute("formenctype")) || ht(c.getAttribute("enctype")) || Qe, i = new FormData(c, e), !Za()) {
      let {
        name: d,
        type: f,
        value: h
      } = e;
      if (f === "image") {
        let b = d ? d + "." : "";
        i.append(b + "x", "0"), i.append(b + "y", "0");
      } else d && i.append(d, h);
    }
  } else {
    if (nt(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r = Xe, n = null, a = Qe, s = e;
  }
  return i && a === "text/plain" && (s = i, i = void 0), {
    action: n,
    method: r.toLowerCase(),
    encType: a,
    formData: i,
    body: s
  };
}
const ro = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], no = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], ao = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], oo = "6";
try {
  window.__reactRouterVersion = oo;
} catch {
}
const br = /* @__PURE__ */ g.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (br.displayName = "ViewTransition");
const io = /* @__PURE__ */ g.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (io.displayName = "Fetchers");
const so = "startTransition", tr = g[so];
function lo(e) {
  let {
    basename: t,
    children: r,
    future: n,
    window: a
  } = e, i = g.useRef();
  i.current == null && (i.current = ra({
    window: a,
    v5Compat: !0
  }));
  let s = i.current, [c, u] = g.useState({
    action: s.action,
    location: s.location
  }), {
    v7_startTransition: d
  } = n || {}, f = g.useCallback((h) => {
    d && tr ? tr(() => u(h)) : u(h);
  }, [u, d]);
  return g.useLayoutEffect(() => s.listen(f), [s, f]), g.useEffect(() => Ia(n), [n]), /* @__PURE__ */ g.createElement(qa, {
    basename: t,
    children: r,
    location: c.location,
    navigationType: c.action,
    navigator: s,
    future: n
  });
}
process.env.NODE_ENV;
const co = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", uo = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, xr = /* @__PURE__ */ g.forwardRef(function(t, r) {
  let {
    onClick: n,
    relative: a,
    reloadDocument: i,
    replace: s,
    state: c,
    target: u,
    to: d,
    preventScrollReset: f,
    viewTransition: h
  } = t, b = jt(t, ro), {
    basename: C
  } = g.useContext(te), E, N = !1;
  if (typeof d == "string" && uo.test(d) && (E = d, co))
    try {
      let S = new URL(window.location.href), _ = d.startsWith("//") ? new URL(S.protocol + d) : new URL(d), I = ge(_.pathname, C);
      _.origin === S.origin && I != null ? d = I + _.search + _.hash : N = !0;
    } catch {
      process.env.NODE_ENV !== "production" && re(!1, '<Link to="' + d + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let w = Pa(d, {
    relative: a
  }), R = po(d, {
    replace: s,
    state: c,
    target: u,
    preventScrollReset: f,
    relative: a,
    viewTransition: h
  });
  function v(S) {
    n && n(S), S.defaultPrevented || R(S);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ g.createElement("a", Se({}, b, {
      href: E || w,
      onClick: N || i ? n : v,
      ref: r,
      target: u
    }))
  );
});
process.env.NODE_ENV !== "production" && (xr.displayName = "Link");
const fo = /* @__PURE__ */ g.forwardRef(function(t, r) {
  let {
    "aria-current": n = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: s = !1,
    style: c,
    to: u,
    viewTransition: d,
    children: f
  } = t, h = jt(t, no), b = Ie(u, {
    relative: h.relative
  }), C = xe(), E = g.useContext(wt), {
    navigator: N,
    basename: w
  } = g.useContext(te), R = E != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  wo(b) && d === !0, v = N.encodeLocation ? N.encodeLocation(b).pathname : b.pathname, S = C.pathname, _ = E && E.navigation && E.navigation.location ? E.navigation.location.pathname : null;
  a || (S = S.toLowerCase(), _ = _ ? _.toLowerCase() : null, v = v.toLowerCase()), _ && w && (_ = ge(_, w) || _);
  const I = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length;
  let ie = S === v || !s && S.startsWith(v) && S.charAt(I) === "/", fe = _ != null && (_ === v || !s && _.startsWith(v) && _.charAt(v.length) === "/"), se = {
    isActive: ie,
    isPending: fe,
    isTransitioning: R
  }, le = ie ? n : void 0, ae;
  typeof i == "function" ? ae = i(se) : ae = [i, ie ? "active" : null, fe ? "pending" : null, R ? "transitioning" : null].filter(Boolean).join(" ");
  let he = typeof c == "function" ? c(se) : c;
  return /* @__PURE__ */ g.createElement(xr, Se({}, h, {
    "aria-current": le,
    className: ae,
    ref: r,
    style: he,
    to: u,
    viewTransition: d
  }), typeof f == "function" ? f(se) : f);
});
process.env.NODE_ENV !== "production" && (fo.displayName = "NavLink");
const ho = /* @__PURE__ */ g.forwardRef((e, t) => {
  let {
    fetcherKey: r,
    navigate: n,
    reloadDocument: a,
    replace: i,
    state: s,
    method: c = Xe,
    action: u,
    onSubmit: d,
    relative: f,
    preventScrollReset: h,
    viewTransition: b
  } = e, C = jt(e, ao), E = bo(), N = xo(u, {
    relative: f
  }), w = c.toLowerCase() === "get" ? "get" : "post", R = (v) => {
    if (d && d(v), v.defaultPrevented) return;
    v.preventDefault();
    let S = v.nativeEvent.submitter, _ = (S == null ? void 0 : S.getAttribute("formmethod")) || c;
    E(S || v.currentTarget, {
      fetcherKey: r,
      method: _,
      navigate: n,
      replace: i,
      state: s,
      relative: f,
      preventScrollReset: h,
      viewTransition: b
    });
  };
  return /* @__PURE__ */ g.createElement("form", Se({
    ref: t,
    method: w,
    action: N,
    onSubmit: a ? d : R
  }, C));
});
process.env.NODE_ENV !== "production" && (ho.displayName = "Form");
process.env.NODE_ENV;
var et;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(et || (et = {}));
var rr;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(rr || (rr = {}));
function mo(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function wr(e) {
  let t = g.useContext(Be);
  return t || (process.env.NODE_ENV !== "production" ? O(!1, mo(e)) : O(!1)), t;
}
function po(e, t) {
  let {
    target: r,
    replace: n,
    state: a,
    preventScrollReset: i,
    relative: s,
    viewTransition: c
  } = t === void 0 ? {} : t, u = rt(), d = xe(), f = Ie(e, {
    relative: s
  });
  return g.useCallback((h) => {
    if (Ka(h, r)) {
      h.preventDefault();
      let b = n !== void 0 ? n : Ve(d) === Ve(f);
      u(e, {
        replace: b,
        state: a,
        preventScrollReset: i,
        relative: s,
        viewTransition: c
      });
    }
  }, [d, u, f, n, a, r, e, i, s, c]);
}
function go() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let vo = 0, yo = () => "__" + String(++vo) + "__";
function bo() {
  let {
    router: e
  } = wr(et.UseSubmit), {
    basename: t
  } = g.useContext(te), r = $a();
  return g.useCallback(function(n, a) {
    a === void 0 && (a = {}), go();
    let {
      action: i,
      method: s,
      encType: c,
      formData: u,
      body: d
    } = to(n, t);
    if (a.navigate === !1) {
      let f = a.fetcherKey || yo();
      e.fetch(f, r, a.action || i, {
        preventScrollReset: a.preventScrollReset,
        formData: u,
        body: d,
        formMethod: a.method || s,
        formEncType: a.encType || c,
        flushSync: a.flushSync
      });
    } else
      e.navigate(a.action || i, {
        preventScrollReset: a.preventScrollReset,
        formData: u,
        body: d,
        formMethod: a.method || s,
        formEncType: a.encType || c,
        replace: a.replace,
        state: a.state,
        fromRouteId: r,
        flushSync: a.flushSync,
        viewTransition: a.viewTransition
      });
  }, [e, t, r]);
}
function xo(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    basename: n
  } = g.useContext(te), a = g.useContext(ne);
  a || (process.env.NODE_ENV !== "production" ? O(!1, "useFormAction must be used inside a RouteContext") : O(!1));
  let [i] = a.matches.slice(-1), s = Se({}, Ie(e || ".", {
    relative: r
  })), c = xe();
  if (e == null) {
    s.search = c.search;
    let u = new URLSearchParams(s.search), d = u.getAll("index");
    if (d.some((h) => h === "")) {
      u.delete("index"), d.filter((b) => b).forEach((b) => u.append("index", b));
      let h = u.toString();
      s.search = h ? "?" + h : "";
    }
  }
  return (!e || e === ".") && i.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (s.pathname = s.pathname === "/" ? n : de([n, s.pathname])), Ve(s);
}
function wo(e, t) {
  t === void 0 && (t = {});
  let r = g.useContext(br);
  r == null && (process.env.NODE_ENV !== "production" ? O(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : O(!1));
  let {
    basename: n
  } = wr(et.useViewTransitionState), a = Ie(e, {
    relative: t.relative
  });
  if (!r.isTransitioning)
    return !1;
  let i = ge(r.currentLocation.pathname, n) || r.currentLocation.pathname, s = ge(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return gt(a.pathname, s) != null || gt(a.pathname, i) != null;
}
const Eo = ({ username: e, token: t }) => {
  const r = rt(), [n, a] = $([]), [i, s] = $(!0), [c, u] = $({
    startDate: Ze(/* @__PURE__ */ new Date()),
    endDate: /* @__PURE__ */ new Date()
  }), [d, f] = $("lastYear"), [h, b] = $("galaxy"), [C, E] = $(null), [N, w] = $(null), [R, v] = $(null), S = () => {
    r("/login");
  };
  ar(() => {
    s(!0), w(null), v(null), E(null), setTimeout(() => {
      dr(
        e,
        t,
        c.startDate,
        c.endDate
      ).then((y) => {
        a(y), s(!1);
      });
    }, 1e3);
  }, [c, e, t]);
  const _ = (y) => {
    const D = Oe[h];
    return y === 0 ? D.noContributions : y <= 2 ? D.low : y <= 4 ? D.moderate : y <= 6 ? D.high : D.veryHigh;
  }, I = (y) => y === 0 ? "noContributions" : y <= 2 ? "low" : y <= 4 ? "moderate" : y <= 6 ? "high" : "veryHigh", ie = () => n.reduce((y, D) => y + D.count, 0), fe = () => {
    const y = le();
    if (y.length === 0) return [];
    const D = /* @__PURE__ */ new Map();
    return y.forEach((F, m) => {
      ae(F).forEach((T) => {
        if (T.getDate() === 1) {
          const W = T.getMonth();
          D.has(W) || D.set(W, {
            label: K(T, "MMM"),
            position: m
          });
        }
      });
    }), Array.from(D.values()).sort(
      (F, m) => F.position - m.position
    );
  }, se = (y) => {
    var F;
    const D = K(y, "yyyy-MM-dd");
    return ((F = n.find((m) => m.date === D)) == null ? void 0 : F.count) || 0;
  }, le = () => {
    const y = c.startDate, D = c.endDate;
    return lr({ start: y, end: D });
  }, ae = (y) => sr({
    start: y,
    end: yt(y, 6)
  }), he = (y, D) => {
    u({ startDate: y, endDate: D });
  }, ve = (y) => {
    let D = null;
    for (let F = 0; F < y.length; F++)
      y[F].count > 0 && (D = y[F].date);
    return J(D);
  }, J = (y) => {
    if (!y) return "No contributions found";
    const D = new Date(y), F = [
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
    ], m = D.getDate(), j = F[D.getMonth()], T = D.getFullYear(), W = Z(m);
    return `${j} ${m}${W}, ${T}`;
  }, Z = (y) => {
    if (y >= 11 && y <= 13) return "th";
    switch (y % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }, ce = (y) => {
    console.log("Mouse enter:", y), (!R || R === y) && E(y);
  }, we = () => {
    console.log("Mouse leave"), R || E(null);
  }, Ee = (y) => {
    R === y ? (v(null), E(null)) : (v(y), E(y)), w(null);
  }, Ne = (y) => {
    w(N === y ? null : y), v(null), E(null);
  };
  if (i)
    return /* @__PURE__ */ l.jsx("div", { className: "bg-white border border-gray-200 rounded-lg shadow-sm p-6 w-full animate-pulse", children: /* @__PURE__ */ l.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ l.jsx("div", { className: "h-4 bg-gray-200 rounded" }),
      /* @__PURE__ */ l.jsx("div", { className: "grid grid-flow-col gap-1 overflow-x-auto", children: Array.from({ length: 53 }).map((y, D) => /* @__PURE__ */ l.jsx("div", { className: "grid grid-rows-7 gap-1", children: Array.from({ length: 7 }).map((F, m) => /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "w-4 h-4 bg-gray-200 rounded-sm"
        },
        `${D}-${m}`
      )) }, D)) })
    ] }) });
  const Ce = fe(), X = le();
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx("div", { className: "bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-6", children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ l.jsx("div", { className: "w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ l.jsx("svg", { className: "w-4 h-4 text-purple-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" }) }) }),
        /* @__PURE__ */ l.jsxs("div", { children: [
          /* @__PURE__ */ l.jsx("span", { className: "text-sm text-gray-500", children: "Logged in as" }),
          /* @__PURE__ */ l.jsx("div", { className: "font-semibold text-gray-900", children: e })
        ] })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          onClick: S,
          className: "px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200",
          children: "Logout"
        }
      )
    ] }) }),
    /* @__PURE__ */ l.jsx("div", { className: "bg-white border border-gray-200 rounded-lg shadow-sm p-6 animate-fadeIn max-w-full overflow-hidden", children: /* @__PURE__ */ l.jsxs("div", { className: "space-y-6 px-4", children: [
      " ",
      /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ l.jsx("svg", { className: "w-5 h-5 text-purple-600", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ l.jsx("path", { fillRule: "evenodd", d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", clipRule: "evenodd" }) }),
          /* @__PURE__ */ l.jsx("h2", { className: "text-lg font-semibold hidden sm:inline", children: "Contribution Calendar" })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `px-3 py-1 text-sm rounded transition-colors ${d === "lastYear" ? "bg-purple-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`,
              onClick: () => {
                const y = /* @__PURE__ */ new Date(), D = Ze(y);
                he(D, y), f("lastYear");
              },
              children: "Last Year"
            }
          ),
          [2025, 2024, 2023, 2022].map((y) => /* @__PURE__ */ l.jsx(
            "button",
            {
              className: `px-3 py-1 text-sm rounded transition-colors ${d === y.toString() ? "bg-purple-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`,
              onClick: () => {
                he(
                  new Date(y, 0, 1),
                  new Date(y, 11, 31)
                ), f(y.toString());
              },
              children: y
            },
            y
          ))
        ] }),
        /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx(
          "select",
          {
            value: h,
            onChange: (y) => b(y.target.value),
            className: "border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
            children: Object.keys(Oe).map((y) => /* @__PURE__ */ l.jsx("option", { value: y, children: y.charAt(0).toUpperCase() + y.slice(1) }, y))
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "text-center py-2", children: [
        /* @__PURE__ */ l.jsx("span", { className: "text-2xl font-bold text-gray-900", children: ie() }),
        /* @__PURE__ */ l.jsxs("span", { className: "text-gray-600 ml-2", children: [
          "contributions in ",
          d
        ] })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-[1000px] mx-auto", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "w-16", children: [
          /* @__PURE__ */ l.jsx("div", { className: "h-5" }),
          /* @__PURE__ */ l.jsxs("div", { className: "grid grid-rows-7 gap-1 text-xs text-gray-500", children: [
            /* @__PURE__ */ l.jsx("div", { children: "SUN" }),
            /* @__PURE__ */ l.jsx("div", { className: "invisible", children: "MON" }),
            /* @__PURE__ */ l.jsx("div", { children: "TUE" }),
            /* @__PURE__ */ l.jsx("div", { className: "invisible", children: "WED" }),
            /* @__PURE__ */ l.jsx("div", { children: "THU" }),
            /* @__PURE__ */ l.jsx("div", { className: "invisible", children: "FRI" }),
            /* @__PURE__ */ l.jsx("div", { children: "SAT" })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ l.jsx("div", { className: "h-5 relative", children: Ce.map((y, D) => /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute text-xs text-gray-500",
              style: {
                left: `${y.position / (X.length - 1) * 100}%`
              },
              children: y.label
            },
            D
          )) }),
          /* @__PURE__ */ l.jsx("div", { className: "grid grid-flow-col gap-1 relative", style: { zIndex: 1 }, children: X.map((y, D) => /* @__PURE__ */ l.jsx("div", { className: "grid grid-rows-7 gap-1", children: ae(y).map((F, m) => {
            const j = K(F, "yyyy-MM-dd"), T = se(F), W = I(T), q = N === W, H = R === j, Q = N && !q || R && !H;
            return /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: "relative cursor-pointer group",
                style: { zIndex: C === j ? 9999 : 1 },
                onMouseEnter: () => ce(j),
                onMouseLeave: we,
                onClick: () => Ee(j),
                title: `${K(F, "MMMM d, yyyy")} - ${T} contribution${T !== 1 ? "s" : ""}`,
                children: [
                  /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      className: "w-4 h-4 rounded-sm transition-all duration-200 hover:ring-1 hover:ring-gray-400",
                      style: {
                        backgroundColor: _(T),
                        opacity: Q ? "0.3" : "1",
                        transform: q || H ? "scale(1.1)" : "scale(1)",
                        border: H ? "2px solid black" : "none"
                      }
                    }
                  ),
                  C === j && /* @__PURE__ */ l.jsxs(
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
                        left: D < 5 ? "0" : D > X.length - 6 ? "auto" : "50%",
                        right: D > X.length - 6 ? "0" : "auto",
                        transform: D >= 5 && D <= X.length - 6 ? "translateX(-50%)" : "none",
                        // Ensure tooltip doesn't extend beyond viewport
                        maxWidth: "200px"
                      },
                      children: [
                        /* @__PURE__ */ l.jsxs("div", { className: "text-center", children: [
                          /* @__PURE__ */ l.jsx("div", { className: "font-semibold", children: K(F, "MMM d, yyyy") }),
                          /* @__PURE__ */ l.jsxs("div", { className: "text-gray-300 text-xs", children: [
                            T,
                            " contribution",
                            T !== 1 ? "s" : ""
                          ] })
                        ] }),
                        /* @__PURE__ */ l.jsx(
                          "div",
                          {
                            className: "absolute w-0 h-0",
                            style: {
                              // Vertical arrow position
                              [m < 2 ? "top" : "bottom"]: "100%",
                              // More conservative horizontal arrow position
                              left: D < 5 ? "16px" : D > X.length - 6 ? "auto" : "50%",
                              right: D > X.length - 6 ? "16px" : "auto",
                              transform: D >= 5 && D <= X.length - 6 ? "translateX(-50%)" : "none",
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
              `${D}-${m}`
            );
          }) }, D)) })
        ] })
      ] }) }),
      /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "text-center text-sm text-gray-600", children: [
          "Last contributed on: ",
          ve(n)
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-end space-x-2 text-sm", children: [
          /* @__PURE__ */ l.jsx("span", { className: "text-gray-500", children: "Less" }),
          /* @__PURE__ */ l.jsx("div", { className: "flex space-x-1", children: ["noContributions", "low", "moderate", "high", "veryHigh"].map(
            (y) => /* @__PURE__ */ l.jsx(
              "div",
              {
                className: "w-4 h-4 rounded-sm cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-gray-400",
                style: {
                  backgroundColor: Oe[h][y],
                  transform: N === y ? "scale(1.1)" : "scale(1)",
                  opacity: N && N !== y ? "0.3" : "1",
                  boxShadow: N === y ? "0 0 0 2px rgba(0,0,0,0.1)" : "none"
                },
                onClick: () => Ne(y)
              },
              y
            )
          ) }),
          /* @__PURE__ */ l.jsx("span", { className: "text-gray-500", children: "More" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx("footer", { className: "mt-8 text-center text-sm text-gray-500", children: "Designed and developed by Mani Babu" })
  ] });
}, No = ({ setUsername: e, setToken: t }) => {
  const [r, n] = $(""), [a, i] = $(""), [s, c] = $(""), u = rt(), d = (C) => {
    const E = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, N = /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/;
    return E.test(C) ? "email" : N.test(C) ? "username" : "invalid";
  }, f = async (C, E) => {
    try {
      const N = d(C), w = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${E}`
        }
      });
      if (!w.ok)
        return w.status === 401 ? (c("Invalid GitHub token"), !1) : (c("Failed to verify credentials"), !1);
      const R = await w.json();
      switch (N) {
        case "email":
          if (R.email !== C)
            return c("Email does not match the token owner"), !1;
          break;
        case "username":
          if (R.login.toLowerCase() !== C.toLowerCase())
            return c("Username does not match the token owner"), !1;
          break;
        case "invalid":
          return c("Invalid identifier format"), !1;
      }
      return !0;
    } catch {
      return c("Network error occurred"), !1;
    }
  }, h = async (C) => {
    if (C.preventDefault(), !r || !a) {
      c("Both fields are required.");
      return;
    }
    if (d(r) === "invalid") {
      c("Please enter a valid email or GitHub username");
      return;
    }
    await f(r, a) && (e(r), t(a), u(`/calendar/gh/${r}`));
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
  return /* @__PURE__ */ l.jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center bg-background p-4", children: [
    /* @__PURE__ */ l.jsx("div", { className: "h-16 mb-4", children: /* @__PURE__ */ l.jsx(
      "svg",
      {
        className: "w-16 h-16 text-purple-500",
        fill: "currentColor",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ l.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",
            clipRule: "evenodd"
          }
        )
      }
    ) }),
    /* @__PURE__ */ l.jsxs("div", { className: "bg-white border border-gray-200 rounded-lg shadow-sm p-6 w-full max-w-md", children: [
      /* @__PURE__ */ l.jsx("h2", { className: "text-2xl font-semibold text-center text-gray-900 mb-6", children: "Login" }),
      s && /* @__PURE__ */ l.jsx("div", { className: "text-red-600 text-center text-sm mb-4 p-2 bg-red-50 border border-red-200 rounded", children: s }),
      /* @__PURE__ */ l.jsxs("form", { onSubmit: h, className: "space-y-4", children: [
        /* @__PURE__ */ l.jsxs("div", { children: [
          /* @__PURE__ */ l.jsx("label", { htmlFor: "identifier", className: "block text-sm font-medium text-gray-700 mb-1", children: "GitHub Username" }),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              id: "identifier",
              type: "text",
              value: r,
              onChange: (C) => n(C.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
              placeholder: b()
            }
          ),
          r && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-gray-500 mt-1 block", children: b() })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { children: [
          /* @__PURE__ */ l.jsx("label", { htmlFor: "token", className: "block text-sm font-medium text-gray-700 mb-1", children: "GitHub Personal Access Token" }),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              id: "token",
              type: "password",
              value: a,
              onChange: (C) => i(C.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
              placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
            }
          ),
          /* @__PURE__ */ l.jsxs("span", { className: "text-xs text-gray-500 mt-1 block", children: [
            /* @__PURE__ */ l.jsx("a", { href: "https://github.com/settings/tokens", target: "_blank", rel: "noopener noreferrer", className: "text-purple-600 hover:underline", children: "Create a token here" }),
            " (needs repo and read:user scopes)"
          ] })
        ] }),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "submit",
            className: "w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
            children: "Login"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("footer", { className: "mt-6 text-center text-sm text-gray-500", children: "Designed and developed by Mani Babu" })
  ] });
}, Co = ({ token: e }) => {
  const { username: t } = Sa();
  return t ? /* @__PURE__ */ l.jsxs("div", { className: "container mx-auto p-8 space-y-8", children: [
    /* @__PURE__ */ l.jsx("h1", { className: "text-3xl font-semibold text-center text-gray-900", children: "GitHub Contribution Calendar" }),
    /* @__PURE__ */ l.jsx(Eo, { username: t, token: e })
  ] }) : /* @__PURE__ */ l.jsx("div", { children: "Username not found" });
}, Oo = () => {
  const [e, t] = $(""), [r, n] = $("");
  return /* @__PURE__ */ l.jsx(lo, { children: /* @__PURE__ */ l.jsxs(Ga, { children: [
    /* @__PURE__ */ l.jsx(Ye, { path: "/", element: /* @__PURE__ */ l.jsx(ft, { to: "/login" }) }),
    /* @__PURE__ */ l.jsx(
      Ye,
      {
        path: "/login",
        element: /* @__PURE__ */ l.jsx(No, { setUsername: t, setToken: n })
      }
    ),
    /* @__PURE__ */ l.jsx(
      Ye,
      {
        path: "/calendar/gh/:username",
        element: e && r ? /* @__PURE__ */ l.jsx(Co, { token: r }) : /* @__PURE__ */ l.jsx(ft, { to: "/login" })
      }
    ),
    /* @__PURE__ */ l.jsx(Ye, { path: "*", element: /* @__PURE__ */ l.jsx(ft, { to: "/login" }) })
  ] }) });
};
export {
  Oo as App,
  Eo as ContributionCalendar,
  Po as GitHubContributionCalendar,
  No as Login,
  Do as fetchContributionDetails,
  dr as fetchGitHubContributions,
  Oe as themes
};
