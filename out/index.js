// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

function $() {}
function _t(t) {
    return t();
}
function st() {
    return Object.create(null);
}
function O(t) {
    t.forEach(_t);
}
function N(t) {
    return typeof t == "function";
}
function ve(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Et(t) {
    return Object.keys(t).length === 0;
}
new Set;
var tt = !1;
function Jt() {
    tt = !0;
}
function Kt() {
    tt = !1;
}
function Qt(t, e, n, i) {
    for(; t < e;){
        let r = t + (e - t >> 1);
        n(r) <= i ? t = r + 1 : e = r;
    }
    return t;
}
function Xt(t) {
    if (t.hydrate_init) return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
        let c = [];
        for(let u = 0; u < e.length; u++){
            let d = e[u];
            d.claim_order !== void 0 && c.push(d);
        }
        e = c;
    }
    let n = new Int32Array(e.length + 1), i = new Int32Array(e.length);
    n[0] = -1;
    let r = 0;
    for(let c3 = 0; c3 < e.length; c3++){
        let u = e[c3].claim_order, d = (r > 0 && e[n[r]].claim_order <= u ? r + 1 : Qt(1, r, (a)=>e[n[a]].claim_order
        , u)) - 1;
        i[c3] = n[d] + 1;
        let f = d + 1;
        n[f] = c3, r = Math.max(f, r);
    }
    let o = [], s = [], l = e.length - 1;
    for(let c1 = n[r] + 1; c1 != 0; c1 = i[c1 - 1]){
        for(o.push(e[c1 - 1]); l >= c1; l--)s.push(e[l]);
        l--;
    }
    for(; l >= 0; l--)s.push(e[l]);
    o.reverse(), s.sort((c, u)=>c.claim_order - u.claim_order
    );
    for(let c2 = 0, u1 = 0; c2 < s.length; c2++){
        for(; u1 < o.length && s[c2].claim_order >= o[u1].claim_order;)u1++;
        let d = u1 < o.length ? o[u1] : null;
        t.insertBefore(s[c2], d);
    }
}
function ht(t, e) {
    t.appendChild(e);
}
function Ct(t, e) {
    if (tt) {
        for(Xt(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentElement !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;)t.actual_end_child = t.actual_end_child.nextSibling;
        e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling;
    } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function jt(t, e, n) {
    t.insertBefore(e, n || null);
}
function Nt(t, e, n) {
    tt && !n ? Ct(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function M(t) {
    t.parentNode.removeChild(t);
}
function B(t) {
    return document.createElement(t);
}
function Tt(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function mt(t) {
    return document.createTextNode(t);
}
function Ye() {
    return mt(" ");
}
function ot(t, e, n, i) {
    return t.addEventListener(e, n, i), ()=>t.removeEventListener(e, n, i)
    ;
}
function te(t) {
    return Array.from(t.childNodes);
}
function an(t, e) {
    e = "" + e, t.wholeText !== e && (t.data = e);
}
var ct = class {
    constructor(e = !1){
        this.is_svg = !1, this.is_svg = e, this.e = this.n = null;
    }
    c(e) {
        this.h(e);
    }
    m(e, n, i = null) {
        this.e || (this.is_svg ? this.e = Tt(n.nodeName) : this.e = B(n.nodeName), this.t = n, this.c(e)), this.i(i);
    }
    h(e) {
        this.e.innerHTML = e, this.n = Array.from(this.e.childNodes);
    }
    i(e) {
        for(let n = 0; n < this.n.length; n += 1)jt(this.t, this.n[n], e);
    }
    p(e) {
        this.d(), this.h(e), this.i(this.a);
    }
    d() {
        this.n.forEach(M);
    }
}, V = class extends ct {
    constructor(e, n = !1){
        super(n), this.e = this.n = null, this.l = e;
    }
    c(e) {
        this.l ? this.n = this.l : super.c(e);
    }
    i(e) {
        for(let n = 0; n < this.n.length; n += 1)Nt(this.t, this.n[n], e);
    }
};
new Map;
var C;
function v(t) {
    C = t;
}
var R = [], xt = [], Y = [], lt = [], Pt = Promise.resolve(), ut = !1;
function Bt() {
    ut || (ut = !0, Pt.then(gt));
}
function j(t) {
    Y.push(t);
}
var it = new Set, G = 0;
function gt() {
    let t = C;
    do {
        for(; G < R.length;){
            let e = R[G];
            G++, v(e), ce(e.$$);
        }
        for(v(null), R.length = 0, G = 0; xt.length;)xt.pop()();
        for(let e = 0; e < Y.length; e += 1){
            let n = Y[e];
            it.has(n) || (it.add(n), n());
        }
        Y.length = 0;
    }while (R.length)
    for(; lt.length;)lt.pop()();
    ut = !1, it.clear(), v(t);
}
function ce(t) {
    if (t.fragment !== null) {
        t.update(), O(t.before_update);
        let e = t.dirty;
        t.dirty = [
            -1
        ], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(j);
    }
}
var U = new Set;
function Ft(t, e) {
    t && t.i && (U.delete(t), t.i(e));
}
new Set([
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
]);
function be(t, e, n, i) {
    let { fragment: r , on_mount: o , on_destroy: s , after_update: l  } = t.$$;
    r && r.m(e, n), i || j(()=>{
        let c = o.map(_t).filter(N);
        s ? s.push(...c) : O(c), t.$$.on_mount = [];
    }), l.forEach(j);
}
function Wt(t, e) {
    let n = t.$$;
    n.fragment !== null && (O(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Fe(t, e) {
    t.$$.dirty[0] === -1 && (R.push(t), Bt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ui(t, e, n, i, r, o, s, l = [
    -1
]) {
    let c = C;
    v(t);
    let u = t.$$ = {
        fragment: null,
        ctx: null,
        props: o,
        update: $,
        not_equal: r,
        bound: st(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (c ? c.$$.context : [])),
        callbacks: st(),
        dirty: l,
        skip_bound: !1,
        root: e.target || c.$$.root
    };
    s && s(u.root);
    let d = !1;
    if (u.ctx = n ? n(t, e.props || {}, (f, a, ..._)=>{
        let h = _.length ? _[0] : a;
        return u.ctx && r(u.ctx[f], u.ctx[f] = h) && (!u.skip_bound && u.bound[f] && u.bound[f](h), d && Fe(t, f)), a;
    }) : [], u.update(), d = !0, O(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
        if (e.hydrate) {
            Jt();
            let f = te(e.target);
            u.fragment && u.fragment.l(f), f.forEach(M);
        } else u.fragment && u.fragment.c();
        e.intro && Ft(t.$$.fragment), be(t, e.target, e.anchor, e.customElement), Kt(), gt();
    }
    v(c);
}
var $e;
typeof HTMLElement == "function" && ($e = class extends HTMLElement {
    constructor(){
        super(), this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        let { on_mount: t  } = this.$$;
        this.$$.on_disconnect = t.map(_t).filter(N);
        for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e]);
    }
    attributeChangedCallback(t, e, n) {
        this[t] = n;
    }
    disconnectedCallback() {
        O(this.$$.on_disconnect);
    }
    $destroy() {
        Wt(this, 1), this.$destroy = $;
    }
    $on(t, e) {
        let n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return n.push(e), ()=>{
            let i = n.indexOf(e);
            i !== -1 && n.splice(i, 1);
        };
    }
    $set(t) {
        this.$$set && !Et(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
    }
});
var ft = class {
    $destroy() {
        Wt(this, 1), this.$destroy = $;
    }
    $on(e, n) {
        let i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return i.push(n), ()=>{
            let r = i.indexOf(n);
            r !== -1 && i.splice(r, 1);
        };
    }
    $set(e) {
        this.$$set && !Et(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
    }
};
var dt = class extends ft {
    constructor(e){
        if (!e || !e.target && !e.$$inline) throw new Error("'target' is a required option");
        super();
    }
    $destroy() {
        super.$destroy(), this.$destroy = ()=>{
            console.warn("Component was already destroyed");
        };
    }
    $capture_state() {}
    $inject_state() {}
}, kt = class extends dt {
    constructor(e){
        super(e);
    }
};
function create_fragment(ctx1) {
    let button;
    let t0;
    let t1;
    let t2;
    let t3_value = (ctx1[0] === 1 ? 'time' : 'times') + "";
    let t3;
    let mounted;
    let dispose;
    return {
        c () {
            button = B("button");
            t0 = mt("Clicked ");
            t1 = mt(ctx1[0]);
            t2 = Ye();
            t3 = mt(t3_value);
        },
        m (target, anchor) {
            jt(target, button, anchor);
            ht(button, t0);
            ht(button, t1);
            ht(button, t2);
            ht(button, t3);
            if (!mounted) {
                dispose = ot(button, "click", ctx1[1]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (dirty & 1) an(t1, ctx[0]);
            if (dirty & 1 && t3_value !== (t3_value = (ctx[0] === 1 ? 'time' : 'times') + "")) an(t3, t3_value);
        },
        i: $,
        o: $,
        d (detaching) {
            if (detaching) M(button);
            mounted = false;
            dispose();
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let count = 0;
    function handleClick() {
        $$invalidate(0, count += 1);
    }
    return [
        count,
        handleClick
    ];
}
class Component extends ft {
    constructor(options){
        super();
        ui(this, options, instance, create_fragment, ve, {});
    }
}
var app = new Component({
    target: document.body
});
export { app as default };
