import {
  s as mt,
  L as $e,
  i as T,
  n as de,
  f,
  k as Ke,
  U as He,
  e as m,
  c as u,
  v as F,
  a as x,
  t as Ce,
  b as g,
  g as w,
  d as Ee,
  m as d,
  C as Re,
  h as i,
  E as At,
  j as Ve,
  B as jt,
  r as Kt,
  G as Rt,
  x as Ht,
  y as Vt,
  H as Wt,
  I as Yt,
  q as Jt,
} from "../chunks/scheduler.3d7b914d.js";
import {
  S as ut,
  i as pt,
  g as gt,
  b as V,
  f as ht,
  t as M,
  c as Z,
  a as ee,
  m as te,
  d as le,
} from "../chunks/index.866787e6.js";
import { e as We } from "../chunks/each.e59479a4.js";
import { w as Gt } from "../chunks/index.9b6f3e3b.js";
import { L as Qt } from "../chunks/Link.e96ab56a.js";
import { E as Tt } from "../chunks/Element.62f3ea4c.js";
import { I as Zt } from "../chunks/Icon.b516688f.js";
import { d as el } from "../chunks/data.30b2a30e.js";
const dt = Gt({}),
  ye = Gt(!1);
function tl(n) {
  let e,
    l = "Team member not found.";
  return {
    c() {
      (e = m("p")), (e.textContent = l);
    },
    l(t) {
      (e = u(t, "P", { "data-svelte-h": !0 })),
        F(e) !== "svelte-cgp2gm" && (e.textContent = l);
    },
    m(t, r) {
      T(t, e, r);
    },
    p: de,
    d(t) {
      t && f(e);
    },
  };
}
function ll(n) {
  let e,
    l,
    t,
    r,
    s,
    o,
    p,
    a,
    h,
    k,
    _ = n[0].name + "",
    $,
    me,
    q,
    P = n[0].designation + "",
    re,
    ae,
    N;
  return {
    c() {
      (e = m("li")),
        (l = m("a")),
        (t = m("div")),
        (r = m("div")),
        (s = m("img")),
        (a = x()),
        (h = m("div")),
        (k = m("h3")),
        ($ = Ce(_)),
        (me = x()),
        (q = m("p")),
        (re = Ce(P)),
        this.h();
    },
    l(C) {
      e = u(C, "LI", {});
      var E = g(e);
      l = u(E, "A", { href: !0 });
      var ue = g(l);
      t = u(ue, "DIV", { class: !0 });
      var z = g(t);
      r = u(z, "DIV", { class: !0 });
      var pe = g(r);
      (s = u(pe, "IMG", { class: !0, src: !0, alt: !0 })),
        pe.forEach(f),
        (a = w(z)),
        (h = u(z, "DIV", {}));
      var B = g(h);
      k = u(B, "H3", { class: !0 });
      var S = g(k);
      ($ = Ee(S, _)), S.forEach(f), (me = w(B)), (q = u(B, "P", { class: !0 }));
      var U = g(q);
      (re = Ee(U, P)),
        U.forEach(f),
        B.forEach(f),
        z.forEach(f),
        ue.forEach(f),
        E.forEach(f),
        this.h();
    },
    h() {
      d(s, "class", "w-full rounded-lg"),
        Re(s.src, (o = n[0].imageUrl)) || d(s, "src", o),
        d(s, "alt", (p = n[0].name)),
        d(
          r,
          "class",
          "before:content-right-angle after:content-right-angle relative mb-6 before:absolute before:-bottom-4 before:-left-2 before:rotate-180 before:opacity-50 before:transition-all before:duration-300 before:ease-in-out after:absolute after:-right-2 after:-top-4 after:opacity-50 after:transition-all after:duration-300 after:ease-in-out group-hover:before:opacity-100 group-hover:after:opacity-100"
        ),
        d(k, "class", "text-mint-1 text-xl font-medium"),
        d(q, "class", "text-gray-2"),
        d(
          t,
          "class",
          "border-gray-8 bg-gray-11 font-tasa-orbiter-display before:border-gray-9 hover:border-gray-7 hover:before:border-gray-8 group relative rounded-lg border p-6 transition-all duration-300 ease-in-out before:absolute before:inset-1 before:rounded-md before:border before:transition-all before:duration-300 before:ease-in-out"
        ),
        d(l, "href", "#/");
    },
    m(C, E) {
      T(C, e, E),
        i(e, l),
        i(l, t),
        i(t, r),
        i(r, s),
        i(t, a),
        i(t, h),
        i(h, k),
        i(k, $),
        i(h, me),
        i(h, q),
        i(q, re),
        ae || ((N = At(l, "click", n[1])), (ae = !0));
    },
    p(C, E) {
      E & 1 && !Re(s.src, (o = C[0].imageUrl)) && d(s, "src", o),
        E & 1 && p !== (p = C[0].name) && d(s, "alt", p),
        E & 1 && _ !== (_ = C[0].name + "") && Ve($, _),
        E & 1 && P !== (P = C[0].designation + "") && Ve(re, P);
    },
    d(C) {
      C && f(e), (ae = !1), N();
    },
  };
}
function rl(n) {
  let e;
  function l(s, o) {
    return s[0] ? ll : tl;
  }
  let t = l(n),
    r = t(n);
  return {
    c() {
      r.c(), (e = $e());
    },
    l(s) {
      r.l(s), (e = $e());
    },
    m(s, o) {
      r.m(s, o), T(s, e, o);
    },
    p(s, [o]) {
      t === (t = l(s)) && r
        ? r.p(s, o)
        : (r.d(1), (r = t(s)), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: de,
    o: de,
    d(s) {
      s && f(e), r.d(s);
    },
  };
}
function al(n, e, l) {
  let t, r;
  Ke(n, ye, (a) => l(3, (t = a))), Ke(n, dt, (a) => l(4, (r = a)));
  let { personDetails: s } = e,
    { noCard: o = !1 } = e;
  const p = () => {
    if (s.platform === "Colosseum Mentor" && s.xHandle) {
      window.open(`https://x.com/${s.xHandle}`, "_blank");
      return;
    }
    o || (He(dt, (r = s), r), He(ye, (t = !0), t));
  };
  return (
    (n.$$set = (a) => {
      "personDetails" in a && l(0, (s = a.personDetails)),
        "noCard" in a && l(2, (o = a.noCard));
    }),
    [s, p, o]
  );
}
class Ft extends ut {
  constructor(e) {
    super(), pt(this, e, al, rl, mt, { personDetails: 0, noCard: 2 });
  }
}
function Pt(n, e, l) {
  const t = n.slice();
  return (t[2] = e[l]), t;
}
function sl(n) {
  let e,
    l = "No team members found.";
  return {
    c() {
      (e = m("p")), (e.textContent = l);
    },
    l(t) {
      (e = u(t, "P", { "data-svelte-h": !0 })),
        F(e) !== "svelte-c8k62l" && (e.textContent = l);
    },
    m(t, r) {
      T(t, e, r);
    },
    p: de,
    i: de,
    o: de,
    d(t) {
      t && f(e);
    },
  };
}
function ol(n) {
  let e,
    l,
    t = We(n[0]),
    r = [];
  for (let o = 0; o < t.length; o += 1) r[o] = Ot(Pt(n, t, o));
  const s = (o) =>
    V(r[o], 1, 1, () => {
      r[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1) r[o].c();
      e = $e();
    },
    l(o) {
      for (let p = 0; p < r.length; p += 1) r[p].l(o);
      e = $e();
    },
    m(o, p) {
      for (let a = 0; a < r.length; a += 1) r[a] && r[a].m(o, p);
      T(o, e, p), (l = !0);
    },
    p(o, p) {
      if (p & 3) {
        t = We(o[0]);
        let a;
        for (a = 0; a < t.length; a += 1) {
          const h = Pt(o, t, a);
          r[a]
            ? (r[a].p(h, p), M(r[a], 1))
            : ((r[a] = Ot(h)), r[a].c(), M(r[a], 1), r[a].m(e.parentNode, e));
        }
        for (gt(), a = t.length; a < r.length; a += 1) s(a);
        ht();
      }
    },
    i(o) {
      if (!l) {
        for (let p = 0; p < t.length; p += 1) M(r[p]);
        l = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let p = 0; p < r.length; p += 1) V(r[p]);
      l = !1;
    },
    d(o) {
      o && f(e), jt(r, o);
    },
  };
}
function Ot(n) {
  let e, l;
  return (
    (e = new Ft({ props: { noCard: n[1], personDetails: n[2] } })),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(t) {
        ee(e.$$.fragment, t);
      },
      m(t, r) {
        te(e, t, r), (l = !0);
      },
      p(t, r) {
        const s = {};
        r & 2 && (s.noCard = t[1]),
          r & 1 && (s.personDetails = t[2]),
          e.$set(s);
      },
      i(t) {
        l || (M(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        V(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        le(e, t);
      },
    }
  );
}
function nl(n) {
  let e, l, t, r;
  const s = [ol, sl],
    o = [];
  function p(a, h) {
    return a[0].length > 0 ? 0 : 1;
  }
  return (
    (e = p(n)),
    (l = o[e] = s[e](n)),
    {
      c() {
        l.c(), (t = $e());
      },
      l(a) {
        l.l(a), (t = $e());
      },
      m(a, h) {
        o[e].m(a, h), T(a, t, h), (r = !0);
      },
      p(a, [h]) {
        let k = e;
        (e = p(a)),
          e === k
            ? o[e].p(a, h)
            : (gt(),
              V(o[k], 1, 1, () => {
                o[k] = null;
              }),
              ht(),
              (l = o[e]),
              l ? l.p(a, h) : ((l = o[e] = s[e](a)), l.c()),
              M(l, 1),
              l.m(t.parentNode, t));
      },
      i(a) {
        r || (M(l), (r = !0));
      },
      o(a) {
        V(l), (r = !1);
      },
      d(a) {
        a && f(t), o[e].d(a);
      },
    }
  );
}
function il(n, e, l) {
  let { personsList: t } = e,
    { noCard: r } = e;
  return (
    (n.$$set = (s) => {
      "personsList" in s && l(0, (t = s.personsList)),
        "noCard" in s && l(1, (r = s.noCard));
    }),
    [t, r]
  );
}
class zt extends ut {
  constructor(e) {
    super(), pt(this, e, il, nl, mt, { personsList: 0, noCard: 1 });
  }
}
function Nt(n, e, l) {
  const t = n.slice();
  return (t[8] = e[l]), t;
}
function St(n) {
  let e, l;
  return (
    (e = new Ft({ props: { personDetails: n[8], noCard: !1 } })),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(t) {
        ee(e.$$.fragment, t);
      },
      m(t, r) {
        te(e, t, r), (l = !0);
      },
      p: de,
      i(t) {
        l || (M(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        V(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        le(e, t);
      },
    }
  );
}
function cl(n) {
  let e;
  return {
    c() {
      e = Ce("Press & Brand Kit");
    },
    l(l) {
      e = Ee(l, "Press & Brand Kit");
    },
    m(l, t) {
      T(l, e, t);
    },
    d(l) {
      l && f(e);
    },
  };
}
function qt(n) {
  let e, l, t, r, s;
  return {
    c() {
      (e = m("a")), (l = Ht("svg")), (t = Ht("path")), this.h();
    },
    l(o) {
      e = u(o, "A", {
        href: !0,
        target: !0,
        rel: !0,
        class: !0,
        "aria-label": !0,
      });
      var p = g(e);
      l = Vt(p, "svg", { class: !0, viewBox: !0, fill: !0, xmlns: !0 });
      var a = g(l);
      (t = Vt(a, "path", { d: !0 })),
        g(t).forEach(f),
        a.forEach(f),
        p.forEach(f),
        this.h();
    },
    h() {
      d(
        t,
        "d",
        "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      ),
        d(l, "class", "mt-px h-5 w-5"),
        d(l, "viewBox", "0 0 24 24"),
        d(l, "fill", "currentColor"),
        d(l, "xmlns", "http://www.w3.org/2000/svg"),
        d(e, "href", (r = "https://x.com/" + n[1].xHandle)),
        d(e, "target", "_blank"),
        d(e, "rel", "noopener noreferrer"),
        d(
          e,
          "class",
          "text-gray-4 hover:text-mint-1 transition-colors duration-200"
        ),
        d(e, "aria-label", (s = "View " + n[1].name + "'s X profile"));
    },
    m(o, p) {
      T(o, e, p), i(e, l), i(l, t);
    },
    p(o, p) {
      p & 2 && r !== (r = "https://x.com/" + o[1].xHandle) && d(e, "href", r),
        p & 2 &&
          s !== (s = "View " + o[1].name + "'s X profile") &&
          d(e, "aria-label", s);
    },
    d(o) {
      o && f(e);
    },
  };
}
function Bt(n) {
  let e,
    l = n[1].platform + "",
    t;
  return {
    c() {
      (e = m("p")), (t = Ce(l));
    },
    l(r) {
      e = u(r, "P", {});
      var s = g(e);
      (t = Ee(s, l)), s.forEach(f);
    },
    m(r, s) {
      T(r, e, s), i(e, t);
    },
    p(r, s) {
      s & 2 && l !== (l = r[1].platform + "") && Ve(t, l);
    },
    d(r) {
      r && f(e);
    },
  };
}
function Ut(n) {
  let e,
    l,
    t = n[1].description + "";
  return {
    c() {
      (e = m("p")), (l = new Wt(!1)), this.h();
    },
    l(r) {
      e = u(r, "P", { class: !0 });
      var s = g(e);
      (l = Yt(s, !1)), s.forEach(f), this.h();
    },
    h() {
      (l.a = null), d(e, "class", "mt-7");
    },
    m(r, s) {
      T(r, e, s), l.m(t, e);
    },
    p(r, s) {
      s & 2 && t !== (t = r[1].description + "") && l.p(t);
    },
    d(r) {
      r && f(e);
    },
  };
}
function fl(n) {
  let e,
    l,
    t,
    r = `<div class="md:bg-grid-2 mx-auto mb-16 max-w-[75.5rem] px-6 md:mb-32 md:bg-cover md:bg-top md:bg-no-repeat"><div class="lg:bg-illustration-12 lg:h-px lg:min-h-[52.5rem] lg:bg-[position:25%] lg:bg-no-repeat lg:pt-[10.5rem]"><div class="bg-grid-1 bg-[size:175%] bg-top bg-no-repeat sm:bg-[size:125%] md:bg-none"><div class="bg-illustration-12 grid grid-cols-1 bg-[size:14.8rem] bg-top bg-no-repeat pt-20 sm:bg-[size:20rem] md:bg-[size:25rem] lg:h-full lg:grid-cols-2 lg:items-center lg:gap-x-20 lg:bg-none lg:pt-0"><h1 class="text-gray-1 mb-10 text-5xl font-bold uppercase leading-[3.5rem] md:text-[5.5rem] md:font-bold md:leading-[6rem] lg:self-start lg:ps-4">The Growth Engine of the Crypto Economy</h1> <div class="text-gray-2 max-w-xl space-y-6 text-base font-medium md:text-lg"><p>Colosseum is an organization that integrates three pillars: Hackathon, Accelerator,
                and Venture Fund.</p> <p>Colosseum runs online hackathons (and now the Eternal challenge) for the Solana
                Foundation and the broader ecosystem. We believe these competitions are the best
                mechanism for attracting and discovering the most talented crypto builders globally.
                Our five-week hackathon provides founding teams a level playing field to showcase
                their potential to build crypto startups that will substantially increase onchain
                activity.</p> <p>Our accelerator is hybrid, with two weeks in-person in San Francisco, and the other
                six weeks online. The program is designed for hackathon and Eternal winners to
                become embedded in the Solana ecosystem, join an elite founder community, and
                receive 1:1 mentorship to reach breakout momentum with their startups.</p> <p>Founding teams accepted into the accelerator will receive an upfront investment of
                $250,000 from Colosseum. The accelerator program culminates with a private Demo Day
                where founders will pitch their products to top VCs.</p></div></div></div></div></div>`,
    s,
    o,
    p,
    a,
    h,
    k,
    _,
    $,
    me = "The Colosseum Team",
    q,
    P,
    re =
      "We are operators, investors, and builders with over a decade of experience in crypto.",
    ae,
    N,
    C,
    E,
    ue,
    z,
    pe,
    B,
    S,
    U,
    bt = `<h2 class="text-gray-1 mb-4 text-[2.5rem] font-semibold leading-[3rem]" id="mentor-network">Accelerator Mentor Network</h2> <p class="text-gray-2 font-normal md:text-lg">Colosseum&#39;s network includes the best founders, developers, and operators in the Solana
            ecosystem.</p>`,
    Ye,
    ge,
    se,
    Je,
    De,
    X,
    he,
    vt =
      '<h2 class="text-gray-1 mb-4 text-[2.5rem] font-semibold leading-[3rem]">Press</h2> <p class="text-gray-2 font-normal">Read about Colosseum in the media and access our brand kit.</p>',
    Qe,
    K,
    Te,
    R,
    W,
    A,
    oe,
    _t = "// About",
    Ze,
    ne,
    et,
    be,
    ie,
    tt,
    Y,
    ce,
    j,
    Pe,
    Oe,
    lt,
    O,
    G,
    ve,
    Ie = n[1].name + "",
    ze,
    rt,
    at,
    _e,
    Le = n[1].designation + "",
    Ne,
    st,
    ot = n[1].hasOwnProperty("platform"),
    Se,
    nt = n[1].hasOwnProperty("description"),
    it,
    xe,
    xt =
      '<div class="absolute left-0 top-0 aspect-square w-1 bg-gray-500"></div> <div class="absolute right-0 top-0 aspect-square w-1 bg-gray-500"></div> <div class="absolute bottom-0 left-0 aspect-square w-1 bg-gray-500"></div> <div class="absolute bottom-0 right-0 aspect-square w-1 bg-gray-500"></div>',
    J,
    ct,
    wt;
  (k = new Tt({
    props: { class: "mx-auto mb-16 w-fit xl:hidden", name: "plus-detail-1" },
  })),
    (E = new zt({ props: { personsList: n[2], noCard: !1 } }));
  let fe = We(n[3]),
    v = [];
  for (let c = 0; c < fe.length; c += 1) v[c] = St(Nt(n, fe, c));
  const Xt = (c) =>
    V(v[c], 1, 1, () => {
      v[c] = null;
    });
  (se = new zt({ props: { noCard: !0, personsList: n[4] } })),
    (K = new Qt({
      props: {
        linkTo: "/press-and-brand",
        theme: "gray",
        placement: "",
        $$slots: { default: [cl] },
        $$scope: { ctx: n },
      },
    })),
    (ne = new Tt({ props: { class: "hidden sm:block", name: "pattern" } })),
    (ie = new Zt({ props: { name: "close" } }));
  let D = n[1].xHandle && qt(n),
    I = ot && Bt(n),
    L = nt && Ut(n);
  return {
    c() {
      (e = x()),
        (l = m("div")),
        (t = m("section")),
        (t.innerHTML = r),
        (s = x()),
        (o = m("div")),
        (p = m("section")),
        (a = m("div")),
        (h = m("div")),
        Z(k.$$.fragment),
        (_ = x()),
        ($ = m("h2")),
        ($.textContent = me),
        (q = x()),
        (P = m("p")),
        (P.textContent = re),
        (ae = x()),
        (N = m("div")),
        (C = m("ul")),
        Z(E.$$.fragment),
        (ue = x()),
        (z = m("ul"));
      for (let c = 0; c < v.length; c += 1) v[c].c();
      (pe = x()),
        (B = m("section")),
        (S = m("div")),
        (U = m("div")),
        (U.innerHTML = bt),
        (Ye = x()),
        (ge = m("ul")),
        Z(se.$$.fragment),
        (Je = x()),
        (De = m("section")),
        (X = m("div")),
        (he = m("div")),
        (he.innerHTML = vt),
        (Qe = x()),
        Z(K.$$.fragment),
        (Te = x()),
        (R = m("dialog")),
        (W = m("div")),
        (A = m("div")),
        (oe = m("h4")),
        (oe.textContent = _t),
        (Ze = x()),
        Z(ne.$$.fragment),
        (et = x()),
        (be = m("button")),
        Z(ie.$$.fragment),
        (tt = x()),
        (Y = m("div")),
        (ce = m("div")),
        (j = m("img")),
        (lt = x()),
        (O = m("div")),
        (G = m("div")),
        (ve = m("p")),
        (ze = Ce(Ie)),
        (rt = x()),
        D && D.c(),
        (at = x()),
        (_e = m("p")),
        (Ne = Ce(Le)),
        (st = x()),
        I && I.c(),
        (Se = x()),
        L && L.c(),
        (it = x()),
        (xe = m("div")),
        (xe.innerHTML = xt),
        this.h();
    },
    l(c) {
      Kt("svelte-1wfw481", document.head).forEach(f),
        (e = w(c)),
        (l = u(c, "DIV", { class: !0 }));
      var H = g(l);
      (t = u(H, "SECTION", { "data-svelte-h": !0 })),
        F(t) !== "svelte-1q5v7q" && (t.innerHTML = r),
        (s = w(H)),
        (o = u(H, "DIV", { class: !0 }));
      var y = g(o);
      p = u(y, "SECTION", {});
      var Me = g(p);
      a = u(Me, "DIV", { class: !0 });
      var qe = g(a);
      h = u(qe, "DIV", { class: !0 });
      var we = g(h);
      ee(k.$$.fragment, we),
        (_ = w(we)),
        ($ = u(we, "H2", { class: !0, "data-svelte-h": !0 })),
        F($) !== "svelte-1vrrp58" && ($.textContent = me),
        (q = w(we)),
        (P = u(we, "P", { class: !0, "data-svelte-h": !0 })),
        F(P) !== "svelte-froodz" && (P.textContent = re),
        we.forEach(f),
        (ae = w(qe)),
        (N = u(qe, "DIV", { class: !0 }));
      var Be = g(N);
      C = u(Be, "UL", { class: !0 });
      var kt = g(C);
      ee(E.$$.fragment, kt),
        kt.forEach(f),
        (ue = w(Be)),
        (z = u(Be, "UL", { class: !0 }));
      var yt = g(z);
      for (let ft = 0; ft < v.length; ft += 1) v[ft].l(yt);
      yt.forEach(f),
        Be.forEach(f),
        qe.forEach(f),
        Me.forEach(f),
        (pe = w(y)),
        (B = u(y, "SECTION", {}));
      var $t = g(B);
      S = u($t, "DIV", { class: !0 });
      var Ue = g(S);
      (U = u(Ue, "DIV", { class: !0, "data-svelte-h": !0 })),
        F(U) !== "svelte-z7fa24" && (U.innerHTML = bt),
        (Ye = w(Ue)),
        (ge = u(Ue, "UL", { class: !0 }));
      var Ct = g(ge);
      ee(se.$$.fragment, Ct),
        Ct.forEach(f),
        Ue.forEach(f),
        $t.forEach(f),
        y.forEach(f),
        (Je = w(H)),
        (De = u(H, "SECTION", {}));
      var Et = g(De);
      X = u(Et, "DIV", { class: !0 });
      var Ae = g(X);
      (he = u(Ae, "DIV", { "data-svelte-h": !0 })),
        F(he) !== "svelte-1k7xhfw" && (he.innerHTML = vt),
        (Qe = w(Ae)),
        ee(K.$$.fragment, Ae),
        Ae.forEach(f),
        Et.forEach(f),
        H.forEach(f),
        (Te = w(c)),
        (R = u(c, "DIALOG", { class: !0 }));
      var Dt = g(R);
      W = u(Dt, "DIV", { class: !0 });
      var je = g(W);
      A = u(je, "DIV", { class: !0 });
      var ke = g(A);
      (oe = u(ke, "H4", { class: !0, "data-svelte-h": !0 })),
        F(oe) !== "svelte-1jx6x5f" && (oe.textContent = _t),
        (Ze = w(ke)),
        ee(ne.$$.fragment, ke),
        (et = w(ke)),
        (be = u(ke, "BUTTON", {}));
      var It = g(be);
      ee(ie.$$.fragment, It),
        It.forEach(f),
        ke.forEach(f),
        (tt = w(je)),
        (Y = u(je, "DIV", { class: !0 }));
      var Ge = g(Y);
      ce = u(Ge, "DIV", {});
      var Fe = g(ce);
      (j = u(Fe, "IMG", { class: !0, src: !0, alt: !0 })),
        (lt = w(Fe)),
        (O = u(Fe, "DIV", {}));
      var Q = g(O);
      G = u(Q, "DIV", { class: !0 });
      var Xe = g(G);
      ve = u(Xe, "P", { class: !0 });
      var Lt = g(ve);
      (ze = Ee(Lt, Ie)),
        Lt.forEach(f),
        (rt = w(Xe)),
        D && D.l(Xe),
        Xe.forEach(f),
        (at = w(Q)),
        (_e = u(Q, "P", { class: !0 }));
      var Mt = g(_e);
      (Ne = Ee(Mt, Le)),
        Mt.forEach(f),
        (st = w(Q)),
        I && I.l(Q),
        (Se = w(Q)),
        L && L.l(Q),
        Q.forEach(f),
        Fe.forEach(f),
        (it = w(Ge)),
        (xe = u(Ge, "DIV", { "data-svelte-h": !0 })),
        F(xe) !== "svelte-ae8p4g" && (xe.innerHTML = xt),
        Ge.forEach(f),
        je.forEach(f),
        Dt.forEach(f),
        this.h();
    },
    h() {
      (document.title = "About - Colosseum"),
        d(
          $,
          "class",
          "text-gray-1 xl:before:content-plus-detail-1 relative mb-4 text-[2.5rem] font-semibold leading-[3rem] xl:before:absolute xl:before:right-0 xl:before:top-0"
        ),
        d(P, "class", "text-gray-2 font-normal md:text-lg"),
        d(h, "class", "mb-10 text-center md:mb-16"),
        d(C, "class", "grid grid-cols-1 gap-6 sm:grid-cols-3"),
        d(
          z,
          "class",
          "flex flex-col gap-6 sm:flex-row sm:justify-center sm:gap-6 sm:[&>li]:w-[calc((100%-1.5rem)/3)]"
        ),
        d(N, "class", "mx-auto max-w-[296px] space-y-6 sm:max-w-4xl"),
        d(a, "class", "mb-20 sm:px-6 md:mb-40"),
        d(
          U,
          "class",
          "mx-auto mb-10 max-w-xs text-center md:mb-16 md:max-w-lg"
        ),
        d(
          ge,
          "class",
          "cols-1 mx-auto grid max-w-[277px] gap-4 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        ),
        d(S, "class", "mx-auto mb-20 max-w-6xl px-6 md:mb-36"),
        d(
          o,
          "class",
          "bg-grid-2 bg-contain bg-[position:50%_20%] bg-no-repeat"
        ),
        d(
          X,
          "class",
          "mx-auto mb-16 flex max-w-6xl flex-col items-start gap-4 px-6 md:mb-32 lg:flex-row lg:items-center lg:justify-between"
        ),
        d(l, "class", "font-tasa-orbiter-display"),
        d(oe, "class", "font-nb-architekt text-lg"),
        d(
          A,
          "class",
          "border-b-gray-12 bg-gray-10 flex items-center justify-between border-b px-4 py-3"
        ),
        d(j, "class", "mb-10 rounded-lg sm:max-w-[70%]"),
        Re(j.src, (Pe = n[1].imageUrl)) || d(j, "src", Pe),
        d(j, "alt", (Oe = n[1].name)),
        d(ve, "class", "text-mint-1 text-2xl font-medium"),
        d(G, "class", "flex items-center gap-3"),
        d(_e, "class", "text-lg"),
        d(Y, "class", "p-8"),
        d(
          W,
          "class",
          "border-gray-12 bg-gray-11 font-tasa-orbiter-display text-gray-2 relative border"
        ),
        d(
          R,
          "class",
          "backdrop:bg-gray-11 w-full max-w-md outline-none backdrop:bg-opacity-75"
        );
    },
    m(c, b) {
      T(c, e, b),
        T(c, l, b),
        i(l, t),
        i(l, s),
        i(l, o),
        i(o, p),
        i(p, a),
        i(a, h),
        te(k, h, null),
        i(h, _),
        i(h, $),
        i(h, q),
        i(h, P),
        i(a, ae),
        i(a, N),
        i(N, C),
        te(E, C, null),
        i(N, ue),
        i(N, z);
      for (let H = 0; H < v.length; H += 1) v[H] && v[H].m(z, null);
      i(o, pe),
        i(o, B),
        i(B, S),
        i(S, U),
        i(S, Ye),
        i(S, ge),
        te(se, ge, null),
        i(l, Je),
        i(l, De),
        i(De, X),
        i(X, he),
        i(X, Qe),
        te(K, X, null),
        T(c, Te, b),
        T(c, R, b),
        i(R, W),
        i(W, A),
        i(A, oe),
        i(A, Ze),
        te(ne, A, null),
        i(A, et),
        i(A, be),
        te(ie, be, null),
        i(W, tt),
        i(W, Y),
        i(Y, ce),
        i(ce, j),
        i(ce, lt),
        i(ce, O),
        i(O, G),
        i(G, ve),
        i(ve, ze),
        i(G, rt),
        D && D.m(G, null),
        i(O, at),
        i(O, _e),
        i(_e, Ne),
        i(O, st),
        I && I.m(O, null),
        i(O, Se),
        L && L.m(O, null),
        i(Y, it),
        i(Y, xe),
        n[7](R),
        (J = !0),
        ct || ((wt = At(be, "click", n[5])), (ct = !0));
    },
    p(c, [b]) {
      if (b & 8) {
        fe = We(c[3]);
        let y;
        for (y = 0; y < fe.length; y += 1) {
          const Me = Nt(c, fe, y);
          v[y]
            ? (v[y].p(Me, b), M(v[y], 1))
            : ((v[y] = St(Me)), v[y].c(), M(v[y], 1), v[y].m(z, null));
        }
        for (gt(), y = fe.length; y < v.length; y += 1) Xt(y);
        ht();
      }
      const H = {};
      b & 2048 && (H.$$scope = { dirty: b, ctx: c }),
        K.$set(H),
        (!J || (b & 2 && !Re(j.src, (Pe = c[1].imageUrl)))) && d(j, "src", Pe),
        (!J || (b & 2 && Oe !== (Oe = c[1].name))) && d(j, "alt", Oe),
        (!J || b & 2) && Ie !== (Ie = c[1].name + "") && Ve(ze, Ie),
        c[1].xHandle
          ? D
            ? D.p(c, b)
            : ((D = qt(c)), D.c(), D.m(G, null))
          : D && (D.d(1), (D = null)),
        (!J || b & 2) && Le !== (Le = c[1].designation + "") && Ve(Ne, Le),
        b & 2 && (ot = c[1].hasOwnProperty("platform")),
        ot
          ? I
            ? I.p(c, b)
            : ((I = Bt(c)), I.c(), I.m(O, Se))
          : I && (I.d(1), (I = null)),
        b & 2 && (nt = c[1].hasOwnProperty("description")),
        nt
          ? L
            ? L.p(c, b)
            : ((L = Ut(c)), L.c(), L.m(O, null))
          : L && (L.d(1), (L = null));
    },
    i(c) {
      if (!J) {
        M(k.$$.fragment, c), M(E.$$.fragment, c);
        for (let b = 0; b < fe.length; b += 1) M(v[b]);
        M(se.$$.fragment, c),
          M(K.$$.fragment, c),
          M(ne.$$.fragment, c),
          M(ie.$$.fragment, c),
          (J = !0);
      }
    },
    o(c) {
      V(k.$$.fragment, c), V(E.$$.fragment, c), (v = v.filter(Boolean));
      for (let b = 0; b < v.length; b += 1) V(v[b]);
      V(se.$$.fragment, c),
        V(K.$$.fragment, c),
        V(ne.$$.fragment, c),
        V(ie.$$.fragment, c),
        (J = !1);
    },
    d(c) {
      c && (f(e), f(l), f(Te), f(R)),
        le(k),
        le(E),
        jt(v, c),
        le(se),
        le(K),
        le(ne),
        le(ie),
        D && D.d(),
        I && I.d(),
        L && L.d(),
        n[7](null),
        (ct = !1),
        wt();
    },
  };
}
function dl(n, e, l) {
  let t, r;
  Ke(n, ye, (_) => l(6, (t = _))), Ke(n, dt, (_) => l(1, (r = _)));
  const { teamMembersL1: s, teamMembersL2: o, networkMembers: p } = el;
  let a;
  Rt(() => {
    a.addEventListener("keydown", (_) => {
      _.key === "Escape" && (a.close(), He(ye, (t = !1), t));
    }),
      a.addEventListener("click", (_) => {
        const $ = a.getBoundingClientRect();
        (_.clientX < $.left ||
          _.clientX > $.right ||
          _.clientY < $.top ||
          _.clientY > $.bottom) &&
          (a.close(), He(ye, (t = !1), t));
      });
  });
  const h = () => {
    a.close(), He(ye, (t = !1), t);
  };
  function k(_) {
    Jt[_ ? "unshift" : "push"](() => {
      (a = _), l(0, a);
    });
  }
  return (
    (n.$$.update = () => {
      n.$$.dirty & 65 && t && a.showModal();
    }),
    [a, r, s, o, p, h, t, k]
  );
}
class xl extends ut {
  constructor(e) {
    super(), pt(this, e, dl, fl, mt, {});
  }
}
export { xl as component };
