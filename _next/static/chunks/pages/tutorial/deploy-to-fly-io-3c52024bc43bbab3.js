(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[525],{1503:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/deploy-to-fly-io",function(){return t(7942)}])},7942:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u},meta:function(){return l}});t(7294);var i=t(3905),a=t(8470);function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l={id:"deploy-to-fly-io",title:"Deploy to Fly.io"},r={meta:l},s=function(e){var n=e.children,t=o(e,["children"]);return(0,i.kt)(a.C,Object.assign({meta:l},t),n)};function u(e){var n=e.components,t=o(e,["components"]);return(0,i.kt)(s,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",Object.assign({parentName:"p"},{href:"https://fly.io"}),"Fly.io")," is a Platform-as-a-service for running full-stack apps and databases close to your users. Using Fly.io, you can deploy different kinds of apps such as Node, Go, Laravel, Python, and Dockerfile-based applications."),(0,i.kt)("p",null,"In this example, we will show you how to run Monika in Fly.io using Dockerfile deployments. First, we need to install Fly CLI."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you are using ",(0,i.kt)("strong",{parentName:"li"},"macOS"),", you can install it via ",(0,i.kt)("a",Object.assign({parentName:"li"},{href:"https://brew.sh/"}),"Homebrew")," by running ",(0,i.kt)("inlineCode",{parentName:"li"},"brew install superfly/tap/flyctl")," in your terminal. If you prefer the CURL way, run the command ",(0,i.kt)("inlineCode",{parentName:"li"},"curl -L [https://fly.io/install.sh](https://fly.io/install.sh) | sh")," in your terminal."),(0,i.kt)("li",{parentName:"ul"},"If you are using ",(0,i.kt)("strong",{parentName:"li"},"Linux"),", you can run ",(0,i.kt)("inlineCode",{parentName:"li"},"curl -L [https://fly.io/install.sh](https://fly.io/install.sh) | sh")," in your terminal"),(0,i.kt)("li",{parentName:"ul"},"If you are using ",(0,i.kt)("strong",{parentName:"li"},"Windows"),", you can run ",(0,i.kt)("inlineCode",{parentName:"li"},"iwr https://fly.io/install.ps1 -useb | iex")," in your Powershell terminal")),(0,i.kt)("p",null,"After installing the Fly CLI, the next step is to log in to Fly.io. You might need to sign up first by running ",(0,i.kt)("inlineCode",{parentName:"p"},"fly auth signup")," in your terminal to create an account. Otherwise, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"fly auth login")," in your terminal."),(0,i.kt)("p",null,"Both commands will open a browser so make sure you are running in a GUI environment. Once being authenticated, you can proceed to the next step."),(0,i.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*fHkgGmclkZobjGqy88axaQ.png",alt:null})),(0,i.kt)("p",null,"Create a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"flyio-monika")," in your local machine. Then, navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"flyio-monika")," and create two files: ",(0,i.kt)("strong",{parentName:"p"},"Dockerfile")," and ",(0,i.kt)("strong",{parentName:"p"},"monika.yml"),"."),(0,i.kt)("p",null,"Let us explain a little bit about these two files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile")," file will pull the latest ",(0,i.kt)("inlineCode",{parentName:"li"},"hyperjump/monika")," image from the Docker Hub and will be running the ",(0,i.kt)("inlineCode",{parentName:"li"},"monika.yml")," file."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"monika.yml")," file is the Monika configuration file."),(0,i.kt)("li",{parentName:"ul"},"In this scenario, we are going to hit the \u201clogin\u201d API with a JSON request body. After we have the token, it will hit the \u201cget user by user ID\u201d API using the token from the first request. Each request will have its own alerts and one global alert to check if hitting any of the APIs takes you more than ten seconds, then it\u2019s probably your internet.")),(0,i.kt)("p",null,"Save these two files inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"flyio-monika")," directory. Once that\u2019s done, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"fly launch")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"flyio-monika")," directory. You will be prompted to enter a unique name and select a location for the app."),(0,i.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1218/1*BgQskxfa17Zdwow7MzyxLw.png",alt:null})),(0,i.kt)("p",null,"You can skip the PostgreSQL database setup, and proceed to deploy now. It will automatically create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"fly.toml")," and it may take up to five minutes to successfully deploy the app. Once that\u2019s done, you can go to your Fly.io dashboard to see that Monika is now running:"),(0,i.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*m-DzL6q_jWlvpbx54OG9-w.png",alt:null})),(0,i.kt)("p",null,"We want to add more regions to deploy our Monika instance. So, we need to add a new region to the region pool. You can simply do so by running ",(0,i.kt)("inlineCode",{parentName:"p"},"fly regions add [...regions]")," in your terminal. You can see all the available regions on the ",(0,i.kt)("a",Object.assign({parentName:"p"},{href:"https://fly.io/docs/reference/regions/"}),"Fly.io documentation page"),"."),(0,i.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/892/1*gT7wQkPU81U-bn7qZlT4gg.png",alt:null})),(0,i.kt)("p",null,"Once you add the Hong Kong region, it\u2019s time to scale the Monika instance by running ",(0,i.kt)("inlineCode",{parentName:"p"},"fly scale 2 --max-per-region 1")," in your terminal. Then, check if the scaling works by running ",(0,i.kt)("inlineCode",{parentName:"p"},"fly scale show")),(0,i.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/782/1*mfV5RfizFvDpoVWthO0nhg.png",alt:null})),(0,i.kt)("p",null,"Alternatively, you can go to the Fly.io dashboard and navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Monitoring")," menu. You will see that your app is now running in two regions."),(0,i.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*Rao0aJbcgohqr_OQFj4EkA.png",alt:null})))}u.isMDXComponent=!0}},function(e){e.O(0,[547,778,470,774,888,179],(function(){return n=1503,e(e.s=n);var n}));var n=e.O();_N_E=n}]);