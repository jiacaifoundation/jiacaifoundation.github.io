import{aA as A,p,aB as E,j as f,aC as ge,g as P,aD as Ue,G as he,o as g,$ as je,as as Y,m as O,d as G,f as M,t as _,n as V,R as F,S as We,O as be,N as Ye,K as ee,I as te,ac as X,L as Xe,J as Ke,aE as Je,a0 as ye,Q as Qe,aF as Ze,E as pe,a6 as et,q as I,V as K,r as ne,aG as tt,aH as nt,aI as at,s as st,aJ as it,u as lt,w as ot,F as rt,aK as ut,aL as re,a4 as ct,a7 as Ce,a5 as dt,aM as ft,aN as ue,W as vt}from"./index-CsHsuNZz.js";import{f as mt,m as ke,a as we,c as J}from"./VImg-DxajwzGF.js";import{m as q,a as gt,u as ht}from"./dimensions-C4-qSBS3.js";const _e=["top","bottom"],bt=["start","end","left","right"];function yt(e,t){let[a,n]=e.split(" ");return n||(n=A(_e,a)?"start":A(bt,a)?"top":"center"),{side:ce(a,t),align:ce(n,t)}}function ce(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function an(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function sn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function ln(e){return{side:e.align,align:e.side}}function on(e){return A(_e,e.side)?"y":"x"}const Se=p({border:[Boolean,Number,String]},"border");function xe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{borderClasses:f(()=>{const n=ge(e)?e.value:e.border,s=[];if(n===!0||n==="")s.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const i of String(n).split(" "))s.push(`border-${i}`);return s})}}const Ie=p({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ee(e){return{elevationClasses:f(()=>{const a=ge(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const pt=p({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),U=P(!1)({name:"VDefaultsProvider",props:pt(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:s,reset:i,root:r,scoped:d}=Ue(e);return he(n,{reset:i,root:r,scoped:d,disabled:s}),()=>{var u;return(u=a.default)==null?void 0:u.call(a)}}}),Ct=[null,"default","comfortable","compact"],Pe=p({density:{type:String,default:"default",validator:e=>Ct.includes(e)}},"density");function Le(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{densityClasses:f(()=>`${t}--density-${e.density}`)}}const kt=["elevated","flat","tonal","outlined","text","plain"];function wt(e,t){return g(je,null,[e&&g("span",{key:"overlay",class:`${t}__overlay`},null),g("span",{key:"underlay",class:`${t}__underlay`},null)])}const Te=p({color:String,variant:{type:String,default:"elevated",validator:e=>kt.includes(e)}},"variant");function _t(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();const a=f(()=>{const{variant:i}=Y(e);return`${t}--variant-${i}`}),{colorClasses:n,colorStyles:s}=mt(f(()=>{const{variant:i,color:r}=Y(e);return{[["elevated","flat"].includes(i)?"background":"text"]:r}}));return{colorClasses:n,colorStyles:s,variantClasses:a}}const Be=p({baseColor:String,divided:Boolean,...Se(),...O(),...Pe(),...Ie(),...ke(),...q(),...G(),...Te()},"VBtnGroup"),de=P()({name:"VBtnGroup",props:Be(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=M(e),{densityClasses:s}=Le(e),{borderClasses:i}=xe(e),{elevationClasses:r}=Ee(e),{roundedClasses:d}=we(e);he({VBtn:{height:"auto",baseColor:_(e,"baseColor"),color:_(e,"color"),density:_(e,"density"),flat:!0,variant:_(e,"variant")}}),V(()=>g(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,i.value,s.value,r.value,d.value,e.class],style:e.style},a))}}),St=p({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),xt=p({value:null,disabled:Boolean,selectedClass:String},"group-item");function It(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=F("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=We();be(Symbol.for(`${t.description}:id`),s);const i=Ye(t,null);if(!i){if(!a)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const r=_(e,"value"),d=f(()=>!!(i.disabled.value||e.disabled));i.register({id:s,value:r,disabled:d},n),ee(()=>{i.unregister(s)});const u=f(()=>i.isSelected(s)),b=f(()=>i.items.value[0].id===s),y=f(()=>i.items.value[i.items.value.length-1].id===s),h=f(()=>u.value&&[i.selectedClass.value,e.selectedClass]);return te(u,l=>{n.emit("group:selected",{value:l})},{flush:"sync"}),{id:s,isSelected:u,isFirst:b,isLast:y,toggle:()=>i.select(s,!u.value),select:l=>i.select(s,l),selectedClass:h,value:r,disabled:d,group:i}}function Et(e,t){let a=!1;const n=X([]),s=Xe(e,"modelValue",[],l=>l==null?[]:Ve(n,Qe(l)),l=>{const c=Lt(n,l);return e.multiple?c:c[0]}),i=F("useGroup");function r(l,c){const v=l,o=Symbol.for(`${t.description}:id`),C=Ze(o,i==null?void 0:i.vnode).indexOf(c);Y(v.value)==null&&(v.value=C,v.useIndexAsValue=!0),C>-1?n.splice(C,0,v):n.push(v)}function d(l){if(a)return;u();const c=n.findIndex(v=>v.id===l);n.splice(c,1)}function u(){const l=n.find(c=>!c.disabled);l&&e.mandatory==="force"&&!s.value.length&&(s.value=[l.id])}Ke(()=>{u()}),ee(()=>{a=!0}),Je(()=>{for(let l=0;l<n.length;l++)n[l].useIndexAsValue&&(n[l].value=l)});function b(l,c){const v=n.find(o=>o.id===l);if(!(c&&(v!=null&&v.disabled)))if(e.multiple){const o=s.value.slice(),m=o.findIndex(S=>S===l),C=~m;if(c=c??!C,C&&e.mandatory&&o.length<=1||!C&&e.max!=null&&o.length+1>e.max)return;m<0&&c?o.push(l):m>=0&&!c&&o.splice(m,1),s.value=o}else{const o=s.value.includes(l);if(e.mandatory&&o)return;s.value=c??!o?[l]:[]}}function y(l){if(e.multiple,s.value.length){const c=s.value[0],v=n.findIndex(C=>C.id===c);let o=(v+l)%n.length,m=n[o];for(;m.disabled&&o!==v;)o=(o+l)%n.length,m=n[o];if(m.disabled)return;s.value=[n[o].id]}else{const c=n.find(v=>!v.disabled);c&&(s.value=[c.id])}}const h={register:r,unregister:d,selected:s,select:b,disabled:_(e,"disabled"),prev:()=>y(n.length-1),next:()=>y(1),isSelected:l=>s.value.includes(l),selectedClass:f(()=>e.selectedClass),items:f(()=>n),getItemIndex:l=>Pt(n,l)};return be(t,h),h}function Pt(e,t){const a=Ve(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Ve(e,t){const a=[];return t.forEach(n=>{const s=e.find(r=>ye(n,r.value)),i=e[n];(s==null?void 0:s.value)!=null?a.push(s.id):i!=null&&a.push(i.id)}),a}function Lt(e,t){const a=[];return t.forEach(n=>{const s=e.findIndex(i=>i.id===n);if(~s){const i=e[s];a.push(i.value!=null?i.value:s)}}),a}const $e=Symbol.for("vuetify:v-btn-toggle"),Tt=p({...Be(),...St()},"VBtnToggle");P()({name:"VBtnToggle",props:Tt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:s,prev:i,select:r,selected:d}=Et(e,$e);return V(()=>{const u=de.filterProps(e);return g(de,pe({class:["v-btn-toggle",e.class]},u,{style:e.style}),{default:()=>{var b;return[(b=a.default)==null?void 0:b.call(a,{isSelected:n,next:s,prev:i,select:r,selected:d})]}})}),{next:s,prev:i,select:r}}});const Bt=["x-small","small","default","large","x-large"],ae=p({size:{type:[String,Number],default:"default"}},"size");function se(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return et(()=>{let a,n;return A(Bt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:I(e.size),height:I(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Vt=p({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:K,...O(),...ae(),...q({tag:"i"}),...G()},"VIcon"),j=P()({name:"VIcon",props:Vt(),setup(e,t){let{attrs:a,slots:n}=t;const s=ne(),{themeClasses:i}=M(e),{iconData:r}=tt(f(()=>s.value||e.icon)),{sizeClasses:d}=se(e),{textColorClasses:u,textColorStyles:b}=J(_(e,"color"));return V(()=>{var l,c;const y=(l=n.default)==null?void 0:l.call(n);y&&(s.value=(c=nt(y).filter(v=>v.type===at&&v.children&&typeof v.children=="string")[0])==null?void 0:c.children);const h=!!(a.onClick||a.onClickOnce);return g(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",i.value,d.value,u.value,{"v-icon--clickable":h,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[d.value?void 0:{fontSize:I(e.size),height:I(e.size),width:I(e.size)},b.value,e.style],role:h?"button":void 0,"aria-hidden":!h,tabindex:h?e.disabled?-1:0:void 0},{default:()=>[y]})}),{}}});function $t(e,t){const a=ne(),n=st(!1);if(it){const s=new IntersectionObserver(i=>{n.value=!!i.find(r=>r.isIntersecting)},t);ee(()=>{s.disconnect()}),te(a,(i,r)=>{r&&(s.unobserve(r),n.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const Rt=p({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...O(),...ae(),...q({tag:"div"}),...G()},"VProgressCircular"),Nt=P()({name:"VProgressCircular",props:Rt(),setup(e,t){let{slots:a}=t;const n=20,s=2*Math.PI*n,i=ne(),{themeClasses:r}=M(e),{sizeClasses:d,sizeStyles:u}=se(e),{textColorClasses:b,textColorStyles:y}=J(_(e,"color")),{textColorClasses:h,textColorStyles:l}=J(_(e,"bgColor")),{intersectionRef:c,isIntersecting:v}=$t(),{resizeRef:o,contentRect:m}=lt(),C=f(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),S=f(()=>Number(e.width)),$=f(()=>u.value?Number(e.size):m.value?m.value.width:Math.max(S.value,32)),L=f(()=>n/(1-S.value/$.value)*2),R=f(()=>S.value/$.value*L.value),H=f(()=>I((100-C.value)/100*s));return ot(()=>{c.value=i.value,o.value=i.value}),V(()=>g(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":v.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},r.value,d.value,b.value,e.class],style:[u.value,y.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:C.value},{default:()=>[g("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${L.value} ${L.value}`},[g("circle",{class:["v-progress-circular__underlay",h.value],style:l.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":R.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),g("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":R.value,"stroke-dasharray":s,"stroke-dashoffset":H.value},null)]),a.default&&g("div",{class:"v-progress-circular__content"},[a.default({value:C.value})])]})),{}}}),fe={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},zt=p({location:String},"location");function At(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=rt();return{locationStyles:f(()=>{if(!e.location)return{};const{side:i,align:r}=yt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function d(b){return a?a(b):0}const u={};return i!=="center"&&(t?u[fe[i]]=`calc(100% - ${d(i)}px)`:u[i]=0),r!=="center"?t?u[fe[r]]=`calc(100% - ${d(r)}px)`:u[r]=0:(i==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),u})}}const Dt=p({loading:[Boolean,String]},"loader");function Ot(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{loaderClasses:f(()=>({[`${t}--loading`]:e.loading}))}}const Gt=["static","relative","fixed","absolute","sticky"],Mt=p({position:{type:String,validator:e=>Gt.includes(e)}},"position");function Ft(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{positionClasses:f(()=>e.position?`${t}--${e.position}`:void 0)}}function qt(){const e=F("useRoute");return f(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function rn(){var e,t;return(t=(e=F("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Ht(e,t){var h,l;const a=ut("RouterLink"),n=f(()=>!!(e.href||e.to)),s=f(()=>(n==null?void 0:n.value)||re(t,"click")||re(e,"click"));if(typeof a=="string"||!("useLink"in a)){const c=_(e,"href");return{isLink:n,isClickable:s,href:c,linkProps:X({href:c})}}const i=f(()=>({...e,to:_(()=>e.to||"")})),r=a.useLink(i.value),d=f(()=>e.to?r:void 0),u=qt(),b=f(()=>{var c,v,o;return d.value?e.exact?u.value?((o=d.value.isExactActive)==null?void 0:o.value)&&ye(d.value.route.value.query,u.value.query):((v=d.value.isExactActive)==null?void 0:v.value)??!1:((c=d.value.isActive)==null?void 0:c.value)??!1:!1}),y=f(()=>{var c;return e.to?(c=d.value)==null?void 0:c.route.value.href:e.href});return{isLink:n,isClickable:s,isActive:b,route:(h=d.value)==null?void 0:h.route,navigate:(l=d.value)==null?void 0:l.navigate,href:y,linkProps:X({href:y,"aria-current":f(()=>b.value?"page":void 0)})}}const Ut=p({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let W=!1;function un(e,t){let a=!1,n,s;ct&&(Ce(()=>{window.addEventListener("popstate",i),n=e==null?void 0:e.beforeEach((r,d,u)=>{W?a?t(u):u():setTimeout(()=>a?t(u):u()),W=!0}),s=e==null?void 0:e.afterEach(()=>{W=!1})}),dt(()=>{window.removeEventListener("popstate",i),n==null||n(),s==null||s()}));function i(r){var d;(d=r.state)!=null&&d.replaced||(a=!0,setTimeout(()=>a=!1))}}function jt(e,t){te(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&Ce(()=>{t(!0)})},{immediate:!0})}const Q=Symbol("rippleStop"),Wt=80;function ve(e,t){e.style.transform=t,e.style.webkitTransform=t}function Z(e){return e.constructor.name==="TouchEvent"}function Re(e){return e.constructor.name==="KeyboardEvent"}const Yt=function(e,t){var h;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,s=0;if(!Re(e)){const l=t.getBoundingClientRect(),c=Z(e)?e.touches[e.touches.length-1]:e;n=c.clientX-l.left,s=c.clientY-l.top}let i=0,r=.3;(h=t._ripple)!=null&&h.circle?(r=.15,i=t.clientWidth/2,i=a.center?i:i+Math.sqrt((n-i)**2+(s-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const d=`${(t.clientWidth-i*2)/2}px`,u=`${(t.clientHeight-i*2)/2}px`,b=a.center?d:`${n-i}px`,y=a.center?u:`${s-i}px`;return{radius:i,scale:r,x:b,y,centerX:d,centerY:u}},D={show(e,t){var c;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((c=t==null?void 0:t._ripple)!=null&&c.enabled))return;const n=document.createElement("span"),s=document.createElement("span");n.appendChild(s),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:i,scale:r,x:d,y:u,centerX:b,centerY:y}=Yt(e,t,a),h=`${i*2}px`;s.className="v-ripple__animation",s.style.width=h,s.style.height=h,t.appendChild(n);const l=window.getComputedStyle(t);l&&l.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),ve(s,`translate(${d}, ${u}) scale3d(${r},${r},${r})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),ve(s,`translate(${b}, ${y}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),s=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var d;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((d=a.parentNode)==null?void 0:d.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function Ne(e){return typeof e>"u"||!!e}function T(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[Q])){if(e[Q]=!0,Z(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||Re(e),a._ripple.class&&(t.class=a._ripple.class),Z(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{D.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},Wt)}else D.show(e,a,t)}}function me(e){e[Q]=!0}function k(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{k(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),D.hide(t)}}function ze(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let B=!1;function Ae(e){!B&&(e.keyCode===ue.enter||e.keyCode===ue.space)&&(B=!0,T(e))}function De(e){B=!1,k(e)}function Oe(e){B&&(B=!1,k(e))}function Ge(e,t,a){const{value:n,modifiers:s}=t,i=Ne(n);if(i||D.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,ft(n)&&n.class&&(e._ripple.class=n.class),i&&!a){if(s.stop){e.addEventListener("touchstart",me,{passive:!0}),e.addEventListener("mousedown",me);return}e.addEventListener("touchstart",T,{passive:!0}),e.addEventListener("touchend",k,{passive:!0}),e.addEventListener("touchmove",ze,{passive:!0}),e.addEventListener("touchcancel",k),e.addEventListener("mousedown",T),e.addEventListener("mouseup",k),e.addEventListener("mouseleave",k),e.addEventListener("keydown",Ae),e.addEventListener("keyup",De),e.addEventListener("blur",Oe),e.addEventListener("dragstart",k,{passive:!0})}else!i&&a&&Me(e)}function Me(e){e.removeEventListener("mousedown",T),e.removeEventListener("touchstart",T),e.removeEventListener("touchend",k),e.removeEventListener("touchmove",ze),e.removeEventListener("touchcancel",k),e.removeEventListener("mouseup",k),e.removeEventListener("mouseleave",k),e.removeEventListener("keydown",Ae),e.removeEventListener("keyup",De),e.removeEventListener("dragstart",k),e.removeEventListener("blur",Oe)}function Xt(e,t){Ge(e,t,!1)}function Kt(e){delete e._ripple,Me(e)}function Jt(e,t){if(t.value===t.oldValue)return;const a=Ne(t.oldValue);Ge(e,t,a)}const Qt={mounted:Xt,unmounted:Kt,updated:Jt},Zt=p({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:$e},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:K,appendIcon:K,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Se(),...O(),...Pe(),...gt(),...Ie(),...xt(),...Dt(),...zt(),...Mt(),...ke(),...Ut(),...ae(),...q({tag:"button"}),...G(),...Te({variant:"elevated"})},"VBtn"),cn=P()({name:"VBtn",props:Zt(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:s}=M(e),{borderClasses:i}=xe(e),{densityClasses:r}=Le(e),{dimensionStyles:d}=ht(e),{elevationClasses:u}=Ee(e),{loaderClasses:b}=Ot(e),{locationStyles:y}=At(e),{positionClasses:h}=Ft(e),{roundedClasses:l}=we(e),{sizeClasses:c,sizeStyles:v}=se(e),o=It(e,e.symbol,!1),m=Ht(e,a),C=f(()=>{var w;return e.active!==void 0?e.active:m.isLink.value?(w=m.isActive)==null?void 0:w.value:o==null?void 0:o.isSelected.value}),S=f(()=>C.value?e.activeColor??e.color:e.color),$=f(()=>{var x,z;return{color:(o==null?void 0:o.isSelected.value)&&(!m.isLink.value||((x=m.isActive)==null?void 0:x.value))||!o||((z=m.isActive)==null?void 0:z.value)?S.value??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:L,colorStyles:R,variantClasses:H}=_t($),N=f(()=>(o==null?void 0:o.disabled.value)||e.disabled),Fe=f(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),qe=f(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function He(w){var x;N.value||m.isLink.value&&(w.metaKey||w.ctrlKey||w.shiftKey||w.button!==0||a.target==="_blank")||((x=m.navigate)==null||x.call(m,w),o==null||o.toggle())}return jt(m,o==null?void 0:o.select),V(()=>{const w=m.isLink.value?"a":e.tag,x=!!(e.prependIcon||n.prepend),z=!!(e.appendIcon||n.append),ie=!!(e.icon&&e.icon!==!0);return vt(g(w,pe({type:w==="a"?void 0:"button",class:["v-btn",o==null?void 0:o.selectedClass.value,{"v-btn--active":C.value,"v-btn--block":e.block,"v-btn--disabled":N.value,"v-btn--elevated":Fe.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,i.value,L.value,r.value,u.value,b.value,h.value,l.value,c.value,H.value,e.class],style:[R.value,d.value,y.value,v.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:N.value||void 0,tabindex:e.loading||e.readonly?-1:void 0,onClick:He,value:qe.value},m.linkProps),{default:()=>{var le;return[wt(!0,"v-btn"),!e.icon&&x&&g("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?g(U,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):g(j,{key:"prepend-icon",icon:e.prependIcon},null)]),g("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&ie?g(j,{key:"content-icon",icon:e.icon},null):g(U,{key:"content-defaults",disabled:!ie,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var oe;return[((oe=n.default)==null?void 0:oe.call(n))??e.text]}})]),!e.icon&&z&&g("span",{key:"append",class:"v-btn__append"},[n.append?g(U,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):g(j,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&g("span",{key:"loader",class:"v-btn__loader"},[((le=n.loader)==null?void 0:le.call(n))??g(Nt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[Qt,!N.value&&e.ripple,"",{center:!!e.icon}]])}),{group:o}}});export{$t as A,Et as B,xt as C,It as D,Qt as R,U as V,Ie as a,Ee as b,Zt as c,cn as d,Pe as e,ae as f,Te as g,_t as h,Le as i,se as j,j as k,wt as l,Se as m,Ut as n,Ht as o,yt as p,an as q,sn as r,ln as s,on as t,xe as u,rn as v,un as w,ce as x,zt as y,At as z};
