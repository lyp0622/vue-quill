import{f as u,b as f,g as p,_ as m}from"../app.cc4bae79.js";const h=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),g=u({props:{container:{type:String,default:"body"},pattern:{type:String,required:!0},replacement:{type:String,required:!0},prefix:{type:String,default:""},suffix:{type:String,default:""}},setup:e=>{const r=(s,t,a)=>{t=new RegExp(h(t),"g"),document.querySelectorAll(s).forEach(i=>{i.innerHTML=i.innerHTML.replace(t,a)})};let n;f(()=>{p(()=>e.replacement,s=>{if(e.replacement&&e.replacement!==""){const t=n||e.pattern,a=e.prefix+s+e.suffix;r(e.container,t,a),n=a}},{immediate:!0})})}});function d(e,r,n,s,t,a){return null}var S=m(g,[["render",d]]);const o=30,_=async(e,r)=>l("latestVersion")?l("latestVersion"):await fetch(`https://api.github.com/repos/${e}/${r}/releases/latest`).then(n=>n.json()).then(n=>{var s;if(n.tag_name){const t=(s=n.tag_name.match(/(\d+\.\d+)[\-\.\da-zA-Z]+/)[0])!=null?s:"";return t!==""&&c("latestVersion",t,o),t}else return fetch(`https://api.github.com/repos/${e}/${r}/tags`).then(t=>t.json()).then(t=>{var a;if(t.length){const i=(a=t[0].name.match(/(\d+\.\d+)[\-\.\da-zA-Z]+/)[0])!=null?a:"";return i!==""&&c("latestVersion",i,o),i}return""})}),$=async(e,r)=>l("latestRelease")?l("latestRelease"):await fetch(`https://api.github.com/repos/${e}/${r}/releases/latest`).then(n=>n.json()).then(n=>{if(n.prerelease===!1){const s="latest";return c("latestRelease",s,o),s}else return fetch(`https://api.github.com/repos/${e}/${r}/tags`).then(s=>s.json()).then(s=>{var t;if(s.length){const a=(t=s[0].name.match(/(?<=\.\d-)[^.]+/)[0])!=null?t:"";return a!==""&&c("latestRelease",a,o),a}return""})});function c(e,r,n){const s=new Date,t={value:r,expiry:s.getTime()+n*1e3};sessionStorage.setItem(e,JSON.stringify(t))}function l(e){const r=sessionStorage.getItem(e);if(!r)return null;const n=JSON.parse(r);return new Date().getTime()>n.expiry?(sessionStorage.removeItem(e),null):n.value}export{S as T,$ as a,_ as g};