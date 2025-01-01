(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[525],{1503:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/deploy-to-fly-io",function(){return t(8849)}])},8849:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u},meta:function(){return l}});var i=t(9534),a=(t(7294),t(3905)),o=t(2290),l={id:"deploy-to-fly-io",title:"Deploy to Fly.io"},r={meta:l},s=function(e){var n=e.children,t=(0,i.Z)(e,["children"]);return(0,a.kt)(o.C,Object.assign({meta:l},t),n)};function u(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)(s,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",Object.assign({parentName:"p"},{href:"https://fly.io"}),"Fly.io")," is a Platform-as-a-service for running full-stack apps and databases close to your users. Using Fly.io, you can deploy different kinds of apps such as Node, Go, Laravel, Python, and Dockerfile-based applications."),(0,a.kt)("p",null,"In this example, we will show you how to run Monika in Fly.io using Dockerfile deployments. First, we need to install Fly CLI."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are using ",(0,a.kt)("strong",{parentName:"li"},"macOS"),", you can install it via ",(0,a.kt)("a",Object.assign({parentName:"li"},{href:"https://brew.sh/"}),"Homebrew")," by running ",(0,a.kt)("inlineCode",{parentName:"li"},"brew install flyctl")," in your terminal. If you prefer the CURL way, run the command ",(0,a.kt)("inlineCode",{parentName:"li"},"curl -L https://fly.io/install.sh | sh")," in your terminal."),(0,a.kt)("li",{parentName:"ul"},"If you are using ",(0,a.kt)("strong",{parentName:"li"},"Linux"),", you can run ",(0,a.kt)("inlineCode",{parentName:"li"},"curl -L https://fly.io/install.sh | sh")," in your terminal"),(0,a.kt)("li",{parentName:"ul"},"If you are using ",(0,a.kt)("strong",{parentName:"li"},"Windows"),", you can run the Powershell install script: ",(0,a.kt)("inlineCode",{parentName:"li"},'powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"'))),(0,a.kt)("p",null,"After installing the Fly CLI, the next step is to log in to Fly.io. You might need to sign up first by running ",(0,a.kt)("inlineCode",{parentName:"p"},"fly auth signup")," in your terminal to create an account. Otherwise, you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"fly auth login")," in your terminal."),(0,a.kt)("p",null,"Both commands will open a browser so make sure you are running in a GUI environment. Once being authenticated, you can proceed to the next step."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*fHkgGmclkZobjGqy88axaQ.png",alt:null})),(0,a.kt)("p",null,"Create a folder called ",(0,a.kt)("inlineCode",{parentName:"p"},"flyio-monika")," in your local machine. Then, navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"flyio-monika")," and create two files: ",(0,a.kt)("strong",{parentName:"p"},"Dockerfile")," and ",(0,a.kt)("strong",{parentName:"p"},"monika.yml"),"."),(0,a.kt)("p",null,"Dockerfile:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-Dockerfile"}),'FROM hyperjump/monika:latest\n\nWORKDIR /usr\n\nCOPY monika.yml .\n\nCMD ["monika", "-c", "monika.yml"]\n')),(0,a.kt)("p",null,"monika.yml:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-yml"}),"probes:\n  - id: example-com\n    requests:\n      - url: https://reqres.in\n    alerts:\n      - assertion: response.time > 1000\n        message: Website is slow\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile")," file will pull the latest ",(0,a.kt)("inlineCode",{parentName:"li"},"hyperjump/monika")," image from the Docker Hub and will be running the ",(0,a.kt)("inlineCode",{parentName:"li"},"monika.yml")," file."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"monika.yml")," file is the Monika configuration file.")),(0,a.kt)("p",null,'This Monika configuration sets up a probe for the website "reqres.in". The probe sends a request to the website\'s URL and triggers an alert if the response time exceeds 1000 milliseconds. An incident will be triggered if the alert condition is met, and a recovery notification will be sent when the alert condition is not met.'),(0,a.kt)("p",null,"Save these two files inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"flyio-monika")," directory. Once that\u2019s done, you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"fly launch")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"flyio-monika")," directory. You will be prompted to enter a unique name and select a location for the app."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*BgQskxfa17Zdwow7MzyxLw.png",alt:null})),(0,a.kt)("p",null,"You can skip the PostgreSQL database setup, and proceed to deploy now. It will automatically create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"fly.toml")," and it may take up to five minutes to successfully deploy the app. Once that\u2019s done, you can go to your Fly.io dashboard to see that Monika is now running:"),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*oz0pvdYGOAxAc1mgKJFCvA.png",alt:null})),(0,a.kt)("p",null,"We want to add more regions to deploy our Monika instance. So, we need to add a new region to the region pool. You can simply do so by running ",(0,a.kt)("inlineCode",{parentName:"p"},"fly regions add [...regions]")," in your terminal. You can see all the available regions on the ",(0,a.kt)("a",Object.assign({parentName:"p"},{href:"https://fly.io/docs/reference/regions/"}),"Fly.io documentation page"),"."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/892/1*gT7wQkPU81U-bn7qZlT4gg.png",alt:null})),(0,a.kt)("p",null,"Once you add the Hong Kong region, it\u2019s time to scale the Monika instance by running ",(0,a.kt)("inlineCode",{parentName:"p"},"fly scale 2 --max-per-region 1")," in your terminal. Then, check if the scaling works by running ",(0,a.kt)("inlineCode",{parentName:"p"},"fly scale show")),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*mfV5RfizFvDpoVWthO0nhg.png",alt:null})),(0,a.kt)("p",null,"Alternatively, you can go to the Fly.io dashboard and navigate to the ",(0,a.kt)("strong",{parentName:"p"},"Monitoring")," menu. You will see that your app is now running in two regions."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*7CL8DKXtuT77bvFuh_wNRg.png",alt:null})))}u.isMDXComponent=!0}},function(e){e.O(0,[357,513,290,774,888,179],(function(){return n=1503,e(e.s=n);var n}));var n=e.O();_N_E=n}]);