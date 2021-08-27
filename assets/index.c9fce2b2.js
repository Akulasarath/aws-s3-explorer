import{r as e,w as t,o,a as n,c as l,b as i,d as a,v as s,u as r,e as c,D as d,f as p,p as u,g,t as f,h,i as b,j as y}from"./vendor.77d2fa82.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const m=()=>{};m.toString=()=>`[DEBUG ${(new Date).toString()}]`,console.log.bind(console,"%s",m);const w=JSON.parse(localStorage.getItem("s3console")||"{}"),v=e(Object.assign({delimiter:"/",currentBucket:null,prefix:"/",view_prefix:"/",applicationClientId:null,applicationLoginUrl:null,showSettings:!0},w));t(v,(()=>{localStorage.setItem("s3console",JSON.stringify(v))}));var S=new class{decode(e){try{return e&&JSON.parse(function(e){const t=(e=e.replace(/-/g,"+").replace(/_/g,"/")).length%4;if(t){if(1===t)throw new Error("InvalidLengthError: Input base64url string is the wrong length to determine padding");e+=new Array(5-t).join("=")}return atob(e)}(e.split(".")[1]))}catch(t){return null}}};const k={class:"modal-dialog"},C={class:"modal-content"},_={name:"settings_form"},x=i("div",{class:"modal-header"},[i("h4",{class:"modal-title"},"S3 Explorer: Settings")],-1),A={class:"modal-body"},I={class:"col-md-18"},U=i("h2",null,"Welcome to the AWS S3 Explorer",-1),j={class:"",style:{width:"100%"}},L=i("div",null," Specify the Cognito User Pool login url and clientId ",-1),O={style:{display:"flex","flex-direction":"row","justify-content":"space-around"}},$=["disabled"],E=[i("i",{class:"fas fa-sign-in-alt"},null,-1),p(" Login")],D=c("<hr><div><h4>Setup Cognito SSO Login</h4> Or setup up a cognito pool and configure the explorer. <ol><li> Cognito User Pool: <ul><li>Create a User Pool in any region (Not an identity pool)</li><li>Since we will use SSO, most of the configuration is irrelevant</li><li><strong>General settings &gt; App clients</strong> &gt; Add the S3 Console as an app</li><li><strong>Federation &gt; Identity providers</strong> &gt; Add your SSO provider of choice to the OAuth settings</li><li><strong>App Integration &gt; App client settings</strong> &gt; Enable identity provider just created</li><li>Specify <strong>https://rhosys.github.io/aws-s3-explorer/</strong> as the callback and logout urls</li><li>Specify <strong>Authorization code grant</strong> flow and enable All <strong>Allowed OAuth Scopes</strong></li><li><strong>App Integration &gt; Domain name</strong> &gt; Configure the setup for a domain (either Cognito or your own custom one.</li></ul></li><li>Return here and enter the Cognito user pool login URL and ID above.</li></ol></div>",2),N={setup(t){e({region:null});const c=async e=>await crypto.subtle.digest("SHA-256",(new TextEncoder).encode(e)),p=async()=>{const e=await c(crypto.getRandomValues(new Uint32Array(4)).toString());return Array.from(new Uint8Array(e)).map((e=>e.toString(16).padStart(2,"0"))).join("")},u=new URL(location).searchParams,g=async()=>{if(console.log("****",S.decode(v.tokens.access_token)),v.tokens&&d.fromSeconds(S.decode(v.tokens.access_token).exp)>d.utc())return void(v.showSettings=!1);if(null!==u.get("code")){u.get("state");const e=localStorage.getItem("codeVerifier");if(null===e)throw new Error("Unexpected code");const t=Object.entries({grant_type:"authorization_code",client_id:v.applicationClientId,code:u.get("code"),code_verifier:e,redirect_uri:`${window.location.origin}${window.location.pathname}`}).map((([e,t])=>`${e}=${t}`)).join("&");console.log("****",t);const o=await fetch(`${v.applicationLoginUrl}/oauth2/token`,{method:"POST",headers:new Headers({"content-type":"application/x-www-form-urlencoded"}),body:t});if(!o.ok)throw new Error(await o.json());const n=await o.json();return void(v.tokens=n)}if(!v.applicationLoginUrl||!v.applicationClientId)return;try{new URL(v.applicationLoginUrl)}catch(i){return}const e=await p(),t=await p();localStorage.setItem("codeVerifier",t);const o=(n=await c(t),btoa(String.fromCharCode.apply(null,new Uint8Array(n))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""));var n;const l=`${window.location.origin}${window.location.pathname}`;window.location=`${v.applicationLoginUrl}/oauth2/authorize?response_type=code&client_id=${v.applicationClientId}&state=${e}&code_challenge_method=S256&code_challenge=${o}&redirect_uri=${l}`};return o((()=>g())),(e,t)=>(n(),l("div",null,[i("div",k,[i("div",C,[i("form",_,[i("div",null,[x,i("div",A,[i("div",I,[U,i("div",j,[L,i("div",O,[a(i("input",{name:"Login Domain URL","onUpdate:modelValue":t[0]||(t[0]=e=>r(v).applicationLoginUrl=e),type:"text",class:"form-control",placeholder:"https://domain.auth.eu-west-1.amazoncognito.com",required:"true",style:{"margin-right":"1rem"}},null,512),[[s,r(v).applicationLoginUrl]]),a(i("input",{name:"Application Client ID","onUpdate:modelValue":t[1]||(t[1]=e=>r(v).applicationClientId=e),type:"text",class:"form-control",placeholder:"4altof0dlefqqicdifb8tv4mjp",required:"true",style:{"margin-right":"1rem"}},null,512),[[s,r(v).applicationClientId]]),i("button",{type:"submit",class:"btn btn-primary",disabled:!r(v).applicationLoginUrl||!r(v).applicationClientId,onClick:g},E,8,$)]),D])])])])])])])]))}};u("data-v-225a52de");const R={class:""},z={class:"col-12"},P={class:"panel panel-primary dropzone"},V={class:"panel-heading clearfix"},q={class:"btn-group pull-left"},W=i("div",{class:"title pull-left"},"AWS S3 Explorer",-1),J={key:0,class:"pull-right"},T={id:"breadcrumb",class:"breadcrumb pull-right"},B={class:"active"},F={href:"#"},G={id:"navbuttons",class:"pull-right"},H={class:"btn-group"},M=i("span",{id:"bucket-plus",style:{cursor:"pointer"},class:"btn fa fa-folder-plus fa-2x",title:"New folder"},null,-1),K=["disabled"],Q={key:0,class:"btn-group"},X={id:"badgecount",style:{cursor:"default"},class:"btn badge pull-right",title:"Object count"},Y={key:1,class:"btn-group"},Z={id:"badgecount",style:{cursor:"default"},class:"btn badge pull-right",title:"Selected object count"},ee=i("div",{class:"panel-body"},[i("table",{class:"table table-bordered table-hover table-striped",style:{width:"100%"},id:"s3objects-table"},[i("thead",null,[i("tr",null,[i("th",{class:"text-center"},"Select"),i("th",null,"Object"),i("th",null,"Folder"),i("th",null,"Last Modified"),i("th",null,"Timestamp"),i("th",null,"Class"),i("th",null,"Size")])]),i("tbody",{id:"s3objects-tbody"})])],-1),te={class:"col-12"};g();const oe={props:{msg:String},setup(t){const a=e({objectCount:0,keys_selected:[]});o((()=>{console.log("****"),v.user}));return(e,t)=>(n(),l("div",R,[i("div",z,[i("div",P,[i("div",V,[i("div",q,[W,r(v).bucket?(n(),l("div",J,[i("ul",T,[i("li",B,[i("a",F,f(r(v).bucket),1)])])])):h("",!0)]),i("div",G,[i("div",null,[i("div",H,[M,i("span",{id:"bucket-upload",style:{cursor:"pointer"},class:"btn fa fa-cloud-upload-alt fa-2x",onClick:t[0]||(t[0]=e=>{console.log("**** upload")}),title:"Upload files"}),i("span",{id:"bucket-trash",style:{cursor:"pointer"},class:"btn fa fa-trash-alt fa-2x",title:"Delete {{state.keys_selected.length}} selected object(s)",disabled:!r(a).keys_selected.length,onClick:t[1]||(t[1]=t=>e.trash())},null,8,K),i("span",{id:"bucket-info",style:{cursor:"pointer"},class:"btn fa fa-info-circle fa-2x",onClick:t[2]||(t[2]=t=>e.openInfo()),title:"Info"}),i("span",{id:"bucket-loader",style:{cursor:"pointer"},class:"btn fa fa-sync fa-2x",onClick:t[3]||(t[3]=e=>{console.log("*** Refresh")}),title:"Refresh"}),i("span",{id:"bucket-settings",style:{cursor:"pointer"},class:"btn fa fa-cog fa-2x",onClick:t[4]||(t[4]=e=>{v.showSettings=!0}),title:"Settings"})]),0===r(a).keys_selected.length?(n(),l("div",Q,[i("span",X,f(r(a).objectCount),1)])):h("",!0),r(a).keys_selected.length>0?(n(),l("div",Y,[i("span",Z,f(r(a).keys_selected.length)+" of "+f(r(a).objectCount),1)])):h("",!0)])])]),ee])]),i("div",te,[r(v).showSettings?(n(),b(N,{key:0})):h("",!0)])]))},__scopeId:"data-v-225a52de"};y({setup:e=>(e,t)=>(n(),b(oe))}).mount("#app"),AWS.config.update({region:""}),AWS.config.update({signatureVersion:"v4"});