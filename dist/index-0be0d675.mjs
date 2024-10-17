import Bo, { forwardRef as $o, createElement as lr, useState as bt, useEffect as _a } from "react";
var hr = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function za() {
  if (zs)
    return Ot;
  zs = 1;
  var e = Bo, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, c, u) {
    var f, d = {}, l = null, b = null;
    u !== void 0 && (l = "" + u), c.key !== void 0 && (l = "" + c.key), c.ref !== void 0 && (b = c.ref);
    for (f in c)
      r.call(c, f) && !o.hasOwnProperty(f) && (d[f] = c[f]);
    if (a && a.defaultProps)
      for (f in c = a.defaultProps, c)
        d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: t, type: a, key: l, ref: b, props: d, _owner: s.current };
  }
  return Ot.Fragment = n, Ot.jsx = i, Ot.jsxs = i, Ot;
}
var _t = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ms;
function Ma() {
  return Ms || (Ms = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Bo, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function p(h) {
      if (h === null || typeof h != "object")
        return null;
      var P = g && h[g] || h[y];
      return typeof P == "function" ? P : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(h) {
      {
        for (var P = arguments.length, k = new Array(P > 1 ? P - 1 : 0), z = 1; z < P; z++)
          k[z - 1] = arguments[z];
        v("error", h, k);
      }
    }
    function v(h, P, k) {
      {
        var z = m.ReactDebugCurrentFrame, V = z.getStackAddendum();
        V !== "" && (P += "%s", k = k.concat([V]));
        var Z = k.map(function(H) {
          return String(H);
        });
        Z.unshift("Warning: " + P), Function.prototype.apply.call(console[h], console, Z);
      }
    }
    var x = !1, R = !1, I = !1, A = !1, B = !1, $;
    $ = Symbol.for("react.module.reference");
    function G(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === o || B || h === s || h === u || h === f || A || h === b || x || R || I || typeof h == "object" && h !== null && (h.$$typeof === l || h.$$typeof === d || h.$$typeof === i || h.$$typeof === a || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === $ || h.getModuleId !== void 0));
    }
    function O(h, P, k) {
      var z = h.displayName;
      if (z)
        return z;
      var V = P.displayName || P.name || "";
      return V !== "" ? k + "(" + V + ")" : k;
    }
    function N(h) {
      return h.displayName || "Context";
    }
    function D(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case a:
            var P = h;
            return N(P) + ".Consumer";
          case i:
            var k = h;
            return N(k._context) + ".Provider";
          case c:
            return O(h, h.render, "ForwardRef");
          case d:
            var z = h.displayName || null;
            return z !== null ? z : D(h.type) || "Memo";
          case l: {
            var V = h, Z = V._payload, H = V._init;
            try {
              return D(H(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, C = 0, S, F, M, q, W, K, oe;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function ae() {
      {
        if (C === 0) {
          S = console.log, F = console.info, M = console.warn, q = console.error, W = console.group, K = console.groupCollapsed, oe = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        C++;
      }
    }
    function ye() {
      {
        if (C--, C === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, h, {
              value: S
            }),
            info: T({}, h, {
              value: F
            }),
            warn: T({}, h, {
              value: M
            }),
            error: T({}, h, {
              value: q
            }),
            group: T({}, h, {
              value: W
            }),
            groupCollapsed: T({}, h, {
              value: K
            }),
            groupEnd: T({}, h, {
              value: oe
            })
          });
        }
        C < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = m.ReactCurrentDispatcher, He;
    function de(h, P, k) {
      {
        if (He === void 0)
          try {
            throw Error();
          } catch (V) {
            var z = V.stack.trim().match(/\n( *(at )?)/);
            He = z && z[1] || "";
          }
        return `
` + He + h;
      }
    }
    var ge = !1, Ce;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new qe();
    }
    function le(h, P) {
      if (!h || ge)
        return "";
      {
        var k = Ce.get(h);
        if (k !== void 0)
          return k;
      }
      var z;
      ge = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = me.current, me.current = null, ae();
      try {
        if (P) {
          var H = function() {
            throw Error();
          };
          if (Object.defineProperty(H.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(H, []);
            } catch (he) {
              z = he;
            }
            Reflect.construct(h, [], H);
          } else {
            try {
              H.call();
            } catch (he) {
              z = he;
            }
            h.call(H.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            z = he;
          }
          h();
        }
      } catch (he) {
        if (he && z && typeof he.stack == "string") {
          for (var U = he.stack.split(`
`), ue = z.stack.split(`
`), J = U.length - 1, Q = ue.length - 1; J >= 1 && Q >= 0 && U[J] !== ue[Q]; )
            Q--;
          for (; J >= 1 && Q >= 0; J--, Q--)
            if (U[J] !== ue[Q]) {
              if (J !== 1 || Q !== 1)
                do
                  if (J--, Q--, Q < 0 || U[J] !== ue[Q]) {
                    var ve = `
` + U[J].replace(" at new ", " at ");
                    return h.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", h.displayName)), typeof h == "function" && Ce.set(h, ve), ve;
                  }
                while (J >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        ge = !1, me.current = Z, ye(), Error.prepareStackTrace = V;
      }
      var pt = h ? h.displayName || h.name : "", rt = pt ? de(pt) : "";
      return typeof h == "function" && Ce.set(h, rt), rt;
    }
    function Ve(h, P, k) {
      return le(h, !1);
    }
    function wn(h) {
      var P = h.prototype;
      return !!(P && P.isReactComponent);
    }
    function nt(h, P, k) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return le(h, wn(h));
      if (typeof h == "string")
        return de(h);
      switch (h) {
        case u:
          return de("Suspense");
        case f:
          return de("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            return Ve(h.render);
          case d:
            return nt(h.type, P, k);
          case l: {
            var z = h, V = z._payload, Z = z._init;
            try {
              return nt(Z(V), P, k);
            } catch {
            }
          }
        }
      return "";
    }
    var Ft = Object.prototype.hasOwnProperty, As = {}, Bs = m.ReactDebugCurrentFrame;
    function vn(h) {
      if (h) {
        var P = h._owner, k = nt(h.type, h._source, P ? P.type : null);
        Bs.setExtraStackFrame(k);
      } else
        Bs.setExtraStackFrame(null);
    }
    function pa(h, P, k, z, V) {
      {
        var Z = Function.call.bind(Ft);
        for (var H in h)
          if (Z(h, H)) {
            var U = void 0;
            try {
              if (typeof h[H] != "function") {
                var ue = Error((z || "React class") + ": " + k + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              U = h[H](P, H, z, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              U = J;
            }
            U && !(U instanceof Error) && (vn(V), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", k, H, typeof U), vn(null)), U instanceof Error && !(U.message in As) && (As[U.message] = !0, vn(V), w("Failed %s type: %s", k, U.message), vn(null));
          }
      }
    }
    var ba = Array.isArray;
    function Wn(h) {
      return ba(h);
    }
    function ya(h) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, k = P && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return k;
      }
    }
    function ma(h) {
      try {
        return $s(h), !1;
      } catch {
        return !0;
      }
    }
    function $s(h) {
      return "" + h;
    }
    function Is(h) {
      if (ma(h))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ya(h)), $s(h);
    }
    var Nt = m.ReactCurrentOwner, ga = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ts, Ss, Yn;
    Yn = {};
    function wa(h) {
      if (Ft.call(h, "ref")) {
        var P = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function va(h) {
      if (Ft.call(h, "key")) {
        var P = Object.getOwnPropertyDescriptor(h, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function xa(h, P) {
      if (typeof h.ref == "string" && Nt.current && P && Nt.current.stateNode !== P) {
        var k = D(Nt.current.type);
        Yn[k] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(Nt.current.type), h.ref), Yn[k] = !0);
      }
    }
    function Ea(h, P) {
      {
        var k = function() {
          Ts || (Ts = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        k.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function Pa(h, P) {
      {
        var k = function() {
          Ss || (Ss = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        k.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var Aa = function(h, P, k, z, V, Z, H) {
      var U = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: P,
        ref: k,
        props: H,
        // Record the component responsible for creating this element.
        _owner: Z
      };
      return U._store = {}, Object.defineProperty(U._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(U, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(U, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    };
    function Ba(h, P, k, z, V) {
      {
        var Z, H = {}, U = null, ue = null;
        k !== void 0 && (Is(k), U = "" + k), va(P) && (Is(P.key), U = "" + P.key), wa(P) && (ue = P.ref, xa(P, V));
        for (Z in P)
          Ft.call(P, Z) && !ga.hasOwnProperty(Z) && (H[Z] = P[Z]);
        if (h && h.defaultProps) {
          var J = h.defaultProps;
          for (Z in J)
            H[Z] === void 0 && (H[Z] = J[Z]);
        }
        if (U || ue) {
          var Q = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          U && Ea(H, Q), ue && Pa(H, Q);
        }
        return Aa(h, U, ue, V, z, Nt.current, H);
      }
    }
    var Kn = m.ReactCurrentOwner, Cs = m.ReactDebugCurrentFrame;
    function ht(h) {
      if (h) {
        var P = h._owner, k = nt(h.type, h._source, P ? P.type : null);
        Cs.setExtraStackFrame(k);
      } else
        Cs.setExtraStackFrame(null);
    }
    var Jn;
    Jn = !1;
    function Xn(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function Rs() {
      {
        if (Kn.current) {
          var h = D(Kn.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function $a(h) {
      {
        if (h !== void 0) {
          var P = h.fileName.replace(/^.*[\\\/]/, ""), k = h.lineNumber;
          return `

Check your code at ` + P + ":" + k + ".";
        }
        return "";
      }
    }
    var ks = {};
    function Ia(h) {
      {
        var P = Rs();
        if (!P) {
          var k = typeof h == "string" ? h : h.displayName || h.name;
          k && (P = `

Check the top-level render call using <` + k + ">.");
        }
        return P;
      }
    }
    function Fs(h, P) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var k = Ia(P);
        if (ks[k])
          return;
        ks[k] = !0;
        var z = "";
        h && h._owner && h._owner !== Kn.current && (z = " It was passed a child from " + D(h._owner.type) + "."), ht(h), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, z), ht(null);
      }
    }
    function Ns(h, P) {
      {
        if (typeof h != "object")
          return;
        if (Wn(h))
          for (var k = 0; k < h.length; k++) {
            var z = h[k];
            Xn(z) && Fs(z, P);
          }
        else if (Xn(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var V = p(h);
          if (typeof V == "function" && V !== h.entries)
            for (var Z = V.call(h), H; !(H = Z.next()).done; )
              Xn(H.value) && Fs(H.value, P);
        }
      }
    }
    function Ta(h) {
      {
        var P = h.type;
        if (P == null || typeof P == "string")
          return;
        var k;
        if (typeof P == "function")
          k = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        P.$$typeof === d))
          k = P.propTypes;
        else
          return;
        if (k) {
          var z = D(P);
          pa(k, h.props, "prop", z, h);
        } else if (P.PropTypes !== void 0 && !Jn) {
          Jn = !0;
          var V = D(P);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Sa(h) {
      {
        for (var P = Object.keys(h.props), k = 0; k < P.length; k++) {
          var z = P[k];
          if (z !== "children" && z !== "key") {
            ht(h), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), ht(null);
            break;
          }
        }
        h.ref !== null && (ht(h), w("Invalid attribute `ref` supplied to `React.Fragment`."), ht(null));
      }
    }
    var Os = {};
    function _s(h, P, k, z, V, Z) {
      {
        var H = G(h);
        if (!H) {
          var U = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = $a(V);
          ue ? U += ue : U += Rs();
          var J;
          h === null ? J = "null" : Wn(h) ? J = "array" : h !== void 0 && h.$$typeof === t ? (J = "<" + (D(h.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : J = typeof h, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, U);
        }
        var Q = Ba(h, P, k, V, Z);
        if (Q == null)
          return Q;
        if (H) {
          var ve = P.children;
          if (ve !== void 0)
            if (z)
              if (Wn(ve)) {
                for (var pt = 0; pt < ve.length; pt++)
                  Ns(ve[pt], h);
                Object.freeze && Object.freeze(ve);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ns(ve, h);
        }
        if (Ft.call(P, "key")) {
          var rt = D(h), he = Object.keys(P).filter(function(Oa) {
            return Oa !== "key";
          }), Qn = he.length > 0 ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Os[rt + Qn]) {
            var Na = he.length > 0 ? "{" + he.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Qn, rt, Na, rt), Os[rt + Qn] = !0;
          }
        }
        return h === r ? Sa(Q) : Ta(Q), Q;
      }
    }
    function Ca(h, P, k) {
      return _s(h, P, k, !0);
    }
    function Ra(h, P, k) {
      return _s(h, P, k, !1);
    }
    var ka = Ra, Fa = Ca;
    _t.Fragment = r, _t.jsx = ka, _t.jsxs = Fa;
  }()), _t;
}
process.env.NODE_ENV === "production" ? hr.exports = za() : hr.exports = Ma();
var Pe = hr.exports;
const ja = "1.0.6";
let Ee = class pr extends Error {
  constructor(t, n = {}) {
    var i;
    const r = n.cause instanceof pr ? n.cause.details : (i = n.cause) != null && i.message ? n.cause.message : n.details, s = n.cause instanceof pr && n.cause.docsPath || n.docsPath, o = [
      t || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...s ? [`Docs: https://abitype.dev${s}`] : [],
      ...r ? [`Details: ${r}`] : [],
      `Version: abitype@${ja}`
    ].join(`
`);
    super(o), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiTypeError"
    }), n.cause && (this.cause = n.cause), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.shortMessage = t;
  }
};
function Qe(e, t) {
  const n = e.exec(t);
  return n == null ? void 0 : n.groups;
}
const Io = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, To = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/, So = /^\(.+?\).*?$/, js = /^tuple(?<array>(\[(\d*)\])*)$/;
function br(e) {
  let t = e.type;
  if (js.test(e.type) && "components" in e) {
    t = "(";
    const n = e.components.length;
    for (let s = 0; s < n; s++) {
      const o = e.components[s];
      t += br(o), s < n - 1 && (t += ", ");
    }
    const r = Qe(js, e.type);
    return t += `)${(r == null ? void 0 : r.array) ?? ""}`, br({
      ...e,
      type: t
    });
  }
  return "indexed" in e && e.indexed && (t = `${t} indexed`), e.name ? `${t} ${e.name}` : t;
}
function zt(e) {
  let t = "";
  const n = e.length;
  for (let r = 0; r < n; r++) {
    const s = e[r];
    t += br(s), r !== n - 1 && (t += ", ");
  }
  return t;
}
function La(e) {
  return e.type === "function" ? `function ${e.name}(${zt(e.inputs)})${e.stateMutability && e.stateMutability !== "nonpayable" ? ` ${e.stateMutability}` : ""}${e.outputs.length ? ` returns (${zt(e.outputs)})` : ""}` : e.type === "event" ? `event ${e.name}(${zt(e.inputs)})` : e.type === "error" ? `error ${e.name}(${zt(e.inputs)})` : e.type === "constructor" ? `constructor(${zt(e.inputs)})${e.stateMutability === "payable" ? " payable" : ""}` : e.type === "fallback" ? "fallback()" : "receive() external payable";
}
const Co = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function Da(e) {
  return Co.test(e);
}
function Ua(e) {
  return Qe(Co, e);
}
const Ro = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function Ga(e) {
  return Ro.test(e);
}
function Ha(e) {
  return Qe(Ro, e);
}
const ko = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function qa(e) {
  return ko.test(e);
}
function Va(e) {
  return Qe(ko, e);
}
const Fo = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function No(e) {
  return Fo.test(e);
}
function Za(e) {
  return Qe(Fo, e);
}
const Oo = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function Wa(e) {
  return Oo.test(e);
}
function Ya(e) {
  return Qe(Oo, e);
}
const Ka = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function Ja(e) {
  return Ka.test(e);
}
const Xa = /^receive\(\) external payable$/;
function Qa(e) {
  return Xa.test(e);
}
const ec = /* @__PURE__ */ new Set(["indexed"]), yr = /* @__PURE__ */ new Set([
  "calldata",
  "memory",
  "storage"
]);
class tc extends Ee {
  constructor({ type: t }) {
    super("Unknown type.", {
      metaMessages: [
        `Type "${t}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownTypeError"
    });
  }
}
class nc extends Ee {
  constructor({ type: t }) {
    super("Unknown type.", {
      metaMessages: [`Type "${t}" is not a valid ABI type.`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownSolidityTypeError"
    });
  }
}
class rc extends Ee {
  constructor({ param: t }) {
    super("Invalid ABI parameter.", {
      details: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidParameterError"
    });
  }
}
class sc extends Ee {
  constructor({ param: t, name: n }) {
    super("Invalid ABI parameter.", {
      details: t,
      metaMessages: [
        `"${n}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SolidityProtectedKeywordError"
    });
  }
}
class oc extends Ee {
  constructor({ param: t, type: n, modifier: r }) {
    super("Invalid ABI parameter.", {
      details: t,
      metaMessages: [
        `Modifier "${r}" not allowed${n ? ` in "${n}" type` : ""}.`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidModifierError"
    });
  }
}
class ic extends Ee {
  constructor({ param: t, type: n, modifier: r }) {
    super("Invalid ABI parameter.", {
      details: t,
      metaMessages: [
        `Modifier "${r}" not allowed${n ? ` in "${n}" type` : ""}.`,
        `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidFunctionModifierError"
    });
  }
}
class ac extends Ee {
  constructor({ abiParameter: t }) {
    super("Invalid ABI parameter.", {
      details: JSON.stringify(t, null, 2),
      metaMessages: ["ABI parameter type is invalid."]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiTypeParameterError"
    });
  }
}
class Dt extends Ee {
  constructor({ signature: t, type: n }) {
    super(`Invalid ${n} signature.`, {
      details: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidSignatureError"
    });
  }
}
class cc extends Ee {
  constructor({ signature: t }) {
    super("Unknown signature.", {
      details: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownSignatureError"
    });
  }
}
class uc extends Ee {
  constructor({ signature: t }) {
    super("Invalid struct signature.", {
      details: t,
      metaMessages: ["No properties exist."]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidStructSignatureError"
    });
  }
}
class fc extends Ee {
  constructor({ type: t }) {
    super("Circular reference detected.", {
      metaMessages: [`Struct "${t}" is a circular reference.`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "CircularReferenceError"
    });
  }
}
class dc extends Ee {
  constructor({ current: t, depth: n }) {
    super("Unbalanced parentheses.", {
      metaMessages: [
        `"${t.trim()}" has too many ${n > 0 ? "opening" : "closing"} parentheses.`
      ],
      details: `Depth "${n}"`
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidParenthesisError"
    });
  }
}
function lc(e, t) {
  return t ? `${t}:${e}` : e;
}
const er = /* @__PURE__ */ new Map([
  // Unnamed
  ["address", { type: "address" }],
  ["bool", { type: "bool" }],
  ["bytes", { type: "bytes" }],
  ["bytes32", { type: "bytes32" }],
  ["int", { type: "int256" }],
  ["int256", { type: "int256" }],
  ["string", { type: "string" }],
  ["uint", { type: "uint256" }],
  ["uint8", { type: "uint8" }],
  ["uint16", { type: "uint16" }],
  ["uint24", { type: "uint24" }],
  ["uint32", { type: "uint32" }],
  ["uint64", { type: "uint64" }],
  ["uint96", { type: "uint96" }],
  ["uint112", { type: "uint112" }],
  ["uint160", { type: "uint160" }],
  ["uint192", { type: "uint192" }],
  ["uint256", { type: "uint256" }],
  // Named
  ["address owner", { type: "address", name: "owner" }],
  ["address to", { type: "address", name: "to" }],
  ["bool approved", { type: "bool", name: "approved" }],
  ["bytes _data", { type: "bytes", name: "_data" }],
  ["bytes data", { type: "bytes", name: "data" }],
  ["bytes signature", { type: "bytes", name: "signature" }],
  ["bytes32 hash", { type: "bytes32", name: "hash" }],
  ["bytes32 r", { type: "bytes32", name: "r" }],
  ["bytes32 root", { type: "bytes32", name: "root" }],
  ["bytes32 s", { type: "bytes32", name: "s" }],
  ["string name", { type: "string", name: "name" }],
  ["string symbol", { type: "string", name: "symbol" }],
  ["string tokenURI", { type: "string", name: "tokenURI" }],
  ["uint tokenId", { type: "uint256", name: "tokenId" }],
  ["uint8 v", { type: "uint8", name: "v" }],
  ["uint256 balance", { type: "uint256", name: "balance" }],
  ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
  ["uint256 value", { type: "uint256", name: "value" }],
  // Indexed
  [
    "event:address indexed from",
    { type: "address", name: "from", indexed: !0 }
  ],
  ["event:address indexed to", { type: "address", name: "to", indexed: !0 }],
  [
    "event:uint indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 }
  ],
  [
    "event:uint256 indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 }
  ]
]);
function hc(e, t = {}) {
  if (qa(e)) {
    const n = Va(e);
    if (!n)
      throw new Dt({ signature: e, type: "function" });
    const r = Be(n.parameters), s = [], o = r.length;
    for (let a = 0; a < o; a++)
      s.push(st(r[a], {
        modifiers: yr,
        structs: t,
        type: "function"
      }));
    const i = [];
    if (n.returns) {
      const a = Be(n.returns), c = a.length;
      for (let u = 0; u < c; u++)
        i.push(st(a[u], {
          modifiers: yr,
          structs: t,
          type: "function"
        }));
    }
    return {
      name: n.name,
      type: "function",
      stateMutability: n.stateMutability ?? "nonpayable",
      inputs: s,
      outputs: i
    };
  }
  if (Ga(e)) {
    const n = Ha(e);
    if (!n)
      throw new Dt({ signature: e, type: "event" });
    const r = Be(n.parameters), s = [], o = r.length;
    for (let i = 0; i < o; i++)
      s.push(st(r[i], {
        modifiers: ec,
        structs: t,
        type: "event"
      }));
    return { name: n.name, type: "event", inputs: s };
  }
  if (Da(e)) {
    const n = Ua(e);
    if (!n)
      throw new Dt({ signature: e, type: "error" });
    const r = Be(n.parameters), s = [], o = r.length;
    for (let i = 0; i < o; i++)
      s.push(st(r[i], { structs: t, type: "error" }));
    return { name: n.name, type: "error", inputs: s };
  }
  if (Wa(e)) {
    const n = Ya(e);
    if (!n)
      throw new Dt({ signature: e, type: "constructor" });
    const r = Be(n.parameters), s = [], o = r.length;
    for (let i = 0; i < o; i++)
      s.push(st(r[i], { structs: t, type: "constructor" }));
    return {
      type: "constructor",
      stateMutability: n.stateMutability ?? "nonpayable",
      inputs: s
    };
  }
  if (Ja(e))
    return { type: "fallback" };
  if (Qa(e))
    return {
      type: "receive",
      stateMutability: "payable"
    };
  throw new cc({ signature: e });
}
const pc = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/, bc = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/, yc = /^u?int$/;
function st(e, t) {
  var d, l;
  const n = lc(e, t == null ? void 0 : t.type);
  if (er.has(n))
    return er.get(n);
  const r = So.test(e), s = Qe(r ? bc : pc, e);
  if (!s)
    throw new rc({ param: e });
  if (s.name && gc(s.name))
    throw new sc({ param: e, name: s.name });
  const o = s.name ? { name: s.name } : {}, i = s.modifier === "indexed" ? { indexed: !0 } : {}, a = (t == null ? void 0 : t.structs) ?? {};
  let c, u = {};
  if (r) {
    c = "tuple";
    const b = Be(s.type), g = [], y = b.length;
    for (let p = 0; p < y; p++)
      g.push(st(b[p], { structs: a }));
    u = { components: g };
  } else if (s.type in a)
    c = "tuple", u = { components: a[s.type] };
  else if (yc.test(s.type))
    c = `${s.type}256`;
  else if (c = s.type, (t == null ? void 0 : t.type) !== "struct" && !_o(c))
    throw new nc({ type: c });
  if (s.modifier) {
    if (!((l = (d = t == null ? void 0 : t.modifiers) == null ? void 0 : d.has) != null && l.call(d, s.modifier)))
      throw new oc({
        param: e,
        type: t == null ? void 0 : t.type,
        modifier: s.modifier
      });
    if (yr.has(s.modifier) && !wc(c, !!s.array))
      throw new ic({
        param: e,
        type: t == null ? void 0 : t.type,
        modifier: s.modifier
      });
  }
  const f = {
    type: `${c}${s.array ?? ""}`,
    ...o,
    ...i,
    ...u
  };
  return er.set(n, f), f;
}
function Be(e, t = [], n = "", r = 0) {
  const s = e.trim().length;
  for (let o = 0; o < s; o++) {
    const i = e[o], a = e.slice(o + 1);
    switch (i) {
      case ",":
        return r === 0 ? Be(a, [...t, n.trim()]) : Be(a, t, `${n}${i}`, r);
      case "(":
        return Be(a, t, `${n}${i}`, r + 1);
      case ")":
        return Be(a, t, `${n}${i}`, r - 1);
      default:
        return Be(a, t, `${n}${i}`, r);
    }
  }
  if (n === "")
    return t;
  if (r !== 0)
    throw new dc({ current: n, depth: r });
  return t.push(n.trim()), t;
}
function _o(e) {
  return e === "address" || e === "bool" || e === "function" || e === "string" || Io.test(e) || To.test(e);
}
const mc = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function gc(e) {
  return e === "address" || e === "bool" || e === "function" || e === "string" || e === "tuple" || Io.test(e) || To.test(e) || mc.test(e);
}
function wc(e, t) {
  return t || e === "bytes" || e === "string" || e === "tuple";
}
function vc(e) {
  const t = {}, n = e.length;
  for (let i = 0; i < n; i++) {
    const a = e[i];
    if (!No(a))
      continue;
    const c = Za(a);
    if (!c)
      throw new Dt({ signature: a, type: "struct" });
    const u = c.properties.split(";"), f = [], d = u.length;
    for (let l = 0; l < d; l++) {
      const g = u[l].trim();
      if (!g)
        continue;
      const y = st(g, {
        type: "struct"
      });
      f.push(y);
    }
    if (!f.length)
      throw new uc({ signature: a });
    t[c.name] = f;
  }
  const r = {}, s = Object.entries(t), o = s.length;
  for (let i = 0; i < o; i++) {
    const [a, c] = s[i];
    r[a] = zo(c, t);
  }
  return r;
}
const xc = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function zo(e, t, n = /* @__PURE__ */ new Set()) {
  const r = [], s = e.length;
  for (let o = 0; o < s; o++) {
    const i = e[o];
    if (So.test(i.type))
      r.push(i);
    else {
      const c = Qe(xc, i.type);
      if (!(c != null && c.type))
        throw new ac({ abiParameter: i });
      const { array: u, type: f } = c;
      if (f in t) {
        if (n.has(f))
          throw new fc({ type: f });
        r.push({
          ...i,
          type: `tuple${u ?? ""}`,
          components: zo(t[f] ?? [], t, /* @__PURE__ */ new Set([...n, f]))
        });
      } else if (_o(f))
        r.push(i);
      else
        throw new tc({ type: f });
    }
  }
  return r;
}
function Mo(e) {
  const t = vc(e), n = [], r = e.length;
  for (let s = 0; s < r; s++) {
    const o = e[s];
    No(o) || n.push(hc(o, t));
  }
  return n;
}
function L(e, t, n) {
  const r = e[t.name];
  if (typeof r == "function")
    return r;
  const s = e[n];
  return typeof s == "function" ? s : (o) => t(e, o);
}
function De(e, { includeName: t = !1 } = {}) {
  if (e.type !== "function" && e.type !== "event" && e.type !== "error")
    throw new Nc(e.type);
  return `${e.name}(${Sn(e.inputs, { includeName: t })})`;
}
function Sn(e, { includeName: t = !1 } = {}) {
  return e ? e.map((n) => Ec(n, { includeName: t })).join(t ? ", " : ",") : "";
}
function Ec(e, { includeName: t }) {
  return e.type.startsWith("tuple") ? `(${Sn(e.components, { includeName: t })})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "");
}
function ke(e, { strict: t = !0 } = {}) {
  return !e || typeof e != "string" ? !1 : t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x");
}
function Y(e) {
  return ke(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
}
const jo = "2.21.28";
let xn = {
  getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: n }) => t ? `${e ?? "https://viem.sh"}${t}${n ? `#${n}` : ""}` : void 0,
  version: jo
};
class E extends Error {
  constructor(t, n = {}) {
    var a;
    const r = (() => {
      var c;
      return n.cause instanceof E ? n.cause.details : (c = n.cause) != null && c.message ? n.cause.message : n.details;
    })(), s = (() => n.cause instanceof E && n.cause.docsPath || n.docsPath)(), o = (a = xn.getDocsUrl) == null ? void 0 : a.call(xn, { ...n, docsPath: s }), i = [
      t || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...o ? [`Docs: ${o}`] : [],
      ...r ? [`Details: ${r}`] : [],
      `Version: ${xn.version}`
    ].join(`
`);
    super(i, n.cause ? { cause: n.cause } : void 0), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BaseError"
    }), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.name = n.name ?? this.name, this.shortMessage = t, this.version = jo;
  }
  walk(t) {
    return Lo(this, t);
  }
}
function Lo(e, t) {
  return t != null && t(e) ? e : e && typeof e == "object" && "cause" in e ? Lo(e.cause, t) : t ? null : e;
}
class Pc extends E {
  constructor({ docsPath: t }) {
    super([
      "A constructor was not found on the ABI.",
      "Make sure you are using the correct ABI and that the constructor exists on it."
    ].join(`
`), {
      docsPath: t,
      name: "AbiConstructorNotFoundError"
    });
  }
}
class Ls extends E {
  constructor({ docsPath: t }) {
    super([
      "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
      "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."
    ].join(`
`), {
      docsPath: t,
      name: "AbiConstructorParamsNotFoundError"
    });
  }
}
class Do extends E {
  constructor({ data: t, params: n, size: r }) {
    super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`), {
      metaMessages: [
        `Params: (${Sn(n, { includeName: !0 })})`,
        `Data:   ${t} (${r} bytes)`
      ],
      name: "AbiDecodingDataSizeTooSmallError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = t, this.params = n, this.size = r;
  }
}
class Cn extends E {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.', {
      name: "AbiDecodingZeroDataError"
    });
  }
}
class Ac extends E {
  constructor({ expectedLength: t, givenLength: n, type: r }) {
    super([
      `ABI encoding array length mismatch for type ${r}.`,
      `Expected length: ${t}`,
      `Given length: ${n}`
    ].join(`
`), { name: "AbiEncodingArrayLengthMismatchError" });
  }
}
class Bc extends E {
  constructor({ expectedSize: t, value: n }) {
    super(`Size of bytes "${n}" (bytes${Y(n)}) does not match expected size (bytes${t}).`, { name: "AbiEncodingBytesSizeMismatchError" });
  }
}
class $c extends E {
  constructor({ expectedLength: t, givenLength: n }) {
    super([
      "ABI encoding params/values length mismatch.",
      `Expected length (params): ${t}`,
      `Given length (values): ${n}`
    ].join(`
`), { name: "AbiEncodingLengthMismatchError" });
  }
}
class Uo extends E {
  constructor(t, { docsPath: n }) {
    super([
      `Encoded error signature "${t}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`
    ].join(`
`), {
      docsPath: n,
      name: "AbiErrorSignatureNotFoundError"
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.signature = t;
  }
}
class Ic extends E {
  constructor({ docsPath: t }) {
    super("Cannot extract event signature from empty topics.", {
      docsPath: t,
      name: "AbiEventSignatureEmptyTopicsError"
    });
  }
}
class Go extends E {
  constructor(t, { docsPath: n }) {
    super([
      `Encoded event signature "${t}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it.",
      `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`
    ].join(`
`), {
      docsPath: n,
      name: "AbiEventSignatureNotFoundError"
    });
  }
}
class Ds extends E {
  constructor(t, { docsPath: n } = {}) {
    super([
      `Event ${t ? `"${t}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiEventNotFoundError"
    });
  }
}
class In extends E {
  constructor(t, { docsPath: n } = {}) {
    super([
      `Function ${t ? `"${t}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiFunctionNotFoundError"
    });
  }
}
class Tc extends E {
  constructor(t, { docsPath: n }) {
    super([
      `Function "${t}" does not contain any \`outputs\` on ABI.`,
      "Cannot decode function result without knowing what the parameter types are.",
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiFunctionOutputsNotFoundError"
    });
  }
}
class Sc extends E {
  constructor(t, n) {
    super("Found ambiguous types in overloaded ABI items.", {
      metaMessages: [
        `\`${t.type}\` in \`${De(t.abiItem)}\`, and`,
        `\`${n.type}\` in \`${De(n.abiItem)}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ],
      name: "AbiItemAmbiguityError"
    });
  }
}
class Cc extends E {
  constructor({ expectedSize: t, givenSize: n }) {
    super(`Expected bytes${t}, got bytes${n}.`, {
      name: "BytesSizeMismatchError"
    });
  }
}
class Gt extends E {
  constructor({ abiItem: t, data: n, params: r, size: s }) {
    super([
      `Data size of ${s} bytes is too small for non-indexed event parameters.`
    ].join(`
`), {
      metaMessages: [
        `Params: (${Sn(r, { includeName: !0 })})`,
        `Data:   ${n} (${s} bytes)`
      ],
      name: "DecodeLogDataMismatch"
    }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = t, this.data = n, this.params = r, this.size = s;
  }
}
class Rn extends E {
  constructor({ abiItem: t, param: n }) {
    super([
      `Expected a topic for indexed event parameter${n.name ? ` "${n.name}"` : ""} on event "${De(t, { includeName: !0 })}".`
    ].join(`
`), { name: "DecodeLogTopicsMismatch" }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = t;
  }
}
class Rc extends E {
  constructor(t, { docsPath: n }) {
    super([
      `Type "${t}" is not a valid encoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: n, name: "InvalidAbiEncodingType" });
  }
}
class kc extends E {
  constructor(t, { docsPath: n }) {
    super([
      `Type "${t}" is not a valid decoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: n, name: "InvalidAbiDecodingType" });
  }
}
class Fc extends E {
  constructor(t) {
    super([`Value "${t}" is not a valid array.`].join(`
`), {
      name: "InvalidArrayError"
    });
  }
}
class Nc extends E {
  constructor(t) {
    super([
      `"${t}" is not a valid definition type.`,
      'Valid types: "function", "event", "error"'
    ].join(`
`), { name: "InvalidDefinitionTypeError" });
  }
}
class Oc extends E {
  constructor(t) {
    super(`Filter type "${t}" is not supported.`, {
      name: "FilterTypeNotSupportedError"
    });
  }
}
class Ho extends E {
  constructor({ offset: t, position: n, size: r }) {
    super(`Slice ${n === "start" ? "starting" : "ending"} at offset "${t}" is out-of-bounds (size: ${r}).`, { name: "SliceOffsetOutOfBoundsError" });
  }
}
class qo extends E {
  constructor({ size: t, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`, { name: "SizeExceedsPaddingSizeError" });
  }
}
class Us extends E {
  constructor({ size: t, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${n} ${r} long, but is ${t} ${r} long.`, { name: "InvalidBytesLengthError" });
  }
}
function It(e, { dir: t, size: n = 32 } = {}) {
  return typeof e == "string" ? Ye(e, { dir: t, size: n }) : _c(e, { dir: t, size: n });
}
function Ye(e, { dir: t, size: n = 32 } = {}) {
  if (n === null)
    return e;
  const r = e.replace("0x", "");
  if (r.length > n * 2)
    throw new qo({
      size: Math.ceil(r.length / 2),
      targetSize: n,
      type: "hex"
    });
  return `0x${r[t === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
}
function _c(e, { dir: t, size: n = 32 } = {}) {
  if (n === null)
    return e;
  if (e.length > n)
    throw new qo({
      size: e.length,
      targetSize: n,
      type: "bytes"
    });
  const r = new Uint8Array(n);
  for (let s = 0; s < n; s++) {
    const o = t === "right";
    r[o ? s : n - s - 1] = e[o ? s : e.length - s - 1];
  }
  return r;
}
class zc extends E {
  constructor({ max: t, min: n, signed: r, size: s, value: o }) {
    super(`Number "${o}" is not in safe ${s ? `${s * 8}-bit ${r ? "signed" : "unsigned"} ` : ""}integer range ${t ? `(${n} to ${t})` : `(above ${n})`}`, { name: "IntegerOutOfRangeError" });
  }
}
class Mc extends E {
  constructor(t) {
    super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
      name: "InvalidBytesBooleanError"
    });
  }
}
class jc extends E {
  constructor(t) {
    super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, { name: "InvalidHexBooleanError" });
  }
}
class Lc extends E {
  constructor({ givenSize: t, maxSize: n }) {
    super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`, { name: "SizeOverflowError" });
  }
}
function $e(e, { dir: t = "left" } = {}) {
  let n = typeof e == "string" ? e.replace("0x", "") : e, r = 0;
  for (let s = 0; s < n.length - 1 && n[t === "left" ? s : n.length - s - 1].toString() === "0"; s++)
    r++;
  return n = t === "left" ? n.slice(r) : n.slice(0, n.length - r), typeof e == "string" ? (n.length === 1 && t === "right" && (n = `${n}0`), `0x${n.length % 2 === 1 ? `0${n}` : n}`) : n;
}
function Se(e, { size: t }) {
  if (Y(e) > t)
    throw new Lc({
      givenSize: Y(e),
      maxSize: t
    });
}
function we(e, t = {}) {
  const { signed: n } = t;
  t.size && Se(e, { size: t.size });
  const r = BigInt(e);
  if (!n)
    return r;
  const s = (e.length - 2) / 2, o = (1n << BigInt(s) * 8n - 1n) - 1n;
  return r <= o ? r : r - BigInt(`0x${"f".padStart(s * 2, "f")}`) - 1n;
}
function Dc(e, t = {}) {
  let n = e;
  if (t.size && (Se(n, { size: t.size }), n = $e(n)), $e(n) === "0x00")
    return !1;
  if ($e(n) === "0x01")
    return !0;
  throw new jc(n);
}
function Fe(e, t = {}) {
  return Number(we(e, t));
}
const Uc = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function _(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? j(e, t) : typeof e == "string" ? Ht(e, t) : typeof e == "boolean" ? Vo(e, t) : ee(e, t);
}
function Vo(e, t = {}) {
  const n = `0x${Number(e)}`;
  return typeof t.size == "number" ? (Se(n, { size: t.size }), It(n, { size: t.size })) : n;
}
function ee(e, t = {}) {
  let n = "";
  for (let s = 0; s < e.length; s++)
    n += Uc[e[s]];
  const r = `0x${n}`;
  return typeof t.size == "number" ? (Se(r, { size: t.size }), It(r, { dir: "right", size: t.size })) : r;
}
function j(e, t = {}) {
  const { signed: n, size: r } = t, s = BigInt(e);
  let o;
  r ? n ? o = (1n << BigInt(r) * 8n - 1n) - 1n : o = 2n ** (BigInt(r) * 8n) - 1n : typeof e == "number" && (o = BigInt(Number.MAX_SAFE_INTEGER));
  const i = typeof o == "bigint" && n ? -o - 1n : 0;
  if (o && s > o || s < i) {
    const c = typeof e == "bigint" ? "n" : "";
    throw new zc({
      max: o ? `${o}${c}` : void 0,
      min: `${i}${c}`,
      signed: n,
      size: r,
      value: `${e}${c}`
    });
  }
  const a = `0x${(n && s < 0 ? (1n << BigInt(r * 8)) + BigInt(s) : s).toString(16)}`;
  return r ? It(a, { size: r }) : a;
}
const Gc = /* @__PURE__ */ new TextEncoder();
function Ht(e, t = {}) {
  const n = Gc.encode(e);
  return ee(n, t);
}
const Hc = /* @__PURE__ */ new TextEncoder();
function Tt(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? Vc(e, t) : typeof e == "boolean" ? qc(e, t) : ke(e) ? Te(e, t) : it(e, t);
}
function qc(e, t = {}) {
  const n = new Uint8Array(1);
  return n[0] = Number(e), typeof t.size == "number" ? (Se(n, { size: t.size }), It(n, { size: t.size })) : n;
}
const Oe = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function Gs(e) {
  if (e >= Oe.zero && e <= Oe.nine)
    return e - Oe.zero;
  if (e >= Oe.A && e <= Oe.F)
    return e - (Oe.A - 10);
  if (e >= Oe.a && e <= Oe.f)
    return e - (Oe.a - 10);
}
function Te(e, t = {}) {
  let n = e;
  t.size && (Se(n, { size: t.size }), n = It(n, { dir: "right", size: t.size }));
  let r = n.slice(2);
  r.length % 2 && (r = `0${r}`);
  const s = r.length / 2, o = new Uint8Array(s);
  for (let i = 0, a = 0; i < s; i++) {
    const c = Gs(r.charCodeAt(a++)), u = Gs(r.charCodeAt(a++));
    if (c === void 0 || u === void 0)
      throw new E(`Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`);
    o[i] = c * 16 + u;
  }
  return o;
}
function Vc(e, t) {
  const n = j(e, t);
  return Te(n);
}
function it(e, t = {}) {
  const n = Hc.encode(e);
  return typeof t.size == "number" ? (Se(n, { size: t.size }), It(n, { dir: "right", size: t.size })) : n;
}
function Tn(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`positive integer expected, not ${e}`);
}
function Zc(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function dn(e, ...t) {
  if (!Zc(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
function Wc(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Tn(e.outputLen), Tn(e.blockLen);
}
function xt(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Zo(e, t) {
  dn(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const En = /* @__PURE__ */ BigInt(2 ** 32 - 1), Hs = /* @__PURE__ */ BigInt(32);
function Yc(e, t = !1) {
  return t ? { h: Number(e & En), l: Number(e >> Hs & En) } : { h: Number(e >> Hs & En) | 0, l: Number(e & En) | 0 };
}
function Kc(e, t = !1) {
  let n = new Uint32Array(e.length), r = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: o, l: i } = Yc(e[s], t);
    [n[s], r[s]] = [o, i];
  }
  return [n, r];
}
const Jc = (e, t, n) => e << n | t >>> 32 - n, Xc = (e, t, n) => t << n | e >>> 32 - n, Qc = (e, t, n) => t << n - 32 | e >>> 64 - n, eu = (e, t, n) => e << n - 32 | t >>> 64 - n, yt = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const tu = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), tr = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength), Re = (e, t) => e << 32 - t | e >>> t, qs = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, nu = (e) => e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
function Vs(e) {
  for (let t = 0; t < e.length; t++)
    e[t] = nu(e[t]);
}
function ru(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function kn(e) {
  return typeof e == "string" && (e = ru(e)), dn(e), e;
}
function su(...e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    dn(s), t += s.length;
  }
  const n = new Uint8Array(t);
  for (let r = 0, s = 0; r < e.length; r++) {
    const o = e[r];
    n.set(o, s), s += o.length;
  }
  return n;
}
class Lr {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function Wo(e) {
  const t = (r) => e().update(kn(r)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function ou(e = 32) {
  if (yt && typeof yt.getRandomValues == "function")
    return yt.getRandomValues(new Uint8Array(e));
  if (yt && typeof yt.randomBytes == "function")
    return yt.randomBytes(e);
  throw new Error("crypto.getRandomValues must be defined");
}
const Yo = [], Ko = [], Jo = [], iu = /* @__PURE__ */ BigInt(0), Mt = /* @__PURE__ */ BigInt(1), au = /* @__PURE__ */ BigInt(2), cu = /* @__PURE__ */ BigInt(7), uu = /* @__PURE__ */ BigInt(256), fu = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = Mt, n = 1, r = 0; e < 24; e++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], Yo.push(2 * (5 * r + n)), Ko.push((e + 1) * (e + 2) / 2 % 64);
  let s = iu;
  for (let o = 0; o < 7; o++)
    t = (t << Mt ^ (t >> cu) * fu) % uu, t & au && (s ^= Mt << (Mt << /* @__PURE__ */ BigInt(o)) - Mt);
  Jo.push(s);
}
const [du, lu] = /* @__PURE__ */ Kc(Jo, !0), Zs = (e, t, n) => n > 32 ? Qc(e, t, n) : Jc(e, t, n), Ws = (e, t, n) => n > 32 ? eu(e, t, n) : Xc(e, t, n);
function hu(e, t = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - t; r < 24; r++) {
    for (let i = 0; i < 10; i++)
      n[i] = e[i] ^ e[i + 10] ^ e[i + 20] ^ e[i + 30] ^ e[i + 40];
    for (let i = 0; i < 10; i += 2) {
      const a = (i + 8) % 10, c = (i + 2) % 10, u = n[c], f = n[c + 1], d = Zs(u, f, 1) ^ n[a], l = Ws(u, f, 1) ^ n[a + 1];
      for (let b = 0; b < 50; b += 10)
        e[i + b] ^= d, e[i + b + 1] ^= l;
    }
    let s = e[2], o = e[3];
    for (let i = 0; i < 24; i++) {
      const a = Ko[i], c = Zs(s, o, a), u = Ws(s, o, a), f = Yo[i];
      s = e[f], o = e[f + 1], e[f] = c, e[f + 1] = u;
    }
    for (let i = 0; i < 50; i += 10) {
      for (let a = 0; a < 10; a++)
        n[a] = e[i + a];
      for (let a = 0; a < 10; a++)
        e[i + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10];
    }
    e[0] ^= du[r], e[1] ^= lu[r];
  }
  n.fill(0);
}
class Dr extends Lr {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, n, r, s = !1, o = 24) {
    if (super(), this.blockLen = t, this.suffix = n, this.outputLen = r, this.enableXOF = s, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, Tn(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = tu(this.state);
  }
  keccak() {
    qs || Vs(this.state32), hu(this.state32, this.rounds), qs || Vs(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    xt(this);
    const { blockLen: n, state: r } = this;
    t = kn(t);
    const s = t.length;
    for (let o = 0; o < s; ) {
      const i = Math.min(n - this.pos, s - o);
      for (let a = 0; a < i; a++)
        r[this.pos++] ^= t[o++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: n, pos: r, blockLen: s } = this;
    t[r] ^= n, n & 128 && r === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    xt(this, !1), dn(t), this.finish();
    const n = this.state, { blockLen: r } = this;
    for (let s = 0, o = t.length; s < o; ) {
      this.posOut >= r && this.keccak();
      const i = Math.min(r - this.posOut, o - s);
      t.set(n.subarray(this.posOut, this.posOut + i), s), this.posOut += i, s += i;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return Tn(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (Zo(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: n, suffix: r, outputLen: s, rounds: o, enableXOF: i } = this;
    return t || (t = new Dr(n, r, s, i, o)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = r, t.outputLen = s, t.enableXOF = i, t.destroyed = this.destroyed, t;
  }
}
const pu = (e, t, n) => Wo(() => new Dr(t, e, n)), bu = /* @__PURE__ */ pu(1, 136, 256 / 8);
function ne(e, t) {
  const n = t || "hex", r = bu(ke(e, { strict: !1 }) ? Tt(e) : e);
  return n === "bytes" ? r : _(r);
}
const yu = (e) => ne(Tt(e));
function mu(e) {
  return yu(e);
}
function gu(e) {
  let t = !0, n = "", r = 0, s = "", o = !1;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (["(", ")", ","].includes(a) && (t = !0), a === "(" && r++, a === ")" && r--, !!t) {
      if (r === 0) {
        if (a === " " && ["event", "function", ""].includes(s))
          s = "";
        else if (s += a, a === ")") {
          o = !0;
          break;
        }
        continue;
      }
      if (a === " ") {
        e[i - 1] !== "," && n !== "," && n !== ",(" && (n = "", t = !1);
        continue;
      }
      s += a, n += a;
    }
  }
  if (!o)
    throw new E("Unable to normalize signature.");
  return s;
}
const wu = (e) => {
  const t = (() => typeof e == "string" ? e : La(e))();
  return gu(t);
};
function Xo(e) {
  return mu(wu(e));
}
const Fn = Xo;
class fe extends E {
  constructor({ address: t }) {
    super(`Address "${t}" is invalid.`, {
      metaMessages: [
        "- Address must be a hex value of 20 bytes (40 hex characters).",
        "- Address must match its checksum counterpart."
      ],
      name: "InvalidAddressError"
    });
  }
}
class Ur extends Map {
  constructor(t) {
    super(), Object.defineProperty(this, "maxSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.maxSize = t;
  }
  get(t) {
    const n = super.get(t);
    return super.has(t) && n !== void 0 && (this.delete(t), super.set(t, n)), n;
  }
  set(t, n) {
    if (super.set(t, n), this.maxSize && this.size > this.maxSize) {
      const r = this.keys().next().value;
      r && this.delete(r);
    }
    return this;
  }
}
const nr = /* @__PURE__ */ new Ur(8192);
function Nn(e, t) {
  if (nr.has(`${e}.${t}`))
    return nr.get(`${e}.${t}`);
  const n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(), r = ne(it(n), "bytes"), s = (t ? n.substring(`${t}0x`.length) : n).split("");
  for (let i = 0; i < 40; i += 2)
    r[i >> 1] >> 4 >= 8 && s[i] && (s[i] = s[i].toUpperCase()), (r[i >> 1] & 15) >= 8 && s[i + 1] && (s[i + 1] = s[i + 1].toUpperCase());
  const o = `0x${s.join("")}`;
  return nr.set(`${e}.${t}`, o), o;
}
function vu(e, t) {
  if (!se(e, { strict: !1 }))
    throw new fe({ address: e });
  return Nn(e, t);
}
const xu = /^0x[a-fA-F0-9]{40}$/, rr = /* @__PURE__ */ new Ur(8192);
function se(e, t) {
  const { strict: n = !0 } = t ?? {}, r = `${e}.${n}`;
  if (rr.has(r))
    return rr.get(r);
  const s = (() => xu.test(e) ? e.toLowerCase() === e ? !0 : n ? Nn(e) === e : !0 : !1)();
  return rr.set(r, s), s;
}
function Ue(e) {
  return typeof e[0] == "string" ? Ne(e) : Eu(e);
}
function Eu(e) {
  let t = 0;
  for (const s of e)
    t += s.length;
  const n = new Uint8Array(t);
  let r = 0;
  for (const s of e)
    n.set(s, r), r += s.length;
  return n;
}
function Ne(e) {
  return `0x${e.reduce((t, n) => t + n.replace("0x", ""), "")}`;
}
function qt(e, t, n, { strict: r } = {}) {
  return ke(e, { strict: !1 }) ? ni(e, t, n, {
    strict: r
  }) : ti(e, t, n, {
    strict: r
  });
}
function Qo(e, t) {
  if (typeof t == "number" && t > 0 && t > Y(e) - 1)
    throw new Ho({
      offset: t,
      position: "start",
      size: Y(e)
    });
}
function ei(e, t, n) {
  if (typeof t == "number" && typeof n == "number" && Y(e) !== n - t)
    throw new Ho({
      offset: n,
      position: "end",
      size: Y(e)
    });
}
function ti(e, t, n, { strict: r } = {}) {
  Qo(e, t);
  const s = e.slice(t, n);
  return r && ei(s, t, n), s;
}
function ni(e, t, n, { strict: r } = {}) {
  Qo(e, t);
  const s = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
  return r && ei(s, t, n), s;
}
function St(e, t) {
  if (e.length !== t.length)
    throw new $c({
      expectedLength: e.length,
      givenLength: t.length
    });
  const n = Pu({
    params: e,
    values: t
  }), r = Hr(n);
  return r.length === 0 ? "0x" : r;
}
function Pu({ params: e, values: t }) {
  const n = [];
  for (let r = 0; r < e.length; r++)
    n.push(Gr({ param: e[r], value: t[r] }));
  return n;
}
function Gr({ param: e, value: t }) {
  const n = qr(e.type);
  if (n) {
    const [r, s] = n;
    return Bu(t, { length: r, param: { ...e, type: s } });
  }
  if (e.type === "tuple")
    return Cu(t, {
      param: e
    });
  if (e.type === "address")
    return Au(t);
  if (e.type === "bool")
    return Iu(t);
  if (e.type.startsWith("uint") || e.type.startsWith("int")) {
    const r = e.type.startsWith("int");
    return Tu(t, { signed: r });
  }
  if (e.type.startsWith("bytes"))
    return $u(t, { param: e });
  if (e.type === "string")
    return Su(t);
  throw new Rc(e.type, {
    docsPath: "/docs/contract/encodeAbiParameters"
  });
}
function Hr(e) {
  let t = 0;
  for (let o = 0; o < e.length; o++) {
    const { dynamic: i, encoded: a } = e[o];
    i ? t += 32 : t += Y(a);
  }
  const n = [], r = [];
  let s = 0;
  for (let o = 0; o < e.length; o++) {
    const { dynamic: i, encoded: a } = e[o];
    i ? (n.push(j(t + s, { size: 32 })), r.push(a), s += Y(a)) : n.push(a);
  }
  return Ue([...n, ...r]);
}
function Au(e) {
  if (!se(e))
    throw new fe({ address: e });
  return { dynamic: !1, encoded: Ye(e.toLowerCase()) };
}
function Bu(e, { length: t, param: n }) {
  const r = t === null;
  if (!Array.isArray(e))
    throw new Fc(e);
  if (!r && e.length !== t)
    throw new Ac({
      expectedLength: t,
      givenLength: e.length,
      type: `${n.type}[${t}]`
    });
  let s = !1;
  const o = [];
  for (let i = 0; i < e.length; i++) {
    const a = Gr({ param: n, value: e[i] });
    a.dynamic && (s = !0), o.push(a);
  }
  if (r || s) {
    const i = Hr(o);
    if (r) {
      const a = j(o.length, { size: 32 });
      return {
        dynamic: !0,
        encoded: o.length > 0 ? Ue([a, i]) : a
      };
    }
    if (s)
      return { dynamic: !0, encoded: i };
  }
  return {
    dynamic: !1,
    encoded: Ue(o.map(({ encoded: i }) => i))
  };
}
function $u(e, { param: t }) {
  const [, n] = t.type.split("bytes"), r = Y(e);
  if (!n) {
    let s = e;
    return r % 32 !== 0 && (s = Ye(s, {
      dir: "right",
      size: Math.ceil((e.length - 2) / 2 / 32) * 32
    })), {
      dynamic: !0,
      encoded: Ue([Ye(j(r, { size: 32 })), s])
    };
  }
  if (r !== Number.parseInt(n))
    throw new Bc({
      expectedSize: Number.parseInt(n),
      value: e
    });
  return { dynamic: !1, encoded: Ye(e, { dir: "right" }) };
}
function Iu(e) {
  if (typeof e != "boolean")
    throw new E(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
  return { dynamic: !1, encoded: Ye(Vo(e)) };
}
function Tu(e, { signed: t }) {
  return {
    dynamic: !1,
    encoded: j(e, {
      size: 32,
      signed: t
    })
  };
}
function Su(e) {
  const t = Ht(e), n = Math.ceil(Y(t) / 32), r = [];
  for (let s = 0; s < n; s++)
    r.push(Ye(qt(t, s * 32, (s + 1) * 32), {
      dir: "right"
    }));
  return {
    dynamic: !0,
    encoded: Ue([
      Ye(j(Y(t), { size: 32 })),
      ...r
    ])
  };
}
function Cu(e, { param: t }) {
  let n = !1;
  const r = [];
  for (let s = 0; s < t.components.length; s++) {
    const o = t.components[s], i = Array.isArray(e) ? s : o.name, a = Gr({
      param: o,
      value: e[i]
    });
    r.push(a), a.dynamic && (n = !0);
  }
  return {
    dynamic: n,
    encoded: n ? Hr(r) : Ue(r.map(({ encoded: s }) => s))
  };
}
function qr(e) {
  const t = e.match(/^(.*)\[(\d+)?\]$/);
  return t ? (
    // Return `null` if the array is dynamic.
    [t[2] ? Number(t[2]) : null, t[1]]
  ) : void 0;
}
const Vr = (e) => qt(Xo(e), 0, 4);
function ln(e) {
  const { abi: t, args: n = [], name: r } = e, s = ke(r, { strict: !1 }), o = t.filter((a) => s ? a.type === "function" ? Vr(a) === r : a.type === "event" ? Fn(a) === r : !1 : "name" in a && a.name === r);
  if (o.length === 0)
    return;
  if (o.length === 1)
    return o[0];
  let i;
  for (const a of o) {
    if (!("inputs" in a))
      continue;
    if (!n || n.length === 0) {
      if (!a.inputs || a.inputs.length === 0)
        return a;
      continue;
    }
    if (!a.inputs || a.inputs.length === 0 || a.inputs.length !== n.length)
      continue;
    if (n.every((u, f) => {
      const d = "inputs" in a && a.inputs[f];
      return d ? mr(u, d) : !1;
    })) {
      if (i && "inputs" in i && i.inputs) {
        const u = ri(a.inputs, i.inputs, n);
        if (u)
          throw new Sc({
            abiItem: a,
            type: u[0]
          }, {
            abiItem: i,
            type: u[1]
          });
      }
      i = a;
    }
  }
  return i || o[0];
}
function mr(e, t) {
  const n = typeof e, r = t.type;
  switch (r) {
    case "address":
      return se(e, { strict: !1 });
    case "bool":
      return n === "boolean";
    case "function":
      return n === "string";
    case "string":
      return n === "string";
    default:
      return r === "tuple" && "components" in t ? Object.values(t.components).every((s, o) => mr(Object.values(e)[o], s)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r) ? n === "number" || n === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r) ? n === "string" || e instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r) ? Array.isArray(e) && e.every((s) => mr(s, {
        ...t,
        // Pop off `[]` or `[M]` from end of type
        type: r.replace(/(\[[0-9]{0,}\])$/, "")
      })) : !1;
  }
}
function ri(e, t, n) {
  for (const r in e) {
    const s = e[r], o = t[r];
    if (s.type === "tuple" && o.type === "tuple" && "components" in s && "components" in o)
      return ri(s.components, o.components, n[r]);
    const i = [s.type, o.type];
    if ((() => i.includes("address") && i.includes("bytes20") ? !0 : i.includes("address") && i.includes("string") ? se(n[r], { strict: !1 }) : i.includes("address") && i.includes("bytes") ? se(n[r], { strict: !1 }) : !1)())
      return i;
  }
}
const Ys = "/docs/contract/encodeEventTopics";
function hn(e) {
  var c;
  const { abi: t, eventName: n, args: r } = e;
  let s = t[0];
  if (n) {
    const u = ln({ abi: t, name: n });
    if (!u)
      throw new Ds(n, { docsPath: Ys });
    s = u;
  }
  if (s.type !== "event")
    throw new Ds(void 0, { docsPath: Ys });
  const o = De(s), i = Fn(o);
  let a = [];
  if (r && "inputs" in s) {
    const u = (c = s.inputs) == null ? void 0 : c.filter((d) => "indexed" in d && d.indexed), f = Array.isArray(r) ? r : Object.values(r).length > 0 ? (u == null ? void 0 : u.map((d) => r[d.name])) ?? [] : [];
    f.length > 0 && (a = (u == null ? void 0 : u.map((d, l) => Array.isArray(f[l]) ? f[l].map((b, g) => Ks({ param: d, value: f[l][g] })) : f[l] ? Ks({ param: d, value: f[l] }) : null)) ?? []);
  }
  return [i, ...a];
}
function Ks({ param: e, value: t }) {
  if (e.type === "string" || e.type === "bytes")
    return ne(Tt(t));
  if (e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/))
    throw new Oc(e.type);
  return St([e], [t]);
}
function On(e, { method: t }) {
  var r, s;
  const n = {};
  return e.transport.type === "fallback" && ((s = (r = e.transport).onResponse) == null || s.call(r, ({ method: o, response: i, status: a, transport: c }) => {
    a === "success" && t === o && (n[i] = c.request);
  })), (o) => n[o] || e.request;
}
async function si(e, t) {
  const { address: n, abi: r, args: s, eventName: o, fromBlock: i, strict: a, toBlock: c } = t, u = On(e, {
    method: "eth_newFilter"
  }), f = o ? hn({
    abi: r,
    args: s,
    eventName: o
  }) : void 0, d = await e.request({
    method: "eth_newFilter",
    params: [
      {
        address: n,
        fromBlock: typeof i == "bigint" ? j(i) : i,
        toBlock: typeof c == "bigint" ? j(c) : c,
        topics: f
      }
    ]
  });
  return {
    abi: r,
    args: s,
    eventName: o,
    id: d,
    request: u(d),
    strict: !!a,
    type: "event"
  };
}
function et(e) {
  return typeof e == "string" ? { address: e, type: "json-rpc" } : e;
}
const Js = "/docs/contract/encodeFunctionData";
function Ru(e) {
  const { abi: t, args: n, functionName: r } = e;
  let s = t[0];
  if (r) {
    const o = ln({
      abi: t,
      args: n,
      name: r
    });
    if (!o)
      throw new In(r, { docsPath: Js });
    s = o;
  }
  if (s.type !== "function")
    throw new In(void 0, { docsPath: Js });
  return {
    abi: [s],
    functionName: Vr(De(s))
  };
}
function tt(e) {
  const { args: t } = e, { abi: n, functionName: r } = (() => {
    var a;
    return e.abi.length === 1 && ((a = e.functionName) != null && a.startsWith("0x")) ? e : Ru(e);
  })(), s = n[0], o = r, i = "inputs" in s && s.inputs ? St(s.inputs, t ?? []) : void 0;
  return Ne([o, i ?? "0x"]);
}
const oi = {
  1: "An `assert` condition failed.",
  17: "Arithmetic operation resulted in underflow or overflow.",
  18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
  33: "Attempted to convert to an invalid type.",
  34: "Attempted to access a storage byte array that is incorrectly encoded.",
  49: "Performed `.pop()` on an empty array",
  50: "Array index is out of bounds.",
  65: "Allocated too much memory or created an array which is too large.",
  81: "Attempted to call a zero-initialized variable of internal function type."
}, ku = {
  inputs: [
    {
      name: "message",
      type: "string"
    }
  ],
  name: "Error",
  type: "error"
}, Fu = {
  inputs: [
    {
      name: "reason",
      type: "uint256"
    }
  ],
  name: "Panic",
  type: "error"
};
class Xs extends E {
  constructor({ offset: t }) {
    super(`Offset \`${t}\` cannot be negative.`, {
      name: "NegativeOffsetError"
    });
  }
}
class ii extends E {
  constructor({ length: t, position: n }) {
    super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`, { name: "PositionOutOfBoundsError" });
  }
}
class Nu extends E {
  constructor({ count: t, limit: n }) {
    super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`, { name: "RecursiveReadLimitExceededError" });
  }
}
const Ou = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new Nu({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new ii({
        length: this.bytes.length,
        position: e
      });
  },
  decrementPosition(e) {
    if (e < 0)
      throw new Xs({ offset: e });
    const t = this.position - e;
    this.assertPosition(t), this.position = t;
  },
  getReadCount(e) {
    return this.positionReadCount.get(e || this.position) || 0;
  },
  incrementPosition(e) {
    if (e < 0)
      throw new Xs({ offset: e });
    const t = this.position + e;
    this.assertPosition(t), this.position = t;
  },
  inspectByte(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectBytes(e, t) {
    const n = t ?? this.position;
    return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
  },
  inspectUint8(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectUint16(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 1), this.dataView.getUint16(t);
  },
  inspectUint24(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2);
  },
  inspectUint32(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 3), this.dataView.getUint32(t);
  },
  pushByte(e) {
    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
  },
  pushBytes(e) {
    this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length;
  },
  pushUint8(e) {
    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
  },
  pushUint16(e) {
    this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2;
  },
  pushUint24(e) {
    this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, e & 255), this.position += 3;
  },
  pushUint32(e) {
    this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4;
  },
  readByte() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectByte();
    return this.position++, e;
  },
  readBytes(e, t) {
    this.assertReadLimit(), this._touch();
    const n = this.inspectBytes(e);
    return this.position += t ?? e, n;
  },
  readUint8() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint8();
    return this.position += 1, e;
  },
  readUint16() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint16();
    return this.position += 2, e;
  },
  readUint24() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint24();
    return this.position += 3, e;
  },
  readUint32() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint32();
    return this.position += 4, e;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(e) {
    const t = this.position;
    return this.assertPosition(e), this.position = e, () => this.position = t;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const e = this.getReadCount();
    this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++;
  }
};
function Zr(e, { recursiveReadLimit: t = 8192 } = {}) {
  const n = Object.create(Ou);
  return n.bytes = e, n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), n.positionReadCount = /* @__PURE__ */ new Map(), n.recursiveReadLimit = t, n;
}
function _u(e, t = {}) {
  typeof t.size < "u" && Se(e, { size: t.size });
  const n = ee(e, t);
  return we(n, t);
}
function zu(e, t = {}) {
  let n = e;
  if (typeof t.size < "u" && (Se(n, { size: t.size }), n = $e(n)), n.length > 1 || n[0] > 1)
    throw new Mc(n);
  return !!n[0];
}
function je(e, t = {}) {
  typeof t.size < "u" && Se(e, { size: t.size });
  const n = ee(e, t);
  return Fe(n, t);
}
function Mu(e, t = {}) {
  let n = e;
  return typeof t.size < "u" && (Se(n, { size: t.size }), n = $e(n, { dir: "right" })), new TextDecoder().decode(n);
}
function _n(e, t) {
  const n = typeof t == "string" ? Te(t) : t, r = Zr(n);
  if (Y(n) === 0 && e.length > 0)
    throw new Cn();
  if (Y(t) && Y(t) < 32)
    throw new Do({
      data: typeof t == "string" ? t : ee(t),
      params: e,
      size: Y(t)
    });
  let s = 0;
  const o = [];
  for (let i = 0; i < e.length; ++i) {
    const a = e[i];
    r.setPosition(s);
    const [c, u] = wt(r, a, {
      staticPosition: 0
    });
    s += u, o.push(c);
  }
  return o;
}
function wt(e, t, { staticPosition: n }) {
  const r = qr(t.type);
  if (r) {
    const [s, o] = r;
    return Lu(e, { ...t, type: o }, { length: s, staticPosition: n });
  }
  if (t.type === "tuple")
    return Hu(e, t, { staticPosition: n });
  if (t.type === "address")
    return ju(e);
  if (t.type === "bool")
    return Du(e);
  if (t.type.startsWith("bytes"))
    return Uu(e, t, { staticPosition: n });
  if (t.type.startsWith("uint") || t.type.startsWith("int"))
    return Gu(e, t);
  if (t.type === "string")
    return qu(e, { staticPosition: n });
  throw new kc(t.type, {
    docsPath: "/docs/contract/decodeAbiParameters"
  });
}
const Qs = 32, gr = 32;
function ju(e) {
  const t = e.readBytes(32);
  return [Nn(ee(ti(t, -20))), 32];
}
function Lu(e, t, { length: n, staticPosition: r }) {
  if (!n) {
    const i = je(e.readBytes(gr)), a = r + i, c = a + Qs;
    e.setPosition(a);
    const u = je(e.readBytes(Qs)), f = Vt(t);
    let d = 0;
    const l = [];
    for (let b = 0; b < u; ++b) {
      e.setPosition(c + (f ? b * 32 : d));
      const [g, y] = wt(e, t, {
        staticPosition: c
      });
      d += y, l.push(g);
    }
    return e.setPosition(r + 32), [l, 32];
  }
  if (Vt(t)) {
    const i = je(e.readBytes(gr)), a = r + i, c = [];
    for (let u = 0; u < n; ++u) {
      e.setPosition(a + u * 32);
      const [f] = wt(e, t, {
        staticPosition: a
      });
      c.push(f);
    }
    return e.setPosition(r + 32), [c, 32];
  }
  let s = 0;
  const o = [];
  for (let i = 0; i < n; ++i) {
    const [a, c] = wt(e, t, {
      staticPosition: r + s
    });
    s += c, o.push(a);
  }
  return [o, s];
}
function Du(e) {
  return [zu(e.readBytes(32), { size: 32 }), 32];
}
function Uu(e, t, { staticPosition: n }) {
  const [r, s] = t.type.split("bytes");
  if (!s) {
    const i = je(e.readBytes(32));
    e.setPosition(n + i);
    const a = je(e.readBytes(32));
    if (a === 0)
      return e.setPosition(n + 32), ["0x", 32];
    const c = e.readBytes(a);
    return e.setPosition(n + 32), [ee(c), 32];
  }
  return [ee(e.readBytes(Number.parseInt(s), 32)), 32];
}
function Gu(e, t) {
  const n = t.type.startsWith("int"), r = Number.parseInt(t.type.split("int")[1] || "256"), s = e.readBytes(32);
  return [
    r > 48 ? _u(s, { signed: n }) : je(s, { signed: n }),
    32
  ];
}
function Hu(e, t, { staticPosition: n }) {
  const r = t.components.length === 0 || t.components.some(({ name: i }) => !i), s = r ? [] : {};
  let o = 0;
  if (Vt(t)) {
    const i = je(e.readBytes(gr)), a = n + i;
    for (let c = 0; c < t.components.length; ++c) {
      const u = t.components[c];
      e.setPosition(a + o);
      const [f, d] = wt(e, u, {
        staticPosition: a
      });
      o += d, s[r ? c : u == null ? void 0 : u.name] = f;
    }
    return e.setPosition(n + 32), [s, 32];
  }
  for (let i = 0; i < t.components.length; ++i) {
    const a = t.components[i], [c, u] = wt(e, a, {
      staticPosition: n
    });
    s[r ? i : a == null ? void 0 : a.name] = c, o += u;
  }
  return [s, o];
}
function qu(e, { staticPosition: t }) {
  const n = je(e.readBytes(32)), r = t + n;
  e.setPosition(r);
  const s = je(e.readBytes(32));
  if (s === 0)
    return e.setPosition(t + 32), ["", 32];
  const o = e.readBytes(s, 32), i = Mu($e(o));
  return e.setPosition(t + 32), [i, 32];
}
function Vt(e) {
  var r;
  const { type: t } = e;
  if (t === "string" || t === "bytes" || t.endsWith("[]"))
    return !0;
  if (t === "tuple")
    return (r = e.components) == null ? void 0 : r.some(Vt);
  const n = qr(e.type);
  return !!(n && Vt({ ...e, type: n[1] }));
}
function Vu(e) {
  const { abi: t, data: n } = e, r = qt(n, 0, 4);
  if (r === "0x")
    throw new Cn();
  const o = [...t || [], ku, Fu].find((i) => i.type === "error" && r === Vr(De(i)));
  if (!o)
    throw new Uo(r, {
      docsPath: "/docs/contract/decodeErrorResult"
    });
  return {
    abiItem: o,
    args: "inputs" in o && o.inputs && o.inputs.length > 0 ? _n(o.inputs, qt(n, 4)) : void 0,
    errorName: o.name
  };
}
const ce = (e, t, n) => JSON.stringify(e, (r, s) => {
  const o = typeof s == "bigint" ? s.toString() : s;
  return typeof t == "function" ? t(r, o) : o;
}, n);
function ai({ abiItem: e, args: t, includeFunctionName: n = !0, includeName: r = !1 }) {
  if ("name" in e && "inputs" in e && e.inputs)
    return `${n ? e.name : ""}(${e.inputs.map((s, o) => `${r && s.name ? `${s.name}: ` : ""}${typeof t[o] == "object" ? ce(t[o]) : t[o]}`).join(", ")})`;
}
const Zu = {
  gwei: 9,
  wei: 18
}, Wu = {
  ether: -9,
  wei: 9
};
function ci(e, t) {
  let n = e.toString();
  const r = n.startsWith("-");
  r && (n = n.slice(1)), n = n.padStart(t, "0");
  let [s, o] = [
    n.slice(0, n.length - t),
    n.slice(n.length - t)
  ];
  return o = o.replace(/(0+)$/, ""), `${r ? "-" : ""}${s || "0"}${o ? `.${o}` : ""}`;
}
function ui(e, t = "wei") {
  return ci(e, Zu[t]);
}
function Ie(e, t = "wei") {
  return ci(e, Wu[t]);
}
class Yu extends E {
  constructor({ address: t }) {
    super(`State for account "${t}" is set multiple times.`, {
      name: "AccountStateConflictError"
    });
  }
}
class Ku extends E {
  constructor() {
    super("state and stateDiff are set on the same account.", {
      name: "StateAssignmentConflictError"
    });
  }
}
function eo(e) {
  return e.reduce((t, { slot: n, value: r }) => `${t}        ${n}: ${r}
`, "");
}
function Ju(e) {
  return e.reduce((t, { address: n, ...r }) => {
    let s = `${t}    ${n}:
`;
    return r.nonce && (s += `      nonce: ${r.nonce}
`), r.balance && (s += `      balance: ${r.balance}
`), r.code && (s += `      code: ${r.code}
`), r.state && (s += `      state:
`, s += eo(r.state)), r.stateDiff && (s += `      stateDiff:
`, s += eo(r.stateDiff)), s;
  }, `  State Override:
`).slice(0, -1);
}
function zn(e) {
  const t = Object.entries(e).map(([r, s]) => s === void 0 || s === !1 ? null : [r, s]).filter(Boolean), n = t.reduce((r, [s]) => Math.max(r, s.length), 0);
  return t.map(([r, s]) => `  ${`${r}:`.padEnd(n + 1)}  ${s}`).join(`
`);
}
class Xu extends E {
  constructor() {
    super([
      "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
      "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
    ].join(`
`), { name: "FeeConflictError" });
  }
}
class Qu extends E {
  constructor({ v: t }) {
    super(`Invalid \`v\` value "${t}". Expected 27 or 28.`, {
      name: "InvalidLegacyVError"
    });
  }
}
class ef extends E {
  constructor({ transaction: t }) {
    super("Cannot infer a transaction type from provided transaction.", {
      metaMessages: [
        "Provided Transaction:",
        "{",
        zn(t),
        "}",
        "",
        "To infer the type, either provide:",
        "- a `type` to the Transaction, or",
        "- an EIP-1559 Transaction with `maxFeePerGas`, or",
        "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
        "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
        "- an EIP-7702 Transaction with `authorizationList`, or",
        "- a Legacy Transaction with `gasPrice`"
      ],
      name: "InvalidSerializableTransactionError"
    });
  }
}
class tf extends E {
  constructor({ storageKey: t }) {
    super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length - 2) / 2)} bytes.`, { name: "InvalidStorageKeySizeError" });
  }
}
class fi extends E {
  constructor({ blockHash: t, blockNumber: n, blockTag: r, hash: s, index: o }) {
    let i = "Transaction";
    r && o !== void 0 && (i = `Transaction at block time "${r}" at index "${o}"`), t && o !== void 0 && (i = `Transaction at block hash "${t}" at index "${o}"`), n && o !== void 0 && (i = `Transaction at block number "${n}" at index "${o}"`), s && (i = `Transaction with hash "${s}"`), super(`${i} could not be found.`, {
      name: "TransactionNotFoundError"
    });
  }
}
class di extends E {
  constructor({ hash: t }) {
    super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`, {
      name: "TransactionReceiptNotFoundError"
    });
  }
}
class nf extends E {
  constructor({ hash: t }) {
    super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`, { name: "WaitForTransactionReceiptTimeoutError" });
  }
}
const rf = (e) => e, Wr = (e) => e;
class li extends E {
  constructor(t, { account: n, docsPath: r, chain: s, data: o, gas: i, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: u, nonce: f, to: d, value: l, stateOverride: b }) {
    var p;
    const g = n ? et(n) : void 0;
    let y = zn({
      from: g == null ? void 0 : g.address,
      to: d,
      value: typeof l < "u" && `${ui(l)} ${((p = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : p.symbol) || "ETH"}`,
      data: o,
      gas: i,
      gasPrice: typeof a < "u" && `${Ie(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${Ie(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${Ie(u)} gwei`,
      nonce: f
    });
    b && (y += `
${Ju(b)}`), super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Raw Call Arguments:",
        y
      ].filter(Boolean),
      name: "CallExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = t;
  }
}
class sf extends E {
  constructor(t, { abi: n, args: r, contractAddress: s, docsPath: o, functionName: i, sender: a }) {
    const c = ln({ abi: n, args: r, name: i }), u = c ? ai({
      abiItem: c,
      args: r,
      includeFunctionName: !1,
      includeName: !1
    }) : void 0, f = c ? De(c, { includeName: !0 }) : void 0, d = zn({
      address: s && rf(s),
      function: f,
      args: u && u !== "()" && `${[...Array((i == null ? void 0 : i.length) ?? 0).keys()].map(() => " ").join("")}${u}`,
      sender: a
    });
    super(t.shortMessage || `An unknown error occurred while executing the contract function "${i}".`, {
      cause: t,
      docsPath: o,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        d && "Contract Call:",
        d
      ].filter(Boolean),
      name: "ContractFunctionExecutionError"
    }), Object.defineProperty(this, "abi", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "args", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "contractAddress", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "formattedArgs", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "functionName", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "sender", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abi = n, this.args = r, this.cause = t, this.contractAddress = s, this.functionName = i, this.sender = a;
  }
}
class wr extends E {
  constructor({ abi: t, data: n, functionName: r, message: s }) {
    let o, i, a, c;
    if (n && n !== "0x")
      try {
        i = Vu({ abi: t, data: n });
        const { abiItem: f, errorName: d, args: l } = i;
        if (d === "Error")
          c = l[0];
        else if (d === "Panic") {
          const [b] = l;
          c = oi[b];
        } else {
          const b = f ? De(f, { includeName: !0 }) : void 0, g = f && l ? ai({
            abiItem: f,
            args: l,
            includeFunctionName: !1,
            includeName: !1
          }) : void 0;
          a = [
            b ? `Error: ${b}` : "",
            g && g !== "()" ? `       ${[...Array((d == null ? void 0 : d.length) ?? 0).keys()].map(() => " ").join("")}${g}` : ""
          ];
        }
      } catch (f) {
        o = f;
      }
    else
      s && (c = s);
    let u;
    o instanceof Uo && (u = o.signature, a = [
      `Unable to decode signature "${u}" as it was not found on the provided ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${u}.`
    ]), super(c && c !== "execution reverted" || u ? [
      `The contract function "${r}" reverted with the following ${u ? "signature" : "reason"}:`,
      c || u
    ].join(`
`) : `The contract function "${r}" reverted.`, {
      cause: o,
      metaMessages: a,
      name: "ContractFunctionRevertedError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "reason", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = i, this.reason = c, this.signature = u;
  }
}
class of extends E {
  constructor({ functionName: t }) {
    super(`The contract function "${t}" returned no data ("0x").`, {
      metaMessages: [
        "This could be due to any of the following:",
        `  - The contract does not have the function "${t}",`,
        "  - The parameters passed to the contract function may be invalid, or",
        "  - The address is not a contract."
      ],
      name: "ContractFunctionZeroDataError"
    });
  }
}
class af extends E {
  constructor({ factory: t }) {
    super(`Deployment for counterfactual contract call failed${t ? ` for factory "${t}".` : ""}`, {
      metaMessages: [
        "Please ensure:",
        "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
        "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."
      ],
      name: "CounterfactualDeploymentFailedError"
    });
  }
}
class Yr extends E {
  constructor({ data: t, message: n }) {
    super(n || "", { name: "RawContractError" }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 3
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = t;
  }
}
class Ut extends E {
  constructor({ body: t, cause: n, details: r, headers: s, status: o, url: i }) {
    super("HTTP request failed.", {
      cause: n,
      details: r,
      metaMessages: [
        o && `Status: ${o}`,
        `URL: ${Wr(i)}`,
        t && `Request body: ${ce(t)}`
      ].filter(Boolean),
      name: "HttpRequestError"
    }), Object.defineProperty(this, "body", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "headers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "status", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "url", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.body = t, this.headers = s, this.status = o, this.url = i;
  }
}
class hi extends E {
  constructor({ body: t, error: n, url: r }) {
    super("RPC Request failed.", {
      cause: n,
      details: n.message,
      metaMessages: [`URL: ${Wr(r)}`, `Request body: ${ce(t)}`],
      name: "RpcRequestError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.code = n.code;
  }
}
class to extends E {
  constructor({ body: t, url: n }) {
    super("The request took too long to respond.", {
      details: "The request timed out.",
      metaMessages: [`URL: ${Wr(n)}`, `Request body: ${ce(t)}`],
      name: "TimeoutError"
    });
  }
}
const cf = -1;
class be extends E {
  constructor(t, { code: n, docsPath: r, metaMessages: s, name: o, shortMessage: i }) {
    super(i, {
      cause: t,
      docsPath: r,
      metaMessages: s || (t == null ? void 0 : t.metaMessages),
      name: o || "RpcError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = o || t.name, this.code = t instanceof hi ? t.code : n ?? cf;
  }
}
class Ct extends be {
  constructor(t, n) {
    super(t, n), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = n.data;
  }
}
class Zt extends be {
  constructor(t) {
    super(t, {
      code: Zt.code,
      name: "ParseRpcError",
      shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    });
  }
}
Object.defineProperty(Zt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700
});
class Wt extends be {
  constructor(t) {
    super(t, {
      code: Wt.code,
      name: "InvalidRequestRpcError",
      shortMessage: "JSON is not a valid request object."
    });
  }
}
Object.defineProperty(Wt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600
});
class Yt extends be {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: Yt.code,
      name: "MethodNotFoundRpcError",
      shortMessage: `The method${n ? ` "${n}"` : ""} does not exist / is not available.`
    });
  }
}
Object.defineProperty(Yt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601
});
class Kt extends be {
  constructor(t) {
    super(t, {
      code: Kt.code,
      name: "InvalidParamsRpcError",
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    });
  }
}
Object.defineProperty(Kt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602
});
class ut extends be {
  constructor(t) {
    super(t, {
      code: ut.code,
      name: "InternalRpcError",
      shortMessage: "An internal error was received."
    });
  }
}
Object.defineProperty(ut, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603
});
class ft extends be {
  constructor(t) {
    super(t, {
      code: ft.code,
      name: "InvalidInputRpcError",
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    });
  }
}
Object.defineProperty(ft, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3
});
class Jt extends be {
  constructor(t) {
    super(t, {
      code: Jt.code,
      name: "ResourceNotFoundRpcError",
      shortMessage: "Requested resource not found."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ResourceNotFoundRpcError"
    });
  }
}
Object.defineProperty(Jt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001
});
class Xt extends be {
  constructor(t) {
    super(t, {
      code: Xt.code,
      name: "ResourceUnavailableRpcError",
      shortMessage: "Requested resource not available."
    });
  }
}
Object.defineProperty(Xt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002
});
class Qt extends be {
  constructor(t) {
    super(t, {
      code: Qt.code,
      name: "TransactionRejectedRpcError",
      shortMessage: "Transaction creation failed."
    });
  }
}
Object.defineProperty(Qt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003
});
class en extends be {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: en.code,
      name: "MethodNotSupportedRpcError",
      shortMessage: `Method${n ? ` "${n}"` : ""} is not implemented.`
    });
  }
}
Object.defineProperty(en, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004
});
class Et extends be {
  constructor(t) {
    super(t, {
      code: Et.code,
      name: "LimitExceededRpcError",
      shortMessage: "Request exceeds defined limit."
    });
  }
}
Object.defineProperty(Et, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005
});
class tn extends be {
  constructor(t) {
    super(t, {
      code: tn.code,
      name: "JsonRpcVersionUnsupportedError",
      shortMessage: "Version of JSON-RPC protocol is not supported."
    });
  }
}
Object.defineProperty(tn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006
});
class vt extends Ct {
  constructor(t) {
    super(t, {
      code: vt.code,
      name: "UserRejectedRequestError",
      shortMessage: "User rejected the request."
    });
  }
}
Object.defineProperty(vt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001
});
class nn extends Ct {
  constructor(t) {
    super(t, {
      code: nn.code,
      name: "UnauthorizedProviderError",
      shortMessage: "The requested method and/or account has not been authorized by the user."
    });
  }
}
Object.defineProperty(nn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100
});
class rn extends Ct {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: rn.code,
      name: "UnsupportedProviderMethodError",
      shortMessage: `The Provider does not support the requested method${n ? ` " ${n}"` : ""}.`
    });
  }
}
Object.defineProperty(rn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200
});
class sn extends Ct {
  constructor(t) {
    super(t, {
      code: sn.code,
      name: "ProviderDisconnectedError",
      shortMessage: "The Provider is disconnected from all chains."
    });
  }
}
Object.defineProperty(sn, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900
});
class on extends Ct {
  constructor(t) {
    super(t, {
      code: on.code,
      name: "ChainDisconnectedError",
      shortMessage: "The Provider is not connected to the requested chain."
    });
  }
}
Object.defineProperty(on, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901
});
class an extends Ct {
  constructor(t) {
    super(t, {
      code: an.code,
      name: "SwitchChainError",
      shortMessage: "An error occurred when attempting to switch chain."
    });
  }
}
Object.defineProperty(an, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902
});
class uf extends be {
  constructor(t) {
    super(t, {
      name: "UnknownRpcError",
      shortMessage: "An unknown RPC error occurred."
    });
  }
}
const ff = 3;
function cn(e, { abi: t, address: n, args: r, docsPath: s, functionName: o, sender: i }) {
  const { code: a, data: c, message: u, shortMessage: f } = e instanceof Yr ? e : e instanceof E ? e.walk((l) => "data" in l) || e.walk() : {}, d = (() => e instanceof Cn ? new of({ functionName: o }) : [ff, ut.code].includes(a) && (c || u || f) ? new wr({
    abi: t,
    data: typeof c == "object" ? c.data : c,
    functionName: o,
    message: f ?? u
  }) : e)();
  return new sf(d, {
    abi: t,
    args: r,
    contractAddress: n,
    docsPath: s,
    functionName: o,
    sender: i
  });
}
function df(e) {
  const t = ne(`0x${e.substring(4)}`).substring(26);
  return Nn(`0x${t}`);
}
async function lf({ hash: e, signature: t }) {
  const n = ke(e) ? e : _(e), { secp256k1: r } = await Promise.resolve().then(() => r0);
  return `0x${(() => {
    if (typeof t == "object" && "r" in t && "s" in t) {
      const { r: u, s: f, v: d, yParity: l } = t, b = Number(l ?? d), g = no(b);
      return new r.Signature(we(u), we(f)).addRecoveryBit(g);
    }
    const i = ke(t) ? t : _(t), a = Fe(`0x${i.slice(130)}`), c = no(a);
    return r.Signature.fromCompact(i.substring(2, 130)).addRecoveryBit(c);
  })().recoverPublicKey(n.substring(2)).toHex(!1)}`;
}
function no(e) {
  if (e === 0 || e === 1)
    return e;
  if (e === 27)
    return 0;
  if (e === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}
async function pi({ hash: e, signature: t }) {
  return df(await lf({ hash: e, signature: t }));
}
function Ke(e, t = "hex") {
  const n = bi(e), r = Zr(new Uint8Array(n.length));
  return n.encode(r), t === "hex" ? ee(r.bytes) : r.bytes;
}
function bi(e) {
  return Array.isArray(e) ? hf(e.map((t) => bi(t))) : pf(e);
}
function hf(e) {
  const t = e.reduce((s, o) => s + o.length, 0), n = yi(t);
  return {
    length: (() => t <= 55 ? 1 + t : 1 + n + t)(),
    encode(s) {
      t <= 55 ? s.pushByte(192 + t) : (s.pushByte(192 + 55 + n), n === 1 ? s.pushUint8(t) : n === 2 ? s.pushUint16(t) : n === 3 ? s.pushUint24(t) : s.pushUint32(t));
      for (const { encode: o } of e)
        o(s);
    }
  };
}
function pf(e) {
  const t = typeof e == "string" ? Te(e) : e, n = yi(t.length);
  return {
    length: (() => t.length === 1 && t[0] < 128 ? 1 : t.length <= 55 ? 1 + t.length : 1 + n + t.length)(),
    encode(s) {
      t.length === 1 && t[0] < 128 ? s.pushBytes(t) : t.length <= 55 ? (s.pushByte(128 + t.length), s.pushBytes(t)) : (s.pushByte(128 + 55 + n), n === 1 ? s.pushUint8(t.length) : n === 2 ? s.pushUint16(t.length) : n === 3 ? s.pushUint24(t.length) : s.pushUint32(t.length), s.pushBytes(t));
    }
  };
}
function yi(e) {
  if (e < 2 ** 8)
    return 1;
  if (e < 2 ** 16)
    return 2;
  if (e < 2 ** 24)
    return 3;
  if (e < 2 ** 32)
    return 4;
  throw new E("Length is too large.");
}
function bf(e) {
  const { chainId: t, contractAddress: n, nonce: r, to: s } = e, o = ne(Ne([
    "0x05",
    Ke([
      j(t),
      n,
      r ? j(r) : "0x"
    ])
  ]));
  return s === "bytes" ? Te(o) : o;
}
async function yf(e) {
  const { authorization: t, signature: n } = e;
  return pi({
    hash: bf(t),
    signature: n ?? t
  });
}
class mf extends E {
  constructor(t, { account: n, docsPath: r, chain: s, data: o, gas: i, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: u, nonce: f, to: d, value: l }) {
    var g;
    const b = zn({
      from: n == null ? void 0 : n.address,
      to: d,
      value: typeof l < "u" && `${ui(l)} ${((g = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : g.symbol) || "ETH"}`,
      data: o,
      gas: i,
      gasPrice: typeof a < "u" && `${Ie(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${Ie(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${Ie(u)} gwei`,
      nonce: f
    });
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        b
      ].filter(Boolean),
      name: "EstimateGasExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = t;
  }
}
class mt extends E {
  constructor({ cause: t, message: n } = {}) {
    var s;
    const r = (s = n == null ? void 0 : n.replace("execution reverted: ", "")) == null ? void 0 : s.replace("execution reverted", "");
    super(`Execution reverted ${r ? `with reason: ${r}` : "for an unknown reason"}.`, {
      cause: t,
      name: "ExecutionRevertedError"
    });
  }
}
Object.defineProperty(mt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3
});
Object.defineProperty(mt, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/
});
class dt extends E {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${Ie(n)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
      cause: t,
      name: "FeeCapTooHighError"
    });
  }
}
Object.defineProperty(dt, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class vr extends E {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${Ie(n)}` : ""} gwei) cannot be lower than the block base fee.`, {
      cause: t,
      name: "FeeCapTooLowError"
    });
  }
}
Object.defineProperty(vr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class xr extends E {
  constructor({ cause: t, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}is higher than the next one expected.`, { cause: t, name: "NonceTooHighError" });
  }
}
Object.defineProperty(xr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/
});
class Er extends E {
  constructor({ cause: t, nonce: n } = {}) {
    super([
      `Nonce provided for the transaction ${n ? `(${n}) ` : ""}is lower than the current nonce of the account.`,
      "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
    ].join(`
`), { cause: t, name: "NonceTooLowError" });
  }
}
Object.defineProperty(Er, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/
});
class Pr extends E {
  constructor({ cause: t, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}exceeds the maximum allowed nonce.`, { cause: t, name: "NonceMaxValueError" });
  }
}
Object.defineProperty(Pr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/
});
class Ar extends E {
  constructor({ cause: t } = {}) {
    super([
      "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
    ].join(`
`), {
      cause: t,
      metaMessages: [
        "This error could arise when the account does not have enough funds to:",
        " - pay for the total gas fee,",
        " - pay for the value to send.",
        " ",
        "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
        " - `gas` is the amount of gas needed for transaction to execute,",
        " - `gas fee` is the gas fee,",
        " - `value` is the amount of ether to send to the recipient."
      ],
      name: "InsufficientFundsError"
    });
  }
}
Object.defineProperty(Ar, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds|exceeds transaction sender account balance/
});
class Br extends E {
  constructor({ cause: t, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
      cause: t,
      name: "IntrinsicGasTooHighError"
    });
  }
}
Object.defineProperty(Br, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/
});
class $r extends E {
  constructor({ cause: t, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction is too low.`, {
      cause: t,
      name: "IntrinsicGasTooLowError"
    });
  }
}
Object.defineProperty($r, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/
});
class Ir extends E {
  constructor({ cause: t }) {
    super("The transaction type is not supported for this chain.", {
      cause: t,
      name: "TransactionTypeNotSupportedError"
    });
  }
}
Object.defineProperty(Ir, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/
});
class un extends E {
  constructor({ cause: t, maxPriorityFeePerGas: n, maxFeePerGas: r } = {}) {
    super([
      `The provided tip (\`maxPriorityFeePerGas\`${n ? ` = ${Ie(n)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r ? ` = ${Ie(r)} gwei` : ""}).`
    ].join(`
`), {
      cause: t,
      name: "TipAboveFeeCapError"
    });
  }
}
Object.defineProperty(un, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class Kr extends E {
  constructor({ cause: t }) {
    super(`An error occurred while executing: ${t == null ? void 0 : t.shortMessage}`, {
      cause: t,
      name: "UnknownNodeError"
    });
  }
}
function mi(e, t) {
  const n = (e.details || "").toLowerCase(), r = e instanceof E ? e.walk((s) => (s == null ? void 0 : s.code) === mt.code) : e;
  return r instanceof E ? new mt({
    cause: e,
    message: r.details
  }) : mt.nodeMessage.test(n) ? new mt({
    cause: e,
    message: e.details
  }) : dt.nodeMessage.test(n) ? new dt({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas
  }) : vr.nodeMessage.test(n) ? new vr({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas
  }) : xr.nodeMessage.test(n) ? new xr({ cause: e, nonce: t == null ? void 0 : t.nonce }) : Er.nodeMessage.test(n) ? new Er({ cause: e, nonce: t == null ? void 0 : t.nonce }) : Pr.nodeMessage.test(n) ? new Pr({ cause: e, nonce: t == null ? void 0 : t.nonce }) : Ar.nodeMessage.test(n) ? new Ar({ cause: e }) : Br.nodeMessage.test(n) ? new Br({ cause: e, gas: t == null ? void 0 : t.gas }) : $r.nodeMessage.test(n) ? new $r({ cause: e, gas: t == null ? void 0 : t.gas }) : Ir.nodeMessage.test(n) ? new Ir({ cause: e }) : un.nodeMessage.test(n) ? new un({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
    maxPriorityFeePerGas: t == null ? void 0 : t.maxPriorityFeePerGas
  }) : new Kr({
    cause: e
  });
}
function gf(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = mi(e, n);
    return s instanceof Kr ? e : s;
  })();
  return new mf(r, {
    docsPath: t,
    ...n
  });
}
function gi(e, { format: t }) {
  if (!t)
    return {};
  const n = {};
  function r(o) {
    const i = Object.keys(o);
    for (const a of i)
      a in e && (n[a] = e[a]), o[a] && typeof o[a] == "object" && !Array.isArray(o[a]) && r(o[a]);
  }
  const s = t(e || {});
  return r(s), n;
}
function Jr(e, t) {
  return ({ exclude: n, format: r }) => ({
    exclude: n,
    format: (s) => {
      const o = t(s);
      if (n)
        for (const i of n)
          delete o[i];
      return {
        ...o,
        ...r(s)
      };
    },
    type: e
  });
}
const wf = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2",
  eip4844: "0x3",
  eip7702: "0x4"
};
function wi(e) {
  const t = {};
  return typeof e.authorizationList < "u" && (t.authorizationList = vf(e.authorizationList)), typeof e.accessList < "u" && (t.accessList = e.accessList), typeof e.blobVersionedHashes < "u" && (t.blobVersionedHashes = e.blobVersionedHashes), typeof e.blobs < "u" && (typeof e.blobs[0] != "string" ? t.blobs = e.blobs.map((n) => ee(n)) : t.blobs = e.blobs), typeof e.data < "u" && (t.data = e.data), typeof e.from < "u" && (t.from = e.from), typeof e.gas < "u" && (t.gas = j(e.gas)), typeof e.gasPrice < "u" && (t.gasPrice = j(e.gasPrice)), typeof e.maxFeePerBlobGas < "u" && (t.maxFeePerBlobGas = j(e.maxFeePerBlobGas)), typeof e.maxFeePerGas < "u" && (t.maxFeePerGas = j(e.maxFeePerGas)), typeof e.maxPriorityFeePerGas < "u" && (t.maxPriorityFeePerGas = j(e.maxPriorityFeePerGas)), typeof e.nonce < "u" && (t.nonce = j(e.nonce)), typeof e.to < "u" && (t.to = e.to), typeof e.type < "u" && (t.type = wf[e.type]), typeof e.value < "u" && (t.value = j(e.value)), t;
}
function vf(e) {
  return e.map((t) => ({
    address: t.contractAddress,
    r: t.r,
    s: t.s,
    chainId: j(t.chainId),
    nonce: j(t.nonce),
    ...typeof t.yParity < "u" ? { yParity: j(t.yParity) } : {},
    ...typeof t.v < "u" && typeof t.yParity > "u" ? { v: j(t.v) } : {}
  }));
}
function ro(e) {
  if (!(!e || e.length === 0))
    return e.reduce((t, { slot: n, value: r }) => {
      if (n.length !== 66)
        throw new Us({
          size: n.length,
          targetSize: 66,
          type: "hex"
        });
      if (r.length !== 66)
        throw new Us({
          size: r.length,
          targetSize: 66,
          type: "hex"
        });
      return t[n] = r, t;
    }, {});
}
function xf(e) {
  const { balance: t, nonce: n, state: r, stateDiff: s, code: o } = e, i = {};
  if (o !== void 0 && (i.code = o), t !== void 0 && (i.balance = j(t)), n !== void 0 && (i.nonce = j(n)), r !== void 0 && (i.state = ro(r)), s !== void 0) {
    if (i.state)
      throw new Ku();
    i.stateDiff = ro(s);
  }
  return i;
}
function vi(e) {
  if (!e)
    return;
  const t = {};
  for (const { address: n, ...r } of e) {
    if (!se(n, { strict: !1 }))
      throw new fe({ address: n });
    if (t[n])
      throw new Yu({ address: n });
    t[n] = xf(r);
  }
  return t;
}
const Mn = 2n ** 256n - 1n;
function Xr(e) {
  const { account: t, gasPrice: n, maxFeePerGas: r, maxPriorityFeePerGas: s, to: o } = e, i = t ? et(t) : void 0;
  if (i && !se(i.address))
    throw new fe({ address: i.address });
  if (o && !se(o))
    throw new fe({ address: o });
  if (typeof n < "u" && (typeof r < "u" || typeof s < "u"))
    throw new Xu();
  if (r && r > Mn)
    throw new dt({ maxFeePerGas: r });
  if (s && r && s > r)
    throw new un({ maxFeePerGas: r, maxPriorityFeePerGas: s });
}
class Ef extends E {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1.", {
      name: "BaseFeeScalarError"
    });
  }
}
class Qr extends E {
  constructor() {
    super("Chain does not support EIP-1559 fees.", {
      name: "Eip1559FeesNotSupportedError"
    });
  }
}
class Pf extends E {
  constructor({ maxPriorityFeePerGas: t }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Ie(t)} gwei).`, { name: "MaxFeePerGasTooLowError" });
  }
}
class xi extends E {
  constructor({ blockHash: t, blockNumber: n }) {
    let r = "Block";
    t && (r = `Block at hash "${t}"`), n && (r = `Block at number "${n}"`), super(`${r} could not be found.`, { name: "BlockNotFoundError" });
  }
}
const Ei = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
function jn(e) {
  const t = {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    chainId: e.chainId ? Fe(e.chainId) : void 0,
    gas: e.gas ? BigInt(e.gas) : void 0,
    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
    nonce: e.nonce ? Fe(e.nonce) : void 0,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    type: e.type ? Ei[e.type] : void 0,
    typeHex: e.type ? e.type : void 0,
    value: e.value ? BigInt(e.value) : void 0,
    v: e.v ? BigInt(e.v) : void 0
  };
  return e.authorizationList && (t.authorizationList = Bf(e.authorizationList)), t.yParity = (() => {
    if (e.yParity)
      return Number(e.yParity);
    if (typeof t.v == "bigint") {
      if (t.v === 0n || t.v === 27n)
        return 0;
      if (t.v === 1n || t.v === 28n)
        return 1;
      if (t.v >= 35n)
        return t.v % 2n === 0n ? 1 : 0;
    }
  })(), t.type === "legacy" && (delete t.accessList, delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, delete t.yParity), t.type === "eip2930" && (delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), t.type === "eip1559" && delete t.maxFeePerBlobGas, t;
}
const Af = /* @__PURE__ */ Jr("transaction", jn);
function Bf(e) {
  return e.map((t) => ({
    contractAddress: t.address,
    chainId: Number(t.chainId),
    nonce: Number(t.nonce),
    r: t.r,
    s: t.s,
    yParity: Number(t.yParity)
  }));
}
function es(e) {
  var n;
  const t = (n = e.transactions) == null ? void 0 : n.map((r) => typeof r == "string" ? r : jn(r));
  return {
    ...e,
    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
    blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
    excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
    hash: e.hash ? e.hash : null,
    logsBloom: e.logsBloom ? e.logsBloom : null,
    nonce: e.nonce ? e.nonce : null,
    number: e.number ? BigInt(e.number) : null,
    size: e.size ? BigInt(e.size) : void 0,
    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
    transactions: t,
    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
  };
}
const $f = /* @__PURE__ */ Jr("block", es);
async function Le(e, { blockHash: t, blockNumber: n, blockTag: r, includeTransactions: s } = {}) {
  var f, d, l;
  const o = r ?? "latest", i = s ?? !1, a = n !== void 0 ? j(n) : void 0;
  let c = null;
  if (t ? c = await e.request({
    method: "eth_getBlockByHash",
    params: [t, i]
  }, { dedupe: !0 }) : c = await e.request({
    method: "eth_getBlockByNumber",
    params: [a || o, i]
  }, { dedupe: !!a }), !c)
    throw new xi({ blockHash: t, blockNumber: n });
  return (((l = (d = (f = e.chain) == null ? void 0 : f.formatters) == null ? void 0 : d.block) == null ? void 0 : l.format) || es)(c);
}
async function ts(e) {
  const t = await e.request({
    method: "eth_gasPrice"
  });
  return BigInt(t);
}
async function If(e, t) {
  return Pi(e, t);
}
async function Pi(e, t) {
  var o, i;
  const { block: n, chain: r = e.chain, request: s } = t || {};
  try {
    const a = ((o = r == null ? void 0 : r.fees) == null ? void 0 : o.maxPriorityFeePerGas) ?? ((i = r == null ? void 0 : r.fees) == null ? void 0 : i.defaultPriorityFee);
    if (typeof a == "function") {
      const u = n || await L(e, Le, "getBlock")({}), f = await a({
        block: u,
        client: e,
        request: s
      });
      if (f === null)
        throw new Error();
      return f;
    }
    if (typeof a < "u")
      return a;
    const c = await e.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return we(c);
  } catch {
    const [a, c] = await Promise.all([
      n ? Promise.resolve(n) : L(e, Le, "getBlock")({}),
      L(e, ts, "getGasPrice")({})
    ]);
    if (typeof a.baseFeePerGas != "bigint")
      throw new Qr();
    const u = c - a.baseFeePerGas;
    return u < 0n ? 0n : u;
  }
}
async function Tf(e, t) {
  return Tr(e, t);
}
async function Tr(e, t) {
  var l, b;
  const { block: n, chain: r = e.chain, request: s, type: o = "eip1559" } = t || {}, i = await (async () => {
    var g, y;
    return typeof ((g = r == null ? void 0 : r.fees) == null ? void 0 : g.baseFeeMultiplier) == "function" ? r.fees.baseFeeMultiplier({
      block: n,
      client: e,
      request: s
    }) : ((y = r == null ? void 0 : r.fees) == null ? void 0 : y.baseFeeMultiplier) ?? 1.2;
  })();
  if (i < 1)
    throw new Ef();
  const c = 10 ** (((l = i.toString().split(".")[1]) == null ? void 0 : l.length) ?? 0), u = (g) => g * BigInt(Math.ceil(i * c)) / BigInt(c), f = n || await L(e, Le, "getBlock")({});
  if (typeof ((b = r == null ? void 0 : r.fees) == null ? void 0 : b.estimateFeesPerGas) == "function") {
    const g = await r.fees.estimateFeesPerGas({
      block: n,
      client: e,
      multiply: u,
      request: s,
      type: o
    });
    if (g !== null)
      return g;
  }
  if (o === "eip1559") {
    if (typeof f.baseFeePerGas != "bigint")
      throw new Qr();
    const g = typeof (s == null ? void 0 : s.maxPriorityFeePerGas) == "bigint" ? s.maxPriorityFeePerGas : await Pi(e, {
      block: f,
      chain: r,
      request: s
    }), y = u(f.baseFeePerGas);
    return {
      maxFeePerGas: (s == null ? void 0 : s.maxFeePerGas) ?? y + g,
      maxPriorityFeePerGas: g
    };
  }
  return {
    gasPrice: (s == null ? void 0 : s.gasPrice) ?? u(await L(e, ts, "getGasPrice")({}))
  };
}
async function Ai(e, { address: t, blockTag: n = "latest", blockNumber: r }) {
  const s = await e.request({
    method: "eth_getTransactionCount",
    params: [t, r ? j(r) : n]
  }, { dedupe: !!r });
  return Fe(s);
}
function ns(e) {
  const { kzg: t } = e, n = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), r = typeof e.blobs[0] == "string" ? e.blobs.map((o) => Te(o)) : e.blobs, s = [];
  for (const o of r)
    s.push(Uint8Array.from(t.blobToKzgCommitment(o)));
  return n === "bytes" ? s : s.map((o) => ee(o));
}
function rs(e) {
  const { kzg: t } = e, n = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), r = typeof e.blobs[0] == "string" ? e.blobs.map((i) => Te(i)) : e.blobs, s = typeof e.commitments[0] == "string" ? e.commitments.map((i) => Te(i)) : e.commitments, o = [];
  for (let i = 0; i < r.length; i++) {
    const a = r[i], c = s[i];
    o.push(Uint8Array.from(t.computeBlobKzgProof(a, c)));
  }
  return n === "bytes" ? o : o.map((i) => ee(i));
}
function Sf(e, t, n, r) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, r);
  const s = BigInt(32), o = BigInt(4294967295), i = Number(n >> s & o), a = Number(n & o), c = r ? 4 : 0, u = r ? 0 : 4;
  e.setUint32(t + c, i, r), e.setUint32(t + u, a, r);
}
const Cf = (e, t, n) => e & t ^ ~e & n, Rf = (e, t, n) => e & t ^ e & n ^ t & n;
class kf extends Lr {
  constructor(t, n, r, s) {
    super(), this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = tr(this.buffer);
  }
  update(t) {
    xt(this);
    const { view: n, buffer: r, blockLen: s } = this;
    t = kn(t);
    const o = t.length;
    for (let i = 0; i < o; ) {
      const a = Math.min(s - this.pos, o - i);
      if (a === s) {
        const c = tr(t);
        for (; s <= o - i; i += s)
          this.process(c, i);
        continue;
      }
      r.set(t.subarray(i, i + a), this.pos), this.pos += a, i += a, this.pos === s && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    xt(this), Zo(t, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: s, isLE: o } = this;
    let { pos: i } = this;
    n[i++] = 128, this.buffer.subarray(i).fill(0), this.padOffset > s - i && (this.process(r, 0), i = 0);
    for (let d = i; d < s; d++)
      n[d] = 0;
    Sf(r, s - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const a = tr(t), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = c / 4, f = this.get();
    if (u > f.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let d = 0; d < u; d++)
      a.setUint32(4 * d, f[d], o);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const r = t.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n, buffer: r, length: s, finished: o, destroyed: i, pos: a } = this;
    return t.length = s, t.pos = a, t.finished = o, t.destroyed = i, s % n && t.buffer.set(r), t;
  }
}
const Ff = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Ze = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), We = /* @__PURE__ */ new Uint32Array(64);
class Nf extends kf {
  constructor() {
    super(64, 32, 8, !1), this.A = Ze[0] | 0, this.B = Ze[1] | 0, this.C = Ze[2] | 0, this.D = Ze[3] | 0, this.E = Ze[4] | 0, this.F = Ze[5] | 0, this.G = Ze[6] | 0, this.H = Ze[7] | 0;
  }
  get() {
    const { A: t, B: n, C: r, D: s, E: o, F: i, G: a, H: c } = this;
    return [t, n, r, s, o, i, a, c];
  }
  // prettier-ignore
  set(t, n, r, s, o, i, a, c) {
    this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = s | 0, this.E = o | 0, this.F = i | 0, this.G = a | 0, this.H = c | 0;
  }
  process(t, n) {
    for (let d = 0; d < 16; d++, n += 4)
      We[d] = t.getUint32(n, !1);
    for (let d = 16; d < 64; d++) {
      const l = We[d - 15], b = We[d - 2], g = Re(l, 7) ^ Re(l, 18) ^ l >>> 3, y = Re(b, 17) ^ Re(b, 19) ^ b >>> 10;
      We[d] = y + We[d - 7] + g + We[d - 16] | 0;
    }
    let { A: r, B: s, C: o, D: i, E: a, F: c, G: u, H: f } = this;
    for (let d = 0; d < 64; d++) {
      const l = Re(a, 6) ^ Re(a, 11) ^ Re(a, 25), b = f + l + Cf(a, c, u) + Ff[d] + We[d] | 0, y = (Re(r, 2) ^ Re(r, 13) ^ Re(r, 22)) + Rf(r, s, o) | 0;
      f = u, u = c, c = a, a = i + b | 0, i = o, o = s, s = r, r = b + y | 0;
    }
    r = r + this.A | 0, s = s + this.B | 0, o = o + this.C | 0, i = i + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, f = f + this.H | 0, this.set(r, s, o, i, a, c, u, f);
  }
  roundClean() {
    We.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Bi = /* @__PURE__ */ Wo(() => new Nf());
function Of(e, t) {
  const n = t || "hex", r = Bi(ke(e, { strict: !1 }) ? Tt(e) : e);
  return n === "bytes" ? r : _(r);
}
function _f(e) {
  const { commitment: t, version: n = 1 } = e, r = e.to ?? (typeof t == "string" ? "hex" : "bytes"), s = Of(t, "bytes");
  return s.set([n], 0), r === "bytes" ? s : ee(s);
}
function $i(e) {
  const { commitments: t, version: n } = e, r = e.to ?? (typeof t[0] == "string" ? "hex" : "bytes"), s = [];
  for (const o of t)
    s.push(_f({
      commitment: o,
      to: r,
      version: n
    }));
  return s;
}
const so = 6, Ii = 32, ss = 4096, Ti = Ii * ss, oo = Ti * so - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * ss * so, Si = 1;
class zf extends E {
  constructor({ maxSize: t, size: n }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${t} bytes`, `Given: ${n} bytes`],
      name: "BlobSizeTooLargeError"
    });
  }
}
class Ci extends E {
  constructor() {
    super("Blob data must not be empty.", { name: "EmptyBlobError" });
  }
}
class Mf extends E {
  constructor({ hash: t, size: n }) {
    super(`Versioned hash "${t}" size is invalid.`, {
      metaMessages: ["Expected: 32", `Received: ${n}`],
      name: "InvalidVersionedHashSizeError"
    });
  }
}
class jf extends E {
  constructor({ hash: t, version: n }) {
    super(`Versioned hash "${t}" version is invalid.`, {
      metaMessages: [
        `Expected: ${Si}`,
        `Received: ${n}`
      ],
      name: "InvalidVersionedHashVersionError"
    });
  }
}
function Lf(e) {
  const t = e.to ?? (typeof e.data == "string" ? "hex" : "bytes"), n = typeof e.data == "string" ? Te(e.data) : e.data, r = Y(n);
  if (!r)
    throw new Ci();
  if (r > oo)
    throw new zf({
      maxSize: oo,
      size: r
    });
  const s = [];
  let o = !0, i = 0;
  for (; o; ) {
    const a = Zr(new Uint8Array(Ti));
    let c = 0;
    for (; c < ss; ) {
      const u = n.slice(i, i + (Ii - 1));
      if (a.pushByte(0), a.pushBytes(u), u.length < 31) {
        a.pushByte(128), o = !1;
        break;
      }
      c++, i += 31;
    }
    s.push(a);
  }
  return t === "bytes" ? s.map((a) => a.bytes) : s.map((a) => ee(a.bytes));
}
function Ri(e) {
  const { data: t, kzg: n, to: r } = e, s = e.blobs ?? Lf({ data: t, to: r }), o = e.commitments ?? ns({ blobs: s, kzg: n, to: r }), i = e.proofs ?? rs({ blobs: s, commitments: o, kzg: n, to: r }), a = [];
  for (let c = 0; c < s.length; c++)
    a.push({
      blob: s[c],
      commitment: o[c],
      proof: i[c]
    });
  return a;
}
function ki(e) {
  if (e.type)
    return e.type;
  if (typeof e.authorizationList < "u")
    return "eip7702";
  if (typeof e.blobs < "u" || typeof e.blobVersionedHashes < "u" || typeof e.maxFeePerBlobGas < "u" || typeof e.sidecars < "u")
    return "eip4844";
  if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof e.gasPrice < "u")
    return typeof e.accessList < "u" ? "eip2930" : "legacy";
  throw new ef({ transaction: e });
}
async function Fi(e) {
  const t = await e.request({
    method: "eth_chainId"
  }, { dedupe: !0 });
  return Fe(t);
}
const Df = [
  "blobVersionedHashes",
  "chainId",
  "fees",
  "gas",
  "nonce",
  "type"
];
async function Ni(e, t) {
  const { account: n = e.account, blobs: r, chain: s, gas: o, kzg: i, nonce: a, nonceManager: c, parameters: u = Df, type: f } = t, d = n ? et(n) : void 0, l = { ...t, ...d ? { from: d == null ? void 0 : d.address } : {} };
  let b;
  async function g() {
    return b || (b = await L(e, Le, "getBlock")({ blockTag: "latest" }), b);
  }
  let y;
  async function p() {
    return y || (s ? s.id : typeof t.chainId < "u" ? t.chainId : (y = await L(e, Fi, "getChainId")({}), y));
  }
  if ((u.includes("blobVersionedHashes") || u.includes("sidecars")) && r && i) {
    const m = ns({ blobs: r, kzg: i });
    if (u.includes("blobVersionedHashes")) {
      const w = $i({
        commitments: m,
        to: "hex"
      });
      l.blobVersionedHashes = w;
    }
    if (u.includes("sidecars")) {
      const w = rs({ blobs: r, commitments: m, kzg: i }), v = Ri({
        blobs: r,
        commitments: m,
        proofs: w,
        to: "hex"
      });
      l.sidecars = v;
    }
  }
  if (u.includes("chainId") && (l.chainId = await p()), u.includes("nonce") && typeof a > "u" && d)
    if (c) {
      const m = await p();
      l.nonce = await c.consume({
        address: d.address,
        chainId: m,
        client: e
      });
    } else
      l.nonce = await L(e, Ai, "getTransactionCount")({
        address: d.address,
        blockTag: "pending"
      });
  if ((u.includes("fees") || u.includes("type")) && typeof f > "u")
    try {
      l.type = ki(l);
    } catch {
      const m = await g();
      l.type = typeof (m == null ? void 0 : m.baseFeePerGas) == "bigint" ? "eip1559" : "legacy";
    }
  if (u.includes("fees"))
    if (l.type !== "legacy" && l.type !== "eip2930") {
      if (typeof l.maxFeePerGas > "u" || typeof l.maxPriorityFeePerGas > "u") {
        const m = await g(), { maxFeePerGas: w, maxPriorityFeePerGas: v } = await Tr(e, {
          block: m,
          chain: s,
          request: l
        });
        if (typeof t.maxPriorityFeePerGas > "u" && t.maxFeePerGas && t.maxFeePerGas < v)
          throw new Pf({
            maxPriorityFeePerGas: v
          });
        l.maxPriorityFeePerGas = v, l.maxFeePerGas = w;
      }
    } else {
      if (typeof t.maxFeePerGas < "u" || typeof t.maxPriorityFeePerGas < "u")
        throw new Qr();
      const m = await g(), { gasPrice: w } = await Tr(e, {
        block: m,
        chain: s,
        request: l,
        type: "legacy"
      });
      l.gasPrice = w;
    }
  return u.includes("gas") && typeof o > "u" && (l.gas = await L(e, os, "estimateGas")({
    ...l,
    account: d ? { address: d.address, type: "json-rpc" } : void 0
  })), Xr(l), delete l.parameters, l;
}
async function Oi(e, { address: t, blockNumber: n, blockTag: r = "latest" }) {
  const s = n ? j(n) : void 0, o = await e.request({
    method: "eth_getBalance",
    params: [t, s || r]
  });
  return BigInt(o);
}
async function os(e, t) {
  var s, o, i;
  const n = t.account ?? e.account, r = n ? et(n) : void 0;
  try {
    let T = function(S) {
      const { block: F, request: M, rpcStateOverride: q } = S;
      return e.request({
        method: "eth_estimateGas",
        params: q ? [M, F ?? "latest", q] : F ? [M, F] : [M]
      });
    };
    const { accessList: a, authorizationList: c, blobs: u, blobVersionedHashes: f, blockNumber: d, blockTag: l, data: b, gas: g, gasPrice: y, maxFeePerBlobGas: p, maxFeePerGas: m, maxPriorityFeePerGas: w, nonce: v, value: x, stateOverride: R, ...I } = await Ni(e, {
      ...t,
      parameters: (
        // Some RPC Providers do not compute versioned hashes from blobs. We will need
        // to compute them.
        (r == null ? void 0 : r.type) === "local" ? void 0 : ["blobVersionedHashes"]
      )
    }), B = (d ? j(d) : void 0) || l, $ = vi(R), G = await (async () => {
      if (I.to)
        return I.to;
      if (c && c.length > 0)
        return await yf({
          authorization: c[0]
        }).catch(() => {
          throw new E("`to` is required. Could not infer from `authorizationList`");
        });
    })();
    Xr(t);
    const O = (i = (o = (s = e.chain) == null ? void 0 : s.formatters) == null ? void 0 : o.transactionRequest) == null ? void 0 : i.format, D = (O || wi)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...gi(I, { format: O }),
      from: r == null ? void 0 : r.address,
      accessList: a,
      authorizationList: c,
      blobs: u,
      blobVersionedHashes: f,
      data: b,
      gas: g,
      gasPrice: y,
      maxFeePerBlobGas: p,
      maxFeePerGas: m,
      maxPriorityFeePerGas: w,
      nonce: v,
      to: G,
      value: x
    });
    let C = BigInt(await T({ block: B, request: D, rpcStateOverride: $ }));
    if (c) {
      const S = await Oi(e, { address: D.from }), F = await Promise.all(c.map(async (M) => {
        const { contractAddress: q } = M, W = await T({
          block: B,
          request: {
            authorizationList: void 0,
            data: b,
            from: r == null ? void 0 : r.address,
            to: q,
            value: j(S)
          },
          rpcStateOverride: $
        }).catch(() => 100000n);
        return 2n * BigInt(W);
      }));
      C += F.reduce((M, q) => M + q, 0n);
    }
    return C;
  } catch (a) {
    throw gf(a, {
      ...t,
      account: r,
      chain: e.chain
    });
  }
}
async function Uf(e, t) {
  const { abi: n, address: r, args: s, functionName: o, ...i } = t, a = tt({
    abi: n,
    args: s,
    functionName: o
  });
  try {
    return await L(e, os, "estimateGas")({
      data: a,
      to: r,
      ...i
    });
  } catch (c) {
    const u = i.account ? et(i.account) : void 0;
    throw cn(c, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/estimateContractGas",
      functionName: o,
      sender: u == null ? void 0 : u.address
    });
  }
}
function is(e, t) {
  if (!se(e, { strict: !1 }))
    throw new fe({ address: e });
  if (!se(t, { strict: !1 }))
    throw new fe({ address: t });
  return e.toLowerCase() === t.toLowerCase();
}
const io = "/docs/contract/decodeEventLog";
function as(e) {
  const { abi: t, data: n, strict: r, topics: s } = e, o = r ?? !0, [i, ...a] = s;
  if (!i)
    throw new Ic({ docsPath: io });
  const c = (() => t.length === 1 ? t[0] : t.find((y) => y.type === "event" && i === Fn(De(y))))();
  if (!(c && "name" in c) || c.type !== "event")
    throw new Go(i, { docsPath: io });
  const { name: u, inputs: f } = c, d = f == null ? void 0 : f.some((y) => !("name" in y && y.name));
  let l = d ? [] : {};
  const b = f.filter((y) => "indexed" in y && y.indexed);
  for (let y = 0; y < b.length; y++) {
    const p = b[y], m = a[y];
    if (!m)
      throw new Rn({
        abiItem: c,
        param: p
      });
    l[d ? y : p.name || y] = Gf({ param: p, value: m });
  }
  const g = f.filter((y) => !("indexed" in y && y.indexed));
  if (g.length > 0) {
    if (n && n !== "0x")
      try {
        const y = _n(g, n);
        if (y)
          if (d)
            l = [...l, ...y];
          else
            for (let p = 0; p < g.length; p++)
              l[g[p].name] = y[p];
      } catch (y) {
        if (o)
          throw y instanceof Do || y instanceof ii ? new Gt({
            abiItem: c,
            data: n,
            params: g,
            size: Y(n)
          }) : y;
      }
    else if (o)
      throw new Gt({
        abiItem: c,
        data: "0x",
        params: g,
        size: 0
      });
  }
  return {
    eventName: u,
    args: Object.values(l).length > 0 ? l : void 0
  };
}
function Gf({ param: e, value: t }) {
  return e.type === "string" || e.type === "bytes" || e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/) ? t : (_n([e], t) || [])[0];
}
function cs(e) {
  const { abi: t, args: n, logs: r, strict: s = !0 } = e, o = (() => {
    if (e.eventName)
      return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
  })();
  return r.map((i) => {
    var a;
    try {
      const c = t.find((f) => f.type === "event" && i.topics[0] === Fn(f));
      if (!c)
        return null;
      const u = as({
        ...i,
        abi: [c],
        strict: s
      });
      return o && !o.includes(u.eventName) || !Hf({
        args: u.args,
        inputs: c.inputs,
        matchArgs: n
      }) ? null : { ...u, ...i };
    } catch (c) {
      let u, f;
      if (c instanceof Go)
        return null;
      if (c instanceof Gt || c instanceof Rn) {
        if (s)
          return null;
        u = c.abiItem.name, f = (a = c.abiItem.inputs) == null ? void 0 : a.some((d) => !("name" in d && d.name));
      }
      return { ...i, args: f ? [] : {}, eventName: u };
    }
  }).filter(Boolean);
}
function Hf(e) {
  const { args: t, inputs: n, matchArgs: r } = e;
  if (!r)
    return !0;
  if (!t)
    return !1;
  function s(o, i, a) {
    try {
      return o.type === "address" ? is(i, a) : o.type === "string" || o.type === "bytes" ? ne(Tt(i)) === a : i === a;
    } catch {
      return !1;
    }
  }
  return Array.isArray(t) && Array.isArray(r) ? r.every((o, i) => {
    if (o == null)
      return !0;
    const a = n[i];
    return a ? (Array.isArray(o) ? o : [o]).some((u) => s(a, u, t[i])) : !1;
  }) : typeof t == "object" && !Array.isArray(t) && typeof r == "object" && !Array.isArray(r) ? Object.entries(r).every(([o, i]) => {
    if (i == null)
      return !0;
    const a = n.find((u) => u.name === o);
    return a ? (Array.isArray(i) ? i : [i]).some((u) => s(a, u, t[o])) : !1;
  }) : !1;
}
function Je(e, { args: t, eventName: n } = {}) {
  return {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    logIndex: e.logIndex ? Number(e.logIndex) : null,
    transactionHash: e.transactionHash ? e.transactionHash : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    ...n ? { args: t, eventName: n } : {}
  };
}
async function us(e, { address: t, blockHash: n, fromBlock: r, toBlock: s, event: o, events: i, args: a, strict: c } = {}) {
  const u = c ?? !1, f = i ?? (o ? [o] : void 0);
  let d = [];
  f && (d = [f.flatMap((y) => hn({
    abi: [y],
    eventName: y.name,
    args: i ? void 0 : a
  }))], o && (d = d[0]));
  let l;
  n ? l = await e.request({
    method: "eth_getLogs",
    params: [{ address: t, topics: d, blockHash: n }]
  }) : l = await e.request({
    method: "eth_getLogs",
    params: [
      {
        address: t,
        topics: d,
        fromBlock: typeof r == "bigint" ? j(r) : r,
        toBlock: typeof s == "bigint" ? j(s) : s
      }
    ]
  });
  const b = l.map((g) => Je(g));
  return f ? cs({
    abi: f,
    args: a,
    logs: b,
    strict: u
  }) : b;
}
async function _i(e, t) {
  const { abi: n, address: r, args: s, blockHash: o, eventName: i, fromBlock: a, toBlock: c, strict: u } = t, f = i ? ln({ abi: n, name: i }) : void 0, d = f ? void 0 : n.filter((l) => l.type === "event");
  return L(e, us, "getLogs")({
    address: r,
    args: s,
    blockHash: o,
    event: f,
    events: d,
    fromBlock: a,
    toBlock: c,
    strict: u
  });
}
const sr = "/docs/contract/decodeFunctionResult";
function Rt(e) {
  const { abi: t, args: n, functionName: r, data: s } = e;
  let o = t[0];
  if (r) {
    const a = ln({ abi: t, args: n, name: r });
    if (!a)
      throw new In(r, { docsPath: sr });
    o = a;
  }
  if (o.type !== "function")
    throw new In(void 0, { docsPath: sr });
  if (!o.outputs)
    throw new Tc(o.name, { docsPath: sr });
  const i = _n(o.outputs, s);
  if (i && i.length > 1)
    return i;
  if (i && i.length === 1)
    return i[0];
}
const Sr = [
  {
    inputs: [
      {
        components: [
          {
            name: "target",
            type: "address"
          },
          {
            name: "allowFailure",
            type: "bool"
          },
          {
            name: "callData",
            type: "bytes"
          }
        ],
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate3",
    outputs: [
      {
        components: [
          {
            name: "success",
            type: "bool"
          },
          {
            name: "returnData",
            type: "bytes"
          }
        ],
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
], zi = [
  {
    inputs: [],
    name: "ResolverNotFound",
    type: "error"
  },
  {
    inputs: [],
    name: "ResolverWildcardNotSupported",
    type: "error"
  },
  {
    inputs: [],
    name: "ResolverNotContract",
    type: "error"
  },
  {
    inputs: [
      {
        name: "returnData",
        type: "bytes"
      }
    ],
    name: "ResolverError",
    type: "error"
  },
  {
    inputs: [
      {
        components: [
          {
            name: "status",
            type: "uint16"
          },
          {
            name: "message",
            type: "string"
          }
        ],
        name: "errors",
        type: "tuple[]"
      }
    ],
    name: "HttpError",
    type: "error"
  }
], Mi = [
  ...zi,
  {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes" },
      { name: "data", type: "bytes" }
    ],
    outputs: [
      { name: "", type: "bytes" },
      { name: "address", type: "address" }
    ]
  },
  {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes" },
      { name: "data", type: "bytes" },
      { name: "gateways", type: "string[]" }
    ],
    outputs: [
      { name: "", type: "bytes" },
      { name: "address", type: "address" }
    ]
  }
], qf = [
  ...zi,
  {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [{ type: "bytes", name: "reverseName" }],
    outputs: [
      { type: "string", name: "resolvedName" },
      { type: "address", name: "resolvedAddress" },
      { type: "address", name: "reverseResolver" },
      { type: "address", name: "resolver" }
    ]
  },
  {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [
      { type: "bytes", name: "reverseName" },
      { type: "string[]", name: "gateways" }
    ],
    outputs: [
      { type: "string", name: "resolvedName" },
      { type: "address", name: "resolvedAddress" },
      { type: "address", name: "reverseResolver" },
      { type: "address", name: "resolver" }
    ]
  }
], ao = [
  {
    name: "text",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "key", type: "string" }
    ],
    outputs: [{ name: "", type: "string" }]
  }
], co = [
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "name", type: "bytes32" }],
    outputs: [{ name: "", type: "address" }]
  },
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "coinType", type: "uint256" }
    ],
    outputs: [{ name: "", type: "bytes" }]
  }
], uo = [
  {
    inputs: [
      {
        name: "_signer",
        type: "address"
      },
      {
        name: "_hash",
        type: "bytes32"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        name: "_signer",
        type: "address"
      },
      {
        name: "_hash",
        type: "bytes32"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "isValidSig"
  }
], Vf = "0x82ad56cb", Zf = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe", Wf = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe", Yf = "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
class Cr extends E {
  constructor({ blockNumber: t, chain: n, contract: r }) {
    super(`Chain "${n.name}" does not support contract "${r.name}".`, {
      metaMessages: [
        "This could be due to any of the following:",
        ...t && r.blockCreated && r.blockCreated > t ? [
          `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`
        ] : [
          `- The chain does not have the contract "${r.name}" configured.`
        ]
      ],
      name: "ChainDoesNotSupportContract"
    });
  }
}
class ji extends E {
  constructor() {
    super("No chain was provided to the Client.", {
      name: "ClientChainNotConfiguredError"
    });
  }
}
class Ln extends E {
  constructor({ chainId: t }) {
    super(typeof t == "number" ? `Chain ID "${t}" is invalid.` : "Chain ID is invalid.", { name: "InvalidChainIdError" });
  }
}
const or = "/docs/contract/encodeDeployData";
function fs(e) {
  const { abi: t, args: n, bytecode: r } = e;
  if (!n || n.length === 0)
    return r;
  const s = t.find((i) => "type" in i && i.type === "constructor");
  if (!s)
    throw new Pc({ docsPath: or });
  if (!("inputs" in s))
    throw new Ls({ docsPath: or });
  if (!s.inputs || s.inputs.length === 0)
    throw new Ls({ docsPath: or });
  const o = St(s.inputs, n);
  return Ne([r, o]);
}
function kt({ blockNumber: e, chain: t, contract: n }) {
  var s;
  const r = (s = t == null ? void 0 : t.contracts) == null ? void 0 : s[n];
  if (!r)
    throw new Cr({
      chain: t,
      contract: { name: n }
    });
  if (e && r.blockCreated && r.blockCreated > e)
    throw new Cr({
      blockNumber: e,
      chain: t,
      contract: {
        name: n,
        blockCreated: r.blockCreated
      }
    });
  return r.address;
}
function Kf(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = mi(e, n);
    return s instanceof Kr ? e : s;
  })();
  return new li(r, {
    docsPath: t,
    ...n
  });
}
const ir = /* @__PURE__ */ new Map();
function Li({ fn: e, id: t, shouldSplitBatch: n, wait: r = 0, sort: s }) {
  const o = async () => {
    const f = c();
    i();
    const d = f.map(({ args: l }) => l);
    d.length !== 0 && e(d).then((l) => {
      var b;
      s && Array.isArray(l) && l.sort(s);
      for (let g = 0; g < f.length; g++) {
        const { pendingPromise: y } = f[g];
        (b = y.resolve) == null || b.call(y, [l[g], l]);
      }
    }).catch((l) => {
      var b;
      for (let g = 0; g < f.length; g++) {
        const { pendingPromise: y } = f[g];
        (b = y.reject) == null || b.call(y, l);
      }
    });
  }, i = () => ir.delete(t), a = () => c().map(({ args: f }) => f), c = () => ir.get(t) || [], u = (f) => ir.set(t, [...c(), f]);
  return {
    flush: i,
    async schedule(f) {
      const d = {}, l = new Promise((y, p) => {
        d.resolve = y, d.reject = p;
      });
      return (n == null ? void 0 : n([...a(), f])) && o(), c().length > 0 ? (u({ args: f, pendingPromise: d }), l) : (u({ args: f, pendingPromise: d }), setTimeout(o, r), l);
    }
  };
}
async function Dn(e, t) {
  var O, N, D, T;
  const { account: n = e.account, batch: r = !!((O = e.batch) != null && O.multicall), blockNumber: s, blockTag: o = "latest", accessList: i, blobs: a, code: c, data: u, factory: f, factoryData: d, gas: l, gasPrice: b, maxFeePerBlobGas: g, maxFeePerGas: y, maxPriorityFeePerGas: p, nonce: m, to: w, value: v, stateOverride: x, ...R } = t, I = n ? et(n) : void 0;
  if (c && (f || d))
    throw new E("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
  if (c && w)
    throw new E("Cannot provide both `code` & `to` as parameters.");
  const A = c && u, B = f && d && w && u, $ = A || B, G = (() => A ? Qf({
    code: c,
    data: u
  }) : B ? ed({
    data: u,
    factory: f,
    factoryData: d,
    to: w
  }) : u)();
  try {
    Xr(t);
    const S = (s ? j(s) : void 0) || o, F = vi(x), M = (T = (D = (N = e.chain) == null ? void 0 : N.formatters) == null ? void 0 : D.transactionRequest) == null ? void 0 : T.format, W = (M || wi)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...gi(R, { format: M }),
      from: I == null ? void 0 : I.address,
      accessList: i,
      blobs: a,
      data: G,
      gas: l,
      gasPrice: b,
      maxFeePerBlobGas: g,
      maxFeePerGas: y,
      maxPriorityFeePerGas: p,
      nonce: m,
      to: $ ? void 0 : w,
      value: v
    });
    if (r && Jf({ request: W }) && !F)
      try {
        return await Xf(e, {
          ...W,
          blockNumber: s,
          blockTag: o
        });
      } catch (oe) {
        if (!(oe instanceof ji) && !(oe instanceof Cr))
          throw oe;
      }
    const K = await e.request({
      method: "eth_call",
      params: F ? [
        W,
        S,
        F
      ] : [W, S]
    });
    return K === "0x" ? { data: void 0 } : { data: K };
  } catch (C) {
    const S = td(C), { offchainLookup: F, offchainLookupSignature: M } = await import("./ccip-4a20e815.mjs");
    if (e.ccipRead !== !1 && (S == null ? void 0 : S.slice(0, 10)) === M && w)
      return { data: await F(e, { data: S, to: w }) };
    throw $ && (S == null ? void 0 : S.slice(0, 10)) === "0x101bb98d" ? new af({ factory: f }) : Kf(C, {
      ...t,
      account: I,
      chain: e.chain
    });
  }
}
function Jf({ request: e }) {
  const { data: t, to: n, ...r } = e;
  return !(!t || t.startsWith(Vf) || !n || Object.values(r).filter((s) => typeof s < "u").length > 0);
}
async function Xf(e, t) {
  var y;
  const { batchSize: n = 1024, wait: r = 0 } = typeof ((y = e.batch) == null ? void 0 : y.multicall) == "object" ? e.batch.multicall : {}, { blockNumber: s, blockTag: o = "latest", data: i, multicallAddress: a, to: c } = t;
  let u = a;
  if (!u) {
    if (!e.chain)
      throw new ji();
    u = kt({
      blockNumber: s,
      chain: e.chain,
      contract: "multicall3"
    });
  }
  const d = (s ? j(s) : void 0) || o, { schedule: l } = Li({
    id: `${e.uid}.${d}`,
    wait: r,
    shouldSplitBatch(p) {
      return p.reduce((w, { data: v }) => w + (v.length - 2), 0) > n * 2;
    },
    fn: async (p) => {
      const m = p.map((x) => ({
        allowFailure: !0,
        callData: x.data,
        target: x.to
      })), w = tt({
        abi: Sr,
        args: [m],
        functionName: "aggregate3"
      }), v = await e.request({
        method: "eth_call",
        params: [
          {
            data: w,
            to: u
          },
          d
        ]
      });
      return Rt({
        abi: Sr,
        args: [m],
        functionName: "aggregate3",
        data: v || "0x"
      });
    }
  }), [{ returnData: b, success: g }] = await l({ data: i, to: c });
  if (!g)
    throw new Yr({ data: b });
  return b === "0x" ? { data: void 0 } : { data: b };
}
function Qf(e) {
  const { code: t, data: n } = e;
  return fs({
    abi: Mo(["constructor(bytes, bytes)"]),
    bytecode: Zf,
    args: [t, n]
  });
}
function ed(e) {
  const { data: t, factory: n, factoryData: r, to: s } = e;
  return fs({
    abi: Mo(["constructor(address, bytes, address, bytes)"]),
    bytecode: Wf,
    args: [s, t, n, r]
  });
}
function td(e) {
  var n;
  if (!(e instanceof E))
    return;
  const t = e.walk();
  return typeof (t == null ? void 0 : t.data) == "object" ? (n = t.data) == null ? void 0 : n.data : t.data;
}
async function Ge(e, t) {
  const { abi: n, address: r, args: s, functionName: o, ...i } = t, a = tt({
    abi: n,
    args: s,
    functionName: o
  });
  try {
    const { data: c } = await L(e, Dn, "call")({
      ...i,
      data: a,
      to: r
    });
    return Rt({
      abi: n,
      args: s,
      functionName: o,
      data: c || "0x"
    });
  } catch (c) {
    throw cn(c, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/readContract",
      functionName: o
    });
  }
}
async function nd(e, t) {
  const { abi: n, address: r, args: s, dataSuffix: o, functionName: i, ...a } = t, c = a.account ? et(a.account) : e.account, u = tt({ abi: n, args: s, functionName: i });
  try {
    const { data: f } = await L(e, Dn, "call")({
      batch: !1,
      data: `${u}${o ? o.replace("0x", "") : ""}`,
      to: r,
      ...a,
      account: c
    }), d = Rt({
      abi: n,
      args: s,
      functionName: i,
      data: f || "0x"
    }), l = n.filter((b) => "name" in b && b.name === t.functionName);
    return {
      result: d,
      request: {
        abi: l,
        address: r,
        args: s,
        dataSuffix: o,
        functionName: i,
        ...a,
        account: c
      }
    };
  } catch (f) {
    throw cn(f, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/simulateContract",
      functionName: i,
      sender: c == null ? void 0 : c.address
    });
  }
}
const ar = /* @__PURE__ */ new Map(), fo = /* @__PURE__ */ new Map();
let rd = 0;
function Xe(e, t, n) {
  const r = ++rd, s = () => ar.get(e) || [], o = () => {
    const f = s();
    ar.set(e, f.filter((d) => d.id !== r));
  }, i = () => {
    const f = fo.get(e);
    s().length === 1 && f && f(), o();
  }, a = s();
  if (ar.set(e, [
    ...a,
    { id: r, fns: t }
  ]), a && a.length > 0)
    return i;
  const c = {};
  for (const f in t)
    c[f] = (...d) => {
      var b, g;
      const l = s();
      if (l.length !== 0)
        for (const y of l)
          (g = (b = y.fns)[f]) == null || g.call(b, ...d);
    };
  const u = n(c);
  return typeof u == "function" && fo.set(e, u), i;
}
async function Rr(e) {
  return new Promise((t) => setTimeout(t, e));
}
function pn(e, { emitOnBegin: t, initialWaitTime: n, interval: r }) {
  let s = !0;
  const o = () => s = !1;
  return (async () => {
    let a;
    t && (a = await e({ unpoll: o }));
    const c = await (n == null ? void 0 : n(a)) ?? r;
    await Rr(c);
    const u = async () => {
      s && (await e({ unpoll: o }), await Rr(r), u());
    };
    u();
  })(), o;
}
const sd = /* @__PURE__ */ new Map(), od = /* @__PURE__ */ new Map();
function id(e) {
  const t = (s, o) => ({
    clear: () => o.delete(s),
    get: () => o.get(s),
    set: (i) => o.set(s, i)
  }), n = t(e, sd), r = t(e, od);
  return {
    clear: () => {
      n.clear(), r.clear();
    },
    promise: n,
    response: r
  };
}
async function ad(e, { cacheKey: t, cacheTime: n = Number.POSITIVE_INFINITY }) {
  const r = id(t), s = r.response.get();
  if (s && n > 0 && (/* @__PURE__ */ new Date()).getTime() - s.created.getTime() < n)
    return s.data;
  let o = r.promise.get();
  o || (o = e(), r.promise.set(o));
  try {
    const i = await o;
    return r.response.set({ created: /* @__PURE__ */ new Date(), data: i }), i;
  } finally {
    r.promise.clear();
  }
}
const cd = (e) => `blockNumber.${e}`;
async function bn(e, { cacheTime: t = e.cacheTime } = {}) {
  const n = await ad(() => e.request({
    method: "eth_blockNumber"
  }), { cacheKey: cd(e.uid), cacheTime: t });
  return BigInt(n);
}
async function Un(e, { filter: t }) {
  const n = "strict" in t && t.strict, r = await t.request({
    method: "eth_getFilterChanges",
    params: [t.id]
  });
  if (typeof r[0] == "string")
    return r;
  const s = r.map((o) => Je(o));
  return !("abi" in t) || !t.abi ? s : cs({
    abi: t.abi,
    logs: s,
    strict: n
  });
}
async function Gn(e, { filter: t }) {
  return t.request({
    method: "eth_uninstallFilter",
    params: [t.id]
  });
}
function ud(e, t) {
  const { abi: n, address: r, args: s, batch: o = !0, eventName: i, fromBlock: a, onError: c, onLogs: u, poll: f, pollingInterval: d = e.pollingInterval, strict: l } = t;
  return (() => typeof f < "u" ? f : typeof a == "bigint" ? !0 : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket"))() ? (() => {
    const p = l ?? !1, m = ce([
      "watchContractEvent",
      r,
      s,
      o,
      e.uid,
      i,
      d,
      p,
      a
    ]);
    return Xe(m, { onLogs: u, onError: c }, (w) => {
      let v;
      a !== void 0 && (v = a - 1n);
      let x, R = !1;
      const I = pn(async () => {
        var A;
        if (!R) {
          try {
            x = await L(e, si, "createContractEventFilter")({
              abi: n,
              address: r,
              args: s,
              eventName: i,
              strict: p,
              fromBlock: a
            });
          } catch {
          }
          R = !0;
          return;
        }
        try {
          let B;
          if (x)
            B = await L(e, Un, "getFilterChanges")({ filter: x });
          else {
            const $ = await L(e, bn, "getBlockNumber")({});
            v && v < $ ? B = await L(e, _i, "getContractEvents")({
              abi: n,
              address: r,
              args: s,
              eventName: i,
              fromBlock: v + 1n,
              toBlock: $,
              strict: p
            }) : B = [], v = $;
          }
          if (B.length === 0)
            return;
          if (o)
            w.onLogs(B);
          else
            for (const $ of B)
              w.onLogs([$]);
        } catch (B) {
          x && B instanceof ft && (R = !1), (A = w.onError) == null || A.call(w, B);
        }
      }, {
        emitOnBegin: !0,
        interval: d
      });
      return async () => {
        x && await L(e, Gn, "uninstallFilter")({ filter: x }), I();
      };
    });
  })() : (() => {
    const p = l ?? !1, m = ce([
      "watchContractEvent",
      r,
      s,
      o,
      e.uid,
      i,
      d,
      p
    ]);
    let w = !0, v = () => w = !1;
    return Xe(m, { onLogs: u, onError: c }, (x) => ((async () => {
      try {
        const R = (() => {
          if (e.transport.type === "fallback") {
            const B = e.transport.transports.find(($) => $.config.type === "webSocket");
            return B ? B.value : e.transport;
          }
          return e.transport;
        })(), I = i ? hn({
          abi: n,
          eventName: i,
          args: s
        }) : [], { unsubscribe: A } = await R.subscribe({
          params: ["logs", { address: r, topics: I }],
          onData(B) {
            var G;
            if (!w)
              return;
            const $ = B.result;
            try {
              const { eventName: O, args: N } = as({
                abi: n,
                data: $.data,
                topics: $.topics,
                strict: l
              }), D = Je($, {
                args: N,
                eventName: O
              });
              x.onLogs([D]);
            } catch (O) {
              let N, D;
              if (O instanceof Gt || O instanceof Rn) {
                if (l)
                  return;
                N = O.abiItem.name, D = (G = O.abiItem.inputs) == null ? void 0 : G.some((C) => !("name" in C && C.name));
              }
              const T = Je($, {
                args: D ? [] : {},
                eventName: N
              });
              x.onLogs([T]);
            }
          },
          onError(B) {
            var $;
            ($ = x.onError) == null || $.call(x, B);
          }
        });
        v = A, w || v();
      } catch (R) {
        c == null || c(R);
      }
    })(), () => v()));
  })();
}
async function fd(e, { serializedTransaction: t }) {
  return e.request({
    method: "eth_sendRawTransaction",
    params: [t]
  }, { retryCount: 0 });
}
class dd extends E {
  constructor({ address: t }) {
    super(`No EIP-712 domain found on contract "${t}".`, {
      metaMessages: [
        "Ensure that:",
        `- The contract is deployed at the address "${t}".`,
        "- `eip712Domain()` function exists on the contract.",
        "- `eip712Domain()` function matches signature to ERC-5267 specification."
      ],
      name: "Eip712DomainNotFoundError"
    });
  }
}
async function ld(e, t) {
  const { address: n, factory: r, factoryData: s } = t;
  try {
    const [o, i, a, c, u, f, d] = await L(e, Ge, "readContract")({
      abi: hd,
      address: n,
      functionName: "eip712Domain",
      factory: r,
      factoryData: s
    });
    return {
      domain: {
        name: i,
        version: a,
        chainId: Number(c),
        verifyingContract: u,
        salt: f
      },
      extensions: d,
      fields: o
    };
  } catch (o) {
    const i = o;
    throw i.name === "ContractFunctionExecutionError" && i.cause.name === "ContractFunctionZeroDataError" ? new dd({ address: n }) : i;
  }
}
const hd = [
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", type: "bytes1" },
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
      { name: "salt", type: "bytes32" },
      { name: "extensions", type: "uint256[]" }
    ],
    stateMutability: "view",
    type: "function"
  }
], kr = 256;
let Pn = kr, An;
function Di(e = 11) {
  if (!An || Pn + e > kr * 2) {
    An = "", Pn = 0;
    for (let t = 0; t < kr; t++)
      An += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return An.substring(Pn, Pn++ + e);
}
function pd(e) {
  const { batch: t, cacheTime: n = e.pollingInterval ?? 4e3, ccipRead: r, key: s = "base", name: o = "Base Client", pollingInterval: i = 4e3, type: a = "base" } = e, c = e.chain, u = e.account ? et(e.account) : void 0, { config: f, request: d, value: l } = e.transport({
    chain: c,
    pollingInterval: i
  }), b = { ...f, ...l }, g = {
    account: u,
    batch: t,
    cacheTime: n,
    ccipRead: r,
    chain: c,
    key: s,
    name: o,
    pollingInterval: i,
    request: d,
    transport: b,
    type: a,
    uid: Di()
  };
  function y(p) {
    return (m) => {
      const w = m(p);
      for (const x in g)
        delete w[x];
      const v = { ...p, ...w };
      return Object.assign(v, { extend: y(v) });
    };
  }
  return Object.assign(g, { extend: y(g) });
}
const Bn = /* @__PURE__ */ new Ur(8192);
function bd(e, { enabled: t = !0, id: n }) {
  if (!t || !n)
    return e();
  if (Bn.get(n))
    return Bn.get(n);
  const r = e().finally(() => Bn.delete(n));
  return Bn.set(n, r), r;
}
function Fr(e, { delay: t = 100, retryCount: n = 2, shouldRetry: r = () => !0 } = {}) {
  return new Promise((s, o) => {
    const i = async ({ count: a = 0 } = {}) => {
      const c = async ({ error: u }) => {
        const f = typeof t == "function" ? t({ count: a, error: u }) : t;
        f && await Rr(f), i({ count: a + 1 });
      };
      try {
        const u = await e();
        s(u);
      } catch (u) {
        if (a < n && await r({ count: a, error: u }))
          return c({ error: u });
        o(u);
      }
    };
    i();
  });
}
function yd(e, t = {}) {
  return async (n, r = {}) => {
    const { dedupe: s = !1, retryDelay: o = 150, retryCount: i = 3, uid: a } = {
      ...t,
      ...r
    }, c = s ? ne(Ht(`${a}.${ce(n)}`)) : void 0;
    return bd(() => Fr(async () => {
      try {
        return await e(n);
      } catch (u) {
        const f = u;
        switch (f.code) {
          case Zt.code:
            throw new Zt(f);
          case Wt.code:
            throw new Wt(f);
          case Yt.code:
            throw new Yt(f, { method: n.method });
          case Kt.code:
            throw new Kt(f);
          case ut.code:
            throw new ut(f);
          case ft.code:
            throw new ft(f);
          case Jt.code:
            throw new Jt(f);
          case Xt.code:
            throw new Xt(f);
          case Qt.code:
            throw new Qt(f);
          case en.code:
            throw new en(f, {
              method: n.method
            });
          case Et.code:
            throw new Et(f);
          case tn.code:
            throw new tn(f);
          case vt.code:
            throw new vt(f);
          case nn.code:
            throw new nn(f);
          case rn.code:
            throw new rn(f);
          case sn.code:
            throw new sn(f);
          case on.code:
            throw new on(f);
          case an.code:
            throw new an(f);
          case 5e3:
            throw new vt(f);
          default:
            throw u instanceof E ? u : new uf(f);
        }
      }
    }, {
      delay: ({ count: u, error: f }) => {
        var d;
        if (f && f instanceof Ut) {
          const l = (d = f == null ? void 0 : f.headers) == null ? void 0 : d.get("Retry-After");
          if (l != null && l.match(/\d/))
            return Number.parseInt(l) * 1e3;
        }
        return ~~(1 << u) * o;
      },
      retryCount: i,
      shouldRetry: ({ error: u }) => md(u)
    }), { enabled: s, id: c });
  };
}
function md(e) {
  return "code" in e && typeof e.code == "number" ? e.code === -1 || e.code === Et.code || e.code === ut.code : e instanceof Ut && e.status ? e.status === 403 || e.status === 408 || e.status === 413 || e.status === 429 || e.status === 500 || e.status === 502 || e.status === 503 || e.status === 504 : !0;
}
function gd({ key: e, name: t, request: n, retryCount: r = 3, retryDelay: s = 150, timeout: o, type: i }, a) {
  const c = Di();
  return {
    config: {
      key: e,
      name: t,
      request: n,
      retryCount: r,
      retryDelay: s,
      timeout: o,
      type: i
    },
    request: yd(n, { retryCount: r, retryDelay: s, uid: c }),
    value: a
  };
}
class wd extends E {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
      docsPath: "/docs/clients/intro",
      name: "UrlRequiredError"
    });
  }
}
function vd(e, { errorInstance: t = new Error("timed out"), timeout: n, signal: r }) {
  return new Promise((s, o) => {
    (async () => {
      let i;
      try {
        const a = new AbortController();
        n > 0 && (i = setTimeout(() => {
          r ? a.abort() : o(t);
        }, n)), s(await e({ signal: (a == null ? void 0 : a.signal) || null }));
      } catch (a) {
        (a == null ? void 0 : a.name) === "AbortError" && o(t), o(a);
      } finally {
        clearTimeout(i);
      }
    })();
  });
}
function xd() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    }
  };
}
const lo = /* @__PURE__ */ xd();
function Ed(e, t = {}) {
  return {
    async request(n) {
      var d;
      const { body: r, onRequest: s = t.onRequest, onResponse: o = t.onResponse, timeout: i = t.timeout ?? 1e4 } = n, a = {
        ...t.fetchOptions ?? {},
        ...n.fetchOptions ?? {}
      }, { headers: c, method: u, signal: f } = a;
      try {
        const l = await vd(async ({ signal: g }) => {
          const y = {
            ...a,
            body: Array.isArray(r) ? ce(r.map((v) => ({
              jsonrpc: "2.0",
              id: v.id ?? lo.take(),
              ...v
            }))) : ce({
              jsonrpc: "2.0",
              id: r.id ?? lo.take(),
              ...r
            }),
            headers: {
              "Content-Type": "application/json",
              ...c
            },
            method: u || "POST",
            signal: f || (i > 0 ? g : null)
          }, p = new Request(e, y), m = await (s == null ? void 0 : s(p, y)) ?? { ...y, url: e };
          return await fetch(m.url ?? e, m);
        }, {
          errorInstance: new to({ body: r, url: e }),
          timeout: i,
          signal: !0
        });
        o && await o(l);
        let b;
        if ((d = l.headers.get("Content-Type")) != null && d.startsWith("application/json"))
          b = await l.json();
        else {
          b = await l.text();
          try {
            b = JSON.parse(b || "{}");
          } catch (g) {
            if (l.ok)
              throw g;
            b = { error: b };
          }
        }
        if (!l.ok)
          throw new Ut({
            body: r,
            details: ce(b.error) || l.statusText,
            headers: l.headers,
            status: l.status,
            url: e
          });
        return b;
      } catch (l) {
        throw l instanceof Ut || l instanceof to ? l : new Ut({
          body: r,
          cause: l,
          url: e
        });
      }
    }
  };
}
function Pd(e, t = {}) {
  const { batch: n, fetchOptions: r, key: s = "http", name: o = "HTTP JSON-RPC", onFetchRequest: i, onFetchResponse: a, retryDelay: c } = t;
  return ({ chain: u, retryCount: f, timeout: d }) => {
    const { batchSize: l = 1e3, wait: b = 0 } = typeof n == "object" ? n : {}, g = t.retryCount ?? f, y = d ?? t.timeout ?? 1e4, p = e || (u == null ? void 0 : u.rpcUrls.default.http[0]);
    if (!p)
      throw new wd();
    const m = Ed(p, {
      fetchOptions: r,
      onRequest: i,
      onResponse: a,
      timeout: y
    });
    return gd({
      key: s,
      name: o,
      async request({ method: w, params: v }) {
        const x = { method: w, params: v }, { schedule: R } = Li({
          id: p,
          wait: b,
          shouldSplitBatch($) {
            return $.length > l;
          },
          fn: ($) => m.request({
            body: $
          }),
          sort: ($, G) => $.id - G.id
        }), I = async ($) => n ? R($) : [
          await m.request({
            body: $
          })
        ], [{ error: A, result: B }] = await I(x);
        if (A)
          throw new hi({
            body: x,
            error: A,
            url: p
          });
        return B;
      },
      retryCount: g,
      retryDelay: c,
      timeout: y,
      type: "http"
    }, {
      fetchOptions: r,
      url: p
    });
  };
}
function ds(e, t) {
  var r, s, o, i, a, c;
  if (!(e instanceof E))
    return !1;
  const n = e.walk((u) => u instanceof wr);
  return n instanceof wr ? !!(((r = n.data) == null ? void 0 : r.errorName) === "ResolverNotFound" || ((s = n.data) == null ? void 0 : s.errorName) === "ResolverWildcardNotSupported" || ((o = n.data) == null ? void 0 : o.errorName) === "ResolverNotContract" || ((i = n.data) == null ? void 0 : i.errorName) === "ResolverError" || ((a = n.data) == null ? void 0 : a.errorName) === "HttpError" || (c = n.reason) != null && c.includes("Wildcard on non-extended resolvers is not supported") || t === "reverse" && n.reason === oi[50]) : !1;
}
function Ui(e) {
  if (e.length !== 66 || e.indexOf("[") !== 0 || e.indexOf("]") !== 65)
    return null;
  const t = `0x${e.slice(1, 65)}`;
  return ke(t) ? t : null;
}
function $n(e) {
  let t = new Uint8Array(32).fill(0);
  if (!e)
    return ee(t);
  const n = e.split(".");
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const s = Ui(n[r]), o = s ? Tt(s) : ne(it(n[r]), "bytes");
    t = ne(Ue([t, o]), "bytes");
  }
  return ee(t);
}
function Ad(e) {
  return `[${e.slice(2)}]`;
}
function Bd(e) {
  const t = new Uint8Array(32).fill(0);
  return e ? Ui(e) || ne(it(e)) : ee(t);
}
function Hn(e) {
  const t = e.replace(/^\.|\.$/gm, "");
  if (t.length === 0)
    return new Uint8Array(1);
  const n = new Uint8Array(it(t).byteLength + 2);
  let r = 0;
  const s = t.split(".");
  for (let o = 0; o < s.length; o++) {
    let i = it(s[o]);
    i.byteLength > 255 && (i = it(Ad(Bd(s[o])))), n[r] = i.length, n.set(i, r + 1), r += i.length + 1;
  }
  return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n;
}
async function $d(e, { blockNumber: t, blockTag: n, coinType: r, name: s, gatewayUrls: o, strict: i, universalResolverAddress: a }) {
  let c = a;
  if (!c) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    c = kt({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const u = tt({
      abi: co,
      functionName: "addr",
      ...r != null ? { args: [$n(s), BigInt(r)] } : { args: [$n(s)] }
    }), f = {
      address: c,
      abi: Mi,
      functionName: "resolve",
      args: [_(Hn(s)), u],
      blockNumber: t,
      blockTag: n
    }, d = L(e, Ge, "readContract"), l = o ? await d({
      ...f,
      args: [...f.args, o]
    }) : await d(f);
    if (l[0] === "0x")
      return null;
    const b = Rt({
      abi: co,
      args: r != null ? [$n(s), BigInt(r)] : void 0,
      functionName: "addr",
      data: l[0]
    });
    return b === "0x" || $e(b) === "0x00" ? null : b;
  } catch (u) {
    if (i)
      throw u;
    if (ds(u, "resolve"))
      return null;
    throw u;
  }
}
class Id extends E {
  constructor({ data: t }) {
    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
      metaMessages: [
        "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
        "",
        `Provided data: ${JSON.stringify(t)}`
      ],
      name: "EnsAvatarInvalidMetadataError"
    });
  }
}
class jt extends E {
  constructor({ reason: t }) {
    super(`ENS NFT avatar URI is invalid. ${t}`, {
      name: "EnsAvatarInvalidNftUriError"
    });
  }
}
class ls extends E {
  constructor({ uri: t }) {
    super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`, { name: "EnsAvatarUriResolutionError" });
  }
}
class Td extends E {
  constructor({ namespace: t }) {
    super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`, { name: "EnsAvatarUnsupportedNamespaceError" });
  }
}
const Sd = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/, Cd = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/, Rd = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/, kd = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function Fd(e) {
  try {
    const t = await fetch(e, { method: "HEAD" });
    if (t.status === 200) {
      const n = t.headers.get("content-type");
      return n == null ? void 0 : n.startsWith("image/");
    }
    return !1;
  } catch (t) {
    return typeof t == "object" && typeof t.response < "u" || !globalThis.hasOwnProperty("Image") ? !1 : new Promise((n) => {
      const r = new Image();
      r.onload = () => {
        n(!0);
      }, r.onerror = () => {
        n(!1);
      }, r.src = e;
    });
  }
}
function ho(e, t) {
  return e ? e.endsWith("/") ? e.slice(0, -1) : e : t;
}
function Gi({ uri: e, gatewayUrls: t }) {
  const n = Rd.test(e);
  if (n)
    return { uri: e, isOnChain: !0, isEncoded: n };
  const r = ho(t == null ? void 0 : t.ipfs, "https://ipfs.io"), s = ho(t == null ? void 0 : t.arweave, "https://arweave.net"), o = e.match(Sd), { protocol: i, subpath: a, target: c, subtarget: u = "" } = (o == null ? void 0 : o.groups) || {}, f = i === "ipns:/" || a === "ipns/", d = i === "ipfs:/" || a === "ipfs/" || Cd.test(e);
  if (e.startsWith("http") && !f && !d) {
    let b = e;
    return t != null && t.arweave && (b = e.replace(/https:\/\/arweave.net/g, t == null ? void 0 : t.arweave)), { uri: b, isOnChain: !1, isEncoded: !1 };
  }
  if ((f || d) && c)
    return {
      uri: `${r}/${f ? "ipns" : "ipfs"}/${c}${u}`,
      isOnChain: !1,
      isEncoded: !1
    };
  if (i === "ar:/" && c)
    return {
      uri: `${s}/${c}${u || ""}`,
      isOnChain: !1,
      isEncoded: !1
    };
  let l = e.replace(kd, "");
  if (l.startsWith("<svg") && (l = `data:image/svg+xml;base64,${btoa(l)}`), l.startsWith("data:") || l.startsWith("{"))
    return {
      uri: l,
      isOnChain: !0,
      isEncoded: !1
    };
  throw new ls({ uri: e });
}
function Hi(e) {
  if (typeof e != "object" || !("image" in e) && !("image_url" in e) && !("image_data" in e))
    throw new Id({ data: e });
  return e.image || e.image_url || e.image_data;
}
async function Nd({ gatewayUrls: e, uri: t }) {
  try {
    const n = await fetch(t).then((s) => s.json());
    return await hs({
      gatewayUrls: e,
      uri: Hi(n)
    });
  } catch {
    throw new ls({ uri: t });
  }
}
async function hs({ gatewayUrls: e, uri: t }) {
  const { uri: n, isOnChain: r } = Gi({ uri: t, gatewayUrls: e });
  if (r || await Fd(n))
    return n;
  throw new ls({ uri: t });
}
function Od(e) {
  let t = e;
  t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
  const [n, r, s] = t.split("/"), [o, i] = n.split(":"), [a, c] = r.split(":");
  if (!o || o.toLowerCase() !== "eip155")
    throw new jt({ reason: "Only EIP-155 supported" });
  if (!i)
    throw new jt({ reason: "Chain ID not found" });
  if (!c)
    throw new jt({
      reason: "Contract address not found"
    });
  if (!s)
    throw new jt({ reason: "Token ID not found" });
  if (!a)
    throw new jt({ reason: "ERC namespace not found" });
  return {
    chainID: Number.parseInt(i),
    namespace: a.toLowerCase(),
    contractAddress: c,
    tokenID: s
  };
}
async function _d(e, { nft: t }) {
  if (t.namespace === "erc721")
    return Ge(e, {
      address: t.contractAddress,
      abi: [
        {
          name: "tokenURI",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "tokenURI",
      args: [BigInt(t.tokenID)]
    });
  if (t.namespace === "erc1155")
    return Ge(e, {
      address: t.contractAddress,
      abi: [
        {
          name: "uri",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "_id", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "uri",
      args: [BigInt(t.tokenID)]
    });
  throw new Td({ namespace: t.namespace });
}
async function zd(e, { gatewayUrls: t, record: n }) {
  return /eip155:/i.test(n) ? Md(e, { gatewayUrls: t, record: n }) : hs({ uri: n, gatewayUrls: t });
}
async function Md(e, { gatewayUrls: t, record: n }) {
  const r = Od(n), s = await _d(e, { nft: r }), { uri: o, isOnChain: i, isEncoded: a } = Gi({ uri: s, gatewayUrls: t });
  if (i && (o.includes("data:application/json;base64,") || o.startsWith("{"))) {
    const u = a ? (
      // if it is encoded, decode it
      atob(o.replace("data:application/json;base64,", ""))
    ) : (
      // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
      o
    ), f = JSON.parse(u);
    return hs({ uri: Hi(f), gatewayUrls: t });
  }
  let c = r.tokenID;
  return r.namespace === "erc1155" && (c = c.replace("0x", "").padStart(64, "0")), Nd({
    gatewayUrls: t,
    uri: o.replace(/(?:0x)?{id}/, c)
  });
}
async function qi(e, { blockNumber: t, blockTag: n, name: r, key: s, gatewayUrls: o, strict: i, universalResolverAddress: a }) {
  let c = a;
  if (!c) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    c = kt({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const u = {
      address: c,
      abi: Mi,
      functionName: "resolve",
      args: [
        _(Hn(r)),
        tt({
          abi: ao,
          functionName: "text",
          args: [$n(r), s]
        })
      ],
      blockNumber: t,
      blockTag: n
    }, f = L(e, Ge, "readContract"), d = o ? await f({
      ...u,
      args: [...u.args, o]
    }) : await f(u);
    if (d[0] === "0x")
      return null;
    const l = Rt({
      abi: ao,
      functionName: "text",
      data: d[0]
    });
    return l === "" ? null : l;
  } catch (u) {
    if (i)
      throw u;
    if (ds(u, "resolve"))
      return null;
    throw u;
  }
}
async function jd(e, { blockNumber: t, blockTag: n, assetGatewayUrls: r, name: s, gatewayUrls: o, strict: i, universalResolverAddress: a }) {
  const c = await L(e, qi, "getEnsText")({
    blockNumber: t,
    blockTag: n,
    key: "avatar",
    name: s,
    universalResolverAddress: a,
    gatewayUrls: o,
    strict: i
  });
  if (!c)
    return null;
  try {
    return await zd(e, {
      record: c,
      gatewayUrls: r
    });
  } catch {
    return null;
  }
}
async function Ld(e, { address: t, blockNumber: n, blockTag: r, gatewayUrls: s, strict: o, universalResolverAddress: i }) {
  let a = i;
  if (!a) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    a = kt({
      blockNumber: n,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  const c = `${t.toLowerCase().substring(2)}.addr.reverse`;
  try {
    const u = {
      address: a,
      abi: qf,
      functionName: "reverse",
      args: [_(Hn(c))],
      blockNumber: n,
      blockTag: r
    }, f = L(e, Ge, "readContract"), [d, l] = s ? await f({
      ...u,
      args: [...u.args, s]
    }) : await f(u);
    return t.toLowerCase() !== l.toLowerCase() ? null : d;
  } catch (u) {
    if (o)
      throw u;
    if (ds(u, "reverse"))
      return null;
    throw u;
  }
}
async function Dd(e, { blockNumber: t, blockTag: n, name: r, universalResolverAddress: s }) {
  let o = s;
  if (!o) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    o = kt({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  const [i] = await L(e, Ge, "readContract")({
    address: o,
    abi: [
      {
        inputs: [{ type: "bytes" }],
        name: "findResolver",
        outputs: [{ type: "address" }, { type: "bytes32" }],
        stateMutability: "view",
        type: "function"
      }
    ],
    functionName: "findResolver",
    args: [_(Hn(r))],
    blockNumber: t,
    blockTag: n
  });
  return i;
}
async function Ud(e) {
  const t = On(e, {
    method: "eth_newBlockFilter"
  }), n = await e.request({
    method: "eth_newBlockFilter"
  });
  return { id: n, request: t(n), type: "block" };
}
async function Vi(e, { address: t, args: n, event: r, events: s, fromBlock: o, strict: i, toBlock: a } = {}) {
  const c = s ?? (r ? [r] : void 0), u = On(e, {
    method: "eth_newFilter"
  });
  let f = [];
  c && (f = [c.flatMap((b) => hn({
    abi: [b],
    eventName: b.name,
    args: n
  }))], r && (f = f[0]));
  const d = await e.request({
    method: "eth_newFilter",
    params: [
      {
        address: t,
        fromBlock: typeof o == "bigint" ? j(o) : o,
        toBlock: typeof a == "bigint" ? j(a) : a,
        ...f.length ? { topics: f } : {}
      }
    ]
  });
  return {
    abi: c,
    args: n,
    eventName: r ? r.name : void 0,
    fromBlock: o,
    id: d,
    request: u(d),
    strict: !!i,
    toBlock: a,
    type: "event"
  };
}
async function Zi(e) {
  const t = On(e, {
    method: "eth_newPendingTransactionFilter"
  }), n = await e.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id: n, request: t(n), type: "transaction" };
}
async function Gd(e) {
  const t = await e.request({
    method: "eth_blobBaseFee"
  });
  return BigInt(t);
}
async function Hd(e, { blockHash: t, blockNumber: n, blockTag: r = "latest" } = {}) {
  const s = n !== void 0 ? j(n) : void 0;
  let o;
  return t ? o = await e.request({
    method: "eth_getBlockTransactionCountByHash",
    params: [t]
  }, { dedupe: !0 }) : o = await e.request({
    method: "eth_getBlockTransactionCountByNumber",
    params: [s || r]
  }, { dedupe: !!s }), Fe(o);
}
async function po(e, { address: t, blockNumber: n, blockTag: r = "latest" }) {
  const s = n !== void 0 ? j(n) : void 0, o = await e.request({
    method: "eth_getCode",
    params: [t, s || r]
  }, { dedupe: !!s });
  if (o !== "0x")
    return o;
}
function qd(e) {
  var t;
  return {
    baseFeePerGas: e.baseFeePerGas.map((n) => BigInt(n)),
    gasUsedRatio: e.gasUsedRatio,
    oldestBlock: BigInt(e.oldestBlock),
    reward: (t = e.reward) == null ? void 0 : t.map((n) => n.map((r) => BigInt(r)))
  };
}
async function Vd(e, { blockCount: t, blockNumber: n, blockTag: r = "latest", rewardPercentiles: s }) {
  const o = n ? j(n) : void 0, i = await e.request({
    method: "eth_feeHistory",
    params: [
      j(t),
      o || r,
      s
    ]
  }, { dedupe: !!o });
  return qd(i);
}
async function Zd(e, { filter: t }) {
  const n = t.strict ?? !1, s = (await t.request({
    method: "eth_getFilterLogs",
    params: [t.id]
  })).map((o) => Je(o));
  return t.abi ? cs({
    abi: t.abi,
    logs: s,
    strict: n
  }) : s;
}
function Wi(e) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...e
  };
}
const Wd = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, Yd = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function Kd(e) {
  const { domain: t = {}, message: n, primaryType: r } = e, s = {
    EIP712Domain: tl({ domain: t }),
    ...e.types
  };
  el({
    domain: t,
    message: n,
    primaryType: r,
    types: s
  });
  const o = ["0x1901"];
  return t && o.push(Jd({
    domain: t,
    types: s
  })), r !== "EIP712Domain" && o.push(Yi({
    data: n,
    primaryType: r,
    types: s
  })), ne(Ue(o));
}
function Jd({ domain: e, types: t }) {
  return Yi({
    data: e,
    primaryType: "EIP712Domain",
    types: t
  });
}
function Yi({ data: e, primaryType: t, types: n }) {
  const r = Ki({
    data: e,
    primaryType: t,
    types: n
  });
  return ne(r);
}
function Ki({ data: e, primaryType: t, types: n }) {
  const r = [{ type: "bytes32" }], s = [Xd({ primaryType: t, types: n })];
  for (const o of n[t]) {
    const [i, a] = Xi({
      types: n,
      name: o.name,
      type: o.type,
      value: e[o.name]
    });
    r.push(i), s.push(a);
  }
  return St(r, s);
}
function Xd({ primaryType: e, types: t }) {
  const n = _(Qd({ primaryType: e, types: t }));
  return ne(n);
}
function Qd({ primaryType: e, types: t }) {
  let n = "";
  const r = Ji({ primaryType: e, types: t });
  r.delete(e);
  const s = [e, ...Array.from(r).sort()];
  for (const o of s)
    n += `${o}(${t[o].map(({ name: i, type: a }) => `${a} ${i}`).join(",")})`;
  return n;
}
function Ji({ primaryType: e, types: t }, n = /* @__PURE__ */ new Set()) {
  const r = e.match(/^\w*/u), s = r == null ? void 0 : r[0];
  if (n.has(s) || t[s] === void 0)
    return n;
  n.add(s);
  for (const o of t[s])
    Ji({ primaryType: o.type, types: t }, n);
  return n;
}
function Xi({ types: e, name: t, type: n, value: r }) {
  if (e[n] !== void 0)
    return [
      { type: "bytes32" },
      ne(Ki({ data: r, primaryType: n, types: e }))
    ];
  if (n === "bytes")
    return r = `0x${(r.length % 2 ? "0" : "") + r.slice(2)}`, [{ type: "bytes32" }, ne(r)];
  if (n === "string")
    return [{ type: "bytes32" }, ne(_(r))];
  if (n.lastIndexOf("]") === n.length - 1) {
    const s = n.slice(0, n.lastIndexOf("[")), o = r.map((i) => Xi({
      name: t,
      type: s,
      types: e,
      value: i
    }));
    return [
      { type: "bytes32" },
      ne(St(o.map(([i]) => i), o.map(([, i]) => i)))
    ];
  }
  return [{ type: n }, r];
}
function el(e) {
  const { domain: t, message: n, primaryType: r, types: s } = e, o = (i, a) => {
    for (const c of i) {
      const { name: u, type: f } = c, d = a[u], l = f.match(Yd);
      if (l && (typeof d == "number" || typeof d == "bigint")) {
        const [y, p, m] = l;
        j(d, {
          signed: p === "int",
          size: Number.parseInt(m) / 8
        });
      }
      if (f === "address" && typeof d == "string" && !se(d))
        throw new fe({ address: d });
      const b = f.match(Wd);
      if (b) {
        const [y, p] = b;
        if (p && Y(d) !== Number.parseInt(p))
          throw new Cc({
            expectedSize: Number.parseInt(p),
            givenSize: Y(d)
          });
      }
      const g = s[f];
      g && o(g, d);
    }
  };
  s.EIP712Domain && t && o(s.EIP712Domain, t), r !== "EIP712Domain" && o(s[r], n);
}
function tl({ domain: e }) {
  return [
    typeof (e == null ? void 0 : e.name) == "string" && { name: "name", type: "string" },
    (e == null ? void 0 : e.version) && { name: "version", type: "string" },
    typeof (e == null ? void 0 : e.chainId) == "number" && {
      name: "chainId",
      type: "uint256"
    },
    (e == null ? void 0 : e.verifyingContract) && {
      name: "verifyingContract",
      type: "address"
    },
    (e == null ? void 0 : e.salt) && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
const nl = {
  "0x0": "reverted",
  "0x1": "success"
};
function Qi(e) {
  const t = {
    ...e,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    contractAddress: e.contractAddress ? e.contractAddress : null,
    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
    logs: e.logs ? e.logs.map((n) => Je(n)) : null,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Fe(e.transactionIndex) : null,
    status: e.status ? nl[e.status] : null,
    type: e.type ? Ei[e.type] || e.type : null
  };
  return e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)), e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)), t;
}
const rl = /* @__PURE__ */ Jr("transactionReceipt", Qi), sl = `Ethereum Signed Message:
`;
function ol(e) {
  const t = (() => typeof e == "string" ? Ht(e) : typeof e.raw == "string" ? e.raw : ee(e.raw))(), n = Ht(`${sl}${Y(t)}`);
  return Ue([n, t]);
}
function ea(e, t) {
  return ne(ol(e), t);
}
const ta = "0x6492649264926492649264926492649264926492649264926492649264926492";
function il(e) {
  return ni(e, -32) === ta;
}
function al(e) {
  const { address: t, data: n, signature: r, to: s = "hex" } = e, o = Ne([
    St([{ type: "address" }, { type: "bytes" }, { type: "bytes" }], [t, n, r]),
    ta
  ]);
  return s === "hex" ? o : Te(o);
}
function cl(e) {
  const { authorizationList: t } = e;
  if (t)
    for (const n of t) {
      const { contractAddress: r, chainId: s } = n;
      if (!se(r))
        throw new fe({ address: r });
      if (s <= 0)
        throw new Ln({ chainId: s });
    }
  ps(e);
}
function ul(e) {
  const { blobVersionedHashes: t } = e;
  if (t) {
    if (t.length === 0)
      throw new Ci();
    for (const n of t) {
      const r = Y(n), s = Fe(qt(n, 0, 1));
      if (r !== 32)
        throw new Mf({ hash: n, size: r });
      if (s !== Si)
        throw new jf({
          hash: n,
          version: s
        });
    }
  }
  ps(e);
}
function ps(e) {
  const { chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: r, to: s } = e;
  if (t <= 0)
    throw new Ln({ chainId: t });
  if (s && !se(s))
    throw new fe({ address: s });
  if (r && r > Mn)
    throw new dt({ maxFeePerGas: r });
  if (n && r && n > r)
    throw new un({ maxFeePerGas: r, maxPriorityFeePerGas: n });
}
function fl(e) {
  const { chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: s, to: o } = e;
  if (t <= 0)
    throw new Ln({ chainId: t });
  if (o && !se(o))
    throw new fe({ address: o });
  if (n || s)
    throw new E("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
  if (r && r > Mn)
    throw new dt({ maxFeePerGas: r });
}
function dl(e) {
  const { chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: s, to: o } = e;
  if (o && !se(o))
    throw new fe({ address: o });
  if (typeof t < "u" && t <= 0)
    throw new Ln({ chainId: t });
  if (n || s)
    throw new E("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
  if (r && r > Mn)
    throw new dt({ maxFeePerGas: r });
}
function ll(e) {
  if (!e || e.length === 0)
    return [];
  const t = [];
  for (const n of e) {
    const { contractAddress: r, chainId: s, nonce: o, ...i } = n;
    t.push([
      _(s),
      r,
      o ? _(o) : "0x",
      ...yn({}, i)
    ]);
  }
  return t;
}
function qn(e) {
  if (!e || e.length === 0)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const { address: r, storageKeys: s } = e[n];
    for (let o = 0; o < s.length; o++)
      if (s[o].length - 2 !== 64)
        throw new tf({ storageKey: s[o] });
    if (!se(r, { strict: !1 }))
      throw new fe({ address: r });
    t.push([r, s]);
  }
  return t;
}
function hl(e, t) {
  const n = ki(e);
  return n === "eip1559" ? yl(e, t) : n === "eip2930" ? ml(e, t) : n === "eip4844" ? bl(e, t) : n === "eip7702" ? pl(e, t) : gl(e, t);
}
function pl(e, t) {
  const { authorizationList: n, chainId: r, gas: s, nonce: o, to: i, value: a, maxFeePerGas: c, maxPriorityFeePerGas: u, accessList: f, data: d } = e;
  cl(e);
  const l = qn(f), b = ll(n);
  return Ne([
    "0x04",
    Ke([
      _(r),
      o ? _(o) : "0x",
      u ? _(u) : "0x",
      c ? _(c) : "0x",
      s ? _(s) : "0x",
      i ?? "0x",
      a ? _(a) : "0x",
      d ?? "0x",
      l,
      b,
      ...yn(e, t)
    ])
  ]);
}
function bl(e, t) {
  const { chainId: n, gas: r, nonce: s, to: o, value: i, maxFeePerBlobGas: a, maxFeePerGas: c, maxPriorityFeePerGas: u, accessList: f, data: d } = e;
  ul(e);
  let l = e.blobVersionedHashes, b = e.sidecars;
  if (e.blobs && (typeof l > "u" || typeof b > "u")) {
    const v = typeof e.blobs[0] == "string" ? e.blobs : e.blobs.map((I) => ee(I)), x = e.kzg, R = ns({
      blobs: v,
      kzg: x
    });
    if (typeof l > "u" && (l = $i({
      commitments: R
    })), typeof b > "u") {
      const I = rs({ blobs: v, commitments: R, kzg: x });
      b = Ri({ blobs: v, commitments: R, proofs: I });
    }
  }
  const g = qn(f), y = [
    _(n),
    s ? _(s) : "0x",
    u ? _(u) : "0x",
    c ? _(c) : "0x",
    r ? _(r) : "0x",
    o ?? "0x",
    i ? _(i) : "0x",
    d ?? "0x",
    g,
    a ? _(a) : "0x",
    l ?? [],
    ...yn(e, t)
  ], p = [], m = [], w = [];
  if (b)
    for (let v = 0; v < b.length; v++) {
      const { blob: x, commitment: R, proof: I } = b[v];
      p.push(x), m.push(R), w.push(I);
    }
  return Ne([
    "0x03",
    // If sidecars are enabled, envelope turns into a "wrapper":
    Ke(b ? [y, p, m, w] : y)
  ]);
}
function yl(e, t) {
  const { chainId: n, gas: r, nonce: s, to: o, value: i, maxFeePerGas: a, maxPriorityFeePerGas: c, accessList: u, data: f } = e;
  ps(e);
  const d = qn(u), l = [
    _(n),
    s ? _(s) : "0x",
    c ? _(c) : "0x",
    a ? _(a) : "0x",
    r ? _(r) : "0x",
    o ?? "0x",
    i ? _(i) : "0x",
    f ?? "0x",
    d,
    ...yn(e, t)
  ];
  return Ne([
    "0x02",
    Ke(l)
  ]);
}
function ml(e, t) {
  const { chainId: n, gas: r, data: s, nonce: o, to: i, value: a, accessList: c, gasPrice: u } = e;
  fl(e);
  const f = qn(c), d = [
    _(n),
    o ? _(o) : "0x",
    u ? _(u) : "0x",
    r ? _(r) : "0x",
    i ?? "0x",
    a ? _(a) : "0x",
    s ?? "0x",
    f,
    ...yn(e, t)
  ];
  return Ne([
    "0x01",
    Ke(d)
  ]);
}
function gl(e, t) {
  const { chainId: n = 0, gas: r, data: s, nonce: o, to: i, value: a, gasPrice: c } = e;
  dl(e);
  let u = [
    o ? _(o) : "0x",
    c ? _(c) : "0x",
    r ? _(r) : "0x",
    i ?? "0x",
    a ? _(a) : "0x",
    s ?? "0x"
  ];
  if (t) {
    const f = (() => {
      if (t.v >= 35n)
        return (t.v - 35n) / 2n > 0 ? t.v : 27n + (t.v === 35n ? 0n : 1n);
      if (n > 0)
        return BigInt(n * 2) + BigInt(35n + t.v - 27n);
      const b = 27n + (t.v === 27n ? 0n : 1n);
      if (t.v !== b)
        throw new Qu({ v: t.v });
      return b;
    })(), d = $e(t.r), l = $e(t.s);
    u = [
      ...u,
      _(f),
      d === "0x00" ? "0x" : d,
      l === "0x00" ? "0x" : l
    ];
  } else
    n > 0 && (u = [
      ...u,
      _(n),
      "0x",
      "0x"
    ]);
  return Ke(u);
}
function yn(e, t) {
  const n = t ?? e, { v: r, yParity: s } = n;
  if (typeof n.r > "u")
    return [];
  if (typeof n.s > "u")
    return [];
  if (typeof r > "u" && typeof s > "u")
    return [];
  const o = $e(n.r), i = $e(n.s);
  return [(() => typeof s == "number" ? s ? _(1) : "0x" : r === 0n ? "0x" : r === 1n ? _(1) : r === 27n ? "0x" : _(1))(), o === "0x00" ? "0x" : o, i === "0x00" ? "0x" : i];
}
function wl(e) {
  return e.map((t) => ({
    ...t,
    value: BigInt(t.value)
  }));
}
function vl(e) {
  return {
    ...e,
    balance: e.balance ? BigInt(e.balance) : void 0,
    nonce: e.nonce ? Fe(e.nonce) : void 0,
    storageProof: e.storageProof ? wl(e.storageProof) : void 0
  };
}
async function xl(e, { address: t, blockNumber: n, blockTag: r, storageKeys: s }) {
  const o = r ?? "latest", i = n !== void 0 ? j(n) : void 0, a = await e.request({
    method: "eth_getProof",
    params: [t, s, i || o]
  });
  return vl(a);
}
async function El(e, { address: t, blockNumber: n, blockTag: r = "latest", slot: s }) {
  const o = n !== void 0 ? j(n) : void 0;
  return await e.request({
    method: "eth_getStorageAt",
    params: [t, s, o || r]
  });
}
async function bs(e, { blockHash: t, blockNumber: n, blockTag: r, hash: s, index: o }) {
  var f, d, l;
  const i = r || "latest", a = n !== void 0 ? j(n) : void 0;
  let c = null;
  if (s ? c = await e.request({
    method: "eth_getTransactionByHash",
    params: [s]
  }, { dedupe: !0 }) : t ? c = await e.request({
    method: "eth_getTransactionByBlockHashAndIndex",
    params: [t, j(o)]
  }, { dedupe: !0 }) : (a || i) && (c = await e.request({
    method: "eth_getTransactionByBlockNumberAndIndex",
    params: [a || i, j(o)]
  }, { dedupe: !!a })), !c)
    throw new fi({
      blockHash: t,
      blockNumber: n,
      blockTag: i,
      hash: s,
      index: o
    });
  return (((l = (d = (f = e.chain) == null ? void 0 : f.formatters) == null ? void 0 : d.transaction) == null ? void 0 : l.format) || jn)(c);
}
async function Pl(e, { hash: t, transactionReceipt: n }) {
  const [r, s] = await Promise.all([
    L(e, bn, "getBlockNumber")({}),
    t ? L(e, bs, "getTransaction")({ hash: t }) : void 0
  ]), o = (n == null ? void 0 : n.blockNumber) || (s == null ? void 0 : s.blockNumber);
  return o ? r - o + 1n : 0n;
}
async function Nr(e, { hash: t }) {
  var s, o, i;
  const n = await e.request({
    method: "eth_getTransactionReceipt",
    params: [t]
  }, { dedupe: !0 });
  if (!n)
    throw new di({ hash: t });
  return (((i = (o = (s = e.chain) == null ? void 0 : s.formatters) == null ? void 0 : o.transactionReceipt) == null ? void 0 : i.format) || Qi)(n);
}
async function Al(e, t) {
  var p;
  const { allowFailure: n = !0, batchSize: r, blockNumber: s, blockTag: o, multicallAddress: i, stateOverride: a } = t, c = t.contracts, u = r ?? (typeof ((p = e.batch) == null ? void 0 : p.multicall) == "object" && e.batch.multicall.batchSize || 1024);
  let f = i;
  if (!f) {
    if (!e.chain)
      throw new Error("client chain not configured. multicallAddress is required.");
    f = kt({
      blockNumber: s,
      chain: e.chain,
      contract: "multicall3"
    });
  }
  const d = [[]];
  let l = 0, b = 0;
  for (let m = 0; m < c.length; m++) {
    const { abi: w, address: v, args: x, functionName: R } = c[m];
    try {
      const I = tt({ abi: w, args: x, functionName: R });
      b += (I.length - 2) / 2, // Check if batching is enabled.
      u > 0 && // Check if the current size of the batch exceeds the size limit.
      b > u && // Check if the current chunk is not already empty.
      d[l].length > 0 && (l++, b = (I.length - 2) / 2, d[l] = []), d[l] = [
        ...d[l],
        {
          allowFailure: !0,
          callData: I,
          target: v
        }
      ];
    } catch (I) {
      const A = cn(I, {
        abi: w,
        address: v,
        args: x,
        docsPath: "/docs/contract/multicall",
        functionName: R
      });
      if (!n)
        throw A;
      d[l] = [
        ...d[l],
        {
          allowFailure: !0,
          callData: "0x",
          target: v
        }
      ];
    }
  }
  const g = await Promise.allSettled(d.map((m) => L(e, Ge, "readContract")({
    abi: Sr,
    address: f,
    args: [m],
    blockNumber: s,
    blockTag: o,
    functionName: "aggregate3",
    stateOverride: a
  }))), y = [];
  for (let m = 0; m < g.length; m++) {
    const w = g[m];
    if (w.status === "rejected") {
      if (!n)
        throw w.reason;
      for (let x = 0; x < d[m].length; x++)
        y.push({
          status: "failure",
          error: w.reason,
          result: void 0
        });
      continue;
    }
    const v = w.value;
    for (let x = 0; x < v.length; x++) {
      const { returnData: R, success: I } = v[x], { callData: A } = d[m][x], { abi: B, address: $, functionName: G, args: O } = c[y.length];
      try {
        if (A === "0x")
          throw new Cn();
        if (!I)
          throw new Yr({ data: R });
        const N = Rt({
          abi: B,
          args: O,
          data: R,
          functionName: G
        });
        y.push(n ? { result: N, status: "success" } : N);
      } catch (N) {
        const D = cn(N, {
          abi: B,
          address: $,
          args: O,
          docsPath: "/docs/contract/multicall",
          functionName: G
        });
        if (!n)
          throw D;
        y.push({ error: D, result: void 0, status: "failure" });
      }
    }
  }
  if (y.length !== c.length)
    throw new E("multicall results mismatch");
  return y;
}
class na extends Lr {
  constructor(t, n) {
    super(), this.finished = !1, this.destroyed = !1, Wc(t);
    const r = kn(n);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, o = new Uint8Array(s);
    o.set(r.length > s ? t.create().update(r).digest() : r);
    for (let i = 0; i < o.length; i++)
      o[i] ^= 54;
    this.iHash.update(o), this.oHash = t.create();
    for (let i = 0; i < o.length; i++)
      o[i] ^= 106;
    this.oHash.update(o), o.fill(0);
  }
  update(t) {
    return xt(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    xt(this), dn(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n, iHash: r, finished: s, destroyed: o, blockLen: i, outputLen: a } = this;
    return t = t, t.finished = s, t.destroyed = o, t.blockLen = i, t.outputLen = a, t.oHash = n._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const ra = (e, t, n) => new na(e, t).update(n).digest();
ra.create = (e, t) => new na(e, t);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ys = /* @__PURE__ */ BigInt(0), Vn = /* @__PURE__ */ BigInt(1), Bl = /* @__PURE__ */ BigInt(2);
function lt(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function mn(e) {
  if (!lt(e))
    throw new Error("Uint8Array expected");
}
function Pt(e, t) {
  if (typeof t != "boolean")
    throw new Error(`${e} must be valid boolean, got "${t}".`);
}
const $l = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function At(e) {
  mn(e);
  let t = "";
  for (let n = 0; n < e.length; n++)
    t += $l[e[n]];
  return t;
}
function gt(e) {
  const t = e.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function ms(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  return BigInt(e === "" ? "0" : `0x${e}`);
}
const _e = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function bo(e) {
  if (e >= _e._0 && e <= _e._9)
    return e - _e._0;
  if (e >= _e._A && e <= _e._F)
    return e - (_e._A - 10);
  if (e >= _e._a && e <= _e._f)
    return e - (_e._a - 10);
}
function Bt(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  const t = e.length, n = t / 2;
  if (t % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + t);
  const r = new Uint8Array(n);
  for (let s = 0, o = 0; s < n; s++, o += 2) {
    const i = bo(e.charCodeAt(o)), a = bo(e.charCodeAt(o + 1));
    if (i === void 0 || a === void 0) {
      const c = e[o] + e[o + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + o);
    }
    r[s] = i * 16 + a;
  }
  return r;
}
function at(e) {
  return ms(At(e));
}
function gs(e) {
  return mn(e), ms(At(Uint8Array.from(e).reverse()));
}
function $t(e, t) {
  return Bt(e.toString(16).padStart(t * 2, "0"));
}
function ws(e, t) {
  return $t(e, t).reverse();
}
function Il(e) {
  return Bt(gt(e));
}
function Ae(e, t, n) {
  let r;
  if (typeof t == "string")
    try {
      r = Bt(t);
    } catch (o) {
      throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${o}`);
    }
  else if (lt(t))
    r = Uint8Array.from(t);
  else
    throw new Error(`${e} must be hex string or Uint8Array`);
  const s = r.length;
  if (typeof n == "number" && s !== n)
    throw new Error(`${e} expected ${n} bytes, got ${s}`);
  return r;
}
function fn(...e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    mn(s), t += s.length;
  }
  const n = new Uint8Array(t);
  for (let r = 0, s = 0; r < e.length; r++) {
    const o = e[r];
    n.set(o, s), s += o.length;
  }
  return n;
}
function Tl(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = 0;
  for (let r = 0; r < e.length; r++)
    n |= e[r] ^ t[r];
  return n === 0;
}
function Sl(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
const cr = (e) => typeof e == "bigint" && ys <= e;
function Zn(e, t, n) {
  return cr(e) && cr(t) && cr(n) && t <= e && e < n;
}
function ct(e, t, n, r) {
  if (!Zn(t, n, r))
    throw new Error(`expected valid ${e}: ${n} <= n < ${r}, got ${typeof t} ${t}`);
}
function sa(e) {
  let t;
  for (t = 0; e > ys; e >>= Vn, t += 1)
    ;
  return t;
}
function Cl(e, t) {
  return e >> BigInt(t) & Vn;
}
function Rl(e, t, n) {
  return e | (n ? Vn : ys) << BigInt(t);
}
const vs = (e) => (Bl << BigInt(e - 1)) - Vn, ur = (e) => new Uint8Array(e), yo = (e) => Uint8Array.from(e);
function oa(e, t, n) {
  if (typeof e != "number" || e < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof n != "function")
    throw new Error("hmacFn must be a function");
  let r = ur(e), s = ur(e), o = 0;
  const i = () => {
    r.fill(1), s.fill(0), o = 0;
  }, a = (...d) => n(s, r, ...d), c = (d = ur()) => {
    s = a(yo([0]), d), r = a(), d.length !== 0 && (s = a(yo([1]), d), r = a());
  }, u = () => {
    if (o++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let d = 0;
    const l = [];
    for (; d < t; ) {
      r = a();
      const b = r.slice();
      l.push(b), d += r.length;
    }
    return fn(...l);
  };
  return (d, l) => {
    i(), c(d);
    let b;
    for (; !(b = l(u())); )
      c();
    return i(), b;
  };
}
const kl = {
  bigint: (e) => typeof e == "bigint",
  function: (e) => typeof e == "function",
  boolean: (e) => typeof e == "boolean",
  string: (e) => typeof e == "string",
  stringOrUint8Array: (e) => typeof e == "string" || lt(e),
  isSafeInteger: (e) => Number.isSafeInteger(e),
  array: (e) => Array.isArray(e),
  field: (e, t) => t.Fp.isValid(e),
  hash: (e) => typeof e == "function" && Number.isSafeInteger(e.outputLen)
};
function gn(e, t, n = {}) {
  const r = (s, o, i) => {
    const a = kl[o];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${o}", expected function`);
    const c = e[s];
    if (!(i && c === void 0) && !a(c, e))
      throw new Error(`Invalid param ${String(s)}=${c} (${typeof c}), expected ${o}`);
  };
  for (const [s, o] of Object.entries(t))
    r(s, o, !1);
  for (const [s, o] of Object.entries(n))
    r(s, o, !0);
  return e;
}
const Fl = () => {
  throw new Error("not implemented");
};
function Or(e) {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, ...r) => {
    const s = t.get(n);
    if (s !== void 0)
      return s;
    const o = e(n, ...r);
    return t.set(n, o), o;
  };
}
const Nl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  aInRange: ct,
  abool: Pt,
  abytes: mn,
  bitGet: Cl,
  bitLen: sa,
  bitMask: vs,
  bitSet: Rl,
  bytesToHex: At,
  bytesToNumberBE: at,
  bytesToNumberLE: gs,
  concatBytes: fn,
  createHmacDrbg: oa,
  ensureBytes: Ae,
  equalBytes: Tl,
  hexToBytes: Bt,
  hexToNumber: ms,
  inRange: Zn,
  isBytes: lt,
  memoized: Or,
  notImplemented: Fl,
  numberToBytesBE: $t,
  numberToBytesLE: ws,
  numberToHexUnpadded: gt,
  numberToVarBytesBE: Il,
  utf8ToBytes: Sl,
  validateObject: gn
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const re = BigInt(0), X = BigInt(1), ot = BigInt(2), Ol = BigInt(3), _r = BigInt(4), mo = BigInt(5), go = BigInt(8);
BigInt(9);
BigInt(16);
function pe(e, t) {
  const n = e % t;
  return n >= re ? n : t + n;
}
function _l(e, t, n) {
  if (n <= re || t < re)
    throw new Error("Expected power/modulo > 0");
  if (n === X)
    return re;
  let r = X;
  for (; t > re; )
    t & X && (r = r * e % n), e = e * e % n, t >>= X;
  return r;
}
function xe(e, t, n) {
  let r = e;
  for (; t-- > re; )
    r *= r, r %= n;
  return r;
}
function zr(e, t) {
  if (e === re || t <= re)
    throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);
  let n = pe(e, t), r = t, s = re, o = X;
  for (; n !== re; ) {
    const a = r / n, c = r % n, u = s - o * a;
    r = n, n = c, s = o, o = u;
  }
  if (r !== X)
    throw new Error("invert: does not exist");
  return pe(s, t);
}
function zl(e) {
  const t = (e - X) / ot;
  let n, r, s;
  for (n = e - X, r = 0; n % ot === re; n /= ot, r++)
    ;
  for (s = ot; s < e && _l(s, t, e) !== e - X; s++)
    ;
  if (r === 1) {
    const i = (e + X) / _r;
    return function(c, u) {
      const f = c.pow(u, i);
      if (!c.eql(c.sqr(f), u))
        throw new Error("Cannot find square root");
      return f;
    };
  }
  const o = (n + X) / ot;
  return function(a, c) {
    if (a.pow(c, t) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let u = r, f = a.pow(a.mul(a.ONE, s), n), d = a.pow(c, o), l = a.pow(c, n);
    for (; !a.eql(l, a.ONE); ) {
      if (a.eql(l, a.ZERO))
        return a.ZERO;
      let b = 1;
      for (let y = a.sqr(l); b < u && !a.eql(y, a.ONE); b++)
        y = a.sqr(y);
      const g = a.pow(f, X << BigInt(u - b - 1));
      f = a.sqr(g), d = a.mul(d, g), l = a.mul(l, f), u = b;
    }
    return d;
  };
}
function Ml(e) {
  if (e % _r === Ol) {
    const t = (e + X) / _r;
    return function(r, s) {
      const o = r.pow(s, t);
      if (!r.eql(r.sqr(o), s))
        throw new Error("Cannot find square root");
      return o;
    };
  }
  if (e % go === mo) {
    const t = (e - mo) / go;
    return function(r, s) {
      const o = r.mul(s, ot), i = r.pow(o, t), a = r.mul(s, i), c = r.mul(r.mul(a, ot), i), u = r.mul(a, r.sub(c, r.ONE));
      if (!r.eql(r.sqr(u), s))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  return zl(e);
}
const jl = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function Ll(e) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, n = jl.reduce((r, s) => (r[s] = "function", r), t);
  return gn(e, n);
}
function Dl(e, t, n) {
  if (n < re)
    throw new Error("Expected power > 0");
  if (n === re)
    return e.ONE;
  if (n === X)
    return t;
  let r = e.ONE, s = t;
  for (; n > re; )
    n & X && (r = e.mul(r, s)), s = e.sqr(s), n >>= X;
  return r;
}
function Ul(e, t) {
  const n = new Array(t.length), r = t.reduce((o, i, a) => e.is0(i) ? o : (n[a] = o, e.mul(o, i)), e.ONE), s = e.inv(r);
  return t.reduceRight((o, i, a) => e.is0(i) ? o : (n[a] = e.mul(o, n[a]), e.mul(o, i)), s), n;
}
function ia(e, t) {
  const n = t !== void 0 ? t : e.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function aa(e, t, n = !1, r = {}) {
  if (e <= re)
    throw new Error(`Expected Field ORDER > 0, got ${e}`);
  const { nBitLength: s, nByteLength: o } = ia(e, t);
  if (o > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const i = Ml(e), a = Object.freeze({
    ORDER: e,
    BITS: s,
    BYTES: o,
    MASK: vs(s),
    ZERO: re,
    ONE: X,
    create: (c) => pe(c, e),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return re <= c && c < e;
    },
    is0: (c) => c === re,
    isOdd: (c) => (c & X) === X,
    neg: (c) => pe(-c, e),
    eql: (c, u) => c === u,
    sqr: (c) => pe(c * c, e),
    add: (c, u) => pe(c + u, e),
    sub: (c, u) => pe(c - u, e),
    mul: (c, u) => pe(c * u, e),
    pow: (c, u) => Dl(a, c, u),
    div: (c, u) => pe(c * zr(u, e), e),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, u) => c + u,
    subN: (c, u) => c - u,
    mulN: (c, u) => c * u,
    inv: (c) => zr(c, e),
    sqrt: r.sqrt || ((c) => i(a, c)),
    invertBatch: (c) => Ul(a, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, u, f) => f ? u : c,
    toBytes: (c) => n ? ws(c, o) : $t(c, o),
    fromBytes: (c) => {
      if (c.length !== o)
        throw new Error(`Fp.fromBytes: expected ${o}, got ${c.length}`);
      return n ? gs(c) : at(c);
    }
  });
  return Object.freeze(a);
}
function ca(e) {
  if (typeof e != "bigint")
    throw new Error("field order must be bigint");
  const t = e.toString(2).length;
  return Math.ceil(t / 8);
}
function ua(e) {
  const t = ca(e);
  return t + Math.ceil(t / 2);
}
function Gl(e, t, n = !1) {
  const r = e.length, s = ca(t), o = ua(t);
  if (r < 16 || r < o || r > 1024)
    throw new Error(`expected ${o}-1024 bytes of input, got ${r}`);
  const i = n ? at(e) : gs(e), a = pe(i, t - X) + X;
  return n ? ws(a, s) : $t(a, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Hl = BigInt(0), fr = BigInt(1), dr = /* @__PURE__ */ new WeakMap(), wo = /* @__PURE__ */ new WeakMap();
function ql(e, t) {
  const n = (o, i) => {
    const a = i.negate();
    return o ? a : i;
  }, r = (o) => {
    if (!Number.isSafeInteger(o) || o <= 0 || o > t)
      throw new Error(`Wrong window size=${o}, should be [1..${t}]`);
  }, s = (o) => {
    r(o);
    const i = Math.ceil(t / o) + 1, a = 2 ** (o - 1);
    return { windows: i, windowSize: a };
  };
  return {
    constTimeNegate: n,
    // non-const time multiplication ladder
    unsafeLadder(o, i) {
      let a = e.ZERO, c = o;
      for (; i > Hl; )
        i & fr && (a = a.add(c)), c = c.double(), i >>= fr;
      return a;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(o, i) {
      const { windows: a, windowSize: c } = s(i), u = [];
      let f = o, d = f;
      for (let l = 0; l < a; l++) {
        d = f, u.push(d);
        for (let b = 1; b < c; b++)
          d = d.add(f), u.push(d);
        f = d.double();
      }
      return u;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(o, i, a) {
      const { windows: c, windowSize: u } = s(o);
      let f = e.ZERO, d = e.BASE;
      const l = BigInt(2 ** o - 1), b = 2 ** o, g = BigInt(o);
      for (let y = 0; y < c; y++) {
        const p = y * u;
        let m = Number(a & l);
        a >>= g, m > u && (m -= b, a += fr);
        const w = p, v = p + Math.abs(m) - 1, x = y % 2 !== 0, R = m < 0;
        m === 0 ? d = d.add(n(x, i[w])) : f = f.add(n(R, i[v]));
      }
      return { p: f, f: d };
    },
    wNAFCached(o, i, a) {
      const c = wo.get(o) || 1;
      let u = dr.get(o);
      return u || (u = this.precomputeWindow(o, c), c !== 1 && dr.set(o, a(u))), this.wNAF(c, u, i);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(o, i) {
      r(i), wo.set(o, i), dr.delete(o);
    }
  };
}
function Vl(e, t, n, r) {
  if (!Array.isArray(n) || !Array.isArray(r) || r.length !== n.length)
    throw new Error("arrays of points and scalars must have equal length");
  r.forEach((f, d) => {
    if (!t.isValid(f))
      throw new Error(`wrong scalar at index ${d}`);
  }), n.forEach((f, d) => {
    if (!(f instanceof e))
      throw new Error(`wrong point at index ${d}`);
  });
  const s = sa(BigInt(n.length)), o = s > 12 ? s - 3 : s > 4 ? s - 2 : s ? 2 : 1, i = (1 << o) - 1, a = new Array(i + 1).fill(e.ZERO), c = Math.floor((t.BITS - 1) / o) * o;
  let u = e.ZERO;
  for (let f = c; f >= 0; f -= o) {
    a.fill(e.ZERO);
    for (let l = 0; l < r.length; l++) {
      const b = r[l], g = Number(b >> BigInt(f) & BigInt(i));
      a[g] = a[g].add(n[l]);
    }
    let d = e.ZERO;
    for (let l = a.length - 1, b = e.ZERO; l > 0; l--)
      b = b.add(a[l]), d = d.add(b);
    if (u = u.add(d), f !== 0)
      for (let l = 0; l < o; l++)
        u = u.double();
  }
  return u;
}
function fa(e) {
  return Ll(e.Fp), gn(e, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...ia(e.n, e.nBitLength),
    ...e,
    p: e.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function vo(e) {
  e.lowS !== void 0 && Pt("lowS", e.lowS), e.prehash !== void 0 && Pt("prehash", e.prehash);
}
function Zl(e) {
  const t = fa(e);
  gn(t, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: n, Fp: r, a: s } = t;
  if (n) {
    if (!r.eql(s, r.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...t });
}
const { bytesToNumberBE: Wl, hexToBytes: Yl } = Nl, ze = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(t = "") {
      super(t);
    }
  },
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (e, t) => {
      const { Err: n } = ze;
      if (e < 0 || e > 256)
        throw new n("tlv.encode: wrong tag");
      if (t.length & 1)
        throw new n("tlv.encode: unpadded data");
      const r = t.length / 2, s = gt(r);
      if (s.length / 2 & 128)
        throw new n("tlv.encode: long form length too big");
      const o = r > 127 ? gt(s.length / 2 | 128) : "";
      return `${gt(e)}${o}${s}${t}`;
    },
    // v - value, l - left bytes (unparsed)
    decode(e, t) {
      const { Err: n } = ze;
      let r = 0;
      if (e < 0 || e > 256)
        throw new n("tlv.encode: wrong tag");
      if (t.length < 2 || t[r++] !== e)
        throw new n("tlv.decode: wrong tlv");
      const s = t[r++], o = !!(s & 128);
      let i = 0;
      if (!o)
        i = s;
      else {
        const c = s & 127;
        if (!c)
          throw new n("tlv.decode(long): indefinite length not supported");
        if (c > 4)
          throw new n("tlv.decode(long): byte length is too big");
        const u = t.subarray(r, r + c);
        if (u.length !== c)
          throw new n("tlv.decode: length bytes not complete");
        if (u[0] === 0)
          throw new n("tlv.decode(long): zero leftmost byte");
        for (const f of u)
          i = i << 8 | f;
        if (r += c, i < 128)
          throw new n("tlv.decode(long): not minimal encoding");
      }
      const a = t.subarray(r, r + i);
      if (a.length !== i)
        throw new n("tlv.decode: wrong value length");
      return { v: a, l: t.subarray(r + i) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(e) {
      const { Err: t } = ze;
      if (e < Me)
        throw new t("integer: negative integers are not allowed");
      let n = gt(e);
      if (Number.parseInt(n[0], 16) & 8 && (n = "00" + n), n.length & 1)
        throw new t("unexpected assertion");
      return n;
    },
    decode(e) {
      const { Err: t } = ze;
      if (e[0] & 128)
        throw new t("Invalid signature integer: negative");
      if (e[0] === 0 && !(e[1] & 128))
        throw new t("Invalid signature integer: unnecessary leading zero");
      return Wl(e);
    }
  },
  toSig(e) {
    const { Err: t, _int: n, _tlv: r } = ze, s = typeof e == "string" ? Yl(e) : e;
    mn(s);
    const { v: o, l: i } = r.decode(48, s);
    if (i.length)
      throw new t("Invalid signature: left bytes after parsing");
    const { v: a, l: c } = r.decode(2, o), { v: u, l: f } = r.decode(2, c);
    if (f.length)
      throw new t("Invalid signature: left bytes after parsing");
    return { r: n.decode(a), s: n.decode(u) };
  },
  hexFromSig(e) {
    const { _tlv: t, _int: n } = ze, r = `${t.encode(2, n.encode(e.r))}${t.encode(2, n.encode(e.s))}`;
    return t.encode(48, r);
  }
}, Me = BigInt(0), te = BigInt(1);
BigInt(2);
const xo = BigInt(3);
BigInt(4);
function Kl(e) {
  const t = Zl(e), { Fp: n } = t, r = aa(t.n, t.nBitLength), s = t.toBytes || ((y, p, m) => {
    const w = p.toAffine();
    return fn(Uint8Array.from([4]), n.toBytes(w.x), n.toBytes(w.y));
  }), o = t.fromBytes || ((y) => {
    const p = y.subarray(1), m = n.fromBytes(p.subarray(0, n.BYTES)), w = n.fromBytes(p.subarray(n.BYTES, 2 * n.BYTES));
    return { x: m, y: w };
  });
  function i(y) {
    const { a: p, b: m } = t, w = n.sqr(y), v = n.mul(w, y);
    return n.add(n.add(v, n.mul(y, p)), m);
  }
  if (!n.eql(n.sqr(t.Gy), i(t.Gx)))
    throw new Error("bad generator point: equation left != right");
  function a(y) {
    return Zn(y, te, t.n);
  }
  function c(y) {
    const { allowedPrivateKeyLengths: p, nByteLength: m, wrapPrivateKey: w, n: v } = t;
    if (p && typeof y != "bigint") {
      if (lt(y) && (y = At(y)), typeof y != "string" || !p.includes(y.length))
        throw new Error("Invalid key");
      y = y.padStart(m * 2, "0");
    }
    let x;
    try {
      x = typeof y == "bigint" ? y : at(Ae("private key", y, m));
    } catch {
      throw new Error(`private key must be ${m} bytes, hex or bigint, not ${typeof y}`);
    }
    return w && (x = pe(x, v)), ct("private key", x, te, v), x;
  }
  function u(y) {
    if (!(y instanceof l))
      throw new Error("ProjectivePoint expected");
  }
  const f = Or((y, p) => {
    const { px: m, py: w, pz: v } = y;
    if (n.eql(v, n.ONE))
      return { x: m, y: w };
    const x = y.is0();
    p == null && (p = x ? n.ONE : n.inv(v));
    const R = n.mul(m, p), I = n.mul(w, p), A = n.mul(v, p);
    if (x)
      return { x: n.ZERO, y: n.ZERO };
    if (!n.eql(A, n.ONE))
      throw new Error("invZ was invalid");
    return { x: R, y: I };
  }), d = Or((y) => {
    if (y.is0()) {
      if (t.allowInfinityPoint && !n.is0(y.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x: p, y: m } = y.toAffine();
    if (!n.isValid(p) || !n.isValid(m))
      throw new Error("bad point: x or y not FE");
    const w = n.sqr(m), v = i(p);
    if (!n.eql(w, v))
      throw new Error("bad point: equation left != right");
    if (!y.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  class l {
    constructor(p, m, w) {
      if (this.px = p, this.py = m, this.pz = w, p == null || !n.isValid(p))
        throw new Error("x required");
      if (m == null || !n.isValid(m))
        throw new Error("y required");
      if (w == null || !n.isValid(w))
        throw new Error("z required");
      Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(p) {
      const { x: m, y: w } = p || {};
      if (!p || !n.isValid(m) || !n.isValid(w))
        throw new Error("invalid affine point");
      if (p instanceof l)
        throw new Error("projective point not allowed");
      const v = (x) => n.eql(x, n.ZERO);
      return v(m) && v(w) ? l.ZERO : new l(m, w, n.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(p) {
      const m = n.invertBatch(p.map((w) => w.pz));
      return p.map((w, v) => w.toAffine(m[v])).map(l.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(p) {
      const m = l.fromAffine(o(Ae("pointHex", p)));
      return m.assertValidity(), m;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(p) {
      return l.BASE.multiply(c(p));
    }
    // Multiscalar Multiplication
    static msm(p, m) {
      return Vl(l, r, p, m);
    }
    // "Private method", don't use it directly
    _setWindowSize(p) {
      g.setWindowSize(this, p);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      d(this);
    }
    hasEvenY() {
      const { y: p } = this.toAffine();
      if (n.isOdd)
        return !n.isOdd(p);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(p) {
      u(p);
      const { px: m, py: w, pz: v } = this, { px: x, py: R, pz: I } = p, A = n.eql(n.mul(m, I), n.mul(x, v)), B = n.eql(n.mul(w, I), n.mul(R, v));
      return A && B;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new l(this.px, n.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: p, b: m } = t, w = n.mul(m, xo), { px: v, py: x, pz: R } = this;
      let I = n.ZERO, A = n.ZERO, B = n.ZERO, $ = n.mul(v, v), G = n.mul(x, x), O = n.mul(R, R), N = n.mul(v, x);
      return N = n.add(N, N), B = n.mul(v, R), B = n.add(B, B), I = n.mul(p, B), A = n.mul(w, O), A = n.add(I, A), I = n.sub(G, A), A = n.add(G, A), A = n.mul(I, A), I = n.mul(N, I), B = n.mul(w, B), O = n.mul(p, O), N = n.sub($, O), N = n.mul(p, N), N = n.add(N, B), B = n.add($, $), $ = n.add(B, $), $ = n.add($, O), $ = n.mul($, N), A = n.add(A, $), O = n.mul(x, R), O = n.add(O, O), $ = n.mul(O, N), I = n.sub(I, $), B = n.mul(O, G), B = n.add(B, B), B = n.add(B, B), new l(I, A, B);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(p) {
      u(p);
      const { px: m, py: w, pz: v } = this, { px: x, py: R, pz: I } = p;
      let A = n.ZERO, B = n.ZERO, $ = n.ZERO;
      const G = t.a, O = n.mul(t.b, xo);
      let N = n.mul(m, x), D = n.mul(w, R), T = n.mul(v, I), C = n.add(m, w), S = n.add(x, R);
      C = n.mul(C, S), S = n.add(N, D), C = n.sub(C, S), S = n.add(m, v);
      let F = n.add(x, I);
      return S = n.mul(S, F), F = n.add(N, T), S = n.sub(S, F), F = n.add(w, v), A = n.add(R, I), F = n.mul(F, A), A = n.add(D, T), F = n.sub(F, A), $ = n.mul(G, S), A = n.mul(O, T), $ = n.add(A, $), A = n.sub(D, $), $ = n.add(D, $), B = n.mul(A, $), D = n.add(N, N), D = n.add(D, N), T = n.mul(G, T), S = n.mul(O, S), D = n.add(D, T), T = n.sub(N, T), T = n.mul(G, T), S = n.add(S, T), N = n.mul(D, S), B = n.add(B, N), N = n.mul(F, S), A = n.mul(C, A), A = n.sub(A, N), N = n.mul(C, D), $ = n.mul(F, $), $ = n.add($, N), new l(A, B, $);
    }
    subtract(p) {
      return this.add(p.negate());
    }
    is0() {
      return this.equals(l.ZERO);
    }
    wNAF(p) {
      return g.wNAFCached(this, p, l.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(p) {
      ct("scalar", p, Me, t.n);
      const m = l.ZERO;
      if (p === Me)
        return m;
      if (p === te)
        return this;
      const { endo: w } = t;
      if (!w)
        return g.unsafeLadder(this, p);
      let { k1neg: v, k1: x, k2neg: R, k2: I } = w.splitScalar(p), A = m, B = m, $ = this;
      for (; x > Me || I > Me; )
        x & te && (A = A.add($)), I & te && (B = B.add($)), $ = $.double(), x >>= te, I >>= te;
      return v && (A = A.negate()), R && (B = B.negate()), B = new l(n.mul(B.px, w.beta), B.py, B.pz), A.add(B);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(p) {
      const { endo: m, n: w } = t;
      ct("scalar", p, te, w);
      let v, x;
      if (m) {
        const { k1neg: R, k1: I, k2neg: A, k2: B } = m.splitScalar(p);
        let { p: $, f: G } = this.wNAF(I), { p: O, f: N } = this.wNAF(B);
        $ = g.constTimeNegate(R, $), O = g.constTimeNegate(A, O), O = new l(n.mul(O.px, m.beta), O.py, O.pz), v = $.add(O), x = G.add(N);
      } else {
        const { p: R, f: I } = this.wNAF(p);
        v = R, x = I;
      }
      return l.normalizeZ([v, x])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(p, m, w) {
      const v = l.BASE, x = (I, A) => A === Me || A === te || !I.equals(v) ? I.multiplyUnsafe(A) : I.multiply(A), R = x(this, m).add(x(p, w));
      return R.is0() ? void 0 : R;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(p) {
      return f(this, p);
    }
    isTorsionFree() {
      const { h: p, isTorsionFree: m } = t;
      if (p === te)
        return !0;
      if (m)
        return m(l, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: p, clearCofactor: m } = t;
      return p === te ? this : m ? m(l, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(p = !0) {
      return Pt("isCompressed", p), this.assertValidity(), s(l, this, p);
    }
    toHex(p = !0) {
      return Pt("isCompressed", p), At(this.toRawBytes(p));
    }
  }
  l.BASE = new l(t.Gx, t.Gy, n.ONE), l.ZERO = new l(n.ZERO, n.ONE, n.ZERO);
  const b = t.nBitLength, g = ql(l, t.endo ? Math.ceil(b / 2) : b);
  return {
    CURVE: t,
    ProjectivePoint: l,
    normPrivateKeyToScalar: c,
    weierstrassEquation: i,
    isWithinCurveOrder: a
  };
}
function Jl(e) {
  const t = fa(e);
  return gn(t, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...t });
}
function Xl(e) {
  const t = Jl(e), { Fp: n, n: r } = t, s = n.BYTES + 1, o = 2 * n.BYTES + 1;
  function i(T) {
    return pe(T, r);
  }
  function a(T) {
    return zr(T, r);
  }
  const { ProjectivePoint: c, normPrivateKeyToScalar: u, weierstrassEquation: f, isWithinCurveOrder: d } = Kl({
    ...t,
    toBytes(T, C, S) {
      const F = C.toAffine(), M = n.toBytes(F.x), q = fn;
      return Pt("isCompressed", S), S ? q(Uint8Array.from([C.hasEvenY() ? 2 : 3]), M) : q(Uint8Array.from([4]), M, n.toBytes(F.y));
    },
    fromBytes(T) {
      const C = T.length, S = T[0], F = T.subarray(1);
      if (C === s && (S === 2 || S === 3)) {
        const M = at(F);
        if (!Zn(M, te, n.ORDER))
          throw new Error("Point is not on curve");
        const q = f(M);
        let W;
        try {
          W = n.sqrt(q);
        } catch (ie) {
          const ae = ie instanceof Error ? ": " + ie.message : "";
          throw new Error("Point is not on curve" + ae);
        }
        const K = (W & te) === te;
        return (S & 1) === 1 !== K && (W = n.neg(W)), { x: M, y: W };
      } else if (C === o && S === 4) {
        const M = n.fromBytes(F.subarray(0, n.BYTES)), q = n.fromBytes(F.subarray(n.BYTES, 2 * n.BYTES));
        return { x: M, y: q };
      } else
        throw new Error(`Point of length ${C} was invalid. Expected ${s} compressed bytes or ${o} uncompressed bytes`);
    }
  }), l = (T) => At($t(T, t.nByteLength));
  function b(T) {
    const C = r >> te;
    return T > C;
  }
  function g(T) {
    return b(T) ? i(-T) : T;
  }
  const y = (T, C, S) => at(T.slice(C, S));
  class p {
    constructor(C, S, F) {
      this.r = C, this.s = S, this.recovery = F, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(C) {
      const S = t.nByteLength;
      return C = Ae("compactSignature", C, S * 2), new p(y(C, 0, S), y(C, S, 2 * S));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(C) {
      const { r: S, s: F } = ze.toSig(Ae("DER", C));
      return new p(S, F);
    }
    assertValidity() {
      ct("r", this.r, te, r), ct("s", this.s, te, r);
    }
    addRecoveryBit(C) {
      return new p(this.r, this.s, C);
    }
    recoverPublicKey(C) {
      const { r: S, s: F, recovery: M } = this, q = I(Ae("msgHash", C));
      if (M == null || ![0, 1, 2, 3].includes(M))
        throw new Error("recovery id invalid");
      const W = M === 2 || M === 3 ? S + t.n : S;
      if (W >= n.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const K = M & 1 ? "03" : "02", oe = c.fromHex(K + l(W)), ie = a(W), ae = i(-q * ie), ye = i(F * ie), me = c.BASE.multiplyAndAddUnsafe(oe, ae, ye);
      if (!me)
        throw new Error("point at infinify");
      return me.assertValidity(), me;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return b(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new p(this.r, i(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return Bt(this.toDERHex());
    }
    toDERHex() {
      return ze.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return Bt(this.toCompactHex());
    }
    toCompactHex() {
      return l(this.r) + l(this.s);
    }
  }
  const m = {
    isValidPrivateKey(T) {
      try {
        return u(T), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: u,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const T = ua(t.n);
      return Gl(t.randomBytes(T), t.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(T = 8, C = c.BASE) {
      return C._setWindowSize(T), C.multiply(BigInt(3)), C;
    }
  };
  function w(T, C = !0) {
    return c.fromPrivateKey(T).toRawBytes(C);
  }
  function v(T) {
    const C = lt(T), S = typeof T == "string", F = (C || S) && T.length;
    return C ? F === s || F === o : S ? F === 2 * s || F === 2 * o : T instanceof c;
  }
  function x(T, C, S = !0) {
    if (v(T))
      throw new Error("first arg must be private key");
    if (!v(C))
      throw new Error("second arg must be public key");
    return c.fromHex(C).multiply(u(T)).toRawBytes(S);
  }
  const R = t.bits2int || function(T) {
    const C = at(T), S = T.length * 8 - t.nBitLength;
    return S > 0 ? C >> BigInt(S) : C;
  }, I = t.bits2int_modN || function(T) {
    return i(R(T));
  }, A = vs(t.nBitLength);
  function B(T) {
    return ct(`num < 2^${t.nBitLength}`, T, Me, A), $t(T, t.nByteLength);
  }
  function $(T, C, S = G) {
    if (["recovered", "canonical"].some((de) => de in S))
      throw new Error("sign() legacy options not supported");
    const { hash: F, randomBytes: M } = t;
    let { lowS: q, prehash: W, extraEntropy: K } = S;
    q == null && (q = !0), T = Ae("msgHash", T), vo(S), W && (T = Ae("prehashed msgHash", F(T)));
    const oe = I(T), ie = u(C), ae = [B(ie), B(oe)];
    if (K != null && K !== !1) {
      const de = K === !0 ? M(n.BYTES) : K;
      ae.push(Ae("extraEntropy", de));
    }
    const ye = fn(...ae), me = oe;
    function He(de) {
      const ge = R(de);
      if (!d(ge))
        return;
      const Ce = a(ge), qe = c.BASE.multiply(ge).toAffine(), le = i(qe.x);
      if (le === Me)
        return;
      const Ve = i(Ce * i(me + le * ie));
      if (Ve === Me)
        return;
      let wn = (qe.x === le ? 0 : 2) | Number(qe.y & te), nt = Ve;
      return q && b(Ve) && (nt = g(Ve), wn ^= 1), new p(le, nt, wn);
    }
    return { seed: ye, k2sig: He };
  }
  const G = { lowS: t.lowS, prehash: !1 }, O = { lowS: t.lowS, prehash: !1 };
  function N(T, C, S = G) {
    const { seed: F, k2sig: M } = $(T, C, S), q = t;
    return oa(q.hash.outputLen, q.nByteLength, q.hmac)(F, M);
  }
  c.BASE._setWindowSize(8);
  function D(T, C, S, F = O) {
    var qe;
    const M = T;
    if (C = Ae("msgHash", C), S = Ae("publicKey", S), "strict" in F)
      throw new Error("options.strict was renamed to lowS");
    vo(F);
    const { lowS: q, prehash: W } = F;
    let K, oe;
    try {
      if (typeof M == "string" || lt(M))
        try {
          K = p.fromDER(M);
        } catch (le) {
          if (!(le instanceof ze.Err))
            throw le;
          K = p.fromCompact(M);
        }
      else if (typeof M == "object" && typeof M.r == "bigint" && typeof M.s == "bigint") {
        const { r: le, s: Ve } = M;
        K = new p(le, Ve);
      } else
        throw new Error("PARSE");
      oe = c.fromHex(S);
    } catch (le) {
      if (le.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (q && K.hasHighS())
      return !1;
    W && (C = t.hash(C));
    const { r: ie, s: ae } = K, ye = I(C), me = a(ae), He = i(ye * me), de = i(ie * me), ge = (qe = c.BASE.multiplyAndAddUnsafe(oe, He, de)) == null ? void 0 : qe.toAffine();
    return ge ? i(ge.x) === ie : !1;
  }
  return {
    CURVE: t,
    getPublicKey: w,
    getSharedSecret: x,
    sign: N,
    verify: D,
    ProjectivePoint: c,
    Signature: p,
    utils: m
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Ql(e) {
  return {
    hash: e,
    hmac: (t, ...n) => ra(e, t, su(...n)),
    randomBytes: ou
  };
}
function e0(e, t) {
  const n = (r) => Xl({ ...e, ...Ql(r) });
  return Object.freeze({ ...n(t), create: n });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const da = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Eo = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), t0 = BigInt(1), Mr = BigInt(2), Po = (e, t) => (e + t / Mr) / t;
function n0(e) {
  const t = da, n = BigInt(3), r = BigInt(6), s = BigInt(11), o = BigInt(22), i = BigInt(23), a = BigInt(44), c = BigInt(88), u = e * e * e % t, f = u * u * e % t, d = xe(f, n, t) * f % t, l = xe(d, n, t) * f % t, b = xe(l, Mr, t) * u % t, g = xe(b, s, t) * b % t, y = xe(g, o, t) * g % t, p = xe(y, a, t) * y % t, m = xe(p, c, t) * p % t, w = xe(m, a, t) * y % t, v = xe(w, n, t) * f % t, x = xe(v, i, t) * g % t, R = xe(x, r, t) * u % t, I = xe(R, Mr, t);
  if (!jr.eql(jr.sqr(I), e))
    throw new Error("Cannot find square root");
  return I;
}
const jr = aa(da, void 0, void 0, { sqrt: n0 }), xs = e0({
  a: BigInt(0),
  // equation params: a, b
  b: BigInt(7),
  // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
  Fp: jr,
  // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
  n: Eo,
  // Curve order, total count of valid points in the field
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  // Cofactor
  lowS: !0,
  // Allow only low-S signatures by default in sign() and verify()
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (e) => {
      const t = Eo, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r = -t0 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), o = n, i = BigInt("0x100000000000000000000000000000000"), a = Po(o * e, t), c = Po(-r * e, t);
      let u = pe(e - a * n - c * s, t), f = pe(-a * r - c * o, t);
      const d = u > i, l = f > i;
      if (d && (u = t - u), l && (f = t - f), u > i || f > i)
        throw new Error("splitScalar: Endomorphism failed, k=" + e);
      return { k1neg: d, k1: u, k2neg: l, k2: f };
    }
  }
}, Bi);
BigInt(0);
xs.ProjectivePoint;
const r0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  secp256k1: xs
}, Symbol.toStringTag, { value: "Module" }));
function s0({ r: e, s: t, to: n = "hex", v: r, yParity: s }) {
  const o = (() => {
    if (s === 0 || s === 1)
      return s;
    if (r && (r === 27n || r === 28n || r >= 35n))
      return r % 2n === 0n ? 1 : 0;
    throw new Error("Invalid `v` or `yParity` value");
  })(), i = `0x${new xs.Signature(we(e), we(t)).toCompactHex()}${o === 0 ? "1b" : "1c"}`;
  return n === "hex" ? i : Te(i);
}
async function Es(e, t) {
  var d, l, b;
  const { address: n, factory: r, factoryData: s, hash: o, signature: i, universalSignatureVerifierAddress: a = (b = (l = (d = e.chain) == null ? void 0 : d.contracts) == null ? void 0 : l.universalSignatureVerifier) == null ? void 0 : b.address, ...c } = t, u = (() => ke(i) ? i : typeof i == "object" && "r" in i && "s" in i ? s0(i) : ee(i))(), f = await (async () => !r && !s || il(u) ? u : al({
    address: r,
    data: s,
    signature: u
  }))();
  try {
    const g = a ? {
      to: a,
      data: tt({
        abi: uo,
        functionName: "isValidSig",
        args: [n, o, f]
      }),
      ...c
    } : {
      data: fs({
        abi: uo,
        args: [n, o, f],
        bytecode: Yf
      }),
      ...c
    }, { data: y } = await L(e, Dn, "call")(g);
    return Dc(y ?? "0x0");
  } catch (g) {
    try {
      if (is(vu(n), await pi({ hash: o, signature: i })))
        return !0;
    } catch {
    }
    if (g instanceof li)
      return !1;
    throw g;
  }
}
async function o0(e, { address: t, message: n, factory: r, factoryData: s, signature: o, ...i }) {
  const a = ea(n);
  return Es(e, {
    address: t,
    factory: r,
    factoryData: s,
    hash: a,
    signature: o,
    ...i
  });
}
async function i0(e, t) {
  const { address: n, factory: r, factoryData: s, signature: o, message: i, primaryType: a, types: c, domain: u, ...f } = t, d = Kd({ message: i, primaryType: a, types: c, domain: u });
  return Es(e, {
    address: n,
    factory: r,
    factoryData: s,
    hash: d,
    signature: o,
    ...f
  });
}
function la(e, { emitOnBegin: t = !1, emitMissed: n = !1, onBlockNumber: r, onError: s, poll: o, pollingInterval: i = e.pollingInterval }) {
  const a = (() => typeof o < "u" ? o : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket"))();
  let c;
  return a ? (() => {
    const d = ce([
      "watchBlockNumber",
      e.uid,
      t,
      n,
      i
    ]);
    return Xe(d, { onBlockNumber: r, onError: s }, (l) => pn(async () => {
      var b;
      try {
        const g = await L(e, bn, "getBlockNumber")({ cacheTime: 0 });
        if (c) {
          if (g === c)
            return;
          if (g - c > 1 && n)
            for (let y = c + 1n; y < g; y++)
              l.onBlockNumber(y, c), c = y;
        }
        (!c || g > c) && (l.onBlockNumber(g, c), c = g);
      } catch (g) {
        (b = l.onError) == null || b.call(l, g);
      }
    }, {
      emitOnBegin: t,
      interval: i
    }));
  })() : (() => {
    const d = ce([
      "watchBlockNumber",
      e.uid,
      t,
      n
    ]);
    return Xe(d, { onBlockNumber: r, onError: s }, (l) => {
      let b = !0, g = () => b = !1;
      return (async () => {
        try {
          const y = (() => {
            if (e.transport.type === "fallback") {
              const m = e.transport.transports.find((w) => w.config.type === "webSocket");
              return m ? m.value : e.transport;
            }
            return e.transport;
          })(), { unsubscribe: p } = await y.subscribe({
            params: ["newHeads"],
            onData(m) {
              var v;
              if (!b)
                return;
              const w = we((v = m.result) == null ? void 0 : v.number);
              l.onBlockNumber(w, c), c = w;
            },
            onError(m) {
              var w;
              (w = l.onError) == null || w.call(l, m);
            }
          });
          g = p, b || g();
        } catch (y) {
          s == null || s(y);
        }
      })(), () => g();
    });
  })();
}
async function a0(e, {
  confirmations: t = 1,
  hash: n,
  onReplaced: r,
  pollingInterval: s = e.pollingInterval,
  retryCount: o = 6,
  retryDelay: i = ({ count: c }) => ~~(1 << c) * 200,
  // exponential backoff
  timeout: a = 18e4
}) {
  const c = ce(["waitForTransactionReceipt", e.uid, n]);
  let u, f, d, l = !1;
  return new Promise((b, g) => {
    a && setTimeout(() => g(new nf({ hash: n })), a);
    const y = Xe(c, { onReplaced: r, resolve: b, reject: g }, (p) => {
      const m = L(e, la, "watchBlockNumber")({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: s,
        async onBlockNumber(w) {
          const v = (R) => {
            m(), R(), y();
          };
          let x = w;
          if (!l)
            try {
              if (d) {
                if (t > 1 && (!d.blockNumber || x - d.blockNumber + 1n < t))
                  return;
                v(() => p.resolve(d));
                return;
              }
              if (u || (l = !0, await Fr(async () => {
                u = await L(e, bs, "getTransaction")({ hash: n }), u.blockNumber && (x = u.blockNumber);
              }, {
                delay: i,
                retryCount: o
              }), l = !1), d = await L(e, Nr, "getTransactionReceipt")({ hash: n }), t > 1 && (!d.blockNumber || x - d.blockNumber + 1n < t))
                return;
              v(() => p.resolve(d));
            } catch (R) {
              if (R instanceof fi || R instanceof di) {
                if (!u) {
                  l = !1;
                  return;
                }
                try {
                  f = u, l = !0;
                  const I = await Fr(() => L(e, Le, "getBlock")({
                    blockNumber: x,
                    includeTransactions: !0
                  }), {
                    delay: i,
                    retryCount: o,
                    shouldRetry: ({ error: $ }) => $ instanceof xi
                  });
                  l = !1;
                  const A = I.transactions.find(({ from: $, nonce: G }) => $ === f.from && G === f.nonce);
                  if (!A || (d = await L(e, Nr, "getTransactionReceipt")({
                    hash: A.hash
                  }), t > 1 && (!d.blockNumber || x - d.blockNumber + 1n < t)))
                    return;
                  let B = "replaced";
                  A.to === f.to && A.value === f.value ? B = "repriced" : A.from === A.to && A.value === 0n && (B = "cancelled"), v(() => {
                    var $;
                    ($ = p.onReplaced) == null || $.call(p, {
                      reason: B,
                      replacedTransaction: f,
                      transaction: A,
                      transactionReceipt: d
                    }), p.resolve(d);
                  });
                } catch (I) {
                  v(() => p.reject(I));
                }
              } else
                v(() => p.reject(R));
            }
        }
      });
    });
  });
}
function c0(e, { blockTag: t = "latest", emitMissed: n = !1, emitOnBegin: r = !1, onBlock: s, onError: o, includeTransactions: i, poll: a, pollingInterval: c = e.pollingInterval }) {
  const u = (() => typeof a < "u" ? a : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket"))(), f = i ?? !1;
  let d;
  return u ? (() => {
    const g = ce([
      "watchBlocks",
      e.uid,
      t,
      n,
      r,
      f,
      c
    ]);
    return Xe(g, { onBlock: s, onError: o }, (y) => pn(async () => {
      var p;
      try {
        const m = await L(e, Le, "getBlock")({
          blockTag: t,
          includeTransactions: f
        });
        if (m.number && (d != null && d.number)) {
          if (m.number === d.number)
            return;
          if (m.number - d.number > 1 && n)
            for (let w = (d == null ? void 0 : d.number) + 1n; w < m.number; w++) {
              const v = await L(e, Le, "getBlock")({
                blockNumber: w,
                includeTransactions: f
              });
              y.onBlock(v, d), d = v;
            }
        }
        // If no previous block exists, emit.
        (!(d != null && d.number) || // If the block tag is "pending" with no block number, emit.
        t === "pending" && !(m != null && m.number) || // If the next block number is greater than the previous block number, emit.
        // We don't want to emit blocks in the past.
        m.number && m.number > d.number) && (y.onBlock(m, d), d = m);
      } catch (m) {
        (p = y.onError) == null || p.call(y, m);
      }
    }, {
      emitOnBegin: r,
      interval: c
    }));
  })() : (() => {
    let g = !0, y = !0, p = () => g = !1;
    return (async () => {
      try {
        r && L(e, Le, "getBlock")({
          blockTag: t,
          includeTransactions: f
        }).then((v) => {
          g && y && (s(v, void 0), y = !1);
        });
        const m = (() => {
          if (e.transport.type === "fallback") {
            const v = e.transport.transports.find((x) => x.config.type === "webSocket");
            return v ? v.value : e.transport;
          }
          return e.transport;
        })(), { unsubscribe: w } = await m.subscribe({
          params: ["newHeads"],
          onData(v) {
            var I, A, B;
            if (!g)
              return;
            const R = (((B = (A = (I = e.chain) == null ? void 0 : I.formatters) == null ? void 0 : A.block) == null ? void 0 : B.format) || es)(v.result);
            s(R, d), y = !1, d = R;
          },
          onError(v) {
            o == null || o(v);
          }
        });
        p = w, g || p();
      } catch (m) {
        o == null || o(m);
      }
    })(), () => p();
  })();
}
function u0(e, { address: t, args: n, batch: r = !0, event: s, events: o, fromBlock: i, onError: a, onLogs: c, poll: u, pollingInterval: f = e.pollingInterval, strict: d }) {
  const l = (() => typeof u < "u" ? u : typeof i == "bigint" ? !0 : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket"))(), b = d ?? !1;
  return l ? (() => {
    const p = ce([
      "watchEvent",
      t,
      n,
      r,
      e.uid,
      s,
      f,
      i
    ]);
    return Xe(p, { onLogs: c, onError: a }, (m) => {
      let w;
      i !== void 0 && (w = i - 1n);
      let v, x = !1;
      const R = pn(async () => {
        var I;
        if (!x) {
          try {
            v = await L(e, Vi, "createEventFilter")({
              address: t,
              args: n,
              event: s,
              events: o,
              strict: b,
              fromBlock: i
            });
          } catch {
          }
          x = !0;
          return;
        }
        try {
          let A;
          if (v)
            A = await L(e, Un, "getFilterChanges")({ filter: v });
          else {
            const B = await L(e, bn, "getBlockNumber")({});
            w && w !== B ? A = await L(e, us, "getLogs")({
              address: t,
              args: n,
              event: s,
              events: o,
              fromBlock: w + 1n,
              toBlock: B
            }) : A = [], w = B;
          }
          if (A.length === 0)
            return;
          if (r)
            m.onLogs(A);
          else
            for (const B of A)
              m.onLogs([B]);
        } catch (A) {
          v && A instanceof ft && (x = !1), (I = m.onError) == null || I.call(m, A);
        }
      }, {
        emitOnBegin: !0,
        interval: f
      });
      return async () => {
        v && await L(e, Gn, "uninstallFilter")({ filter: v }), R();
      };
    });
  })() : (() => {
    let p = !0, m = () => p = !1;
    return (async () => {
      try {
        const w = (() => {
          if (e.transport.type === "fallback") {
            const I = e.transport.transports.find((A) => A.config.type === "webSocket");
            return I ? I.value : e.transport;
          }
          return e.transport;
        })(), v = o ?? (s ? [s] : void 0);
        let x = [];
        v && (x = [v.flatMap((A) => hn({
          abi: [A],
          eventName: A.name,
          args: n
        }))], s && (x = x[0]));
        const { unsubscribe: R } = await w.subscribe({
          params: ["logs", { address: t, topics: x }],
          onData(I) {
            var B;
            if (!p)
              return;
            const A = I.result;
            try {
              const { eventName: $, args: G } = as({
                abi: v ?? [],
                data: A.data,
                topics: A.topics,
                strict: b
              }), O = Je(A, { args: G, eventName: $ });
              c([O]);
            } catch ($) {
              let G, O;
              if ($ instanceof Gt || $ instanceof Rn) {
                if (d)
                  return;
                G = $.abiItem.name, O = (B = $.abiItem.inputs) == null ? void 0 : B.some((D) => !("name" in D && D.name));
              }
              const N = Je(A, {
                args: O ? [] : {},
                eventName: G
              });
              c([N]);
            }
          },
          onError(I) {
            a == null || a(I);
          }
        });
        m = R, p || m();
      } catch (w) {
        a == null || a(w);
      }
    })(), () => m();
  })();
}
function f0(e, { batch: t = !0, onError: n, onTransactions: r, poll: s, pollingInterval: o = e.pollingInterval }) {
  return (typeof s < "u" ? s : e.transport.type !== "webSocket") ? (() => {
    const u = ce([
      "watchPendingTransactions",
      e.uid,
      t,
      o
    ]);
    return Xe(u, { onTransactions: r, onError: n }, (f) => {
      let d;
      const l = pn(async () => {
        var b;
        try {
          if (!d)
            try {
              d = await L(e, Zi, "createPendingTransactionFilter")({});
              return;
            } catch (y) {
              throw l(), y;
            }
          const g = await L(e, Un, "getFilterChanges")({ filter: d });
          if (g.length === 0)
            return;
          if (t)
            f.onTransactions(g);
          else
            for (const y of g)
              f.onTransactions([y]);
        } catch (g) {
          (b = f.onError) == null || b.call(f, g);
        }
      }, {
        emitOnBegin: !0,
        interval: o
      });
      return async () => {
        d && await L(e, Gn, "uninstallFilter")({ filter: d }), l();
      };
    });
  })() : (() => {
    let u = !0, f = () => u = !1;
    return (async () => {
      try {
        const { unsubscribe: d } = await e.transport.subscribe({
          params: ["newPendingTransactions"],
          onData(l) {
            if (!u)
              return;
            const b = l.result;
            r([b]);
          },
          onError(l) {
            n == null || n(l);
          }
        });
        f = d, u || f();
      } catch (d) {
        n == null || n(d);
      }
    })(), () => f();
  })();
}
function d0(e) {
  var d, l, b;
  const { scheme: t, statement: n, ...r } = ((d = e.match(l0)) == null ? void 0 : d.groups) ?? {}, { chainId: s, expirationTime: o, issuedAt: i, notBefore: a, requestId: c, ...u } = ((l = e.match(h0)) == null ? void 0 : l.groups) ?? {}, f = (b = e.split("Resources:")[1]) == null ? void 0 : b.split(`
- `).slice(1);
  return {
    ...r,
    ...u,
    ...s ? { chainId: Number(s) } : {},
    ...o ? { expirationTime: new Date(o) } : {},
    ...i ? { issuedAt: new Date(i) } : {},
    ...a ? { notBefore: new Date(a) } : {},
    ...c ? { requestId: c } : {},
    ...f ? { resources: f } : {},
    ...t ? { scheme: t } : {},
    ...n ? { statement: n } : {}
  };
}
const l0 = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/, h0 = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function p0(e) {
  const { address: t, domain: n, message: r, nonce: s, scheme: o, time: i = /* @__PURE__ */ new Date() } = e;
  if (n && r.domain !== n || s && r.nonce !== s || o && r.scheme !== o || r.expirationTime && i >= r.expirationTime || r.notBefore && i < r.notBefore)
    return !1;
  try {
    if (!r.address || t && !is(r.address, t))
      return !1;
  } catch {
    return !1;
  }
  return !0;
}
async function b0(e, t) {
  const { address: n, domain: r, message: s, nonce: o, scheme: i, signature: a, time: c = /* @__PURE__ */ new Date(), ...u } = t, f = d0(s);
  if (!f.address || !p0({
    address: n,
    domain: r,
    message: f,
    nonce: o,
    scheme: i,
    time: c
  }))
    return !1;
  const l = ea(s);
  return Es(e, {
    address: f.address,
    hash: l,
    signature: a,
    ...u
  });
}
function y0(e) {
  return {
    call: (t) => Dn(e, t),
    createBlockFilter: () => Ud(e),
    createContractEventFilter: (t) => si(e, t),
    createEventFilter: (t) => Vi(e, t),
    createPendingTransactionFilter: () => Zi(e),
    estimateContractGas: (t) => Uf(e, t),
    estimateGas: (t) => os(e, t),
    getBalance: (t) => Oi(e, t),
    getBlobBaseFee: () => Gd(e),
    getBlock: (t) => Le(e, t),
    getBlockNumber: (t) => bn(e, t),
    getBlockTransactionCount: (t) => Hd(e, t),
    getBytecode: (t) => po(e, t),
    getChainId: () => Fi(e),
    getCode: (t) => po(e, t),
    getContractEvents: (t) => _i(e, t),
    getEip712Domain: (t) => ld(e, t),
    getEnsAddress: (t) => $d(e, t),
    getEnsAvatar: (t) => jd(e, t),
    getEnsName: (t) => Ld(e, t),
    getEnsResolver: (t) => Dd(e, t),
    getEnsText: (t) => qi(e, t),
    getFeeHistory: (t) => Vd(e, t),
    estimateFeesPerGas: (t) => Tf(e, t),
    getFilterChanges: (t) => Un(e, t),
    getFilterLogs: (t) => Zd(e, t),
    getGasPrice: () => ts(e),
    getLogs: (t) => us(e, t),
    getProof: (t) => xl(e, t),
    estimateMaxPriorityFeePerGas: (t) => If(e, t),
    getStorageAt: (t) => El(e, t),
    getTransaction: (t) => bs(e, t),
    getTransactionConfirmations: (t) => Pl(e, t),
    getTransactionCount: (t) => Ai(e, t),
    getTransactionReceipt: (t) => Nr(e, t),
    multicall: (t) => Al(e, t),
    prepareTransactionRequest: (t) => Ni(e, t),
    readContract: (t) => Ge(e, t),
    sendRawTransaction: (t) => fd(e, t),
    simulateContract: (t) => nd(e, t),
    verifyMessage: (t) => o0(e, t),
    verifySiweMessage: (t) => b0(e, t),
    verifyTypedData: (t) => i0(e, t),
    uninstallFilter: (t) => Gn(e, t),
    waitForTransactionReceipt: (t) => a0(e, t),
    watchBlocks: (t) => c0(e, t),
    watchBlockNumber: (t) => la(e, t),
    watchContractEvent: (t) => ud(e, t),
    watchEvent: (t) => u0(e, t),
    watchPendingTransactions: (t) => f0(e, t)
  };
}
function m0(e) {
  const { key: t = "public", name: n = "Public Client" } = e;
  return pd({
    ...e,
    key: t,
    name: n,
    type: "publicClient"
  }).extend(y0);
}
const g0 = {
  gasPriceOracle: { address: "0x420000000000000000000000000000000000000F" },
  l1Block: { address: "0x4200000000000000000000000000000000000015" },
  l2CrossDomainMessenger: {
    address: "0x4200000000000000000000000000000000000007"
  },
  l2Erc721Bridge: { address: "0x4200000000000000000000000000000000000014" },
  l2StandardBridge: { address: "0x4200000000000000000000000000000000000010" },
  l2ToL1MessagePasser: {
    address: "0x4200000000000000000000000000000000000016"
  }
}, w0 = {
  block: /* @__PURE__ */ $f({
    format(e) {
      var n;
      return {
        transactions: (n = e.transactions) == null ? void 0 : n.map((r) => {
          if (typeof r == "string")
            return r;
          const s = jn(r);
          return s.typeHex === "0x7e" && (s.isSystemTx = r.isSystemTx, s.mint = r.mint ? we(r.mint) : void 0, s.sourceHash = r.sourceHash, s.type = "deposit"), s;
        }),
        stateRoot: e.stateRoot
      };
    }
  }),
  transaction: /* @__PURE__ */ Af({
    format(e) {
      const t = {};
      return e.type === "0x7e" && (t.isSystemTx = e.isSystemTx, t.mint = e.mint ? we(e.mint) : void 0, t.sourceHash = e.sourceHash, t.type = "deposit"), t;
    }
  }),
  transactionReceipt: /* @__PURE__ */ rl({
    format(e) {
      return {
        l1GasPrice: e.l1GasPrice ? we(e.l1GasPrice) : null,
        l1GasUsed: e.l1GasUsed ? we(e.l1GasUsed) : null,
        l1Fee: e.l1Fee ? we(e.l1Fee) : null,
        l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null
      };
    }
  })
};
function v0(e, t) {
  return P0(e) ? E0(e) : hl(e, t);
}
const x0 = {
  transaction: v0
};
function E0(e) {
  A0(e);
  const { sourceHash: t, data: n, from: r, gas: s, isSystemTx: o, mint: i, to: a, value: c } = e, u = [
    t,
    r,
    a ?? "0x",
    i ? _(i) : "0x",
    c ? _(c) : "0x",
    s ? _(s) : "0x",
    o ? "0x1" : "0x",
    n ?? "0x"
  ];
  return Ne([
    "0x7e",
    Ke(u)
  ]);
}
function P0(e) {
  return e.type === "deposit" || typeof e.sourceHash < "u";
}
function A0(e) {
  const { from: t, to: n } = e;
  if (t && !se(t))
    throw new fe({ address: t });
  if (n && !se(n))
    throw new fe({ address: n });
}
const Ao = {
  contracts: g0,
  formatters: w0,
  serializers: x0
}, Lt = 1, B0 = /* @__PURE__ */ Wi({
  ...Ao,
  id: 10,
  name: "OP Mainnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.optimism.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Optimism Explorer",
      url: "https://optimistic.etherscan.io",
      apiUrl: "https://api-optimistic.etherscan.io/api"
    }
  },
  contracts: {
    ...Ao.contracts,
    disputeGameFactory: {
      [Lt]: {
        address: "0xe5965Ab5962eDc7477C8520243A95517CD252fA9"
      }
    },
    l2OutputOracle: {
      [Lt]: {
        address: "0xdfe97868233d1aa22e815a266982f2cf17685a27"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 4286263
    },
    portal: {
      [Lt]: {
        address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"
      }
    },
    l1StandardBridge: {
      [Lt]: {
        address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    }
  },
  sourceId: Lt
}), $0 = /* @__PURE__ */ Wi({
  id: 11155111,
  name: "Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc2.sepolia.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io",
      apiUrl: "https://api-sepolia.etherscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 751532
    },
    ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
    ensUniversalResolver: {
      address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
      blockCreated: 5317080
    }
  },
  testnet: !0
}), I0 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_coinType",
        type: "uint256"
      }
    ],
    name: "getName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address"
      },
      {
        internalType: "string",
        name: "_key",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_coinType",
        type: "uint256"
      }
    ],
    name: "getText",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
], T0 = "0xDDa56f06D80f3D8E3E35159701A63753f39c3BCB", S0 = "0x342d6524829bedfF5Ce9f56cd56d5baAcf3dbC58";
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ha = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var R0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k0 = $o(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: o,
    iconNode: i,
    ...a
  }, c) => lr(
    "svg",
    {
      ref: c,
      ...R0,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: ha("lucide", s),
      ...a
    },
    [
      ...i.map(([u, f]) => lr(u, f)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = (e, t) => {
  const n = $o(
    ({ className: r, ...s }, o) => lr(k0, {
      ref: o,
      iconNode: t,
      className: ha(`lucide-${C0(e)}`, r),
      ...s
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F0 = Ps("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N0 = Ps("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O0 = Ps("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), M0 = ({
  address: e,
  coinType: t = 614,
  rpcUrl: n,
  isSepolia: r = !1,
  backgroundColor: s,
  textColor: o,
  fontSize: i = "14px",
  padding: a = "8px 12px",
  borderRadius: c = "20px",
  isWide: u = !1,
  showAvatar: f = !0,
  useDefaultAvatar: d = !1,
  onClick: l,
  avatarSize: b = 24,
  showTooltip: g = !1,
  customLoadingComponent: y,
  customErrorComponent: p,
  showCopyButton: m = !1,
  theme: w = "light"
}) => {
  const [v, x] = bt(null), [R, I] = bt(null), [A, B] = bt(!0), [$, G] = bt(null), [O, N] = bt(!1), [D, T] = bt(!1);
  _a(() => {
    (async () => {
      try {
        const ye = r ? S0 : T0, de = m0({
          chain: r ? $0 : B0,
          transport: Pd(n || (r ? "https://sepolia.optimism.io" : "https://mainnet.optimism.io"))
        }), ge = {
          address: ye,
          abi: I0
        }, Ce = await de.multicall({
          contracts: [
            {
              ...ge,
              functionName: "getName",
              args: [e, BigInt(t)]
            },
            {
              ...ge,
              functionName: "getText",
              args: [e, "avatar", BigInt(t)]
            }
          ],
          multicallAddress: "0xca11bde05977b3631167028862be2a173976ca11",
          allowFailure: !1
        });
        x(Ce[0]), I(Ce[1]), B(!1);
      } catch (ye) {
        G(ye instanceof Error ? ye.message : String(ye)), B(!1);
      }
    })();
  }, [e, t, n, r]);
  const C = {
    light: {
      backgroundColor: s || "#f0f0f0",
      textColor: o || "#000000"
    },
    dark: {
      backgroundColor: s || "#2a2a2a",
      textColor: o || "#ffffff"
    }
  }, S = {
    display: "flex",
    alignItems: "center",
    backgroundColor: C[w].backgroundColor,
    color: C[w].textColor,
    fontSize: i,
    padding: a,
    borderRadius: c,
    overflow: "hidden",
    width: u ? "200px" : "120px",
    cursor: l ? "pointer" : "default",
    position: "relative"
  }, F = {
    width: `${b}px`,
    height: `${b}px`,
    borderRadius: "50%",
    marginRight: "8px",
    flexShrink: 0
  }, M = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    flexGrow: 1,
    minWidth: 0
  }, q = {
    position: "absolute",
    bottom: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: w === "light" ? "#333" : "#f0f0f0",
    color: w === "light" ? "#fff" : "#333",
    padding: "5px 10px",
    borderRadius: "4px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    opacity: D ? 1 : 0,
    transition: "opacity 0.3s",
    pointerEvents: "none"
  }, W = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    marginLeft: "4px",
    color: C[w].textColor
  };
  if (A)
    return y || /* @__PURE__ */ Pe.jsx("div", { style: {
      ...S,
      animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
    }, children: "Loading..." });
  if ($)
    return p || /* @__PURE__ */ Pe.jsxs("div", { style: { color: "red", width: S.width }, children: [
      "Error: ",
      $
    ] });
  const oe = v || ((ae) => `${ae.slice(0, 6)}...${ae.slice(-4)}`)(e), ie = (ae) => {
    ae.stopPropagation(), navigator.clipboard.writeText(e), N(!0), setTimeout(() => N(!1), 2e3);
  };
  return /* @__PURE__ */ Pe.jsxs(
    "div",
    {
      style: S,
      onClick: l,
      onMouseEnter: () => T(!0),
      onMouseLeave: () => T(!1),
      children: [
        f && (d ? /* @__PURE__ */ Pe.jsx("img", { src: "default.png", alt: "Default Avatar", style: F }) : R ? /* @__PURE__ */ Pe.jsx("img", { src: R, alt: "Avatar", style: F }) : /* @__PURE__ */ Pe.jsx(O0, { style: F })),
        /* @__PURE__ */ Pe.jsx("span", { style: M, children: oe }),
        m && /* @__PURE__ */ Pe.jsx("button", { onClick: ie, style: W, children: O ? /* @__PURE__ */ Pe.jsx(F0, { size: 16 }) : /* @__PURE__ */ Pe.jsx(N0, { size: 16 }) }),
        g && /* @__PURE__ */ Pe.jsx("div", { style: q, children: v ? `${v} (${e})` : e })
      ]
    }
  );
};
export {
  E as B,
  Ut as H,
  Ue as a,
  ke as b,
  Dn as c,
  Vu as d,
  St as e,
  M0 as f,
  Wr as g,
  is as i,
  ce as s
};
