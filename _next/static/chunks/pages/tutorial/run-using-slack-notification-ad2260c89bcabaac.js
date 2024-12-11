(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{142:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/run-using-slack-notification",function(){return n(5276)}])},5276:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c},meta:function(){return s}});var i=n(9534),a=(n(7294),n(3905)),o=n(2290),s={id:"run-using-slack-notification",title:"Run using Slack Notification"},r={meta:s},l=function(e){var t=e.children,n=(0,i.Z)(e,["children"]);return(0,a.kt)(o.C,Object.assign({meta:s},n),t)};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)(l,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial, I will be sharing how to integrate Monika with Slack. You can integrate Monika with Slack using Incoming Webhook so that when there is a Monika incidents or recoveries alert, your team will be notified via existing Slack channels."),(0,a.kt)("h2",Object.assign({},{id:"setup-webhook-with-slack"}),"Setup Webhook with Slack",(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#setup-webhook-with-slack",title:"Direct link to heading",className:"anchor"}),(0,a.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,a.kt)("p",null,"First things first, you need to have a Slack workspace. Create your user account on their website and follow their steps to create a new workspace. Now that we have our workspace ready, head to the ",(0,a.kt)("strong",{parentName:"p"},"Browse Slack")," and select Apps. Search for an app called ",(0,a.kt)("strong",{parentName:"p"},"Incoming Webhooks"),"."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*Y7V0vMPpbYK89sqFzUaj-A.png",alt:null})),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Add")," and you will be redirected to the setup page. Click the ",(0,a.kt)("strong",{parentName:"p"},"Add to Slack")," button. You will be asked which channels you want to connect with Monika. As an example, I used the ",(0,a.kt)("strong",{parentName:"p"},"#monika-notification")," channel. After you have selected your channel, click ",(0,a.kt)("strong",{parentName:"p"},"Add Incoming Webhooks Integration")," button. You should see that your Webhook URL is ready to use."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*d1sx8i8I8d3O-r6n8b5lLg.png",alt:null})),(0,a.kt)("h2",Object.assign({},{id:"configuring-monika-with-webhook"}),"Configuring Monika with Webhook",(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#configuring-monika-with-webhook",title:"Direct link to heading",className:"anchor"}),(0,a.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,a.kt)("p",null,"Now that we have our Webhook URL, it\u2019s time to create a configuration called ",(0,a.kt)("inlineCode",{parentName:"p"},"monika.yml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{}),"notifications:\n  - id: slack\n    type: slack\n    data:\n      url: <REPLACE_THIS_TO_YOUR_INCOMING_WEBHOOK_URL>\nprobes:\n  - id: sample_login\n    name: Sample Login\n    requests:\n      - method: GET\n        url: https://github.com\n        alerts:\n          - query: response.time > 500\n            message: Github response time is {{ response.time }} ms, expecting less than 500ms\n          - query: response.status != 200\n            message: Github status code is not 200. Please check the service status!\n    alerts:\n      - query: response.time > 10000\n        message: Please check your internet connection\n")),(0,a.kt)("p",null,"Let me explain a little bit about this configuration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Monika is using the Slack notification channel. You can change the notification channel by changing ",(0,a.kt)("inlineCode",{parentName:"li"},"type")," key to another value such as ",(0,a.kt)("a",Object.assign({parentName:"li"},{href:"https://medium.com/hyperjump-tech/get-notified-by-e-mail-when-your-website-is-down-using-monika-a-guide-to-smtp-notification-channel-91dfcbed2bf8"}),"SMTP")," or ",(0,a.kt)("a",Object.assign({parentName:"li"},{href:"https://whatsapp.hyperjump.tech/"}),"WhatsApp"),". In the ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," object, there is only one key called ",(0,a.kt)("inlineCode",{parentName:"li"},"url")," for your Webhook URL"),(0,a.kt)("li",{parentName:"ul"},"Monika will be probing ",(0,a.kt)("a",Object.assign({parentName:"li"},{href:"https://github.com"}),"https://github.com")," and will send you an alert if the response time is greater than 500 milliseconds or the response status code is not 200, meaning the website is down"),(0,a.kt)("li",{parentName:"ul"},"If by chance when probing Github the response time is larger than 10000 milliseconds, you will receive an alert about your internet connection.")),(0,a.kt)("p",null,"Now that we have our configuration ready, it\u2019s time to run it with Monika. Go to the directory where you saved the Monika configuration, and run Monika straight away using ",(0,a.kt)("inlineCode",{parentName:"p"},"monika -c monika.yml")),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*zL-bVip3iC6tvXqDElRjRA.png",alt:null})),(0,a.kt)("p",null,"Congratulations! Now that you have successfully integrated Monika with Slack, you will be notified if your website is slow or down!"))}c.isMDXComponent=!0}},function(e){e.O(0,[357,513,290,774,888,179],(function(){return t=142,e(e.s=t);var t}));var t=e.O();_N_E=t}]);