import {
  s as Ee,
  e as Z,
  a as Re,
  t as pe,
  c as $,
  b as ee,
  f as q,
  g as We,
  d as be,
  m as x,
  i as Oe,
  h as G,
  j as Se,
  G as Pe,
  M as Be,
  z as me,
  A as ge,
  q as te,
  l as ze,
  u as xe,
  o as Ne,
  p as je,
  n as ye,
} from "./scheduler.3d7b914d.js";
import {
  S as qe,
  i as ve,
  g as De,
  b as ne,
  f as Ge,
  t as le,
} from "./index.866787e6.js";
import { c as H } from "./style.e74a0575.js";
function He(a = {}) {
  const {
    timeout: t = 1e4,
    includeLazyLoaded: n = !0,
    containerSelector: i = "body",
  } = a;
  return new Promise((l, h) => {
    const s = setTimeout(() => {
        h(new Error(`Image loading timeout after ${t}ms`));
      }, t),
      m = () => {
        const S = document.querySelector(i);
        if (!S) {
          clearTimeout(s), l();
          return;
        }
        const b = Array.from(S.querySelectorAll("img"));
        if (b.length === 0) {
          clearTimeout(s), l();
          return;
        }
        b
          .filter((f) => {
            if (!n && f.loading === "lazy") {
              const F = f.getBoundingClientRect();
              return (F.top < window.innerHeight && F.bottom > 0) || f.complete;
            }
            return !0;
          })
          .every(
            (f) => f.complete && (f.naturalWidth > 0 || f.naturalHeight > 0)
          )
          ? (clearTimeout(s), l())
          : setTimeout(m, 50);
      };
    document.readyState === "loading"
      ? document.addEventListener("DOMContentLoaded", m, { once: !0 })
      : m();
  });
}
function Ve(a = {}) {
  const { timeout: t = 1e4 } = a;
  return typeof document > "u" || !("fonts" in document)
    ? Promise.resolve()
    : new Promise((n, i) => {
        const l = setTimeout(() => {
            i(new Error(`Font loading timeout after ${t}ms`));
          }, t),
          s = document.fonts;
        s && "ready" in s
          ? s.ready
              .then(() => {
                clearTimeout(l), n();
              })
              .catch((m) => {
                clearTimeout(l), i(m);
              })
          : (clearTimeout(l), n());
      });
}
function Xe(a) {
  let t;
  const n = a[21].default,
    i = ze(n, a, a[20], null);
  return {
    c() {
      i && i.c();
    },
    l(l) {
      i && i.l(l);
    },
    m(l, h) {
      i && i.m(l, h), (t = !0);
    },
    p(l, h) {
      i &&
        i.p &&
        (!t || h[0] & 1048576) &&
        xe(i, n, l, l[20], t ? je(n, l[20], h, null) : Ne(l[20]), null);
    },
    i(l) {
      t || (le(i, l), (t = !0));
    },
    o(l) {
      ne(i, l), (t = !1);
    },
    d(l) {
      i && i.d(l);
    },
  };
}
function Je(a) {
  let t;
  return {
    c() {
      t = pe(a[0]);
    },
    l(n) {
      t = be(n, a[0]);
    },
    m(n, i) {
      Oe(n, t, i);
    },
    p(n, i) {
      i[0] & 1 && Se(t, n[0]);
    },
    i: ye,
    o: ye,
    d(n) {
      n && q(t);
    },
  };
}
function Ke(a) {
  let t, n, i, l, h, s, m, S, b, O;
  const A = [Je, Xe],
    f = [];
  function F(c, u) {
    return c[0] != null ? 0 : 1;
  }
  return (
    (i = F(a)),
    (l = f[i] = A[i](a)),
    {
      c() {
        (t = Z("span")),
          (n = Z("span")),
          l.c(),
          (h = Re()),
          (s = Z("span")),
          (m = pe(a[5])),
          this.h();
      },
      l(c) {
        t = $(c, "SPAN", { class: !0 });
        var u = ee(t);
        n = $(u, "SPAN", { class: !0 });
        var L = ee(n);
        l.l(L),
          L.forEach(q),
          (h = We(u)),
          (s = $(u, "SPAN", { class: !0, "aria-hidden": !0 }));
        var T = ee(s);
        (m = be(T, a[5])), T.forEach(q), u.forEach(q), this.h();
      },
      h() {
        x(n, "class", "opacity-0"),
          x(
            s,
            "class",
            (S = H("absolute inset-0", a[1] ? "whitespace-nowrap" : ""))
          ),
          x(s, "aria-hidden", "true"),
          x(t, "class", (b = H("relative inline-block", a[6].class)));
      },
      m(c, u) {
        Oe(c, t, u),
          G(t, n),
          f[i].m(n, null),
          a[22](n),
          G(t, h),
          G(t, s),
          G(s, m),
          a[23](s),
          a[24](t),
          (O = !0);
      },
      p(c, u) {
        let L = i;
        (i = F(c)),
          i === L
            ? f[i].p(c, u)
            : (De(),
              ne(f[L], 1, 1, () => {
                f[L] = null;
              }),
              Ge(),
              (l = f[i]),
              l ? l.p(c, u) : ((l = f[i] = A[i](c)), l.c()),
              le(l, 1),
              l.m(n, null)),
          (!O || u[0] & 32) && Se(m, c[5]),
          (!O ||
            (u[0] & 2 &&
              S !==
                (S = H(
                  "absolute inset-0",
                  c[1] ? "whitespace-nowrap" : ""
                )))) &&
            x(s, "class", S),
          (!O ||
            (u[0] & 64 &&
              b !== (b = H("relative inline-block", c[6].class)))) &&
            x(t, "class", b);
      },
      i(c) {
        O || (le(l), (O = !0));
      },
      o(c) {
        ne(l), (O = !1);
      },
      d(c) {
        c && q(t), f[i].d(), a[22](null), a[23](null), a[24](null);
      },
    }
  );
}
function Qe(a, t, n) {
  let { $$slots: i = {}, $$scope: l } = t,
    { text: h = null } = t,
    { noWrap: s = !1 } = t,
    { durationMs: m = 4e3 } = t,
    { playOnMount: S = !1 } = t,
    { playOnScroll: b = !0 } = t,
    { intersectionThreshold: O = 0.1 } = t,
    {
      glyphs: A = "#@$%&*+=<>/\\|{}[]()!?ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    } = t,
    { jitter: f = 0.15 } = t,
    { revealStart: F = 0.35 } = t,
    { revealRange: c = 0.5 } = t,
    { waitForImages: u = !0 } = t,
    { imageLoadingOptions: L = {} } = t,
    { waitForFonts: T = !0 } = t,
    { fontLoadingOptions: V = {} } = t,
    M = null,
    I = null,
    d = null,
    W = null,
    X = 0,
    ie = [],
    J = [],
    K = [],
    oe = [],
    _ = "",
    C = [],
    N = null,
    Q = 0,
    k = null,
    v = !1,
    w = !1,
    P = !1,
    U = !1,
    ae = !1;
  const se = (e) => /\s/.test(e),
    re = (e) => e[Math.floor(Math.random() * e.length)],
    ke = (e) => 1 - Math.pow(1 - e, 3);
  function Y() {
    if ((W != null && (cancelAnimationFrame(W), (W = null)), d)) {
      const e = d;
      (e.style.whiteSpace = ""),
        (e.style.wordBreak = ""),
        (e.style.overflowWrap = ""),
        (e.style.hyphens = "");
    }
  }
  function Le() {
    !M ||
      !b ||
      typeof IntersectionObserver > "u" ||
      ((k = new IntersectionObserver(
        (e) => {
          e.forEach((g) => {
            g.isIntersecting &&
              !v &&
              (u && !w
                ? (U = !0)
                : ((v = !0), D(), k == null || k.disconnect()));
          });
        },
        { threshold: O, rootMargin: "0px" }
      )),
      k.observe(M));
  }
  function ce() {
    k && (k.disconnect(), (k = null));
  }
  function _e() {
    !M ||
      typeof ResizeObserver > "u" ||
      (ue(),
      (N = new ResizeObserver(() => {
        if (!I || !d || s) return;
        const e = M.clientWidth;
        if (e === Q) return;
        (Q = e), (C = fe());
        const g = d;
        g.style.whiteSpace = C.length > 0 ? "pre" : "nowrap";
        const y = (d.textContent ?? _).replace(/\n/g, "");
        n(4, (d.textContent = de(y)), d);
      })),
      (Q = M.clientWidth),
      N.observe(M));
  }
  function ue() {
    N && (N.disconnect(), (N = null));
  }
  function fe() {
    var R;
    if (s) return [];
    if (!I) return [];
    const e = I.firstChild;
    if (!e || e.nodeType !== Node.TEXT_NODE) return [];
    const g = e,
      y = g.length;
    if (y === 0) return [];
    const r = document.createRange(),
      p = new Array(y);
    for (let o = 0; o < y; o++) {
      r.setStart(g, o), r.setEnd(g, o + 1);
      const z = r.getClientRects();
      z.length > 0 ? (p[o] = z[0].top) : (p[o] = o > 0 ? p[o - 1] : 0);
    }
    (R = r.detach) == null || R.call(r);
    const E = [],
      j = 0.5;
    for (let o = 0; o < y - 1; o++) Math.abs(p[o + 1] - p[o]) > j && E.push(o);
    return E;
  }
  function de(e) {
    if (s || C.length === 0) return e;
    let g = "",
      y = 0,
      r = 0,
      p = C[r] ?? -1;
    for (; y < e.length; y++)
      (g += e[y]),
        y === p &&
          ((g += `
`),
          r++,
          (p = C[r] ?? -1));
    return g;
  }
  function he() {
    return h ?? (I ? I.textContent ?? "" : "");
  }
  async function Fe() {
    if (!u) {
      (w = !0), B();
      return;
    }
    try {
      await He(L), (w = !0), B();
    } catch (e) {
      console.warn("Image loading timeout, proceeding with animation:", e),
        (w = !0),
        B();
    }
  }
  async function Te() {
    if (!T) {
      (P = !0), B();
      return;
    }
    try {
      await Ve(V), (P = !0), B();
    } catch (e) {
      console.warn("Font loading timeout, proceeding with animation:", e),
        (P = !0),
        B();
    }
  }
  function Me() {
    return (!u || w) && (!T || P);
  }
  function B() {
    Me() && (U || ae) && !v && ((v = !0), D(), k == null || k.disconnect());
  }
  function D() {
    if (!d) return;
    n(5, (_ = he())), Y(), (X = performance.now());
    const e = _.length,
      g = Math.max(1, e - 1);
    if (((C = fe()), !s && d)) {
      const r = d,
        p = C.length === 0;
      (r.style.whiteSpace = p ? "nowrap" : "pre"),
        (r.style.wordBreak = "keep-all"),
        (r.style.overflowWrap = "normal"),
        (r.style.hyphens = "none");
    }
    (ie = _.split("").map((r, p) => {
      const E = p / g,
        j = Math.random() * f;
      return Math.min(0.98, F + E * c + j);
    })),
      (J = _.split("").map((r) => (se(r) ? r : re(A)))),
      (K = new Array(e).fill(X)),
      (oe = _.split("").map(() => 120 + Math.random() * 180));
    const y = (r) => {
      const p = r - X,
        E = Math.min(1, p / m),
        j = ke(E),
        R = [];
      for (let o = 0; o < e; o++) {
        const z = _[o];
        if (se(z)) {
          R.push(z);
          continue;
        }
        const we = ie[o];
        j >= we
          ? R.push(z)
          : (r - K[o] >= oe[o] && ((J[o] = re(A)), (K[o] = r)), R.push(J[o]));
      }
      if (d) {
        if ((n(4, (d.textContent = de(R.join(""))), d), E < 1))
          W = requestAnimationFrame(y);
        else if (((W = null), d)) {
          const o = d;
          (o.style.whiteSpace = ""),
            (o.style.wordBreak = ""),
            (o.style.overflowWrap = ""),
            (o.style.hyphens = ""),
            n(4, (d.textContent = _), d);
        }
      }
    };
    W = requestAnimationFrame(y);
  }
  Pe(
    () => (
      n(5, (_ = he())),
      Fe(),
      Te(),
      _e(),
      S
        ? (u && !w) || (T && !P)
          ? (u && !w && (U = !0), T && !P && (ae = !0))
          : D()
        : b && Le(),
      () => {
        Y(), ce(), ue();
      }
    )
  ),
    Be(() => {
      Y(), ce();
    });
  function Ae(e) {
    te[e ? "unshift" : "push"](() => {
      (I = e), n(3, I);
    });
  }
  function Ie(e) {
    te[e ? "unshift" : "push"](() => {
      (d = e), n(4, d);
    });
  }
  function Ce(e) {
    te[e ? "unshift" : "push"](() => {
      (M = e), n(2, M);
    });
  }
  return (
    (a.$$set = (e) => {
      n(6, (t = me(me({}, t), ge(e)))),
        "text" in e && n(0, (h = e.text)),
        "noWrap" in e && n(1, (s = e.noWrap)),
        "durationMs" in e && n(7, (m = e.durationMs)),
        "playOnMount" in e && n(8, (S = e.playOnMount)),
        "playOnScroll" in e && n(9, (b = e.playOnScroll)),
        "intersectionThreshold" in e && n(10, (O = e.intersectionThreshold)),
        "glyphs" in e && n(11, (A = e.glyphs)),
        "jitter" in e && n(12, (f = e.jitter)),
        "revealStart" in e && n(13, (F = e.revealStart)),
        "revealRange" in e && n(14, (c = e.revealRange)),
        "waitForImages" in e && n(15, (u = e.waitForImages)),
        "imageLoadingOptions" in e && n(16, (L = e.imageLoadingOptions)),
        "waitForFonts" in e && n(17, (T = e.waitForFonts)),
        "fontLoadingOptions" in e && n(18, (V = e.fontLoadingOptions)),
        "$$scope" in e && n(20, (l = e.$$scope));
    }),
    (t = ge(t)),
    [
      h,
      s,
      M,
      I,
      d,
      _,
      t,
      m,
      S,
      b,
      O,
      A,
      f,
      F,
      c,
      u,
      L,
      T,
      V,
      D,
      l,
      i,
      Ae,
      Ie,
      Ce,
    ]
  );
}
class $e extends qe {
  constructor(t) {
    super(),
      ve(
        this,
        t,
        Qe,
        Ke,
        Ee,
        {
          text: 0,
          noWrap: 1,
          durationMs: 7,
          playOnMount: 8,
          playOnScroll: 9,
          intersectionThreshold: 10,
          glyphs: 11,
          jitter: 12,
          revealStart: 13,
          revealRange: 14,
          waitForImages: 15,
          imageLoadingOptions: 16,
          waitForFonts: 17,
          fontLoadingOptions: 18,
          play: 19,
        },
        null,
        [-1, -1]
      );
  }
  get play() {
    return this.$$.ctx[19];
  }
}
export { $e as A };
