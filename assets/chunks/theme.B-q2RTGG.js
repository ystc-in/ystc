const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.BqCcqij5.js","assets/chunks/framework.Dl43PoGR.js"])))=>i.map(i=>d[i]);
import{d as j,c as k,r as C,n as ne,o as y,a as rt,t as G,b as H,w as V,T as oo,e as M,_ as U,u as an,i as vd,f as yd,g as Dr,h as Q,j as P,k as w,l as Xt,m as rc,p as je,q as Ed,s as ao,v as Td,x as K,y as Lr,z as it,A as co,B as lo,C as ys,D as Es,E as ic,F as Al,G as oe,H as Ie,I as cn,J as x,K as tt,L as Pl,M as Nt,N as Or,O as uo,P as Id,Q as Ni,R as ho,S as fo,U as wd,V as bd,W as Ad,X as Sl,Y as po,Z as Pd,$ as Sd,a0 as kd,a1 as ts,a2 as Rd,a3 as kl,a4 as Cd,a5 as Vd,a6 as Nd,a7 as Di,a8 as oc,a9 as Dd}from"./framework.Dl43PoGR.js";const Ld=j({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(n){return(e,t)=>(y(),k("span",{class:ne(["VPBadge",e.type])},[C(e.$slots,"default",{},()=>[rt(G(e.text),1)])],2))}}),Od={key:0,class:"VPBackdrop"},Md=j({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(e,t)=>(y(),H(oo,{name:"fade"},{default:V(()=>[e.show?(y(),k("div",Od)):M("",!0)]),_:1}))}}),$d=U(Md,[["__scopeId","data-v-c79a1216"]]),ee=an;function Fd(n,e){let t,s=!1;return()=>{t&&clearTimeout(t),s?t=setTimeout(n,e):(n(),(s=!0)&&setTimeout(()=>s=!1,e))}}function Li(n){return n.startsWith("/")?n:`/${n}`}function mo(n){const{pathname:e,search:t,hash:s,protocol:r}=new URL(n,"http://a.com");if(vd(n)||n.startsWith("#")||!r.startsWith("http")||!yd(e))return n;const{site:o}=ee(),a=e.endsWith("/")||e.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${t}${s}`);return Dr(a)}function Ts({correspondingLink:n=!1}={}){const{site:e,localeIndex:t,page:s,theme:r,hash:o}=ee(),a=Q(()=>({label:e.value.locales[t.value]?.label,link:e.value.locales[t.value]?.link||(t.value==="root"?"/":`/${t.value}/`)}));return{localeLinks:Q(()=>Object.entries(e.value.locales).flatMap(([h,d])=>a.value.label===d.label?[]:{text:d.label,link:xd(d.link||(h==="root"?"/":`/${h}/`),r.value.i18nRouting!==!1&&n,s.value.relativePath.slice(a.value.link.length-1),!e.value.cleanUrls)+o.value})),currentLang:a}}function xd(n,e,t,s){return e?n.replace(/\/$/,"")+Li(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,s?".html":"")):n}const Ud={class:"NotFound"},Bd={class:"code"},jd={class:"title"},Hd={class:"quote"},qd={class:"action"},zd=["href","aria-label"],Wd=j({__name:"NotFound",setup(n){const{theme:e}=ee(),{currentLang:t}=Ts();return(s,r)=>(y(),k("div",Ud,[P("p",Bd,G(w(e).notFound?.code??"404"),1),P("h1",jd,G(w(e).notFound?.title??"PAGE NOT FOUND"),1),r[0]||(r[0]=P("div",{class:"divider"},null,-1)),P("blockquote",Hd,G(w(e).notFound?.quote??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),P("div",qd,[P("a",{class:"link",href:w(Dr)(w(e).notFound?.link??w(t).link),"aria-label":w(e).notFound?.linkLabel??"go to home"},G(w(e).notFound?.linkText??"Take me home"),9,zd)])]))}}),Gd=U(Wd,[["__scopeId","data-v-829df670"]]);function Rl(n,e){if(Array.isArray(n))return nr(n);if(n==null)return[];e=Li(e);const t=Object.keys(n).sort((r,o)=>o.split("/").length-r.split("/").length).find(r=>e.startsWith(Li(r))),s=t?n[t]:[];return Array.isArray(s)?nr(s):nr(s.items,s.base)}function Kd(n){const e=[];let t=0;for(const s in n){const r=n[s];if(r.items){t=e.push(r);continue}e[t]||e.push({items:[]}),e[t].items.push(r)}return e}function Qd(n){const e=[];function t(s){for(const r of s)r.text&&r.link&&e.push({text:r.text,link:r.link,docFooterText:r.docFooterText}),r.items&&t(r.items)}return t(n),e}function Oi(n,e){return Array.isArray(e)?e.some(t=>Oi(n,t)):Xt(n,e.link)?!0:e.items?Oi(n,e.items):!1}function nr(n,e){return[...n].map(t=>{const s={...t},r=s.base||e;return r&&s.link&&(s.link=r+s.link.replace(/^\//,r.endsWith("/")?"":"/")),s.items&&(s.items=nr(s.items,r)),s})}function Jd(){const{hasSidebar:n}=_t(),e=rc("(min-width: 960px)"),t=rc("(min-width: 1280px)");return{isAsideEnabled:Q(()=>!t.value&&!e.value?!1:n.value?t.value:e.value)}}const Xd=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Mi=[];function Cl(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function Yd(n){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const s=Number(t.tagName[1]);return{element:t,title:Zd(t),link:"#"+t.id,level:s}});return ef(e,n)}function Zd(n){let e="";for(const t of n.childNodes)if(t.nodeType===1){if(Xd.test(t.className))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function ef(n,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[s,r]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return sf(n,s,r)}function tf(n,e){const{isAsideEnabled:t}=Jd(),s=Fd(o,100);let r=null;je(()=>{requestAnimationFrame(o),window.addEventListener("scroll",s)}),Ed(()=>{a(location.hash)}),ao(()=>{window.removeEventListener("scroll",s)});function o(){if(!t.value)return;const l=window.scrollY,h=window.innerHeight,d=document.body.offsetHeight,_=Math.abs(l+h-d)<1,g=Mi.map(({element:L,link:F})=>({link:F,top:nf(L)})).filter(({top:L})=>!Number.isNaN(L)).sort((L,F)=>L.top-F.top);if(!g.length){a(null);return}if(l<1){a(null);return}if(_){a(g[g.length-1].link);return}let S=null;for(const{link:L,top:F}of g){if(F>l+Td()+4)break;S=L}a(S)}function a(l){r&&r.classList.remove("active"),l==null?r=null:r=n.value.querySelector(`a[href="${decodeURIComponent(l)}"]`);const h=r;h?(h.classList.add("active"),e.value.style.top=h.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function nf(n){let e=0;for(;n!==document.body;){if(n===null)return NaN;e+=n.offsetTop,n=n.offsetParent}return e}function sf(n,e,t){Mi.length=0;const s=[],r=[];return n.forEach(o=>{const a={...o,children:[]};let l=r[r.length-1];for(;l&&l.level>=a.level;)r.pop(),l=r[r.length-1];if(a.element.classList.contains("ignore-header")||l&&"shouldIgnore"in l){r.push({level:a.level,shouldIgnore:!0});return}a.level>t||a.level<e||(Mi.push({element:a.element,link:a.link}),l?l.children.push(a):s.push(a),r.push(a))}),s}const _n=K(!1);function rf(n){let e;Lr(()=>{e=_n.value?document.activeElement:void 0}),je(()=>{window.addEventListener("keyup",t)}),ao(()=>{window.removeEventListener("keyup",t)});function t(s){s.key==="Escape"&&_n.value&&(n(),e?.focus())}}function of(){function n(){_n.value=!0}function e(){_n.value=!1}function t(){_n.value?e():n()}return{isOpen:_n,open:n,close:e,toggle:t}}function af(n){const{page:e,hash:t}=ee(),s=K(!1),r=Q(()=>n.value.collapsed!=null),o=Q(()=>!!n.value.link),a=K(!1),l=()=>{a.value=Xt(e.value.relativePath,n.value.link)};it([e,n,t],l),je(l);const h=Q(()=>a.value?!0:n.value.items?Oi(e.value.relativePath,n.value.items):!1),d=Q(()=>!!(n.value.items&&n.value.items.length));Lr(()=>{s.value=!!(r.value&&n.value.collapsed)}),co(()=>{(a.value||h.value)&&(s.value=!1)});function _(){r.value&&(s.value=!s.value)}return{collapsed:s,collapsible:r,isLink:o,isActiveLink:a,hasActiveLink:h,hasChildren:d,toggle:_}}const $i=lo([]),ns=lo([]),Fi=lo(!1);function _t(){const{frontmatter:n,theme:e}=ee(),t=Q(()=>!!(n.value.isHome??n.value.layout==="home")),s=Q(()=>n.value.sidebar!==!1&&ns.value.length>0&&!t.value),r=Q(()=>s.value&&Fi.value),o=Q(()=>s.value?Kd(ns.value):[]),a=Q(()=>t.value?!1:n.value.aside!=null?!!n.value.aside:e.value.aside!==!1),l=Q(()=>a.value?n.value.aside==null?e.value.aside==="left":n.value.aside==="left":!1),h=Q(()=>$i.value.length>0);return{isHome:t,sidebar:ic(ns),sidebarGroups:o,hasSidebar:s,isSidebarEnabled:r,hasAside:a,leftAside:l,headers:ic($i),hasLocalNav:h}}function cf({closeSidebar:n}){const{frontmatter:e,page:t,theme:s}=ee();it(()=>[t.value.relativePath,s.value.sidebar],([o,a])=>{const l=a?Rl(a,o):[];JSON.stringify(l)!==JSON.stringify(ns.value)&&(ns.value=l)},{immediate:!0,deep:!0,flush:"sync"}),Al(()=>{$i.value=Yd(e.value.outline??s.value.outline)}),ys&&(Fi.value=window.innerWidth>=960,window.addEventListener("resize",()=>{Fi.value=window.innerWidth>=960},{passive:!0}));const r=Es();it(()=>r.path,n),rf(n)}const Vl=Symbol("layout-info"),lf=["href","title"],uf=j({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function e({target:t}){const s=t.href.split("#")[1];document.getElementById(decodeURIComponent(s))?.focus({preventScroll:!0})}return(t,s)=>{const r=cn("VPDocOutlineItem",!0);return y(),k("ul",{class:ne(["VPDocOutlineItem",t.root?"root":"nested"])},[(y(!0),k(oe,null,Ie(t.headers,({children:o,link:a,title:l})=>(y(),k("li",null,[P("a",{class:"outline-link",href:a,onClick:e,title:l},G(l),9,lf),o?.length?(y(),H(r,{key:0,headers:o},null,8,["headers"])):M("",!0)]))),256))],2)}}}),Nl=U(uf,[["__scopeId","data-v-2d0bdf9b"]]),hf={class:"content"},df={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},ff=j({__name:"VPDocAsideOutline",setup(n){const{theme:e}=ee(),t=K(),s=K(),{headers:r,hasLocalNav:o}=_t();return tf(t,s),(a,l)=>(y(),k("nav",{"aria-labelledby":"doc-outline-aria-label",class:ne(["VPDocAsideOutline",{"has-outline":w(o)}]),ref_key:"container",ref:t},[P("div",hf,[P("div",{class:"outline-marker",ref_key:"marker",ref:s},null,512),P("div",df,G(w(Cl)(w(e))),1),x(Nl,{headers:w(r),root:!0},null,8,["headers"])])],2))}}),pf=U(ff,[["__scopeId","data-v-60d5052e"]]),mf={class:"VPDocAsideCarbonAds"},gf=j({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const e=()=>null;return(t,s)=>(y(),k("div",mf,[x(w(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),_f={class:"VPDocAside"},vf=j({__name:"VPDocAside",setup(n){const{theme:e}=ee();return(t,s)=>(y(),k("div",_f,[C(t.$slots,"aside-top",{},void 0,!0),C(t.$slots,"aside-outline-before",{},void 0,!0),x(pf),C(t.$slots,"aside-outline-after",{},void 0,!0),s[0]||(s[0]=P("div",{class:"spacer"},null,-1)),C(t.$slots,"aside-ads-before",{},void 0,!0),w(e).carbonAds?(y(),H(gf,{key:0,"carbon-ads":w(e).carbonAds},null,8,["carbon-ads"])):M("",!0),C(t.$slots,"aside-ads-after",{},void 0,!0),C(t.$slots,"aside-bottom",{},void 0,!0)]))}}),yf=U(vf,[["__scopeId","data-v-3f215769"]]);function Ef(){const{theme:n,page:e}=ee();return Q(()=>{const{text:t="Edit this page",pattern:s=""}=n.value.editLink||{};let r;return typeof s=="function"?r=s(e.value):r=s.replace(/:path/g,e.value.filePath),{url:r,text:t}})}function Tf(){const{page:n,theme:e,frontmatter:t}=ee();return Q(()=>{const s=Rl(e.value.sidebar,n.value.relativePath),r=Qd(s),o=If(r,d=>d.link.replace(/[?#].*$/,"")),a=o.findIndex(d=>Xt(n.value.relativePath,d.link)),l=e.value.docFooter?.prev===!1&&!t.value.prev||t.value.prev===!1,h=e.value.docFooter?.next===!1&&!t.value.next||t.value.next===!1;return{prev:l?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??o[a-1]?.docFooterText??o[a-1]?.text,link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??o[a-1]?.link},next:h?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??o[a+1]?.docFooterText??o[a+1]?.text,link:(typeof t.value.next=="object"?t.value.next.link:void 0)??o[a+1]?.link}}})}function If(n,e){const t=new Set;return n.filter(s=>{const r=e(s);return t.has(r)?!1:t.add(r)})}const ze=j({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const e=n,t=Q(()=>e.tag??(e.href?"a":"span")),s=Q(()=>e.href&&Pl.test(e.href)||e.target==="_blank");return(r,o)=>(y(),H(tt(t.value),{class:ne(["VPLink",{link:r.href,"vp-external-link-icon":s.value,"no-icon":r.noIcon}]),href:r.href?w(mo)(r.href):void 0,target:r.target??(s.value?"_blank":void 0),rel:r.rel??(s.value?"noreferrer":void 0)},{default:V(()=>[C(r.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),wf={class:"VPLastUpdated"},bf=["datetime"],Af=j({__name:"VPDocFooterLastUpdated",setup(n){const{theme:e,page:t,lang:s}=ee(),r=Q(()=>new Date(t.value.lastUpdated)),o=Q(()=>r.value.toISOString()),a=K("");return je(()=>{Lr(()=>{a.value=new Intl.DateTimeFormat(e.value.lastUpdated?.formatOptions?.forceLocale?s.value:void 0,e.value.lastUpdated?.formatOptions??{dateStyle:"short",timeStyle:"short"}).format(r.value)})}),(l,h)=>(y(),k("p",wf,[rt(G(w(e).lastUpdated?.text||w(e).lastUpdatedText||"Last updated")+": ",1),P("time",{datetime:o.value},G(a.value),9,bf)]))}}),Pf=U(Af,[["__scopeId","data-v-e98dd255"]]),Sf={key:0,class:"VPDocFooter"},kf={key:0,class:"edit-info"},Rf={key:0,class:"edit-link"},Cf={key:1,class:"last-updated"},Vf={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Nf={class:"pager"},Df=["innerHTML"],Lf=["innerHTML"],Of={class:"pager"},Mf=["innerHTML"],$f=["innerHTML"],Ff=j({__name:"VPDocFooter",setup(n){const{theme:e,page:t,frontmatter:s}=ee(),r=Ef(),o=Tf(),a=Q(()=>e.value.editLink&&s.value.editLink!==!1),l=Q(()=>t.value.lastUpdated),h=Q(()=>a.value||l.value||o.value.prev||o.value.next);return(d,_)=>h.value?(y(),k("footer",Sf,[C(d.$slots,"doc-footer-before",{},void 0,!0),a.value||l.value?(y(),k("div",kf,[a.value?(y(),k("div",Rf,[x(ze,{class:"edit-link-button",href:w(r).url,"no-icon":!0},{default:V(()=>[_[0]||(_[0]=P("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),rt(" "+G(w(r).text),1)]),_:1},8,["href"])])):M("",!0),l.value?(y(),k("div",Cf,[x(Pf)])):M("",!0)])):M("",!0),w(o).prev?.link||w(o).next?.link?(y(),k("nav",Vf,[_[1]||(_[1]=P("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),P("div",Nf,[w(o).prev?.link?(y(),H(ze,{key:0,class:"pager-link prev",href:w(o).prev.link},{default:V(()=>[P("span",{class:"desc",innerHTML:w(e).docFooter?.prev||"Previous page"},null,8,Df),P("span",{class:"title",innerHTML:w(o).prev.text},null,8,Lf)]),_:1},8,["href"])):M("",!0)]),P("div",Of,[w(o).next?.link?(y(),H(ze,{key:0,class:"pager-link next",href:w(o).next.link},{default:V(()=>[P("span",{class:"desc",innerHTML:w(e).docFooter?.next||"Next page"},null,8,Mf),P("span",{class:"title",innerHTML:w(o).next.text},null,8,$f)]),_:1},8,["href"])):M("",!0)])])):M("",!0)])):M("",!0)}}),xf=U(Ff,[["__scopeId","data-v-e257564d"]]),Uf={class:"container"},Bf={class:"aside-container"},jf={class:"aside-content"},Hf={class:"content"},qf={class:"content-container"},zf={class:"main"},Wf=j({__name:"VPDoc",setup(n){const{theme:e}=ee(),t=Es(),{hasSidebar:s,hasAside:r,leftAside:o}=_t(),a=Q(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(l,h)=>{const d=cn("Content");return y(),k("div",{class:ne(["VPDoc",{"has-sidebar":w(s),"has-aside":w(r)}])},[C(l.$slots,"doc-top",{},void 0,!0),P("div",Uf,[w(r)?(y(),k("div",{key:0,class:ne(["aside",{"left-aside":w(o)}])},[h[0]||(h[0]=P("div",{class:"aside-curtain"},null,-1)),P("div",Bf,[P("div",jf,[x(yf,null,{"aside-top":V(()=>[C(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":V(()=>[C(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":V(()=>[C(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":V(()=>[C(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":V(()=>[C(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":V(()=>[C(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):M("",!0),P("div",Hf,[P("div",qf,[C(l.$slots,"doc-before",{},void 0,!0),P("main",zf,[x(d,{class:ne(["vp-doc",[a.value,w(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),x(xf,null,{"doc-footer-before":V(()=>[C(l.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),C(l.$slots,"doc-after",{},void 0,!0)])])]),C(l.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Gf=U(Wf,[["__scopeId","data-v-7011f0d8"]]),Kf=j({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(n){const e=n,t=Q(()=>e.href&&Pl.test(e.href)),s=Q(()=>e.tag||(e.href?"a":"button"));return(r,o)=>(y(),H(tt(s.value),{class:ne(["VPButton",[r.size,r.theme]]),href:r.href?w(mo)(r.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:V(()=>[C(r.$slots,"default",{},()=>[rt(G(r.text),1)],!0)]),_:3},8,["class","href","target","rel"]))}}),Qf=U(Kf,[["__scopeId","data-v-01bff58b"]]),Jf=["src","alt"],Xf=j({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(e,t)=>{const s=cn("VPImage",!0);return e.image?(y(),k(oe,{key:0},[typeof e.image=="string"||"src"in e.image?(y(),k("img",Nt({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:w(Dr)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Jf)):(y(),k(oe,{key:1},[x(s,Nt({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),x(s,Nt({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):M("",!0)}}}),dr=U(Xf,[["__scopeId","data-v-8426fc1a"]]),Yf={class:"container"},Zf={class:"main"},ep={class:"heading"},tp=["innerHTML"],np=["innerHTML"],sp=["innerHTML"],rp={key:0,class:"actions"},ip={key:0,class:"image"},op={class:"image-container"},ap=j({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const{heroImageSlotExists:e}=Or(Vl);return(t,s)=>(y(),k("div",{class:ne(["VPHero",{"has-image":t.image||w(e)}])},[P("div",Yf,[P("div",Zf,[C(t.$slots,"home-hero-info-before",{},void 0,!0),C(t.$slots,"home-hero-info",{},()=>[P("h1",ep,[t.name?(y(),k("span",{key:0,innerHTML:t.name,class:"name clip"},null,8,tp)):M("",!0),t.text?(y(),k("span",{key:1,innerHTML:t.text,class:"text"},null,8,np)):M("",!0)]),t.tagline?(y(),k("p",{key:0,innerHTML:t.tagline,class:"tagline"},null,8,sp)):M("",!0)],!0),C(t.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(y(),k("div",rp,[(y(!0),k(oe,null,Ie(t.actions,r=>(y(),k("div",{key:r.link,class:"action"},[x(Qf,{tag:"a",size:"medium",theme:r.theme,text:r.text,href:r.link,target:r.target,rel:r.rel},null,8,["theme","text","href","target","rel"])]))),128))])):M("",!0),C(t.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||w(e)?(y(),k("div",ip,[P("div",op,[s[0]||(s[0]=P("div",{class:"image-bg"},null,-1)),C(t.$slots,"home-hero-image",{},()=>[t.image?(y(),H(dr,{key:0,class:"image-src",image:t.image},null,8,["image"])):M("",!0)],!0)])])):M("",!0)])],2))}}),cp=U(ap,[["__scopeId","data-v-1e96e9e8"]]),lp=j({__name:"VPHomeHero",setup(n){const{frontmatter:e}=ee();return(t,s)=>w(e).hero?(y(),H(cp,{key:0,class:"VPHomeHero",name:w(e).hero.name,text:w(e).hero.text,tagline:w(e).hero.tagline,image:w(e).hero.image,actions:w(e).hero.actions},{"home-hero-info-before":V(()=>[C(t.$slots,"home-hero-info-before")]),"home-hero-info":V(()=>[C(t.$slots,"home-hero-info")]),"home-hero-info-after":V(()=>[C(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":V(()=>[C(t.$slots,"home-hero-actions-after")]),"home-hero-image":V(()=>[C(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):M("",!0)}}),up={class:"box"},hp={key:0,class:"icon"},dp=["innerHTML"],fp=["innerHTML"],pp=["innerHTML"],mp={key:4,class:"link-text"},gp={class:"link-text-value"},_p=j({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(n){return(e,t)=>(y(),H(ze,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:V(()=>[P("article",up,[typeof e.icon=="object"&&e.icon.wrap?(y(),k("div",hp,[x(dr,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(y(),H(dr,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(y(),k("div",{key:2,class:"icon",innerHTML:e.icon},null,8,dp)):M("",!0),P("h2",{class:"title",innerHTML:e.title},null,8,fp),e.details?(y(),k("p",{key:3,class:"details",innerHTML:e.details},null,8,pp)):M("",!0),e.linkText?(y(),k("div",mp,[P("p",gp,[rt(G(e.linkText)+" ",1),t[0]||(t[0]=P("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):M("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),vp=U(_p,[["__scopeId","data-v-5219619b"]]),yp={key:0,class:"VPFeatures"},Ep={class:"container"},Tp={class:"items"},Ip=j({__name:"VPFeatures",props:{features:{}},setup(n){const e=n,t=Q(()=>{const s=e.features.length;if(s){if(s===2)return"grid-2";if(s===3)return"grid-3";if(s%3===0)return"grid-6";if(s>3)return"grid-4"}else return});return(s,r)=>s.features?(y(),k("div",yp,[P("div",Ep,[P("div",Tp,[(y(!0),k(oe,null,Ie(s.features,o=>(y(),k("div",{key:o.title,class:ne(["item",[t.value]])},[x(vp,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):M("",!0)}}),wp=U(Ip,[["__scopeId","data-v-a6181336"]]),bp=j({__name:"VPHomeFeatures",setup(n){const{frontmatter:e}=ee();return(t,s)=>w(e).features?(y(),H(wp,{key:0,class:"VPHomeFeatures",features:w(e).features},null,8,["features"])):M("",!0)}}),Ap=j({__name:"VPHomeContent",setup(n){const{width:e}=Id({initialWidth:0,includeScrollbar:!1});return(t,s)=>(y(),k("div",{class:"vp-doc container",style:uo(w(e)?{"--vp-offset":`calc(50% - ${w(e)/2}px)`}:{})},[C(t.$slots,"default",{},void 0,!0)],4))}}),Pp=U(Ap,[["__scopeId","data-v-8e2d4988"]]),Sp=j({__name:"VPHome",setup(n){const{frontmatter:e,theme:t}=ee();return(s,r)=>{const o=cn("Content");return y(),k("div",{class:ne(["VPHome",{"external-link-icon-enabled":w(t).externalLinkIcon}])},[C(s.$slots,"home-hero-before",{},void 0,!0),x(lp,null,{"home-hero-info-before":V(()=>[C(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":V(()=>[C(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":V(()=>[C(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":V(()=>[C(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":V(()=>[C(s.$slots,"home-hero-image",{},void 0,!0)]),_:3}),C(s.$slots,"home-hero-after",{},void 0,!0),C(s.$slots,"home-features-before",{},void 0,!0),x(bp),C(s.$slots,"home-features-after",{},void 0,!0),w(e).markdownStyles!==!1?(y(),H(Pp,{key:0},{default:V(()=>[x(o)]),_:1})):(y(),H(o,{key:1}))],2)}}}),kp=U(Sp,[["__scopeId","data-v-8b561e3d"]]),Rp={},Cp={class:"VPPage"};function Vp(n,e){const t=cn("Content");return y(),k("div",Cp,[C(n.$slots,"page-top"),x(t),C(n.$slots,"page-bottom")])}const Np=U(Rp,[["render",Vp]]),Dp=j({__name:"VPContent",setup(n){const{page:e,frontmatter:t}=ee(),{isHome:s,hasSidebar:r}=_t();return(o,a)=>(y(),k("div",{class:ne(["VPContent",{"has-sidebar":w(r),"is-home":w(s)}]),id:"VPContent"},[w(e).isNotFound?C(o.$slots,"not-found",{key:0},()=>[x(Gd)],!0):w(t).layout==="page"?(y(),H(Np,{key:1},{"page-top":V(()=>[C(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":V(()=>[C(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):w(t).layout==="home"?(y(),H(kp,{key:2},{"home-hero-before":V(()=>[C(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":V(()=>[C(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":V(()=>[C(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":V(()=>[C(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":V(()=>[C(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":V(()=>[C(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":V(()=>[C(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":V(()=>[C(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":V(()=>[C(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):w(t).layout&&w(t).layout!=="doc"?(y(),H(tt(w(t).layout),{key:3})):(y(),H(Gf,{key:4},{"doc-top":V(()=>[C(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":V(()=>[C(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":V(()=>[C(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":V(()=>[C(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":V(()=>[C(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":V(()=>[C(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":V(()=>[C(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":V(()=>[C(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":V(()=>[C(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":V(()=>[C(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":V(()=>[C(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Lp=U(Dp,[["__scopeId","data-v-aff0b8d7"]]),Op={class:"container"},Mp=["innerHTML"],$p=["innerHTML"],Fp=j({__name:"VPFooter",setup(n){const{theme:e,frontmatter:t}=ee(),{hasSidebar:s}=_t();return(r,o)=>w(e).footer&&w(t).footer!==!1?(y(),k("footer",{key:0,class:ne(["VPFooter",{"has-sidebar":w(s)}])},[P("div",Op,[w(e).footer.message?(y(),k("p",{key:0,class:"message",innerHTML:w(e).footer.message},null,8,Mp)):M("",!0),w(e).footer.copyright?(y(),k("p",{key:1,class:"copyright",innerHTML:w(e).footer.copyright},null,8,$p)):M("",!0)])],2)):M("",!0)}}),xp=U(Fp,[["__scopeId","data-v-c3855bb3"]]),Up={class:"menu-text"},Bp={class:"header"},jp={class:"outline"},Hp=j({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(n){const e=n,{theme:t}=ee(),s=K(!1),r=K(0),o=K(),a=K();function l(g){o.value?.contains(g.target)||(s.value=!1)}it(s,g=>{if(g){document.addEventListener("click",l);return}document.removeEventListener("click",l)}),Ni("Escape",()=>{s.value=!1}),Al(()=>{s.value=!1});function h(){s.value=!s.value,r.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function d(g){g.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),ho(()=>{s.value=!1}))}function _(){s.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(g,S)=>(y(),k("div",{class:"VPLocalNavOutlineDropdown",style:uo({"--vp-vh":r.value+"px"}),ref_key:"main",ref:o},[g.headers.length>0?(y(),k("button",{key:0,onClick:h,class:ne({open:s.value})},[P("span",Up,G(w(Cl)(w(t))),1),S[0]||(S[0]=P("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(y(),k("button",{key:1,onClick:_},G(w(t).returnToTopLabel||"Return to top"),1)),x(oo,{name:"flyout"},{default:V(()=>[s.value?(y(),k("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:d},[P("div",Bp,[P("a",{class:"top-link",href:"#",onClick:_},G(w(t).returnToTopLabel||"Return to top"),1)]),P("div",jp,[x(Nl,{headers:g.headers},null,8,["headers"])])],512)):M("",!0)]),_:1})],4))}}),qp=U(Hp,[["__scopeId","data-v-0bf0e06f"]]),zp={class:"container"},Wp=["aria-expanded"],Gp={class:"menu-text"},Kp=j({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:e}=ee(),{isHome:t,hasSidebar:s,headers:r,hasLocalNav:o}=_t(),{y:a}=fo(),l=K(0);je(()=>{l.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))});const h=Q(()=>({VPLocalNav:!0,"has-sidebar":s.value,empty:!o.value,fixed:!o.value&&!s.value}));return(d,_)=>!w(t)&&(w(o)||w(s)||w(a)>=l.value)?(y(),k("div",{key:0,class:ne(h.value)},[P("div",zp,[w(s)?(y(),k("button",{key:0,class:"menu","aria-expanded":d.open,"aria-controls":"VPSidebarNav",onClick:_[0]||(_[0]=g=>d.$emit("open-menu"))},[_[1]||(_[1]=P("span",{class:"vpi-align-left menu-icon"},null,-1)),P("span",Gp,G(w(e).sidebarMenuLabel||"Menu"),1)],8,Wp)):M("",!0),x(qp,{headers:w(r),navHeight:l.value},null,8,["headers","navHeight"])])],2)):M("",!0)}}),Qp=U(Kp,[["__scopeId","data-v-8acdfeb5"]]);function Jp(){const n=K(!1);function e(){n.value=!0,window.addEventListener("resize",r)}function t(){n.value=!1,window.removeEventListener("resize",r)}function s(){n.value?t():e()}function r(){window.outerWidth>=768&&t()}const o=Es();return it(()=>o.path,t),{isScreenOpen:n,openScreen:e,closeScreen:t,toggleScreen:s}}const go=Symbol("nav"),Xp={},Yp={class:"VPSwitch",type:"button",role:"switch"},Zp={class:"check"},em={key:0,class:"icon"};function tm(n,e){return y(),k("button",Yp,[P("span",Zp,[n.$slots.default?(y(),k("span",em,[C(n.$slots,"default",{},void 0,!0)])):M("",!0)])])}const nm=U(Xp,[["render",tm],["__scopeId","data-v-1d5665e3"]]),sm=j({__name:"VPSwitchAppearance",setup(n){const{isDark:e,theme:t}=ee(),s=Or("toggle-appearance",()=>{e.value=!e.value}),r=K("");return co(()=>{r.value=e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(o,a)=>(y(),H(nm,{title:r.value,class:"VPSwitchAppearance","aria-checked":w(e),onClick:w(s)},{default:V(()=>[...a[0]||(a[0]=[P("span",{class:"vpi-sun sun"},null,-1),P("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),_o=U(sm,[["__scopeId","data-v-5337faa4"]]),rm={key:0,class:"VPNavBarAppearance"},im=j({__name:"VPNavBarAppearance",setup(n){const{site:e}=ee();return(t,s)=>w(e).appearance&&w(e).appearance!=="force-dark"&&w(e).appearance!=="force-auto"?(y(),k("div",rm,[x(_o)])):M("",!0)}}),om=U(im,[["__scopeId","data-v-6c893767"]]),vo=K();let Dl=!1,Ei=0;function am(n){const e=K(!1);if(ys){!Dl&&cm(),Ei++;const t=it(vo,s=>{s===n.el.value||n.el.value?.contains(s)?(e.value=!0,n.onFocus?.()):(e.value=!1,n.onBlur?.())});ao(()=>{t(),Ei--,Ei||lm()})}return wd(e)}function cm(){document.addEventListener("focusin",Ll),Dl=!0,vo.value=document.activeElement}function lm(){document.removeEventListener("focusin",Ll)}function Ll(){vo.value=document.activeElement}const um={class:"VPMenuLink"},hm=["innerHTML"],dm=j({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:e}=ee();return(t,s)=>(y(),k("div",um,[x(ze,{class:ne({active:w(Xt)(w(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon},{default:V(()=>[P("span",{innerHTML:t.item.text},null,8,hm)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Mr=U(dm,[["__scopeId","data-v-cd834e02"]]),fm={class:"VPMenuGroup"},pm={key:0,class:"title"},mm=j({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(e,t)=>(y(),k("div",fm,[e.text?(y(),k("p",pm,G(e.text),1)):M("",!0),(y(!0),k(oe,null,Ie(e.items,s=>(y(),k(oe,{key:JSON.stringify(s)},["link"in s?(y(),H(Mr,{key:0,item:s},null,8,["item"])):M("",!0)],64))),128))]))}}),gm=U(mm,[["__scopeId","data-v-1963e1bb"]]),_m={class:"VPMenu"},vm={key:0,class:"items"},ym=j({__name:"VPMenu",props:{items:{}},setup(n){return(e,t)=>(y(),k("div",_m,[e.items?(y(),k("div",vm,[(y(!0),k(oe,null,Ie(e.items,s=>(y(),k(oe,{key:JSON.stringify(s)},["link"in s?(y(),H(Mr,{key:0,item:s},null,8,["item"])):"component"in s?(y(),H(tt(s.component),Nt({key:1,ref_for:!0},s.props),null,16)):(y(),H(gm,{key:2,text:s.text,items:s.items},null,8,["text","items"]))],64))),128))])):M("",!0),C(e.$slots,"default",{},void 0,!0)]))}}),Em=U(ym,[["__scopeId","data-v-25a6cce8"]]),Tm=["aria-expanded","aria-label"],Im={key:0,class:"text"},wm=["innerHTML"],bm={key:1,class:"vpi-more-horizontal icon"},Am={class:"menu"},Pm=j({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const e=K(!1),t=K();am({el:t,onBlur:s});function s(){e.value=!1}return(r,o)=>(y(),k("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:o[1]||(o[1]=a=>e.value=!0),onMouseleave:o[2]||(o[2]=a=>e.value=!1)},[P("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":r.label,onClick:o[0]||(o[0]=a=>e.value=!e.value)},[r.button||r.icon?(y(),k("span",Im,[r.icon?(y(),k("span",{key:0,class:ne([r.icon,"option-icon"])},null,2)):M("",!0),r.button?(y(),k("span",{key:1,innerHTML:r.button},null,8,wm)):M("",!0),o[3]||(o[3]=P("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(y(),k("span",bm))],8,Tm),P("div",Am,[x(Em,{items:r.items},{default:V(()=>[C(r.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),yo=U(Pm,[["__scopeId","data-v-42cb505d"]]),Sm=["href","aria-label","rel","innerHTML"],km=j({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{},me:{type:Boolean}},setup(n){const e=n,t=K();je(async()=>{await ho();const r=t.value?.children[0];r instanceof HTMLElement&&r.className.startsWith("vpi-social-")&&(getComputedStyle(r).maskImage||getComputedStyle(r).webkitMaskImage)==="none"&&r.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const s=Q(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(r,o)=>(y(),k("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:r.link,"aria-label":r.ariaLabel??(typeof r.icon=="string"?r.icon:""),target:"_blank",rel:r.me?"me noopener":"noopener",innerHTML:s.value},null,8,Sm))}}),Rm=U(km,[["__scopeId","data-v-591a6b30"]]),Cm={class:"VPSocialLinks"},Vm=j({__name:"VPSocialLinks",props:{links:{},me:{type:Boolean,default:!0}},setup(n){return(e,t)=>(y(),k("div",Cm,[(y(!0),k(oe,null,Ie(e.links,({link:s,icon:r,ariaLabel:o})=>(y(),H(Rm,{key:s,icon:r,link:s,ariaLabel:o,me:e.me},null,8,["icon","link","ariaLabel","me"]))),128))]))}}),$r=U(Vm,[["__scopeId","data-v-d07f11e6"]]),Nm={key:0,class:"group translations"},Dm={class:"trans-title"},Lm={key:1,class:"group"},Om={class:"item appearance"},Mm={class:"label"},$m={class:"appearance-action"},Fm={key:2,class:"group"},xm={class:"item social-links"},Um=j({__name:"VPNavBarExtra",setup(n){const{site:e,theme:t}=ee(),{localeLinks:s,currentLang:r}=Ts({correspondingLink:!0}),o=Q(()=>s.value.length&&r.value.label||e.value.appearance||t.value.socialLinks);return(a,l)=>o.value?(y(),H(yo,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:V(()=>[w(s).length&&w(r).label?(y(),k("div",Nm,[P("p",Dm,G(w(r).label),1),(y(!0),k(oe,null,Ie(w(s),h=>(y(),H(Mr,{key:h.link,item:h},null,8,["item"]))),128))])):M("",!0),w(e).appearance&&w(e).appearance!=="force-dark"&&w(e).appearance!=="force-auto"?(y(),k("div",Lm,[P("div",Om,[P("p",Mm,G(w(t).darkModeSwitchLabel||"Appearance"),1),P("div",$m,[x(_o)])])])):M("",!0),w(t).socialLinks?(y(),k("div",Fm,[P("div",xm,[x($r,{class:"social-links-list",links:w(t).socialLinks},null,8,["links"])])])):M("",!0)]),_:1})):M("",!0)}}),Bm=U(Um,[["__scopeId","data-v-bb2aa2f0"]]),jm=["aria-expanded"],Hm=j({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(e,t)=>(y(),k("button",{type:"button",class:ne(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=s=>e.$emit("click"))},[...t[1]||(t[1]=[P("span",{class:"container"},[P("span",{class:"top"}),P("span",{class:"middle"}),P("span",{class:"bottom"})],-1)])],10,jm))}}),qm=U(Hm,[["__scopeId","data-v-e5dd9c1c"]]),zm=["innerHTML"],Wm=j({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:e}=ee();return(t,s)=>(y(),H(ze,{class:ne({VPNavBarMenuLink:!0,active:w(Xt)(w(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,tabindex:"0"},{default:V(()=>[P("span",{innerHTML:t.item.text},null,8,zm)]),_:1},8,["class","href","target","rel","no-icon"]))}}),Gm=U(Wm,[["__scopeId","data-v-e56f3d57"]]),Km=j({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const e=n,{page:t}=ee(),s=o=>"component"in o?!1:"link"in o?Xt(t.value.relativePath,o.link,!!e.item.activeMatch):o.items.some(s),r=Q(()=>s(e.item));return(o,a)=>(y(),H(yo,{class:ne({VPNavBarMenuGroup:!0,active:w(Xt)(w(t).relativePath,o.item.activeMatch,!!o.item.activeMatch)||r.value}),button:o.item.text,items:o.item.items},null,8,["class","button","items"]))}}),Qm={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Jm=j({__name:"VPNavBarMenu",setup(n){const{theme:e}=ee();return(t,s)=>w(e).nav?(y(),k("nav",Qm,[s[0]||(s[0]=P("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(y(!0),k(oe,null,Ie(w(e).nav,r=>(y(),k(oe,{key:JSON.stringify(r)},["link"in r?(y(),H(Gm,{key:0,item:r},null,8,["item"])):"component"in r?(y(),H(tt(r.component),Nt({key:1,ref_for:!0},r.props),null,16)):(y(),H(Km,{key:2,item:r},null,8,["item"]))],64))),128))])):M("",!0)}}),Xm=U(Jm,[["__scopeId","data-v-39714824"]]);function Ym(n){const{localeIndex:e,theme:t}=ee();function s(r){const o=r.split("."),a=t.value.search?.options,l=a&&typeof a=="object",h=l&&a.locales?.[e.value]?.translations||null,d=l&&a.translations||null;let _=h,g=d,S=n;const L=o.pop();for(const F of o){let z=null;const $=S?.[F];$&&(z=S=$);const Z=g?.[F];Z&&(z=g=Z);const re=_?.[F];re&&(z=_=re),$||(S=z),Z||(g=z),re||(_=z)}return _?.[L]??g?.[L]??S?.[L]??""}return s}const Zm=["aria-label"],eg={class:"DocSearch-Button-Container"},tg={class:"DocSearch-Button-Placeholder"},ac=j({__name:"VPNavBarSearchButton",setup(n){const t=Ym({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(s,r)=>(y(),k("button",{type:"button","aria-label":w(t)("button.buttonAriaLabel"),"aria-keyshortcuts":"/ control+k meta+k",class:"DocSearch DocSearch-Button"},[P("span",eg,[r[0]||(r[0]=P("span",{class:"vpi-search DocSearch-Search-Icon"},null,-1)),P("span",tg,G(w(t)("button.buttonText")),1)]),r[1]||(r[1]=P("span",{class:"DocSearch-Button-Keys"},[P("kbd",{class:"DocSearch-Button-Key"}),P("kbd",{class:"DocSearch-Button-Key"})],-1))],8,Zm))}}),ng={class:"VPNavBarSearch"},sg={id:"local-search"},rg={key:1,id:"docsearch"},ig=j({__name:"VPNavBarSearch",setup(n){const e=bd(()=>Ad(()=>import("./VPLocalSearchBox.BqCcqij5.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:s}=ee(),r=K(!1),o=K(!1);je(()=>{});function a(){r.value||(r.value=!0,setTimeout(l,16))}function l(){const g=new Event("keydown");g.key="k",g.metaKey=!0,window.dispatchEvent(g),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||l()},16)}function h(g){const S=g.target,L=S.tagName;return S.isContentEditable||L==="INPUT"||L==="SELECT"||L==="TEXTAREA"}const d=K(!1);Ni("k",g=>{(g.ctrlKey||g.metaKey)&&(g.preventDefault(),d.value=!0)}),Ni("/",g=>{h(g)||(g.preventDefault(),d.value=!0)});const _="local";return(g,S)=>(y(),k("div",ng,[w(_)==="local"?(y(),k(oe,{key:0},[d.value?(y(),H(w(e),{key:0,onClose:S[0]||(S[0]=L=>d.value=!1)})):M("",!0),P("div",sg,[x(ac,{onClick:S[1]||(S[1]=L=>d.value=!0)})])],64)):w(_)==="algolia"?(y(),k(oe,{key:1},[r.value?(y(),H(w(t),{key:0,algolia:w(s).search?.options??w(s).algolia,onVnodeBeforeMount:S[2]||(S[2]=L=>o.value=!0)},null,8,["algolia"])):M("",!0),o.value?M("",!0):(y(),k("div",rg,[x(ac,{onClick:a})]))],64)):M("",!0)]))}}),og=j({__name:"VPNavBarSocialLinks",setup(n){const{theme:e}=ee();return(t,s)=>w(e).socialLinks?(y(),H($r,{key:0,class:"VPNavBarSocialLinks",links:w(e).socialLinks},null,8,["links"])):M("",!0)}}),ag=U(og,[["__scopeId","data-v-0394ad82"]]),cg=["href","rel","target"],lg=["innerHTML"],ug={key:2},hg=j({__name:"VPNavBarTitle",setup(n){const{site:e,theme:t}=ee(),{hasSidebar:s}=_t(),{currentLang:r}=Ts(),o=Q(()=>typeof t.value.logoLink=="string"?t.value.logoLink:t.value.logoLink?.link),a=Q(()=>typeof t.value.logoLink=="string"?void 0:t.value.logoLink?.rel),l=Q(()=>typeof t.value.logoLink=="string"?void 0:t.value.logoLink?.target);return(h,d)=>(y(),k("div",{class:ne(["VPNavBarTitle",{"has-sidebar":w(s)}])},[P("a",{class:"title",href:o.value??w(mo)(w(r).link),rel:a.value,target:l.value},[C(h.$slots,"nav-bar-title-before",{},void 0,!0),w(t).logo?(y(),H(dr,{key:0,class:"logo",image:w(t).logo},null,8,["image"])):M("",!0),w(t).siteTitle?(y(),k("span",{key:1,innerHTML:w(t).siteTitle},null,8,lg)):w(t).siteTitle===void 0?(y(),k("span",ug,G(w(e).title),1)):M("",!0),C(h.$slots,"nav-bar-title-after",{},void 0,!0)],8,cg)],2))}}),dg=U(hg,[["__scopeId","data-v-1e38c6bc"]]),fg={class:"items"},pg={class:"title"},mg=j({__name:"VPNavBarTranslations",setup(n){const{theme:e}=ee(),{localeLinks:t,currentLang:s}=Ts({correspondingLink:!0});return(r,o)=>w(t).length&&w(s).label?(y(),H(yo,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:w(e).langMenuLabel||"Change language"},{default:V(()=>[P("div",fg,[P("p",pg,G(w(s).label),1),(y(!0),k(oe,null,Ie(w(t),a=>(y(),H(Mr,{key:a.link,item:a},null,8,["item"]))),128))])]),_:1},8,["label"])):M("",!0)}}),gg=U(mg,[["__scopeId","data-v-88af2de4"]]),_g={class:"wrapper"},vg={class:"container"},yg={class:"title"},Eg={class:"content"},Tg={class:"content-body"},Ig=j({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const e=n,{y:t}=fo(),{isHome:s,hasSidebar:r}=_t(),o=K({});return co(()=>{o.value={"has-sidebar":r.value,home:s.value,top:t.value===0,"screen-open":e.isScreenOpen}}),(a,l)=>(y(),k("div",{class:ne(["VPNavBar",o.value])},[P("div",_g,[P("div",vg,[P("div",yg,[x(dg,null,{"nav-bar-title-before":V(()=>[C(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":V(()=>[C(a.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),P("div",Eg,[P("div",Tg,[C(a.$slots,"nav-bar-content-before",{},void 0,!0),x(ig,{class:"search"}),x(Xm,{class:"menu"}),x(gg,{class:"translations"}),x(om,{class:"appearance"}),x(ag,{class:"social-links"}),x(Bm,{class:"extra"}),C(a.$slots,"nav-bar-content-after",{},void 0,!0),x(qm,{class:"hamburger",active:a.isScreenOpen,onClick:l[0]||(l[0]=h=>a.$emit("toggle-screen"))},null,8,["active"])])])])]),l[1]||(l[1]=P("div",{class:"divider"},[P("div",{class:"divider-line"})],-1))],2))}}),wg=U(Ig,[["__scopeId","data-v-2a96a3d0"]]),bg={key:0,class:"VPNavScreenAppearance"},Ag={class:"text"},Pg=j({__name:"VPNavScreenAppearance",setup(n){const{site:e,theme:t}=ee();return(s,r)=>w(e).appearance&&w(e).appearance!=="force-dark"&&w(e).appearance!=="force-auto"?(y(),k("div",bg,[P("p",Ag,G(w(t).darkModeSwitchLabel||"Appearance"),1),x(_o)])):M("",!0)}}),Sg=U(Pg,[["__scopeId","data-v-b44890b2"]]),kg=["innerHTML"],Rg=j({__name:"VPNavScreenMenuLink",props:{item:{}},setup(n){const{closeScreen:e}=Or(go);return(t,s)=>(y(),H(ze,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:w(e)},{default:V(()=>[P("span",{innerHTML:t.item.text},null,8,kg)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Cg=U(Rg,[["__scopeId","data-v-83cc0379"]]),Vg=["innerHTML"],Ng=j({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(n){const{closeScreen:e}=Or(go);return(t,s)=>(y(),H(ze,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:w(e)},{default:V(()=>[P("span",{innerHTML:t.item.text},null,8,Vg)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ol=U(Ng,[["__scopeId","data-v-aa6008ea"]]),Dg={class:"VPNavScreenMenuGroupSection"},Lg={key:0,class:"title"},Og=j({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(e,t)=>(y(),k("div",Dg,[e.text?(y(),k("p",Lg,G(e.text),1)):M("",!0),(y(!0),k(oe,null,Ie(e.items,s=>(y(),H(Ol,{key:s.text,item:s},null,8,["item"]))),128))]))}}),Mg=U(Og,[["__scopeId","data-v-4b7a798b"]]),$g=["aria-controls","aria-expanded"],Fg=["innerHTML"],xg=["id"],Ug={key:0,class:"item"},Bg={key:1,class:"item"},jg={key:2,class:"group"},Hg=j({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const e=n,t=K(!1),s=Q(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function r(){t.value=!t.value}return(o,a)=>(y(),k("div",{class:ne(["VPNavScreenMenuGroup",{open:t.value}])},[P("button",{class:"button","aria-controls":s.value,"aria-expanded":t.value,onClick:r},[P("span",{class:"button-text",innerHTML:o.text},null,8,Fg),a[0]||(a[0]=P("span",{class:"vpi-plus button-icon"},null,-1))],8,$g),P("div",{id:s.value,class:"items"},[(y(!0),k(oe,null,Ie(o.items,l=>(y(),k(oe,{key:JSON.stringify(l)},["link"in l?(y(),k("div",Ug,[x(Ol,{item:l},null,8,["item"])])):"component"in l?(y(),k("div",Bg,[(y(),H(tt(l.component),Nt({ref_for:!0},l.props,{"screen-menu":""}),null,16))])):(y(),k("div",jg,[x(Mg,{text:l.text,items:l.items},null,8,["text","items"])]))],64))),128))],8,xg)],2))}}),qg=U(Hg,[["__scopeId","data-v-956364f9"]]),zg={key:0,class:"VPNavScreenMenu"},Wg=j({__name:"VPNavScreenMenu",setup(n){const{theme:e}=ee();return(t,s)=>w(e).nav?(y(),k("nav",zg,[(y(!0),k(oe,null,Ie(w(e).nav,r=>(y(),k(oe,{key:JSON.stringify(r)},["link"in r?(y(),H(Cg,{key:0,item:r},null,8,["item"])):"component"in r?(y(),H(tt(r.component),Nt({key:1,ref_for:!0},r.props,{"screen-menu":""}),null,16)):(y(),H(qg,{key:2,text:r.text||"",items:r.items},null,8,["text","items"]))],64))),128))])):M("",!0)}}),Gg=j({__name:"VPNavScreenSocialLinks",setup(n){const{theme:e}=ee();return(t,s)=>w(e).socialLinks?(y(),H($r,{key:0,class:"VPNavScreenSocialLinks",links:w(e).socialLinks},null,8,["links"])):M("",!0)}}),Kg={class:"list"},Qg=j({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:e,currentLang:t}=Ts({correspondingLink:!0}),s=K(!1);function r(){s.value=!s.value}return(o,a)=>w(e).length&&w(t).label?(y(),k("div",{key:0,class:ne(["VPNavScreenTranslations",{open:s.value}])},[P("button",{class:"title",onClick:r},[a[0]||(a[0]=P("span",{class:"vpi-languages icon lang"},null,-1)),rt(" "+G(w(t).label)+" ",1),a[1]||(a[1]=P("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),P("ul",Kg,[(y(!0),k(oe,null,Ie(w(e),l=>(y(),k("li",{key:l.link,class:"item"},[x(ze,{class:"link",href:l.link},{default:V(()=>[rt(G(l.text),1)]),_:2},1032,["href"])]))),128))])],2)):M("",!0)}}),Jg=U(Qg,[["__scopeId","data-v-858fe1a4"]]),Xg={class:"container"},Yg=j({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const e=K(null),t=Sl(ys?document.body:null);return(s,r)=>(y(),H(oo,{name:"fade",onEnter:r[0]||(r[0]=o=>t.value=!0),onAfterLeave:r[1]||(r[1]=o=>t.value=!1)},{default:V(()=>[s.open?(y(),k("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[P("div",Xg,[C(s.$slots,"nav-screen-content-before",{},void 0,!0),x(Wg,{class:"menu"}),x(Jg,{class:"translations"}),x(Sg,{class:"appearance"}),x(Gg,{class:"social-links"}),C(s.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):M("",!0)]),_:3}))}}),Zg=U(Yg,[["__scopeId","data-v-f2779853"]]),e_={key:0,class:"VPNav"},t_=j({__name:"VPNav",setup(n){const{isScreenOpen:e,closeScreen:t,toggleScreen:s}=Jp(),{frontmatter:r}=ee(),o=Q(()=>r.value.navbar!==!1);return po(go,{closeScreen:t}),Lr(()=>{ys&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(a,l)=>o.value?(y(),k("header",e_,[x(wg,{"is-screen-open":w(e),onToggleScreen:w(s)},{"nav-bar-title-before":V(()=>[C(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":V(()=>[C(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":V(()=>[C(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":V(()=>[C(a.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),x(Zg,{open:w(e)},{"nav-screen-content-before":V(()=>[C(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":V(()=>[C(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):M("",!0)}}),n_=U(t_,[["__scopeId","data-v-9f75dce3"]]),s_=["role","tabindex"],r_={key:1,class:"items"},i_=j({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const e=n,{collapsed:t,collapsible:s,isLink:r,isActiveLink:o,hasActiveLink:a,hasChildren:l,toggle:h}=af(Q(()=>e.item)),d=Q(()=>l.value?"section":"div"),_=Q(()=>r.value?"a":"div"),g=Q(()=>l.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),S=Q(()=>r.value?void 0:"button"),L=Q(()=>[[`level-${e.depth}`],{collapsible:s.value},{collapsed:t.value},{"is-link":r.value},{"is-active":o.value},{"has-active":a.value}]);function F($){"key"in $&&$.key!=="Enter"||!e.item.link&&h()}function z(){e.item.link&&h()}return($,Z)=>{const re=cn("VPSidebarItem",!0);return y(),H(tt(d.value),{class:ne(["VPSidebarItem",L.value])},{default:V(()=>[$.item.text?(y(),k("div",Nt({key:0,class:"item",role:S.value},Pd($.item.items?{click:F,keydown:F}:{},!0),{tabindex:$.item.items&&0}),[Z[1]||(Z[1]=P("div",{class:"indicator"},null,-1)),$.item.link?(y(),H(ze,{key:0,tag:_.value,class:"link",href:$.item.link,rel:$.item.rel,target:$.item.target},{default:V(()=>[(y(),H(tt(g.value),{class:"text",innerHTML:$.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(y(),H(tt(g.value),{key:1,class:"text",innerHTML:$.item.text},null,8,["innerHTML"])),$.item.collapsed!=null&&$.item.items&&$.item.items.length?(y(),k("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:z,onKeydown:Sd(z,["enter"]),tabindex:"0"},[...Z[0]||(Z[0]=[P("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):M("",!0)],16,s_)):M("",!0),$.item.items&&$.item.items.length?(y(),k("div",r_,[$.depth<5?(y(!0),k(oe,{key:0},Ie($.item.items,ae=>(y(),H(re,{key:ae.text,item:ae,depth:$.depth+1},null,8,["item","depth"]))),128)):M("",!0)])):M("",!0)]),_:1},8,["class"])}}}),o_=U(i_,[["__scopeId","data-v-d81de50c"]]),a_=j({__name:"VPSidebarGroup",props:{items:{}},setup(n){const e=K(!0);let t=null;return je(()=>{t=setTimeout(()=>{t=null,e.value=!1},300)}),kd(()=>{t!=null&&(clearTimeout(t),t=null)}),(s,r)=>(y(!0),k(oe,null,Ie(s.items,o=>(y(),k("div",{key:o.text,class:ne(["group",{"no-transition":e.value}])},[x(o_,{item:o,depth:0},null,8,["item"])],2))),128))}}),c_=U(a_,[["__scopeId","data-v-8d50c081"]]),l_={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},u_=j({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const{sidebarGroups:e,hasSidebar:t}=_t(),s=n,r=K(null),o=Sl(ys?document.body:null);it([s,r],()=>{s.open?(o.value=!0,r.value?.focus()):o.value=!1},{immediate:!0,flush:"post"});const a=K(0);return it(e,()=>{a.value+=1},{deep:!0}),(l,h)=>w(t)?(y(),k("aside",{key:0,class:ne(["VPSidebar",{open:l.open}]),ref_key:"navEl",ref:r,onClick:h[0]||(h[0]=ts(()=>{},["stop"]))},[h[2]||(h[2]=P("div",{class:"curtain"},null,-1)),P("nav",l_,[h[1]||(h[1]=P("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),C(l.$slots,"sidebar-nav-before",{},void 0,!0),(y(),H(c_,{items:w(e),key:a.value},null,8,["items"])),C(l.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):M("",!0)}}),h_=U(u_,[["__scopeId","data-v-e7c6e512"]]),d_=j({__name:"VPSkipLink",setup(n){const{theme:e}=ee(),t=Es(),s=K();it(()=>t.path,()=>s.value.focus());function r({target:o}){const a=document.getElementById(decodeURIComponent(o.hash).slice(1));if(a){const l=()=>{a.removeAttribute("tabindex"),a.removeEventListener("blur",l)};a.setAttribute("tabindex","-1"),a.addEventListener("blur",l),a.focus(),window.scrollTo(0,0)}}return(o,a)=>(y(),k(oe,null,[P("span",{ref_key:"backToTop",ref:s,tabindex:"-1"},null,512),P("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r},G(w(e).skipToContentLabel||"Skip to content"),1)],64))}}),f_=U(d_,[["__scopeId","data-v-0b0ada53"]]),p_=j({__name:"Layout",setup(n){const{isOpen:e,open:t,close:s}=of();cf({closeSidebar:s});const{frontmatter:r}=ee(),o=Rd(),a=Q(()=>!!o["home-hero-image"]);return po(Vl,{heroImageSlotExists:a}),(l,h)=>{const d=cn("Content");return w(r).layout!==!1?(y(),k("div",{key:0,class:ne(["Layout",w(r).pageClass])},[C(l.$slots,"layout-top",{},void 0,!0),x(f_),x($d,{class:"backdrop",show:w(e),onClick:w(s)},null,8,["show","onClick"]),x(n_,null,{"nav-bar-title-before":V(()=>[C(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":V(()=>[C(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":V(()=>[C(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":V(()=>[C(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":V(()=>[C(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":V(()=>[C(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),x(Qp,{open:w(e),onOpenMenu:w(t)},null,8,["open","onOpenMenu"]),x(h_,{open:w(e)},{"sidebar-nav-before":V(()=>[C(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":V(()=>[C(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),x(Lp,null,{"page-top":V(()=>[C(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":V(()=>[C(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":V(()=>[C(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":V(()=>[C(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":V(()=>[C(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":V(()=>[C(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":V(()=>[C(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":V(()=>[C(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":V(()=>[C(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":V(()=>[C(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":V(()=>[C(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":V(()=>[C(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":V(()=>[C(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":V(()=>[C(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":V(()=>[C(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":V(()=>[C(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":V(()=>[C(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":V(()=>[C(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":V(()=>[C(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":V(()=>[C(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":V(()=>[C(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":V(()=>[C(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":V(()=>[C(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),x(xp),C(l.$slots,"layout-bottom",{},void 0,!0)],2)):(y(),H(d,{key:1}))}}}),m_=U(p_,[["__scopeId","data-v-1df9f90f"]]),g_={class:"profile"},__={class:"avatar"},v_=["src","alt"],y_={class:"data"},E_={class:"name"},T_={key:0,class:"affiliation"},I_={key:0,class:"title"},w_={key:1,class:"at"},b_=["innerHTML"],A_={key:2,class:"links"},P_={key:0,class:"sp"},S_=j({__name:"VPTeamMembersItem",props:{size:{default:"medium"},member:{}},setup(n){return(e,t)=>(y(),k("article",{class:ne(["VPTeamMembersItem",[e.size]])},[P("div",g_,[P("figure",__,[P("img",{class:"avatar-img",src:e.member.avatar,alt:e.member.name},null,8,v_)]),P("div",y_,[P("h1",E_,G(e.member.name),1),e.member.title||e.member.org?(y(),k("p",T_,[e.member.title?(y(),k("span",I_,G(e.member.title),1)):M("",!0),e.member.title&&e.member.org?(y(),k("span",w_," @ ")):M("",!0),e.member.org?(y(),H(ze,{key:2,class:ne(["org",{link:e.member.orgLink}]),href:e.member.orgLink,"no-icon":""},{default:V(()=>[rt(G(e.member.org),1)]),_:1},8,["class","href"])):M("",!0)])):M("",!0),e.member.desc?(y(),k("p",{key:1,class:"desc",innerHTML:e.member.desc},null,8,b_)):M("",!0),e.member.links?(y(),k("div",A_,[x($r,{links:e.member.links,me:!1},null,8,["links"])])):M("",!0)])]),e.member.sponsor?(y(),k("div",P_,[x(ze,{class:"sp-link",href:e.member.sponsor,"no-icon":""},{default:V(()=>[t[0]||(t[0]=P("span",{class:"vpi-heart sp-icon"},null,-1)),rt(" "+G(e.member.actionText||"Sponsor"),1)]),_:1},8,["href"])])):M("",!0)],2))}}),k_=U(S_,[["__scopeId","data-v-962fd8c0"]]),R_={class:"container"},C_=j({__name:"VPTeamMembers",props:{size:{default:"medium"},members:{}},setup(n){const e=n,t=Q(()=>[e.size,`count-${e.members.length}`]);return(s,r)=>(y(),k("div",{class:ne(["VPTeamMembers",t.value])},[P("div",R_,[(y(!0),k(oe,null,Ie(s.members,o=>(y(),k("div",{key:o.name,class:"item"},[x(k_,{size:s.size,member:o},null,8,["size","member"])]))),128))])],2))}}),hP=U(C_,[["__scopeId","data-v-0e8561f6"]]),Ml={Layout:m_,enhanceApp:({app:n})=>{n.component("Badge",Ld)}},V_="🎉 Join Free Market Webinar 📈 → 🎓 Get 10% off 🎯 the Full Course.",N_="Open FREE TradingView Account",D_="Become a Sponsor",L_="Providing free market education and webinars for learners around the world — now and into the future — takes significant ongoing effort, made possible only through the generous financial support of our sponsors.",O_="Become a sponsor",M_="Start Your Trading Journey",$_="Self Study",F_="Register FREE & Get Life-Time Access To",x_="₹ 0",U_=["Trading with Price Action Volume Course","Free Market Introduction to Module 1 & 2","Posts on Trading Process and Strategy","Posts on Trading Business","Posts on Trader","Posts on Other","Posts on Trading Concepts"],B_="Our main course, 'Trading with Price Action Volume', is available for FREE self-study on the VIP Access page. Book a 'Free Market Introduction' online meeting by filling out the form.",j_="Volume Profile Tools",H_="Custom-Coded Indicators for TradingView",q_="Only",z_="₹ 3,000 /-",W_=["Identify Strongest Institutional S/R Zones.","Volume Profile (Flexible) Indicator.","Works on Index charts (Exclusive feature)","Extremely Fast & Very Easy to Use.","Works on all Instruments & Timeframes.","New features updates lifetime support","Lifetime Access with One-Time Payment."],G_="New traders seeking guidance on Volume Profile Tools are encouraged to begin with 'Module 5 - Volume Profile & VWAP', available within our course articles.",K_="Trading with PAV Course",Q_="One Course. Zero Clutter. Total Market Mastery.",J_="₹ 10,000 /-",X_=["Everthing from Self Study.","Volume Profile Tools Included Free.","Live Interactive Coaching via Google Meet.","1 to 1 Mentorship Support & Guidance.","Universal Trading Approach to any market.","Lifetime Access to Course syllabus."],Y_="🎉 Join Free Market Webinar 📈 → 🎓 Get 10% off 🎯 the Full Course.",Z_="🚧 Page Not Found 🚧",ev="🚨 Make sure the address is correct and the page hasn't moved.🚨",tv="Please 📞 contact your YS Trading Coach administrator if you think this is a mistake.",nv="Take me home",sv={view_banner_tip:V_,view_home_top_sponsor:N_,view_home_sponsor_title:D_,view_home_sponsor_desc:L_,view_home_sponsor_become_sponsor:O_,view_customize_title:M_,view_customize_free_title:$_,view_customize_free_desc:F_,view_customize_free_price:x_,view_customize_free_features:U_,view_customize_free_tip:B_,view_customize_sponsor_title:j_,view_customize_sponsor_desc:H_,view_customize_sponsor_sponsor:q_,view_customize_sponsor_price:z_,view_customize_sponsor_features:W_,view_customize_sponsor_tip:G_,view_customize_custom_title:K_,view_customize_custom_desc:Q_,view_customize_custom_price:J_,view_customize_custom_features:X_,view_customize_custom_tip:Y_,view_404_title:Z_,view_404_desc_1:ev,view_404_desc_2:tv,view_404_back_home:nv},rv={"en-US":sv};function ct(n,e="enUS"){return(rv[e]||{})[n]||n}const iv={__name:"Banner",setup(n){const{y:e}=fo(),t=K(!1),{lang:s}=an(),r=()=>{t.value=!1,document.documentElement.classList.remove("banner-fixed")};return je(()=>{t.value=!0,document.documentElement.classList.add("banner-fixed")}),(o,a)=>t.value?(y(),k("div",{key:0,class:ne(["banner",{top:w(e)===0}]),role:"banner"},[P("span",null,G(w(ct)("view_banner_tip",w(s))),1),P("button",{class:"banner-close",onClick:ts(r,["prevent"])},[...a[0]||(a[0]=[P("span",{class:"close"},"×",-1)])])],2)):M("",!0)}},ov=U(iv,[["__scopeId","data-v-c40cf360"]]),av={class:"asideSponsor",href:"https://www.tradingview.com/?aff_id=157032",target:"_blank",rel:"noopener noreferrer"},cv={style:{padding:"6px 22px 0 22px","text-align":"center"}},lv={__name:"AsideSponsor",setup(n){const{isDark:e,lang:t}=an();return(s,r)=>(y(),k("a",av,[P("img",{class:ne({invert:w(e)}),src:kl,alt:"tradingx"},null,2),P("span",cv,G(w(t)==="zh-CN"?"以免费赋能专业，以创新重塑交易":"A charting platform used by 100M+ traders and investors worldwide to spot opportunities across global markets."),1)]))}},uv=U(lv,[["__scopeId","data-v-560bfc5f"]]),hv={class:"topSponsor"},dv={href:"https://www.tradingview.com/?aff_id=157032",target:"_blank",rel:"noopener noreferrer"},fv={__name:"TopSponsor",setup(n){const{isDark:e,lang:t}=an();return(s,r)=>(y(),k("div",hv,[P("a",dv,[P("span",null,G(w(ct)("view_home_top_sponsor",w(t))),1),P("img",{class:ne({invert:w(e)}),src:kl,alt:"tradingx"},null,2)])]))}},pv=U(fv,[["__scopeId","data-v-1d7da589"]]),mv={class:"content"},gv={class:"title"},_v={class:"description"},vv={__name:"Section",props:["title","description","outClass"],setup(n){const e=n;return(t,s)=>(y(),k("section",{class:ne(["section",e.outClass])},[P("div",mv,[P("h2",gv,G(e.title),1),P("p",_v,G(e.description),1),C(t.$slots,"default",{},void 0,!0)])],2))}},yv=U(vv,[["__scopeId","data-v-93503b6c"]]),Ev={key:0,class:"dot-container"},Tv={__name:"Particle",props:{color:{type:String,default:"var(--vp-c-indigo-1)"}},setup(n,{expose:e}){const s=Cd({"--dot-color":n.color}),r=K(!1);function o(){r.value=!0,setTimeout(()=>{r.value=!1},1500)}return e({start:o}),(a,l)=>(y(),k("div",{class:"particle",style:uo(s)},[C(a.$slots,"default",{},void 0,!0),r.value?(y(),k("div",Ev,[...l[0]||(l[0]=[Vd('<div class="dot dot-1" data-v-fcea6223></div><div class="dot dot-2" data-v-fcea6223></div><div class="dot dot-3" data-v-fcea6223></div><div class="dot dot-4" data-v-fcea6223></div><div class="dot dot-5" data-v-fcea6223></div><div class="dot dot-6" data-v-fcea6223></div>',6)])])):M("",!0)],4))}},Iv=U(Tv,[["__scopeId","data-v-fcea6223"]]),wv={class:"sponsor"},bv={class:"sponsor-grid sponsor-top-grid"},Av=["href"],Pv=["src"],Sv={key:0,class:"text"},kv=["href"],Rv=["src"],Cv={key:0,class:"text"},Vv=["href"],Nv=["src"],Dv={key:0,class:"text"},Lv={key:0,class:"sponsor-grid sponsor-platinum-grid"},Ov=["href"],Mv=["src"],$v={key:1,class:"sponsor-grid sponsor-gold-grid"},Fv=["href"],xv=["src"],Uv={class:"sponsor-become"},Bv={__name:"Sponsor",setup(n){const e=[{name:"Amazon Afflitate",text:"Gold Sponsor",logo:"",website:"https://amzn.to/4mcuFHR",amount:1600},{name:"flameOnYou",text:"Platinum Sponsor",logo:"",website:"https://amzn.to/4mcuFHR",amount:2100},{name:"糊涂",text:"Amazon Affiliate",logo:"",website:"https://amzn.to/4mcuFHR",amount:18.8}];e.sort((d,_)=>_.amount-d.amount);const t=[],s=[];for(let d=3;d<e.length;d++){const _=e[d];_.amount>=5e3?t.push(_):s.push(_)}const r=K(t),o=K(s),{lang:a}=an(),l=K(null);function h(){l.value&&l.value.start&&l.value.start()}return(d,_)=>(y(),H(yv,{title:w(ct)("view_home_sponsor_title",w(a)),description:w(ct)("view_home_sponsor_desc",w(a))},{default:V(()=>[P("div",wv,[P("div",bv,[P("a",{class:"sponsor-grid-item item-no1",href:e[0].website,target:"_blank",rel:"noreferrer"},[P("img",{class:"image",src:e[0].logo},null,8,Pv),e[0].text?(y(),k("span",Sv,G(e[0].text),1)):M("",!0)],8,Av),P("a",{class:"sponsor-grid-item item-no2-no3",href:e[1].website,target:"_blank",rel:"noreferrer"},[P("img",{class:"image",src:e[1].logo},null,8,Rv),e[1].text?(y(),k("span",Cv,G(e[1].text),1)):M("",!0)],8,kv),e[2]?(y(),k("a",{key:0,class:"sponsor-grid-item item-no2-no3",href:e[2].website,target:"_blank",rel:"noreferrer"},[P("img",{class:"image",src:e[2].logo},null,8,Nv),e[2].text?(y(),k("span",Dv,G(e[2].text),1)):M("",!0)],8,Vv)):M("",!0)]),r.value.length>0?(y(),k("div",Lv,[(y(!0),k(oe,null,Ie(r.value,g=>(y(),k("a",{class:"sponsor-grid-item item",target:"_blank",rel:"noreferrer",href:g.website},[P("img",{class:"image",src:g.logo},null,8,Mv)],8,Ov))),256))])):M("",!0),o.value.length>0?(y(),k("div",$v,[(y(!0),k(oe,null,Ie(o.value,g=>(y(),k("a",{class:"sponsor-grid-item item",target:"_blank",rel:"noreferrer",href:g.website},[P("img",{class:"image",src:g.logo},null,8,xv)],8,Fv))),256))])):M("",!0),P("div",Uv,[P("a",{target:"_blank",rel:"noreferrer",href:"https://payments.cashfree.com/forms/ystcsponsor",onMouseenter:h},[x(Iv,{ref_key:"particle",ref:l},{default:V(()=>[..._[0]||(_[0]=[P("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[P("path",{fill:"currentColor",d:"m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7z"})],-1)])]),_:1},512),rt(" "+G(w(ct)("view_home_sponsor_become_sponsor",w(a))),1)],32)])])]),_:1},8,["title","description"]))}},jv=U(Bv,[["__scopeId","data-v-e63180b7"]]),Hv={class:"NotFound"},qv={class:"title"},zv={class:"tip",style:{"margin-top":"30px"}},Wv={class:"tip"},Gv={class:"action"},Kv=["href"],Qv={__name:"NotFound",setup(n){const{lang:e}=an(),t=K("/");return je(()=>{t.value=(e.value==="zh-CN","/")}),(s,r)=>(y(),k("div",Hv,[r[0]||(r[0]=P("div",{class:"logo"},[P("span",null,"4"),P("img",{src:Nd}),P("span",null,"4")],-1)),P("p",qv,G(w(ct)("view_404_title",w(e))),1),P("p",zv,G(w(ct)("view_404_desc_1",w(e))),1),P("p",Wv,G(w(ct)("view_404_desc_2",w(e))),1),P("div",Gv,[P("a",{class:"link",href:w(Dr)(t.value),"aria-label":"go to home"},G(w(ct)("view_404_back_home",w(e))),9,Kv)])]))}},Jv=U(Qv,[["__scopeId","data-v-e8bc883e"]]),Xv=j({__name:"Layout",setup(n){const{isDark:e}=an(),t=()=>"startViewTransition"in document&&window.matchMedia("(prefers-reduced-motion: no-preference)").matches;return po("toggle-appearance",async({clientX:s,clientY:r})=>{if(!t()){e.value=!e.value;return}const o=[`circle(0px at ${s}px ${r}px)`,`circle(${Math.hypot(Math.max(s,innerWidth-s),Math.max(r,innerHeight-r))}px at ${s}px ${r}px)`];await document.startViewTransition(async()=>{e.value=!e.value,await ho()}).ready,document.documentElement.animate({clipPath:e.value?o.reverse():o},{duration:300,easing:"ease-in",fill:"forwards",pseudoElement:`::view-transition-${e.value?"old":"new"}(root)`})}),(s,r)=>(y(),H(w(Ml).Layout,null,{"layout-top":V(()=>[x(ov)]),"home-features-before":V(()=>[x(pv)]),"home-features-after":V(()=>[x(jv)]),"aside-outline-after":V(()=>[x(uv)]),"not-found":V(()=>[x(Jv)]),_:1}))}}),Yv=()=>{};var cc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Zv=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=n[t++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=n[t++],a=n[t++],l=n[t++],h=((r&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Fl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const o=n[r],a=r+1<n.length,l=a?n[r+1]:0,h=r+2<n.length,d=h?n[r+2]:0,_=o>>2,g=(o&3)<<4|l>>4;let S=(l&15)<<2|d>>6,L=d&63;h||(L=64,a||(S=64)),s.push(t[_],t[g],t[S],t[L])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($l(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Zv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const o=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,o==null||l==null||d==null||g==null)throw new ey;const S=o<<2|l>>4;if(s.push(S),d!==64){const L=l<<4&240|d>>2;if(s.push(L),g!==64){const F=d<<6&192|g;s.push(F)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ey extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ty=function(n){const e=$l(n);return Fl.encodeByteArray(e,!0)},fr=function(n){return ty(n).replace(/\./g,"")},xl=function(n){try{return Fl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=()=>ny().__FIREBASE_DEFAULTS__,ry=()=>{if(typeof process>"u"||typeof cc>"u")return;const n=cc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},iy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xl(n[1]);return e&&JSON.parse(e)},Fr=()=>{try{return Yv()||sy()||ry()||iy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ul=n=>Fr()?.emulatorHosts?.[n],oy=n=>{const e=Ul(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Bl=()=>Fr()?.config,jl=n=>Fr()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[fr(JSON.stringify(t)),fr(JSON.stringify(a)),""].join(".")}const ss={};function ly(){const n={prod:[],emulator:[]};for(const e of Object.keys(ss))ss[e]?n.emulator.push(e):n.prod.push(e);return n}function uy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let lc=!1;function ql(n,e){if(typeof window>"u"||typeof document>"u"||!Cn(window.location.host)||ss[n]===e||ss[n]||lc)return;ss[n]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",o=ly().prod.length>0;function a(){const S=document.getElementById(s);S&&S.remove()}function l(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function h(S,L){S.setAttribute("width","24"),S.setAttribute("id",L),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function d(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{lc=!0,a()},S}function _(S,L){S.setAttribute("id",L),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function g(){const S=uy(s),L=t("text"),F=document.getElementById(L)||document.createElement("span"),z=t("learnmore"),$=document.getElementById(z)||document.createElement("a"),Z=t("preprendIcon"),re=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ae=S.element;l(ae),_($,z);const xe=d();h(re,Z),ae.append(re,F,$,xe),document.body.appendChild(ae)}o?(F.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,F.innerText="Preview backend running in this workspace."),F.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function dy(){const n=Fr()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function py(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function my(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gy(){const n=Ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _y(){return!dy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vy(){try{return typeof indexedDB=="object"}catch{return!1}}function yy(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="FirebaseError";class vt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Ey,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?Ty(o,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new vt(r,l,s)}}function Ty(n,e){return n.replace(Iy,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Iy=/\{\$([^}]+)}/g;function wy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const o=n[r],a=e[r];if(uc(o)&&uc(a)){if(!Yt(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function uc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Yn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,o]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(o)}}),e}function Zn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function by(n,e){const t=new Ay(n,e);return t.subscribe.bind(t)}class Ay{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Py(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Ti),r.error===void 0&&(r.error=Ti),r.complete===void 0&&(r.complete=Ti);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Py(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ti(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n){return n&&n._delegate?n._delegate:n}class Zt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ay;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ry(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);s===l&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ky(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ky(n){return n===Gt?void 0:n}function Ry(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Sy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const Vy={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Ny=te.INFO,Dy={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Ly=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Dy[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eo{constructor(e){this.name=e,this._logLevel=Ny,this._logHandler=Ly,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Oy=(n,e)=>e.some(t=>n instanceof t);let hc,dc;function My(){return hc||(hc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $y(){return dc||(dc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zl=new WeakMap,xi=new WeakMap,Wl=new WeakMap,Ii=new WeakMap,To=new WeakMap;function Fy(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Dt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&zl.set(t,n)}).catch(()=>{}),To.set(e,n),e}function xy(n){if(xi.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});xi.set(n,e)}let Ui={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Uy(n){Ui=n(Ui)}function By(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(wi(this),e,...t);return Wl.set(s,e.sort?e.sort():[e]),Dt(s)}:$y().includes(n)?function(...e){return n.apply(wi(this),e),Dt(zl.get(this))}:function(...e){return Dt(n.apply(wi(this),e))}}function jy(n){return typeof n=="function"?By(n):(n instanceof IDBTransaction&&xy(n),Oy(n,My())?new Proxy(n,Ui):n)}function Dt(n){if(n instanceof IDBRequest)return Fy(n);if(Ii.has(n))return Ii.get(n);const e=jy(n);return e!==n&&(Ii.set(n,e),To.set(e,n)),e}const wi=n=>To.get(n);function Hy(n,e,{blocked:t,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(n,e),l=Dt(a);return s&&a.addEventListener("upgradeneeded",h=>{s(Dt(a.result),h.oldVersion,h.newVersion,Dt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),r&&h.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const qy=["get","getKey","getAll","getAllKeys","count"],zy=["put","add","delete","clear"],bi=new Map;function fc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(bi.get(e))return bi.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=zy.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||qy.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,r?"readwrite":"readonly");let d=h.store;return s&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),r&&h.done]))[0]};return bi.set(e,o),o}Uy(n=>({...n,get:(e,t,s)=>fc(e,t)||n.get(e,t,s),has:(e,t)=>!!fc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gy(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Gy(n){return n.getComponent()?.type==="VERSION"}const Bi="@firebase/app",pc="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new Eo("@firebase/app"),Ky="@firebase/app-compat",Qy="@firebase/analytics-compat",Jy="@firebase/analytics",Xy="@firebase/app-check-compat",Yy="@firebase/app-check",Zy="@firebase/auth",eE="@firebase/auth-compat",tE="@firebase/database",nE="@firebase/data-connect",sE="@firebase/database-compat",rE="@firebase/functions",iE="@firebase/functions-compat",oE="@firebase/installations",aE="@firebase/installations-compat",cE="@firebase/messaging",lE="@firebase/messaging-compat",uE="@firebase/performance",hE="@firebase/performance-compat",dE="@firebase/remote-config",fE="@firebase/remote-config-compat",pE="@firebase/storage",mE="@firebase/storage-compat",gE="@firebase/firestore",_E="@firebase/ai",vE="@firebase/firestore-compat",yE="firebase",EE="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="[DEFAULT]",TE={[Bi]:"fire-core",[Ky]:"fire-core-compat",[Jy]:"fire-analytics",[Qy]:"fire-analytics-compat",[Yy]:"fire-app-check",[Xy]:"fire-app-check-compat",[Zy]:"fire-auth",[eE]:"fire-auth-compat",[tE]:"fire-rtdb",[nE]:"fire-data-connect",[sE]:"fire-rtdb-compat",[rE]:"fire-fn",[iE]:"fire-fn-compat",[oE]:"fire-iid",[aE]:"fire-iid-compat",[cE]:"fire-fcm",[lE]:"fire-fcm-compat",[uE]:"fire-perf",[hE]:"fire-perf-compat",[dE]:"fire-rc",[fE]:"fire-rc-compat",[pE]:"fire-gcs",[mE]:"fire-gcs-compat",[gE]:"fire-fst",[vE]:"fire-fst-compat",[_E]:"fire-vertex","fire-js":"fire-js",[yE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Map,IE=new Map,Hi=new Map;function mc(n,e){try{n.container.addComponent(e)}catch(t){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bn(n){const e=n.name;if(Hi.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;Hi.set(e,n);for(const t of pr.values())mc(t,n);for(const t of IE.values())mc(t,n);return!0}function Io(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new Is("app","Firebase",wE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=EE;function Gl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ji,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Lt.create("bad-app-name",{appName:String(r)});if(t||(t=Bl()),!t)throw Lt.create("no-options");const o=pr.get(r);if(o){if(Yt(t,o.options)&&Yt(s,o.config))return o;throw Lt.create("duplicate-app",{appName:r})}const a=new Cy(r);for(const h of Hi.values())a.addComponent(h);const l=new bE(t,s,a);return pr.set(r,l),l}function Kl(n=ji){const e=pr.get(n);if(!e&&n===ji&&Bl())return Gl();if(!e)throw Lt.create("no-app",{appName:n});return e}function Ot(n,e,t){let s=TE[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mt.warn(a.join(" "));return}bn(new Zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="firebase-heartbeat-database",PE=1,us="firebase-heartbeat-store";let Ai=null;function Ql(){return Ai||(Ai=Hy(AE,PE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(us)}catch(t){console.warn(t)}}}}).catch(n=>{throw Lt.create("idb-open",{originalErrorMessage:n.message})})),Ai}async function SE(n){try{const t=(await Ql()).transaction(us),s=await t.objectStore(us).get(Jl(n));return await t.done,s}catch(e){if(e instanceof vt)mt.warn(e.message);else{const t=Lt.create("idb-get",{originalErrorMessage:e?.message});mt.warn(t.message)}}}async function gc(n,e){try{const s=(await Ql()).transaction(us,"readwrite");await s.objectStore(us).put(e,Jl(n)),await s.done}catch(t){if(t instanceof vt)mt.warn(t.message);else{const s=Lt.create("idb-set",{originalErrorMessage:t?.message});mt.warn(s.message)}}}function Jl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=1024,RE=30;class CE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new NE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_c();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>RE){const r=DE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){mt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_c(),{heartbeatsToSend:t,unsentEntries:s}=VE(this._heartbeatsCache.heartbeats),r=fr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return mt.warn(e),""}}}function _c(){return new Date().toISOString().substring(0,10)}function VE(n,e=kE){const t=[];let s=n.slice();for(const r of n){const o=t.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),vc(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),vc(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class NE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vy()?yy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await SE(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return gc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return gc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vc(n){return fr(JSON.stringify({version:2,heartbeats:n})).length}function DE(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(n){bn(new Zt("platform-logger",e=>new Wy(e),"PRIVATE")),bn(new Zt("heartbeat",e=>new CE(e),"PRIVATE")),Ot(Bi,pc,n),Ot(Bi,pc,"esm2020"),Ot("fire-js","")}LE("");var OE="firebase",ME="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(OE,ME,"app");function Xl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $E=Xl,Yl=new Is("auth","Firebase",Xl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new Eo("@firebase/auth");function FE(n,...e){mr.logLevel<=te.WARN&&mr.warn(`Auth (${Vn}): ${n}`,...e)}function sr(n,...e){mr.logLevel<=te.ERROR&&mr.error(`Auth (${Vn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n,...e){throw wo(n,...e)}function nt(n,...e){return wo(n,...e)}function Zl(n,e,t){const s={...$E(),[e]:t};return new Is("auth","Firebase",s).create(e,{appName:n.name})}function ht(n){return Zl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wo(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Yl.create(n,...e)}function W(n,e,...t){if(!n)throw wo(e,...t)}function lt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw sr(e),new Error(e)}function gt(n,e){n||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(){return typeof self<"u"&&self.location?.href||""}function xE(){return yc()==="http:"||yc()==="https:"}function yc(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xE()||py()||"connection"in navigator)?navigator.onLine:!0}function BE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t){this.shortDelay=e,this.longDelay=t,gt(t>e,"Short delay should be less than long delay!"),this.isMobile=hy()||my()}get(){return UE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(n,e){gt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qE=new bs(3e4,6e4);function yt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Et(n,e,t,s,r={}){return tu(n,r,async()=>{let o={},a={};s&&(e==="GET"?a=s:o={body:JSON.stringify(s)});const l=ws({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:h,...o};return fy()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Cn(n.emulatorConfig.host)&&(d.credentials="include"),eu.fetch()(await nu(n,n.config.apiHost,t,l),d)})}async function tu(n,e,t){n._canInitEmulator=!1;const s={...jE,...e};try{const r=new WE(n),o=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Qs(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,d]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qs(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Qs(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Qs(n,"user-disabled",a);const _=s[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Zl(n,_,d);Xe(n,_)}}catch(r){if(r instanceof vt)throw r;Xe(n,"network-request-failed",{message:String(r)})}}async function As(n,e,t,s,r={}){const o=await Et(n,e,t,s,r);return"mfaPendingCredential"in o&&Xe(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function nu(n,e,t,s){const r=`${e}${t}?${s}`,o=n,a=o.config.emulator?bo(n.config,r):`${n.config.apiScheme}://${r}`;return HE.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function zE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(nt(this.auth,"network-request-failed")),qE.get())})}}function Qs(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=nt(n,e,s);return r.customData._tokenResponse=t,r}function Ec(n){return n!==void 0&&n.enterprise!==void 0}class GE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return zE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function KE(n,e){return Et(n,"GET","/v2/recaptchaConfig",yt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(n,e){return Et(n,"POST","/v1/accounts:delete",e)}async function gr(n,e){return Et(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JE(n,e=!1){const t=Be(n),s=await t.getIdToken(e),r=Ao(s);W(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,a=o?.sign_in_provider;return{claims:r,token:s,authTime:rs(Pi(r.auth_time)),issuedAtTime:rs(Pi(r.iat)),expirationTime:rs(Pi(r.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Pi(n){return Number(n)*1e3}function Ao(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return sr("JWT malformed, contained fewer than 3 sections"),null;try{const r=xl(t);return r?JSON.parse(r):(sr("Failed to decode base64 JWT payload"),null)}catch(r){return sr("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Tc(n){const e=Ao(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof vt&&XE(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function XE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rs(this.lastLoginAt),this.creationTime=rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(n){const e=n.auth,t=await n.getIdToken(),s=await hs(n,gr(e,{idToken:t}));W(s?.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=r.providerUserInfo?.length?su(r.providerUserInfo):[],a=eT(n.providerData,o),l=n.isAnonymous,h=!(n.email&&r.passwordHash)&&!a?.length,d=l?h:!1,_={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new zi(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,_)}async function ZE(n){const e=Be(n);await _r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eT(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function su(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(n,e){const t=await tu(n,{},async()=>{const s=ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=n.config,a=await nu(n,r,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:s};return n.emulatorConfig&&Cn(n.emulatorConfig.host)&&(h.credentials="include"),eu.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function nT(n,e){return Et(n,"POST","/v2/accounts:revokeToken",yt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=Tc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:o}=await tT(e,t);this.updateTokensAndExpiration(s,r,Number(o))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:o}=t,a=new yn;return s&&(W(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(W(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),o&&(W(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yn,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qe{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new YE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new zi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await hs(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return JE(this,e)}reload(){return ZE(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await _r(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(ht(this.auth));const e=await this.getIdToken();return await hs(this,QE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,h=t._redirectEventId??void 0,d=t.createdAt??void 0,_=t.lastLoginAt??void 0,{uid:g,emailVerified:S,isAnonymous:L,providerData:F,stsTokenManager:z}=t;W(g&&z,e,"internal-error");const $=yn.fromJSON(this.name,z);W(typeof g=="string",e,"internal-error"),St(s,e.name),St(r,e.name),W(typeof S=="boolean",e,"internal-error"),W(typeof L=="boolean",e,"internal-error"),St(o,e.name),St(a,e.name),St(l,e.name),St(h,e.name),St(d,e.name),St(_,e.name);const Z=new Qe({uid:g,auth:e,email:r,emailVerified:S,displayName:s,isAnonymous:L,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:$,createdAt:d,lastLoginAt:_});return F&&Array.isArray(F)&&(Z.providerData=F.map(re=>({...re}))),h&&(Z._redirectEventId=h),Z}static async _fromIdTokenResponse(e,t,s=!1){const r=new yn;r.updateFromServerResponse(t);const o=new Qe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await _r(o),o}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];W(r.localId!==void 0,"internal-error");const o=r.providerUserInfo!==void 0?su(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!o?.length,l=new yn;l.updateFromIdToken(s);const h=new Qe({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new zi(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!o?.length};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Map;function ut(n){gt(n instanceof Function,"Expected a class definition");let e=Ic.get(n);return e?(gt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ic.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ru.type="NONE";const wc=ru;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n,e,t){return`firebase:${n}:${e}:${t}`}class En{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:o}=this.auth;this.fullUserKey=rr(this.userKey,r.apiKey,o),this.fullPersistenceKey=rr("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await gr(this.auth,{idToken:e}).catch(()=>{});return t?Qe._fromGetAccountInfoResponse(this.auth,t,e):null}return Qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new En(ut(wc),e,s);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=r[0]||ut(wc);const a=rr(s,e.config.apiKey,e.name);let l=null;for(const d of t)try{const _=await d._get(a);if(_){let g;if(typeof _=="string"){const S=await gr(e,{idToken:_}).catch(()=>{});if(!S)break;g=await Qe._fromGetAccountInfoResponse(e,S,_)}else g=Qe._fromJSON(e,_);d!==o&&(l=g),o=d;break}}catch{}const h=r.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new En(o,e,s):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new En(o,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uu(e))return"Blackberry";if(hu(e))return"Webos";if(ou(e))return"Safari";if((e.includes("chrome/")||au(e))&&!e.includes("edge/"))return"Chrome";if(lu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function iu(n=Ne()){return/firefox\//i.test(n)}function ou(n=Ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function au(n=Ne()){return/crios\//i.test(n)}function cu(n=Ne()){return/iemobile/i.test(n)}function lu(n=Ne()){return/android/i.test(n)}function uu(n=Ne()){return/blackberry/i.test(n)}function hu(n=Ne()){return/webos/i.test(n)}function Po(n=Ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sT(n=Ne()){return Po(n)&&!!window.navigator?.standalone}function rT(){return gy()&&document.documentMode===10}function du(n=Ne()){return Po(n)||lu(n)||hu(n)||uu(n)||/windows phone/i.test(n)||cu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(n,e=[]){let t;switch(n){case"Browser":t=bc(Ne());break;case"Worker":t=`${bc(Ne())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(n,e={}){return Et(n,"GET","/v2/passwordPolicy",yt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=6;class cT{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??aT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ac(this),this.idTokenSubscription=new Ac(this),this.beforeStateQueue=new iT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ut(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await En.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gr(this,{idToken:e}),s=await Qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _r(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(ht(this));const t=e?Be(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oT(this),t=new cT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await nT(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ut(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[ut(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,s,r);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&FE(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ut(n){return Be(n)}class Ac{constructor(e){this.auth=e,this.observer=null,this.addObserver=by(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uT(n){xr=n}function pu(n){return xr.loadJS(n)}function hT(){return xr.recaptchaEnterpriseScript}function dT(){return xr.gapiScript}function fT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class pT{constructor(){this.enterprise=new mT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class mT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const gT="recaptcha-enterprise",mu="NO_RECAPTCHA";class _T{constructor(e){this.type=gT,this.auth=Ut(e)}async verify(e="verify",t=!1){async function s(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{KE(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new GE(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{l(h)})})}function r(o,a,l){const h=window.grecaptcha;Ec(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(mu)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pT().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{s(this.auth).then(l=>{if(!t&&Ec(window.grecaptcha))r(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=hT();h.length!==0&&(h+=l),pu(h).then(()=>{r(l,o,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Pc(n,e,t,s=!1,r=!1){const o=new _T(n);let a;if(r)a=mu;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const h=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const h=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function vr(n,e,t,s,r){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Pc(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Pc(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(n,e){const t=Io(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),o=t.getOptions();if(Yt(o,e??{}))return r;Xe(r,"already-initialized")}return t.initialize({options:e})}function yT(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(ut);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function ET(n,e,t){const s=Ut(n);W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,o=gu(e),{host:a,port:l}=TT(e),h=l===null?"":`:${l}`,d={url:`${o}//${a}${h}/`},_=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){W(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),W(Yt(d,s.config.emulator)&&Yt(_,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=_,s.settings.appVerificationDisabledForTesting=!0,Cn(a)?(Hl(`${o}//${a}${h}`),ql("Auth",!0)):IT()}function gu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function TT(n){const e=gu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const o=r[1];return{host:o,port:Sc(s.substr(o.length+1))}}else{const[o,a]=s.split(":");return{host:o,port:Sc(a)}}}function Sc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function IT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,t){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function wT(n,e){return Et(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(n,e){return As(n,"POST","/v1/accounts:signInWithPassword",yt(n,e))}async function AT(n,e){return Et(n,"POST","/v1/accounts:sendOobCode",yt(n,e))}async function PT(n,e){return AT(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(n,e){return As(n,"POST","/v1/accounts:signInWithEmailLink",yt(n,e))}async function kT(n,e){return As(n,"POST","/v1/accounts:signInWithEmailLink",yt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends So{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ds(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ds(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vr(e,t,"signInWithPassword",bT);case"emailLink":return ST(e,{email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vr(e,s,"signUpPassword",wT);case"emailLink":return kT(e,{idToken:t,email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(n,e){return As(n,"POST","/v1/accounts:signInWithIdp",yt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="http://localhost";class en extends So{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...o}=t;if(!s||!r)return null;const a=new en(s,r);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Tn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Tn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tn(e,t)}buildRequest(){const e={requestUri:RT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ws(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VT(n){const e=Yn(Zn(n)).link,t=e?Yn(Zn(e)).deep_link_id:null,s=Yn(Zn(n)).deep_link_id;return(s?Yn(Zn(s)).link:null)||s||t||e||n}class ko{constructor(e){const t=Yn(Zn(e)),s=t.apiKey??null,r=t.oobCode??null,o=CT(t.mode??null);W(s&&r&&o,"argument-error"),this.apiKey=s,this.operation=o,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=VT(e);try{return new ko(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.providerId=Nn.PROVIDER_ID}static credential(e,t){return ds._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ko.parseLink(t);return W(s,"argument-error"),ds._fromEmailAndCode(e,s.code,s.tenantId)}}Nn.PROVIDER_ID="password";Nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends _u{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Ps{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Ps{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return en._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Rt.credential(t,s)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Ps{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Ps{constructor(){super("twitter.com")}static credential(e,t){return en._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Vt.credential(t,s)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NT(n,e){return As(n,"POST","/v1/accounts:signUp",yt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const o=await Qe._fromIdTokenResponse(e,s,r),a=kc(s);return new tn({user:o,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=kc(s);return new tn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function kc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends vt{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,yr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new yr(e,t,s,r)}}function vu(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?yr._fromErrorAndOperation(n,o,e,s):o})}async function DT(n,e,t=!1){const s=await hs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return tn._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(n,e,t=!1){const{auth:s}=n;if(qe(s.app))return Promise.reject(ht(s));const r="reauthenticate";try{const o=await hs(n,vu(s,r,e,n),t);W(o.idToken,s,"internal-error");const a=Ao(o.idToken);W(a,s,"internal-error");const{sub:l}=a;return W(n.uid===l,s,"user-mismatch"),tn._forOperation(n,r,o)}catch(o){throw o?.code==="auth/user-not-found"&&Xe(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(n,e,t=!1){if(qe(n.app))return Promise.reject(ht(n));const s="signIn",r=await vu(n,s,e),o=await tn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(o.user),o}async function OT(n,e){return yu(Ut(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eu(n){const e=Ut(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function MT(n,e,t){const s=Ut(n);await vr(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",PT)}async function $T(n,e,t){if(qe(n.app))return Promise.reject(ht(n));const s=Ut(n),a=await vr(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NT).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Eu(n),h}),l=await tn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function FT(n,e,t){return qe(n.app)?Promise.reject(ht(n)):OT(Be(n),Nn.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Eu(n),s})}function xT(n,e,t,s){return Be(n).onIdTokenChanged(e,t,s)}function UT(n,e,t){return Be(n).beforeAuthStateChanged(e,t)}function Tu(n,e,t,s){return Be(n).onAuthStateChanged(e,t,s)}function BT(n){return Be(n).signOut()}const Er="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Er,"1"),this.storage.removeItem(Er),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=1e3,HT=10;class wu extends Iu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=du(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},o=this.storage.getItem(s);rT()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,HT):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},jT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wu.type="LOCAL";const qT=wu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends Iu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bu.type="SESSION";const Au=bu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Ur(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:o}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(a).map(async d=>d(t.origin,o)),h=await zT(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ur.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const d=Ro("",20);r.port1.start();const _=setTimeout(()=>{h(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const S=g;if(S.data.eventId===d)switch(S.data.status){case"ack":clearTimeout(_),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(S.data.response);break;default:clearTimeout(_),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return window}function GT(n){st().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function KT(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QT(){return navigator?.serviceWorker?.controller||null}function JT(){return Pu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="firebaseLocalStorageDb",XT=1,Tr="firebaseLocalStorage",ku="fbase_key";class Ss{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Br(n,e){return n.transaction([Tr],e?"readwrite":"readonly").objectStore(Tr)}function YT(){const n=indexedDB.deleteDatabase(Su);return new Ss(n).toPromise()}function Wi(){const n=indexedDB.open(Su,XT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Tr,{keyPath:ku})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Tr)?e(s):(s.close(),await YT(),e(await Wi()))})})}async function Rc(n,e,t){const s=Br(n,!0).put({[ku]:e,value:t});return new Ss(s).toPromise()}async function ZT(n,e){const t=Br(n,!1).get(e),s=await new Ss(t).toPromise();return s===void 0?null:s.value}function Cc(n,e){const t=Br(n,!0).delete(e);return new Ss(t).toPromise()}const eI=800,tI=3;class Ru{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>tI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ur._getInstance(JT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await KT(),!this.activeServiceWorker)return;this.sender=new WT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wi();return await Rc(e,Er,"1"),await Cc(e,Er),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Rc(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>ZT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=Br(r,!1).getAll();return new Ss(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:o}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ru.type="LOCAL";const nI=Ru;new bs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(n,e){return e?ut(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends So{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rI(n){return yu(n.auth,new Co(n),n.bypassAuthState)}function iI(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),LT(t,new Co(n),n.bypassAuthState)}async function oI(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),DT(t,new Co(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t,s,r,o=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:s,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rI;case"linkViaPopup":case"linkViaRedirect":return oI;case"reauthViaPopup":case"reauthViaRedirect":return iI;default:Xe(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=new bs(2e3,1e4);class vn extends Cu{constructor(e,t,s,r,o){super(e,t,r,o),this.provider=s,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const e=Ro();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aI.get())};e()}}vn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI="pendingRedirect",ir=new Map;class lI extends Cu{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ir.get(this.auth._key());if(!e){try{const s=await uI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ir.set(this.auth._key(),e)}return this.bypassAuthState||ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uI(n,e){const t=fI(e),s=dI(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function hI(n,e){ir.set(n._key(),e)}function dI(n){return ut(n._redirectPersistence)}function fI(n){return rr(cI,n.config.apiKey,n.name)}async function pI(n,e,t=!1){if(qe(n.app))return Promise.reject(ht(n));const s=Ut(n),r=sI(s,e),a=await new lI(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=600*1e3;class gI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_I(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Vu(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(nt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vc(e))}saveEventToCache(e){this.cachedEventUids.add(Vc(e)),this.lastProcessedEventTime=Date.now()}}function Vc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Vu({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function _I(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(n,e={}){return Et(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EI=/^https?/;async function TI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vI(n);for(const t of e)try{if(II(t))return}catch{}Xe(n,"unauthorized-domain")}function II(n){const e=qi(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!EI.test(t))return!1;if(yI.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=new bs(3e4,6e4);function Nc(){const n=st().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function bI(n){return new Promise((e,t)=>{function s(){Nc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nc(),t(nt(n,"network-request-failed"))},timeout:wI.get()})}if(st().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(st().gapi?.load)s();else{const r=fT("iframefcb");return st()[r]=()=>{gapi.load?s():t(nt(n,"network-request-failed"))},pu(`${dT()}?onload=${r}`).catch(o=>t(o))}}).catch(e=>{throw or=null,e})}let or=null;function AI(n){return or=or||bI(n),or}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=new bs(5e3,15e3),SI="__/auth/iframe",kI="emulator/auth/iframe",RI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VI(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?bo(e,kI):`https://${n.config.authDomain}/${SI}`,s={apiKey:e.apiKey,appName:n.name,v:Vn},r=CI.get(n.config.apiHost);r&&(s.eid=r);const o=n._getFrameworks();return o.length&&(s.fw=o.join(",")),`${t}?${ws(s).slice(1)}`}async function NI(n){const e=await AI(n),t=st().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:VI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RI,dontclear:!0},s=>new Promise(async(r,o)=>{await s.restyle({setHideOnLeave:!1});const a=nt(n,"network-request-failed"),l=st().setTimeout(()=>{o(a)},PI.get());function h(){st().clearTimeout(l),r(s)}s.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LI=500,OI=600,MI="_blank",$I="http://localhost";class Dc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FI(n,e,t,s=LI,r=OI){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const h={...DI,width:s.toString(),height:r.toString(),top:o,left:a},d=Ne().toLowerCase();t&&(l=au(d)?MI:t),iu(d)&&(e=e||$I,h.scrollbars="yes");const _=Object.entries(h).reduce((S,[L,F])=>`${S}${L}=${F},`,"");if(sT(d)&&l!=="_self")return xI(e||"",l),new Dc(null);const g=window.open(e||"",l,_);W(g,n,"popup-blocked");try{g.focus()}catch{}return new Dc(g)}function xI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="__/auth/handler",BI="emulator/auth/handler",jI=encodeURIComponent("fac");async function Lc(n,e,t,s,r,o){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Vn,eventId:r};if(e instanceof _u){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",wy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,g]of Object.entries({}))a[_]=g}if(e instanceof Ps){const _=e.getScopes().filter(g=>g!=="");_.length>0&&(a.scopes=_.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const _ of Object.keys(l))l[_]===void 0&&delete l[_];const h=await n._getAppCheckToken(),d=h?`#${jI}=${encodeURIComponent(h)}`:"";return`${HI(n)}?${ws(l).slice(1)}${d}`}function HI({config:n}){return n.emulator?bo(n,BI):`https://${n.authDomain}/${UI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="webStorageSupport";class qI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Au,this._completeRedirectFn=pI,this._overrideRedirectResult=hI}async _openPopup(e,t,s,r){gt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await Lc(e,t,s,qi(),r);return FI(e,o,Ro())}async _openRedirect(e,t,s,r){await this._originValidation(e);const o=await Lc(e,t,s,qi(),r);return GT(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:o}=this.eventManagers[t];return r?Promise.resolve(r):(gt(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await NI(e),s=new gI(e);return t.register("authEvent",r=>(W(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Si,{type:Si},r=>{const o=r?.[0]?.[Si];o!==void 0&&t(!!o),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=TI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return du()||ou()||Po()}}const zI=qI;var Oc="@firebase/auth",Mc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KI(n){bn(new Zt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fu(n)},d=new lT(s,r,o,h);return yT(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),bn(new Zt("auth-internal",e=>{const t=Ut(e.getProvider("auth").getImmediate());return(s=>new WI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Oc,Mc,GI(n)),Ot(Oc,Mc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=300,JI=jl("authIdTokenMaxAge")||QI;let $c=null;const XI=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>JI)return;const r=t?.token;$c!==r&&($c=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function YI(n=Kl()){const e=Io(n,"auth");if(e.isInitialized())return e.getImmediate();const t=vT(n,{popupRedirectResolver:zI,persistence:[nI,qT,Au]}),s=jl("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(s,location.origin);if(location.origin===o.origin){const a=XI(o.toString());UT(t,a,()=>a(t.currentUser)),xT(t,l=>a(l))}}const r=Ul("auth");return r&&ET(t,`http://${r}`),t}function ZI(){return document.getElementsByTagName("head")?.[0]??document}uT({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const o=nt("internal-error");o.customData=r,t(o)},s.type="text/javascript",s.charset="UTF-8",ZI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KI("Browser");var Fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,p){function v(){}v.prototype=p.prototype,T.F=p.prototype,T.prototype=new v,T.prototype.constructor=T,T.D=function(I,E,A){for(var m=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)m[Me-2]=arguments[Me];return p.prototype[E].apply(I,m)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(T,p,v){v||(v=0);const I=Array(16);if(typeof p=="string")for(var E=0;E<16;++E)I[E]=p.charCodeAt(v++)|p.charCodeAt(v++)<<8|p.charCodeAt(v++)<<16|p.charCodeAt(v++)<<24;else for(E=0;E<16;++E)I[E]=p[v++]|p[v++]<<8|p[v++]<<16|p[v++]<<24;p=T.g[0],v=T.g[1],E=T.g[2];let A=T.g[3],m;m=p+(A^v&(E^A))+I[0]+3614090360&4294967295,p=v+(m<<7&4294967295|m>>>25),m=A+(E^p&(v^E))+I[1]+3905402710&4294967295,A=p+(m<<12&4294967295|m>>>20),m=E+(v^A&(p^v))+I[2]+606105819&4294967295,E=A+(m<<17&4294967295|m>>>15),m=v+(p^E&(A^p))+I[3]+3250441966&4294967295,v=E+(m<<22&4294967295|m>>>10),m=p+(A^v&(E^A))+I[4]+4118548399&4294967295,p=v+(m<<7&4294967295|m>>>25),m=A+(E^p&(v^E))+I[5]+1200080426&4294967295,A=p+(m<<12&4294967295|m>>>20),m=E+(v^A&(p^v))+I[6]+2821735955&4294967295,E=A+(m<<17&4294967295|m>>>15),m=v+(p^E&(A^p))+I[7]+4249261313&4294967295,v=E+(m<<22&4294967295|m>>>10),m=p+(A^v&(E^A))+I[8]+1770035416&4294967295,p=v+(m<<7&4294967295|m>>>25),m=A+(E^p&(v^E))+I[9]+2336552879&4294967295,A=p+(m<<12&4294967295|m>>>20),m=E+(v^A&(p^v))+I[10]+4294925233&4294967295,E=A+(m<<17&4294967295|m>>>15),m=v+(p^E&(A^p))+I[11]+2304563134&4294967295,v=E+(m<<22&4294967295|m>>>10),m=p+(A^v&(E^A))+I[12]+1804603682&4294967295,p=v+(m<<7&4294967295|m>>>25),m=A+(E^p&(v^E))+I[13]+4254626195&4294967295,A=p+(m<<12&4294967295|m>>>20),m=E+(v^A&(p^v))+I[14]+2792965006&4294967295,E=A+(m<<17&4294967295|m>>>15),m=v+(p^E&(A^p))+I[15]+1236535329&4294967295,v=E+(m<<22&4294967295|m>>>10),m=p+(E^A&(v^E))+I[1]+4129170786&4294967295,p=v+(m<<5&4294967295|m>>>27),m=A+(v^E&(p^v))+I[6]+3225465664&4294967295,A=p+(m<<9&4294967295|m>>>23),m=E+(p^v&(A^p))+I[11]+643717713&4294967295,E=A+(m<<14&4294967295|m>>>18),m=v+(A^p&(E^A))+I[0]+3921069994&4294967295,v=E+(m<<20&4294967295|m>>>12),m=p+(E^A&(v^E))+I[5]+3593408605&4294967295,p=v+(m<<5&4294967295|m>>>27),m=A+(v^E&(p^v))+I[10]+38016083&4294967295,A=p+(m<<9&4294967295|m>>>23),m=E+(p^v&(A^p))+I[15]+3634488961&4294967295,E=A+(m<<14&4294967295|m>>>18),m=v+(A^p&(E^A))+I[4]+3889429448&4294967295,v=E+(m<<20&4294967295|m>>>12),m=p+(E^A&(v^E))+I[9]+568446438&4294967295,p=v+(m<<5&4294967295|m>>>27),m=A+(v^E&(p^v))+I[14]+3275163606&4294967295,A=p+(m<<9&4294967295|m>>>23),m=E+(p^v&(A^p))+I[3]+4107603335&4294967295,E=A+(m<<14&4294967295|m>>>18),m=v+(A^p&(E^A))+I[8]+1163531501&4294967295,v=E+(m<<20&4294967295|m>>>12),m=p+(E^A&(v^E))+I[13]+2850285829&4294967295,p=v+(m<<5&4294967295|m>>>27),m=A+(v^E&(p^v))+I[2]+4243563512&4294967295,A=p+(m<<9&4294967295|m>>>23),m=E+(p^v&(A^p))+I[7]+1735328473&4294967295,E=A+(m<<14&4294967295|m>>>18),m=v+(A^p&(E^A))+I[12]+2368359562&4294967295,v=E+(m<<20&4294967295|m>>>12),m=p+(v^E^A)+I[5]+4294588738&4294967295,p=v+(m<<4&4294967295|m>>>28),m=A+(p^v^E)+I[8]+2272392833&4294967295,A=p+(m<<11&4294967295|m>>>21),m=E+(A^p^v)+I[11]+1839030562&4294967295,E=A+(m<<16&4294967295|m>>>16),m=v+(E^A^p)+I[14]+4259657740&4294967295,v=E+(m<<23&4294967295|m>>>9),m=p+(v^E^A)+I[1]+2763975236&4294967295,p=v+(m<<4&4294967295|m>>>28),m=A+(p^v^E)+I[4]+1272893353&4294967295,A=p+(m<<11&4294967295|m>>>21),m=E+(A^p^v)+I[7]+4139469664&4294967295,E=A+(m<<16&4294967295|m>>>16),m=v+(E^A^p)+I[10]+3200236656&4294967295,v=E+(m<<23&4294967295|m>>>9),m=p+(v^E^A)+I[13]+681279174&4294967295,p=v+(m<<4&4294967295|m>>>28),m=A+(p^v^E)+I[0]+3936430074&4294967295,A=p+(m<<11&4294967295|m>>>21),m=E+(A^p^v)+I[3]+3572445317&4294967295,E=A+(m<<16&4294967295|m>>>16),m=v+(E^A^p)+I[6]+76029189&4294967295,v=E+(m<<23&4294967295|m>>>9),m=p+(v^E^A)+I[9]+3654602809&4294967295,p=v+(m<<4&4294967295|m>>>28),m=A+(p^v^E)+I[12]+3873151461&4294967295,A=p+(m<<11&4294967295|m>>>21),m=E+(A^p^v)+I[15]+530742520&4294967295,E=A+(m<<16&4294967295|m>>>16),m=v+(E^A^p)+I[2]+3299628645&4294967295,v=E+(m<<23&4294967295|m>>>9),m=p+(E^(v|~A))+I[0]+4096336452&4294967295,p=v+(m<<6&4294967295|m>>>26),m=A+(v^(p|~E))+I[7]+1126891415&4294967295,A=p+(m<<10&4294967295|m>>>22),m=E+(p^(A|~v))+I[14]+2878612391&4294967295,E=A+(m<<15&4294967295|m>>>17),m=v+(A^(E|~p))+I[5]+4237533241&4294967295,v=E+(m<<21&4294967295|m>>>11),m=p+(E^(v|~A))+I[12]+1700485571&4294967295,p=v+(m<<6&4294967295|m>>>26),m=A+(v^(p|~E))+I[3]+2399980690&4294967295,A=p+(m<<10&4294967295|m>>>22),m=E+(p^(A|~v))+I[10]+4293915773&4294967295,E=A+(m<<15&4294967295|m>>>17),m=v+(A^(E|~p))+I[1]+2240044497&4294967295,v=E+(m<<21&4294967295|m>>>11),m=p+(E^(v|~A))+I[8]+1873313359&4294967295,p=v+(m<<6&4294967295|m>>>26),m=A+(v^(p|~E))+I[15]+4264355552&4294967295,A=p+(m<<10&4294967295|m>>>22),m=E+(p^(A|~v))+I[6]+2734768916&4294967295,E=A+(m<<15&4294967295|m>>>17),m=v+(A^(E|~p))+I[13]+1309151649&4294967295,v=E+(m<<21&4294967295|m>>>11),m=p+(E^(v|~A))+I[4]+4149444226&4294967295,p=v+(m<<6&4294967295|m>>>26),m=A+(v^(p|~E))+I[11]+3174756917&4294967295,A=p+(m<<10&4294967295|m>>>22),m=E+(p^(A|~v))+I[2]+718787259&4294967295,E=A+(m<<15&4294967295|m>>>17),m=v+(A^(E|~p))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+A&4294967295}s.prototype.v=function(T,p){p===void 0&&(p=T.length);const v=p-this.blockSize,I=this.C;let E=this.h,A=0;for(;A<p;){if(E==0)for(;A<=v;)r(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<p;)if(I[E++]=T.charCodeAt(A++),E==this.blockSize){r(this,I),E=0;break}}else for(;A<p;)if(I[E++]=T[A++],E==this.blockSize){r(this,I),E=0;break}}this.h=E,this.o+=p},s.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;p=this.o*8;for(var v=T.length-8;v<T.length;++v)T[v]=p&255,p/=256;for(this.v(T),T=Array(16),p=0,v=0;v<4;++v)for(let I=0;I<32;I+=8)T[p++]=this.g[v]>>>I&255;return T};function o(T,p){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=p(T)}function a(T,p){this.h=p;const v=[];let I=!0;for(let E=T.length-1;E>=0;E--){const A=T[E]|0;I&&A==p||(v[E]=A,I=!1)}this.g=v}var l={};function h(T){return-128<=T&&T<128?o(T,function(p){return new a([p|0],p<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(T<0)return $(d(-T));const p=[];let v=1;for(let I=0;T>=v;I++)p[I]=T/v|0,v*=4294967296;return new a(p,0)}function _(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return $(_(T.substring(1),p));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=d(Math.pow(p,8));let I=g;for(let A=0;A<T.length;A+=8){var E=Math.min(8,T.length-A);const m=parseInt(T.substring(A,A+E),p);E<8?(E=d(Math.pow(p,E)),I=I.j(E).add(d(m))):(I=I.j(v),I=I.add(d(m)))}return I}var g=h(0),S=h(1),L=h(16777216);n=a.prototype,n.m=function(){if(z(this))return-$(this).m();let T=0,p=1;for(let v=0;v<this.g.length;v++){const I=this.i(v);T+=(I>=0?I:4294967296+I)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(F(this))return"0";if(z(this))return"-"+$(this).toString(T);const p=d(Math.pow(T,6));var v=this;let I="";for(;;){const E=xe(v,p).g;v=Z(v,E.j(p));let A=((v.g.length>0?v.g[0]:v.h)>>>0).toString(T);if(v=E,F(v))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function F(T){if(T.h!=0)return!1;for(let p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function z(T){return T.h==-1}n.l=function(T){return T=Z(this,T),z(T)?-1:F(T)?0:1};function $(T){const p=T.g.length,v=[];for(let I=0;I<p;I++)v[I]=~T.g[I];return new a(v,~T.h).add(S)}n.abs=function(){return z(this)?$(this):this},n.add=function(T){const p=Math.max(this.g.length,T.g.length),v=[];let I=0;for(let E=0;E<=p;E++){let A=I+(this.i(E)&65535)+(T.i(E)&65535),m=(A>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);I=m>>>16,A&=65535,m&=65535,v[E]=m<<16|A}return new a(v,v[v.length-1]&-2147483648?-1:0)};function Z(T,p){return T.add($(p))}n.j=function(T){if(F(this)||F(T))return g;if(z(this))return z(T)?$(this).j($(T)):$($(this).j(T));if(z(T))return $(this.j($(T)));if(this.l(L)<0&&T.l(L)<0)return d(this.m()*T.m());const p=this.g.length+T.g.length,v=[];for(var I=0;I<2*p;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<T.g.length;E++){const A=this.i(I)>>>16,m=this.i(I)&65535,Me=T.i(E)>>>16,Bt=T.i(E)&65535;v[2*I+2*E]+=m*Bt,re(v,2*I+2*E),v[2*I+2*E+1]+=A*Bt,re(v,2*I+2*E+1),v[2*I+2*E+1]+=m*Me,re(v,2*I+2*E+1),v[2*I+2*E+2]+=A*Me,re(v,2*I+2*E+2)}for(T=0;T<p;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=p;T<2*p;T++)v[T]=0;return new a(v,0)};function re(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function ae(T,p){this.g=T,this.h=p}function xe(T,p){if(F(p))throw Error("division by zero");if(F(T))return new ae(g,g);if(z(T))return p=xe($(T),p),new ae($(p.g),$(p.h));if(z(p))return p=xe(T,$(p)),new ae($(p.g),p.h);if(T.g.length>30){if(z(T)||z(p))throw Error("slowDivide_ only works with positive integers.");for(var v=S,I=p;I.l(T)<=0;)v=He(v),I=He(I);var E=De(v,1),A=De(I,1);for(I=De(I,2),v=De(v,2);!F(I);){var m=A.add(I);m.l(T)<=0&&(E=E.add(v),A=m),I=De(I,1),v=De(v,1)}return p=Z(T,E.j(p)),new ae(E,p)}for(E=g;T.l(p)>=0;){for(v=Math.max(1,Math.floor(T.m()/p.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=d(v),m=A.j(p);z(m)||m.l(T)>0;)v-=I,A=d(v),m=A.j(p);F(A)&&(A=S),E=E.add(A),T=Z(T,m)}return new ae(E,T)}n.B=function(T){return xe(this,T).h},n.and=function(T){const p=Math.max(this.g.length,T.g.length),v=[];for(let I=0;I<p;I++)v[I]=this.i(I)&T.i(I);return new a(v,this.h&T.h)},n.or=function(T){const p=Math.max(this.g.length,T.g.length),v=[];for(let I=0;I<p;I++)v[I]=this.i(I)|T.i(I);return new a(v,this.h|T.h)},n.xor=function(T){const p=Math.max(this.g.length,T.g.length),v=[];for(let I=0;I<p;I++)v[I]=this.i(I)^T.i(I);return new a(v,this.h^T.h)};function He(T){const p=T.g.length+1,v=[];for(let I=0;I<p;I++)v[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(v,T.h)}function De(T,p){const v=p>>5;p%=32;const I=T.g.length-v,E=[];for(let A=0;A<I;A++)E[A]=p>0?T.i(A+v)>>>p|T.i(A+v+1)<<32-p:T.i(A+v);return new a(E,T.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=_,Vo=a}).apply(typeof Fc<"u"?Fc:typeof self<"u"?self:typeof window<"u"?window:{});var Js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nu,es,Du,ar,Gi,Lu,Ou,Mu;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Js=="object"&&Js];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var s=t(this);function r(i,c){if(c)e:{var u=s;i=i.split(".");for(var f=0;f<i.length-1;f++){var b=i[f];if(!(b in u))break e;u=u[b]}i=i[i.length-1],f=u[i],c=c(f),c!=f&&c!=null&&e(u,i,{configurable:!0,writable:!0,value:c})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(c){var u=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&u.push([f,c[f]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,u){return i.call.apply(i.bind,arguments)}function d(i,c,u){return d=h,d.apply(null,arguments)}function _(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function g(i,c){function u(){}u.prototype=c.prototype,i.Z=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Ob=function(f,b,R){for(var O=Array(arguments.length-2),J=2;J<arguments.length;J++)O[J-2]=arguments[J];return c.prototype[b].apply(f,O)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function L(i){const c=i.length;if(c>0){const u=Array(c);for(let f=0;f<c;f++)u[f]=i[f];return u}return[]}function F(i,c){for(let f=1;f<arguments.length;f++){const b=arguments[f];var u=typeof b;if(u=u!="object"?u:b?Array.isArray(b)?"array":u:"null",u=="array"||u=="object"&&typeof b.length=="number"){u=i.length||0;const R=b.length||0;i.length=u+R;for(let O=0;O<R;O++)i[u+O]=b[O]}else i.push(b)}}class z{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function $(i){a.setTimeout(()=>{throw i},0)}function Z(){var i=T;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class re{constructor(){this.h=this.g=null}add(c,u){const f=ae.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var ae=new z(()=>new xe,i=>i.reset());class xe{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let He,De=!1,T=new re,p=()=>{const i=Promise.resolve(void 0);He=()=>{i.then(v)}};function v(){for(var i;i=Z();){try{i.h.call(i.g)}catch(u){$(u)}var c=ae;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}De=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return i})();function m(i){return/^[\s\xa0]*$/.test(i)}function Me(i,c){E.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}g(Me,E),Me.prototype.init=function(i,c){const u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Me.Z.h.call(this)},Me.prototype.h=function(){Me.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Bt="closure_listenable_"+(Math.random()*1e6|0),Uh=0;function Bh(i,c,u,f,b){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=b,this.key=++Uh,this.da=this.fa=!1}function Ls(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Os(i,c,u){for(const f in i)c.call(u,i[f],f,i)}function jh(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function sa(i){const c={};for(const u in i)c[u]=i[u];return c}const ra="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ia(i,c){let u,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(u in f)i[u]=f[u];for(let R=0;R<ra.length;R++)u=ra[R],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function Ms(i){this.src=i,this.g={},this.h=0}Ms.prototype.add=function(i,c,u,f,b){const R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);const O=Xr(i,c,f,b);return O>-1?(c=i[O],u||(c.fa=!1)):(c=new Bh(c,this.src,R,!!f,b),c.fa=u,i.push(c)),c};function Jr(i,c){const u=c.type;if(u in i.g){var f=i.g[u],b=Array.prototype.indexOf.call(f,c,void 0),R;(R=b>=0)&&Array.prototype.splice.call(f,b,1),R&&(Ls(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Xr(i,c,u,f){for(let b=0;b<i.length;++b){const R=i[b];if(!R.da&&R.listener==c&&R.capture==!!u&&R.ha==f)return b}return-1}var Yr="closure_lm_"+(Math.random()*1e6|0),Zr={};function oa(i,c,u,f,b){if(Array.isArray(c)){for(let R=0;R<c.length;R++)oa(i,c[R],u,f,b);return null}return u=la(u),i&&i[Bt]?i.J(c,u,l(f)?!!f.capture:!1,b):Hh(i,c,u,!1,f,b)}function Hh(i,c,u,f,b,R){if(!c)throw Error("Invalid event type");const O=l(b)?!!b.capture:!!b;let J=ti(i);if(J||(i[Yr]=J=new Ms(i)),u=J.add(c,u,f,O,R),u.proxy)return u;if(f=qh(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)A||(b=O),b===void 0&&(b=!1),i.addEventListener(c.toString(),f,b);else if(i.attachEvent)i.attachEvent(ca(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function qh(){function i(u){return c.call(i.src,i.listener,u)}const c=zh;return i}function aa(i,c,u,f,b){if(Array.isArray(c))for(var R=0;R<c.length;R++)aa(i,c[R],u,f,b);else f=l(f)?!!f.capture:!!f,u=la(u),i&&i[Bt]?(i=i.i,R=String(c).toString(),R in i.g&&(c=i.g[R],u=Xr(c,u,f,b),u>-1&&(Ls(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete i.g[R],i.h--)))):i&&(i=ti(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Xr(c,u,f,b)),(u=i>-1?c[i]:null)&&ei(u))}function ei(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Bt])Jr(c.i,i);else{var u=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(u,f,i.capture):c.detachEvent?c.detachEvent(ca(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=ti(c))?(Jr(u,i),u.h==0&&(u.src=null,c[Yr]=null)):Ls(i)}}}function ca(i){return i in Zr?Zr[i]:Zr[i]="on"+i}function zh(i,c){if(i.da)i=!0;else{c=new Me(c,this);const u=i.listener,f=i.ha||i.src;i.fa&&ei(i),i=u.call(f,c)}return i}function ti(i){return i=i[Yr],i instanceof Ms?i:null}var ni="__closure_events_fn_"+(Math.random()*1e9>>>0);function la(i){return typeof i=="function"?i:(i[ni]||(i[ni]=function(c){return i.handleEvent(c)}),i[ni])}function Se(){I.call(this),this.i=new Ms(this),this.M=this,this.G=null}g(Se,I),Se.prototype[Bt]=!0,Se.prototype.removeEventListener=function(i,c,u,f){aa(this,i,c,u,f)};function Le(i,c){var u,f=i.G;if(f)for(u=[];f;f=f.G)u.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new E(c,i);else if(c instanceof E)c.target=c.target||i;else{var b=c;c=new E(f,i),ia(c,b)}b=!0;let R,O;if(u)for(O=u.length-1;O>=0;O--)R=c.g=u[O],b=$s(R,f,!0,c)&&b;if(R=c.g=i,b=$s(R,f,!0,c)&&b,b=$s(R,f,!1,c)&&b,u)for(O=0;O<u.length;O++)R=c.g=u[O],b=$s(R,f,!1,c)&&b}Se.prototype.N=function(){if(Se.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const u=i.g[c];for(let f=0;f<u.length;f++)Ls(u[f]);delete i.g[c],i.h--}}this.G=null},Se.prototype.J=function(i,c,u,f){return this.i.add(String(i),c,!1,u,f)},Se.prototype.K=function(i,c,u,f){return this.i.add(String(i),c,!0,u,f)};function $s(i,c,u,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let b=!0;for(let R=0;R<c.length;++R){const O=c[R];if(O&&!O.da&&O.capture==u){const J=O.listener,ve=O.ha||O.src;O.fa&&Jr(i.i,O),b=J.call(ve,f)!==!1&&b}}return b&&!f.defaultPrevented}function Wh(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function ua(i){i.g=Wh(()=>{i.g=null,i.i&&(i.i=!1,ua(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Gh extends I{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ua(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function On(i){I.call(this),this.h=i,this.g={}}g(On,I);var ha=[];function da(i){Os(i.g,function(c,u){this.g.hasOwnProperty(u)&&ei(c)},i),i.g={}}On.prototype.N=function(){On.Z.N.call(this),da(this)},On.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var si=a.JSON.stringify,Kh=a.JSON.parse,Qh=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function fa(){}function pa(){}var Mn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ri(){E.call(this,"d")}g(ri,E);function ii(){E.call(this,"c")}g(ii,E);var jt={},ma=null;function Fs(){return ma=ma||new Se}jt.Ia="serverreachability";function ga(i){E.call(this,jt.Ia,i)}g(ga,E);function $n(i){const c=Fs();Le(c,new ga(c))}jt.STAT_EVENT="statevent";function _a(i,c){E.call(this,jt.STAT_EVENT,i),this.stat=c}g(_a,E);function Oe(i){const c=Fs();Le(c,new _a(c,i))}jt.Ja="timingevent";function va(i,c){E.call(this,jt.Ja,i),this.size=c}g(va,E);function Fn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function xn(){this.g=!0}xn.prototype.ua=function(){this.g=!1};function Jh(i,c,u,f,b,R){i.info(function(){if(i.g)if(R){var O="",J=R.split("&");for(let ce=0;ce<J.length;ce++){var ve=J[ce].split("=");if(ve.length>1){const ye=ve[0];ve=ve[1];const Ze=ye.split("_");O=Ze.length>=2&&Ze[1]=="type"?O+(ye+"="+ve+"&"):O+(ye+"=redacted&")}}}else O=null;else O=R;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+c+`
`+u+`
`+O})}function Xh(i,c,u,f,b,R,O){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+c+`
`+u+`
`+R+" "+O})}function hn(i,c,u,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Zh(i,u)+(f?" "+f:"")})}function Yh(i,c){i.info(function(){return"TIMEOUT: "+c})}xn.prototype.info=function(){};function Zh(i,c){if(!i.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(i=0;i<R.length;i++)if(Array.isArray(R[i])){var u=R[i];if(!(u.length<2)){var f=u[1];if(Array.isArray(f)&&!(f.length<1)){var b=f[0];if(b!="noop"&&b!="stop"&&b!="close")for(let O=1;O<f.length;O++)f[O]=""}}}}return si(R)}catch{return c}}var xs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ya={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ea;function oi(){}g(oi,fa),oi.prototype.g=function(){return new XMLHttpRequest},Ea=new oi;function Un(i){return encodeURIComponent(String(i))}function ed(i){var c=1;i=i.split(":");const u=[];for(;c>0&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function Tt(i,c,u,f){this.j=i,this.i=c,this.l=u,this.S=f||1,this.V=new On(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ta}function Ta(){this.i=null,this.g="",this.h=!1}var Ia={},ai={};function ci(i,c,u){i.M=1,i.A=Bs(Ye(c)),i.u=u,i.R=!0,wa(i,null)}function wa(i,c){i.F=Date.now(),Us(i),i.B=Ye(i.A);var u=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),Ma(u.i,"t",f),i.C=0,u=i.j.L,i.h=new Ta,i.g=ec(i.j,u?c:null,!i.u),i.P>0&&(i.O=new Gh(d(i.Y,i,i.g),i.P)),c=i.V,u=i.g,f=i.ba;var b="readystatechange";Array.isArray(b)||(b&&(ha[0]=b.toString()),b=ha);for(let R=0;R<b.length;R++){const O=oa(u,b[R],f||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=i.J?sa(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),$n(),Jh(i.i,i.v,i.B,i.l,i.S,i.u)}Tt.prototype.ba=function(i){i=i.target;const c=this.O;c&&bt(i)==3?c.j():this.Y(i)},Tt.prototype.Y=function(i){try{if(i==this.g)e:{const J=bt(this.g),ve=this.g.ya(),ce=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||Ha(this.g)))){this.K||J!=4||ve==7||(ve==8||ce<=0?$n(3):$n(2)),li(this);var c=this.g.ca();this.X=c;var u=td(this);if(this.o=c==200,Xh(this.i,this.v,this.B,this.l,this.S,J,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,b=this.g;if((f=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(f)){var R=f;break t}}R=null}if(i=R)hn(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ui(this,i);else{this.o=!1,this.m=3,Oe(12),Ht(this),Bn(this);break e}}if(this.R){i=!0;let ye;for(;!this.K&&this.C<u.length;)if(ye=nd(this,u),ye==ai){J==4&&(this.m=4,Oe(14),i=!1),hn(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==Ia){this.m=4,Oe(15),hn(this.i,this.l,u,"[Invalid Chunk]"),i=!1;break}else hn(this.i,this.l,ye,null),ui(this,ye);if(ba(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||u.length!=0||this.h.h||(this.m=1,Oe(16),i=!1),this.o=this.o&&i,!i)hn(this.i,this.l,u,"[Invalid Chunked Response]"),Ht(this),Bn(this);else if(u.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),vi(O),O.P=!0,Oe(11))}}else hn(this.i,this.l,u,null),ui(this,u);J==4&&Ht(this),this.o&&!this.K&&(J==4?Ja(this.j,this):(this.o=!1,Us(this)))}else gd(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,Oe(12)):(this.m=0,Oe(13)),Ht(this),Bn(this)}}}catch{}finally{}};function td(i){if(!ba(i))return i.g.la();const c=Ha(i.g);if(c==="")return"";let u="";const f=c.length,b=bt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Ht(i),Bn(i),"";i.h.i=new a.TextDecoder}for(let R=0;R<f;R++)i.h.h=!0,u+=i.h.i.decode(c[R],{stream:!(b&&R==f-1)});return c.length=0,i.h.g+=u,i.C=0,i.h.g}function ba(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function nd(i,c){var u=i.C,f=c.indexOf(`
`,u);return f==-1?ai:(u=Number(c.substring(u,f)),isNaN(u)?Ia:(f+=1,f+u>c.length?ai:(c=c.slice(f,f+u),i.C=f+u,c)))}Tt.prototype.cancel=function(){this.K=!0,Ht(this)};function Us(i){i.T=Date.now()+i.H,Aa(i,i.H)}function Aa(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Fn(d(i.aa,i),c)}function li(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Tt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Yh(this.i,this.B),this.M!=2&&($n(),Oe(17)),Ht(this),this.m=2,Bn(this)):Aa(this,this.T-i)};function Bn(i){i.j.I==0||i.K||Ja(i.j,i)}function Ht(i){li(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,da(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function ui(i,c){try{var u=i.j;if(u.I!=0&&(u.g==i||hi(u.h,i))){if(!i.L&&hi(u.h,i)&&u.I==3){try{var f=u.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<i.F)Ws(u),qs(u);else break e;_i(u),Oe(18)}}else u.xa=b[1],0<u.xa-u.K&&b[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=Fn(d(u.Va,u),6e3));ka(u.h)<=1&&u.ta&&(u.ta=void 0)}else zt(u,11)}else if((i.L||u.g==i)&&Ws(u),!m(c))for(b=u.Ba.g.parse(c),c=0;c<b.length;c++){let ce=b[c];const ye=ce[0];if(!(ye<=u.K))if(u.K=ye,ce=ce[1],u.I==2)if(ce[0]=="c"){u.M=ce[1],u.ba=ce[2];const Ze=ce[3];Ze!=null&&(u.ka=Ze,u.j.info("VER="+u.ka));const Wt=ce[4];Wt!=null&&(u.za=Wt,u.j.info("SVER="+u.za));const At=ce[5];At!=null&&typeof At=="number"&&At>0&&(f=1.5*At,u.O=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Pt=i.g;if(Pt){const Ks=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ks){var R=f.h;R.g||Ks.indexOf("spdy")==-1&&Ks.indexOf("quic")==-1&&Ks.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(di(R,R.h),R.h=null))}if(f.G){const yi=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;yi&&(f.wa=yi,ue(f.J,f.G,yi))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-i.F,u.j.info("Handshake RTT: "+u.T+"ms")),f=u;var O=i;if(f.na=Za(f,f.L?f.ba:null,f.W),O.L){Ra(f.h,O);var J=O,ve=f.O;ve&&(J.H=ve),J.D&&(li(J),Us(J)),f.g=O}else Ka(f);u.i.length>0&&zs(u)}else ce[0]!="stop"&&ce[0]!="close"||zt(u,7);else u.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?zt(u,7):gi(u):ce[0]!="noop"&&u.l&&u.l.qa(ce),u.A=0)}}$n(4)}catch{}}var sd=class{constructor(i,c){this.g=i,this.map=c}};function Pa(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Sa(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ka(i){return i.h?1:i.g?i.g.size:0}function hi(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function di(i,c){i.g?i.g.add(c):i.h=c}function Ra(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Pa.prototype.cancel=function(){if(this.i=Ca(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ca(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.G);return c}return L(i.i)}var Va=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rd(i,c){if(i){i=i.split("&");for(let u=0;u<i.length;u++){const f=i[u].indexOf("=");let b,R=null;f>=0?(b=i[u].substring(0,f),R=i[u].substring(f+1)):b=i[u],c(b,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function It(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof It?(this.l=i.l,jn(this,i.j),this.o=i.o,this.g=i.g,Hn(this,i.u),this.h=i.h,fi(this,$a(i.i)),this.m=i.m):i&&(c=String(i).match(Va))?(this.l=!1,jn(this,c[1]||"",!0),this.o=qn(c[2]||""),this.g=qn(c[3]||"",!0),Hn(this,c[4]),this.h=qn(c[5]||"",!0),fi(this,c[6]||"",!0),this.m=qn(c[7]||"")):(this.l=!1,this.i=new Wn(null,this.l))}It.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(zn(c,Na,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(zn(c,Na,!0),"@"),i.push(Un(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&i.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(zn(u,u.charAt(0)=="/"?ad:od,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",zn(u,ld)),i.join("")},It.prototype.resolve=function(i){const c=Ye(this);let u=!!i.j;u?jn(c,i.j):u=!!i.o,u?c.o=i.o:u=!!i.g,u?c.g=i.g:u=i.u!=null;var f=i.h;if(u)Hn(c,i.u);else if(u=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var b=c.h.lastIndexOf("/");b!=-1&&(f=c.h.slice(0,b+1)+f)}if(b=f,b==".."||b==".")f="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){f=b.lastIndexOf("/",0)==0,b=b.split("/");const R=[];for(let O=0;O<b.length;){const J=b[O++];J=="."?f&&O==b.length&&R.push(""):J==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),f&&O==b.length&&R.push("")):(R.push(J),f=!0)}f=R.join("/")}else f=b}return u?c.h=f:u=i.i.toString()!=="",u?fi(c,$a(i.i)):u=!!i.m,u&&(c.m=i.m),c};function Ye(i){return new It(i)}function jn(i,c,u){i.j=u?qn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Hn(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function fi(i,c,u){c instanceof Wn?(i.i=c,ud(i.i,i.l)):(u||(c=zn(c,cd)),i.i=new Wn(c,i.l))}function ue(i,c,u){i.i.set(c,u)}function Bs(i){return ue(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function qn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function zn(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,id),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function id(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Na=/[#\/\?@]/g,od=/[#\?:]/g,ad=/[#\?]/g,cd=/[#\?@]/g,ld=/#/g;function Wn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function qt(i){i.g||(i.g=new Map,i.h=0,i.i&&rd(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Wn.prototype,n.add=function(i,c){qt(this),this.i=null,i=dn(this,i);let u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function Da(i,c){qt(i),c=dn(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function La(i,c){return qt(i),c=dn(i,c),i.g.has(c)}n.forEach=function(i,c){qt(this),this.g.forEach(function(u,f){u.forEach(function(b){i.call(c,b,f,this)},this)},this)};function Oa(i,c){qt(i);let u=[];if(typeof c=="string")La(i,c)&&(u=u.concat(i.g.get(dn(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)u=u.concat(i[c]);return u}n.set=function(i,c){return qt(this),this.i=null,i=dn(this,i),La(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=Oa(this,i),i.length>0?String(i[0]):c):c};function Ma(i,c,u){Da(i,c),u.length>0&&(i.i=null,i.g.set(dn(i,c),L(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var u=c[f];const b=Un(u);u=Oa(this,u);for(let R=0;R<u.length;R++){let O=b;u[R]!==""&&(O+="="+Un(u[R])),i.push(O)}}return this.i=i.join("&")};function $a(i){const c=new Wn;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function dn(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function ud(i,c){c&&!i.j&&(qt(i),i.i=null,i.g.forEach(function(u,f){const b=f.toLowerCase();f!=b&&(Da(this,f),Ma(this,b,u))},i)),i.j=c}function hd(i,c){const u=new xn;if(a.Image){const f=new Image;f.onload=_(wt,u,"TestLoadImage: loaded",!0,c,f),f.onerror=_(wt,u,"TestLoadImage: error",!1,c,f),f.onabort=_(wt,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=_(wt,u,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function dd(i,c){const u=new xn,f=new AbortController,b=setTimeout(()=>{f.abort(),wt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(b),R.ok?wt(u,"TestPingServer: ok",!0,c):wt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),wt(u,"TestPingServer: error",!1,c)})}function wt(i,c,u,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(u)}catch{}}function fd(){this.g=new Qh}function pi(i){this.i=i.Sb||null,this.h=i.ab||!1}g(pi,fa),pi.prototype.g=function(){return new js(this.i,this.h)};function js(i,c){Se.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(js,Se),n=js.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Kn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Gn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Kn(this)),this.g&&(this.readyState=3,Kn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Fa(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Fa(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Gn(this):Kn(this),this.readyState==3&&Fa(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Gn(this))},n.Na=function(i){this.g&&(this.response=i,Gn(this))},n.ga=function(){this.g&&Gn(this)};function Gn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Kn(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function Kn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(js.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function xa(i){let c="";return Os(i,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function mi(i,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=xa(u),typeof i=="string"?u!=null&&Un(u):ue(i,c,u))}function fe(i){Se.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(fe,Se);var pd=/^https?$/i,md=["POST","PUT"];n=fe.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ea.g(),this.g.onreadystatechange=S(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){Ua(this,R);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)u.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())u.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),b=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(md,c,void 0)>=0)||f||b||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,O]of u)this.g.setRequestHeader(R,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(R){Ua(this,R)}};function Ua(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Ba(i),Hs(i)}function Ba(i){i.A||(i.A=!0,Le(i,"complete"),Le(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Le(this,"complete"),Le(this,"abort"),Hs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hs(this,!0)),fe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ja(this):this.Xa())},n.Xa=function(){ja(this)};function ja(i){if(i.h&&typeof o<"u"){if(i.v&&bt(i)==4)setTimeout(i.Ca.bind(i),0);else if(Le(i,"readystatechange"),bt(i)==4){i.h=!1;try{const R=i.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=R===0){let O=String(i.D).match(Va)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),f=!pd.test(O?O.toLowerCase():"")}u=f}if(u)Le(i,"complete"),Le(i,"success");else{i.o=6;try{var b=bt(i)>2?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.ca()+"]",Ba(i)}}finally{Hs(i)}}}}function Hs(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const u=i.g;i.g=null,c||Le(i,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function bt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return bt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Kh(c)}};function Ha(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function gd(i){const c={};i=(i.g&&bt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(m(i[f]))continue;var u=ed(i[f]);const b=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=c[b]||[];c[b]=R,R.push(u)}jh(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function qa(i){this.za=0,this.i=[],this.j=new xn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Qn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Qn("baseRetryDelayMs",5e3,i),this.Za=Qn("retryDelaySeedMs",1e4,i),this.Ta=Qn("forwardChannelMaxRetries",2,i),this.va=Qn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Pa(i&&i.concurrentRequestLimit),this.Ba=new fd,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=qa.prototype,n.ka=8,n.I=1,n.connect=function(i,c,u,f){Oe(0),this.W=i,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.J=Za(this,null,this.W),zs(this)};function gi(i){if(za(i),i.I==3){var c=i.V++,u=Ye(i.J);if(ue(u,"SID",i.M),ue(u,"RID",c),ue(u,"TYPE","terminate"),Jn(i,u),c=new Tt(i,i.j,c),c.M=2,c.A=Bs(Ye(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=ec(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Us(c)}Ya(i)}function qs(i){i.g&&(vi(i),i.g.cancel(),i.g=null)}function za(i){qs(i),i.v&&(a.clearTimeout(i.v),i.v=null),Ws(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function zs(i){if(!Sa(i.h)&&!i.m){i.m=!0;var c=i.Ea;He||p(),De||(He(),De=!0),T.add(c,i),i.D=0}}function _d(i,c){return ka(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Fn(d(i.Ea,i,c),Xa(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const b=new Tt(this,this.j,i);let R=this.o;if(this.U&&(R?(R=sa(R),ia(R,this.U)):R=this.U),this.u!==null||this.R||(b.J=R,R=null),this.S)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=Ga(this,b,c),u=Ye(this.J),ue(u,"RID",i),ue(u,"CVER",22),this.G&&ue(u,"X-HTTP-Session-Id",this.G),Jn(this,u),R&&(this.R?c="headers="+Un(xa(R))+"&"+c:this.u&&mi(u,this.u,R)),di(this.h,b),this.Ra&&ue(u,"TYPE","init"),this.S?(ue(u,"$req",c),ue(u,"SID","null"),b.U=!0,ci(b,u,null)):ci(b,u,c),this.I=2}}else this.I==3&&(i?Wa(this,i):this.i.length==0||Sa(this.h)||Wa(this))};function Wa(i,c){var u;c?u=c.l:u=i.V++;const f=Ye(i.J);ue(f,"SID",i.M),ue(f,"RID",u),ue(f,"AID",i.K),Jn(i,f),i.u&&i.o&&mi(f,i.u,i.o),u=new Tt(i,i.j,u,i.D+1),i.u===null&&(u.J=i.o),c&&(i.i=c.G.concat(i.i)),c=Ga(i,u,1e3),u.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),di(i.h,u),ci(u,f,c)}function Jn(i,c){i.H&&Os(i.H,function(u,f){ue(c,f,u)}),i.l&&Os({},function(u,f){ue(c,f,u)})}function Ga(i,c,u){u=Math.min(i.i.length,u);const f=i.l?d(i.l.Ka,i.l,i):null;e:{var b=i.i;let J=-1;for(;;){const ve=["count="+u];J==-1?u>0?(J=b[0].g,ve.push("ofs="+J)):J=0:ve.push("ofs="+J);let ce=!0;for(let ye=0;ye<u;ye++){var R=b[ye].g;const Ze=b[ye].map;if(R-=J,R<0)J=Math.max(0,b[ye].g-100),ce=!1;else try{R="req"+R+"_"||"";try{var O=Ze instanceof Map?Ze:Object.entries(Ze);for(const[Wt,At]of O){let Pt=At;l(At)&&(Pt=si(At)),ve.push(R+Wt+"="+encodeURIComponent(Pt))}}catch(Wt){throw ve.push(R+"type="+encodeURIComponent("_badmap")),Wt}}catch{f&&f(Ze)}}if(ce){O=ve.join("&");break e}}O=void 0}return i=i.i.splice(0,u),c.G=i,O}function Ka(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;He||p(),De||(He(),De=!0),T.add(c,i),i.A=0}}function _i(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Fn(d(i.Da,i),Xa(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Qa(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Fn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Oe(10),qs(this),Qa(this))};function vi(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Qa(i){i.g=new Tt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Ye(i.na);ue(c,"RID","rpc"),ue(c,"SID",i.M),ue(c,"AID",i.K),ue(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&ue(c,"TO",i.ia),ue(c,"TYPE","xmlhttp"),Jn(i,c),i.u&&i.o&&mi(c,i.u,i.o),i.O&&(i.g.H=i.O);var u=i.g;i=i.ba,u.M=1,u.A=Bs(Ye(c)),u.u=null,u.R=!0,wa(u,i)}n.Va=function(){this.C!=null&&(this.C=null,qs(this),_i(this),Oe(19))};function Ws(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Ja(i,c){var u=null;if(i.g==c){Ws(i),vi(i),i.g=null;var f=2}else if(hi(i.h,c))u=c.G,Ra(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var b=i.D;f=Fs(),Le(f,new va(f,u)),zs(i)}else Ka(i);else if(b=c.m,b==3||b==0&&c.X>0||!(f==1&&_d(i,c)||f==2&&_i(i)))switch(u&&u.length>0&&(c=i.h,c.i=c.i.concat(u)),b){case 1:zt(i,5);break;case 4:zt(i,10);break;case 3:zt(i,6);break;default:zt(i,2)}}}function Xa(i,c){let u=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(u*=2),u*c}function zt(i,c){if(i.j.info("Error code "+c),c==2){var u=d(i.bb,i),f=i.Ua;const b=!f;f=new It(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||jn(f,"https"),Bs(f),b?hd(f.toString(),u):dd(f.toString(),u)}else Oe(2);i.I=0,i.l&&i.l.pa(c),Ya(i),za(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Ya(i){if(i.I=0,i.ja=[],i.l){const c=Ca(i.h);(c.length!=0||i.i.length!=0)&&(F(i.ja,c),F(i.ja,i.i),i.h.i.length=0,L(i.i),i.i.length=0),i.l.oa()}}function Za(i,c,u){var f=u instanceof It?Ye(u):new It(u);if(f.g!="")c&&(f.g=c+"."+f.g),Hn(f,f.u);else{var b=a.location;f=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;const R=new It(null);f&&jn(R,f),c&&(R.g=c),b&&Hn(R,b),u&&(R.h=u),f=R}return u=i.G,c=i.wa,u&&c&&ue(f,u,c),ue(f,"VER",i.ka),Jn(i,f),f}function ec(i,c,u){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new fe(new pi({ab:u})):new fe(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function tc(){}n=tc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Gs(){}Gs.prototype.g=function(i,c){return new Ue(i,c)};function Ue(i,c){Se.call(this),this.g=new qa(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!m(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!m(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new fn(this)}g(Ue,Se),Ue.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ue.prototype.close=function(){gi(this.g)},Ue.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.v&&(u={},u.__data__=si(i),i=u);c.i.push(new sd(c.Ya++,i)),c.I==3&&zs(c)},Ue.prototype.N=function(){this.g.l=null,delete this.j,gi(this.g),delete this.g,Ue.Z.N.call(this)};function nc(i){ri.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const u in c){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}g(nc,ri);function sc(){ii.call(this),this.status=1}g(sc,ii);function fn(i){this.g=i}g(fn,tc),fn.prototype.ra=function(){Le(this.g,"a")},fn.prototype.qa=function(i){Le(this.g,new nc(i))},fn.prototype.pa=function(i){Le(this.g,new sc)},fn.prototype.oa=function(){Le(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,Ue.prototype.send=Ue.prototype.o,Ue.prototype.open=Ue.prototype.m,Ue.prototype.close=Ue.prototype.close,Mu=function(){return new Gs},Ou=function(){return Fs()},Lu=jt,Gi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},xs.NO_ERROR=0,xs.TIMEOUT=8,xs.HTTP_ERROR=6,ar=xs,ya.COMPLETE="complete",Du=ya,pa.EventType=Mn,Mn.OPEN="a",Mn.CLOSE="b",Mn.ERROR="c",Mn.MESSAGE="d",Se.prototype.listen=Se.prototype.J,es=pa,fe.prototype.listenOnce=fe.prototype.K,fe.prototype.getLastError=fe.prototype.Ha,fe.prototype.getLastErrorCode=fe.prototype.ya,fe.prototype.getStatus=fe.prototype.ca,fe.prototype.getResponseJson=fe.prototype.La,fe.prototype.getResponseText=fe.prototype.la,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Fa,Nu=fe}).apply(typeof Js<"u"?Js:typeof self<"u"?self:typeof window<"u"?window:{});const xc="@firebase/firestore",Uc="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Eo("@firebase/firestore");function pn(){return nn.logLevel}function B(n,...e){if(nn.logLevel<=te.DEBUG){const t=e.map(No);nn.debug(`Firestore (${Dn}): ${n}`,...t)}}function sn(n,...e){if(nn.logLevel<=te.ERROR){const t=e.map(No);nn.error(`Firestore (${Dn}): ${n}`,...t)}}function jr(n,...e){if(nn.logLevel<=te.WARN){const t=e.map(No);nn.warn(`Firestore (${Dn}): ${n}`,...t)}}function No(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,$u(n,s,t)}function $u(n,e,t){let s=`FIRESTORE (${Dn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw sn(s),new Error(s)}function pe(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||$u(e,r,s)}function le(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ew{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Re.UNAUTHENTICATED)))}shutdown(){}}class tw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class nw{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){pe(this.o===void 0,42304);let s=this.i;const r=h=>this.i!==s?(s=this.i,t(h)):Promise.resolve();let o=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qt,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const h=o;e.enqueueRetryable((async()=>{await h.promise,await r(this.currentUser)}))},l=h=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(pe(typeof s.accessToken=="string",31837,{l:s}),new Fu(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new Re(e)}}class sw{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rw{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new sw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Re.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Bc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){pe(this.o===void 0,3512);const s=o=>{o.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>s(o)))};const r=o=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>r(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Bc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(pe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Bc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=ow(40);for(let o=0;o<r.length;++o)s.length<20&&r[o]<t&&(s+=e.charAt(r[o]%62))}return s}}function ie(n,e){return n<e?-1:n>e?1:0}function Ki(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),o=e.charAt(s);if(r!==o)return ki(r)===ki(o)?ie(r,o):ki(r)?1:-1}return ie(n.length,e.length)}const aw=55296,cw=57343;function ki(n){const e=n.charCodeAt(0);return e>=aw&&e<=cw}function An(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="__name__";class et{constructor(e,t,s){t===void 0?t=0:t>e.length&&Y(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Y(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof et?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const o=et.compareSegments(e.get(r),t.get(r));if(o!==0)return o}return ie(e.length,t.length)}static compareSegments(e,t){const s=et.isNumericId(e),r=et.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?et.extractNumericId(e).compare(et.extractNumericId(t)):Ki(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vo.fromString(e.substring(4,e.length-2))}}class me extends et{construct(e,t,s){return new me(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(D.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new me(t)}static emptyPath(){return new me([])}}const lw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends et{construct(e,t,s){return new Ae(e,t,s)}static isValidIdentifier(e){return lw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jc}static keyField(){return new Ae([jc])}static fromServerFormat(e){const t=[];let s="",r=0;const o=()=>{if(s.length===0)throw new q(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new q(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new q(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(o(),r++)}if(o(),a)throw new q(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(me.fromString(e))}static fromName(e){return new X(me.fromString(e).popFirst(5))}static empty(){return new X(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(n,e,t){if(!t)throw new q(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hw(n,e,t,s){if(e===!0&&s===!0)throw new q(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hc(n){if(!X.isDocumentKey(n))throw new q(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Lo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Y(12329,{type:typeof n})}function Qi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lo(n);throw new q(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n,e){const t={typeString:n};return e&&(t.value=e),t}function ks(n,e){if(!xu(n))throw new q(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${s}' field to equal '${o.value}'`;break}}if(t)throw new q(D.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=-62135596800,zc=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*zc);return new de(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qc)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zc}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ks(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:_e("string",de._jsonSchemaVersion),seconds:_e("number"),nanoseconds:_e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new de(0,0))}static max(){return new he(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=-1;function dw(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=he.fromTimestamp(s===1e9?new de(t+1,0):new de(t,s));return new Mt(r,X.empty(),e)}function fw(n){return new Mt(n.readTime,n.key,fs)}class Mt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Mt(he.min(),X.empty(),fs)}static max(){return new Mt(he.max(),X.empty(),fs)}}function pw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:ie(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==mw)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N(((s,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(s,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):N.reject(t)}static resolve(e){return new N(((t,s)=>{t(e)}))}static reject(e){return new N(((t,s)=>{s(e)}))}static waitFor(e){return new N(((t,s)=>{let r=0,o=0,a=!1;e.forEach((l=>{++r,l.next((()=>{++o,a&&o===r&&t()}),(h=>s(h)))})),a=!0,o===r&&t()}))}static or(e){let t=N.resolve(!1);for(const s of e)t=t.next((r=>r?N.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,o)=>{s.push(t.call(this,r,o))})),this.waitFor(s)}static mapArray(e,t){return new N(((s,r)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next((_=>{a[d]=_,++l,l===o&&s(a)}),(_=>r(_)))}}))}static doWhile(e,t){return new N(((s,r)=>{const o=()=>{e()===!0?t().next((()=>{o()}),r):s()};o()}))}}function _w(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Rs(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Mo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=-1;function Fo(n){return n==null}function Ir(n){return n===0&&1/n==-1/0}function vw(n){return typeof n=="number"&&Number.isInteger(n)&&!Ir(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="";function yw(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Wc(e)),e=Ew(n.get(t),e);return Wc(e)}function Ew(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const o=n.charAt(r);switch(o){case"\0":t+="";break;case Uu:t+="";break;default:t+=o}}return t}function Wc(n){return n+Uu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ln(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Bu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new Fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xs(this.root,e,this.comparator,!0)}}class Xs{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?s(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,s,r,o){this.key=e,this.value=t,this.color=s??we.RED,this.left=r??we.EMPTY,this.right=o??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,o){return new we(e??this.key,t??this.value,s??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const o=s(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,s),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return we.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,t,s,r,o){return this}insert(e,t,s){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Kc(this.data.getIterator())}getIteratorFrom(e){return new Kc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=s.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Pe(this.comparator);return t.data=e,t}}class Kc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new Je([])}unionWith(e){let t=new Pe(Ae.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return An(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Tw("Invalid base64 string: "+o):o}})(e);return new ot(t)}static fromUint8Array(e){const t=(function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o})(e);return new ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const Iw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rn(n){if(pe(!!n,39018),typeof n=="string"){let e=0;const t=Iw.exec(n);if(pe(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:be(n.seconds),nanos:be(n.nanos)}}function be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Pn(n){return typeof n=="string"?ot.fromBase64String(n):ot.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="server_timestamp",Hu="__type__",qu="__previous_value__",zu="__local_write_time__";function xo(n){return(n?.mapValue?.fields||{})[Hu]?.stringValue===ju}function Uo(n){const e=n.mapValue.fields[qu];return xo(e)?Uo(e):e}function wr(n){const e=rn(n.mapValue.fields[zu].timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,t,s,r,o,a,l,h,d,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=_}}const br="(default)";class Ar{constructor(e,t){this.projectId=e,this.database=t||br}static empty(){return new Ar("","")}get isDefaultDatabase(){return this.database===br}isEqual(e){return e instanceof Ar&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="__type__",bw="__max__",Ys={mapValue:{}},Gu="__vector__",Ji="value";function on(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xo(n)?4:Pw(n)?9007199254740991:Aw(n)?10:11:Y(28295,{value:n})}function at(n,e){if(n===e)return!0;const t=on(n);if(t!==on(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return wr(n).isEqual(wr(e));case 3:return(function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=rn(r.timestampValue),l=rn(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,o){return Pn(r.bytesValue).isEqual(Pn(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,o){return be(r.geoPointValue.latitude)===be(o.geoPointValue.latitude)&&be(r.geoPointValue.longitude)===be(o.geoPointValue.longitude)})(n,e);case 2:return(function(r,o){if("integerValue"in r&&"integerValue"in o)return be(r.integerValue)===be(o.integerValue);if("doubleValue"in r&&"doubleValue"in o){const a=be(r.doubleValue),l=be(o.doubleValue);return a===l?Ir(a)===Ir(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return An(n.arrayValue.values||[],e.arrayValue.values||[],at);case 10:case 11:return(function(r,o){const a=r.mapValue.fields||{},l=o.mapValue.fields||{};if(Gc(a)!==Gc(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!at(a[h],l[h])))return!1;return!0})(n,e);default:return Y(52216,{left:n})}}function ps(n,e){return(n.values||[]).find((t=>at(t,e)))!==void 0}function Sn(n,e){if(n===e)return 0;const t=on(n),s=on(e);if(t!==s)return ie(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ie(n.booleanValue,e.booleanValue);case 2:return(function(o,a){const l=be(o.integerValue||o.doubleValue),h=be(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,e);case 3:return Qc(n.timestampValue,e.timestampValue);case 4:return Qc(wr(n),wr(e));case 5:return Ki(n.stringValue,e.stringValue);case 6:return(function(o,a){const l=Pn(o),h=Pn(a);return l.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const _=ie(l[d],h[d]);if(_!==0)return _}return ie(l.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,a){const l=ie(be(o.latitude),be(a.latitude));return l!==0?l:ie(be(o.longitude),be(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Jc(n.arrayValue,e.arrayValue);case 10:return(function(o,a){const l=o.fields||{},h=a.fields||{},d=l[Ji]?.arrayValue,_=h[Ji]?.arrayValue,g=ie(d?.values?.length||0,_?.values?.length||0);return g!==0?g:Jc(d,_)})(n.mapValue,e.mapValue);case 11:return(function(o,a){if(o===Ys.mapValue&&a===Ys.mapValue)return 0;if(o===Ys.mapValue)return 1;if(a===Ys.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},_=Object.keys(d);h.sort(),_.sort();for(let g=0;g<h.length&&g<_.length;++g){const S=Ki(h[g],_[g]);if(S!==0)return S;const L=Sn(l[h[g]],d[_[g]]);if(L!==0)return L}return ie(h.length,_.length)})(n.mapValue,e.mapValue);default:throw Y(23264,{he:t})}}function Qc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ie(n,e);const t=rn(n),s=rn(e),r=ie(t.seconds,s.seconds);return r!==0?r:ie(t.nanos,s.nanos)}function Jc(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const o=Sn(t[r],s[r]);if(o)return o}return ie(t.length,s.length)}function kn(n){return Xi(n)}function Xi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=rn(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Pn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return X.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const o of t.values||[])r?r=!1:s+=",",s+=Xi(o);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Xi(t.fields[a])}`;return r+"}"})(n.mapValue):Y(61005,{value:n})}function cr(n){switch(on(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Uo(n);return e?16+cr(e):16;case 5:return 2*n.stringValue.length;case 6:return Pn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,o)=>r+cr(o)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return Ln(s.fields,((o,a)=>{r+=o.length+cr(a)})),r})(n.mapValue);default:throw Y(13486,{value:n})}}function Yi(n){return!!n&&"integerValue"in n}function Bo(n){return!!n&&"arrayValue"in n}function lr(n){return!!n&&"mapValue"in n}function Aw(n){return(n?.mapValue?.fields||{})[Wu]?.stringValue===Gu}function is(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ln(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=is(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=is(n.arrayValue.values[t]);return e}return{...n}}function Pw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===bw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.value=e}static empty(){return new Ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!lr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=is(t)}setAll(e){let t=Ae.emptyPath(),s={},r=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,s,r),s={},r=[],t=l.popLast()}a?s[l.lastSegment()]=is(a):r.push(l.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,s,r)}delete(e){const t=this.field(e.popLast());lr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];lr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Ln(t,((r,o)=>e[r]=o));for(const r of s)delete e[r]}clone(){return new Ge(is(this.value))}}function Ku(n){const e=[];return Ln(n.fields,((t,s)=>{const r=new Ae([t]);if(lr(s)){const o=Ku(s.mapValue).fields;if(o.length===0)e.push(r);else for(const a of o)e.push(r.child(a))}else e.push(r)})),new Je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t,s,r,o,a,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new We(e,0,he.min(),he.min(),he.min(),Ge.empty(),0)}static newFoundDocument(e,t,s,r){return new We(e,1,t,he.min(),s,r,0)}static newNoDocument(e,t){return new We(e,2,t,he.min(),he.min(),Ge.empty(),0)}static newUnknownDocument(e,t){return new We(e,3,t,he.min(),he.min(),Ge.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){this.position=e,this.inclusive=t}}function Xc(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const o=e[r],a=n.position[r];if(o.field.isKeyField()?s=X.comparator(X.fromName(a.referenceValue),t.key):s=Sn(a,t.data.field(o.field)),o.dir==="desc"&&(s*=-1),s!==0)break}return s}function Yc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!at(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Sw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{}class Te extends Qu{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Rw(e,t,s):t==="array-contains"?new Nw(e,s):t==="in"?new Dw(e,s):t==="not-in"?new Lw(e,s):t==="array-contains-any"?new Ow(e,s):new Te(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Cw(e,s):new Vw(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Sn(t,this.value)):t!==null&&on(this.value)===on(t)&&this.matchesComparison(Sn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends Qu{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new $t(e,t)}matches(e){return Ju(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ju(n){return n.op==="and"}function Xu(n){return kw(n)&&Ju(n)}function kw(n){for(const e of n.filters)if(e instanceof $t)return!1;return!0}function Zi(n){if(n instanceof Te)return n.field.canonicalString()+n.op.toString()+kn(n.value);if(Xu(n))return n.filters.map((e=>Zi(e))).join(",");{const e=n.filters.map((t=>Zi(t))).join(",");return`${n.op}(${e})`}}function Yu(n,e){return n instanceof Te?(function(s,r){return r instanceof Te&&s.op===r.op&&s.field.isEqual(r.field)&&at(s.value,r.value)})(n,e):n instanceof $t?(function(s,r){return r instanceof $t&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((o,a,l)=>o&&Yu(a,r.filters[l])),!0):!1})(n,e):void Y(19439)}function Zu(n){return n instanceof Te?(function(t){return`${t.field.canonicalString()} ${t.op} ${kn(t.value)}`})(n):n instanceof $t?(function(t){return t.op.toString()+" {"+t.getFilters().map(Zu).join(" ,")+"}"})(n):"Filter"}class Rw extends Te{constructor(e,t,s){super(e,t,s),this.key=X.fromName(s.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class Cw extends Te{constructor(e,t){super(e,"in",t),this.keys=eh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Vw extends Te{constructor(e,t){super(e,"not-in",t),this.keys=eh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function eh(n,e){return(e.arrayValue?.values||[]).map((t=>X.fromName(t.referenceValue)))}class Nw extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bo(t)&&ps(t.arrayValue,this.value)}}class Dw extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ps(this.value.arrayValue,t)}}class Lw extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ps(this.value.arrayValue,t)}}class Ow extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ps(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t=null,s=[],r=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function Zc(n,e=null,t=[],s=[],r=null,o=null,a=null){return new Mw(n,e,t,s,r,o,a)}function jo(n){const e=le(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Zi(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(o){return o.field.canonicalString()+o.dir})(s))).join(","),Fo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>kn(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>kn(s))).join(",")),e.Te=t}return e.Te}function Ho(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Sw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Yu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Yc(n.startAt,e.startAt)&&Yc(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t=null,s=[],r=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function $w(n,e,t,s,r,o,a,l){return new Hr(n,e,t,s,r,o,a,l)}function Fw(n){return new Hr(n)}function el(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xw(n){return n.collectionGroup!==null}function os(n){const e=le(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Pe(Ae.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Sr(o,s))})),t.has(Ae.keyField().canonicalString())||e.Ie.push(new Sr(Ae.keyField(),s))}return e.Ie}function Jt(n){const e=le(n);return e.Ee||(e.Ee=Uw(e,os(n))),e.Ee}function Uw(n,e){if(n.limitType==="F")return Zc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const o=r.dir==="desc"?"asc":"desc";return new Sr(r.field,o)}));const t=n.endAt?new Pr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Pr(n.startAt.position,n.startAt.inclusive):null;return Zc(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function eo(n,e,t){return new Hr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function th(n,e){return Ho(Jt(n),Jt(e))&&n.limitType===e.limitType}function nh(n){return`${jo(Jt(n))}|lt:${n.limitType}`}function Xn(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>Zu(r))).join(", ")}]`),Fo(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>kn(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>kn(r))).join(",")),`Target(${s})`})(Jt(n))}; limitType=${n.limitType})`}function qo(n,e){return e.isFoundDocument()&&(function(s,r){const o=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(o):X.isDocumentKey(s.path)?s.path.isEqual(o):s.path.isImmediateParentOf(o)})(n,e)&&(function(s,r){for(const o of os(s))if(!o.field.isKeyField()&&r.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const o of s.filters)if(!o.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(a,l,h){const d=Xc(a,l,h);return a.inclusive?d<=0:d<0})(s.startAt,os(s),r)||s.endAt&&!(function(a,l,h){const d=Xc(a,l,h);return a.inclusive?d>=0:d>0})(s.endAt,os(s),r))})(n,e)}function Bw(n){return(e,t)=>{let s=!1;for(const r of os(n)){const o=jw(r,e,t);if(o!==0)return o;s=s||r.field.isKeyField()}return 0}}function jw(n,e,t){const s=n.field.isKeyField()?X.comparator(e.key,t.key):(function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?Sn(h,d):Y(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Y(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,o]of s)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ln(this.inner,((t,s)=>{for(const[r,o]of s)e(r,o)}))}isEmpty(){return Bu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=new Fe(X.comparator);function kr(){return Hw}const sh=new Fe(X.comparator);function Zs(...n){let e=sh;for(const t of n)e=e.insert(t.key,t);return e}function rh(n){let e=sh;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Kt(){return as()}function ih(){return as()}function as(){return new ln((n=>n.toString()),((n,e)=>n.isEqual(e)))}const qw=new Fe(X.comparator),zw=new Pe(X.comparator);function Ce(...n){let e=zw;for(const t of n)e=e.add(t);return e}const Ww=new Pe(ie);function Gw(){return Ww}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ir(e)?"-0":e}}function oh(n){return{integerValue:""+n}}function Kw(n,e){return vw(e)?oh(e):zo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this._=void 0}}function Qw(n,e,t){return n instanceof ms?(function(r,o){const a={fields:{[Hu]:{stringValue:ju},[zu]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return o&&xo(o)&&(o=Uo(o)),o&&(a.fields[qu]=o),{mapValue:a}})(t,e):n instanceof gs?ch(n,e):n instanceof _s?lh(n,e):(function(r,o){const a=ah(r,o),l=tl(a)+tl(r.Ae);return Yi(a)&&Yi(r.Ae)?oh(l):zo(r.serializer,l)})(n,e)}function Jw(n,e,t){return n instanceof gs?ch(n,e):n instanceof _s?lh(n,e):t}function ah(n,e){return n instanceof Rr?(function(s){return Yi(s)||(function(o){return!!o&&"doubleValue"in o})(s)})(e)?e:{integerValue:0}:null}class ms extends qr{}class gs extends qr{constructor(e){super(),this.elements=e}}function ch(n,e){const t=uh(e);for(const s of n.elements)t.some((r=>at(r,s)))||t.push(s);return{arrayValue:{values:t}}}class _s extends qr{constructor(e){super(),this.elements=e}}function lh(n,e){let t=uh(e);for(const s of n.elements)t=t.filter((r=>!at(r,s)));return{arrayValue:{values:t}}}class Rr extends qr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function tl(n){return be(n.integerValue||n.doubleValue)}function uh(n){return Bo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t){this.field=e,this.transform=t}}function Yw(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof gs&&r instanceof gs||s instanceof _s&&r instanceof _s?An(s.elements,r.elements,at):s instanceof Rr&&r instanceof Rr?at(s.Ae,r.Ae):s instanceof ms&&r instanceof ms})(n.transform,e.transform)}class Zw{constructor(e,t){this.version=e,this.transformResults=t}}class dt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new dt}static exists(e){return new dt(void 0,e)}static updateTime(e){return new dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ur(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class zr{}function hh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new fh(n.key,dt.none()):new Cs(n.key,n.data,dt.none());{const t=n.data,s=Ge.empty();let r=new Pe(Ae.comparator);for(let o of e.fields)if(!r.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?s.delete(o):s.set(o,a),r=r.add(o)}return new un(n.key,s,new Je(r.toArray()),dt.none())}}function eb(n,e,t){n instanceof Cs?(function(r,o,a){const l=r.value.clone(),h=sl(r.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof un?(function(r,o,a){if(!ur(r.precondition,o))return void o.convertToUnknownDocument(a.version);const l=sl(r.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(dh(r)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,e,t):(function(r,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function cs(n,e,t,s){return n instanceof Cs?(function(o,a,l,h){if(!ur(o.precondition,a))return l;const d=o.value.clone(),_=rl(o.fieldTransforms,h,a);return d.setAll(_),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,s):n instanceof un?(function(o,a,l,h){if(!ur(o.precondition,a))return l;const d=rl(o.fieldTransforms,h,a),_=a.data;return _.setAll(dh(o)),_.setAll(d),a.convertToFoundDocument(a.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((g=>g.field)))})(n,e,t,s):(function(o,a,l){return ur(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function tb(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),o=ah(s.transform,r||null);o!=null&&(t===null&&(t=Ge.empty()),t.set(s.field,o))}return t||null}function nl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&An(s,r,((o,a)=>Yw(o,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Cs extends zr{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class un extends zr{constructor(e,t,s,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function dh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function sl(n,e,t){const s=new Map;pe(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let r=0;r<t.length;r++){const o=n[r],a=o.transform,l=e.data.field(o.field);s.set(o.field,Jw(a,l,t[r]))}return s}function rl(n,e,t){const s=new Map;for(const r of n){const o=r.transform,a=t.data.field(r.field);s.set(r.field,Qw(o,a,e))}return s}class fh extends zr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nb extends zr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&eb(o,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=cs(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=cs(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ih();return this.mutations.forEach((r=>{const o=e.get(r.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(r.key)?null:l;const h=hh(a,l);h!==null&&s.set(r.key,h),a.isValidDocument()||a.convertToNoDocument(he.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&An(this.mutations,e.mutations,((t,s)=>nl(t,s)))&&An(this.baseMutations,e.baseMutations,((t,s)=>nl(t,s)))}}class Wo{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){pe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return qw})();const o=e.mutations;for(let a=0;a<o.length;a++)r=r.insert(o[a].key,s[a].version);return new Wo(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,se;function ib(n){switch(n){case D.OK:return Y(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return Y(15467,{code:n})}}function ob(n){if(n===void 0)return sn("GRPC error has no .code"),D.UNKNOWN;switch(n){case ge.OK:return D.OK;case ge.CANCELLED:return D.CANCELLED;case ge.UNKNOWN:return D.UNKNOWN;case ge.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ge.INTERNAL:return D.INTERNAL;case ge.UNAVAILABLE:return D.UNAVAILABLE;case ge.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ge.NOT_FOUND:return D.NOT_FOUND;case ge.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ge.ABORTED:return D.ABORTED;case ge.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ge.DATA_LOSS:return D.DATA_LOSS;default:return Y(39323,{code:n})}}(se=ge||(ge={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Vo([4294967295,4294967295],0);class ab{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function to(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cb(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function lb(n,e){return to(n,e.toTimestamp())}function In(n){return pe(!!n,49232),he.fromTimestamp((function(t){const s=rn(t);return new de(s.seconds,s.nanos)})(n))}function ph(n,e){return no(n,e).canonicalString()}function no(n,e){const t=(function(r){return new me(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ub(n){const e=me.fromString(n);return pe(vb(e),10190,{key:e.toString()}),e}function so(n,e){return ph(n.databaseId,e.path)}function hb(n){const e=ub(n);return e.length===4?me.emptyPath():fb(e)}function db(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fb(n){return pe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function il(n,e,t){return{name:so(n,e),fields:t.value.mapValue.fields}}function pb(n,e){let t;if(e instanceof Cs)t={update:il(n,e.key,e.value)};else if(e instanceof fh)t={delete:so(n,e.key)};else if(e instanceof un)t={update:il(n,e.key,e.data),updateMask:_b(e.fieldMask)};else{if(!(e instanceof nb))return Y(16599,{Vt:e.type});t={verify:so(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(o,a){const l=a.transform;if(l instanceof ms)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof gs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _s)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Rr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,o){return o.updateTime!==void 0?{updateTime:lb(r,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:Y(27497)})(n,e.precondition)),t}function mb(n,e){return n&&n.length>0?(pe(e!==void 0,14353),n.map((t=>(function(r,o){let a=r.updateTime?In(r.updateTime):In(o);return a.isEqual(he.min())&&(a=In(o)),new Zw(a,r.transformResults||[])})(t,e)))):[]}function gb(n){let e=hb(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){pe(s===1,65062);const _=t.from[0];_.allDescendants?r=_.collectionId:e=e.child(_.collectionId)}let o=[];t.where&&(o=(function(g){const S=mh(g);return S instanceof $t&&Xu(S)?S.getFilters():[S]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((S=>(function(F){return new Sr(mn(F.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(F.direction))})(S)))})(t.orderBy));let l=null;t.limit&&(l=(function(g){let S;return S=typeof g=="object"?g.value:g,Fo(S)?null:S})(t.limit));let h=null;t.startAt&&(h=(function(g){const S=!!g.before,L=g.values||[];return new Pr(L,S)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const S=!g.before,L=g.values||[];return new Pr(L,S)})(t.endAt)),$w(e,r,a,o,l,"F",h,d)}function mh(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=mn(t.unaryFilter.field);return Te.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=mn(t.unaryFilter.field);return Te.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=mn(t.unaryFilter.field);return Te.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=mn(t.unaryFilter.field);return Te.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Te.create(mn(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return $t.create(t.compositeFilter.filters.map((s=>mh(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Y(1026)}})(t.compositeFilter.op))})(n):Y(30097,{filter:n})}function mn(n){return Ae.fromServerFormat(n.fieldPath)}function _b(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function vb(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.yt=e}}function Eb(n){const e=gb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?eo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this.Cn=new Ib}addToCollectionParentIndex(e,t){return this.Cn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Mt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Mt.min())}updateCollectionGroup(e,t,s){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class Ib{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Pe(me.comparator),o=!r.has(s);return this.index[t]=r.add(s),o}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Pe(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gh=41943040;class $e{static withCacheSize(e){return new $e(e,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e.DEFAULT_COLLECTION_PERCENTILE=10,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$e.DEFAULT=new $e(gh,$e.DEFAULT_COLLECTION_PERCENTILE,$e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$e.DISABLED=new $e(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Rn(0)}static cr(){return new Rn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="LruGarbageCollector",wb=1048576;function cl([n,e],[t,s]){const r=ie(n,t);return r===0?ie(e,s):r}class bb{constructor(e){this.Ir=e,this.buffer=new Pe(cl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();cl(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ab{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){B(al,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Rs(t)?B(al,"Ignoring IndexedDB error during garbage collection: ",t):await Oo(t)}await this.Vr(3e5)}))}}class Pb{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return N.resolve(Mo.ce);const s=new bb(t);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(ol)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ol):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,r,o,a,l,h,d;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,a=Date.now(),this.nthSequenceNumber(e,r)))).next((g=>(s=g,l=Date.now(),this.removeTargets(e,s,t)))).next((g=>(o=g,h=Date.now(),this.removeOrphanedDocuments(e,s)))).next((g=>(d=Date.now(),pn()<=te.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-_}ms
	Determined least recently used ${r} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${g} documents in `+(d-h)+`ms
Total Duration: ${d-_}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:g}))))}}function Sb(n,e){return new Pb(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(){this.changes=new ln((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,We.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?N.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&cs(s.mutation,r,Je.empty(),de.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ce()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ce()){const r=Kt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((o=>{let a=Zs();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=Kt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ce())))}populateOverlays(e,t,s){const r=[];return s.forEach((o=>{t.has(o)||r.push(o)})),this.documentOverlayCache.getOverlays(e,r).next((o=>{o.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,s,r){let o=kr();const a=as(),l=(function(){return as()})();return t.forEach(((h,d)=>{const _=s.get(d.key);r.has(d.key)&&(_===void 0||_.mutation instanceof un)?o=o.insert(d.key,d):_!==void 0?(a.set(d.key,_.mutation.getFieldMask()),cs(_.mutation,d,_.mutation.getFieldMask(),de.now())):a.set(d.key,Je.empty())})),this.recalculateAndSaveOverlays(e,o).next((h=>(h.forEach(((d,_)=>a.set(d,_))),t.forEach(((d,_)=>l.set(d,new Rb(_,a.get(d)??null)))),l)))}recalculateAndSaveOverlays(e,t){const s=as();let r=new Fe(((a,l)=>a-l)),o=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((h=>{const d=t.get(h);if(d===null)return;let _=s.get(h)||Je.empty();_=l.applyToLocalView(d,_),s.set(h,_);const g=(r.get(l.batchId)||Ce()).add(h);r=r.insert(l.batchId,g)}))})).next((()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,_=h.value,g=ih();_.forEach((S=>{if(!o.has(S)){const L=hh(t.get(S),s.get(S));L!==null&&g.set(S,L),o=o.add(S)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return N.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((o=>{const a=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-o.size):N.resolve(Kt());let l=fs,h=o;return a.next((d=>N.forEach(d,((_,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),o.get(_)?N.resolve():this.remoteDocumentCache.getEntry(e,_).next((S=>{h=h.insert(_,S)}))))).next((()=>this.populateOverlays(e,d,o))).next((()=>this.computeViews(e,h,d,Ce()))).next((_=>({batchId:l,changes:rh(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((s=>{let r=Zs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const o=t.collectionGroup;let a=Zs();return this.indexManager.getCollectionParents(e,o).next((l=>N.forEach(l,(h=>{const d=(function(g,S){return new Hr(S,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next((_=>{_.forEach(((g,S)=>{a=a.insert(g,S)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,o,r)))).next((a=>{o.forEach(((h,d)=>{const _=d.getKey();a.get(_)===null&&(a=a.insert(_,We.newInvalidDocument(_)))}));let l=Zs();return a.forEach(((h,d)=>{const _=o.get(h);_!==void 0&&cs(_.mutation,d,Je.empty(),de.now()),qo(t,d)&&(l=l.insert(h,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return N.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:In(r.createTime)}})(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(r){return{name:r.name,query:Eb(r.bundledQuery),readTime:In(r.readTime)}})(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.overlays=new Fe(X.comparator),this.qr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Kt();return N.forEach(t,(r=>this.getOverlay(e,r).next((o=>{o!==null&&s.set(r,o)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,o)=>{this.St(e,t,o)})),N.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(s)),N.resolve()}getOverlaysForCollection(e,t,s){const r=Kt(),o=t.length+1,a=new X(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>s&&r.set(h.getKey(),h)}return N.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let o=new Fe(((d,_)=>d-_));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let _=o.get(d.largestBatchId);_===null&&(_=Kt(),o=o.insert(d.largestBatchId,_)),_.set(d.getKey(),d)}}const l=Kt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,_)=>l.set(d,_))),!(l.size()>=r)););return N.resolve(l)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new rb(t,s));let o=this.qr.get(t);o===void 0&&(o=Ce(),this.qr.set(t,o)),this.qr.set(t,o.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.Qr=new Pe(Ee.$r),this.Ur=new Pe(Ee.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Ee(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Ee(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new X(new me([])),s=new Ee(t,e),r=new Ee(t,e+1),o=[];return this.Ur.forEachInRange([s,r],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new X(new me([])),s=new Ee(t,e),r=new Ee(t,e+1);let o=Ce();return this.Ur.forEachInRange([s,r],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new Ee(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ee{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return X.comparator(e.key,t.key)||ie(e.Yr,t.Yr)}static Kr(e,t){return ie(e.Yr,t.Yr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Pe(Ee.$r)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new sb(o,t,s,r);this.mutationQueue.push(a);for(const l of r)this.Zr=this.Zr.add(new Ee(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ei(s),o=r<0?0:r;return N.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?$o:this.tr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ee(t,0),r=new Ee(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([s,r],(a=>{const l=this.Xr(a.Yr);o.push(l)})),N.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Pe(ie);return t.forEach((r=>{const o=new Ee(r,0),a=new Ee(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(l=>{s=s.add(l.Yr)}))})),N.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let o=s;X.isDocumentKey(o)||(o=o.child(""));const a=new Ee(new X(o),0);let l=new Pe(ie);return this.Zr.forEachWhile((h=>{const d=h.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(l=l.add(h.Yr)),!0)}),a),N.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){pe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return N.forEach(t.mutations,(r=>{const o=new Ee(r.key,t.batchId);return s=s.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Ee(t,0),r=this.Zr.firstAfterOrEqual(s);return N.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.ri=e,this.docs=(function(){return new Fe(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),o=r?r.size:0,a=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return N.resolve(s?s.document.mutableCopy():We.newInvalidDocument(t))}getEntries(e,t){let s=kr();return t.forEach((r=>{const o=this.docs.get(r);s=s.insert(r,o?o.document.mutableCopy():We.newInvalidDocument(r))})),N.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let o=kr();const a=t.path,l=new X(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:_}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||pw(fw(_),s)<=0||(r.has(_.key)||qo(t,_))&&(o=o.insert(_.key,_.mutableCopy()))}return N.resolve(o)}getAllFromCollectionGroup(e,t,s,r){Y(9500)}ii(e,t){return N.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Mb(this)}getSize(e){return N.resolve(this.size)}}class Mb extends kb{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),N.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.persistence=e,this.si=new ln((t=>jo(t)),Ho),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.oi=0,this._i=new Go,this.targetCount=0,this.ai=Rn.ur()}forEachTarget(e,t){return this.si.forEach(((s,r)=>t(r))),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),N.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Rn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Pr(t),N.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,s){let r=0;const o=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),N.waitFor(o).next((()=>r))}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return N.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),N.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach((a=>{o.push(r.markPotentiallyOrphaned(e,a))})),N.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return N.resolve(s)}containsKey(e,t){return N.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t){this.ui={},this.overlays={},this.ci=new Mo(0),this.li=!1,this.li=!0,this.hi=new Db,this.referenceDelegate=e(this),this.Pi=new $b(this),this.indexManager=new Tb,this.remoteDocumentCache=(function(r){return new Ob(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new yb(t),this.Ii=new Vb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Nb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new Lb(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){B("MemoryPersistence","Starting transaction:",e);const r=new Fb(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((o=>this.referenceDelegate.di(r).next((()=>o)))).toPromise().then((o=>(r.raiseOnCommittedEvent(),o)))}Ai(e,t){return N.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class Fb extends gw{constructor(e){super(),this.currentSequenceNumber=e}}class Ko{constructor(e){this.persistence=e,this.Ri=new Go,this.Vi=null}static mi(e){return new Ko(e)}get fi(){if(this.Vi)return this.Vi;throw Y(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),N.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((o=>this.fi.add(o.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.fi,(s=>{const r=X.fromPath(s);return this.gi(e,r).next((o=>{o||t.removeEntry(r,he.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return N.or([()=>N.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Cr{constructor(e,t){this.persistence=e,this.pi=new ln((s=>yw(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Sb(this,t)}static mi(e,t){return new Cr(e,t)}Ei(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return N.forEach(this.pi,((s,r)=>this.br(e,s,r).next((o=>o?N.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),o=r.newChangeBuffer();return r.ii(e,(a=>this.br(e,a,t).next((l=>{l||(s++,o.removeEntry(a,he.min()))})))).next((()=>o.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),N.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),N.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=cr(e.data.value)),t}br(e,t,s){return N.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return N.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=r}static As(e,t){let s=Ce(),r=Ce();for(const o of t.docChanges)switch(o.type){case 0:s=s.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new Qo(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return _y()?8:_w(Ne())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const o={result:null};return this.ys(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(e,t,r,s).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new xb;return this.Ss(e,t,a).next((l=>{if(o.result=l,this.Vs)return this.bs(e,t,a,l.size)}))})).next((()=>o.result))}bs(e,t,s,r){return s.documentReadCount<this.fs?(pn()<=te.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Xn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),N.resolve()):(pn()<=te.DEBUG&&B("QueryEngine","Query:",Xn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(pn()<=te.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Xn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jt(t))):N.resolve())}ys(e,t){if(el(t))return N.resolve(null);let s=Jt(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=eo(t,null,"F"),s=Jt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((o=>{const a=Ce(...o);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,s).next((h=>{const d=this.Ds(t,l);return this.Cs(t,d,a,h.readTime)?this.ys(e,eo(t,null,"F")):this.vs(e,d,t,h)}))))})))))}ws(e,t,s,r){return el(t)||r.isEqual(he.min())?N.resolve(null):this.ps.getDocuments(e,s).next((o=>{const a=this.Ds(t,o);return this.Cs(t,a,s,r)?N.resolve(null):(pn()<=te.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Xn(t)),this.vs(e,a,t,dw(r,fs)).next((l=>l)))}))}Ds(e,t){let s=new Pe(Bw(e));return t.forEach(((r,o)=>{qo(e,o)&&(s=s.add(o))})),s}Cs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Ss(e,t,s){return pn()<=te.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Xn(t)),this.ps.getDocumentsMatchingQuery(e,t,Mt.min(),s)}vs(e,t,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="LocalStore";class jb{constructor(e,t,s,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new Fe(ie),this.xs=new ln((o=>jo(o)),Ho),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Hb(n,e,t,s){return new jb(n,e,t,s)}async function vh(n,e){const t=le(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((o=>(r=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((o=>{const a=[],l=[];let h=Ce();for(const d of r){a.push(d.batchId);for(const _ of d.mutations)h=h.add(_.key)}for(const d of o){l.push(d.batchId);for(const _ of d.mutations)h=h.add(_.key)}return t.localDocuments.getDocuments(s,h).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function qb(n,e){const t=le(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,d,_){const g=d.batch,S=g.keys();let L=N.resolve();return S.forEach((F=>{L=L.next((()=>_.getEntry(h,F))).next((z=>{const $=d.docVersions.get(F);pe($!==null,48541),z.version.compareTo($)<0&&(g.applyToRemoteDocument(z,d),z.isValidDocument()&&(z.setReadTime(d.commitVersion),_.addEntry(z)))}))})),L.next((()=>l.mutationQueue.removeMutationBatch(h,g)))})(t,s,e,o).next((()=>o.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let h=Ce();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function zb(n){const e=le(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Wb(n,e){const t=le(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=$o),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}class ll{constructor(){this.activeTargetIds=Gw()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gb{constructor(){this.Mo=new ll,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ll,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="ConnectivityMonitor";class hl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){B(ul,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){B(ul,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er=null;function ro(){return er===null?er=(function(){return 268435456+Math.round(2147483648*Math.random())})():er++,"0x"+er.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="RestConnection",Qb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Jb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===br?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,t,s,r,o){const a=ro(),l=this.zo(e,t.toUriEncodedString());B(Ri,`Sending RPC '${e}' ${a}:`,l,s);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,r,o);const{host:d}=new URL(l),_=Cn(d);return this.Jo(e,l,h,s,_).then((g=>(B(Ri,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw jr(Ri,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",s),g}))}Ho(e,t,s,r,o,a){return this.Go(e,t,s,r,o)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Dn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,o)=>e[o]=r)),s&&s.headers.forEach(((r,o)=>e[o]=r))}zo(e,t){const s=Qb[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="WebChannelConnection";class Yb extends Jb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,r,o){const a=ro();return new Promise(((l,h)=>{const d=new Nu;d.setWithCredentials(!0),d.listenOnce(Du.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case ar.NO_ERROR:const g=d.getResponseJson();B(ke,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case ar.TIMEOUT:B(ke,`RPC '${e}' ${a} timed out`),h(new q(D.DEADLINE_EXCEEDED,"Request time out"));break;case ar.HTTP_ERROR:const S=d.getStatus();if(B(ke,`RPC '${e}' ${a} failed with status:`,S,"response text:",d.getResponseText()),S>0){let L=d.getResponseJson();Array.isArray(L)&&(L=L[0]);const F=L?.error;if(F&&F.status&&F.message){const z=(function(Z){const re=Z.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(re)>=0?re:D.UNKNOWN})(F.status);h(new q(z,F.message))}else h(new q(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new q(D.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{B(ke,`RPC '${e}' ${a} completed.`)}}));const _=JSON.stringify(r);B(ke,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",_,s,15)}))}T_(e,t,s){const r=ro(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Mu(),l=Ou(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,s),h.encodeInitMessageHeaders=!0;const _=o.join("");B(ke,`Creating RPC '${e}' stream ${r}: ${_}`,h);const g=a.createWebChannel(_,h);this.I_(g);let S=!1,L=!1;const F=new Xb({Yo:$=>{L?B(ke,`Not sending because RPC '${e}' stream ${r} is closed:`,$):(S||(B(ke,`Opening RPC '${e}' stream ${r} transport.`),g.open(),S=!0),B(ke,`RPC '${e}' stream ${r} sending:`,$),g.send($))},Zo:()=>g.close()}),z=($,Z,re)=>{$.listen(Z,(ae=>{try{re(ae)}catch(xe){setTimeout((()=>{throw xe}),0)}}))};return z(g,es.EventType.OPEN,(()=>{L||(B(ke,`RPC '${e}' stream ${r} transport opened.`),F.o_())})),z(g,es.EventType.CLOSE,(()=>{L||(L=!0,B(ke,`RPC '${e}' stream ${r} transport closed`),F.a_(),this.E_(g))})),z(g,es.EventType.ERROR,($=>{L||(L=!0,jr(ke,`RPC '${e}' stream ${r} transport errored. Name:`,$.name,"Message:",$.message),F.a_(new q(D.UNAVAILABLE,"The operation could not be completed")))})),z(g,es.EventType.MESSAGE,($=>{if(!L){const Z=$.data[0];pe(!!Z,16349);const re=Z,ae=re?.error||re[0]?.error;if(ae){B(ke,`RPC '${e}' stream ${r} received error:`,ae);const xe=ae.status;let He=(function(p){const v=ge[p];if(v!==void 0)return ob(v)})(xe),De=ae.message;He===void 0&&(He=D.INTERNAL,De="Unknown error status: "+xe+" with message "+ae.message),L=!0,F.a_(new q(He,De)),g.close()}else B(ke,`RPC '${e}' stream ${r} received:`,Z),F.u_(Z)}})),z(l,Lu.STAT_EVENT,($=>{$.stat===Gi.PROXY?B(ke,`RPC '${e}' stream ${r} detected buffering proxy`):$.stat===Gi.NOPROXY&&B(ke,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{F.__()}),0),F}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Ci(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n){return new ab(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,t,s=1e3,r=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=r,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="PersistentStream";class Zb{constructor(e,t,s,r,o,a,l,h){this.Mi=e,this.S_=s,this.b_=r,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new yh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(sn(t.toString()),sn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new q(D.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return B(dl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(B(dl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class eA extends Zb{constructor(e,t,s,r,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=mb(e.writeResults,e.commitTime),s=In(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=db(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>pb(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{}class nA extends tA{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(e,no(t,s),r,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(D.UNKNOWN,o.toString())}))}Ho(e,t,s,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,no(t,s),r,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(D.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class sA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(sn(t),this.aa=!1):B("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="RemoteStore";class rA{constructor(e,t,s,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{s.enqueueAndForget((async()=>{Ds(this)&&(B(Vs,"Restarting streams for network reachability change."),await(async function(h){const d=le(h);d.Ea.add(4),await Ns(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Gr(d)})(this))}))})),this.Ra=new sA(s,r)}}async function Gr(n){if(Ds(n))for(const e of n.da)await e(!0)}async function Ns(n){for(const e of n.da)await e(!1)}function Ds(n){return le(n).Ea.size===0}async function Eh(n,e,t){if(!Rs(e))throw e;n.Ea.add(1),await Ns(n),n.Ra.set("Offline"),t||(t=()=>zb(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{B(Vs,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Gr(n)}))}function Th(n,e){return e().catch((t=>Eh(n,t,e)))}async function Kr(n){const e=le(n),t=Ft(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:$o;for(;iA(e);)try{const r=await Wb(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,oA(e,r)}catch(r){await Eh(e,r)}Ih(e)&&wh(e)}function iA(n){return Ds(n)&&n.Ta.length<10}function oA(n,e){n.Ta.push(e);const t=Ft(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Ih(n){return Ds(n)&&!Ft(n).x_()&&n.Ta.length>0}function wh(n){Ft(n).start()}async function aA(n){Ft(n).ra()}async function cA(n){const e=Ft(n);for(const t of n.Ta)e.ea(t.mutations)}async function lA(n,e,t){const s=n.Ta.shift(),r=Wo.from(s,e,t);await Th(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await Kr(n)}async function uA(n,e){e&&Ft(n).X_&&await(async function(s,r){if((function(a){return ib(a)&&a!==D.ABORTED})(r.code)){const o=s.Ta.shift();Ft(s).B_(),await Th(s,(()=>s.remoteSyncer.rejectFailedWrite(o.batchId,r))),await Kr(s)}})(n,e),Ih(n)&&wh(n)}async function fl(n,e){const t=le(n);t.asyncQueue.verifyOperationInProgress(),B(Vs,"RemoteStore received new credentials");const s=Ds(t);t.Ea.add(3),await Ns(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Gr(t)}async function hA(n,e){const t=le(n);e?(t.Ea.delete(2),await Gr(t)):e||(t.Ea.add(2),await Ns(t),t.Ra.set("Unknown"))}function Ft(n){return n.fa||(n.fa=(function(t,s,r){const o=le(t);return o.sa(),new eA(s,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:aA.bind(null,n),r_:uA.bind(null,n),ta:cA.bind(null,n),na:lA.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Kr(n)):(await n.fa.stop(),n.Ta.length>0&&(B(Vs,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t,s,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=o,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,o){const a=Date.now()+s,l=new Jo(e,t,a,r,o);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bh(n,e){if(sn("AsyncQueue",`${e}: ${n}`),Rs(n))return new q(D.UNAVAILABLE,`${e}: ${n}`);throw n}class dA{constructor(){this.queries=pl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=le(t),o=r.queries;r.queries=pl(),o.forEach(((a,l)=>{for(const h of l.Sa)h.onError(s)}))})(this,new q(D.ABORTED,"Firestore shutting down"))}}function pl(){return new ln((n=>nh(n)),th)}function fA(n){n.Ca.forEach((e=>{e.next()}))}var ml,gl;(gl=ml||(ml={})).Ma="default",gl.Cache="cache";const pA="SyncEngine";class mA{constructor(e,t,s,r,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new ln((l=>nh(l)),th),this.Iu=new Map,this.Eu=new Set,this.du=new Fe(X.comparator),this.Au=new Map,this.Ru=new Go,this.Vu={},this.mu=new Map,this.fu=Rn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function gA(n,e,t){const s=EA(n);try{const r=await(function(a,l){const h=le(a),d=de.now(),_=l.reduce(((L,F)=>L.add(F.key)),Ce());let g,S;return h.persistence.runTransaction("Locally write mutations","readwrite",(L=>{let F=kr(),z=Ce();return h.Ns.getEntries(L,_).next(($=>{F=$,F.forEach(((Z,re)=>{re.isValidDocument()||(z=z.add(Z))}))})).next((()=>h.localDocuments.getOverlayedDocuments(L,F))).next(($=>{g=$;const Z=[];for(const re of l){const ae=tb(re,g.get(re.key).overlayedDocument);ae!=null&&Z.push(new un(re.key,ae,Ku(ae.value.mapValue),dt.exists(!0)))}return h.mutationQueue.addMutationBatch(L,d,Z,l)})).next(($=>{S=$;const Z=$.applyToLocalDocumentSet(g,z);return h.documentOverlayCache.saveOverlays(L,$.batchId,Z)}))})).then((()=>({batchId:S.batchId,changes:rh(g)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,l,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new Fe(ie)),d=d.insert(l,h),a.Vu[a.currentUser.toKey()]=d})(s,r.batchId,t),await Qr(s,r.changes),await Kr(s.remoteStore)}catch(r){const o=bh(r,"Failed to persist write");t.reject(o)}}function _l(n,e,t){const s=le(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((o,a)=>{const l=a.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(a,l){const h=le(a);h.onlineState=l;let d=!1;h.queries.forEach(((_,g)=>{for(const S of g.Sa)S.va(l)&&(d=!0)})),d&&fA(h)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _A(n,e){const t=le(n),s=e.batch.batchId;try{const r=await qb(t.localStore,e);Ph(t,s,null),Ah(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Qr(t,r)}catch(r){await Oo(r)}}async function vA(n,e,t){const s=le(n);try{const r=await(function(a,l){const h=le(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let _;return h.mutationQueue.lookupMutationBatch(d,l).next((g=>(pe(g!==null,37113),_=g.keys(),h.mutationQueue.removeMutationBatch(d,g)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,_,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,_))).next((()=>h.localDocuments.getDocuments(d,_)))}))})(s.localStore,e);Ph(s,e,t),Ah(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Qr(s,r)}catch(r){await Oo(r)}}function Ah(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Ph(n,e,t){const s=le(n);let r=s.Vu[s.currentUser.toKey()];if(r){const o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}async function Qr(n,e,t){const s=le(n),r=[],o=[],a=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,h)=>{a.push(s.pu(h,e,t).then((d=>{if((d||t)&&s.isPrimaryClient){const _=d?!d.fromCache:t?.targetChanges.get(h.targetId)?.current;s.sharedClientState.updateQueryState(h.targetId,_?"current":"not-current")}if(d){r.push(d);const _=Qo.As(h.targetId,d);o.push(_)}})))})),await Promise.all(a),s.Pu.H_(r),await(async function(h,d){const _=le(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>N.forEach(d,(S=>N.forEach(S.Es,(L=>_.persistence.referenceDelegate.addReference(g,S.targetId,L))).next((()=>N.forEach(S.ds,(L=>_.persistence.referenceDelegate.removeReference(g,S.targetId,L)))))))))}catch(g){if(!Rs(g))throw g;B(Bb,"Failed to update sequence numbers: "+g)}for(const g of d){const S=g.targetId;if(!g.fromCache){const L=_.Ms.get(S),F=L.snapshotVersion,z=L.withLastLimboFreeSnapshotVersion(F);_.Ms=_.Ms.insert(S,z)}}})(s.localStore,o))}async function yA(n,e){const t=le(n);if(!t.currentUser.isEqual(e)){B(pA,"User change. New user:",e.toKey());const s=await vh(t.localStore,e);t.currentUser=e,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new q(D.CANCELLED,a))}))})),o.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Qr(t,s.Ls)}}function EA(n){const e=le(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_A.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vA.bind(null,e),e}class Vr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Hb(this.persistence,new Ub,e.initialUser,this.serializer)}Cu(e){return new _h(Ko.mi,this.serializer)}Du(e){return new Gb}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vr.provider={build:()=>new Vr};class TA extends Vr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){pe(this.persistence.referenceDelegate instanceof Cr,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Ab(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?$e.withCacheSize(this.cacheSizeBytes):$e.DEFAULT;return new _h((s=>Cr.mi(s,t)),this.serializer)}}class io{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>_l(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=yA.bind(null,this.syncEngine),await hA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new dA})()}createDatastore(e){const t=Wr(e.databaseInfo.databaseId),s=(function(o){return new Yb(o)})(e.databaseInfo);return(function(o,a,l,h){return new nA(o,a,l,h)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,o,a,l){return new rA(s,r,o,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>_l(this.syncEngine,t,0)),(function(){return hl.v()?new hl:new Kb})())}createSyncEngine(e,t){return(function(r,o,a,l,h,d,_){const g=new mA(r,o,a,l,h,d);return _&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=le(t);B(Vs,"RemoteStore shutting down."),s.Ea.add(5),await Ns(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}io.provider={build:()=>new io};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="FirestoreClient";class IA{constructor(e,t,s,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Re.UNAUTHENTICATED,this.clientId=Do.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(s,(async a=>{B(xt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(B(xt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=bh(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Vi(n,e){n.asyncQueue.verifyOperationInProgress(),B(xt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await vh(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function vl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wA(n);B(xt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>fl(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>fl(e.remoteStore,r))),n._onlineComponents=e}async function wA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B(xt,"Using user provided OfflineComponentProvider");try{await Vi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===D.FAILED_PRECONDITION||r.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;jr("Error using user provided cache. Falling back to memory cache: "+t),await Vi(n,new Vr)}}else B(xt,"Using default OfflineComponentProvider"),await Vi(n,new TA(void 0));return n._offlineComponents}async function bA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B(xt,"Using user provided OnlineComponentProvider"),await vl(n,n._uninitializedComponentsProvider._online)):(B(xt,"Using default OnlineComponentProvider"),await vl(n,new io))),n._onlineComponents}function AA(n){return bA(n).then((e=>e.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="firestore.googleapis.com",El=!0;class Tl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kh,this.ssl=El}else this.host=e.host,this.ssl=e.ssl??El;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wb)throw new q(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sh(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xo{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new ew;switch(s.type){case"firstParty":return new rw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new q(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=yl.get(t);s&&(B("ComponentProvider","Removing Datastore"),yl.delete(t),s.terminate())})(this),Promise.resolve()}}function PA(n,e,t,s={}){n=Qi(n,Xo);const r=Cn(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&(Hl(`https://${l}`),ql("Firestore",!0)),o.host!==kh&&o.host!==l&&jr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:r,emulatorOptions:s};if(!Yt(h,a)&&(n._setSettings(h),s.mockUserToken)){let d,_;if(typeof s.mockUserToken=="string")d=s.mockUserToken,_=Re.MOCK_USER;else{d=cy(s.mockUserToken,n._app?.options.projectId);const g=s.mockUserToken.sub||s.mockUserToken.user_id;if(!g)throw new q(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Re(g)}n._authCredentials=new tw(new Fu(d,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Yo(this.firestore,e,this._query)}}class Ve{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}toJSON(){return{type:Ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ks(t,Ve._jsonSchema))return new Ve(e,s||null,new X(me.fromString(t.referencePath)))}}Ve._jsonSchemaVersion="firestore/documentReference/1.0",Ve._jsonSchema={type:_e("string",Ve._jsonSchemaVersion),referencePath:_e("string")};class vs extends Yo{constructor(e,t,s){super(e,t,Fw(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new X(e))}withConverter(e){return new vs(this.firestore,e,this._path)}}function SA(n,e,...t){if(n=Be(n),arguments.length===1&&(e=Do.newId()),uw("doc","path",e),n instanceof Xo){const s=me.fromString(e,...t);return Hc(s),new Ve(n,null,new X(s))}{if(!(n instanceof Ve||n instanceof vs))throw new q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(me.fromString(e,...t));return Hc(s),new Ve(n.firestore,n instanceof vs?n.converter:null,new X(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="AsyncQueue";class wl{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new yh(this,"async_queue_retry"),this._c=()=>{const s=Ci();s&&B(Il,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Ci();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ci();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Qt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Rs(e))throw e;B(Il,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,sn("INTERNAL UNHANDLED ERROR: ",bl(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Jo.createAndSchedule(this,e,t,s,(o=>this.hc(o)));return this.tc.push(r),r}uc(){this.nc&&Y(47125,{Pc:bl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function bl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Rh extends Xo{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new wl,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wl(e),this._firestoreClient=void 0,await e}}}function kA(n,e){const t=typeof n=="object"?n:Kl(),s=typeof n=="string"?n:br,r=Io(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const o=oy("firestore");o&&PA(r,...o)}return r}function RA(n){if(n._terminated)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||CA(n),n._firestoreClient}function CA(n){const e=n._freezeSettings(),t=(function(r,o,a,l){return new ww(r,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Sh(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new IA(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(r){const o=r?._online.build();return{_offline:r?._offline.build(o),_online:o}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ke(ot.fromBase64String(e))}catch(t){throw new q(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ke(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ke._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ks(e,Ke._jsonSchema))return Ke.fromBase64String(e.bytes)}}Ke._jsonSchemaVersion="firestore/bytes/1.0",Ke._jsonSchema={type:_e("string",Ke._jsonSchemaVersion),bytes:_e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ft._jsonSchemaVersion}}static fromJSON(e){if(ks(e,ft._jsonSchema))return new ft(e.latitude,e.longitude)}}ft._jsonSchemaVersion="firestore/geoPoint/1.0",ft._jsonSchema={type:_e("string",ft._jsonSchemaVersion),latitude:_e("number"),longitude:_e("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==r[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:pt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ks(e,pt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new pt(e.vectorValues);throw new q(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pt._jsonSchemaVersion="firestore/vectorValue/1.0",pt._jsonSchema={type:_e("string",pt._jsonSchemaVersion),vectorValues:_e("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=/^__.*__$/;class NA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new un(e,this.data,this.fieldMask,t,this.fieldTransforms):new Cs(e,this.data,t,this.fieldTransforms)}}function Ch(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ac:n})}}class ta{constructor(e,t,s,r,o,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ta({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Nr(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Ch(this.Ac)&&VA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class DA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Wr(e)}Cc(e,t,s,r=!1){return new ta({Ac:e,methodName:t,Dc:s,path:Ae.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function LA(n){const e=n._freezeSettings(),t=Wr(n._databaseId);return new DA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function OA(n,e,t,s,r,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,e,t,r);Lh("Data must be an object, but it was:",a,s);const l=Nh(s,a);let h,d;if(o.merge)h=new Je(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const _=[];for(const g of o.mergeFields){const S=MA(e,g,t);if(!a.contains(S))throw new q(D.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);FA(_,S)||_.push(S)}h=new Je(_),d=a.fieldTransforms.filter((g=>h.covers(g.field)))}else h=null,d=a.fieldTransforms;return new NA(new Ge(l),h,d)}class na extends ea{_toFieldTransform(e){return new Xw(e.path,new ms)}isEqual(e){return e instanceof na}}function Vh(n,e){if(Dh(n=Be(n)))return Lh("Unsupported field value:",e,n),Nh(n,e);if(n instanceof ea)return(function(s,r){if(!Ch(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(r);o&&r.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const o=[];let a=0;for(const l of s){let h=Vh(l,r.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,e)}return(function(s,r){if((s=Be(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Kw(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=de.fromDate(s);return{timestampValue:to(r.serializer,o)}}if(s instanceof de){const o=new de(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:to(r.serializer,o)}}if(s instanceof ft)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ke)return{bytesValue:cb(r.serializer,s._byteString)};if(s instanceof Ve){const o=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(o))throw r.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ph(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof pt)return(function(a,l){return{mapValue:{fields:{[Wu]:{stringValue:Gu},[Ji]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return zo(l.serializer,d)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${Lo(s)}`)})(n,e)}function Nh(n,e){const t={};return Bu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ln(n,((s,r)=>{const o=Vh(r,e.mc(s));o!=null&&(t[s]=o)})),{mapValue:{fields:t}}}function Dh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof ft||n instanceof Ke||n instanceof Ve||n instanceof ea||n instanceof pt)}function Lh(n,e,t){if(!Dh(t)||!xu(t)){const s=Lo(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function MA(n,e,t){if((e=Be(e))instanceof Zo)return e._internalPath;if(typeof e=="string")return Oh(n,e);throw Nr("Field path arguments must be of type string or ",n,!1,void 0,t)}const $A=new RegExp("[~\\*/\\[\\]]");function Oh(n,e,t){if(e.search($A)>=0)throw Nr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zo(...e.split("."))._internalPath}catch{throw Nr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Nr(n,e,t,s,r){const o=s&&!s.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${s}`),a&&(h+=` in document ${r}`),h+=")"),new q(D.INVALID_ARGUMENT,l+n+h)}function FA(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t,s,r,o){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($h("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xA extends Mh{data(){return super.data()}}function $h(n,e){return typeof e=="string"?Oh(n,e):e instanceof Zo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class tr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wn extends Mh{constructor(e,t,s,r,o,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new hr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field($h("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=wn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}wn._jsonSchemaVersion="firestore/documentSnapshot/1.0",wn._jsonSchema={type:_e("string",wn._jsonSchemaVersion),bundleSource:_e("string","DocumentSnapshot"),bundleName:_e("string"),bundle:_e("string")};class hr extends wn{data(e={}){return super.data(e)}}class ls{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new tr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new hr(this._firestore,this._userDataWriter,s.key,s,new tr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((l=>{const h=new hr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new tr(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new hr(r._firestore,r._userDataWriter,l.doc.key,l.doc,new tr(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,_=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),_=a.indexOf(l.doc.key)),{type:BA(l.type),doc:h,oldIndex:d,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ls._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Do.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),r.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function BA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:n})}}ls._jsonSchemaVersion="firestore/querySnapshot/1.0",ls._jsonSchema={type:_e("string",ls._jsonSchemaVersion),bundleSource:_e("string","QuerySnapshot"),bundleName:_e("string"),bundle:_e("string")};function jA(n,e,t){n=Qi(n,Ve);const s=Qi(n.firestore,Rh),r=UA(n.converter,e);return HA(s,[OA(LA(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,dt.none())])}function HA(n,e){return(function(s,r){const o=new Qt;return s.asyncQueue.enqueueAndForget((async()=>gA(await AA(s),r,o))),o.promise})(RA(n),e)}function qA(){return new na("serverTimestamp")}(function(e,t=!0){(function(r){Dn=r})(Vn),bn(new Zt("firestore",((s,{instanceIdentifier:r,options:o})=>{const a=s.getProvider("app").getImmediate(),l=new Rh(new nw(s.getProvider("auth-internal")),new iw(a,s.getProvider("app-check-internal")),(function(d,_){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new q(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ar(d.options.projectId,_)})(a,r),a);return o={useFetchStreams:t,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Ot(xc,Uc,e),Ot(xc,Uc,"esm2020")})();const zA={apiKey:"AIzaSyDqC99_wmhd4u_4eEayyfDSAxQrR_fnQYI",authDomain:"ystc-in.firebaseapp.com",projectId:"ystc-in",storageBucket:"ystc-in.firebasestorage.app",messagingSenderId:"597930105892",appId:"1:597930105892:web:6d2c66707377cffccb8cb1"},Fh=Gl(zA),gn=YI(Fh),WA=kA(Fh),GA={class:"login-wrapper"},KA={key:0},QA={key:1},JA=["disabled"],XA={class:"form-switch"},YA={key:0,class:"reset-link"},ZA={key:1,class:"error-msg"},eP={__name:"FirebaseLogin",setup(n){const e=K(""),t=K(""),s=K(""),r=K(!1),o=K(!0),a=K(null);je(()=>{Tu(gn,g=>{a.value=g,g&&window.location.pathname==="/my-account"&&(window.location.href="/trading-with-price-action-volume")})});const l=async()=>{s.value="",r.value=!0;try{if(o.value){const S=(await FT(gn,e.value,t.value)).user;window.posthog&&(window.posthog.identify(S.uid,{email:S.email,login_method:"firebase"}),window.posthog.capture("user_logged_in",{method:"firebase"}))}else{const S=(await $T(gn,e.value,t.value)).user;await jA(SA(WA,"users",S.uid),{email:e.value,createdAt:qA()}),window.posthog&&(window.posthog.identify(S.uid,{email:S.email,login_method:"firebase"}),window.posthog.capture("user_registered",{method:"firebase"}))}}catch(g){s.value=g.message.replace("Firebase: ","")}finally{r.value=!1}},h=()=>{o.value=!o.value,s.value=""},d=async()=>{if(s.value="",!e.value){s.value="Enter your email to reset password";return}try{await MT(gn,e.value),s.value='Password reset email sent. Check spam "noreply@ystc-in.firebaseapp.com"'}catch(g){s.value=g.message.replace("Firebase: ","")}},_=async()=>{window.posthog&&window.posthog.capture("user_logged_out"),await BT(gn),a.value=null};return(g,S)=>(y(),k("div",GA,[a.value?(y(),k("div",KA,[P("p",null,"👋 Welcome, "+G(a.value.email),1),P("button",{onClick:_},"Log out")])):(y(),k("div",QA,[P("form",{onSubmit:ts(l,["prevent"])},[P("h2",null,G(o.value?"Log In":"Register"),1),S[2]||(S[2]=P("p",null,"Please log in / register (FREE) to access site.",-1)),Di(P("input",{"onUpdate:modelValue":S[0]||(S[0]=L=>e.value=L),type:"email",placeholder:"Email",required:""},null,512),[[oc,e.value]]),Di(P("input",{"onUpdate:modelValue":S[1]||(S[1]=L=>t.value=L),type:"password",placeholder:"Password",required:""},null,512),[[oc,t.value]]),P("button",{type:"submit",disabled:r.value},G(r.value?"Please wait...":o.value?"Log In":"Register"),9,JA),P("p",XA,[P("a",{href:"#",onClick:ts(h,["prevent"])},G(o.value?"Don't have an account? Register":"Already have an account? Log In"),1)]),o.value?(y(),k("p",YA,[P("a",{href:"#",onClick:ts(d,["prevent"])},"Forgot password?")])):M("",!0),s.value?(y(),k("p",ZA,G(s.value),1)):M("",!0)],32)]))]))}},xh=U(eP,[["__scopeId","data-v-5a85d9c8"]]),tP={key:0,class:"loading"},nP={key:1},sP={key:2,class:"lock-screen"},rP={__name:"ProtectedPage",setup(n){const e=K(null),t=K(!0);return je(()=>{Tu(gn,s=>{e.value=s,t.value=!1})}),(s,r)=>t.value?(y(),k("div",tP,"Loading...")):e.value?(y(),k("div",nP,[C(s.$slots,"default",{},void 0,!0)])):(y(),k("div",sP,[r[0]||(r[0]=P("h2",null,"🔐 Content is for registered users only.",-1)),r[1]||(r[1]=P("p",null,"Please log in or register (FREE) to access this article.",-1)),x(xh)]))}},iP=U(rP,[["__scopeId","data-v-c301e23a"]]),oP={key:0,class:"gc-loading"},aP={key:1,class:"gc-fallback"},cP={__name:"GraphComment",setup(n){const e=K(null),t=K(!1),s=K(!1),r=Es();function o(){e.value&&(e.value.innerHTML="");const a={graphcommentId:"ystc",behaviour:{uid:window.location.pathname}};if(typeof window.__semio__gc_graphlogin=="function")window.__semio__gc_graphlogin(a),t.value=!0;else if(window.__semio__params=a,window.__semio__onload=()=>{typeof window.__semio__gc_graphlogin=="function"&&(window.__semio__gc_graphlogin(a),t.value=!0)},!document.getElementById("graphcomment-script")){const l=document.createElement("script");l.id="graphcomment-script",l.async=!0,l.defer=!0,l.onload=window.__semio__onload,l.src="https://integration.graphcomment.com/gc_graphlogin.js?"+Date.now(),document.body.appendChild(l)}setTimeout(()=>{document.querySelector("#graphcomment iframe, #graphcomment .gc__header")||(s.value=!0)},5e3)}return je(o),it(()=>r.path,()=>{t.value=!1,s.value=!1,o()}),(a,l)=>(y(),k("div",null,[!t.value&&!s.value?(y(),k("div",oP," Loading comments... ")):M("",!0),s.value?(y(),k("div",aP," Comments couldn't load. You may be using an ad blocker or tracker blocker. ")):M("",!0),Di(P("div",{id:"graphcomment",ref_key:"gcContainer",ref:e},null,512),[[Dd,t.value]])]))}},lP=U(cP,[["__scopeId","data-v-424176d3"]]),fP={extends:Ml,Layout:Xv,enhanceApp({app:n,router:e,siteData:t}){n.component("FirebaseLogin",xh),n.component("ProtectedPage",iP),n.component("GraphComment",lP)}};if(typeof window<"u"){const n=navigator.userAgent.toLowerCase();(n.includes("chrome")||n.includes("firefox")||n.includes("safari"))&&document.documentElement.classList.add("rainbow")}export{fP as R,hP as V,Ym as c,ct as i,ee as u};
