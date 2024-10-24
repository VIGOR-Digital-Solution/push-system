"use strict";(()=>{var e={};e.id=984,e.ids=[984],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6697:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>v,originalPathname:()=>w,patchFetch:()=>g,requestAsyncStorage:()=>p,routeModule:()=>h,serverHooks:()=>f,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>b});var n={};r.r(n),r.d(n,{POST:()=>l});var a=r(5419),i=r(9108),s=r(9678),o=r(4075),c=r(8836),u=r.n(c);async function l(e){try{let t=await e.json(),r=t?.labels;if(console.log({labels:r}),!r)throw Error("Labels data not found");let n=new(u());console.log("Create ZebraBrowserPrint Instance"),console.log({browserPrint:n});let a=await n.getDefaultPrinter();console.log("Select default printer"),console.log({defaultPrinter:a}),n.setPrinter(a);let i=await n.checkPrinterStatus();if(console.log("Check printer status"),console.log({printerStatus:i}),i.isReadyToPrint){let e=[];await Promise.all(r.map(async t=>{let r=new Date().toLocaleString(),a=t.partNo,i=t.machineId,s=t.location,o=t.ref,c=`
          ^XA


          ^FX Timestamp
          ^BY1
          ^FO250,40^BCN,60,N^FD${r}^FS
          ^FO1000,60,1^A1,25^FD${r}^FS
          
          ^FX Part No
          ^BY3
          ^FO250,120^A1,30^FDPart No:^FS
          ^FO400,170^BCN,100,Y^FD${a}^FS
          
          ^FX Machine Name
          ^FO250,340^A1,30^FDMachine Name: ${i}^FS
          
          ^FX PU Display
          ^FO250,400^A1,30^FDPU Display: ${s}^FS
          
          
          ^XZ
                    `;await n.print(c),e.push({ref:o,status:"printed"})})),e&&await o.Z.$transaction(e.map(e=>o.Z.warning.upsert({where:{ref:e.ref},update:{status:"printed"},create:{ref:e.ref,status:e.status}})))}else throw console.log("Error/s",i.errors),Error("Printer is not ready");return Response.json("ok",{status:200})}catch(e){if(e?.message==="TypeError: fetch failed")return Response.json({message:"Please activate Zebra Browser Print app"},{status:500});return Response.json({message:e.message},{status:500})}}let h=new a.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/prisma/print/route",pathname:"/api/prisma/print",filename:"route",bundlePath:"app/api/prisma/print/route"},resolvedPagePath:"C:\\Users\\UserAdmin\\Documents\\GitHub\\nation-gate-frontend\\src\\app\\api\\prisma\\print\\route.ts",nextConfigOutput:"",userland:n}),{requestAsyncStorage:p,staticGenerationAsyncStorage:d,serverHooks:f,headerHooks:v,staticGenerationBailout:b}=h,w="/api/prisma/print/route";function g(){return(0,s.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:d})}},5419:(e,t,r)=>{e.exports=r(517)},9415:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.API_URL=void 0,t.API_URL="http://localhost:9100/"},8836:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function o(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,o)}c((n=n.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){var r,n,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(r)throw TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(9415);t.default=function(){var e=this;this.device={},this.getAvailablePrinters=function(){return n(e,void 0,void 0,function(){var e,t,r;return a(this,function(n){switch(n.label){case 0:e={method:"GET",headers:{"Content-Type":"text/plain;charset=UTF-8"}},t=i.API_URL+"available",n.label=1;case 1:return n.trys.push([1,4,,5]),[4,fetch(t,e)];case 2:return[4,n.sent().json()];case 3:if((r=n.sent())&&void 0!==r&&r.printer&&void 0!==r.printer&&r.printer.length>0)return[2,r.printer];return[2,Error("No printers available")];case 4:throw Error(n.sent());case 5:return[2]}})})},this.getDefaultPrinter=function(){return n(e,void 0,void 0,function(){var e,t,r,n,s,o,c,u,l;return a(this,function(a){switch(a.label){case 0:e={method:"GET",headers:{"Content-Type":"text/plain;charset=UTF-8"}},t=i.API_URL+"default",a.label=1;case 1:return a.trys.push([1,4,,5]),[4,fetch(t,e)];case 2:return[4,a.sent().text()];case 3:if((r=a.sent())&&void 0!==r&&"object"!=typeof r&&7===r.split("\n	").length)return n=r.split("\n	"),s=this.cleanUpString(n[1]),o=this.cleanUpString(n[2]),c=this.cleanUpString(n[3]),u=this.cleanUpString(n[4]),l=this.cleanUpString(n[5]),[2,{connection:c,deviceType:o,manufacturer:this.cleanUpString(n[6]),name:s,provider:l,uid:u,version:0}];throw Error("There's no default printer");case 4:throw Error(a.sent());case 5:return[2]}})})},this.setPrinter=function(t){e.device=t},this.getPrinter=function(){return e.device},this.cleanUpString=function(e){return e.split(":")[1].trim()},this.checkPrinterStatus=function(){return n(e,void 0,void 0,function(){var e,t,r,n,i,s,o;return a(this,function(a){switch(a.label){case 0:return[4,this.write("~HQES")];case 1:return a.sent(),[4,this.read()];case 2:switch(e=a.sent(),t=[],r=!1,n=e.charAt(70),i=e.charAt(88),s=e.charAt(87),o=e.charAt(84),r="0"===n,i){case"1":t.push("Paper out");break;case"2":t.push("Ribbon Out");break;case"4":t.push("Media Door Open");break;case"8":t.push("Cutter Fault")}switch(s){case"1":t.push("Printhead Overheating");break;case"2":t.push("Motor Overheating");break;case"4":t.push("Printhead Fault");break;case"8":t.push("Incorrect Printhead")}return"1"===o&&t.push("Printer Paused"),r||0!==t.length||t.push("Error: Unknown Error"),[2,{isReadyToPrint:r,errors:t.join()}]}})})},this.write=function(t){return n(e,void 0,void 0,function(){var e,r;return a(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=i.API_URL+"write",r={method:"POST",headers:{"Content-Type":"text/plain;charset=UTF-8"},body:JSON.stringify({device:this.device,data:t})},[4,fetch(e,r)];case 1:return n.sent(),[3,3];case 2:throw Error(n.sent());case 3:return[2]}})})},this.read=function(){return n(e,void 0,void 0,function(){var e,t;return a(this,function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),e=i.API_URL+"read",t={method:"POST",headers:{"Content-Type":"text/plain;charset=UTF-8"},body:JSON.stringify({device:this.device})},[4,fetch(e,t)];case 1:return[4,r.sent().text()];case 2:return[2,r.sent()];case 3:throw Error(r.sent());case 4:return[2]}})})},this.print=function(t){return n(e,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.write(t)];case 1:return e.sent(),[3,3];case 2:throw Error(e.sent());case 3:return[2]}})})}}},4075:(e,t,r)=>{r.d(t,{Z:()=>a});let n=require("@prisma/client"),a=globalThis.prismaGlobal??new n.PrismaClient}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638],()=>r(6697));module.exports=n})();