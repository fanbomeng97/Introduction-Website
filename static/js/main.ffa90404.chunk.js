(window["webpackJsonpintroduction-website"]=window["webpackJsonpintroduction-website"]||[]).push([[0],{139:function(e,t,a){e.exports=a.p+"static/media/background.451c266f.jpg"},150:function(e,t,a){e.exports=a(292)},155:function(e,t,a){},156:function(e,t,a){},288:function(e,t,a){},292:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(37),r=a.n(i),l=(a(155),a(19)),c=a(20),s=a(23),m=a(21),d=a(24),u=a(300),h=a(296),p=a(140),g=a(45),f=a(33),E=(a(156),a(17)),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a.state={activeItem:a.props.activeItem},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return o.a.createElement(u.a,{fixed:"top",id:"menu",pointing:!0,secondary:!0,size:"huge"},o.a.createElement(h.a,null,E.isBrowser||E.isTablet?o.a.createElement(u.a.Item,{as:f.b,to:"/home",style:{padding:"1em 2em"}},o.a.createElement(p.a,{src:"Images/logo_with_title.png",size:"small"})):"",o.a.createElement(u.a.Item,{name:"Home",active:"Home"===e,onClick:this.handleItemClick,as:f.b,to:"/home"},o.a.createElement(g.a,{name:"home"}),E.isBrowser||E.isTablet?"Home":""),o.a.createElement(u.a.Item,{name:"Introduction",active:"Introduction"===e,onClick:this.handleItemClick,as:f.b,to:"/intro"},o.a.createElement(g.a,{name:"list ul"}),E.isBrowser||E.isTablet?"Introduction":""),o.a.createElement(u.a.Item,{name:"Group members",active:"Group members"===e,onClick:this.handleItemClick,as:f.b,to:"/group"},o.a.createElement(g.a,{name:"users"}),E.isBrowser||E.isTablet?"Group Members":""),o.a.createElement(u.a.Item,{name:"github",as:"a",active:"github"===e,onClick:this.handleItemClick,href:"https://github.com/nbckr/HoloRepository-Core",position:"right"},o.a.createElement(g.a,{name:"github"}),E.isBrowser||E.isTablet?"GitHub":"")))}}]),t}(n.Component),b=(a(288),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement(p.a,{src:"Images/logos.png",style:{width:"814px",height:"58.5px",display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:"2em"}}),o.a.createElement("div",null,"Copyright (C) 2019 University College London"),o.a.createElement("div",null,"Read our"," ",o.a.createElement("a",{href:"https://github.com/nbckr/HoloRepository-Core"},"Source Code")," and"," ",o.a.createElement("a",{href:"https://www.gnu.org/licenses/agpl-3.0.en.html"},"Licence")))}}]),t}(n.Component)),w=a(139),v=a.n(w),S=a(303),k=a(299),I=a(302),C=a(301),z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,{activeItem:"Home"}),o.a.createElement("div",{style:{minHeight:700,backgroundImage:"url(".concat(v.a,")"),backgroundPosition:"center",backgroundSize:"cover",marginTop:"5"}},o.a.createElement(S.a,{style:{backgroundColor:"rgba(0,0,0,0.5)",backgroundPosition:"center",backgroundSize:"cover",height:700}},o.a.createElement(h.a,{textAlign:"center"},o.a.createElement("p",{style:{fontSize:E.isBrowser||E.isTablet?"6em":"3em",fontWeight:"normal",color:"white",marginTop:150}},"HoloRepository"),o.a.createElement("p",{style:{fontSize:E.isBrowser||E.isTablet?"1.8em":"1.2em",fontWeight:"normal",color:"white"}},"A system for transforming medical imaging studies such as CT or MRI scans into 3-dimensional holograms, storing data on a cloud-based platform and making it available for other systems."),o.a.createElement(k.a,{primary:!0,size:"huge",as:f.b,to:"/intro",style:{marginTop:50}},"Start Explore",o.a.createElement(g.a,{name:"right arrow"}))))),o.a.createElement(S.a,{style:{padding:"8em 0em"},vertical:!0},o.a.createElement(h.a,{textAlign:"justified"},o.a.createElement(I.a,{container:!0,stackable:!0,verticalAlign:"middle"},o.a.createElement(I.a.Row,null,o.a.createElement(I.a.Column,{width:8},o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"HoloRepository UI"),o.a.createElement("p",{style:{fontSize:"1.1em"}},"A web-based application that allows practitioners to browse their patients and manage the generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side application is accompanied by an API server that is responsible for communicating with the other components."),o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"HoloStorage and Accessor"),o.a.createElement("p",{style:{fontSize:"1.1em"}},"A cloud-based storage for medical 3D models and associated metadata. Entirely hosted on Microsoft Azure, a FHIR server stores the structured medical data and a Blob Storage server provides for the binary holographic data."),o.a.createElement("p",{style:{fontSize:"1.1em"}},"An enhanced facade, offering a consistent interface to the HoloStorage and translating the public REST API to internal FHIR queries. To facilitate development of 3rd party components, the interface comes with an interactive OpenAPI documentation.")),o.a.createElement(I.a.Column,{floated:"right",width:8},o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"HoloPipelines"),o.a.createElement("p",{style:{fontSize:"1.1em"}},"A cloud-based service that performs the automatic generation of 3D models from 2D image stacks. Pre-trained neural network models are deployed and accessed with this component alongside traditional techniques like Hounsfield value thresholding."),o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"HoloLens App and StorageConnector"),o.a.createElement("p",{style:{fontSize:"1.1em"}},"A simple application that demonstrates how to dynamically access 3D models stored in the HoloStorage. The scenes can be distributed alongside the Connector library and serve as examples and interactive documentation."),o.a.createElement("p",{style:{fontSize:"1.1em"}},"A Unity library handling the runtime network connections from HoloLens applications to the HoloStorage. Distributed as a separate UnityPackage, this is meant to facilitate development of 3rd party applications that plug into the HoloRepository ecosystem.")))))),o.a.createElement(b,null))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),t}(n.Component),A=a(297),R=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,{activeItem:"Group members"}),o.a.createElement(S.a,{vertical:!0},o.a.createElement(C.a,{textAlign:"center",as:"h1",content:"Group Members",style:{fontSize:"4em",fontWeight:"normal",marginBottom:0,marginTop:"2em"}}),o.a.createElement(I.a,{container:!0,style:{padding:"5em 0em"}},o.a.createElement(I.a.Row,null,o.a.createElement("p",{style:{padding:"0em 1em"}},"(Sorted by alphabetical)")),o.a.createElement(I.a.Row,null,o.a.createElement(I.a.Column,{width:3},o.a.createElement(p.a,{src:"Images/niels.jpg",circular:!0})),o.a.createElement(I.a.Column,{width:13},o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"Boecker, Niels"),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Team leader")),o.a.createElement("p",{style:{fontSize:"1.2em"}},"Team leader"),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Email:")," niels.boecker.18@ucl.ac.uk"))),o.a.createElement(A.a,null),o.a.createElement(I.a.Row,null,o.a.createElement(I.a.Column,{width:3},o.a.createElement(p.a,{src:"Images/wenjie.png",circular:!0})),o.a.createElement(I.a.Column,{width:13},o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"Boon, Wenjie"),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Team member")),o.a.createElement("p",{style:{fontSize:"1.2em"}},"A web-based application that allows practitioners to browse their patients and manage the generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side application is accompanied by an API server that is responsible for communicating with the other components."),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Email:")," wenjie.boon.18@ucl.ac.uk"))),o.a.createElement(A.a,null),o.a.createElement(I.a.Row,null,o.a.createElement(I.a.Column,{width:3},o.a.createElement(p.a,{src:"https://react.semantic-ui.com/images/wireframe/image.png",circular:!0})),o.a.createElement(I.a.Column,{width:13},o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"Boonyaprasert, Udomkarn"),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Team member")),o.a.createElement("p",{style:{fontSize:"1.2em"}},"A web-based application that allows practitioners to browse their patients and manage the generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side application is accompanied by an API server that is responsible for communicating with the other components."),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Email:")," udomkarn.boonyaprasert.17@ucl.ac.uk"))),o.a.createElement(A.a,null),o.a.createElement(I.a.Row,null,o.a.createElement(I.a.Column,{width:3},o.a.createElement(p.a,{src:"Images/fanbo.png",circular:!0})),o.a.createElement(I.a.Column,{width:13},o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"Meng, Fanbo"),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Team member")),o.a.createElement("p",{style:{fontSize:"1.2em"}},"A web-based application that allows practitioners to browse their patients and manage the generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side application is accompanied by an API server that is responsible for communicating with the other components."),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Email:")," fanbo.meng.18@ucl.ac.uk"))),o.a.createElement(A.a,null),o.a.createElement(I.a.Row,null,o.a.createElement(I.a.Column,{width:3},o.a.createElement(p.a,{src:"https://react.semantic-ui.com/images/wireframe/image.png",circular:!0})),o.a.createElement(I.a.Column,{width:13},o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"Wong, Ka Wai"),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Team member")),o.a.createElement("p",{style:{fontSize:"1.2em"}},"A web-based application that allows practitioners to browse their patients and manage the generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side application is accompanied by an API server that is responsible for communicating with the other components."),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Email:")," ka.wong.18@ucl.ac.uk"))))),o.a.createElement(b,null))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),t}(n.Component),H=a(298),T=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,{activeItem:"Introduction"}),o.a.createElement(C.a,{textAlign:"center",as:"h1",content:"Introduction",style:{fontSize:"4em",fontWeight:"normal",marginBottom:0,marginTop:"2em"}}),o.a.createElement(S.a,{style:{padding:"5em 0em"},vertical:!0},o.a.createElement(h.a,{textAlign:"justified"},o.a.createElement(I.a,{container:!0,stackable:!0,verticalAlign:"middle"},o.a.createElement(I.a.Column,{width:16},o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"Background"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"Recent technical advancements in the realm of augmented reality (AR) and the availability of consumer head-mounted display (HMD) devices such as the Microsoft HoloLens have opened a wealth of opportunities for healthcare applications, particularly in medical imaging. Several approaches have been proposed to transform imaging studies, such as CT or MRI scans, into three-dimensional models which can be inspected and manipulated in an AR experience [1\u20134]. Generally, all studies agree that the technology is very promising and may even revolutionise the practice of medicine [5]. However, virtually every existing workflow relies on significant manual guidance to conduct steps like segmentation or conversion to polygonal models."),o.a.createElement("p",{style:{fontSize:"1.2em"}},"Neural networks can help automate many tedious tasks and are increasingly used in medical imaging. Architectures such as the 3D U-Net [6] generate models which autonomously create segmentation maps, even with relatively little training data. However, translating these advancements from theory to clinical practice has unique challenges: The source code may not be available, documentation may be missing or require too much technical knowledge. Furthermore, different operating systems, software packages and dependencies obstruct successful usage [7]."),o.a.createElement("p",{style:{fontSize:"1.2em"}},"With the HoloRepository project, we intend to build the technical base for a seamless workflow that allows practitioners to generate 3D models from imaging studies and access them in an AR setting with as little manual involvement as possible. Pre-trained neural networks can be packaged into shareable Docker containers and accessed with a unified interface. Additionally, the Fast Healthcare Interoperability Resources (FHIR) standard, which is rapidly being adapted and also has a significant impact on the field of radiology [8], will connect the 3D models with existing patient health records."),o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"HoloRepositoryUI"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"A web-based application that allows practitioners to browse their patients and manage the generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side application is accompanied by an API server that is responsible for communicating with the other components."),o.a.createElement(A.a,null),o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"HoloPipelines"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"A cloud-based service that performs the automatic generation of 3D models from 2D image stacks. Pre-trained neural network models are deployed and accessed with this component alongside traditional techniques like Hounsfield value thresholding."),o.a.createElement(A.a,null),o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"HoloStorage"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"A cloud-based storage for medical 3D models and associated metadata. Entirely hosted on Microsoft Azure, a FHIR server stores the structured medical data and a Blob Storage server provides for the binary holographic data."),o.a.createElement(A.a,null),o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"HoloStorageAccessor"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"An enhanced facade, offering a consistent interface to the HoloStorage and translating the public REST API to internal FHIR queries. To facilitate development of 3rd party components, the interface comes with an interactive OpenAPI documentation."),o.a.createElement(A.a,null),o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"HoloStorageConnector"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"A Unity library handling the runtime network connections from HoloLens applications to the HoloStorage. Distributed as a separate UnityPackage, this is meant to facilitate development of 3rd party applications that plug into the HoloRepository ecosystem."),o.a.createElement(A.a,null),o.a.createElement(C.a,{as:"h3",style:{fontSize:"2em"}},"HoloRepository demo application"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"A simple application that demonstrates how to dynamically access 3D models stored in the HoloStorage. The scenes can be distributed alongside the Connector library and serve as examples and interactive documentation."))),o.a.createElement(H.a,{fluid:!0,style:{marginTop:"3em"}},o.a.createElement(H.a.Content,null,o.a.createElement(H.a.Header,null,"References")),o.a.createElement(H.a.Content,null,o.a.createElement("p",null,"[1] Smith CM. Medical Imaging in Mixed Reality: A holographics software pipeline. University College London, 2018."),o.a.createElement("p",null,"[2] Pratt P, Ives M, Lawton G, Simmons J, Radev N, Spyropoulou L, et al. Through the HoloLensTM looking glass: augmented reality for extremity reconstruction surgery using 3D vascular models with perforating vessels. Eur Radiol Exp 2018;2:2. doi:10.1186/s41747-017-0033-2."),o.a.createElement("p",null,"[3] Affolter R, Eggert S, Sieberth T, Thali M, Ebert LC. Applying augmented reality during a forensic autopsy\u2014Microsoft HoloLens as a DICOM viewer. Journal of Forensic Radiology and Imaging 2019;16:5\u20138. doi:10.1016/j.jofri.2018.11.003."),o.a.createElement("p",null,"[4] Page M. Visualization of Complex Medical Data Using Next-Generation Holographic Techniques 2017."),o.a.createElement("p",null,"[5] Beydoun A, Gupta V, Siegel E. DICOM to 3D Holograms: Use Case for Augmented Reality in Diagnostic and Interventional Radiology. SIIM Scientific Session Posters and Demonstrations 2017:4."),o.a.createElement("p",null,"[6] \xc7i\xe7ek \xd6, Abdulkadir A, Lienkamp SS, Brox T, Ronneberger O. 3D U-Net: Learning Dense Volumetric Segmentation from Sparse Annotation. ArXiv:160606650 [Cs] 2016."),o.a.createElement("p",null,"[7] Beers A, Brown J, Chang K, Hoebel K, Gerstner E, Rosen B, et al. DeepNeuro: an open-source deep learning toolbox for neuroimaging. ArXiv:180804589 [Cs] 2018."),o.a.createElement("p",null,"[8] Kamel PI, Nagy PG. Patient-Centered Radiology with FHIR: an Introduction to the Use of FHIR to Offer Radiology a Clinically Integrated Platform. J Digit Imaging 2018;31:327\u201333. doi:10.1007/s10278-018-0087-6."))))),o.a.createElement(b,null))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),t}(n.Component),j=a(35),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f.a,null,o.a.createElement(j.c,null,o.a.createElement(j.a,{exact:!0,path:"/",render:function(){return o.a.createElement(z,null)}}),o.a.createElement(j.a,{exact:!0,path:"/home",render:function(){return o.a.createElement(z,null)}}),o.a.createElement(j.a,{exact:!0,path:"/intro",render:function(){return o.a.createElement(T,null)}}),o.a.createElement(j.a,{exact:!0,path:"/group",render:function(){return o.a.createElement(R,null)}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[150,1,2]]]);
//# sourceMappingURL=main.ffa90404.chunk.js.map