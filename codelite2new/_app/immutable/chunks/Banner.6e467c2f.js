import {
  s as De,
  e as l,
  a as k,
  c as n,
  b as u,
  v as V,
  g as C,
  f as o,
  m as s,
  i as $e,
  h as t,
  E as re,
  F as rt,
  G as nt,
  z as Ee,
  A as ye,
  J as ot,
  t as Pe,
  d as Re,
  x as xe,
  y as pe,
  K as Xe,
  n as Ne,
  q as it,
  w as ct,
} from "./scheduler.3d7b914d.js";
import {
  S as Ve,
  i as Ue,
  c as de,
  a as fe,
  m as he,
  t as J,
  g as Ze,
  b as K,
  f as et,
  d as ge,
  h as tt,
  e as ut,
} from "./index.866787e6.js";
import { s as at } from "./index.337833c1.js";
import { L as dt } from "./Link.e96ab56a.js";
import { I as Ae } from "./Icon.b516688f.js";
import { C as ft } from "./ContactModal.1f348580.js";
import { A as ht } from "./animated-text.12049b15.js";
function st(i) {
  let e,
    r,
    a,
    c = "Hackathon",
    d,
    m,
    b,
    _ = "Eternal",
    f,
    h,
    v,
    O = "Accelerator",
    y,
    U,
    E,
    Q = "Find Cofounders",
    z,
    P,
    M,
    R = "About",
    L,
    q,
    I,
    T,
    W;
  return {
    c() {
      (e = l("ul")),
        (r = l("li")),
        (a = l("a")),
        (a.textContent = c),
        (d = k()),
        (m = l("li")),
        (b = l("a")),
        (b.textContent = _),
        (f = k()),
        (h = l("li")),
        (v = l("a")),
        (v.textContent = O),
        (y = k()),
        (U = l("li")),
        (E = l("a")),
        (E.textContent = Q),
        (z = k()),
        (P = l("li")),
        (M = l("a")),
        (M.textContent = R),
        this.h();
    },
    l(w) {
      e = n(w, "UL", { class: !0 });
      var x = u(e);
      r = n(x, "LI", {});
      var N = u(r);
      (a = n(N, "A", { class: !0, href: !0, "data-svelte-h": !0 })),
        V(a) !== "svelte-pfz95r" && (a.textContent = c),
        N.forEach(o),
        (d = C(x)),
        (m = n(x, "LI", {}));
      var Y = u(m);
      (b = n(Y, "A", { class: !0, href: !0, "data-svelte-h": !0 })),
        V(b) !== "svelte-2qxkij" && (b.textContent = _),
        Y.forEach(o),
        (f = C(x)),
        (h = n(x, "LI", {}));
      var H = u(h);
      (v = n(H, "A", { class: !0, href: !0, "data-svelte-h": !0 })),
        V(v) !== "svelte-1c9cavz" && (v.textContent = O),
        H.forEach(o),
        (y = C(x)),
        (U = n(x, "LI", {}));
      var F = u(U);
      (E = n(F, "A", { class: !0, href: !0, "data-svelte-h": !0 })),
        V(E) !== "svelte-1a1ytv4" && (E.textContent = Q),
        F.forEach(o),
        (z = C(x)),
        (P = n(x, "LI", {}));
      var A = u(P);
      (M = n(A, "A", { class: !0, href: !0, "data-svelte-h": !0 })),
        V(M) !== "svelte-cy6qhn" && (M.textContent = R),
        A.forEach(o),
        x.forEach(o),
        this.h();
    },
    h() {
      s(
        a,
        "class",
        "focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out"
      ),
        s(a, "href", "/hackathon"),
        s(
          b,
          "class",
          "focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out"
        ),
        s(b, "href", "/eternal"),
        s(
          v,
          "class",
          "focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out"
        ),
        s(v, "href", "/accelerator"),
        s(
          E,
          "class",
          "focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out"
        ),
        s(E, "href", "/get-started"),
        s(
          M,
          "class",
          "focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out"
        ),
        s(M, "href", "/about"),
        s(
          e,
          "class",
          (L = `${
            i[0] ? "flex" : "hidden"
          } border-gray-7 bg-gray-11 text-gray-3 w-full flex-col gap-8 border-y p-6`)
        );
    },
    m(w, x) {
      $e(w, e, x),
        t(e, r),
        t(r, a),
        t(e, d),
        t(e, m),
        t(m, b),
        t(e, f),
        t(e, h),
        t(h, v),
        t(e, y),
        t(e, U),
        t(U, E),
        t(e, z),
        t(e, P),
        t(P, M),
        (I = !0),
        T ||
          ((W = [
            re(a, "click", i[3]),
            re(b, "click", i[4]),
            re(v, "click", i[5]),
            re(E, "click", i[6]),
            re(M, "click", i[7]),
          ]),
          (T = !0));
    },
    p(w, x) {
      (!I ||
        (x & 1 &&
          L !==
            (L = `${
              w[0] ? "flex" : "hidden"
            } border-gray-7 bg-gray-11 text-gray-3 w-full flex-col gap-8 border-y p-6`))) &&
        s(e, "class", L);
    },
    i(w) {
      I ||
        (w &&
          ot(() => {
            I && (q || (q = tt(e, at, {}, !0)), q.run(1));
          }),
        (I = !0));
    },
    o(w) {
      w && (q || (q = tt(e, at, {}, !1)), q.run(0)), (I = !1);
    },
    d(w) {
      w && o(e), w && q && q.end(), (T = !1), rt(W);
    },
  };
}
function gt(i) {
  let e;
  return {
    c() {
      e = Pe("Sign Up");
    },
    l(r) {
      e = Re(r, "Sign Up");
    },
    m(r, a) {
      $e(r, e, a);
    },
    d(r) {
      r && o(e);
    },
  };
}
function mt(i) {
  let e, r;
  return (
    (e = new Ae({ props: { name: "hamburger" } })),
    {
      c() {
        de(e.$$.fragment);
      },
      l(a) {
        fe(e.$$.fragment, a);
      },
      m(a, c) {
        he(e, a, c), (r = !0);
      },
      i(a) {
        r || (J(e.$$.fragment, a), (r = !0));
      },
      o(a) {
        K(e.$$.fragment, a), (r = !1);
      },
      d(a) {
        ge(e, a);
      },
    }
  );
}
function vt(i) {
  let e, r;
  return (
    (e = new Ae({ props: { name: "close" } })),
    {
      c() {
        de(e.$$.fragment);
      },
      l(a) {
        fe(e.$$.fragment, a);
      },
      m(a, c) {
        he(e, a, c), (r = !0);
      },
      i(a) {
        r || (J(e.$$.fragment, a), (r = !0));
      },
      o(a) {
        K(e.$$.fragment, a), (r = !1);
      },
      d(a) {
        ge(e, a);
      },
    }
  );
}
function _t(i) {
  let e,
    r,
    a,
    c,
    d,
    m,
    b =
      '<img class="max-w-[9.5rem] md:max-w-[11.15rem]" src="/images/logos/colosseum-logo-white.svg" alt="Colosseum logo"/>',
    _,
    f,
    h,
    v,
    O =
      '<li><a class="focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out" href="/hackathon">Hackathon</a></li> <li><a class="focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out" href="/eternal">Eternal</a></li> <li><a class="focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out" href="/accelerator">Accelerator</a></li> <li><a class="focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out" href="/get-started">Platform</a></li> <li><a class="focus-within:text-green-1 hover:text-green-1 block transition-colors duration-300 ease-in-out" href="/about">About</a></li>',
    y,
    U,
    E,
    Q,
    z,
    P,
    M,
    R,
    L,
    q,
    I,
    T,
    W,
    w,
    x,
    N,
    Y,
    H,
    F,
    A,
    G,
    S,
    be,
    we,
    g = i[0] && st(i);
  N = new dt({
    props: {
      linkTo: "https://arena.colosseum.org/signup",
      theme: "green",
      placement: "header",
      $$slots: { default: [gt] },
      $$scope: { ctx: i },
    },
  });
  const ee = [vt, mt],
    X = [];
  function ke(p, D) {
    return p[0] ? 0 : 1;
  }
  return (
    (F = ke(i)),
    (A = X[F] = ee[F](i)),
    {
      c() {
        (e = l("header")),
          (r = l("nav")),
          (a = l("div")),
          (c = l("div")),
          (d = l("div")),
          (m = l("a")),
          (m.innerHTML = b),
          (_ = k()),
          (f = l("div")),
          (h = l("div")),
          (v = l("ul")),
          (v.innerHTML = O),
          (y = k()),
          g && g.c(),
          (U = k()),
          (E = l("div")),
          (z = k()),
          (P = l("div")),
          (R = k()),
          (L = l("div")),
          (I = k()),
          (T = l("div")),
          (w = k()),
          (x = l("div")),
          de(N.$$.fragment),
          (Y = k()),
          (H = l("button")),
          A.c(),
          this.h();
      },
      l(p) {
        e = n(p, "HEADER", { class: !0 });
        var D = u(e);
        r = n(D, "NAV", {});
        var te = u(r);
        a = n(te, "DIV", { class: !0 });
        var j = u(a);
        c = n(j, "DIV", { class: !0 });
        var me = u(c);
        d = n(me, "DIV", { class: !0 });
        var le = u(d);
        (m = n(le, "A", { href: !0, "data-svelte-h": !0 })),
          V(m) !== "svelte-zb7es7" && (m.innerHTML = b),
          (_ = C(le)),
          (f = n(le, "DIV", { class: !0 }));
        var B = u(f);
        h = n(B, "DIV", { class: !0 });
        var ve = u(h);
        (v = n(ve, "UL", { class: !0, "data-svelte-h": !0 })),
          V(v) !== "svelte-w20635" && (v.innerHTML = O),
          (y = C(ve)),
          g && g.l(ve),
          ve.forEach(o),
          (U = C(B)),
          (E = n(B, "DIV", { class: !0 })),
          u(E).forEach(o),
          (z = C(B)),
          (P = n(B, "DIV", { class: !0 })),
          u(P).forEach(o),
          (R = C(B)),
          (L = n(B, "DIV", { class: !0 })),
          u(L).forEach(o),
          (I = C(B)),
          (T = n(B, "DIV", { class: !0 })),
          u(T).forEach(o),
          B.forEach(o),
          le.forEach(o),
          (w = C(me)),
          (x = n(me, "DIV", { class: !0 }));
        var ne = u(x);
        fe(N.$$.fragment, ne),
          (Y = C(ne)),
          (H = n(ne, "BUTTON", { class: !0 }));
        var oe = u(H);
        A.l(oe),
          oe.forEach(o),
          ne.forEach(o),
          me.forEach(o),
          j.forEach(o),
          te.forEach(o),
          D.forEach(o),
          this.h();
      },
      h() {
        s(m, "href", "/"),
          s(
            v,
            "class",
            "bg-gray-11 text-gray-3 hidden w-full font-medium md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:p-0"
          ),
          s(h, "class", "relative"),
          s(
            E,
            "class",
            (Q = `${
              i[0]
                ? "absolute left-0 top-0 aspect-square w-1 bg-gray-500 md:hidden"
                : ""
            }`)
          ),
          s(
            P,
            "class",
            (M = `${
              i[0]
                ? "absolute right-0 top-0 aspect-square w-1 bg-gray-500 md:hidden"
                : ""
            }`)
          ),
          s(
            L,
            "class",
            (q = `${
              i[0]
                ? "absolute bottom-0 left-0 aspect-square w-1 bg-gray-500 md:hidden"
                : ""
            }`)
          ),
          s(
            T,
            "class",
            (W = `${
              i[0]
                ? "absolute bottom-0 right-0 aspect-square w-1 bg-gray-500 md:hidden"
                : ""
            }`)
          ),
          s(f, "class", "absolute left-0 right-0 top-[88px] z-10 md:static"),
          s(d, "class", "flex items-center gap-10"),
          s(H, "class", "ml-2 md:hidden"),
          s(x, "class", "flex items-center"),
          s(c, "class", "flex items-center justify-between px-4 py-6"),
          s(a, "class", "font-base font-tasa-orbiter-display relative"),
          s(e, "class", (G = i[1].class));
      },
      m(p, D) {
        $e(p, e, D),
          t(e, r),
          t(r, a),
          t(a, c),
          t(c, d),
          t(d, m),
          t(d, _),
          t(d, f),
          t(f, h),
          t(h, v),
          t(h, y),
          g && g.m(h, null),
          t(f, U),
          t(f, E),
          t(f, z),
          t(f, P),
          t(f, R),
          t(f, L),
          t(f, I),
          t(f, T),
          t(c, w),
          t(c, x),
          he(N, x, null),
          t(x, Y),
          t(x, H),
          X[F].m(H, null),
          (S = !0),
          be ||
            ((we = [re(m, "click", i[2]), re(H, "click", i[8])]), (be = !0));
      },
      p(p, [D]) {
        p[0]
          ? g
            ? (g.p(p, D), D & 1 && J(g, 1))
            : ((g = st(p)), g.c(), J(g, 1), g.m(h, null))
          : g &&
            (Ze(),
            K(g, 1, 1, () => {
              g = null;
            }),
            et()),
          (!S ||
            (D & 1 &&
              Q !==
                (Q = `${
                  p[0]
                    ? "absolute left-0 top-0 aspect-square w-1 bg-gray-500 md:hidden"
                    : ""
                }`))) &&
            s(E, "class", Q),
          (!S ||
            (D & 1 &&
              M !==
                (M = `${
                  p[0]
                    ? "absolute right-0 top-0 aspect-square w-1 bg-gray-500 md:hidden"
                    : ""
                }`))) &&
            s(P, "class", M),
          (!S ||
            (D & 1 &&
              q !==
                (q = `${
                  p[0]
                    ? "absolute bottom-0 left-0 aspect-square w-1 bg-gray-500 md:hidden"
                    : ""
                }`))) &&
            s(L, "class", q),
          (!S ||
            (D & 1 &&
              W !==
                (W = `${
                  p[0]
                    ? "absolute bottom-0 right-0 aspect-square w-1 bg-gray-500 md:hidden"
                    : ""
                }`))) &&
            s(T, "class", W);
        const te = {};
        D & 512 && (te.$$scope = { dirty: D, ctx: p }), N.$set(te);
        let j = F;
        (F = ke(p)),
          F !== j &&
            (Ze(),
            K(X[j], 1, 1, () => {
              X[j] = null;
            }),
            et(),
            (A = X[F]),
            A || ((A = X[F] = ee[F](p)), A.c()),
            J(A, 1),
            A.m(H, null)),
          (!S || (D & 2 && G !== (G = p[1].class))) && s(e, "class", G);
      },
      i(p) {
        S || (J(g), J(N.$$.fragment, p), J(A), (S = !0));
      },
      o(p) {
        K(g), K(N.$$.fragment, p), K(A), (S = !1);
      },
      d(p) {
        p && o(e), g && g.d(), ge(N), X[F].d(), (be = !1), rt(we);
      },
    }
  );
}
function xt(i, e, r) {
  let a = !1;
  nt(() => {
    const v = window.matchMedia("(min-width: 768px)"),
      O = (y) => {
        y.matches && r(0, (a = !1));
      };
    return (
      v.addEventListener("change", O),
      O(v),
      () => {
        v.removeEventListener("change", O);
      }
    );
  });
  const c = () => r(0, (a = !1)),
    d = () => r(0, (a = !1)),
    m = () => r(0, (a = !1)),
    b = () => r(0, (a = !1)),
    _ = () => r(0, (a = !1)),
    f = () => r(0, (a = !1)),
    h = () => {
      r(0, (a = !a));
    };
  return (
    (i.$$set = (v) => {
      r(1, (e = Ee(Ee({}, e), ye(v))));
    }),
    (e = ye(e)),
    [a, e, c, d, m, b, _, f, h]
  );
}
class Vt extends Ve {
  constructor(e) {
    super(), Ue(this, e, xt, _t, De, {});
  }
}
function pt(i) {
  let e, r, a, c, d, m, b, _;
  return {
    c() {
      (e = xe("svg")),
        (r = xe("defs")),
        (a = xe("g")),
        (c = xe("g")),
        (d = xe("g")),
        (m = xe("g")),
        (b = xe("path")),
        this.h();
    },
    l(f) {
      e = pe(f, "svg", {
        class: !0,
        id: !0,
        style: !0,
        version: !0,
        viewBox: !0,
        width: !0,
        "xml:space": !0,
      });
      var h = u(e);
      (r = pe(h, "defs", { id: !0 })),
        u(r).forEach(o),
        (a = pe(h, "g", { id: !0 })),
        u(a).forEach(o),
        (c = pe(h, "g", { id: !0 })),
        u(c).forEach(o),
        (d = pe(h, "g", { id: !0, transform: !0 })),
        u(d).forEach(o),
        (m = pe(h, "g", { id: !0 }));
      var v = u(m);
      (b = pe(v, "path", { d: !0, id: !0, style: !0 })),
        u(b).forEach(o),
        v.forEach(o),
        h.forEach(o),
        this.h();
    },
    h() {
      s(r, "id", "defs19"),
        s(a, "id", "g3021"),
        s(c, "id", "Layer_1_1_"),
        s(d, "id", "Layer_1_1_-7"),
        s(d, "transform", "translate(-819.672,-61.929991)"),
        s(
          b,
          "d",
          "m 81.05643,267.04958 c 43.7041,0 84.78879,17.07214 115.66407,48.12395 30.93179,31.05179 47.96156,72.41184 47.96156,116.44072 h 67.34951 c 0,-127.8857 -103.61898,-231.92124 -230.97514,-231.92124 v 67.35657 z M 81.1624,147.65054 c 155.7603,0 282.48808,127.4197 282.48808,284.04844 H 431 C 431,237.92528 274.05354,80.30102 81.1624,80.30102 v 67.34952 z m 93.13421,236.99769 c 0,25.75647 -20.89183,46.6483 -46.6483,46.6483 C 101.89184,431.29653 81,410.41176 81,384.64823 c 0,-25.7706 20.88477,-46.64831 46.64124,-46.64831 25.75649,0 46.65537,20.87771 46.65537,46.64831 z"
        ),
        s(b, "id", "path3844"),
        Xe(b, "fill", "#ffffff"),
        s(m, "id", "g2989"),
        s(e, "class", (_ = i[0].class)),
        s(e, "id", "Layer_1"),
        Xe(e, "enable-background", "new 0 0 512 512"),
        s(e, "version", "1.1"),
        s(e, "viewBox", "0 0 512 512"),
        s(e, "width", "512px"),
        s(e, "xml:space", "preserve");
    },
    m(f, h) {
      $e(f, e, h), t(e, r), t(e, a), t(e, c), t(e, d), t(e, m), t(m, b);
    },
    p(f, [h]) {
      h & 1 && _ !== (_ = f[0].class) && s(e, "class", _);
    },
    i: Ne,
    o: Ne,
    d(f) {
      f && o(e);
    },
  };
}
function bt(i, e, r) {
  return (
    (i.$$set = (a) => {
      r(0, (e = Ee(Ee({}, e), ye(a))));
    }),
    (e = ye(e)),
    [e]
  );
}
class wt extends Ve {
  constructor(e) {
    super(), Ue(this, e, bt, pt, De, {});
  }
}
function kt(i) {
  let e,
    r,
    a,
    c,
    d,
    m =
      '<img class="mb-3 max-w-[10.5rem]" src="/images/logos/colosseum-logo-white.svg" alt="Colosseum logo"/>',
    b,
    _,
    f = new Date().getFullYear() + "",
    h,
    v,
    O,
    y,
    U,
    E,
    Q,
    z,
    P =
      '<img alt="youtube social icon" src="/images/icons/youtube-icon.png" class="mx-3 mt-px w-7"/>',
    M,
    R,
    L,
    q,
    I,
    T,
    W,
    w,
    x,
    N =
      '<h2 class="text-gray-5 mb-6 md:mb-8">Compete</h2> <ul class="grid gap-4"><li><a class="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out" href="/hackathon">Hackathon</a></li> <li><a class="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out" href="/eternal">Eternal</a></li> <li><a class="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out" href="/accelerator">Accelerator</a></li></ul>',
    Y,
    H,
    F =
      '<h2 class="text-gray-5 mb-6 md:mb-8">Build</h2> <ul class="grid gap-4"><li><a class="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out" href="https://arena.colosseum.org/signup">Join Colosseum</a></li> <li><a class="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out" href="/get-started">Find Cofounders</a></li> <li><a class="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out" href="/radar/resources">Developer Resources</a></li> <li><a class="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out" href="https://blog.colosseum.org" target="_blank">News</a></li></ul>',
    A,
    G,
    S,
    be = "Organization",
    we,
    g,
    ee,
    X =
      '<a class="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out" href="/about">About Colosseum</a>',
    ke,
    p,
    D =
      '<a class="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out" href="https://arena.colosseum.org/analytics">Analytics</a>',
    te,
    j,
    me =
      '<a class="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out" href="/code-of-ethics">Code of Ethics</a>',
    le,
    B,
    ve =
      '<a class="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out" href="/press-and-brand">Press &amp; Brand</a>',
    ne,
    oe,
    ie,
    Oe = "Contact Us",
    qe,
    Ce,
    je =
      '<h2 class="text-gray-5 mb-6 md:mb-8">Legal</h2> <ul class="grid gap-4"><li><a class="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out" href="/legal/Colosseum - Terms of Service.pdf">Terms of Service</a></li> <li><a class="focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out" href="/legal/Colosseum%20-%20Privacy%20Policy.pdf">Privacy Policy</a></li></ul>',
    Fe,
    ae,
    Se,
    Me,
    Le,
    Be,
    Je;
  (E = new Ae({ props: { name: "x", class: "w-14" } })),
    (L = new Ae({ props: { name: "linkedin", class: "w-14" } })),
    (T = new wt({ props: { class: "ml-2 w-7" } }));
  function lt($) {
    i[3]($);
  }
  let Ge = {};
  return (
    i[0] !== void 0 && (Ge.showContactUsModal = i[0]),
    (ae = new ft({ props: Ge })),
    it.push(() => ut(ae, "showContactUsModal", lt)),
    {
      c() {
        (e = l("footer")),
          (r = l("div")),
          (a = l("div")),
          (c = l("div")),
          (d = l("a")),
          (d.innerHTML = m),
          (b = k()),
          (_ = l("p")),
          (h = Pe(f)),
          (v = Pe(" Colosseum © All Rights Reserved")),
          (O = k()),
          (y = l("div")),
          (U = l("a")),
          de(E.$$.fragment),
          (Q = k()),
          (z = l("a")),
          (z.innerHTML = P),
          (M = k()),
          (R = l("a")),
          de(L.$$.fragment),
          (q = k()),
          (I = l("a")),
          de(T.$$.fragment),
          (W = k()),
          (w = l("div")),
          (x = l("div")),
          (x.innerHTML = N),
          (Y = k()),
          (H = l("div")),
          (H.innerHTML = F),
          (A = k()),
          (G = l("div")),
          (S = l("h2")),
          (S.textContent = be),
          (we = k()),
          (g = l("ul")),
          (ee = l("li")),
          (ee.innerHTML = X),
          (ke = k()),
          (p = l("li")),
          (p.innerHTML = D),
          (te = k()),
          (j = l("li")),
          (j.innerHTML = me),
          (le = k()),
          (B = l("li")),
          (B.innerHTML = ve),
          (ne = k()),
          (oe = l("li")),
          (ie = l("button")),
          (ie.textContent = Oe),
          (qe = k()),
          (Ce = l("div")),
          (Ce.innerHTML = je),
          (Fe = k()),
          de(ae.$$.fragment),
          this.h();
      },
      l($) {
        e = n($, "FOOTER", { class: !0 });
        var se = u(e);
        r = n(se, "DIV", { class: !0 });
        var _e = u(r);
        a = n(_e, "DIV", {});
        var Ie = u(a);
        c = n(Ie, "DIV", { class: !0 });
        var Te = u(c);
        (d = n(Te, "A", { href: !0, "data-svelte-h": !0 })),
          V(d) !== "svelte-1claut1" && (d.innerHTML = m),
          (b = C(Te)),
          (_ = n(Te, "P", { class: !0 }));
        var ze = u(_);
        (h = Re(ze, f)),
          (v = Re(ze, " Colosseum © All Rights Reserved")),
          ze.forEach(o),
          Te.forEach(o),
          (O = C(Ie)),
          (y = n(Ie, "DIV", { class: !0 }));
        var ce = u(y);
        U = n(ce, "A", { href: !0, target: !0 });
        var Ke = u(U);
        fe(E.$$.fragment, Ke),
          Ke.forEach(o),
          (Q = C(ce)),
          (z = n(ce, "A", { href: !0, target: !0, "data-svelte-h": !0 })),
          V(z) !== "svelte-dk7qrs" && (z.innerHTML = P),
          (M = C(ce)),
          (R = n(ce, "A", { href: !0, target: !0 }));
        var Qe = u(R);
        fe(L.$$.fragment, Qe),
          Qe.forEach(o),
          (q = C(ce)),
          (I = n(ce, "A", { href: !0, target: !0 }));
        var We = u(I);
        fe(T.$$.fragment, We),
          We.forEach(o),
          ce.forEach(o),
          Ie.forEach(o),
          (W = C(_e)),
          (w = n(_e, "DIV", { class: !0 }));
        var ue = u(w);
        (x = n(ue, "DIV", { "data-svelte-h": !0 })),
          V(x) !== "svelte-1r914l9" && (x.innerHTML = N),
          (Y = C(ue)),
          (H = n(ue, "DIV", { "data-svelte-h": !0 })),
          V(H) !== "svelte-19wer4l" && (H.innerHTML = F),
          (A = C(ue)),
          (G = n(ue, "DIV", {}));
        var He = u(G);
        (S = n(He, "H2", { class: !0, "data-svelte-h": !0 })),
          V(S) !== "svelte-1b686v2" && (S.textContent = be),
          (we = C(He)),
          (g = n(He, "UL", { class: !0 }));
        var Z = u(g);
        (ee = n(Z, "LI", { "data-svelte-h": !0 })),
          V(ee) !== "svelte-1w3gox4" && (ee.innerHTML = X),
          (ke = C(Z)),
          (p = n(Z, "LI", { "data-svelte-h": !0 })),
          V(p) !== "svelte-l35nd6" && (p.innerHTML = D),
          (te = C(Z)),
          (j = n(Z, "LI", { "data-svelte-h": !0 })),
          V(j) !== "svelte-91qux6" && (j.innerHTML = me),
          (le = C(Z)),
          (B = n(Z, "LI", { "data-svelte-h": !0 })),
          V(B) !== "svelte-yq8pxn" && (B.innerHTML = ve),
          (ne = C(Z)),
          (oe = n(Z, "LI", {}));
        var Ye = u(oe);
        (ie = n(Ye, "BUTTON", { class: !0, "data-svelte-h": !0 })),
          V(ie) !== "svelte-93tr5i" && (ie.textContent = Oe),
          Ye.forEach(o),
          Z.forEach(o),
          He.forEach(o),
          (qe = C(ue)),
          (Ce = n(ue, "DIV", { "data-svelte-h": !0 })),
          V(Ce) !== "svelte-1bs7078" && (Ce.innerHTML = je),
          ue.forEach(o),
          _e.forEach(o),
          (Fe = C(se)),
          fe(ae.$$.fragment, se),
          se.forEach(o),
          this.h();
      },
      h() {
        s(d, "href", "/"),
          s(_, "class", "mr-8"),
          s(c, "class", "mb-6 mt-1 font-normal md:mb-20"),
          s(U, "href", "https://x.com/colosseum"),
          s(U, "target", "_blank"),
          s(z, "href", "https://www.youtube.com/@Colosseum"),
          s(z, "target", "_blank"),
          s(R, "href", "https://www.linkedin.com/company/colosseumorg/about"),
          s(R, "target", "_blank"),
          s(I, "href", "https://rss.com/podcasts/colosseum-podcast/"),
          s(I, "target", "_blank"),
          s(y, "class", "flex -translate-x-5 items-center"),
          s(S, "class", "text-gray-5 mb-6 md:mb-8"),
          s(
            ie,
            "class",
            "focus-within:text-green-1 hover:text-green-1 transition-colors duration-300 ease-in-out"
          ),
          s(g, "class", "grid gap-4"),
          s(
            w,
            "class",
            "grid grid-cols-2 gap-x-6 gap-y-16 sm:grid-cols-4 md:gap-x-12 md:gap-y-0"
          ),
          s(
            r,
            "class",
            "text-gray-3 mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 px-6 py-20 text-sm font-medium md:flex-row md:gap-0 md:pb-20 md:pt-36"
          ),
          s(e, "class", (Me = i[1].class));
      },
      m($, se) {
        $e($, e, se),
          t(e, r),
          t(r, a),
          t(a, c),
          t(c, d),
          t(c, b),
          t(c, _),
          t(_, h),
          t(_, v),
          t(a, O),
          t(a, y),
          t(y, U),
          he(E, U, null),
          t(y, Q),
          t(y, z),
          t(y, M),
          t(y, R),
          he(L, R, null),
          t(y, q),
          t(y, I),
          he(T, I, null),
          t(r, W),
          t(r, w),
          t(w, x),
          t(w, Y),
          t(w, H),
          t(w, A),
          t(w, G),
          t(G, S),
          t(G, we),
          t(G, g),
          t(g, ee),
          t(g, ke),
          t(g, p),
          t(g, te),
          t(g, j),
          t(g, le),
          t(g, B),
          t(g, ne),
          t(g, oe),
          t(oe, ie),
          t(w, qe),
          t(w, Ce),
          t(e, Fe),
          he(ae, e, null),
          (Le = !0),
          Be || ((Je = re(ie, "click", i[2])), (Be = !0));
      },
      p($, [se]) {
        const _e = {};
        !Se &&
          se & 1 &&
          ((Se = !0), (_e.showContactUsModal = $[0]), ct(() => (Se = !1))),
          ae.$set(_e),
          (!Le || (se & 2 && Me !== (Me = $[1].class))) && s(e, "class", Me);
      },
      i($) {
        Le ||
          (J(E.$$.fragment, $),
          J(L.$$.fragment, $),
          J(T.$$.fragment, $),
          J(ae.$$.fragment, $),
          (Le = !0));
      },
      o($) {
        K(E.$$.fragment, $),
          K(L.$$.fragment, $),
          K(T.$$.fragment, $),
          K(ae.$$.fragment, $),
          (Le = !1);
      },
      d($) {
        $ && o(e), ge(E), ge(L), ge(T), ge(ae), (Be = !1), Je();
      },
    }
  );
}
function Ct(i, e, r) {
  let a = !1;
  const c = () => r(0, (a = !0));
  function d(m) {
    (a = m), r(0, a);
  }
  return (
    (i.$$set = (m) => {
      r(1, (e = Ee(Ee({}, e), ye(m))));
    }),
    (e = ye(e)),
    [a, e, c, d]
  );
}
class Ut extends Ve {
  constructor(e) {
    super(), Ue(this, e, Ct, kt, De, {});
  }
}
function Et(i) {
  let e, r, a, c, d, m, b;
  return (
    (c = new ht({ props: { text: yt } })),
    {
      c() {
        (e = l("div")),
          (r = l("button")),
          (a = l("span")),
          de(c.$$.fragment),
          this.h();
      },
      l(_) {
        e = n(_, "DIV", { class: !0 });
        var f = u(e);
        r = n(f, "BUTTON", { "aria-label": !0, class: !0 });
        var h = u(r);
        a = n(h, "SPAN", { class: !0 });
        var v = u(a);
        fe(c.$$.fragment, v),
          v.forEach(o),
          h.forEach(o),
          f.forEach(o),
          this.h();
      },
      h() {
        s(
          a,
          "class",
          "font-pitch relative inline-block text-[12px] font-[900] uppercase leading-[18px] tracking-[0.4px] text-[#0F0F0F] sm:text-[14px] sm:leading-6 sm:tracking-[0.45px] md:text-[15px] md:leading-[22px] md:tracking-[0.48px] lg:text-[16px] lg:leading-[24px] lg:tracking-[0.5px] xl:text-[17px] xl:leading-[26px] xl:tracking-[0.55px] 2xl:text-[18px] 2xl:leading-[28px] 2xl:tracking-[0.6px]"
        ),
          s(r, "aria-label", "Sign up for the Solana Cypherpunk Hackathon"),
          s(
            r,
            "class",
            "flex flex-row items-center gap-x-2 rounded px-2 transition-all duration-300 group-hover:scale-[1.02]"
          ),
          s(
            e,
            "class",
            "group flex w-full justify-center bg-[#FBE9BB] p-2 text-center shadow-md ring-1 ring-[#0F0F0F]/15 sm:p-4"
          );
      },
      m(_, f) {
        $e(_, e, f),
          t(e, r),
          t(r, a),
          he(c, a, null),
          (d = !0),
          m || ((b = re(r, "click", $t)), (m = !0));
      },
      p: Ne,
      i(_) {
        d || (J(c.$$.fragment, _), (d = !0));
      },
      o(_) {
        K(c.$$.fragment, _), (d = !1);
      },
      d(_) {
        _ && o(e), ge(c), (m = !1), b();
      },
    }
  );
}
let yt =
  "Sign up for the Solana Cypherpunk Hackathon commencing on September 25, 2025";
function $t(i) {
  i.preventDefault(), (window.location.href = "/cypherpunk");
}
class qt extends Ve {
  constructor(e) {
    super(), Ue(this, e, null, Et, De, {});
  }
}
export { qt as B, Ut as F, Vt as H };
