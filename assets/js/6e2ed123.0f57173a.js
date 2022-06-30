"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[1333],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return t?r.createElement(k,a(a({ref:n},d),{},{components:t})):r.createElement(k,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3600:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={},s="RuntimeProxy",u={unversionedId:"designs/runtime-proxy",id:"designs/runtime-proxy",title:"RuntimeProxy",description:"Summary",source:"@site/docs/designs/runtime-proxy.md",sourceDirName:"designs",slug:"/designs/runtime-proxy",permalink:"/docs/designs/runtime-proxy",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/designs/runtime-proxy.md",tags:[],version:"current",lastUpdatedBy:"Fansong Zeng",lastUpdatedAt:1656578054,formattedLastUpdatedAt:"6/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"Koordlet",permalink:"/docs/designs/koordlet-overview"},next:{title:"Load-aware Scheduling",permalink:"/docs/designs/load-aware-scheduling"}},d={},p=[{value:"Summary",id:"summary",level:2},{value:"Goals",id:"goals",level:2},{value:"Components",id:"components",level:2},{value:"KoordRuntimeProxy",id:"koordruntimeproxy",level:3},{value:"RuntimePlugins",id:"runtimeplugins",level:3},{value:"Architecture",id:"architecture",level:2},{value:"CRI Server",id:"cri-server",level:3},{value:"Plugins Manager",id:"plugins-manager",level:3},{value:"Runtime Dispatcher",id:"runtime-dispatcher",level:3},{value:"Store",id:"store",level:3},{value:"Runtime Plugins",id:"runtime-plugins",level:2},{value:"How to Register Plugins",id:"how-to-register-plugins",level:3},{value:"Protocols between KoordRuntimeProxy and Plugins",id:"protocols-between-koordruntimeproxy-and-plugins",level:3},{value:"Examples for Runtime Plugins",id:"examples-for-runtime-plugins",level:3},{value:"Installation",id:"installation",level:2},{value:"Installing from sources",id:"installing-from-sources",level:3},{value:"Installing from packages",id:"installing-from-packages",level:3},{value:"Setup Kubelet",id:"setup-kubelet",level:3},{value:"Setup KoordRuntimeProxy",id:"setup-koordruntimeproxy",level:3}],c={toc:p};function m(e){var n=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"runtimeproxy"},"RuntimeProxy"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"KoordRuntimeProxy acts as a proxy between kubelet and containerd(dockerd under dockershim scenario), which is designed to\nintercept CRI request, and apply some resource management policies, such as setting different cgroup parameters by pod\npriorities under hybrid workload orchestration scenario, applying new isolation policies for latest Linux kernel,\nCPU architecture, and etc."),(0,i.kt)("p",null,"There are two components involved, KoordRuntimeProxy and RuntimePlugins."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"image",src:t(4186).Z,width:"431",height:"303"})),(0,i.kt)("h2",{id:"goals"},"Goals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enhance resource management for QoS based Scheduling."),(0,i.kt)("li",{parentName:"ul"},"Provide interface for new isolation features which are not supported by CRI.")),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("h3",{id:"koordruntimeproxy"},"KoordRuntimeProxy"),(0,i.kt)("p",null,"KoordRuntimeProxy is in charge of intercepting request during pod's lifecycle, such as RunPodSandbox, CreateContainer etc.,\nand then calling RuntimePlugins to do resource isolation policies before transferring request to backend containerd(dockerd)\nand after transferring response to kubelet. KoordRuntimeProxy provides an isolation-policy-execution framework which allows\ncustomized plugins registered to do specified isolation policies, these plugins are called RuntimePlugins.\nKoordRuntimeProxy itself does NOT do any isolation policies."),(0,i.kt)("h3",{id:"runtimeplugins"},"RuntimePlugins"),(0,i.kt)("p",null,"RuntimePlugins register events(RunPodSandbox etc.) to KoordRuntimeProxy and would receive notifications when events happen.\nRuntimePlugins should complete resource isolation policies basing on the notification message, and then response\nKoordRuntimeProxy, KoordRuntimeProxy would decide to transfer request to backend containerd or discard request according to\nplugins' response."),(0,i.kt)("p",null,"If no RuntimePlugins registered, KoordRuntimeProxy would become a transparent proxy between kubelet and containerd."),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"image",src:t(8115).Z,width:"551",height:"262"})),(0,i.kt)("p",null,"There are 4 main components for KoordRuntimeProxy."),(0,i.kt)("h3",{id:"cri-server"},"CRI Server"),(0,i.kt)("p",null,"As a proxy between kubelet and containerd, KoordRuntimeProxy acts as a CRI server for kubelet(http server under dockershim\nscenario). It should intercept all request from kubelet, and generate protocols for talking with plugins before and\nafter talking with backend containerd(dockerd)"),(0,i.kt)("h3",{id:"plugins-manager"},"Plugins Manager"),(0,i.kt)("p",null,"PluginsManager is in charge of parsing registered plugin info from ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/runtime/hookserver.d")," dynamically."),(0,i.kt)("h3",{id:"runtime-dispatcher"},"Runtime Dispatcher"),(0,i.kt)("p",null,"RuntimeDispatcher is designed to manage communications with plugins."),(0,i.kt)("h3",{id:"store"},"Store"),(0,i.kt)("p",null,"As a proxy, KoordRuntimeProxy had better be designed as stateless, but sometimes it does NOT work. Take StartContainer hook\nfor example, there exists only containerID in CRI StartContainerRequest, which is not enough for plugins to adapt policies\nsince plugins may not store pod/container info(such as meta, priority) locally. So KoordRuntimeProxy should store pod/container\ninfo during RunPodSandbox/CreateContainer Stage. When StartContainer request comes, KoordRuntimeProxy can get pod/container info\nby containerID, and then call plugins with pod/container info."),(0,i.kt)("p",null,"With store, there would be pod/container info everytime KoordRuntimeProxy calls plugins, so there is no need for plugins to\nstore pod/container info exceptionally, plugins can be designed as stateless."),(0,i.kt)("p",null,"Considering performance, store locates in memory and does not generate external io to disk."),(0,i.kt)("h2",{id:"runtime-plugins"},"Runtime Plugins"),(0,i.kt)("h3",{id:"how-to-register-plugins"},"How to Register Plugins"),(0,i.kt)("p",null,"All the plugin config files should be put to ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/runtime/hookserver.d")," with ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," suffix, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ cat /etc/runtime/hookserver.d/koordlet.json\n{\n    "remote-endpoint": "/var/run/koordlet-runtimehookserver.sock",\n    "failure-policy": "Ignore",\n    "runtime-hooks": [\n        "PreRunPodSandbox"\n    ]\n}\n')),(0,i.kt)("p",null,"There are 3 fields involved:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"remote-endpoint: endpoint KoordRuntimeProxy talking with plugin, generated by plugin."),(0,i.kt)("li",{parentName:"ul"},"failure-policy: policy when calling plugin fail, Fail or Ignore, default to Ignore."),(0,i.kt)("li",{parentName:"ul"},"runtime-hooks: currently 5 hook points: PreRunPodSandbox, PreStartContainer, PostStartContainer, PreUpdateContainerResources,\nPostStopContainer.")),(0,i.kt)("p",null,"hook points with prefix 'Pre' means calling plugins before transferring request to contianerd(dockerd).\nhook points with prefix 'Post' means calling plugins after receiving response from containerd(dockerd).\nplugin provider can set any hook combinations to \"runtime-hooks\"."),(0,i.kt)("h3",{id:"protocols-between-koordruntimeproxy-and-plugins"},"Protocols between KoordRuntimeProxy and Plugins"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/blob/main/apis/runtime/v1alpha1/api.proto"},"Protocols")),(0,i.kt)("h3",{id:"examples-for-runtime-plugins"},"Examples for Runtime Plugins"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/blob/main/docs/design-archive/koordlet-runtime-hooks.md"},"koordlet-runtime-plugin-design")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"installing-from-sources"},"Installing from sources"),(0,i.kt)("p",null,"get sources: ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/koordinator-sh/koordinator.git")),(0,i.kt)("p",null,"build: ",(0,i.kt)("inlineCode",{parentName:"p"},"cd koordinator; make build-koord-runtime-proxy")),(0,i.kt)("h3",{id:"installing-from-packages"},"Installing from packages"),(0,i.kt)("p",null,"Download latest released package from: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/releases"},"https://github.com/koordinator-sh/koordinator/releases")),(0,i.kt)("h3",{id:"setup-kubelet"},"Setup Kubelet"),(0,i.kt)("p",null,"Under containerd scenario, to make koord-runtime-proxy a proxy between kubelet and containerd, kubelet parameters should be altered as shown\nbelow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubelet <other options> --container-runtime=remote --container-runtime-endpoint=/var/run/koord-runtimeproxy/runtimeproxy.sock\n")),(0,i.kt)("p",null,"Under docker scenario, to make koord-runtime-proxy a proxy between kubelet and dockerd, kubelet parameters should be altered as shown\nbelow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubelet <other options> --docker-endpoint=/var/run/koord-runtimeproxy/runtimeproxy.sock\n")),(0,i.kt)("h3",{id:"setup-koordruntimeproxy"},"Setup KoordRuntimeProxy"),(0,i.kt)("p",null,"Firstly, please make sure your runtime backend is containerd or dockerd."),(0,i.kt)("p",null,"Under containerd scenario, koord-runtime-proxy can be setup with command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"koord-runtime-proxy --remote-runtime-service-endpoint=<runtime sockfile path>\n    --remote-image-service-endpoint=<image sockfile path>\n")),(0,i.kt)("p",null,"If containerd listening CRI request on default /var/run/koord-runtimeproxy/runtimeproxy.sock, koord-runtime-proxy can be setup by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"koord-runtime-proxy\n")),(0,i.kt)("p",null,"Under docker scenario, koord-runtime-proxy should be setup with the additional parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"--backend-runtime-mode Docker"),",\nand without ",(0,i.kt)("inlineCode",{parentName:"p"},"remote-image-service-endpoint"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"koord-runtime-proxy --backend-runtime-mode=Docker --remote-runtime-service-endpoint=<runtime sockfile path>\n")))}m.isMDXComponent=!0},4186:function(e,n,t){n.Z=t.p+"assets/images/koord-runtime-proxy-architecture-89594d54b7712128b218cd4d611b457f.svg"},8115:function(e,n,t){n.Z=t.p+"assets/images/koord-runtime-proxy-design-25f39892d7bb37cfbdb7138ad76b56ce.svg"}}]);