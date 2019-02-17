(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){var n=a(32),o=a(33),i={chat:{url:n,alt:"Icon of bot"},work:{url:a(34),alt:"Icon of briefcase"},contact:{url:o,alt:"Icon of email"},shutdown:{url:a(35),alt:"Icon of moon"}};e.exports={apps:{messenger:"Chat",work:"Work",contact:"Contact",shutdown:"Shutdown"},icons:i,resumeLink:"https://standardresume.co/heathervandervecht",contact:{content:"Let's chat! It's a pretty safe bet that you're awesome, and I'm always looking to meet awesome people. I'd love to grab a coffee, or even a beer if that's what you're into - just shoot me a message!",emailLink:"mailto:heathervandervecht@gmail.com",linkedin:"https://linkedin.com/in/heathervandervecht",github:"http://github.com/heathervv",twitter:"http://twitter.com/_heathervv",instagram:"http://instagram.com/heathervv"},work:[{title:"Telus Digital Life",url:"//telus.com/mobility/accessories",copy:"Nascent worked closely with TELUS to innovate the accessory space, and as a part of Nascent I co-lead the team that worked on this project. The main goal we worked towards with TELUS.com/accessories was how to bring the incredible in-store experience they'd already developed onto the website. It also presented some fantastic technical opportunities with features like real time inventory and a mobility-wide cart."},{title:"Bokeh",url:"//bokeh.agency",copy:"This project was an incredible experience for quite a few reasons! Not only because David and Doug are some of the nicest, funniest people I've ever met, but also because they really wanted to try and push the envelope with their website. I had the opportunity to implement physics on this project - not many things are cooler than that. I'm also incredibly proud of the case study template as I think it blends functionality and form together in a really delightful way. While the whole site is built to be editable via a CMS, I focused on really supporting flexibility from the CMS for the case studies - it can be ordered however they need, optimized to load tons of videos, with some great animations automatically scattered throughout each page."},{title:"Blunt",url:"//blunt.af",copy:"Blunt is a small agency I co-founded with Maxim (maximsiebert.com) with the desire to create unique work. The self-titled website was a lot of fun with the interesting challenge of also writing and laying out the content to describe our goals. V1 of this site had infinite scrolling!"},{title:"Let's Find Momo",url:"//letsfindmomo.com",copy:"Filament teamed up with Andrew Knapp and Momo (his dog) to create this playful website. As lead dev on this project I helped make sure the project stayed on time, solved any problems the team had, and focused on building out the gameplay functionality. Built with React and WordPress."},{title:"The Gordon Foundation",url:"//gordonfoundation.ca",copy:"Another client of Filament's. The Gordon Foundation helps empower Northern Canada and protect their waters. For this project we focused on optimization and speed, as Northern Canada's internet speeds are kind of awful. As lead dev on this project, I lead user testing and implemented/refactored features that optimized the speed of the site. I also helped the other developers with code reviews and side-by-sides, and taught the team at The Gordon Foundation how to navigate the CMS."}],dialogFlow:{token:"184dc97ff8e442a7991119cf7e45e47f"},initialResponse:"Hi there, I'm HeatherBot - the digital version of Heather! Thanks for stopping by for a chat. You can ask me anything using the \"Free type\" button below, but for now I've gone ahead and given you some quick select options to help get you started. Go ahead and ask me something!",changeInputResponse:{free:"Feel free to ask me whatever you want. \ud83d\ude80",options:"A little guidance never hurt anybody. \ud83d\udd2e"}}},,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/flag.88401b74.svg"},function(e,t,a){e.exports=a.p+"static/media/computer.4e1f9d23.svg"},function(e,t,a){e.exports=a.p+"static/media/resume.c0adf6db.svg"},,function(e,t,a){e.exports=a(61)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/bot.52116310.svg"},function(e,t,a){e.exports=a.p+"static/media/email.58912c84.svg"},function(e,t,a){e.exports=a.p+"static/media/briefcase.c06bfddd.svg"},function(e,t,a){e.exports=a.p+"static/media/moon.1d0c5f93.svg"},function(e,t,a){},function(e,t,a){},,,,,,,,,,function(e,t,a){},,,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),r=a.n(i),s=(a(29),a(30),a(2)),c=a(6),p=a(5),l=a(3),u=a(4),m=(a(31),a(1)),d=(a(36),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={time:""},a.startTime=function(){var e=new Date,t=e.getHours(),n=e.getMinutes();n=a.checkTime(n);var o="AM",i=t;i>=12&&(i=t-12,o="PM"),0===i&&(i=12),setTimeout(a.startTime,1e3),a.setState({time:"".concat(i,":").concat(n," ").concat(o)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.startTime()}},{key:"checkTime",value:function(e){return e<10?e="0"+e:e}},{key:"render",value:function(){return o.a.createElement("div",{className:"clock"},this.state.time)}}]),t}(n.PureComponent)),h=(a(37),a(19)),f=a.n(h),v=a(20),g=a.n(v),A=function(e){e.openApp;var t=e.openApps,a=e.shutDown,i=e.start,r=e.openStart,s=e.minimizedApps,c=e.updateStartbar,p=e.currentlyActiveApp,l=r?"close":"open";return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"startbar"},o.a.createElement("button",{className:"start button ".concat(r?"active":""),onClick:function(){return i(l)}},o.a.createElement("img",{src:f.a,alt:"flag"}),o.a.createElement("span",null,"Start")),o.a.createElement("div",{className:"programs"},Object.keys(m.apps).map(function(e,a){var n=m.apps[e].toLowerCase();return"shutdowncomputer"===e?null:o.a.createElement("button",{key:a,className:"\n                    startbar-button startbar-{className} button\n                    ".concat(p.indexOf(n)>-1?"active":"","\n                    ").concat(-1===t.indexOf(n)?"closed-program":""," ").concat(-1===s.indexOf(n)?"minimized-program":""),onClick:function(e){return c(n)}},o.a.createElement("img",{src:m.icons[n].url,alt:m.icons[n].alt}),o.a.createElement("span",null,m.apps[e]))})),o.a.createElement(d,null)),r&&o.a.createElement("div",{className:"start-cupboard visible"},o.a.createElement("button",{className:"shutdown",onClick:function(e){return a(e)}},o.a.createElement("img",{src:g.a,alt:"computer"}),o.a.createElement("span",null,"Shut Down..."))))};A.defaultProps={openApp:function(){},shutDown:function(){},start:function(){},updateStartbar:function(){},openApps:[],openStart:!1,minimizedApps:[],currentlyActiveApp:""};var w=A,b=a(13),y=a(22),k=a(12),E=a(10),C=a.n(E),S=(a(47),function(e){var t=e.image,a=e.title,n=e.closeApp,i=e.component,r=e.updateStartbar,s=e.notificationStyle;return o.a.createElement("div",{className:"toolbar"},o.a.createElement("div",{className:"title"},o.a.createElement("img",{src:t,alt:t})," ",o.a.createElement("span",null,a)),o.a.createElement("button",{className:"button-small ".concat(s?"disabled":""),onClick:n.bind(null,i)},"\xd7"),!s&&o.a.createElement("button",{className:"button-small minimize",onClick:function(){return r(i,!0)}},"_"))}),N=a(11),L=a.n(N),O=function(e){var t=e.type,a=e.content,n=e.user;return o.a.createElement("div",{className:"message ".concat(t)},o.a.createElement("span",{className:"username"},"<".concat(n,">")),o.a.createElement(L.a,null,a))},I=(a(60),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(p.a)(this,Object(l.a)(t).call(this))).triggerFirstMessage=function(){e.updateHistory(m.initialResponse,e.state.botName,!0),e.setState({isTyping:!1,curatedOptions:Object(b.a)({},e.state.curatedOptions,{visible:!0})})},e.handleResponse=function(t){var a=t.result;a.fulfillment.messages.map(function(e){return e.speech&&e.speech.length>0?"single":e.payload?"multiple":null}).includes("multiple")?function(){for(var t=a.fulfillment.messages.find(function(e){return e.payload}).payload,n=t.response,o=1e3,i=function(a){o+=a>0?Math.floor(2e3*Math.random())+1e3:0,setTimeout(function(){e.updateHistory(n[a],e.state.botName,!0),a===n.length-1&&(e.setState({isTyping:!1}),e.state.curatedOptions.visible&&t.moreOptions&&e.setState({curatedOptions:{visible:!0,links:t.moreOptions}}))},o)},r=0;r<n.length;r+=1)i(r)}():(e.updateHistory(a.fulfillment.speech,e.state.botName,!0),e.setState({isTyping:!1}))},e.sendMessage=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(t&&(13===t.keyCode||13===t.which)||a){var n=a||e.state.inputValue;e.updateHistory(n,e.state.username),window.dataLayer.push({event:"dialogflow",message:n}),e.setState({isTyping:!0,inputValue:""},function(){e.client.textRequest(n).then(e.handleResponse).catch(e.handleError)})}},e.handleInputChange=function(t){e.setState({inputValue:t.target.value})},e.changeInput=function(t){e.updateHistory(m.changeInputResponse[t],e.state.botName,!0),e.setState({curatedOptions:Object(b.a)({},e.state.curatedOptions,{visible:!e.state.curatedOptions.visible})})},e.handleError=function(){e.setState({isTyping:!1})},e.updateHistory=function(t,a){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=e.state.chatHistory;o.push({user:a,message:t,bot:n}),e.setState({chatHistory:o})},e.client=new y.a({accessToken:m.dialogFlow.token}),e.state={chatHistory:[],username:"Anon".concat(Math.floor(8999*Math.random()+1e3)),botName:"HeatherBot",isTyping:!0,inputValue:"",curatedOptions:{visible:!1,links:["Who are you?","Can I see your work?","What do you like to code in?","I'd like to get in touch with you"]}},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.triggerFirstMessage()},2e3)}},{key:"componentDidUpdate",value:function(e){-1!==e.openApps.indexOf(m.apps.messenger.toLowerCase())&&(this.messages.scrollTop=this.messages.scrollHeight),this.messages.scrollTop=this.messages.scrollHeight}},{key:"render",value:function(){var e=this,t=this.props,a=t.updateActiveApp,n=t.closeApp,i=t.updateStartbar,r=t.openApps,s=t.minimizedApps,c=t.currentlyActiveApp,p=t.previouslyActiveApp,l=this.state,u=l.chatHistory,d=l.isTyping,h=l.inputValue,f=l.curatedOptions,v=m.apps.messenger.toLowerCase(),g=-1===r.indexOf(v)||-1!==s.indexOf(v)?"closed":"";return o.a.createElement(C.a,{defaultPosition:{x:100*Math.random()+50,y:100*Math.random()+50},handle:".toolbar"},o.a.createElement("div",{className:"\n              messenger\n              program\n              ".concat(c===v?"active":"","\n              ").concat(p===v?"previous-active":"","\n            "),onClick:a.bind(null,v),"data-view":g},o.a.createElement(S,{closeApp:n,updateStartbar:i,component:v,image:m.icons[m.apps.messenger.toLowerCase()].url,title:m.apps.messenger}),o.a.createElement("div",{className:"messages content",ref:function(t){e.messages=t}},o.a.createElement(k.TransitionGroup,null,u.map(function(e,t){return o.a.createElement(k.CSSTransition,{key:t,timeout:500,classNames:"message"},o.a.createElement(O,{key:t,type:e.bot?"sent":"received",user:e.user,content:e.message}))}))),o.a.createElement("span",{className:"activeTyping ".concat(d?"visible":"")},"Heather is typing..."),o.a.createElement("div",{className:"userInput ".concat(d?"hidden":"")},o.a.createElement("div",{className:"field"},f.visible?o.a.createElement("div",{className:"buttonWrapper"},o.a.createElement("div",null,f.links.map(function(t){return o.a.createElement("button",{key:t.replace(/\s+/g,"").toLowerCase(),className:"button-medium",onClick:function(){return e.sendMessage(null,t)}},t)}))):o.a.createElement("input",{type:"text",id:"messageField",autoFocus:!0,value:h,onChange:this.handleInputChange,onKeyPress:this.sendMessage})),o.a.createElement("button",{onClick:function(){return e.changeInput(f.visible?"free":"options")},className:"button-medium option-toggle"},f.visible?"Free type":"Curated"))))}}]),t}(n.Component)),T=function(e){return o.a.createElement(C.a,{defaultPosition:e.notificationStyle?{}:{x:100*Math.random()+50,y:100*Math.random()+50},handle:".toolbar"},o.a.createElement("div",{className:"".concat(e.programName.toLowerCase()," program txt-file ").concat(e.currentlyActiveApp===e.programName.toLowerCase()?"active":""," ").concat(e.previouslyActiveApp===e.programName.toLowerCase()?"previous-active":""," ").concat(e.notificationStyle?"notification":""),"data-view":-1===e.openApps.indexOf(e.programName.toLowerCase())?"closed":-1!==e.minimizedApps.indexOf(e.programName.toLowerCase())?"closed":"",onClick:e.updateActiveApp.bind(null,e.programName.toLowerCase())},o.a.createElement(S,{closeApp:e.closeApp,updateStartbar:e.updateStartbar,component:e.programName.toLowerCase(),image:e.programIcon,title:"".concat(e.programName," ").concat(e.programRights?e.programRights:""),notificationStyle:e.notificationStyle}),o.a.createElement("div",{className:"content",contentEditable:e.contentEditable,suppressContentEditableWarning:!0},e.children)))};T.defaultProps={programRights:null,contentEditable:!1,updateActiveApp:function(){},closeApp:function(){},updateStartbar:function(){},openApps:[],minimizedApps:[],currentlyActiveApp:null,previouslyActiveApp:null,notificationStyle:!1};var x=T,j=function(e){var t=e.updateActiveApp,a=e.updateStartbar,n=e.closeApp,i=e.openApps,r=e.minimizedApps,s=e.currentlyActiveApp,c=e.previouslyActiveApp;return o.a.createElement(x,{programName:m.apps.work,programRights:"[Read Only]",programIcon:m.icons[m.apps.work.toLowerCase()].url,updateActiveApp:t,updateStartbar:a,closeApp:n,openApps:i,minimizedApps:r,currentlyActiveApp:s,previouslyActiveApp:c},o.a.createElement(L.a,null,m.work.map(function(e,t){return o.a.createElement("div",{key:t},o.a.createElement("h3",null,o.a.createElement("a",{href:e.url},e.title)),o.a.createElement("p",null,e.copy))})))},M=function(e){var t=e.updateActiveApp,a=e.closeApp,n=e.updateStartbar,i=e.openApps,r=e.minimizedApps,s=e.currentlyActiveApp,c=e.previouslyActiveApp;return o.a.createElement(x,{programName:m.apps.contact,programIcon:m.icons[m.apps.contact.toLowerCase()].url,contentEditable:!0,updateActiveApp:t,updateStartbar:n,closeApp:a,openApps:i,minimizedApps:r,currentlyActiveApp:s,previouslyActiveApp:c},m.contact.content,o.a.createElement("br",null),o.a.createElement("br",null),"==========================================",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("a",{href:m.contact.emailLink},m.contact.emailLink.replace("mailto:",""))," ",o.a.createElement("br",null),o.a.createElement("a",{href:m.contact.linkedin},"LinkedIn")," ",o.a.createElement("br",null),o.a.createElement("a",{href:m.contact.github},"GitHub")," ",o.a.createElement("br",null),o.a.createElement("a",{href:m.contact.twitter},"Twitter")," ",o.a.createElement("br",null),o.a.createElement("a",{href:m.contact.instagram},"Instagram"))},z=function(e){var t=e.restart;return o.a.createElement(x,{currentlyActiveApp:m.apps.shutdown.toLowerCase(),programName:m.apps.shutdown,openApps:[m.apps.shutdown.toLowerCase()],programIcon:m.icons[m.apps.shutdown.toLowerCase()].url,notificationStyle:!0},"It is now safe to turn off your computer.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{className:"button-medium",onClick:t},"Restart"))},D=a(21),H=a.n(D),F={chat:I,work:j,contact:M},R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={shutDown:!1,openApps:[m.apps.messenger.toLowerCase()],minimizedApps:[],openStart:!1,currentlyActiveApp:m.apps.messenger.toLowerCase(),previouslyActiveApp:""},a.linkClickListener=function(e){var t=window.e||e;"A"===t.target.tagName&&a.openInNewTab(t.target.href)},a.openApp=function(e,t){e.preventDefault();var n=a.state,o=n.openApps,i=n.minimizedApps;if(o.push(t),i.indexOf(t)>-1)for(var r=i.length-1;r>=0;r--)i[r]===t&&i.splice(r,1);a.setState({openApps:o,minimizedApps:i}),a.updateActiveApp(t),a.start("close")},a.closeApp=function(e,t){t.preventDefault();var n=a.state.openApps;n=n.filter(function(t){return t!==e}),a.setState({openApps:n})},a.updateStartbar=function(e,t){var n=a.state.minimizedApps;if(t)n.push(e);else if(a.state.minimizedApps.indexOf(e)>-1){var o=n.indexOf(e);n.splice(o,1),a.updateActiveApp(e,null)}else a.updateActiveApp(e,null);a.setState({minimizedApps:n}),a.start("close")},a.updateActiveApp=function(e,t){t&&t.preventDefault(),e!==a.state.updateActiveApp&&(a.setState({previouslyActiveApp:a.state.currentlyActiveApp}),a.setState({currentlyActiveApp:e}))},a.start=function(e){"close"===e?a.setState({openStart:!1}):a.setState({openStart:!0})},a.openInNewTab=function(e){var t=window.open(e,"_blank");t&&t.focus()},a.shutDown=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e&&e.preventDefault(),a.setState({shutDown:!t,openStart:!1,openApps:[],minimizedApps:[],currentlyActiveApp:"",previouslyActiveApp:""})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener?document.addEventListener("click",this.linkClickListener,!1):document.attachEvent("onclick",this.linkClickListener)}},{key:"render",value:function(){var e=this,t=this.state,a=t.openApps,n=t.minimizedApps,i=t.currentlyActiveApp,r=t.previouslyActiveApp,s=t.openStart,c=t.shutDown;return o.a.createElement("section",{className:"desktop"},o.a.createElement("div",{className:"icons"},o.a.createElement("button",{onClick:function(t){return e.openApp(t,m.apps.messenger.toLowerCase())}},o.a.createElement("img",{src:m.icons[m.apps.messenger.toLowerCase()].url,alt:m.icons[m.apps.messenger.toLowerCase()].alt})," ",m.apps.messenger),o.a.createElement("button",{onClick:function(t){return e.openApp(t,m.apps.contact.toLowerCase())}},o.a.createElement("img",{src:m.icons[m.apps.contact.toLowerCase()].url,alt:m.icons[m.apps.contact.toLowerCase()].alt})," ",m.apps.contact),o.a.createElement("button",{onClick:function(t){return e.openApp(t,m.apps.work.toLowerCase())}},o.a.createElement("img",{src:m.icons[m.apps.work.toLowerCase()].url,alt:m.icons[m.apps.work.toLowerCase()].alt})," ",m.apps.work),o.a.createElement("a",{href:m.resumeLink,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:H.a,alt:"Icon of resume"})," Resume")),Object.keys(F).map(function(t,s){if(-1===a.indexOf(t)&&-1===n.indexOf(t))return null;var c=F[t];return o.a.createElement(c,{key:s,updateActiveApp:e.updateActiveApp,closeApp:e.closeApp,updateStartbar:e.updateStartbar,openApps:a,minimizedApps:n,currentlyActiveApp:i,previouslyActiveApp:r})}),o.a.createElement(w,{openApp:this.openApp,updateActiveApp:this.updateActiveApp,currentlyActiveApp:i,openApps:a,minimizedApps:n,shutDown:this.shutDown,updateStartbar:this.updateStartbar,start:this.start,openStart:s}),o.a.createElement("div",{className:"shutDownPage ".concat(c?"visible":"")},o.a.createElement(z,{restart:function(){return e.shutDown(null,!0)}})))}}]),t}(n.Component),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(R,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");W?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):P(e)})}}()}],[[23,1,2]]]);
//# sourceMappingURL=main.e45ac88e.chunk.js.map