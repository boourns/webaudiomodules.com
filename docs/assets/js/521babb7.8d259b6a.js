"use strict";(self.webpackChunkwebaudiomodules_com=self.webpackChunkwebaudiomodules_com||[]).push([[351],{364:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=i(4848),s=i(8453);const a={sidebar_position:2},o="Generate WAMs with FaustIDE",r={id:"usage/generate-with-faustide",title:"Generate WAMs with FaustIDE",description:"The FAUST IDE is a very popular tool for generating WAMs from existing FAUST code (and there are hundreds of source code example available for audio effects, instruments, etc.)",source:"@site/content/usage/generate-with-faustide.md",sourceDirName:"usage",slug:"/usage/generate-with-faustide",permalink:"/docs/usage/generate-with-faustide",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Getting Started",permalink:"/docs/usage/getting-started"},next:{title:"CDN",permalink:"/docs/usage/cdn"}},d={},l=[{value:"Online step by step tutorial",id:"online-step-by-step-tutorial",level:2}];function u(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"generate-wams-with-faustide",children:"Generate WAMs with FaustIDE"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://faustide.grame.fr/",children:"The FAUST IDE"})," is a very popular tool for generating WAMs from existing FAUST code (and there are hundreds of source code example available for audio effects, instruments, etc.)"]}),"\n",(0,n.jsx)(t.p,{children:"Faust is a popular functional programming language for DSP programming; thousands of source code for audio effects, instruments, and more generally DSP algorithms, filters etc. are available in the open source community, or included in the distribution and in the online IDE. The Faust compiler supports exporting to a variety of platforms and standards, including Web Audio Modules. Since 2014, Faust DSPs can be compiled to JavaScript-compatible binary code and dynamically run the DSP within the browser. In 2022, a new version of the Faust WebAssembly compiler named faustwasm, which provides TypeScript and JavaScript wrappers for Faust DSPs, was released. It allows to generate static self-contained html pages or JavaScript modules (including the Faust code as a WebAssembly module and various additional resources), or even to integrate the libfaust compiler in applications which need to dynamically compile and deploy Faust DSP programs. The library can be used either in Node.js based projects or in web browsers and is published on NPM."}),"\n",(0,n.jsx)(t.p,{children:"Furthermore, an official online Faust IDE has been developed since 2019 using modern web technologies such as WebAssembly and AudioWorklet, offering various testing, debugging and audio visualization features, allowing connecting to different kinds of audio/MIDI inputs and outputs, making easier the development of wasm WAM plugins, with a standard CSS based GUI (auto-generated, see screenshot below) or with a custom GUI that can be designed with an embedded GUI Builder."}),"\n",(0,n.jsx)(t.p,{children:"A step by step tutorial about how to build WAM plugins is available online (see further in this page). Starting from an existing Faust code, it takes a few seconds to execute in the IDE, verify, export (download as a zip file), publish online, and run a WAM plugin."}),"\n",(0,n.jsx)(t.p,{children:"Example of a physical modeled Flute in the Faust IDE:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://i.ibb.co/NmHjCjj/faust-IDE1.jpg",alt:"A physical modeled Flute in the Faust IDE"})}),"\n",(0,n.jsx)(t.p,{children:"The same flute with a custom GUI made with the embedded GUI Builder. Once published the final WAM can be downloaded as a zip file or tried online (URIs are generated for both versions: the one with the CSS based GUI and the one with the custom GUI)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://i.ibb.co/8PLjQ36/faust-IDE3.jpg",alt:"The same flute with a custom GUI made with the embedded GUI Builder"})}),"\n",(0,n.jsx)(t.h2,{id:"online-step-by-step-tutorial",children:"Online step by step tutorial"}),"\n",(0,n.jsx)(t.p,{children:"This tutorial will tell you about how to use the FAUST code IDE and its integrated WAM GUI Builder for designing and publishing WAMs rapidly."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.google.com/document/d/1HDEm4m_cD47YBuDilzGYiANYQDktj56Njyv0umGYO6o/edit#heading=h.lhqrbk1zktwy",children:"https://docs.google.com/document/d/1HDEm4m_cD47YBuDilzGYiANYQDktj56Njyv0umGYO6o/edit#heading=h.lhqrbk1zktwy"})}),"\n",(0,n.jsx)("iframe",{style:{width:"100%",height:500},src:"https://docs.google.com/document/d/1HDEm4m_cD47YBuDilzGYiANYQDktj56Njyv0umGYO6o/edit#heading=h.lhqrbk1zktwy"})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var n=i(6540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);