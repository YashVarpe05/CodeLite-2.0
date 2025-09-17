import {
  s as v,
  e as l,
  c as f,
  b as g,
  f as h,
  C as c,
  m as s,
  i as u,
  h as d,
  n as m,
} from "./scheduler.3d7b914d.js";
import { S as b, i as p } from "./index.866787e6.js";
function _(n) {
  let e, r, a, o;
  return {
    c() {
      (e = l("div")), (r = l("img")), this.h();
    },
    l(t) {
      e = f(t, "DIV", { class: !0 });
      var i = g(e);
      (r = f(i, "IMG", { src: !0, alt: !0 })), i.forEach(h), this.h();
    },
    h() {
      c(r.src, (a = n[0].imageUrl)) || s(r, "src", a),
        s(r, "alt", (o = n[0].name)),
        s(
          e,
          "class",
          "border-gray-8 bg-gray-13 bg-grid-1 outline-gray-9 hover:border-gray-7 hover:before:content-right-angle hover:after:border-gray-8 hover:after:content-right-angle relative flex h-28 items-center justify-center rounded-lg border bg-opacity-50 bg-center bg-no-repeat p-4 opacity-80 outline outline-2 -outline-offset-[6px] hover:bg-transparent hover:opacity-100 hover:outline-none hover:before:absolute hover:before:bottom-1 hover:before:left-3 hover:before:rotate-180 hover:after:absolute hover:after:flex hover:after:h-[calc(100%-0.4rem)] hover:after:w-[calc(100%-0.5rem)] hover:after:items-start hover:after:justify-end hover:after:rounded-lg hover:after:border hover:after:pr-2"
        );
    },
    m(t, i) {
      u(t, e, i), d(e, r);
    },
    p(t, [i]) {
      i & 1 && !c(r.src, (a = t[0].imageUrl)) && s(r, "src", a),
        i & 1 && o !== (o = t[0].name) && s(r, "alt", o);
    },
    i: m,
    o: m,
    d(t) {
      t && h(e);
    },
  };
}
function y(n, e, r) {
  let { item: a } = e;
  return (
    (n.$$set = (o) => {
      "item" in o && r(0, (a = o.item));
    }),
    [a]
  );
}
class j extends b {
  constructor(e) {
    super(), p(this, e, y, _, v, { item: 0 });
  }
}
export { j as I };
