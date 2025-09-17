var R = Object.defineProperty;
var G = (t, e, n) =>
  e in t
    ? R(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var f = (t, e, n) => (G(t, typeof e != "symbol" ? e + "" : e, n), n);
function z() {}
const ut = (t) => t;
function F(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function I(t) {
  return t();
}
function ft() {
  return Object.create(null);
}
function U(t) {
  t.forEach(I);
}
function _t(t) {
  return typeof t == "function";
}
function ht(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let m;
function D(t, e) {
  return t === e
    ? !0
    : (m || (m = document.createElement("a")), (m.href = e), t === m.href);
}
function H(t) {
  return t.split(",").map((e) => e.trim().split(" ").filter(Boolean));
}
function dt(t, e) {
  const n = H(t.srcset),
    i = H(e || "");
  return (
    i.length === n.length &&
    i.every(([s, l], r) => l === n[r][1] && (D(n[r][0], s) || D(s, n[r][0])))
  );
}
function mt(t) {
  return Object.keys(t).length === 0;
}
function W(t, ...e) {
  if (t == null) {
    for (const i of e) i(void 0);
    return z;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function pt(t, e, n) {
  t.$$.on_destroy.push(W(e, n));
}
function yt(t, e, n, i) {
  if (t) {
    const s = M(t, e, n, i);
    return t[0](s);
  }
}
function M(t, e, n, i) {
  return t[1] && i ? F(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function gt(t, e, n, i) {
  if (t[2] && i) {
    const s = t[2](i(n));
    if (e.dirty === void 0) return s;
    if (typeof s == "object") {
      const l = [],
        r = Math.max(e.dirty.length, s.length);
      for (let o = 0; o < r; o += 1) l[o] = e.dirty[o] | s[o];
      return l;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function bt(t, e, n, i, s, l) {
  if (s) {
    const r = M(e, n, i, l);
    t.p(r, s);
  }
}
function xt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function wt(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function Et(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t) !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
function Nt(t) {
  const e = {};
  for (const n in t) e[n] = !0;
  return e;
}
function Tt(t) {
  return t ?? "";
}
function vt(t, e, n) {
  return t.set(n), e;
}
let y = !1;
function At() {
  y = !0;
}
function kt() {
  y = !1;
}
function J(t, e, n, i) {
  for (; t < e; ) {
    const s = t + ((e - t) >> 1);
    n(s) <= i ? (t = s + 1) : (e = s);
  }
  return t;
}
function K(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const c = [];
    for (let a = 0; a < e.length; a++) {
      const u = e[a];
      u.claim_order !== void 0 && c.push(u);
    }
    e = c;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let s = 0;
  for (let c = 0; c < e.length; c++) {
    const a = e[c].claim_order,
      u =
        (s > 0 && e[n[s]].claim_order <= a
          ? s + 1
          : J(1, s, (B) => e[n[B]].claim_order, a)) - 1;
    i[c] = n[u] + 1;
    const k = u + 1;
    (n[k] = c), (s = Math.max(k, s));
  }
  const l = [],
    r = [];
  let o = e.length - 1;
  for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
    for (l.push(e[c - 1]); o >= c; o--) r.push(e[o]);
    o--;
  }
  for (; o >= 0; o--) r.push(e[o]);
  l.reverse(), r.sort((c, a) => c.claim_order - a.claim_order);
  for (let c = 0, a = 0; c < r.length; c++) {
    for (; a < l.length && r[c].claim_order >= l[a].claim_order; ) a++;
    const u = a < l.length ? l[a] : null;
    t.insertBefore(r[c], u);
  }
}
function Q(t, e) {
  t.appendChild(e);
}
function V(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Dt(t) {
  const e = v("style");
  return (e.textContent = "/* empty */"), X(V(t), e), e.sheet;
}
function X(t, e) {
  return Q(t.head || t, e), e.sheet;
}
function Y(t, e) {
  if (y) {
    for (
      K(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function Z(t, e, n) {
  t.insertBefore(e, n || null);
}
function $(t, e, n) {
  y && !n
    ? Y(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function E(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Ht(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function v(t) {
  return document.createElement(t);
}
function P(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function A(t) {
  return document.createTextNode(t);
}
function St() {
  return A(" ");
}
function Lt() {
  return A("");
}
function Mt(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function Pt(t) {
  return function (e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function jt(t) {
  return function (e) {
    e.target === this && t.call(this, e);
  };
}
function tt(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const et = ["width", "height"];
function Ct(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null
      ? t.removeAttribute(i)
      : i === "style"
      ? (t.style.cssText = e[i])
      : i === "__value"
      ? (t.value = t[i] = e[i])
      : n[i] && n[i].set && et.indexOf(i) === -1
      ? (t[i] = e[i])
      : tt(t, i, e[i]);
}
function Ot(t, e, n) {
  t.setAttributeNS("http://www.w3.org/1999/xlink", e, n);
}
function qt(t) {
  return t.dataset.svelteH;
}
function Bt(t) {
  return Array.from(t.childNodes);
}
function j(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function C(t, e, n, i, s = !1) {
  j(t);
  const l = (() => {
    for (let r = t.claim_info.last_index; r < t.length; r++) {
      const o = t[r];
      if (e(o)) {
        const c = n(o);
        return (
          c === void 0 ? t.splice(r, 1) : (t[r] = c),
          s || (t.claim_info.last_index = r),
          o
        );
      }
    }
    for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
      const o = t[r];
      if (e(o)) {
        const c = n(o);
        return (
          c === void 0 ? t.splice(r, 1) : (t[r] = c),
          s
            ? c === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = r),
          o
        );
      }
    }
    return i();
  })();
  return (
    (l.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    l
  );
}
function O(t, e, n, i) {
  return C(
    t,
    (s) => s.nodeName === e,
    (s) => {
      const l = [];
      for (let r = 0; r < s.attributes.length; r++) {
        const o = s.attributes[r];
        n[o.name] || l.push(o.name);
      }
      l.forEach((r) => s.removeAttribute(r));
    },
    () => i(e)
  );
}
function Rt(t, e, n) {
  return O(t, e, n, v);
}
function Gt(t, e, n) {
  return O(t, e, n, P);
}
function nt(t, e) {
  return C(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = "" + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => A(e),
    !0
  );
}
function zt(t) {
  return nt(t, " ");
}
function S(t, e, n) {
  for (let i = n; i < t.length; i += 1) {
    const s = t[i];
    if (s.nodeType === 8 && s.textContent.trim() === e) return i;
  }
  return -1;
}
function Ft(t, e) {
  const n = S(t, "HTML_TAG_START", 0),
    i = S(t, "HTML_TAG_END", n + 1);
  if (n === -1 || i === -1) return new b(e);
  j(t);
  const s = t.splice(n, i - n + 1);
  E(s[0]), E(s[s.length - 1]);
  const l = s.slice(1, s.length - 1);
  if (l.length === 0) return new b(e);
  for (const r of l)
    (r.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1);
  return new b(e, l);
}
function It(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function Ut(t, e, n, i) {
  n == null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? "important" : "");
}
function Wt(t, e, n) {
  t.classList.toggle(e, !!n);
}
function it(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
function Jt(t, e) {
  const n = [];
  let i = 0;
  for (const s of e.childNodes)
    if (s.nodeType === 8) {
      const l = s.textContent.trim();
      l === `HEAD_${t}_END`
        ? ((i -= 1), n.push(s))
        : l === `HEAD_${t}_START` && ((i += 1), n.push(s));
    } else i > 0 && n.push(s);
  return n;
}
class st {
  constructor(e = !1) {
    f(this, "is_svg", !1);
    f(this, "e");
    f(this, "n");
    f(this, "t");
    f(this, "a");
    (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e ||
      (this.is_svg
        ? (this.e = P(n.nodeName))
        : (this.e = v(n.nodeType === 11 ? "TEMPLATE" : n.nodeName)),
      (this.t = n.tagName !== "TEMPLATE" ? n : n.content),
      this.c(e)),
      this.i(i);
  }
  h(e) {
    (this.e.innerHTML = e),
      (this.n = Array.from(
        this.e.nodeName === "TEMPLATE"
          ? this.e.content.childNodes
          : this.e.childNodes
      ));
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) Z(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(E);
  }
}
class b extends st {
  constructor(n = !1, i) {
    super(n);
    f(this, "l");
    (this.e = this.n = null), (this.l = i);
  }
  c(n) {
    this.l ? (this.n = this.l) : super.c(n);
  }
  i(n) {
    for (let i = 0; i < this.n.length; i += 1) $(this.t, this.n[i], n);
  }
}
function Kt(t, e) {
  return new t(e);
}
let p;
function x(t) {
  p = t;
}
function g() {
  if (!p) throw new Error("Function called outside component initialization");
  return p;
}
function Qt(t) {
  g().$$.on_mount.push(t);
}
function Vt(t) {
  g().$$.after_update.push(t);
}
function Xt(t) {
  g().$$.on_destroy.push(t);
}
function Yt() {
  const t = g();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const s = t.$$.callbacks[e];
    if (s) {
      const l = it(e, n, { cancelable: i });
      return (
        s.slice().forEach((r) => {
          r.call(t, l);
        }),
        !l.defaultPrevented
      );
    }
    return !0;
  };
}
function Zt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const d = [],
  L = [];
let h = [];
const N = [],
  q = Promise.resolve();
let T = !1;
function rt() {
  T || ((T = !0), q.then(ct));
}
function $t() {
  return rt(), q;
}
function lt(t) {
  h.push(t);
}
function te(t) {
  N.push(t);
}
const w = new Set();
let _ = 0;
function ct() {
  if (_ !== 0) return;
  const t = p;
  do {
    try {
      for (; _ < d.length; ) {
        const e = d[_];
        _++, x(e), ot(e.$$);
      }
    } catch (e) {
      throw ((d.length = 0), (_ = 0), e);
    }
    for (x(null), d.length = 0, _ = 0; L.length; ) L.pop()();
    for (let e = 0; e < h.length; e += 1) {
      const n = h[e];
      w.has(n) || (w.add(n), n());
    }
    h.length = 0;
  } while (d.length);
  for (; N.length; ) N.pop()();
  (T = !1), w.clear(), x(t);
}
function ot(t) {
  if (t.fragment !== null) {
    t.update(), U(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(lt);
  }
}
function ee(t) {
  const e = [],
    n = [];
  h.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))),
    n.forEach((i) => i()),
    (h = e);
}
export {
  mt as $,
  wt as A,
  Ht as B,
  D as C,
  Wt as D,
  Mt as E,
  U as F,
  Qt as G,
  b as H,
  Ft as I,
  lt as J,
  Ut as K,
  Lt as L,
  Xt as M,
  Pt as N,
  Zt as O,
  ut as P,
  Yt as Q,
  Vt as R,
  $t as S,
  Kt as T,
  vt as U,
  V,
  Dt as W,
  _t as X,
  it as Y,
  ft as Z,
  ct as _,
  St as a,
  ee as a0,
  p as a1,
  x as a2,
  I as a3,
  d as a4,
  rt as a5,
  At as a6,
  kt as a7,
  jt as a8,
  Tt as a9,
  Ct as aa,
  Et as ab,
  Ot as ac,
  dt as ad,
  Nt as ae,
  Bt as b,
  Rt as c,
  nt as d,
  v as e,
  E as f,
  zt as g,
  Y as h,
  $ as i,
  It as j,
  pt as k,
  yt as l,
  tt as m,
  z as n,
  xt as o,
  gt as p,
  L as q,
  Jt as r,
  ht as s,
  A as t,
  bt as u,
  qt as v,
  te as w,
  P as x,
  Gt as y,
  F as z,
};
