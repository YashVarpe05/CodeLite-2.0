import {
  s as d,
  l as g,
  e as x,
  c as p,
  b as _,
  f,
  m as u,
  i as b,
  u as y,
  o as k,
  p as w,
  z as h,
  A as c,
} from "./scheduler.3d7b914d.js";
import { S as v, i as T, t as A, b as L } from "./index.866787e6.js";
import { c as m } from "./style.e74a0575.js";
function S(s) {
  let e, o, a;
  const r = s[5].default,
    n = g(r, s, s[4], null);
  return {
    c() {
      (e = x("a")), n && n.c(), this.h();
    },
    l(t) {
      e = p(t, "A", { class: !0, href: !0 });
      var i = _(e);
      n && n.l(i), i.forEach(f), this.h();
    },
    h() {
      u(
        e,
        "class",
        (o = m(
          "font-nb-architekt rounded-[4px] uppercase",
          s[0] === "green"
            ? "bg-green-2 text-green-1 focus-within:outline-green-1 outline-none transition-all duration-300 ease-in-out focus-within:outline-offset-2 focus-within:brightness-150 hover:brightness-150"
            : "bg-gray-1 text-gray-10 outline-none transition-all duration-300 ease-in-out focus-within:outline-offset-2 focus-within:outline-white hover:contrast-75 focus-within:hover:contrast-75",
          s[1] === "header"
            ? "px-3 py-2 text-[12px] md:px-5 md:py-3 md:text-[14px]"
            : "px-4 py-3 text-[14px] md:px-7 md:py-4 md:text-[18px]",
          s[3].class
        ))
      ),
        u(e, "href", s[2]);
    },
    m(t, i) {
      b(t, e, i), n && n.m(e, null), (a = !0);
    },
    p(t, [i]) {
      n &&
        n.p &&
        (!a || i & 16) &&
        y(n, r, t, t[4], a ? w(r, t[4], i, null) : k(t[4]), null),
        (!a ||
          (i & 11 &&
            o !==
              (o = m(
                "font-nb-architekt rounded-[4px] uppercase",
                t[0] === "green"
                  ? "bg-green-2 text-green-1 focus-within:outline-green-1 outline-none transition-all duration-300 ease-in-out focus-within:outline-offset-2 focus-within:brightness-150 hover:brightness-150"
                  : "bg-gray-1 text-gray-10 outline-none transition-all duration-300 ease-in-out focus-within:outline-offset-2 focus-within:outline-white hover:contrast-75 focus-within:hover:contrast-75",
                t[1] === "header"
                  ? "px-3 py-2 text-[12px] md:px-5 md:py-3 md:text-[14px]"
                  : "px-4 py-3 text-[14px] md:px-7 md:py-4 md:text-[18px]",
                t[3].class
              )))) &&
          u(e, "class", o),
        (!a || i & 4) && u(e, "href", t[2]);
    },
    i(t) {
      a || (A(n, t), (a = !0));
    },
    o(t) {
      L(n, t), (a = !1);
    },
    d(t) {
      t && f(e), n && n.d(t);
    },
  };
}
function q(s, e, o) {
  let { $$slots: a = {}, $$scope: r } = e,
    { theme: n = "default" } = e,
    { placement: t = null } = e,
    { linkTo: i = "#" } = e;
  return (
    (s.$$set = (l) => {
      o(3, (e = h(h({}, e), c(l)))),
        "theme" in l && o(0, (n = l.theme)),
        "placement" in l && o(1, (t = l.placement)),
        "linkTo" in l && o(2, (i = l.linkTo)),
        "$$scope" in l && o(4, (r = l.$$scope));
    }),
    (e = c(e)),
    [n, t, i, e, r, a]
  );
}
class j extends v {
  constructor(e) {
    super(), T(this, e, q, S, d, { theme: 0, placement: 1, linkTo: 2 });
  }
}
export { j as L };
