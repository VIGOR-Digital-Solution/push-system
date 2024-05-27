(()=>{var e={};e.id=165,e.ids=[165],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},4556:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>l,pages:()=>c,routeModule:()=>f,tree:()=>u});var s=r(482),o=r(9108),n=r(2563),i=r.n(n),a=r(8300),d={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>a[e]);r.d(t,d);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,8905)),"C:\\Users\\UserAdmin\\Documents\\GitHub\\nation-gate-frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],c=[],l="/_not-found",p={require:r,loadChunk:()=>Promise.resolve()},f=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/_not-found",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},1587:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},6529:(e,t,r)=>{Promise.resolve().then(r.bind(r,6794)),Promise.resolve().then(r.bind(r,3553)),Promise.resolve().then(r.bind(r,9733))},6794:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(5344),o=r(1271),n=r(3608),i=r(3729);function a(){return n.Z.get("/api/prisma/settings")}function d({children:e}){let{data:t}=(0,o.a)({queryKey:["settings"],queryFn:a}),r=t?.data.find(e=>"font_size"===e.refTitle)?.value;return console.log("fontSize",r),(0,i.useEffect)(()=>{document.documentElement.style.setProperty("--global-font-size",`${r}px`)},[r]),s.jsx("div",{children:e})}},3553:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(5344),o=r(3952),n=r(6274);let i=new o.S;function a({children:e}){return s.jsx(n.aH,{client:i,children:e})}},9733:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Toaster:()=>v});var s=r(5344),o=r(3729),n=r(7953),i=r(8720),a=r(4513),d=r(1453);let u=n.zt,c=o.forwardRef(({className:e,...t},r)=>s.jsx(n.l_,{ref:r,className:(0,d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));c.displayName=n.l_.displayName;let l=(0,i.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),p=o.forwardRef(({className:e,variant:t,...r},o)=>s.jsx(n.fC,{ref:o,className:(0,d.cn)(l({variant:t}),e),...r}));p.displayName=n.fC.displayName,o.forwardRef(({className:e,...t},r)=>s.jsx(n.aU,{ref:r,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=n.aU.displayName;let f=o.forwardRef(({className:e,...t},r)=>s.jsx(n.x8,{ref:r,className:(0,d.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:s.jsx(a.Z,{className:"h-4 w-4"})}));f.displayName=n.x8.displayName;let m=o.forwardRef(({className:e,...t},r)=>s.jsx(n.Dx,{ref:r,className:(0,d.cn)("text-sm font-semibold",e),...t}));m.displayName=n.Dx.displayName;let x=o.forwardRef(({className:e,...t},r)=>s.jsx(n.dk,{ref:r,className:(0,d.cn)("text-sm opacity-90",e),...t}));x.displayName=n.dk.displayName;var g=r(9769);function v(){let{toasts:e}=(0,g.pm)();return(0,s.jsxs)(u,{children:[e.map(function({id:e,title:t,description:r,action:o,...n}){return(0,s.jsxs)(p,{...n,children:[(0,s.jsxs)("div",{className:"grid gap-1",children:[t&&s.jsx(m,{children:t}),r&&s.jsx(x,{children:r})]}),o,s.jsx(f,{})]},e)}),s.jsx(c,{})]})}},9769:(e,t,r)=>{"use strict";r.d(t,{Am:()=>l,pm:()=>p});var s=r(3729);let o=0,n=new Map,i=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},a=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],u={toasts:[]};function c(e){u=a(u,e),d.forEach(e=>{e(u)})}function l({...e}){let t=(o=(o+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>c({type:"DISMISS_TOAST",toastId:t});return c({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function p(){let[e,t]=s.useState(u);return s.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:l,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},1453:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var s=r(6815),o=r(9377);function n(...e){return(0,o.m6)((0,s.W)(e))}},8905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P,metadata:()=>_});var s=r(5036),o=r(7279),n=r.n(o);r(5023);var i=r(990),a=r(1774),d=r(6843);let u=(0,d.createProxy)(String.raw`C:\Users\UserAdmin\Documents\GitHub\nation-gate-frontend\src\components\query-client-app-provider.tsx`),{__esModule:c,$$typeof:l}=u,p=u.default,f=(0,d.createProxy)(String.raw`C:\Users\UserAdmin\Documents\GitHub\nation-gate-frontend\src\components\ui\toaster.tsx`),{__esModule:m,$$typeof:x}=f;f.default;let g=(0,d.createProxy)(String.raw`C:\Users\UserAdmin\Documents\GitHub\nation-gate-frontend\src\components\ui\toaster.tsx#Toaster`),v=(0,d.createProxy)(String.raw`C:\Users\UserAdmin\Documents\GitHub\nation-gate-frontend\src\components\global-font-size-provider.tsx`),{__esModule:h,$$typeof:y}=v,b=v.default,_={title:"Push System",description:"Push System Application",manifest:"/manifest.json"};function P({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:function(...e){return(0,a.m6)((0,i.W)(e))}("min-h-screen bg-background font-sans antialiased",n().variable),children:[s.jsx(p,{children:(0,s.jsxs)(b,{children:[e," "]})}),s.jsx(g,{})]})})}},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,588],()=>r(4556));module.exports=s})();