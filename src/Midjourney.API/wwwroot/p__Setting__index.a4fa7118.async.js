"use strict";(self.webpackChunkmidjourney_proxy_admin=self.webpackChunkmidjourney_proxy_admin||[]).push([[971],{23391:function(le,B,a){a.r(B),a.d(B,{default:function(){return ae}});var G=a(15009),J=a.n(G),U=a(99289),z=a.n(U),W=a(5574),c=a.n(W),g=a(67294),K=a(74981),oe=a(90252),ge=a(22777),e=a(85893),Q=function(S){var M=S.value,l=M===void 0?{}:M,t=S.onChange,L=g.useState(JSON.stringify(l,null,2)),x=c()(L,2),f=x[0],o=x[1],C=g.useState(!0),I=c()(C,2),O=I[0],v=I[1];(0,g.useEffect)(function(){var D=JSON.stringify(l),h=JSON.stringify(JSON.parse(f));D!==h&&o(JSON.stringify(l,null,2))},[l]);var j=function(h){o(h);try{var b=JSON.parse(h);v(!0),t&&t(b)}catch(R){v(!1)}};return(0,e.jsxs)("div",{style:{width:"100%"},children:[(0,e.jsx)(K.ZP,{mode:"json",theme:"textmate",value:f,onChange:j,name:"json-editor",editorProps:{$blockScrolling:!0},height:"auto",maxLines:1/0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2,useWorker:!1},style:{width:"100%",minHeight:"80px"},fontSize:14,lineHeight:19,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0}),!O&&(0,e.jsx)("div",{style:{color:"red",marginTop:"8px"},children:"JSON \u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u8F93\u5165\uFF01"})]})},d=Q,F=a(66927),X=a(60219),Y=a(90930),k=a(80854),s=a(53025),m=a(2453),w=a(74330),N=a(42075),q=a(38437),_=a(83062),u=a(55102),A=a(14726),ee=a(71230),H=a(15746),$=a(4393),y=a(72269),r=a(85886),P=a(37804),te=function(){var S=s.Z.useForm(),M=c()(S,1),l=M[0],t=(0,k.useIntl)(),L=(0,g.useState)(!1),x=c()(L,2),f=x[0],o=x[1],C=function(){o(!0),(0,F.iE)().then(function(i){o(!1),i.success&&l.setFieldsValue(i.data)})};(0,g.useEffect)(function(){C()},[]);var I=function(){l.validateFields().then(function(i){o(!0),(0,F.rF)(i).then(function(Z){o(!1),Z.success?(m.ZP.success(t.formatMessage({id:"pages.setting.saveSuccess"})),C()):m.ZP.error(Z.message||t.formatMessage({id:"pages.setting.error"}))})}).catch(function(){m.ZP.error(t.formatMessage({id:"pages.setting.error"}))})},O=(0,g.useState)(""),v=c()(O,2),j=v[0],D=v[1],h=(0,g.useState)(""),b=c()(h,2),R=b[0],ne=b[1],ie=function(){var p=z()(J()().mark(function i(Z,E){var V,T;return J()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),V={Host:Z,ApiSecret:E},n.next=5,(0,F.gU)(V);case 5:T=n.sent,T.success?m.ZP.success(t.formatMessage({id:"pages.setting.migrateSuccess"})):m.ZP.error(T.message),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),m.ZP.error(n.t0);case 12:return n.prev=12,o(!1),n.finish(12);case 15:case"end":return n.stop()}},i,null,[[0,9,12,15]])}));return function(Z,E){return p.apply(this,arguments)}}(),re=function(){j?ie(j,R):m.ZP.warning(t.formatMessage({id:"pages.setting.migrateTips"}))};return(0,e.jsx)(Y._z,{children:(0,e.jsx)(s.Z,{form:l,labelAlign:"left",layout:"horizontal",labelCol:{span:6},wrapperCol:{span:18},children:(0,e.jsxs)(w.Z,{spinning:f,children:[(0,e.jsxs)(N.Z,{style:{marginBottom:"10px",display:"flex",justifyContent:"space-between"},children:[(0,e.jsx)(q.Z,{type:"info",style:{paddingTop:"4px",paddingBottom:"4px"},description:t.formatMessage({id:"pages.setting.tips"})}),(0,e.jsxs)(N.Z,{children:[(0,e.jsx)(_.Z,{placement:"bottom",title:(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8,padding:8},children:[(0,e.jsx)(u.Z,{style:{marginBottom:8},placeholder:"Host",value:j,onChange:function(i){return D(i.target.value)}}),(0,e.jsx)(u.Z,{placeholder:"Token",value:R,onChange:function(i){return ne(i.target.value)}})]}),children:(0,e.jsx)(A.ZP,{loading:f,type:"primary",ghost:!0,onClick:re,children:t.formatMessage({id:"pages.setting.migrate"})})}),(0,e.jsx)(A.ZP,{loading:f,icon:(0,e.jsx)(X.Z,{}),type:"primary",onClick:I,children:t.formatMessage({id:"pages.setting.save"})})]})]}),(0,e.jsxs)(ee.Z,{gutter:16,children:[(0,e.jsx)(H.Z,{span:12,children:(0,e.jsxs)($.Z,{title:t.formatMessage({id:"pages.setting.accountSetting"}),bordered:!1,children:[(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.enableSwagger"}),name:"enableSwagger",extra:l.getFieldValue("enableSwagger")?(0,e.jsx)("a",{href:"/swagger",target:"_blank",rel:"noreferrer",children:t.formatMessage({id:"pages.setting.swaggerLink"})}):"",children:(0,e.jsx)(y.Z,{})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.mongoDefaultConnectionString"}),name:"mongoDefaultConnectionString",children:(0,e.jsx)(u.Z,{placeholder:"mongodb://mongoadmin:***admin@192.168.x.x"})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.mongoDefaultDatabase"}),name:"mongoDefaultDatabase",children:(0,e.jsx)(u.Z,{placeholder:"mj"})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.accountChooseRule"}),name:"accountChooseRule",children:(0,e.jsxs)(r.Z,{allowClear:!0,children:[(0,e.jsx)(r.Z.Option,{value:"BestWaitIdle",children:"BestWaitIdle"}),(0,e.jsx)(r.Z.Option,{value:"Random",children:"Random"}),(0,e.jsx)(r.Z.Option,{value:"Weight",children:"Weight"}),(0,e.jsx)(r.Z.Option,{value:"Polling",children:"Polling"})]})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.discordConfig"}),name:"ngDiscord",children:(0,e.jsx)(d,{})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.proxyConfig"}),name:"proxy",children:(0,e.jsx)(d,{})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.translate"}),name:"translateWay",children:(0,e.jsxs)(r.Z,{allowClear:!0,children:[(0,e.jsx)(r.Z.Option,{value:"NULL",children:"NULL"}),(0,e.jsx)(r.Z.Option,{value:"BAIDU",children:"BAIDU"}),(0,e.jsx)(r.Z.Option,{value:"GPT",children:"GPT"})]})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.baiduTranslate"}),name:"baiduTranslate",children:(0,e.jsx)(d,{})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.openai"}),name:"openai",children:(0,e.jsx)(d,{})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.smtp"}),name:"smtp",children:(0,e.jsx)(d,{})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.notifyHook"}),name:"notifyHook",children:(0,e.jsx)(u.Z,{})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.notifyPoolSize"}),name:"notifyPoolSize",children:(0,e.jsx)(P.Z,{})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.captchaServer"}),name:"captchaServer",children:(0,e.jsx)(u.Z,{})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.captchaNotifyHook"}),name:"captchaNotifyHook",children:(0,e.jsx)(u.Z,{})})]})}),(0,e.jsx)(H.Z,{span:12,children:(0,e.jsxs)($.Z,{title:t.formatMessage({id:"pages.setting.otherSetting"}),bordered:!1,children:[(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.isVerticalDomain"}),name:"isVerticalDomain",help:t.formatMessage({id:"pages.setting.isVerticalDomainTips"}),children:(0,e.jsx)(y.Z,{})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.enableRegister"}),name:"enableRegister",children:(0,e.jsx)(y.Z,{})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.registerUserDefaultDayLimit"}),name:"registerUserDefaultDayLimit",children:(0,e.jsx)(P.Z,{min:-1})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.enableGuest"}),name:"enableGuest",children:(0,e.jsx)(y.Z,{})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.guestDefaultDayLimit"}),name:"guestDefaultDayLimit",children:(0,e.jsx)(P.Z,{min:-1})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.ipRateLimiting"}),name:"ipRateLimiting",children:(0,e.jsx)(d,{})}),(0,e.jsx)(s.Z.Item,{label:t.formatMessage({id:"pages.setting.ipBlackRateLimiting"}),name:"ipBlackRateLimiting",children:(0,e.jsx)(d,{})})]})})]})]})})})},ae=te}}]);
