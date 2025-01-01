(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{254:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/run-using-monika-whatsapp-notifier-notification",function(){return i(5589)}])},5589:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return l},meta:function(){return s}});var n=i(9534),a=(i(7294),i(3905)),o=i(2290),s={id:"run-using-whatsapp-notifier",title:"Run using WhatsApp Notifier"},r={meta:s},p=function(t){var e=t.children,i=(0,n.Z)(t,["children"]);return(0,a.kt)(o.C,Object.assign({meta:s},i),e)};function l(t){var e=t.components,i=(0,n.Z)(t,["components"]);return(0,a.kt)(p,Object.assign({},r,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial, we will be sharing how to integrate Monika with Monika WhatsApp Notifier so that when there is a Monika incidents or recoveries alert, you will be notified via WhatsApp."),(0,a.kt)("h2",Object.assign({},{id:"setup-monika-whatsapp-notifier"}),"Setup Monika Whatsapp Notifier",(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#setup-monika-whatsapp-notifier",title:"Direct link to heading",className:"anchor"}),(0,a.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,a.kt)("p",null,"First things first, you need to have a Monika WhatsApp Notifier webhook URL. Navigate to the ",(0,a.kt)("a",Object.assign({parentName:"p"},{href:"https://whatsapp.hyperjump.tech"}),"https://whatsapp.hyperjump.tech")," and create your own webhook URL by inputting your name and phone number. After you submit the form, you will receive a notification to confirm your phone number."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/962/1*So_BtEM7KNmimTYjWNqu5w.png",alt:null})),(0,a.kt)("p",null,"Click the link that you received to confirm your phone number. After that, you should receive your webhook URL and a guide to set up your WhatsApp Notifier."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/962/1*Le0rDvF8uZF4542Gr_y8wg.png",alt:null})),(0,a.kt)("p",null,"Save the Monika WhatsApp Notifier webhook URL to somewhere safe as we will need them later."),(0,a.kt)("h2",Object.assign({},{id:"configuring-monika-with-webhook"}),"Configuring Monika with Webhook",(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#configuring-monika-with-webhook",title:"Direct link to heading",className:"anchor"}),(0,a.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,a.kt)("p",null,"Now that we have our Webhook URL, it\u2019s time to create a configuration called ",(0,a.kt)("inlineCode",{parentName:"p"},"monika.yml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{}),"notifications:\n  - id: monika-notif\n    type: monika-notif\n    data:\n      url: https://YOUR_MONIKA_NOTIF_URL\nprobes:\n  - id: sample_login\n    name: Sample Login\n    requests:\n      - method: GET\n        url: https://github.com\n        alerts:\n          - query: response.time > 500\n            message: Github response time is {{ response.time }} ms, expecting less than 500ms\n          - query: response.status != 200\n            message: Github status code is not 200. Please check the service status!\n")),(0,a.kt)("p",null,"Let me explain a little bit about this configuration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need to set the notification channel in the ",(0,a.kt)("inlineCode",{parentName:"li"},"notifications")," object. There are 3 properties: ",(0,a.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"type"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"data"),". Set ",(0,a.kt)("inlineCode",{parentName:"li"},"id"),"with any string values, it\u2019s just an identifier. Set ",(0,a.kt)("inlineCode",{parentName:"li"},"type")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"monika-notif"),". Then put your WhatsApp notifier webhook URL in ",(0,a.kt)("inlineCode",{parentName:"li"},"url")," key in the ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," object."),(0,a.kt)("li",{parentName:"ul"},"Monika will be probing ",(0,a.kt)("a",Object.assign({parentName:"li"},{href:"https://github.com"}),"https://github.com")," and will send you an alert if the response time is greater than 500 milliseconds or the response status code is not 200, meaning the website is down")),(0,a.kt)("p",null,"Now that we have our configuration ready, it\u2019s time to run it with Monika. Go to the directory where you saved the Monika configuration, and run Monika straight away using ",(0,a.kt)("inlineCode",{parentName:"p"},"monika -c monika.yml")),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*JyohP5ybvPy0tNMCFciwLg.png",alt:null})),(0,a.kt)("p",null,"Congratulations! Now that you have successfully integrated Monika with Monika WhatsApp Notifier, you will be notified if your website is slow or down via WhatsApp."))}l.isMDXComponent=!0}},function(t){t.O(0,[357,513,290,774,888,179],(function(){return e=254,t(t.s=e);var e}));var e=t.O();_N_E=e}]);