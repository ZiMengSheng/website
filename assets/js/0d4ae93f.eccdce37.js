"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[9777],{3905:function(e,o,t){t.d(o,{Zo:function(){return d},kt:function(){return h}});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},d=function(e){var o=c(e.components);return r.createElement(l.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},p=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=n,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return t?r.createElement(m,i(i({ref:o},d),{},{components:t})):r.createElement(m,i({ref:o},d))}));function h(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6979:function(e,o,t){t.r(o),t.d(o,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(7462),n=t(3366),a=(t(7294),t(3905)),i=["components"],s={slug:"release-v0.1.0",title:"Koordinator v0.1.0 - QoS based scheduling system",authors:["joseph","hormes"],tags:["koordinator","colocation","kubernetes","scheduling","orchestration","release"]},l=void 0,c={permalink:"/blog/release-v0.1.0",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/blog/2022-03-31-release/index.md",source:"@site/blog/2022-03-31-release/index.md",title:"Koordinator v0.1.0 - QoS based scheduling system",description:"We\u2019re pleased to announce the release of Koordinator v0.1.0.",date:"2022-03-31T00:00:00.000Z",formattedDate:"March 31, 2022",tags:[{label:"koordinator",permalink:"/blog/tags/koordinator"},{label:"colocation",permalink:"/blog/tags/colocation"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"scheduling",permalink:"/blog/tags/scheduling"},{label:"orchestration",permalink:"/blog/tags/orchestration"},{label:"release",permalink:"/blog/tags/release"}],readingTime:4.21,truncated:!1,authors:[{name:"Joseph",title:"Koordinator maintainer",url:"https://github.com/eahydra",imageURL:"https://github.com/eahydra.png",key:"joseph"},{name:"Fangsong Zeng",title:"Koordinator maintainer",url:"https://github.com/hormes",imageURL:"https://github.com/hormes.png",key:"hormes"}],frontMatter:{slug:"release-v0.1.0",title:"Koordinator v0.1.0 - QoS based scheduling system",authors:["joseph","hormes"],tags:["koordinator","colocation","kubernetes","scheduling","orchestration","release"]},prevItem:{title:"Koordinator v0.2.0 - Enhanced node-side scheduling capabilities",permalink:"/blog/release-v0.2.0"}},d={authorsImageUrls:[void 0,void 0]},u=[{value:"Overview",id:"overview",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Node Metrics",id:"node-metrics",level:2},{value:"Colocation Resources",id:"colocation-resources",level:2},{value:"Cluster-level Colocation Profile",id:"cluster-level-colocation-profile",level:2},{value:"CPU Suppress",id:"cpu-suppress",level:2},{value:"Colocation Resources Balance",id:"colocation-resources-balance",level:2},{value:"Tutorial - Colocation of Spark Jobs",id:"tutorial---colocation-of-spark-jobs",level:2},{value:"Summary",id:"summary",level:2}],p={toc:u};function h(e){var o=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We\u2019re pleased to announce the release of Koordinator v0.1.0."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Koordinator is a QoS based scheduling system for hybrid workloads orchestration on Kubernetes. It aims to improve the runtime efficiency and reliability of both latency sensitive workloads and batch jobs, simplify the complexity of resource-related configuration tuning, and increase pod deployment density to improve resource utilizations."),(0,a.kt)("h2",{id:"key-features"},"Key Features"),(0,a.kt)("p",null,"Koordinator enhances the kubernetes user experiences in the workload management by providing the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Well-designed ",(0,a.kt)("a",{parentName:"li",href:"/docs/architecture/priority"},"priority")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/architecture/qos"},"QoS")," mechanism to co-locate different types of workloads in a cluster and run different types of pods on a single node.\nAllowing for resource overcommitments to achieve high resource utilizations but still satisfying the QoS guarantees by leveraging an application profiling mechanism."),(0,a.kt)("li",{parentName:"ul"},"Fine-grained resource orchestration and isolation mechanism to improve the efficiency of latency-sensitive workloads and batch jobs."),(0,a.kt)("li",{parentName:"ul"},"Flexible job scheduling mechanism to support workloads in specific areas, e.g., big data, AI, audio and video."),(0,a.kt)("li",{parentName:"ul"},"A set of tools for monitoring, troubleshooting and operations.")),(0,a.kt)("h2",{id:"node-metrics"},"Node Metrics"),(0,a.kt)("p",null,"Koordinator defines the ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeMetrics")," CRD, which is used to record the resource utilization of a single node and all Pods on the node. koordlet will regularly report and update ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeMetrics"),". You can view ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeMetrics")," with the following commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get nodemetrics node-1 -o yaml\napiVersion: slo.koordinator.sh/v1alpha1\nkind: NodeMetric\nmetadata:\n  creationTimestamp: "2022-03-30T11:50:17Z"\n  generation: 1\n  name: node-1\n  resourceVersion: "2687986"\n  uid: 1567bb4b-87a7-4273-a8fd-f44125c62b80\nspec: {}\nstatus:\n  nodeMetric:\n    nodeUsage:\n      resources:\n        cpu: 138m\n        memory: "1815637738"\n  podsMetric:\n  - name: storage-service-6c7c59f868-k72r5\n    namespace: default\n    podUsage:\n      resources:\n        cpu: "300m"\n        memory: 17828Ki\n')),(0,a.kt)("h2",{id:"colocation-resources"},"Colocation Resources"),(0,a.kt)("p",null,"After the Koordinator is deployed in the K8s cluster, the Koordinator will calculate the CPU and Memory resources that have been allocated but not used according to the data of ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeMetrics"),". These resources are updated in Node in the form of extended resources. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"koordinator.sh/batch-cpu")," represents the CPU resources for Best Effort workloads,\n",(0,a.kt)("inlineCode",{parentName:"p"},"koordinator.sh/batch-memory")," represents the Memory resources for Best Effort workloads. "),(0,a.kt)("p",null,"You can view these resources with the following commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl describe node node-1\nName:               node-1\n....\nCapacity:\n  cpu:                          8\n  ephemeral-storage:            103080204Ki\n  koordinator.sh/batch-cpu:     4541\n  koordinator.sh/batch-memory:  17236565027\n  memory:                       32611012Ki\n  pods:                         64\nAllocatable:\n  cpu:                          7800m\n  ephemeral-storage:            94998715850\n  koordinator.sh/batch-cpu:     4541\n  koordinator.sh/batch-memory:  17236565027\n  memory:                       28629700Ki\n  pods:                         64\n")),(0,a.kt)("h2",{id:"cluster-level-colocation-profile"},"Cluster-level Colocation Profile"),(0,a.kt)("p",null,"In order to make it easier for everyone to use Koordinator to co-locate different workloads, we defined ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterColocationProfile")," to help gray workloads use co-location resources. A ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterColocationProfile")," is CRD like the one below. Please do edit each parameter to fit your own use cases."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: config.koordinator.sh/v1alpha1\nkind: ClusterColocationProfile\nmetadata:\n  name: colocation-profile-example\nspec:\n  namespaceSelector:\n    matchLabels:\n      koordinator.sh/enable-colocation: "true"\n  selector:\n    matchLabels:\n      sparkoperator.k8s.io/launched-by-spark-operator: "true"\n  qosClass: BE\n  priorityClassName: koord-batch\n  koordinatorPriority: 1000\n  schedulerName: koord-scheduler\n  labels:\n    koordinator.sh/mutated: "true"\n  annotations: \n    koordinator.sh/intercepted: "true"\n  patch:\n    spec:\n      terminationGracePeriodSeconds: 30\n')),(0,a.kt)("p",null,"Various Koordinator components ensure scheduling and runtime quality through labels ",(0,a.kt)("inlineCode",{parentName:"p"},"koordinator.sh/qosClass"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"koordinator.sh/priority")," and kubernetes native priority."),(0,a.kt)("p",null,"With the webhook mutating mechanism provided by Kubernetes, koord-manager will modify Pod resource requirements to co-located resources, and inject the QoS and Priority defined by Koordinator into Pod."),(0,a.kt)("p",null,"Taking the above Profile as an example, when the Spark Operator creates a new Pod in the namespace with the ",(0,a.kt)("inlineCode",{parentName:"p"},"koordinator.sh/enable-colocation=true")," label, the Koordinator QoS label ",(0,a.kt)("inlineCode",{parentName:"p"},"koordinator.sh/qosClass")," will be injected into the Pod. According to the Profile definition PriorityClassName, modify the Pod's PriorityClassName and the corresponding Priority value. Users can also set the Koordinator Priority according to their needs to achieve more fine-grained priority management, so the Koordinator Priority label ",(0,a.kt)("inlineCode",{parentName:"p"},"koordinator.sh/priority")," is also injected into the Pod. Koordinator provides an enhanced scheduler koord-scheduler, so you need to modify the Pod's scheduler name koord-scheduler through Profile."),(0,a.kt)("p",null,"If you expect to integrate Koordinator into your own system, please learn more about the ",(0,a.kt)("a",{parentName:"p",href:"/docs/architecture/overview"},"core concepts"),"."),(0,a.kt)("h2",{id:"cpu-suppress"},"CPU Suppress"),(0,a.kt)("p",null,"In order to ensure the runtime quality of different workloads in co-located scenarios, Koordinator uses the CPU Suppress mechanism provided by koordlet on the node side to suppress workloads of the Best Effort type when the load increases. Or increase the resource quota for Best Effort type workloads when the load decreases."),(0,a.kt)("p",null,"When installing through the helm chart, the ConfigMap ",(0,a.kt)("inlineCode",{parentName:"p"},"slo-controller-config")," will be created in the koordinator-system namespace, and the CPU Suppress mechanism is enabled by default. If it needs to be closed, refer to the configuration below, and modify the configuration of the resource-threshold-config section to take effect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: slo-controller-config\n  namespace: {{ .Values.installation.namespace }}\ndata:\n  ...\n  resource-threshold-config: |\n    {\n      "clusterStrategy": {\n        "enable": false\n      }\n    }\n')),(0,a.kt)("h2",{id:"colocation-resources-balance"},"Colocation Resources Balance"),(0,a.kt)("p",null,"Koordinator currently adopts a strategy for node co-location resource scheduling, which prioritizes scheduling to machines with more resources remaining in co-location to avoid Best Effort workloads crowding together. More rich scheduling capabilities are on the way."),(0,a.kt)("h2",{id:"tutorial---colocation-of-spark-jobs"},"Tutorial - Colocation of Spark Jobs"),(0,a.kt)("p",null,"Apache Spark is an analysis engine for large-scale data processing, which is widely used in Big Data, SQL Analysis and Machine Learning scenarios.\nWe provide a tutorial to help you how to quickly use Koordinator to run Spark Jobs in colocation mode with other latency sensitive applications. For more details, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/best-practices/colocation-of-spark-jobs"},"tutorial"),"."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Fore More details, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs"},"Documentation"),". Hope it helps!"))}h.isMDXComponent=!0}}]);