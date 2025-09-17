import {
  s as Ce,
  e as x,
  a as W,
  c as I,
  b as V,
  v as he,
  g as q,
  f as w,
  m as N,
  i as ie,
  h as p,
  t as ve,
  d as me,
  n as Ke,
  j as en,
  G as Jn,
  M as Sa,
  C as Et,
  B as Qn,
  _ as ft,
  z as Fe,
  aa as pt,
  ab as bt,
  Q as wa,
  R as La,
  A as er,
  q as Ca,
  l as gn,
  u as hn,
  o as _n,
  p as En,
  L as Sr,
  r as Da,
} from "../chunks/scheduler.3d7b914d.js";
import {
  S as De,
  i as Ne,
  c as oe,
  a as le,
  m as ue,
  t as j,
  b as Z,
  d as ce,
  g as tr,
  f as nr,
} from "../chunks/index.866787e6.js";
import { L as Ct } from "../chunks/Link.e96ab56a.js";
import { E as mt } from "../chunks/Element.62f3ea4c.js";
import { e as $t } from "../chunks/each.e59479a4.js";
import { I as Na } from "../chunks/ImageBox.53ca9530.js";
import { d as Oa } from "../chunks/data.30b2a30e.js";
import { I as wr } from "../chunks/Icon.b516688f.js";
function rr(r, e) {
  const t = {},
    n = {},
    a = { $$scope: 1 };
  let o = r.length;
  for (; o--; ) {
    const i = r[o],
      l = e[o];
    if (l) {
      for (const s in i) s in l || (n[s] = 1);
      for (const s in l) a[s] || ((t[s] = l[s]), (a[s] = 1));
      r[o] = l;
    } else for (const s in i) a[s] = 1;
  }
  for (const i in n) i in t || (t[i] = void 0);
  return t;
}
function Ra(r) {
  let e;
  return {
    c() {
      e = ve("Sign Up");
    },
    l(t) {
      e = me(t, "Sign Up");
    },
    m(t, n) {
      ie(t, e, n);
    },
    d(t) {
      t && w(e);
    },
  };
}
function ka(r) {
  let e;
  return {
    c() {
      e = ve("Sign In");
    },
    l(t) {
      e = me(t, "Sign In");
    },
    m(t, n) {
      ie(t, e, n);
    },
    d(t) {
      t && w(e);
    },
  };
}
function Pa(r) {
  let e,
    t,
    n,
    a = `<h1 class="text-gray-1 mb-8 text-6xl font-bold uppercase md:mb-2 md:text-[7.5rem] md:font-bold md:leading-[8rem]">Enter the Arena</h1> <div class="mx-auto mb-10 max-w-[938px] text-base font-medium md:mb-14 md:text-lg"><p class="text-gray-2">Compete in the <strong>world&#39;s largest online hackathons</strong>, where elite crypto
          founders launch startups on Solana.<br class="hidden [@media(min-width:850px)]:block"/>

          Select hackathon winners raise $250,000 from Colosseum&#39;s venture fund, gain access to an
          exclusive founder network, and join Colosseum&#39;s accelerator to build unstoppable momentum.</p></div>`,
    o,
    i,
    l,
    s,
    u,
    c,
    f,
    v,
    _,
    d =
      '<img class="pointer-events-none w-full translate-x-4 select-none md:translate-x-6 lg:translate-x-8" src="/images/illustrations/illustration-1.png" alt=""/>',
    E;
  return (
    (s = new Ct({
      props: {
        linkTo: "https://arena.colosseum.org/signup",
        theme: "green",
        placement: "",
        $$slots: { default: [Ra] },
        $$scope: { ctx: r },
      },
    })),
    (f = new Ct({
      props: {
        linkTo: "https://arena.colosseum.org/signin",
        theme: "default",
        placement: "",
        $$slots: { default: [ka] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = x("section")),
          (t = x("div")),
          (n = x("div")),
          (n.innerHTML = a),
          (o = W()),
          (i = x("div")),
          (l = x("div")),
          oe(s.$$.fragment),
          (u = W()),
          (c = x("div")),
          oe(f.$$.fragment),
          (v = W()),
          (_ = x("div")),
          (_.innerHTML = d),
          this.h();
      },
      l(g) {
        e = I(g, "SECTION", {});
        var y = V(e);
        t = I(y, "DIV", { class: !0 });
        var h = V(t);
        (n = I(h, "DIV", { "data-svelte-h": !0 })),
          he(n) !== "svelte-aal0w2" && (n.innerHTML = a),
          (o = q(h)),
          (i = I(h, "DIV", { class: !0 }));
        var b = V(i);
        l = I(b, "DIV", {});
        var m = V(l);
        le(s.$$.fragment, m), m.forEach(w), (u = q(b)), (c = I(b, "DIV", {}));
        var $ = V(c);
        le(f.$$.fragment, $),
          $.forEach(w),
          b.forEach(w),
          (v = q(h)),
          (_ = I(h, "DIV", { class: !0, "data-svelte-h": !0 })),
          he(_) !== "svelte-16q1lmi" && (_.innerHTML = d),
          h.forEach(w),
          y.forEach(w),
          this.h();
      },
      h() {
        N(i, "class", "mb-2 flex items-center justify-center gap-4 md:mb-16"),
          N(_, "class", "mx-auto max-w-5xl md:-mt-10 lg:-mt-12 xl:max-w-6xl"),
          N(
            t,
            "class",
            "bg-grid-2 font-tasa-orbiter-display relative bg-[size:250%] bg-[50%_-50%] bg-no-repeat px-6 pt-14 text-center md:bg-contain md:bg-[50%_-44%] md:pt-32"
          );
      },
      m(g, y) {
        ie(g, e, y),
          p(e, t),
          p(t, n),
          p(t, o),
          p(t, i),
          p(i, l),
          ue(s, l, null),
          p(i, u),
          p(i, c),
          ue(f, c, null),
          p(t, v),
          p(t, _),
          (E = !0);
      },
      p(g, [y]) {
        const h = {};
        y & 1 && (h.$$scope = { dirty: y, ctx: g }), s.$set(h);
        const b = {};
        y & 1 && (b.$$scope = { dirty: y, ctx: g }), f.$set(b);
      },
      i(g) {
        E || (j(s.$$.fragment, g), j(f.$$.fragment, g), (E = !0));
      },
      o(g) {
        Z(s.$$.fragment, g), Z(f.$$.fragment, g), (E = !1);
      },
      d(g) {
        g && w(e), ce(s), ce(f);
      },
    }
  );
}
class Va extends De {
  constructor(e) {
    super(), Ne(this, e, null, Pa, Ce, {});
  }
}
function Ma(r) {
  let e,
    t =
      '<div class="border-gray-7 before:border-gray-8 pointer-events-none relative mx-auto aspect-video w-full max-w-4xl -translate-y-8 rounded-lg border-2 before:absolute before:-inset-1.5 before:rounded-lg before:border md:-translate-y-24"><iframe title="Introducing Colosseum Video" src="https://www.youtube.com/embed/aTMfRj6ZbAw?si=iv5Snyjo83YlwaAL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" class="pointer-events-auto aspect-video w-full rounded-[6px]"></iframe></div>';
  return {
    c() {
      (e = x("div")), (e.innerHTML = t), this.h();
    },
    l(n) {
      (e = I(n, "DIV", { class: !0, "data-svelte-h": !0 })),
        he(e) !== "svelte-vic9c0" && (e.innerHTML = t),
        this.h();
    },
    h() {
      N(e, "class", "px-6");
    },
    m(n, a) {
      ie(n, e, a);
    },
    p: Ke,
    i: Ke,
    o: Ke,
    d(n) {
      n && w(e);
    },
  };
}
class Ua extends De {
  constructor(e) {
    super(), Ne(this, e, null, Ma, Ce, {});
  }
}
function za(r) {
  let e;
  return {
    c() {
      e = ve("Colosseum's next hackathon is happening now!");
    },
    l(t) {
      e = me(t, "Colosseum's next hackathon is happening now!");
    },
    m(t, n) {
      ie(t, e, n);
    },
    d(t) {
      t && w(e);
    },
  };
}
function Ba(r) {
  let e;
  return {
    c() {
      e = ve("Colosseum's next hackathon is starting soon.");
    },
    l(t) {
      e = me(t, "Colosseum's next hackathon is starting soon.");
    },
    m(t, n) {
      ie(t, e, n);
    },
    d(t) {
      t && w(e);
    },
  };
}
function Ha(r) {
  let e;
  return {
    c() {
      e = ve("Sign Up");
    },
    l(t) {
      e = me(t, "Sign Up");
    },
    m(t, n) {
      ie(t, e, n);
    },
    d(t) {
      t && w(e);
    },
  };
}
function Ga(r) {
  let e,
    t,
    n,
    a,
    o,
    i,
    l,
    s,
    u = "days",
    c,
    f,
    v,
    _,
    d,
    E = ":",
    g,
    y,
    h,
    b,
    m,
    $,
    A = "hours",
    T,
    S,
    k,
    U,
    L,
    O = ":",
    R,
    z,
    G,
    Q,
    J,
    H,
    B = "mins",
    D,
    P,
    F,
    se,
    ee,
    pe = ":",
    C,
    X,
    ne,
    te,
    fe,
    ye,
    Se = "secs",
    M,
    K,
    Ee,
    Me,
    qe,
    Ye,
    Cn,
    nt,
    Xe;
  (v = new mt({
    props: { class: "hidden -translate-y-2 md:block", name: "timer-bar" },
  })),
    (k = new mt({
      props: { class: "hidden -translate-y-2 md:block", name: "timer-bar" },
    })),
    (F = new mt({
      props: { class: "hidden -translate-y-2 md:block", name: "timer-bar" },
    }));
  function br(re, Te) {
    return re[0] > 0 ? Ba : za;
  }
  let qt = br(r),
    Ue = qt(r);
  return (
    (Ye = new Ct({
      props: {
        linkTo: "https://arena.colosseum.org/signup",
        theme: "green",
        $$slots: { default: [Ha] },
        $$scope: { ctx: r },
      },
    })),
    (nt = new mt({
      props: { class: "mx-auto xl:hidden", name: "plus-detail-2" },
    })),
    {
      c() {
        (e = x("section")),
          (t = x("div")),
          (n = x("div")),
          (a = x("div")),
          (o = x("p")),
          (i = ve(r[4])),
          (l = x("br")),
          (s = x("span")),
          (s.textContent = u),
          (c = W()),
          (f = x("div")),
          oe(v.$$.fragment),
          (_ = W()),
          (d = x("span")),
          (d.textContent = E),
          (g = W()),
          (y = x("div")),
          (h = x("p")),
          (b = ve(r[3])),
          (m = x("br")),
          ($ = x("span")),
          ($.textContent = A),
          (T = W()),
          (S = x("div")),
          oe(k.$$.fragment),
          (U = W()),
          (L = x("span")),
          (L.textContent = O),
          (R = W()),
          (z = x("div")),
          (G = x("p")),
          (Q = ve(r[2])),
          (J = x("br")),
          (H = x("span")),
          (H.textContent = B),
          (D = W()),
          (P = x("div")),
          oe(F.$$.fragment),
          (se = W()),
          (ee = x("span")),
          (ee.textContent = pe),
          (C = W()),
          (X = x("div")),
          (ne = x("p")),
          (te = ve(r[1])),
          (fe = x("br")),
          (ye = x("span")),
          (ye.textContent = Se),
          (M = W()),
          (K = x("div")),
          (Ee = x("h2")),
          Ue.c(),
          (Me = W()),
          (qe = x("div")),
          oe(Ye.$$.fragment),
          (Cn = W()),
          oe(nt.$$.fragment),
          this.h();
      },
      l(re) {
        e = I(re, "SECTION", {});
        var Te = V(e);
        t = I(Te, "DIV", { class: !0 });
        var rt = V(t);
        n = I(rt, "DIV", { class: !0 });
        var be = V(n);
        a = I(be, "DIV", {});
        var $r = V(a);
        o = I($r, "P", { class: !0 });
        var Yt = V(o);
        (i = me(Yt, r[4])),
          (l = I(Yt, "BR", {})),
          (s = I(Yt, "SPAN", { class: !0, "data-svelte-h": !0 })),
          he(s) !== "svelte-i7tb7b" && (s.textContent = u),
          Yt.forEach(w),
          $r.forEach(w),
          (c = q(be)),
          (f = I(be, "DIV", {}));
        var Xt = V(f);
        le(v.$$.fragment, Xt),
          (_ = q(Xt)),
          (d = I(Xt, "SPAN", { class: !0, "data-svelte-h": !0 })),
          he(d) !== "svelte-10kbo0x" && (d.textContent = E),
          Xt.forEach(w),
          (g = q(be)),
          (y = I(be, "DIV", {}));
        var yr = V(y);
        h = I(yr, "P", { class: !0 });
        var jt = V(h);
        (b = me(jt, r[3])),
          (m = I(jt, "BR", {})),
          ($ = I(jt, "SPAN", { class: !0, "data-svelte-h": !0 })),
          he($) !== "svelte-1ej9lrl" && ($.textContent = A),
          jt.forEach(w),
          yr.forEach(w),
          (T = q(be)),
          (S = I(be, "DIV", {}));
        var Kt = V(S);
        le(k.$$.fragment, Kt),
          (U = q(Kt)),
          (L = I(Kt, "SPAN", { class: !0, "data-svelte-h": !0 })),
          he(L) !== "svelte-10kbo0x" && (L.textContent = O),
          Kt.forEach(w),
          (R = q(be)),
          (z = I(be, "DIV", {}));
        var Tr = V(z);
        G = I(Tr, "P", { class: !0 });
        var Zt = V(G);
        (Q = me(Zt, r[2])),
          (J = I(Zt, "BR", {})),
          (H = I(Zt, "SPAN", { class: !0, "data-svelte-h": !0 })),
          he(H) !== "svelte-1qq8dbp" && (H.textContent = B),
          Zt.forEach(w),
          Tr.forEach(w),
          (D = q(be)),
          (P = I(be, "DIV", { class: !0 }));
        var Jt = V(P);
        le(F.$$.fragment, Jt),
          (se = q(Jt)),
          (ee = I(Jt, "SPAN", { class: !0, "data-svelte-h": !0 })),
          he(ee) !== "svelte-10kbo0x" && (ee.textContent = pe),
          Jt.forEach(w),
          (C = q(be)),
          (X = I(be, "DIV", { class: !0 }));
        var Ar = V(X);
        ne = I(Ar, "P", { class: !0 });
        var Qt = V(ne);
        (te = me(Qt, r[1])),
          (fe = I(Qt, "BR", {})),
          (ye = I(Qt, "SPAN", { class: !0, "data-svelte-h": !0 })),
          he(ye) !== "svelte-14ulxwa" && (ye.textContent = Se),
          Qt.forEach(w),
          Ar.forEach(w),
          be.forEach(w),
          (M = q(rt)),
          (K = I(rt, "DIV", { class: !0 }));
        var ct = V(K);
        Ee = I(ct, "H2", { class: !0 });
        var xr = V(Ee);
        Ue.l(xr),
          xr.forEach(w),
          (Me = q(ct)),
          (qe = I(ct, "DIV", { class: !0 }));
        var Ir = V(qe);
        le(Ye.$$.fragment, Ir),
          Ir.forEach(w),
          (Cn = q(ct)),
          le(nt.$$.fragment, ct),
          ct.forEach(w),
          rt.forEach(w),
          Te.forEach(w),
          this.h();
      },
      h() {
        N(s, "class", "text-gray-2 text-base"),
          N(o, "class", "flex flex-col items-center"),
          N(d, "class", "block -translate-y-4 text-gray-400 md:hidden"),
          N($, "class", "text-gray-2 text-base"),
          N(h, "class", "flex flex-col items-center"),
          N(L, "class", "block -translate-y-4 text-gray-400 md:hidden"),
          N(H, "class", "text-gray-2 text-base"),
          N(G, "class", "flex flex-col items-center"),
          N(ee, "class", "block -translate-y-4 text-gray-400 md:hidden"),
          N(P, "class", "hidden md:block"),
          N(ye, "class", "text-gray-2 text-base"),
          N(ne, "class", "flex flex-col items-center"),
          N(X, "class", "hidden md:block"),
          N(
            n,
            "class",
            "font-nb-architekt mb-8 flex items-center justify-center gap-4 text-center text-5xl uppercase md:mb-12 md:gap-12"
          ),
          N(
            Ee,
            "class",
            "font-tasa-orbiter-display mx-auto mb-9 mt-10 max-w-xs text-3xl font-semibold md:my-12 md:max-w-xl md:text-[2.5rem] md:leading-[3rem]"
          ),
          N(qe, "class", "mb-[3.25rem]"),
          N(
            K,
            "class",
            "xl:before:content-plus-detail-2 xl:after:content-trophy relative xl:before:absolute xl:before:bottom-0 xl:before:left-20 xl:before:right-auto xl:after:absolute xl:after:-top-14 xl:after:right-44"
          ),
          N(
            t,
            "class",
            "bg-grid-2 text-gray-1 mb-[4.5rem] bg-[size:250%] bg-[position:50%_-10%] bg-no-repeat py-4 text-center md:bg-cover md:bg-[position:50%_80%] md:pt-8"
          );
      },
      m(re, Te) {
        ie(re, e, Te),
          p(e, t),
          p(t, n),
          p(n, a),
          p(a, o),
          p(o, i),
          p(o, l),
          p(o, s),
          p(n, c),
          p(n, f),
          ue(v, f, null),
          p(f, _),
          p(f, d),
          p(n, g),
          p(n, y),
          p(y, h),
          p(h, b),
          p(h, m),
          p(h, $),
          p(n, T),
          p(n, S),
          ue(k, S, null),
          p(S, U),
          p(S, L),
          p(n, R),
          p(n, z),
          p(z, G),
          p(G, Q),
          p(G, J),
          p(G, H),
          p(n, D),
          p(n, P),
          ue(F, P, null),
          p(P, se),
          p(P, ee),
          p(n, C),
          p(n, X),
          p(X, ne),
          p(ne, te),
          p(ne, fe),
          p(ne, ye),
          p(t, M),
          p(t, K),
          p(K, Ee),
          Ue.m(Ee, null),
          p(K, Me),
          p(K, qe),
          ue(Ye, qe, null),
          p(K, Cn),
          ue(nt, K, null),
          (Xe = !0);
      },
      p(re, [Te]) {
        (!Xe || Te & 16) && en(i, re[4]),
          (!Xe || Te & 8) && en(b, re[3]),
          (!Xe || Te & 4) && en(Q, re[2]),
          (!Xe || Te & 2) && en(te, re[1]),
          qt !== (qt = br(re)) &&
            (Ue.d(1), (Ue = qt(re)), Ue && (Ue.c(), Ue.m(Ee, null)));
        const rt = {};
        Te & 256 && (rt.$$scope = { dirty: Te, ctx: re }), Ye.$set(rt);
      },
      i(re) {
        Xe ||
          (j(v.$$.fragment, re),
          j(k.$$.fragment, re),
          j(F.$$.fragment, re),
          j(Ye.$$.fragment, re),
          j(nt.$$.fragment, re),
          (Xe = !0));
      },
      o(re) {
        Z(v.$$.fragment, re),
          Z(k.$$.fragment, re),
          Z(F.$$.fragment, re),
          Z(Ye.$$.fragment, re),
          Z(nt.$$.fragment, re),
          (Xe = !1);
      },
      d(re) {
        re && w(e), ce(v), ce(k), ce(F), Ue.d(), ce(Ye), ce(nt);
      },
    }
  );
}
const Fa = "2025-09-25 00:00:00";
function Wa(r, e, t) {
  let n, a, o, i;
  const l = new Date(Fa).getTime();
  let s = new Date().getTime(),
    u = l - s,
    c;
  return (
    Jn(() => {
      c = setInterval(() => {
        (s = new Date().getTime()),
          t(0, (u = l - s)),
          u < 0 && (clearInterval(c), t(0, (u = 0)));
      }, 1e3);
    }),
    Sa(() => {
      clearInterval(c);
    }),
    (r.$$.update = () => {
      r.$$.dirty & 1 &&
        t(
          4,
          (n = String(Math.floor(u / (1e3 * 60 * 60 * 24))).padStart(2, "0"))
        ),
        r.$$.dirty & 1 &&
          t(
            3,
            (a = String(
              Math.floor((u % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60))
            ).padStart(2, "0"))
          ),
        r.$$.dirty & 1 &&
          t(
            2,
            (o = String(
              Math.floor((u % (1e3 * 60 * 60)) / (1e3 * 60))
            ).padStart(2, "0"))
          ),
        r.$$.dirty & 1 &&
          t(
            1,
            (i = String(Math.floor((u % (1e3 * 60)) / 1e3)).padStart(2, "0"))
          );
    }),
    [u, i, o, a, n]
  );
}
class qa extends De {
  constructor(e) {
    super(), Ne(this, e, Wa, Ga, Ce, {});
  }
}
const Lr = (r) => r.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
function Ya(r) {
  let e,
    t,
    n,
    a,
    o,
    i,
    l,
    s,
    u =
      '<h2 class="font-tasa-orbiter-display mx-auto max-w-2xl text-[2.5rem] font-semibold leading-[3rem] md:text-[4rem] md:leading-[4.5rem]">Colosseum powers Solana hackathons</h2>',
    c,
    f,
    v,
    _,
    d,
    E = Lr(Xa) + "",
    g,
    y,
    h,
    b,
    m,
    $,
    A,
    T = Lr(ja) + "",
    S,
    k,
    U,
    L,
    O,
    R,
    z,
    G,
    Q,
    J,
    H,
    B;
  return {
    c() {
      (e = x("section")),
        (t = x("div")),
        (n = x("div")),
        (a = x("img")),
        (i = W()),
        (l = x("div")),
        (s = x("div")),
        (s.innerHTML = u),
        (c = W()),
        (f = x("div")),
        (v = x("ul")),
        (_ = x("li")),
        (d = x("span")),
        (g = ve(E)),
        (y = ve("+")),
        (h = x("br")),
        (b = ve("builders")),
        (m = W()),
        ($ = x("li")),
        (A = x("span")),
        (S = ve(T)),
        (k = ve("+")),
        (U = x("br")),
        (L = ve("products launched")),
        (O = W()),
        (R = x("li")),
        (z = x("span")),
        (G = ve("$")),
        (Q = ve(Cr)),
        (J = ve("M")),
        (H = x("br")),
        (B = ve("raised by winners")),
        this.h();
    },
    l(D) {
      e = I(D, "SECTION", {});
      var P = V(e);
      t = I(P, "DIV", { class: !0 });
      var F = V(t);
      n = I(F, "DIV", { class: !0 });
      var se = V(n);
      (a = I(se, "IMG", { class: !0, src: !0, alt: !0 })),
        (i = q(se)),
        (l = I(se, "DIV", { class: !0 }));
      var ee = V(l);
      (s = I(ee, "DIV", { class: !0, "data-svelte-h": !0 })),
        he(s) !== "svelte-a50itl" && (s.innerHTML = u),
        (c = q(ee)),
        (f = I(ee, "DIV", {}));
      var pe = V(f);
      v = I(pe, "UL", { class: !0 });
      var C = V(v);
      _ = I(C, "LI", { class: !0 });
      var X = V(_);
      d = I(X, "SPAN", { class: !0 });
      var ne = V(d);
      (g = me(ne, E)),
        (y = me(ne, "+")),
        (h = I(ne, "BR", {})),
        ne.forEach(w),
        (b = me(X, "builders")),
        X.forEach(w),
        (m = q(C)),
        ($ = I(C, "LI", { class: !0 }));
      var te = V($);
      A = I(te, "SPAN", { class: !0 });
      var fe = V(A);
      (S = me(fe, T)),
        (k = me(fe, "+")),
        (U = I(fe, "BR", {})),
        fe.forEach(w),
        (L = me(te, "products launched")),
        te.forEach(w),
        (O = q(C)),
        (R = I(C, "LI", { class: !0 }));
      var ye = V(R);
      z = I(ye, "SPAN", { class: !0 });
      var Se = V(z);
      (G = me(Se, "$")),
        (Q = me(Se, Cr)),
        (J = me(Se, "M")),
        (H = I(Se, "BR", {})),
        Se.forEach(w),
        (B = me(ye, "raised by winners")),
        ye.forEach(w),
        C.forEach(w),
        pe.forEach(w),
        ee.forEach(w),
        se.forEach(w),
        F.forEach(w),
        P.forEach(w),
        this.h();
    },
    h() {
      N(a, "class", "mx-auto pt-40 md:pt-0"),
        Et(a.src, (o = "/images/illustrations/illustration-2.png")) ||
          N(a, "src", o),
        N(a, "alt", ""),
        N(s, "class", "mb-16 md:mb-20"),
        N(d, "class", "text-5xl font-normal leading-[3.5rem]"),
        N(_, "class", "text-gray-2"),
        N(A, "class", "text-5xl font-normal leading-[3.5rem]"),
        N($, "class", "text-gray-2"),
        N(z, "class", "text-5xl font-normal leading-[3.5rem]"),
        N(R, "class", "text-gray-2"),
        N(
          v,
          "class",
          "font-nb-architekt mb-32 grid items-center gap-y-10 whitespace-nowrap uppercase md:mb-0 md:grid-cols-3 md:gap-y-0 lg:gap-x-52"
        ),
        N(
          l,
          "class",
          "absolute left-1/2 top-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 md:top-[40%]"
        ),
        N(n, "class", "relative"),
        N(t, "class", "text-gray-1 px-6 text-center md:mb-12");
    },
    m(D, P) {
      ie(D, e, P),
        p(e, t),
        p(t, n),
        p(n, a),
        p(n, i),
        p(n, l),
        p(l, s),
        p(l, c),
        p(l, f),
        p(f, v),
        p(v, _),
        p(_, d),
        p(d, g),
        p(d, y),
        p(d, h),
        p(_, b),
        p(v, m),
        p(v, $),
        p($, A),
        p(A, S),
        p(A, k),
        p(A, U),
        p($, L),
        p(v, O),
        p(v, R),
        p(R, z),
        p(z, G),
        p(z, Q),
        p(z, J),
        p(z, H),
        p(R, B);
    },
    p: Ke,
    i: Ke,
    o: Ke,
    d(D) {
      D && w(e);
    },
  };
}
let Xa = 8e4,
  ja = 6500,
  Cr = 700;
class Ka extends De {
  constructor(e) {
    super(), Ne(this, e, null, Ya, Ce, {});
  }
}
function Dr(r, e, t) {
  const n = r.slice();
  return (n[1] = e[t]), n;
}
function Nr(r) {
  let e, t, n, a;
  return (
    (t = new Na({ props: { item: r[1] } })),
    {
      c() {
        (e = x("li")), oe(t.$$.fragment), (n = W());
      },
      l(o) {
        e = I(o, "LI", {});
        var i = V(e);
        le(t.$$.fragment, i), (n = q(i)), i.forEach(w);
      },
      m(o, i) {
        ie(o, e, i), ue(t, e, null), p(e, n), (a = !0);
      },
      p: Ke,
      i(o) {
        a || (j(t.$$.fragment, o), (a = !0));
      },
      o(o) {
        Z(t.$$.fragment, o), (a = !1);
      },
      d(o) {
        o && w(e), ce(t);
      },
    }
  );
}
function Za(r) {
  let e,
    t,
    n,
    a,
    o,
    i,
    l,
    s = "Top ecosystem founders got their start in Solana hackathons",
    u,
    c,
    f,
    v,
    _,
    d;
  (a = new mt({ props: { class: "mb-8", name: "plus-detail-1" } })),
    (c = new mt({
      props: {
        class:
          "absolute -bottom-[40%] right-0 -z-10 w-32 sm:bottom-1/2 sm:block sm:translate-y-1/2 md:bottom-[11%] md:w-36 lg:bottom-1/2 lg:w-auto",
        name: "globe",
      },
    }));
  let E = $t(r[0]),
    g = [];
  for (let h = 0; h < E.length; h += 1) g[h] = Nr(Dr(r, E, h));
  const y = (h) =>
    Z(g[h], 1, 1, () => {
      g[h] = null;
    });
  return {
    c() {
      (e = x("section")),
        (t = x("div")),
        (n = x("div")),
        oe(a.$$.fragment),
        (o = W()),
        (i = x("div")),
        (l = x("h2")),
        (l.textContent = s),
        (u = W()),
        oe(c.$$.fragment),
        (f = W()),
        (v = x("div")),
        (_ = x("ul"));
      for (let h = 0; h < g.length; h += 1) g[h].c();
      this.h();
    },
    l(h) {
      e = I(h, "SECTION", {});
      var b = V(e);
      t = I(b, "DIV", { class: !0 });
      var m = V(t);
      n = I(m, "DIV", { class: !0 });
      var $ = V(n);
      le(a.$$.fragment, $), (o = q($)), (i = I($, "DIV", { class: !0 }));
      var A = V(i);
      (l = I(A, "H2", { class: !0, "data-svelte-h": !0 })),
        he(l) !== "svelte-1ijpuqv" && (l.textContent = s),
        (u = q(A)),
        le(c.$$.fragment, A),
        A.forEach(w),
        $.forEach(w),
        (f = q(m)),
        (v = I(m, "DIV", {}));
      var T = V(v);
      _ = I(T, "UL", { class: !0 });
      var S = V(_);
      for (let k = 0; k < g.length; k += 1) g[k].l(S);
      S.forEach(w), T.forEach(w), m.forEach(w), b.forEach(w), this.h();
    },
    h() {
      N(
        l,
        "class",
        "max-w-3xl text-[2.5rem] font-semibold leading-[3rem] md:text-5xl md:leading-[3.5rem]"
      ),
        N(i, "class", "relative isolate flex items-center justify-between"),
        N(n, "class", "mb-16 md:mb-16"),
        N(
          _,
          "class",
          "grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        ),
        N(t, "class", "text-gray-1 mx-auto max-w-6xl px-6 sm:mb-24 md:mb-48");
    },
    m(h, b) {
      ie(h, e, b),
        p(e, t),
        p(t, n),
        ue(a, n, null),
        p(n, o),
        p(n, i),
        p(i, l),
        p(i, u),
        ue(c, i, null),
        p(t, f),
        p(t, v),
        p(v, _);
      for (let m = 0; m < g.length; m += 1) g[m] && g[m].m(_, null);
      d = !0;
    },
    p(h, [b]) {
      if (b & 1) {
        E = $t(h[0]);
        let m;
        for (m = 0; m < E.length; m += 1) {
          const $ = Dr(h, E, m);
          g[m]
            ? (g[m].p($, b), j(g[m], 1))
            : ((g[m] = Nr($)), g[m].c(), j(g[m], 1), g[m].m(_, null));
        }
        for (tr(), m = E.length; m < g.length; m += 1) y(m);
        nr();
      }
    },
    i(h) {
      if (!d) {
        j(a.$$.fragment, h), j(c.$$.fragment, h);
        for (let b = 0; b < E.length; b += 1) j(g[b]);
        d = !0;
      }
    },
    o(h) {
      Z(a.$$.fragment, h), Z(c.$$.fragment, h), (g = g.filter(Boolean));
      for (let b = 0; b < g.length; b += 1) Z(g[b]);
      d = !1;
    },
    d(h) {
      h && w(e), ce(a), ce(c), Qn(g, h);
    },
  };
}
function Ja(r) {
  const { ecosystems: e } = Oa;
  return [e];
}
class Qa extends De {
  constructor(e) {
    super(), Ne(this, e, Ja, Za, Ce, {});
  }
}
function ei(r) {
  let e;
  return {
    c() {
      e = ve("Sign Up");
    },
    l(t) {
      e = me(t, "Sign Up");
    },
    m(t, n) {
      ie(t, e, n);
    },
    d(t) {
      t && w(e);
    },
  };
}
function ti(r) {
  let e;
  return {
    c() {
      e = ve("Sign In");
    },
    l(t) {
      e = me(t, "Sign In");
    },
    m(t, n) {
      ie(t, e, n);
    },
    d(t) {
      t && w(e);
    },
  };
}
function ni(r) {
  let e,
    t,
    n,
    a,
    o,
    i = "Join Colosseum's Community",
    l,
    s,
    u = `Colosseum runs two online hackathons and the Eternal challenge, which funnel into two
          accelerator cohorts every year. Sign up for a Colosseum account, create a builder profile,
          search to find cofounders, and share product ideas in the forum before competing.`,
    c,
    f,
    v,
    _,
    d,
    E,
    g,
    y,
    h,
    b =
      '<img class="mx-auto" src="/images/illustrations/illustration-3.png" alt=""/>',
    m;
  return (
    (_ = new Ct({
      props: {
        linkTo: "https://arena.colosseum.org/signup",
        theme: "green",
        $$slots: { default: [ei] },
        $$scope: { ctx: r },
      },
    })),
    (g = new Ct({
      props: {
        linkTo: "https://arena.colosseum.org/signin",
        $$slots: { default: [ti] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = x("section")),
          (t = x("div")),
          (n = x("div")),
          (a = x("div")),
          (o = x("h2")),
          (o.textContent = i),
          (l = W()),
          (s = x("p")),
          (s.textContent = u),
          (c = W()),
          (f = x("div")),
          (v = x("div")),
          oe(_.$$.fragment),
          (d = W()),
          (E = x("div")),
          oe(g.$$.fragment),
          (y = W()),
          (h = x("div")),
          (h.innerHTML = b),
          this.h();
      },
      l($) {
        e = I($, "SECTION", {});
        var A = V(e);
        t = I(A, "DIV", { class: !0 });
        var T = V(t);
        n = I(T, "DIV", { class: !0 });
        var S = V(n);
        a = I(S, "DIV", { class: !0 });
        var k = V(a);
        (o = I(k, "H2", { class: !0, "data-svelte-h": !0 })),
          he(o) !== "svelte-1hjrgto" && (o.textContent = i),
          (l = q(k)),
          (s = I(k, "P", { class: !0, "data-svelte-h": !0 })),
          he(s) !== "svelte-1358o5k" && (s.textContent = u),
          (c = q(k)),
          (f = I(k, "DIV", { class: !0 }));
        var U = V(f);
        v = I(U, "DIV", {});
        var L = V(v);
        le(_.$$.fragment, L), L.forEach(w), (d = q(U)), (E = I(U, "DIV", {}));
        var O = V(E);
        le(g.$$.fragment, O),
          O.forEach(w),
          U.forEach(w),
          k.forEach(w),
          S.forEach(w),
          (y = q(T)),
          (h = I(T, "DIV", { class: !0, "data-svelte-h": !0 })),
          he(h) !== "svelte-woww57" && (h.innerHTML = b),
          T.forEach(w),
          A.forEach(w),
          this.h();
      },
      h() {
        N(
          o,
          "class",
          "text-gray-1 text-5xl font-bold uppercase leading-[3.5rem] md:text-8xl md:leading-[6.5rem]"
        ),
          N(
            s,
            "class",
            "text-gray-2 max-w-xl text-base font-medium md:text-lg"
          ),
          N(f, "class", "flex items-center gap-4"),
          N(
            a,
            "class",
            "bg-grid-1 flex flex-col gap-10 bg-[size:40rem] bg-[position:50%_0rem] bg-no-repeat md:bg-none"
          ),
          N(
            n,
            "class",
            "bg-illustration-3 relative z-10 mt-12 bg-contain bg-no-repeat pt-[19.5rem] md:mt-0 md:bg-none md:bg-center md:pt-0"
          ),
          N(h, "class", "hidden md:block"),
          N(
            t,
            "class",
            "font-tasa-orbiter-display md:bg-grid-1 mx-auto mb-32 grid max-w-7xl items-center px-6 text-lg md:mb-64 md:grid-cols-2 md:bg-[size:66%] md:bg-[position:25%_150%] md:bg-no-repeat"
          );
      },
      m($, A) {
        ie($, e, A),
          p(e, t),
          p(t, n),
          p(n, a),
          p(a, o),
          p(a, l),
          p(a, s),
          p(a, c),
          p(a, f),
          p(f, v),
          ue(_, v, null),
          p(f, d),
          p(f, E),
          ue(g, E, null),
          p(t, y),
          p(t, h),
          (m = !0);
      },
      p($, [A]) {
        const T = {};
        A & 1 && (T.$$scope = { dirty: A, ctx: $ }), _.$set(T);
        const S = {};
        A & 1 && (S.$$scope = { dirty: A, ctx: $ }), g.$set(S);
      },
      i($) {
        m || (j(_.$$.fragment, $), j(g.$$.fragment, $), (m = !0));
      },
      o($) {
        Z(_.$$.fragment, $), Z(g.$$.fragment, $), (m = !1);
      },
      d($) {
        $ && w(e), ce(_), ce(g);
      },
    }
  );
}
class ri extends De {
  constructor(e) {
    super(), Ne(this, e, null, ni, Ce, {});
  }
}
function yt(...r) {
  return r.filter(Boolean).join(" ");
}
function ai(r, e) {
  if (r) {
    const t = Object.keys(r);
    for (let n = 0; n < t.length; n++) {
      const a = t[n];
      if (a !== "__proto__" && e(r[a], a) === !1) break;
    }
  }
  return r;
}
function Or(r) {
  var t;
  const e = (t = r.Components.Elements) == null ? void 0 : t.list.children;
  return (e && Array.prototype.slice.call(e)) || [];
}
function on(r) {
  return r !== null && typeof r == "object";
}
function kn(r, e) {
  if (Array.isArray(r) && Array.isArray(e))
    return r.length === e.length && !r.some((t, n) => !kn(t, e[n]));
  if (on(r) && on(e)) {
    const t = Object.keys(r),
      n = Object.keys(e);
    return (
      t.length === n.length &&
      !t.some(
        (a) => !Object.prototype.hasOwnProperty.call(e, a) || !kn(r[a], e[a])
      )
    );
  }
  return r === e;
}
function ii(r, e) {
  return r.length === e.length && !r.some((t, n) => t !== e[n]);
}
function Pn(r, e) {
  const t = r;
  return (
    ai(e, (n, a) => {
      Array.isArray(n)
        ? (t[a] = n.slice())
        : on(n)
        ? (t[a] = Pn(on(t[a]) ? t[a] : {}, n))
        : (t[a] = n);
    }),
    t
  );
}
function Rr(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(r, n.key, n);
  }
}
function si(r, e, t) {
  return (
    e && Rr(r.prototype, e),
    t && Rr(r, t),
    Object.defineProperty(r, "prototype", { writable: !1 }),
    r
  );
}
/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ var kr = "(prefers-reduced-motion: reduce)",
  gt = 1,
  oi = 2,
  Tt = 3,
  It = 4,
  Mt = 5,
  nn = 6,
  ln = 7,
  li = {
    CREATED: gt,
    MOUNTED: oi,
    IDLE: Tt,
    MOVING: It,
    SCROLLING: Mt,
    DRAGGING: nn,
    DESTROYED: ln,
  };
function We(r) {
  r.length = 0;
}
function Qe(r, e, t) {
  return Array.prototype.slice.call(r, e, t);
}
function ae(r) {
  return r.bind.apply(r, [null].concat(Qe(arguments, 1)));
}
var Qr = setTimeout,
  Vn = function () {};
function Pr(r) {
  return requestAnimationFrame(r);
}
function pn(r, e) {
  return typeof e === r;
}
function Dt(r) {
  return !ir(r) && pn("object", r);
}
var ar = Array.isArray,
  ea = ae(pn, "function"),
  Ze = ae(pn, "string"),
  Ut = ae(pn, "undefined");
function ir(r) {
  return r === null;
}
function ta(r) {
  try {
    return r instanceof (r.ownerDocument.defaultView || window).HTMLElement;
  } catch {
    return !1;
  }
}
function zt(r) {
  return ar(r) ? r : [r];
}
function Ie(r, e) {
  zt(r).forEach(e);
}
function sr(r, e) {
  return r.indexOf(e) > -1;
}
function rn(r, e) {
  return r.push.apply(r, zt(e)), r;
}
function Be(r, e, t) {
  r &&
    Ie(e, function (n) {
      n && r.classList[t ? "add" : "remove"](n);
    });
}
function Re(r, e) {
  Be(r, Ze(e) ? e.split(" ") : e, !0);
}
function Bt(r, e) {
  Ie(e, r.appendChild.bind(r));
}
function or(r, e) {
  Ie(r, function (t) {
    var n = (e || t).parentNode;
    n && n.insertBefore(t, e);
  });
}
function Nt(r, e) {
  return ta(r) && (r.msMatchesSelector || r.matches).call(r, e);
}
function na(r, e) {
  var t = r ? Qe(r.children) : [];
  return e
    ? t.filter(function (n) {
        return Nt(n, e);
      })
    : t;
}
function Ht(r, e) {
  return e ? na(r, e)[0] : r.firstElementChild;
}
var Ot = Object.keys;
function it(r, e, t) {
  return (
    r &&
      (t ? Ot(r).reverse() : Ot(r)).forEach(function (n) {
        n !== "__proto__" && e(r[n], n);
      }),
    r
  );
}
function Rt(r) {
  return (
    Qe(arguments, 1).forEach(function (e) {
      it(e, function (t, n) {
        r[n] = e[n];
      });
    }),
    r
  );
}
function je(r) {
  return (
    Qe(arguments, 1).forEach(function (e) {
      it(e, function (t, n) {
        ar(t)
          ? (r[n] = t.slice())
          : Dt(t)
          ? (r[n] = je({}, Dt(r[n]) ? r[n] : {}, t))
          : (r[n] = t);
      });
    }),
    r
  );
}
function Vr(r, e) {
  Ie(e || Ot(r), function (t) {
    delete r[t];
  });
}
function ke(r, e) {
  Ie(r, function (t) {
    Ie(e, function (n) {
      t && t.removeAttribute(n);
    });
  });
}
function Y(r, e, t) {
  Dt(e)
    ? it(e, function (n, a) {
        Y(r, a, n);
      })
    : Ie(r, function (n) {
        ir(t) || t === "" ? ke(n, e) : n.setAttribute(e, String(t));
      });
}
function ht(r, e, t) {
  var n = document.createElement(r);
  return e && (Ze(e) ? Re(n, e) : Y(n, e)), t && Bt(t, n), n;
}
function we(r, e, t) {
  if (Ut(t)) return getComputedStyle(r)[e];
  ir(t) || (r.style[e] = "" + t);
}
function kt(r, e) {
  we(r, "display", e);
}
function ra(r) {
  (r.setActive && r.setActive()) || r.focus({ preventScroll: !0 });
}
function Le(r, e) {
  return r.getAttribute(e);
}
function Mr(r, e) {
  return r && r.classList.contains(e);
}
function Ae(r) {
  return r.getBoundingClientRect();
}
function st(r) {
  Ie(r, function (e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  });
}
function aa(r) {
  return Ht(new DOMParser().parseFromString(r, "text/html").body);
}
function ze(r, e) {
  r.preventDefault(), e && (r.stopPropagation(), r.stopImmediatePropagation());
}
function ia(r, e) {
  return r && r.querySelector(e);
}
function lr(r, e) {
  return e ? Qe(r.querySelectorAll(e)) : [];
}
function He(r, e) {
  Be(r, e, !1);
}
function Mn(r) {
  return r.timeStamp;
}
function at(r) {
  return Ze(r) ? r : r ? r + "px" : "";
}
var Gt = "splide",
  ur = "data-" + Gt;
function wt(r, e) {
  if (!r) throw new Error("[" + Gt + "] " + (e || ""));
}
var Je = Math.min,
  un = Math.max,
  cn = Math.floor,
  Pt = Math.ceil,
  $e = Math.abs;
function sa(r, e, t) {
  return $e(r - e) < t;
}
function an(r, e, t, n) {
  var a = Je(e, t),
    o = un(e, t);
  return n ? a < r && r < o : a <= r && r <= o;
}
function dt(r, e, t) {
  var n = Je(e, t),
    a = un(e, t);
  return Je(un(n, r), a);
}
function Un(r) {
  return +(r > 0) - +(r < 0);
}
function zn(r, e) {
  return (
    Ie(e, function (t) {
      r = r.replace("%s", "" + t);
    }),
    r
  );
}
function cr(r) {
  return r < 10 ? "0" + r : "" + r;
}
var Ur = {};
function ui(r) {
  return "" + r + cr((Ur[r] = (Ur[r] || 0) + 1));
}
function oa() {
  var r = [];
  function e(i, l, s, u) {
    a(i, l, function (c, f, v) {
      var _ = "addEventListener" in c,
        d = _
          ? c.removeEventListener.bind(c, f, s, u)
          : c.removeListener.bind(c, s);
      _ ? c.addEventListener(f, s, u) : c.addListener(s),
        r.push([c, f, v, s, d]);
    });
  }
  function t(i, l, s) {
    a(i, l, function (u, c, f) {
      r = r.filter(function (v) {
        return v[0] === u && v[1] === c && v[2] === f && (!s || v[3] === s)
          ? (v[4](), !1)
          : !0;
      });
    });
  }
  function n(i, l, s) {
    var u,
      c = !0;
    return (
      typeof CustomEvent == "function"
        ? (u = new CustomEvent(l, { bubbles: c, detail: s }))
        : ((u = document.createEvent("CustomEvent")),
          u.initCustomEvent(l, c, !1, s)),
      i.dispatchEvent(u),
      u
    );
  }
  function a(i, l, s) {
    Ie(i, function (u) {
      u &&
        Ie(l, function (c) {
          c.split(" ").forEach(function (f) {
            var v = f.split(".");
            s(u, v[0], v[1]);
          });
        });
    });
  }
  function o() {
    r.forEach(function (i) {
      i[4]();
    }),
      We(r);
  }
  return { bind: e, unbind: t, dispatch: n, destroy: o };
}
var et = "mounted",
  zr = "ready",
  Pe = "move",
  ot = "moved",
  fn = "click",
  Bn = "active",
  Hn = "inactive",
  Gn = "visible",
  Fn = "hidden",
  ge = "refresh",
  _e = "updated",
  At = "resize",
  bn = "resized",
  la = "drag",
  ua = "dragging",
  ca = "dragged",
  $n = "scroll",
  ut = "scrolled",
  ci = "overflow",
  fr = "destroy",
  Wn = "arrows:mounted",
  qn = "arrows:updated",
  Yn = "pagination:mounted",
  Xn = "pagination:updated",
  dn = "navigation:mounted",
  dr = "autoplay:play",
  jn = "autoplay:playing",
  vr = "autoplay:pause",
  vn = "lazyload:loaded",
  fa = "sk",
  da = "sh",
  mn = "ei";
function de(r) {
  var e = r ? r.event.bus : document.createDocumentFragment(),
    t = oa();
  function n(o, i) {
    t.bind(e, zt(o).join(" "), function (l) {
      i.apply(i, ar(l.detail) ? l.detail : []);
    });
  }
  function a(o) {
    t.dispatch(e, o, Qe(arguments, 1));
  }
  return (
    r && r.event.on(fr, t.destroy),
    Rt(t, { bus: e, on: n, off: ae(t.unbind, e), emit: a })
  );
}
function yn(r, e, t, n) {
  var a = Date.now,
    o,
    i = 0,
    l,
    s = !0,
    u = 0;
  function c() {
    if (!s) {
      if (
        ((i = r ? Je((a() - o) / r, 1) : 1),
        t && t(i),
        i >= 1 && (e(), (o = a()), n && ++u >= n))
      )
        return v();
      l = Pr(c);
    }
  }
  function f(y) {
    y || d(), (o = a() - (y ? i * r : 0)), (s = !1), (l = Pr(c));
  }
  function v() {
    s = !0;
  }
  function _() {
    (o = a()), (i = 0), t && t(i);
  }
  function d() {
    l && cancelAnimationFrame(l), (i = 0), (l = 0), (s = !0);
  }
  function E(y) {
    r = y;
  }
  function g() {
    return s;
  }
  return { start: f, rewind: _, pause: v, cancel: d, set: E, isPaused: g };
}
function fi(r) {
  var e = r;
  function t(a) {
    e = a;
  }
  function n(a) {
    return sr(zt(a), e);
  }
  return { set: t, is: n };
}
function di(r, e) {
  var t = yn(e || 0, r, null, 1);
  return function () {
    t.isPaused() && t.start();
  };
}
function vi(r, e, t) {
  var n = r.state,
    a = t.breakpoints || {},
    o = t.reducedMotion || {},
    i = oa(),
    l = [];
  function s() {
    var d = t.mediaQuery === "min";
    Ot(a)
      .sort(function (E, g) {
        return d ? +E - +g : +g - +E;
      })
      .forEach(function (E) {
        c(a[E], "(" + (d ? "min" : "max") + "-width:" + E + "px)");
      }),
      c(o, kr),
      f();
  }
  function u(d) {
    d && i.destroy();
  }
  function c(d, E) {
    var g = matchMedia(E);
    i.bind(g, "change", f), l.push([d, g]);
  }
  function f() {
    var d = n.is(ln),
      E = t.direction,
      g = l.reduce(function (y, h) {
        return je(y, h[1].matches ? h[0] : {});
      }, {});
    Vr(t),
      _(g),
      t.destroy
        ? r.destroy(t.destroy === "completely")
        : d
        ? (u(!0), r.mount())
        : E !== t.direction && r.refresh();
  }
  function v(d) {
    matchMedia(kr).matches && (d ? je(t, o) : Vr(t, Ot(o)));
  }
  function _(d, E, g) {
    je(t, d),
      E && je(Object.getPrototypeOf(t), d),
      (g || !n.is(gt)) && r.emit(_e, t);
  }
  return { setup: s, destroy: u, reduce: v, set: _ };
}
var Tn = "Arrow",
  An = Tn + "Left",
  xn = Tn + "Right",
  va = Tn + "Up",
  ma = Tn + "Down",
  Br = "rtl",
  In = "ttb",
  Dn = {
    width: ["height"],
    left: ["top", "right"],
    right: ["bottom", "left"],
    x: ["y"],
    X: ["Y"],
    Y: ["X"],
    ArrowLeft: [va, xn],
    ArrowRight: [ma, An],
  };
function mi(r, e, t) {
  function n(o, i, l) {
    l = l || t.direction;
    var s = l === Br && !i ? 1 : l === In ? 0 : -1;
    return (
      (Dn[o] && Dn[o][s]) ||
      o.replace(/width|left|right/i, function (u, c) {
        var f = Dn[u.toLowerCase()][s] || u;
        return c > 0 ? f.charAt(0).toUpperCase() + f.slice(1) : f;
      })
    );
  }
  function a(o) {
    return o * (t.direction === Br ? 1 : -1);
  }
  return { resolve: n, orient: a };
}
var Ge = "role",
  _t = "tabindex",
  gi = "disabled",
  Oe = "aria-",
  Ft = Oe + "controls",
  ga = Oe + "current",
  Hr = Oe + "selected",
  xe = Oe + "label",
  mr = Oe + "labelledby",
  ha = Oe + "hidden",
  gr = Oe + "orientation",
  Vt = Oe + "roledescription",
  Gr = Oe + "live",
  Fr = Oe + "busy",
  Wr = Oe + "atomic",
  hr = [Ge, _t, gi, Ft, ga, xe, mr, ha, gr, Vt],
  Ve = Gt + "__",
  tt = "is-",
  Nn = Gt,
  qr = Ve + "track",
  hi = Ve + "list",
  Sn = Ve + "slide",
  _a = Sn + "--clone",
  _i = Sn + "__container",
  _r = Ve + "arrows",
  wn = Ve + "arrow",
  Ea = wn + "--prev",
  pa = wn + "--next",
  Ln = Ve + "pagination",
  ba = Ln + "__page",
  Ei = Ve + "progress",
  pi = Ei + "__bar",
  bi = Ve + "toggle",
  $i = Ve + "spinner",
  yi = Ve + "sr",
  Ti = tt + "initialized",
  lt = tt + "active",
  $a = tt + "prev",
  ya = tt + "next",
  Kn = tt + "visible",
  Zn = tt + "loading",
  Ta = tt + "focus-in",
  Aa = tt + "overflow",
  Ai = [lt, Kn, $a, ya, Zn, Ta, Aa],
  xi = {
    slide: Sn,
    clone: _a,
    arrows: _r,
    arrow: wn,
    prev: Ea,
    next: pa,
    pagination: Ln,
    page: ba,
    spinner: $i,
  };
function Ii(r, e) {
  if (ea(r.closest)) return r.closest(e);
  for (var t = r; t && t.nodeType === 1 && !Nt(t, e); ) t = t.parentElement;
  return t;
}
var Si = 5,
  Yr = 200,
  xa = "touchstart mousedown",
  On = "touchmove mousemove",
  Rn = "touchend touchcancel mouseup click";
function wi(r, e, t) {
  var n = de(r),
    a = n.on,
    o = n.bind,
    i = r.root,
    l = t.i18n,
    s = {},
    u = [],
    c = [],
    f = [],
    v,
    _,
    d;
  function E() {
    b(), m(), h();
  }
  function g() {
    a(ge, y),
      a(ge, E),
      a(_e, h),
      o(
        document,
        xa + " keydown",
        function (T) {
          d = T.type === "keydown";
        },
        { capture: !0 }
      ),
      o(i, "focusin", function () {
        Be(i, Ta, !!d);
      });
  }
  function y(T) {
    var S = hr.concat("style");
    We(u), He(i, c), He(v, f), ke([v, _], S), ke(i, T ? S : ["style", Vt]);
  }
  function h() {
    He(i, c),
      He(v, f),
      (c = A(Nn)),
      (f = A(qr)),
      Re(i, c),
      Re(v, f),
      Y(i, xe, t.label),
      Y(i, mr, t.labelledby);
  }
  function b() {
    (v = $("." + qr)),
      (_ = Ht(v, "." + hi)),
      wt(v && _, "A track/list element is missing."),
      rn(u, na(_, "." + Sn + ":not(." + _a + ")")),
      it(
        { arrows: _r, pagination: Ln, prev: Ea, next: pa, bar: pi, toggle: bi },
        function (T, S) {
          s[S] = $("." + T);
        }
      ),
      Rt(s, { root: i, track: v, list: _, slides: u });
  }
  function m() {
    var T = i.id || ui(Gt),
      S = t.role;
    (i.id = T),
      (v.id = v.id || T + "-track"),
      (_.id = _.id || T + "-list"),
      !Le(i, Ge) && i.tagName !== "SECTION" && S && Y(i, Ge, S),
      Y(i, Vt, l.carousel),
      Y(_, Ge, "presentation");
  }
  function $(T) {
    var S = ia(i, T);
    return S && Ii(S, "." + Nn) === i ? S : void 0;
  }
  function A(T) {
    return [
      T + "--" + t.type,
      T + "--" + t.direction,
      t.drag && T + "--draggable",
      t.isNavigation && T + "--nav",
      T === Nn && lt,
    ];
  }
  return Rt(s, { setup: E, mount: g, destroy: y });
}
var xt = "slide",
  St = "loop",
  Wt = "fade";
function Li(r, e, t, n) {
  var a = de(r),
    o = a.on,
    i = a.emit,
    l = a.bind,
    s = r.Components,
    u = r.root,
    c = r.options,
    f = c.isNavigation,
    v = c.updateOnMove,
    _ = c.i18n,
    d = c.pagination,
    E = c.slideFocus,
    g = s.Direction.resolve,
    y = Le(n, "style"),
    h = Le(n, xe),
    b = t > -1,
    m = Ht(n, "." + _i),
    $;
  function A() {
    b ||
      ((n.id = u.id + "-slide" + cr(e + 1)),
      Y(n, Ge, d ? "tabpanel" : "group"),
      Y(n, Vt, _.slide),
      Y(n, xe, h || zn(_.slideLabel, [e + 1, r.length]))),
      T();
  }
  function T() {
    l(n, "click", ae(i, fn, H)),
      l(n, "keydown", ae(i, fa, H)),
      o([ot, da, ut], L),
      o(dn, k),
      v && o(Pe, U);
  }
  function S() {
    ($ = !0),
      a.destroy(),
      He(n, Ai),
      ke(n, hr),
      Y(n, "style", y),
      Y(n, xe, h || "");
  }
  function k() {
    var B = r.splides
      .map(function (D) {
        var P = D.splide.Components.Slides.getAt(e);
        return P ? P.slide.id : "";
      })
      .join(" ");
    Y(n, xe, zn(_.slideX, (b ? t : e) + 1)),
      Y(n, Ft, B),
      Y(n, Ge, E ? "button" : ""),
      E && ke(n, Vt);
  }
  function U() {
    $ || L();
  }
  function L() {
    if (!$) {
      var B = r.index;
      O(), R(), Be(n, $a, e === B - 1), Be(n, ya, e === B + 1);
    }
  }
  function O() {
    var B = G();
    B !== Mr(n, lt) &&
      (Be(n, lt, B), Y(n, ga, (f && B) || ""), i(B ? Bn : Hn, H));
  }
  function R() {
    var B = Q(),
      D = !B && (!G() || b);
    if (
      (r.state.is([It, Mt]) || Y(n, ha, D || ""),
      Y(lr(n, c.focusableNodes || ""), _t, D ? -1 : ""),
      E && Y(n, _t, D ? -1 : 0),
      B !== Mr(n, Kn) && (Be(n, Kn, B), i(B ? Gn : Fn, H)),
      !B && document.activeElement === n)
    ) {
      var P = s.Slides.getAt(r.index);
      P && ra(P.slide);
    }
  }
  function z(B, D, P) {
    we((P && m) || n, B, D);
  }
  function G() {
    var B = r.index;
    return B === e || (c.cloneStatus && B === t);
  }
  function Q() {
    if (r.is(Wt)) return G();
    var B = Ae(s.Elements.track),
      D = Ae(n),
      P = g("left", !0),
      F = g("right", !0);
    return cn(B[P]) <= Pt(D[P]) && cn(D[F]) <= Pt(B[F]);
  }
  function J(B, D) {
    var P = $e(B - e);
    return !b && (c.rewind || r.is(St)) && (P = Je(P, r.length - P)), P <= D;
  }
  var H = {
    index: e,
    slideIndex: t,
    slide: n,
    container: m,
    isClone: b,
    mount: A,
    destroy: S,
    update: L,
    style: z,
    isWithin: J,
  };
  return H;
}
function Ci(r, e, t) {
  var n = de(r),
    a = n.on,
    o = n.emit,
    i = n.bind,
    l = e.Elements,
    s = l.slides,
    u = l.list,
    c = [];
  function f() {
    v(), a(ge, _), a(ge, v);
  }
  function v() {
    s.forEach(function (L, O) {
      E(L, O, -1);
    });
  }
  function _() {
    $(function (L) {
      L.destroy();
    }),
      We(c);
  }
  function d() {
    $(function (L) {
      L.update();
    });
  }
  function E(L, O, R) {
    var z = Li(r, O, R, L);
    z.mount(),
      c.push(z),
      c.sort(function (G, Q) {
        return G.index - Q.index;
      });
  }
  function g(L) {
    return L
      ? A(function (O) {
          return !O.isClone;
        })
      : c;
  }
  function y(L) {
    var O = e.Controller,
      R = O.toIndex(L),
      z = O.hasFocus() ? 1 : t.perPage;
    return A(function (G) {
      return an(G.index, R, R + z - 1);
    });
  }
  function h(L) {
    return A(L)[0];
  }
  function b(L, O) {
    Ie(L, function (R) {
      if ((Ze(R) && (R = aa(R)), ta(R))) {
        var z = s[O];
        z ? or(R, z) : Bt(u, R), Re(R, t.classes.slide), S(R, ae(o, At));
      }
    }),
      o(ge);
  }
  function m(L) {
    st(
      A(L).map(function (O) {
        return O.slide;
      })
    ),
      o(ge);
  }
  function $(L, O) {
    g(O).forEach(L);
  }
  function A(L) {
    return c.filter(
      ea(L)
        ? L
        : function (O) {
            return Ze(L) ? Nt(O.slide, L) : sr(zt(L), O.index);
          }
    );
  }
  function T(L, O, R) {
    $(function (z) {
      z.style(L, O, R);
    });
  }
  function S(L, O) {
    var R = lr(L, "img"),
      z = R.length;
    z
      ? R.forEach(function (G) {
          i(G, "load error", function () {
            --z || O();
          });
        })
      : O();
  }
  function k(L) {
    return L ? s.length : c.length;
  }
  function U() {
    return c.length > t.perPage;
  }
  return {
    mount: f,
    destroy: _,
    update: d,
    register: E,
    get: g,
    getIn: y,
    getAt: h,
    add: b,
    remove: m,
    forEach: $,
    filter: A,
    style: T,
    getLength: k,
    isEnough: U,
  };
}
function Di(r, e, t) {
  var n = de(r),
    a = n.on,
    o = n.bind,
    i = n.emit,
    l = e.Slides,
    s = e.Direction.resolve,
    u = e.Elements,
    c = u.root,
    f = u.track,
    v = u.list,
    _ = l.getAt,
    d = l.style,
    E,
    g,
    y;
  function h() {
    b(), o(window, "resize load", di(ae(i, At))), a([_e, ge], b), a(At, m);
  }
  function b() {
    (E = t.direction === In),
      we(c, "maxWidth", at(t.width)),
      we(f, s("paddingLeft"), $(!1)),
      we(f, s("paddingRight"), $(!0)),
      m(!0);
  }
  function m(H) {
    var B = Ae(c);
    (H || g.width !== B.width || g.height !== B.height) &&
      (we(f, "height", A()),
      d(s("marginRight"), at(t.gap)),
      d("width", S()),
      d("height", k(), !0),
      (g = B),
      i(bn),
      y !== (y = J()) && (Be(c, Aa, y), i(ci, y)));
  }
  function $(H) {
    var B = t.padding,
      D = s(H ? "right" : "left");
    return (B && at(B[D] || (Dt(B) ? 0 : B))) || "0px";
  }
  function A() {
    var H = "";
    return (
      E &&
        ((H = T()),
        wt(H, "height or heightRatio is missing."),
        (H = "calc(" + H + " - " + $(!1) + " - " + $(!0) + ")")),
      H
    );
  }
  function T() {
    return at(t.height || Ae(v).width * t.heightRatio);
  }
  function S() {
    return t.autoWidth ? null : at(t.fixedWidth) || (E ? "" : U());
  }
  function k() {
    return at(t.fixedHeight) || (E ? (t.autoHeight ? null : U()) : T());
  }
  function U() {
    var H = at(t.gap);
    return (
      "calc((100%" +
      (H && " + " + H) +
      ")/" +
      (t.perPage || 1) +
      (H && " - " + H) +
      ")"
    );
  }
  function L() {
    return Ae(v)[s("width")];
  }
  function O(H, B) {
    var D = _(H || 0);
    return D ? Ae(D.slide)[s("width")] + (B ? 0 : G()) : 0;
  }
  function R(H, B) {
    var D = _(H);
    if (D) {
      var P = Ae(D.slide)[s("right")],
        F = Ae(v)[s("left")];
      return $e(P - F) + (B ? 0 : G());
    }
    return 0;
  }
  function z(H) {
    return R(r.length - 1) - R(0) + O(0, H);
  }
  function G() {
    var H = _(0);
    return (H && parseFloat(we(H.slide, s("marginRight")))) || 0;
  }
  function Q(H) {
    return parseFloat(we(f, s("padding" + (H ? "Right" : "Left")))) || 0;
  }
  function J() {
    return r.is(Wt) || z(!0) > L();
  }
  return {
    mount: h,
    resize: m,
    listSize: L,
    slideSize: O,
    sliderSize: z,
    totalSize: R,
    getPadding: Q,
    isOverflow: J,
  };
}
var Ni = 2;
function Oi(r, e, t) {
  var n = de(r),
    a = n.on,
    o = e.Elements,
    i = e.Slides,
    l = e.Direction.resolve,
    s = [],
    u;
  function c() {
    a(ge, f), a([_e, At], _), (u = g()) && (d(u), e.Layout.resize(!0));
  }
  function f() {
    v(), c();
  }
  function v() {
    st(s), We(s), n.destroy();
  }
  function _() {
    var y = g();
    u !== y && (u < y || !y) && n.emit(ge);
  }
  function d(y) {
    var h = i.get().slice(),
      b = h.length;
    if (b) {
      for (; h.length < y; ) rn(h, h);
      rn(h.slice(-y), h.slice(0, y)).forEach(function (m, $) {
        var A = $ < y,
          T = E(m.slide, $);
        A ? or(T, h[0].slide) : Bt(o.list, T),
          rn(s, T),
          i.register(T, $ - y + (A ? 0 : b), m.index);
      });
    }
  }
  function E(y, h) {
    var b = y.cloneNode(!0);
    return Re(b, t.classes.clone), (b.id = r.root.id + "-clone" + cr(h + 1)), b;
  }
  function g() {
    var y = t.clones;
    if (!r.is(St)) y = 0;
    else if (Ut(y)) {
      var h = t[l("fixedWidth")] && e.Layout.slideSize(0),
        b = h && Pt(Ae(o.track)[l("width")] / h);
      y = b || (t[l("autoWidth")] && r.length) || t.perPage * Ni;
    }
    return y;
  }
  return { mount: c, destroy: v };
}
function Ri(r, e, t) {
  var n = de(r),
    a = n.on,
    o = n.emit,
    i = r.state.set,
    l = e.Layout,
    s = l.slideSize,
    u = l.getPadding,
    c = l.totalSize,
    f = l.listSize,
    v = l.sliderSize,
    _ = e.Direction,
    d = _.resolve,
    E = _.orient,
    g = e.Elements,
    y = g.list,
    h = g.track,
    b;
  function m() {
    (b = e.Transition), a([et, bn, _e, ge], $);
  }
  function $() {
    e.Controller.isBusy() || (e.Scroll.cancel(), T(r.index), e.Slides.update());
  }
  function A(D, P, F, se) {
    D !== P && H(D > F) && (L(), S(U(z(), D > F), !0)),
      i(It),
      o(Pe, P, F, D),
      b.start(P, function () {
        i(Tt), o(ot, P, F, D), se && se();
      });
  }
  function T(D) {
    S(R(D, !0));
  }
  function S(D, P) {
    if (!r.is(Wt)) {
      var F = P ? D : k(D);
      we(y, "transform", "translate" + d("X") + "(" + F + "px)"),
        D !== F && o(da);
    }
  }
  function k(D) {
    if (r.is(St)) {
      var P = O(D),
        F = P > e.Controller.getEnd(),
        se = P < 0;
      (se || F) && (D = U(D, F));
    }
    return D;
  }
  function U(D, P) {
    var F = D - J(P),
      se = v();
    return (D -= E(se * (Pt($e(F) / se) || 1)) * (P ? 1 : -1)), D;
  }
  function L() {
    S(z(), !0), b.cancel();
  }
  function O(D) {
    for (
      var P = e.Slides.get(), F = 0, se = 1 / 0, ee = 0;
      ee < P.length;
      ee++
    ) {
      var pe = P[ee].index,
        C = $e(R(pe, !0) - D);
      if (C <= se) (se = C), (F = pe);
      else break;
    }
    return F;
  }
  function R(D, P) {
    var F = E(c(D - 1) - Q(D));
    return P ? G(F) : F;
  }
  function z() {
    var D = d("left");
    return Ae(y)[D] - Ae(h)[D] + E(u(!1));
  }
  function G(D) {
    return t.trimSpace && r.is(xt) && (D = dt(D, 0, E(v(!0) - f()))), D;
  }
  function Q(D) {
    var P = t.focus;
    return P === "center" ? (f() - s(D, !0)) / 2 : +P * s(D) || 0;
  }
  function J(D) {
    return R(D ? e.Controller.getEnd() : 0, !!t.trimSpace);
  }
  function H(D) {
    var P = E(U(z(), D));
    return D ? P >= 0 : P <= y[d("scrollWidth")] - Ae(h)[d("width")];
  }
  function B(D, P) {
    P = Ut(P) ? z() : P;
    var F = D !== !0 && E(P) < E(J(!1)),
      se = D !== !1 && E(P) > E(J(!0));
    return F || se;
  }
  return {
    mount: m,
    move: A,
    jump: T,
    translate: S,
    shift: U,
    cancel: L,
    toIndex: O,
    toPosition: R,
    getPosition: z,
    getLimit: J,
    exceededLimit: B,
    reposition: $,
  };
}
function ki(r, e, t) {
  var n = de(r),
    a = n.on,
    o = n.emit,
    i = e.Move,
    l = i.getPosition,
    s = i.getLimit,
    u = i.toPosition,
    c = e.Slides,
    f = c.isEnough,
    v = c.getLength,
    _ = t.omitEnd,
    d = r.is(St),
    E = r.is(xt),
    g = ae(z, !1),
    y = ae(z, !0),
    h = t.start || 0,
    b,
    m = h,
    $,
    A,
    T;
  function S() {
    k(), a([_e, ge, mn], k), a(bn, U);
  }
  function k() {
    ($ = v(!0)), (A = t.perMove), (T = t.perPage), (b = H());
    var C = dt(h, 0, _ ? b : $ - 1);
    C !== h && ((h = C), i.reposition());
  }
  function U() {
    b !== H() && o(mn);
  }
  function L(C, X, ne) {
    if (!pe()) {
      var te = R(C),
        fe = J(te);
      fe > -1 && (X || fe !== h) && (F(fe), i.move(te, fe, m, ne));
    }
  }
  function O(C, X, ne, te) {
    e.Scroll.scroll(C, X, ne, function () {
      var fe = J(i.toIndex(l()));
      F(_ ? Je(fe, b) : fe), te && te();
    });
  }
  function R(C) {
    var X = h;
    if (Ze(C)) {
      var ne = C.match(/([+\-<>])(\d+)?/) || [],
        te = ne[1],
        fe = ne[2];
      te === "+" || te === "-"
        ? (X = G(h + +("" + te + (+fe || 1)), h))
        : te === ">"
        ? (X = fe ? B(+fe) : g(!0))
        : te === "<" && (X = y(!0));
    } else X = d ? C : dt(C, 0, b);
    return X;
  }
  function z(C, X) {
    var ne = A || (ee() ? 1 : T),
      te = G(h + ne * (C ? -1 : 1), h, !(A || ee()));
    return te === -1 && E && !sa(l(), s(!C), 1) ? (C ? 0 : b) : X ? te : J(te);
  }
  function G(C, X, ne) {
    if (f() || ee()) {
      var te = Q(C);
      te !== C && ((X = C), (C = te), (ne = !1)),
        C < 0 || C > b
          ? !A && (an(0, C, X, !0) || an(b, X, C, !0))
            ? (C = B(D(C)))
            : d
            ? (C = ne ? (C < 0 ? -($ % T || T) : $) : C)
            : t.rewind
            ? (C = C < 0 ? b : 0)
            : (C = -1)
          : ne && C !== X && (C = B(D(X) + (C < X ? -1 : 1)));
    } else C = -1;
    return C;
  }
  function Q(C) {
    if (E && t.trimSpace === "move" && C !== h)
      for (var X = l(); X === u(C, !0) && an(C, 0, r.length - 1, !t.rewind); )
        C < h ? --C : ++C;
    return C;
  }
  function J(C) {
    return d ? (C + $) % $ || 0 : C;
  }
  function H() {
    for (var C = $ - (ee() || (d && A) ? 1 : T); _ && C-- > 0; )
      if (u($ - 1, !0) !== u(C, !0)) {
        C++;
        break;
      }
    return dt(C, 0, $ - 1);
  }
  function B(C) {
    return dt(ee() ? C : T * C, 0, b);
  }
  function D(C) {
    return ee() ? Je(C, b) : cn((C >= b ? $ - 1 : C) / T);
  }
  function P(C) {
    var X = i.toIndex(C);
    return E ? dt(X, 0, b) : X;
  }
  function F(C) {
    C !== h && ((m = h), (h = C));
  }
  function se(C) {
    return C ? m : h;
  }
  function ee() {
    return !Ut(t.focus) || t.isNavigation;
  }
  function pe() {
    return r.state.is([It, Mt]) && !!t.waitForTransition;
  }
  return {
    mount: S,
    go: L,
    scroll: O,
    getNext: g,
    getPrev: y,
    getAdjacent: z,
    getEnd: H,
    setIndex: F,
    getIndex: se,
    toIndex: B,
    toPage: D,
    toDest: P,
    hasFocus: ee,
    isBusy: pe,
  };
}
var Pi = "http://www.w3.org/2000/svg",
  Vi =
    "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
  tn = 40;
function Mi(r, e, t) {
  var n = de(r),
    a = n.on,
    o = n.bind,
    i = n.emit,
    l = t.classes,
    s = t.i18n,
    u = e.Elements,
    c = e.Controller,
    f = u.arrows,
    v = u.track,
    _ = f,
    d = u.prev,
    E = u.next,
    g,
    y,
    h = {};
  function b() {
    $(), a(_e, m);
  }
  function m() {
    A(), b();
  }
  function $() {
    var O = t.arrows;
    O && !(d && E) && k(),
      d &&
        E &&
        (Rt(h, { prev: d, next: E }),
        kt(_, O ? "" : "none"),
        Re(_, (y = _r + "--" + t.direction)),
        O && (T(), L(), Y([d, E], Ft, v.id), i(Wn, d, E)));
  }
  function A() {
    n.destroy(),
      He(_, y),
      g ? (st(f ? [d, E] : _), (d = E = null)) : ke([d, E], hr);
  }
  function T() {
    a([et, ot, ge, ut, mn], L),
      o(E, "click", ae(S, ">")),
      o(d, "click", ae(S, "<"));
  }
  function S(O) {
    c.go(O, !0);
  }
  function k() {
    (_ = f || ht("div", l.arrows)),
      (d = U(!0)),
      (E = U(!1)),
      (g = !0),
      Bt(_, [d, E]),
      !f && or(_, v);
  }
  function U(O) {
    var R =
      '<button class="' +
      l.arrow +
      " " +
      (O ? l.prev : l.next) +
      '" type="button"><svg xmlns="' +
      Pi +
      '" viewBox="0 0 ' +
      tn +
      " " +
      tn +
      '" width="' +
      tn +
      '" height="' +
      tn +
      '" focusable="false"><path d="' +
      (t.arrowPath || Vi) +
      '" />';
    return aa(R);
  }
  function L() {
    if (d && E) {
      var O = r.index,
        R = c.getPrev(),
        z = c.getNext(),
        G = R > -1 && O < R ? s.last : s.prev,
        Q = z > -1 && O > z ? s.first : s.next;
      (d.disabled = R < 0),
        (E.disabled = z < 0),
        Y(d, xe, G),
        Y(E, xe, Q),
        i(qn, d, E, R, z);
    }
  }
  return { arrows: h, mount: b, destroy: A, update: L };
}
var Ui = ur + "-interval";
function zi(r, e, t) {
  var n = de(r),
    a = n.on,
    o = n.bind,
    i = n.emit,
    l = yn(t.interval, r.go.bind(r, ">"), T),
    s = l.isPaused,
    u = e.Elements,
    c = e.Elements,
    f = c.root,
    v = c.toggle,
    _ = t.autoplay,
    d,
    E,
    g = _ === "pause";
  function y() {
    _ && (h(), v && Y(v, Ft, u.track.id), g || b(), A());
  }
  function h() {
    t.pauseOnHover &&
      o(f, "mouseenter mouseleave", function (k) {
        (d = k.type === "mouseenter"), $();
      }),
      t.pauseOnFocus &&
        o(f, "focusin focusout", function (k) {
          (E = k.type === "focusin"), $();
        }),
      v &&
        o(v, "click", function () {
          g ? b() : m(!0);
        }),
      a([Pe, $n, ge], l.rewind),
      a(Pe, S);
  }
  function b() {
    s() &&
      e.Slides.isEnough() &&
      (l.start(!t.resetProgress), (E = d = g = !1), A(), i(dr));
  }
  function m(k) {
    k === void 0 && (k = !0), (g = !!k), A(), s() || (l.pause(), i(vr));
  }
  function $() {
    g || (d || E ? m(!1) : b());
  }
  function A() {
    v && (Be(v, lt, !g), Y(v, xe, t.i18n[g ? "play" : "pause"]));
  }
  function T(k) {
    var U = u.bar;
    U && we(U, "width", k * 100 + "%"), i(jn, k);
  }
  function S(k) {
    var U = e.Slides.getAt(k);
    l.set((U && +Le(U.slide, Ui)) || t.interval);
  }
  return { mount: y, destroy: l.cancel, play: b, pause: m, isPaused: s };
}
function Bi(r, e, t) {
  var n = de(r),
    a = n.on;
  function o() {
    t.cover && (a(vn, ae(l, !0)), a([et, _e, ge], ae(i, !0)));
  }
  function i(s) {
    e.Slides.forEach(function (u) {
      var c = Ht(u.container || u.slide, "img");
      c && c.src && l(s, c, u);
    });
  }
  function l(s, u, c) {
    c.style(
      "background",
      s ? 'center/cover no-repeat url("' + u.src + '")' : "",
      !0
    ),
      kt(u, s ? "none" : "");
  }
  return { mount: o, destroy: ae(i, !1) };
}
var Hi = 10,
  Gi = 600,
  Fi = 0.6,
  Wi = 1.5,
  qi = 800;
function Yi(r, e, t) {
  var n = de(r),
    a = n.on,
    o = n.emit,
    i = r.state.set,
    l = e.Move,
    s = l.getPosition,
    u = l.getLimit,
    c = l.exceededLimit,
    f = l.translate,
    v = r.is(xt),
    _,
    d,
    E = 1;
  function g() {
    a(Pe, m), a([_e, ge], $);
  }
  function y(T, S, k, U, L) {
    var O = s();
    if ((m(), k && (!v || !c()))) {
      var R = e.Layout.sliderSize(),
        z = Un(T) * R * cn($e(T) / R) || 0;
      T = l.toPosition(e.Controller.toDest(T % R)) + z;
    }
    var G = sa(O, T, 1);
    (E = 1),
      (S = G ? 0 : S || un($e(T - O) / Wi, qi)),
      (d = U),
      (_ = yn(S, h, ae(b, O, T, L), 1)),
      i(Mt),
      o($n),
      _.start();
  }
  function h() {
    i(Tt), d && d(), o(ut);
  }
  function b(T, S, k, U) {
    var L = s(),
      O = T + (S - T) * A(U),
      R = (O - L) * E;
    f(L + R),
      v && !k && c() && ((E *= Fi), $e(R) < Hi && y(u(c(!0)), Gi, !1, d, !0));
  }
  function m() {
    _ && _.cancel();
  }
  function $() {
    _ && !_.isPaused() && (m(), h());
  }
  function A(T) {
    var S = t.easingFunc;
    return S ? S(T) : 1 - Math.pow(1 - T, 4);
  }
  return { mount: g, destroy: m, scroll: y, cancel: $ };
}
var vt = { passive: !1, capture: !0 };
function Xi(r, e, t) {
  var n = de(r),
    a = n.on,
    o = n.emit,
    i = n.bind,
    l = n.unbind,
    s = r.state,
    u = e.Move,
    c = e.Scroll,
    f = e.Controller,
    v = e.Elements.track,
    _ = e.Media.reduce,
    d = e.Direction,
    E = d.resolve,
    g = d.orient,
    y = u.getPosition,
    h = u.exceededLimit,
    b,
    m,
    $,
    A,
    T,
    S = !1,
    k,
    U,
    L;
  function O() {
    i(v, On, Vn, vt),
      i(v, Rn, Vn, vt),
      i(v, xa, z, vt),
      i(v, "click", J, { capture: !0 }),
      i(v, "dragstart", ze),
      a([et, _e], R);
  }
  function R() {
    var M = t.drag;
    Se(!M), (A = M === "free");
  }
  function z(M) {
    if (((k = !1), !U)) {
      var K = fe(M);
      te(M.target) &&
        (K || !M.button) &&
        (f.isBusy()
          ? ze(M, !0)
          : ((L = K ? v : window),
            (T = s.is([It, Mt])),
            ($ = null),
            i(L, On, G, vt),
            i(L, Rn, Q, vt),
            u.cancel(),
            c.cancel(),
            H(M)));
    }
  }
  function G(M) {
    if ((s.is(nn) || (s.set(nn), o(la)), M.cancelable))
      if (T) {
        u.translate(b + ne(ee(M)));
        var K = pe(M) > Yr,
          Ee = S !== (S = h());
        (K || Ee) && H(M), (k = !0), o(ua), ze(M);
      } else P(M) && ((T = D(M)), ze(M));
  }
  function Q(M) {
    s.is(nn) && (s.set(Tt), o(ca)),
      T && (B(M), ze(M)),
      l(L, On, G),
      l(L, Rn, Q),
      (T = !1);
  }
  function J(M) {
    !U && k && ze(M, !0);
  }
  function H(M) {
    ($ = m), (m = M), (b = y());
  }
  function B(M) {
    var K = F(M),
      Ee = se(K),
      Me = t.rewind && t.rewindByDrag;
    _(!1),
      A
        ? f.scroll(Ee, 0, t.snap)
        : r.is(Wt)
        ? f.go(g(Un(K)) < 0 ? (Me ? "<" : "-") : Me ? ">" : "+")
        : r.is(xt) && S && Me
        ? f.go(h(!0) ? ">" : "<")
        : f.go(f.toDest(Ee), !0),
      _(!0);
  }
  function D(M) {
    var K = t.dragMinThreshold,
      Ee = Dt(K),
      Me = (Ee && K.mouse) || 0,
      qe = (Ee ? K.touch : +K) || 10;
    return $e(ee(M)) > (fe(M) ? qe : Me);
  }
  function P(M) {
    return $e(ee(M)) > $e(ee(M, !0));
  }
  function F(M) {
    if (r.is(St) || !S) {
      var K = pe(M);
      if (K && K < Yr) return ee(M) / K;
    }
    return 0;
  }
  function se(M) {
    return (
      y() +
      Un(M) *
        Je(
          $e(M) * (t.flickPower || 600),
          A ? 1 / 0 : e.Layout.listSize() * (t.flickMaxPages || 1)
        )
    );
  }
  function ee(M, K) {
    return X(M, K) - X(C(M), K);
  }
  function pe(M) {
    return Mn(M) - Mn(C(M));
  }
  function C(M) {
    return (m === M && $) || m;
  }
  function X(M, K) {
    return (fe(M) ? M.changedTouches[0] : M)["page" + E(K ? "Y" : "X")];
  }
  function ne(M) {
    return M / (S && r.is(xt) ? Si : 1);
  }
  function te(M) {
    var K = t.noDrag;
    return !Nt(M, "." + ba + ", ." + wn) && (!K || !Nt(M, K));
  }
  function fe(M) {
    return typeof TouchEvent < "u" && M instanceof TouchEvent;
  }
  function ye() {
    return T;
  }
  function Se(M) {
    U = M;
  }
  return { mount: O, disable: Se, isDragging: ye };
}
var ji = { Spacebar: " ", Right: xn, Left: An, Up: va, Down: ma };
function Er(r) {
  return (r = Ze(r) ? r : r.key), ji[r] || r;
}
var Xr = "keydown";
function Ki(r, e, t) {
  var n = de(r),
    a = n.on,
    o = n.bind,
    i = n.unbind,
    l = r.root,
    s = e.Direction.resolve,
    u,
    c;
  function f() {
    v(), a(_e, _), a(_e, v), a(Pe, E);
  }
  function v() {
    var y = t.keyboard;
    y && ((u = y === "global" ? window : l), o(u, Xr, g));
  }
  function _() {
    i(u, Xr);
  }
  function d(y) {
    c = y;
  }
  function E() {
    var y = c;
    (c = !0),
      Qr(function () {
        c = y;
      });
  }
  function g(y) {
    if (!c) {
      var h = Er(y);
      h === s(An) ? r.go("<") : h === s(xn) && r.go(">");
    }
  }
  return { mount: f, destroy: _, disable: d };
}
var Lt = ur + "-lazy",
  sn = Lt + "-srcset",
  Zi = "[" + Lt + "], [" + sn + "]";
function Ji(r, e, t) {
  var n = de(r),
    a = n.on,
    o = n.off,
    i = n.bind,
    l = n.emit,
    s = t.lazyLoad === "sequential",
    u = [ot, ut],
    c = [];
  function f() {
    t.lazyLoad && (v(), a(ge, v));
  }
  function v() {
    We(c), _(), s ? y() : (o(u), a(u, d), d());
  }
  function _() {
    e.Slides.forEach(function (h) {
      lr(h.slide, Zi).forEach(function (b) {
        var m = Le(b, Lt),
          $ = Le(b, sn);
        if (m !== b.src || $ !== b.srcset) {
          var A = t.classes.spinner,
            T = b.parentElement,
            S = Ht(T, "." + A) || ht("span", A, T);
          c.push([b, h, S]), b.src || kt(b, "none");
        }
      });
    });
  }
  function d() {
    (c = c.filter(function (h) {
      var b = t.perPage * ((t.preloadPages || 1) + 1) - 1;
      return h[1].isWithin(r.index, b) ? E(h) : !0;
    })),
      c.length || o(u);
  }
  function E(h) {
    var b = h[0];
    Re(h[1].slide, Zn),
      i(b, "load error", ae(g, h)),
      Y(b, "src", Le(b, Lt)),
      Y(b, "srcset", Le(b, sn)),
      ke(b, Lt),
      ke(b, sn);
  }
  function g(h, b) {
    var m = h[0],
      $ = h[1];
    He($.slide, Zn),
      b.type !== "error" && (st(h[2]), kt(m, ""), l(vn, m, $), l(At)),
      s && y();
  }
  function y() {
    c.length && E(c.shift());
  }
  return { mount: f, destroy: ae(We, c), check: d };
}
function Qi(r, e, t) {
  var n = de(r),
    a = n.on,
    o = n.emit,
    i = n.bind,
    l = e.Slides,
    s = e.Elements,
    u = e.Controller,
    c = u.hasFocus,
    f = u.getIndex,
    v = u.go,
    _ = e.Direction.resolve,
    d = s.pagination,
    E = [],
    g,
    y;
  function h() {
    b(), a([_e, ge, mn], h);
    var U = t.pagination;
    d && kt(d, U ? "" : "none"),
      U &&
        (a([Pe, $n, ut], k),
        m(),
        k(),
        o(Yn, { list: g, items: E }, S(r.index)));
  }
  function b() {
    g && (st(d ? Qe(g.children) : g), He(g, y), We(E), (g = null)), n.destroy();
  }
  function m() {
    var U = r.length,
      L = t.classes,
      O = t.i18n,
      R = t.perPage,
      z = c() ? u.getEnd() + 1 : Pt(U / R);
    (g = d || ht("ul", L.pagination, s.track.parentElement)),
      Re(g, (y = Ln + "--" + T())),
      Y(g, Ge, "tablist"),
      Y(g, xe, O.select),
      Y(g, gr, T() === In ? "vertical" : "");
    for (var G = 0; G < z; G++) {
      var Q = ht("li", null, g),
        J = ht("button", { class: L.page, type: "button" }, Q),
        H = l.getIn(G).map(function (D) {
          return D.slide.id;
        }),
        B = !c() && R > 1 ? O.pageX : O.slideX;
      i(J, "click", ae($, G)),
        t.paginationKeyboard && i(J, "keydown", ae(A, G)),
        Y(Q, Ge, "presentation"),
        Y(J, Ge, "tab"),
        Y(J, Ft, H.join(" ")),
        Y(J, xe, zn(B, G + 1)),
        Y(J, _t, -1),
        E.push({ li: Q, button: J, page: G });
    }
  }
  function $(U) {
    v(">" + U, !0);
  }
  function A(U, L) {
    var O = E.length,
      R = Er(L),
      z = T(),
      G = -1;
    R === _(xn, !1, z)
      ? (G = ++U % O)
      : R === _(An, !1, z)
      ? (G = (--U + O) % O)
      : R === "Home"
      ? (G = 0)
      : R === "End" && (G = O - 1);
    var Q = E[G];
    Q && (ra(Q.button), v(">" + G), ze(L, !0));
  }
  function T() {
    return t.paginationDirection || t.direction;
  }
  function S(U) {
    return E[u.toPage(U)];
  }
  function k() {
    var U = S(f(!0)),
      L = S(f());
    if (U) {
      var O = U.button;
      He(O, lt), ke(O, Hr), Y(O, _t, -1);
    }
    if (L) {
      var R = L.button;
      Re(R, lt), Y(R, Hr, !0), Y(R, _t, "");
    }
    o(Xn, { list: g, items: E }, U, L);
  }
  return { items: E, mount: h, destroy: b, getAt: S, update: k };
}
var es = [" ", "Enter"];
function ts(r, e, t) {
  var n = t.isNavigation,
    a = t.slideFocus,
    o = [];
  function i() {
    r.splides.forEach(function (d) {
      d.isParent || (u(r, d.splide), u(d.splide, r));
    }),
      n && c();
  }
  function l() {
    o.forEach(function (d) {
      d.destroy();
    }),
      We(o);
  }
  function s() {
    l(), i();
  }
  function u(d, E) {
    var g = de(d);
    g.on(Pe, function (y, h, b) {
      E.go(E.is(St) ? b : y);
    }),
      o.push(g);
  }
  function c() {
    var d = de(r),
      E = d.on;
    E(fn, v), E(fa, _), E([et, _e], f), o.push(d), d.emit(dn, r.splides);
  }
  function f() {
    Y(e.Elements.list, gr, t.direction === In ? "vertical" : "");
  }
  function v(d) {
    r.go(d.index);
  }
  function _(d, E) {
    sr(es, Er(E)) && (v(d), ze(E));
  }
  return {
    setup: ae(e.Media.set, { slideFocus: Ut(a) ? n : a }, !0),
    mount: i,
    destroy: l,
    remount: s,
  };
}
function ns(r, e, t) {
  var n = de(r),
    a = n.bind,
    o = 0;
  function i() {
    t.wheel && a(e.Elements.track, "wheel", l, vt);
  }
  function l(u) {
    if (u.cancelable) {
      var c = u.deltaY,
        f = c < 0,
        v = Mn(u),
        _ = t.wheelMinThreshold || 0,
        d = t.wheelSleep || 0;
      $e(c) > _ && v - o > d && (r.go(f ? "<" : ">"), (o = v)), s(f) && ze(u);
    }
  }
  function s(u) {
    return (
      !t.releaseWheel || r.state.is(It) || e.Controller.getAdjacent(u) !== -1
    );
  }
  return { mount: i };
}
var rs = 90;
function as(r, e, t) {
  var n = de(r),
    a = n.on,
    o = e.Elements.track,
    i = t.live && !t.isNavigation,
    l = ht("span", yi),
    s = yn(rs, ae(c, !1));
  function u() {
    i &&
      (v(!e.Autoplay.isPaused()),
      Y(o, Wr, !0),
      (l.textContent = "…"),
      a(dr, ae(v, !0)),
      a(vr, ae(v, !1)),
      a([ot, ut], ae(c, !0)));
  }
  function c(_) {
    Y(o, Fr, _), _ ? (Bt(o, l), s.start()) : (st(l), s.cancel());
  }
  function f() {
    ke(o, [Gr, Wr, Fr]), st(l);
  }
  function v(_) {
    i && Y(o, Gr, _ ? "off" : "polite");
  }
  return { mount: u, disable: v, destroy: f };
}
var is = Object.freeze({
    __proto__: null,
    Media: vi,
    Direction: mi,
    Elements: wi,
    Slides: Ci,
    Layout: Di,
    Clones: Oi,
    Move: Ri,
    Controller: ki,
    Arrows: Mi,
    Autoplay: zi,
    Cover: Bi,
    Scroll: Yi,
    Drag: Xi,
    Keyboard: Ki,
    LazyLoad: Ji,
    Pagination: Qi,
    Sync: ts,
    Wheel: ns,
    Live: as,
  }),
  ss = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s",
  },
  os = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: !0,
    arrows: !0,
    pagination: !0,
    paginationKeyboard: !0,
    interval: 5e3,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    resetProgress: !0,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: !0,
    direction: "ltr",
    trimSpace: !0,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: !0,
    classes: xi,
    i18n: ss,
    reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
  };
function ls(r, e, t) {
  var n = e.Slides;
  function a() {
    de(r).on([et, ge], o);
  }
  function o() {
    n.forEach(function (l) {
      l.style("transform", "translateX(-" + 100 * l.index + "%)");
    });
  }
  function i(l, s) {
    n.style("transition", "opacity " + t.speed + "ms " + t.easing), Qr(s);
  }
  return { mount: a, start: i, cancel: Vn };
}
function us(r, e, t) {
  var n = e.Move,
    a = e.Controller,
    o = e.Scroll,
    i = e.Elements.list,
    l = ae(we, i, "transition"),
    s;
  function u() {
    de(r).bind(i, "transitionend", function (_) {
      _.target === i && s && (f(), s());
    });
  }
  function c(_, d) {
    var E = n.toPosition(_, !0),
      g = n.getPosition(),
      y = v(_);
    $e(E - g) >= 1 && y >= 1
      ? t.useScroll
        ? o.scroll(E, y, !1, d)
        : (l("transform " + y + "ms " + t.easing), n.translate(E, !0), (s = d))
      : (n.jump(_), d());
  }
  function f() {
    l(""), o.cancel();
  }
  function v(_) {
    var d = t.rewindSpeed;
    if (r.is(xt) && d) {
      var E = a.getIndex(!0),
        g = a.getEnd();
      if ((E === 0 && _ >= g) || (E >= g && _ === 0)) return d;
    }
    return t.speed;
  }
  return { mount: u, start: c, cancel: f };
}
var cs = (function () {
    function r(t, n) {
      (this.event = de()),
        (this.Components = {}),
        (this.state = fi(gt)),
        (this.splides = []),
        (this._o = {}),
        (this._E = {});
      var a = Ze(t) ? ia(document, t) : t;
      wt(a, a + " is invalid."),
        (this.root = a),
        (n = je(
          { label: Le(a, xe) || "", labelledby: Le(a, mr) || "" },
          os,
          r.defaults,
          n || {}
        ));
      try {
        je(n, JSON.parse(Le(a, ur)));
      } catch {
        wt(!1, "Invalid JSON");
      }
      this._o = Object.create(je({}, n));
    }
    var e = r.prototype;
    return (
      (e.mount = function (n, a) {
        var o = this,
          i = this.state,
          l = this.Components;
        wt(i.is([gt, ln]), "Already mounted!"),
          i.set(gt),
          (this._C = l),
          (this._T = a || this._T || (this.is(Wt) ? ls : us)),
          (this._E = n || this._E);
        var s = Rt({}, is, this._E, { Transition: this._T });
        return (
          it(s, function (u, c) {
            var f = u(o, l, o._o);
            (l[c] = f), f.setup && f.setup();
          }),
          it(l, function (u) {
            u.mount && u.mount();
          }),
          this.emit(et),
          Re(this.root, Ti),
          i.set(Tt),
          this.emit(zr),
          this
        );
      }),
      (e.sync = function (n) {
        return (
          this.splides.push({ splide: n }),
          n.splides.push({ splide: this, isParent: !0 }),
          this.state.is(Tt) &&
            (this._C.Sync.remount(), n.Components.Sync.remount()),
          this
        );
      }),
      (e.go = function (n) {
        return this._C.Controller.go(n), this;
      }),
      (e.on = function (n, a) {
        return this.event.on(n, a), this;
      }),
      (e.off = function (n) {
        return this.event.off(n), this;
      }),
      (e.emit = function (n) {
        var a;
        return (
          (a = this.event).emit.apply(a, [n].concat(Qe(arguments, 1))), this
        );
      }),
      (e.add = function (n, a) {
        return this._C.Slides.add(n, a), this;
      }),
      (e.remove = function (n) {
        return this._C.Slides.remove(n), this;
      }),
      (e.is = function (n) {
        return this._o.type === n;
      }),
      (e.refresh = function () {
        return this.emit(ge), this;
      }),
      (e.destroy = function (n) {
        n === void 0 && (n = !0);
        var a = this.event,
          o = this.state;
        return (
          o.is(gt)
            ? de(this).on(zr, this.destroy.bind(this, n))
            : (it(
                this._C,
                function (i) {
                  i.destroy && i.destroy(n);
                },
                !0
              ),
              a.emit(fr),
              a.destroy(),
              n && We(this.splides),
              o.set(ln)),
          this
        );
      }),
      si(r, [
        {
          key: "options",
          get: function () {
            return this._o;
          },
          set: function (n) {
            this._C.Media.set(n, !0, !0);
          },
        },
        {
          key: "length",
          get: function () {
            return this._C.Slides.getLength(!0);
          },
        },
        {
          key: "index",
          get: function () {
            return this._C.Controller.getIndex();
          },
        },
      ]),
      r
    );
  })(),
  pr = cs;
pr.defaults = {};
pr.STATES = li;
const fs = [et, ge, At, bn, la, ua, ca, $n, ut, fr, dr, vr];
function ds(r, e) {
  const t = (n, a = {}) => {
    e(vs(n), { splide: r, ...a });
  };
  r.on(fn, (n, a) => {
    t(fn, { Slide: n, e: a });
  }),
    r.on(Pe, (n, a, o) => {
      t(Pe, { index: n, prev: a, dest: o });
    }),
    r.on(ot, (n, a, o) => {
      t(ot, { index: n, prev: a, dest: o });
    }),
    r.on(Bn, (n) => {
      t(Bn, { Slide: n });
    }),
    r.on(Hn, (n) => {
      t(Hn, { Slide: n });
    }),
    r.on(Gn, (n) => {
      t(Gn, { Slide: n });
    }),
    r.on(Fn, (n) => {
      t(Fn, { Slide: n });
    }),
    r.on(_e, (n) => {
      t(_e, n);
    }),
    r.on(Wn, (n, a) => {
      t(Wn, { prev: n, next: a });
    }),
    r.on(qn, (n, a) => {
      t(qn, { prev: n, next: a });
    }),
    r.on(Yn, (n, a) => {
      t(Yn, { data: n, item: a });
    }),
    r.on(Xn, (n, a, o) => {
      t(Xn, { data: n, prev: a, curr: o });
    }),
    r.on(dn, (n) => {
      t(dn, { splides: n });
    }),
    r.on(jn, (n) => {
      t(jn, { rate: n });
    }),
    r.on(vn, (n, a) => {
      t(vn, { img: n, Slide: a });
    }),
    fs.forEach((n) => {
      r.on(n, () => {
        t(n);
      });
    });
}
function vs(r) {
  return r
    .split(":")
    .map((e, t) => (t > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e))
    .join("")
    .replace("Lazyload", "LazyLoad");
}
function ms(r) {
  let e;
  const t = r[11].default,
    n = gn(t, r, r[13], null);
  return {
    c() {
      n && n.c();
    },
    l(a) {
      n && n.l(a);
    },
    m(a, o) {
      n && n.m(a, o), (e = !0);
    },
    p(a, o) {
      n &&
        n.p &&
        (!e || o & 8192) &&
        hn(n, t, a, a[13], e ? En(t, a[13], o, null) : _n(a[13]), null);
    },
    i(a) {
      e || (j(n, a), (e = !0));
    },
    o(a) {
      Z(n, a), (e = !1);
    },
    d(a) {
      n && n.d(a);
    },
  };
}
function gs(r) {
  let e, t;
  return (
    (e = new Ia({
      props: { $$slots: { default: [hs] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        oe(e.$$.fragment);
      },
      l(n) {
        le(e.$$.fragment, n);
      },
      m(n, a) {
        ue(e, n, a), (t = !0);
      },
      p(n, a) {
        const o = {};
        a & 8192 && (o.$$scope = { dirty: a, ctx: n }), e.$set(o);
      },
      i(n) {
        t || (j(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        Z(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        ce(e, n);
      },
    }
  );
}
function hs(r) {
  let e;
  const t = r[11].default,
    n = gn(t, r, r[13], null);
  return {
    c() {
      n && n.c();
    },
    l(a) {
      n && n.l(a);
    },
    m(a, o) {
      n && n.m(a, o), (e = !0);
    },
    p(a, o) {
      n &&
        n.p &&
        (!e || o & 8192) &&
        hn(n, t, a, a[13], e ? En(t, a[13], o, null) : _n(a[13]), null);
    },
    i(a) {
      e || (j(n, a), (e = !0));
    },
    o(a) {
      Z(n, a), (e = !1);
    },
    d(a) {
      n && n.d(a);
    },
  };
}
function _s(r) {
  let e, t, n, a, o;
  const i = [gs, ms],
    l = [];
  function s(f, v) {
    return f[1] ? 0 : 1;
  }
  (t = s(r)), (n = l[t] = i[t](r));
  let u = [{ class: (a = yt("splide", r[0])) }, r[3]],
    c = {};
  for (let f = 0; f < u.length; f += 1) c = Fe(c, u[f]);
  return {
    c() {
      (e = x("div")), n.c(), this.h();
    },
    l(f) {
      e = I(f, "DIV", { class: !0 });
      var v = V(e);
      n.l(v), v.forEach(w), this.h();
    },
    h() {
      pt(e, c);
    },
    m(f, v) {
      ie(f, e, v), l[t].m(e, null), r[12](e), (o = !0);
    },
    p(f, [v]) {
      let _ = t;
      (t = s(f)),
        t === _
          ? l[t].p(f, v)
          : (tr(),
            Z(l[_], 1, 1, () => {
              l[_] = null;
            }),
            nr(),
            (n = l[t]),
            n ? n.p(f, v) : ((n = l[t] = i[t](f)), n.c()),
            j(n, 1),
            n.m(e, null)),
        pt(
          e,
          (c = rr(u, [
            (!o || (v & 1 && a !== (a = yt("splide", f[0])))) && { class: a },
            v & 8 && f[3],
          ]))
        );
    },
    i(f) {
      o || (j(n), (o = !0));
    },
    o(f) {
      Z(n), (o = !1);
    },
    d(f) {
      f && w(e), l[t].d(), r[12](null);
    },
  };
}
function Es(r, e, t) {
  const n = [
    "class",
    "options",
    "splide",
    "extensions",
    "transition",
    "hasTrack",
    "go",
    "sync",
  ];
  let a = bt(e, n),
    { $$slots: o = {}, $$scope: i } = e,
    { class: l = void 0 } = e,
    { options: s = {} } = e,
    { splide: u = void 0 } = e,
    { extensions: c = void 0 } = e,
    { transition: f = void 0 } = e,
    { hasTrack: v = !0 } = e;
  const _ = wa();
  let d,
    E,
    g = Pn({}, s);
  Jn(
    () => (
      t(4, (u = new pr(d, s))),
      ds(u, _),
      u.mount(c, f),
      (E = Or(u)),
      () => u.destroy()
    )
  ),
    La(() => {
      if (u) {
        const m = Or(u);
        ii(E, m) || (u.refresh(), (E = m.slice()));
      }
    });
  function y(m) {
    u == null || u.go(m);
  }
  function h(m) {
    u == null || u.sync(m);
  }
  function b(m) {
    Ca[m ? "unshift" : "push"](() => {
      (d = m), t(2, d);
    });
  }
  return (
    (r.$$set = (m) => {
      (e = Fe(Fe({}, e), er(m))),
        t(3, (a = bt(e, n))),
        "class" in m && t(0, (l = m.class)),
        "options" in m && t(5, (s = m.options)),
        "splide" in m && t(4, (u = m.splide)),
        "extensions" in m && t(6, (c = m.extensions)),
        "transition" in m && t(7, (f = m.transition)),
        "hasTrack" in m && t(1, (v = m.hasTrack)),
        "$$scope" in m && t(13, (i = m.$$scope));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 1072 &&
        u &&
        !kn(g, s) &&
        (t(4, (u.options = s), u), t(10, (g = Pn({}, g))));
    }),
    [l, v, d, a, u, s, c, f, y, h, g, o, b, i]
  );
}
class ps extends De {
  constructor(e) {
    super(),
      Ne(this, e, Es, _s, Ce, {
        class: 0,
        options: 5,
        splide: 4,
        extensions: 6,
        transition: 7,
        hasTrack: 1,
        go: 8,
        sync: 9,
      });
  }
  get class() {
    return this.$$.ctx[0];
  }
  set class(e) {
    this.$$set({ class: e }), ft();
  }
  get options() {
    return this.$$.ctx[5];
  }
  set options(e) {
    this.$$set({ options: e }), ft();
  }
  get splide() {
    return this.$$.ctx[4];
  }
  set splide(e) {
    this.$$set({ splide: e }), ft();
  }
  get extensions() {
    return this.$$.ctx[6];
  }
  set extensions(e) {
    this.$$set({ extensions: e }), ft();
  }
  get transition() {
    return this.$$.ctx[7];
  }
  set transition(e) {
    this.$$set({ transition: e }), ft();
  }
  get hasTrack() {
    return this.$$.ctx[1];
  }
  set hasTrack(e) {
    this.$$set({ hasTrack: e }), ft();
  }
  get go() {
    return this.$$.ctx[8];
  }
  get sync() {
    return this.$$.ctx[9];
  }
}
function bs(r) {
  let e, t, n, a;
  const o = r[3].default,
    i = gn(o, r, r[2], null);
  let l = [{ class: (n = yt("splide__track", r[0])) }, r[1]],
    s = {};
  for (let u = 0; u < l.length; u += 1) s = Fe(s, l[u]);
  return {
    c() {
      (e = x("div")), (t = x("ul")), i && i.c(), this.h();
    },
    l(u) {
      e = I(u, "DIV", { class: !0 });
      var c = V(e);
      t = I(c, "UL", { class: !0 });
      var f = V(t);
      i && i.l(f), f.forEach(w), c.forEach(w), this.h();
    },
    h() {
      N(t, "class", "splide__list"), pt(e, s);
    },
    m(u, c) {
      ie(u, e, c), p(e, t), i && i.m(t, null), (a = !0);
    },
    p(u, [c]) {
      i &&
        i.p &&
        (!a || c & 4) &&
        hn(i, o, u, u[2], a ? En(o, u[2], c, null) : _n(u[2]), null),
        pt(
          e,
          (s = rr(l, [
            (!a || (c & 1 && n !== (n = yt("splide__track", u[0])))) && {
              class: n,
            },
            c & 2 && u[1],
          ]))
        );
    },
    i(u) {
      a || (j(i, u), (a = !0));
    },
    o(u) {
      Z(i, u), (a = !1);
    },
    d(u) {
      u && w(e), i && i.d(u);
    },
  };
}
function $s(r, e, t) {
  const n = ["class"];
  let a = bt(e, n),
    { $$slots: o = {}, $$scope: i } = e,
    { class: l = void 0 } = e;
  return (
    (r.$$set = (s) => {
      (e = Fe(Fe({}, e), er(s))),
        t(1, (a = bt(e, n))),
        "class" in s && t(0, (l = s.class)),
        "$$scope" in s && t(2, (i = s.$$scope));
    }),
    [l, a, i, o]
  );
}
class Ia extends De {
  constructor(e) {
    super(), Ne(this, e, $s, bs, Ce, { class: 0 });
  }
}
function ys(r) {
  let e, t, n;
  const a = r[3].default,
    o = gn(a, r, r[2], null);
  let i = [{ class: (t = yt("splide__slide", r[0])) }, r[1]],
    l = {};
  for (let s = 0; s < i.length; s += 1) l = Fe(l, i[s]);
  return {
    c() {
      (e = x("li")), o && o.c(), this.h();
    },
    l(s) {
      e = I(s, "LI", { class: !0 });
      var u = V(e);
      o && o.l(u), u.forEach(w), this.h();
    },
    h() {
      pt(e, l);
    },
    m(s, u) {
      ie(s, e, u), o && o.m(e, null), (n = !0);
    },
    p(s, [u]) {
      o &&
        o.p &&
        (!n || u & 4) &&
        hn(o, a, s, s[2], n ? En(a, s[2], u, null) : _n(s[2]), null),
        pt(
          e,
          (l = rr(i, [
            (!n || (u & 1 && t !== (t = yt("splide__slide", s[0])))) && {
              class: t,
            },
            u & 2 && s[1],
          ]))
        );
    },
    i(s) {
      n || (j(o, s), (n = !0));
    },
    o(s) {
      Z(o, s), (n = !1);
    },
    d(s) {
      s && w(e), o && o.d(s);
    },
  };
}
function Ts(r, e, t) {
  const n = ["class"];
  let a = bt(e, n),
    { $$slots: o = {}, $$scope: i } = e,
    { class: l = void 0 } = e;
  return (
    (r.$$set = (s) => {
      (e = Fe(Fe({}, e), er(s))),
        t(1, (a = bt(e, n))),
        "class" in s && t(0, (l = s.class)),
        "$$scope" in s && t(2, (i = s.$$scope));
    }),
    [l, a, i, o]
  );
}
class As extends De {
  constructor(e) {
    super(), Ne(this, e, Ts, ys, Ce, { class: 0 });
  }
}
function jr(r, e, t) {
  const n = r.slice();
  return (n[1] = e[t]), n;
}
function Kr(r, e, t) {
  const n = r.slice();
  return (n[1] = e[t]), n;
}
function Zr(r) {
  let e, t, n, a, o;
  return {
    c() {
      (e = x("a")), (t = x("img")), (a = W()), this.h();
    },
    l(i) {
      e = I(i, "A", { href: !0, target: !0, class: !0 });
      var l = V(e);
      (t = I(l, "IMG", { src: !0, alt: !0, loading: !0 })),
        (a = q(l)),
        l.forEach(w),
        this.h();
    },
    h() {
      Et(t.src, (n = r[1].imageUrl)) || N(t, "src", n),
        N(t, "alt", ""),
        N(t, "loading", "lazy"),
        N(e, "href", (o = r[1].url)),
        N(e, "target", "_blank"),
        N(
          e,
          "class",
          "mx-auto flex max-w-xl items-center justify-center transition-all duration-300 hover:scale-[1.03]"
        );
    },
    m(i, l) {
      ie(i, e, l), p(e, t), p(e, a);
    },
    p(i, l) {
      l & 1 && !Et(t.src, (n = i[1].imageUrl)) && N(t, "src", n),
        l & 1 && o !== (o = i[1].url) && N(e, "href", o);
    },
    d(i) {
      i && w(e);
    },
  };
}
function xs(r) {
  let e, t, n, a, o;
  return {
    c() {
      (e = x("a")), (t = x("img")), (o = W()), this.h();
    },
    l(i) {
      e = I(i, "A", { href: !0, target: !0, class: !0 });
      var l = V(e);
      (t = I(l, "IMG", { src: !0, alt: !0, loading: !0 })),
        l.forEach(w),
        (o = q(i)),
        this.h();
    },
    h() {
      Et(t.src, (n = r[1].imageUrl)) || N(t, "src", n),
        N(t, "alt", ""),
        N(t, "loading", "lazy"),
        N(e, "href", (a = r[1].url)),
        N(e, "target", "_blank"),
        N(
          e,
          "class",
          "mx-auto flex max-w-xl items-center justify-center transition-all duration-300 hover:scale-[1.03]"
        );
    },
    m(i, l) {
      ie(i, e, l), p(e, t), ie(i, o, l);
    },
    p(i, l) {
      l & 1 && !Et(t.src, (n = i[1].imageUrl)) && N(t, "src", n),
        l & 1 && a !== (a = i[1].url) && N(e, "href", a);
    },
    d(i) {
      i && (w(e), w(o));
    },
  };
}
function Jr(r) {
  let e, t;
  return (
    (e = new As({
      props: { $$slots: { default: [xs] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        oe(e.$$.fragment);
      },
      l(n) {
        le(e.$$.fragment, n);
      },
      m(n, a) {
        ue(e, n, a), (t = !0);
      },
      p(n, a) {
        const o = {};
        a & 65 && (o.$$scope = { dirty: a, ctx: n }), e.$set(o);
      },
      i(n) {
        t || (j(e.$$.fragment, n), (t = !0));
      },
      o(n) {
        Z(e.$$.fragment, n), (t = !1);
      },
      d(n) {
        ce(e, n);
      },
    }
  );
}
function Is(r) {
  let e,
    t,
    n = $t(r[0]),
    a = [];
  for (let i = 0; i < n.length; i += 1) a[i] = Jr(jr(r, n, i));
  const o = (i) =>
    Z(a[i], 1, 1, () => {
      a[i] = null;
    });
  return {
    c() {
      for (let i = 0; i < a.length; i += 1) a[i].c();
      e = Sr();
    },
    l(i) {
      for (let l = 0; l < a.length; l += 1) a[l].l(i);
      e = Sr();
    },
    m(i, l) {
      for (let s = 0; s < a.length; s += 1) a[s] && a[s].m(i, l);
      ie(i, e, l), (t = !0);
    },
    p(i, l) {
      if (l & 1) {
        n = $t(i[0]);
        let s;
        for (s = 0; s < n.length; s += 1) {
          const u = jr(i, n, s);
          a[s]
            ? (a[s].p(u, l), j(a[s], 1))
            : ((a[s] = Jr(u)), a[s].c(), j(a[s], 1), a[s].m(e.parentNode, e));
        }
        for (tr(), s = n.length; s < a.length; s += 1) o(s);
        nr();
      }
    },
    i(i) {
      if (!t) {
        for (let l = 0; l < n.length; l += 1) j(a[l]);
        t = !0;
      }
    },
    o(i) {
      a = a.filter(Boolean);
      for (let l = 0; l < a.length; l += 1) Z(a[l]);
      t = !1;
    },
    d(i) {
      i && w(e), Qn(a, i);
    },
  };
}
function Ss(r) {
  let e, t, n, a, o, i, l, s, u;
  return (
    (n = new wr({ props: { name: "chevron" } })),
    (i = new wr({ props: { class: "rotate-180", name: "chevron" } })),
    (s = new Ia({
      props: { $$slots: { default: [Is] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        (e = x("div")),
          (t = x("button")),
          oe(n.$$.fragment),
          (a = W()),
          (o = x("button")),
          oe(i.$$.fragment),
          (l = W()),
          oe(s.$$.fragment),
          this.h();
      },
      l(c) {
        e = I(c, "DIV", { class: !0 });
        var f = V(e);
        t = I(f, "BUTTON", { class: !0 });
        var v = V(t);
        le(n.$$.fragment, v),
          v.forEach(w),
          (a = q(f)),
          (o = I(f, "BUTTON", { class: !0 }));
        var _ = V(o);
        le(i.$$.fragment, _),
          _.forEach(w),
          f.forEach(w),
          (l = q(c)),
          le(s.$$.fragment, c),
          this.h();
      },
      h() {
        N(t, "class", "splide__arrow splide__arrow--prev"),
          N(o, "class", "splide__arrow splide__arrow--next"),
          N(
            e,
            "class",
            "splide__arrows mb-6 flex items-center justify-center gap-4"
          );
      },
      m(c, f) {
        ie(c, e, f),
          p(e, t),
          ue(n, t, null),
          p(e, a),
          p(e, o),
          ue(i, o, null),
          ie(c, l, f),
          ue(s, c, f),
          (u = !0);
      },
      p(c, f) {
        const v = {};
        f & 65 && (v.$$scope = { dirty: f, ctx: c }), s.$set(v);
      },
      i(c) {
        u ||
          (j(n.$$.fragment, c),
          j(i.$$.fragment, c),
          j(s.$$.fragment, c),
          (u = !0));
      },
      o(c) {
        Z(n.$$.fragment, c), Z(i.$$.fragment, c), Z(s.$$.fragment, c), (u = !1);
      },
      d(c) {
        c && (w(e), w(l)), ce(n), ce(i), ce(s, c);
      },
    }
  );
}
function ws(r) {
  let e,
    t,
    n,
    a,
    o = '<img src="/images/illustrations/illustration-4.png" alt=""/>',
    i,
    l,
    s,
    u = "What Crypto <s>Twitter</s> X is Saying",
    c,
    f,
    v,
    _,
    d,
    E,
    g,
    y = '<img src="/images/illustrations/illustration-4.png" alt=""/>',
    h,
    b = $t(r[0]),
    m = [];
  for (let $ = 0; $ < b.length; $ += 1) m[$] = Zr(Kr(r, b, $));
  return (
    (d = new ps({
      props: {
        hasTrack: !1,
        "aria-label": "Testimonials slider",
        options: { perPage: 1 },
        $$slots: { default: [Ss] },
        $$scope: { ctx: r },
      },
    })),
    {
      c() {
        (e = x("section")),
          (t = x("div")),
          (n = x("div")),
          (a = x("div")),
          (a.innerHTML = o),
          (i = W()),
          (l = x("div")),
          (s = x("h2")),
          (s.innerHTML = u),
          (c = W()),
          (f = x("div"));
        for (let $ = 0; $ < m.length; $ += 1) m[$].c();
        (v = W()),
          (_ = x("div")),
          oe(d.$$.fragment),
          (E = W()),
          (g = x("div")),
          (g.innerHTML = y),
          this.h();
      },
      l($) {
        e = I($, "SECTION", {});
        var A = V(e);
        t = I(A, "DIV", { class: !0 });
        var T = V(t);
        n = I(T, "DIV", { class: !0 });
        var S = V(n);
        (a = I(S, "DIV", { class: !0, "data-svelte-h": !0 })),
          he(a) !== "svelte-1bq2vpu" && (a.innerHTML = o),
          (i = q(S)),
          (l = I(S, "DIV", { class: !0 }));
        var k = V(l);
        (s = I(k, "H2", { class: !0, "data-svelte-h": !0 })),
          he(s) !== "svelte-1iw3kj5" && (s.innerHTML = u),
          (c = q(k)),
          (f = I(k, "DIV", { class: !0 }));
        var U = V(f);
        for (let O = 0; O < m.length; O += 1) m[O].l(U);
        U.forEach(w), (v = q(k)), (_ = I(k, "DIV", { class: !0 }));
        var L = V(_);
        le(d.$$.fragment, L),
          L.forEach(w),
          k.forEach(w),
          (E = q(S)),
          (g = I(S, "DIV", { class: !0, "data-svelte-h": !0 })),
          he(g) !== "svelte-1bq2vpu" && (g.innerHTML = y),
          S.forEach(w),
          T.forEach(w),
          A.forEach(w),
          this.h();
      },
      h() {
        N(a, "class", "hidden md:block"),
          N(
            s,
            "class",
            "text-gray-1 mb-12 text-center text-4xl font-semibold md:text-5xl"
          ),
          N(
            f,
            "class",
            "hidden grid-cols-1 grid-rows-1 gap-6 xl:grid xl:grid-cols-2"
          ),
          N(_, "class", "block xl:hidden"),
          N(l, "class", "w-full flex-1 items-center justify-center"),
          N(g, "class", "hidden md:block"),
          N(n, "class", "flex items-center justify-between px-6"),
          N(t, "class", "font-tasa-orbiter-display mb-5");
      },
      m($, A) {
        ie($, e, A),
          p(e, t),
          p(t, n),
          p(n, a),
          p(n, i),
          p(n, l),
          p(l, s),
          p(l, c),
          p(l, f);
        for (let T = 0; T < m.length; T += 1) m[T] && m[T].m(f, null);
        p(l, v), p(l, _), ue(d, _, null), p(n, E), p(n, g), (h = !0);
      },
      p($, [A]) {
        if (A & 1) {
          b = $t($[0]);
          let S;
          for (S = 0; S < b.length; S += 1) {
            const k = Kr($, b, S);
            m[S] ? m[S].p(k, A) : ((m[S] = Zr(k)), m[S].c(), m[S].m(f, null));
          }
          for (; S < m.length; S += 1) m[S].d(1);
          m.length = b.length;
        }
        const T = {};
        A & 65 && (T.$$scope = { dirty: A, ctx: $ }), d.$set(T);
      },
      i($) {
        h || (j(d.$$.fragment, $), (h = !0));
      },
      o($) {
        Z(d.$$.fragment, $), (h = !1);
      },
      d($) {
        $ && w(e), Qn(m, $), ce(d);
      },
    }
  );
}
function Ls(r, e, t) {
  let n = [];
  return (
    Jn(async () => {
      const o = await (await fetch("/data/testimonial-tweets.json")).json();
      for (const i of o) {
        const l = await fetch(`/images/testimonials/tweet-${i}.webp`);
        t(
          0,
          (n = [
            ...n,
            { imageUrl: l.url, url: `https://twitter.com/i/status/${i}` },
          ])
        );
      }
    }),
    [n]
  );
}
class Cs extends De {
  constructor(e) {
    super(), Ne(this, e, Ls, ws, Ce, {});
  }
}
function Ds(r) {
  let e,
    t = "",
    n,
    a,
    o,
    i,
    l,
    s,
    u,
    c,
    f,
    v,
    _,
    d,
    E,
    g,
    y,
    h,
    b;
  return (
    (i = new Va({})),
    (s = new Ua({})),
    (c = new qa({})),
    (v = new Ka({})),
    (d = new Qa({})),
    (g = new ri({})),
    (h = new Cs({})),
    {
      c() {
        (e = x("script")),
          (e.innerHTML = t),
          (a = W()),
          (o = x("div")),
          oe(i.$$.fragment),
          (l = W()),
          oe(s.$$.fragment),
          (u = W()),
          oe(c.$$.fragment),
          (f = W()),
          oe(v.$$.fragment),
          (_ = W()),
          oe(d.$$.fragment),
          (E = W()),
          oe(g.$$.fragment),
          (y = W()),
          oe(h.$$.fragment),
          this.h();
      },
      l(m) {
        const $ = Da("svelte-am7l7n", document.head);
        (e = I($, "SCRIPT", {
          id: !0,
          src: !0,
          charset: !0,
          "data-svelte-h": !0,
        })),
          he(e) !== "svelte-1tlwjnt" && (e.innerHTML = t),
          $.forEach(w),
          (a = q(m)),
          (o = I(m, "DIV", {}));
        var A = V(o);
        le(i.$$.fragment, A),
          (l = q(A)),
          le(s.$$.fragment, A),
          (u = q(A)),
          le(c.$$.fragment, A),
          (f = q(A)),
          le(v.$$.fragment, A),
          (_ = q(A)),
          le(d.$$.fragment, A),
          (E = q(A)),
          le(g.$$.fragment, A),
          (y = q(A)),
          le(h.$$.fragment, A),
          A.forEach(w),
          this.h();
      },
      h() {
        (document.title = "Colosseum"),
          (e.async = !0),
          N(e, "id", "twitter-widget"),
          Et(e.src, (n = "https://platform.twitter.com/widgets.js")) ||
            N(e, "src", n),
          N(e, "charset", "utf-8");
      },
      m(m, $) {
        p(document.head, e),
          ie(m, a, $),
          ie(m, o, $),
          ue(i, o, null),
          p(o, l),
          ue(s, o, null),
          p(o, u),
          ue(c, o, null),
          p(o, f),
          ue(v, o, null),
          p(o, _),
          ue(d, o, null),
          p(o, E),
          ue(g, o, null),
          p(o, y),
          ue(h, o, null),
          (b = !0);
      },
      p: Ke,
      i(m) {
        b ||
          (j(i.$$.fragment, m),
          j(s.$$.fragment, m),
          j(c.$$.fragment, m),
          j(v.$$.fragment, m),
          j(d.$$.fragment, m),
          j(g.$$.fragment, m),
          j(h.$$.fragment, m),
          (b = !0));
      },
      o(m) {
        Z(i.$$.fragment, m),
          Z(s.$$.fragment, m),
          Z(c.$$.fragment, m),
          Z(v.$$.fragment, m),
          Z(d.$$.fragment, m),
          Z(g.$$.fragment, m),
          Z(h.$$.fragment, m),
          (b = !1);
      },
      d(m) {
        m && (w(a), w(o)),
          w(e),
          ce(i),
          ce(s),
          ce(c),
          ce(v),
          ce(d),
          ce(g),
          ce(h);
      },
    }
  );
}
class zs extends De {
  constructor(e) {
    super(), Ne(this, e, null, Ds, Ce, {});
  }
}
export { zs as component };
