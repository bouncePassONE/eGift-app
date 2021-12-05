(this["webpackJsonpbouncer-app"]=this["webpackJsonpbouncer-app"]||[]).push([[0],{219:function(e,t,a){},234:function(e,t){},236:function(e,t){},240:function(e,t){},241:function(e,t){},268:function(e,t){},270:function(e,t){},281:function(e,t){},283:function(e,t){},293:function(e,t){},295:function(e,t){},311:function(e,t){},345:function(e,t){},346:function(e,t){},416:function(e,t){},418:function(e,t){},423:function(e,t){},425:function(e,t){},432:function(e,t){},444:function(e,t){},447:function(e,t){},452:function(e,t){},524:function(e,t,a){},526:function(e,t,a){"use strict";a.r(t);var n,l,r,s,c,i,o,C,d,h,u,m,p,f,y,b,g,x,L,j,E=a(2),w=a.n(E),O=a(209),v=a.n(O),M=(a(219),a(31)),N=a.n(M),S=a(210),Z=a(5),A=a(6),k=a(64),P=a(11),F=a(10),_=a(112),B=a.n(_),T=(a(524),[{stateMutability:"nonpayable",type:"constructor",inputs:[],outputs:[]},{stateMutability:"payable",type:"function",name:"bouncePassONE",inputs:[{name:"_myAddress",type:"address"},{name:"_proxyAddress",type:"address"},{name:"_passwordKeccak",type:"bytes32"},{name:"_gasNeeded",type:"uint256"}],outputs:[],gas:108864},{stateMutability:"nonpayable",type:"function",name:"grabONE",inputs:[{name:"_receiverAddress",type:"address"},{name:"_password",type:"bytes32"}],outputs:[],gas:27648},{stateMutability:"nonpayable",type:"function",name:"bounceBackONE",inputs:[],outputs:[],gas:27498},{stateMutability:"view",type:"function",name:"myAddress",inputs:[],outputs:[{name:"",type:"address"}],gas:2478},{stateMutability:"view",type:"function",name:"passwordKeccak",inputs:[],outputs:[{name:"",type:"bytes32"}],gas:2508}]),z=["title","titleId"];function G(){return G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},G.apply(this,arguments)}function I(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}function R(e,t){var a=e.title,w=e.titleId,O=I(e,z);return E.createElement("svg",G({viewBox:"-373.488 -84.784 320 160",width:320,height:160,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":w},O),a?E.createElement("title",{id:w},a):null,E.createElement("defs",null,E.createElement("linearGradient",{gradientUnits:"userSpaceOnUse",x1:160,y1:0,x2:160,y2:160,id:"gradient-0",spreadMethod:"pad",gradientTransform:"matrix(1, 0, 0, 1, -373.487549, -84.783524)"},E.createElement("stop",{offset:0,style:{stopColor:"rgba(0, 179, 228, 1)"}}),E.createElement("stop",{offset:1,style:{stopColor:"rgba(0, 99, 126, 1)"}})),n||(n=E.createElement("linearGradient",{id:"paint0_linear",x1:16.6931,y1:0,x2:-6.32521,y2:23.0183,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(1, 0, 0, 1, -18.766153, -79.936021)"},E.createElement("stop",{stopColor:"#00E8A2"}),E.createElement("stop",{offset:1,stopColor:"#00ADE8"}))),l||(l=E.createElement("style",null,".cls-1{isolation:isolate;}.cls-2{fill:#0dafdc;}.cls-3{fill:#fff;}.cls-4{fill:#231f20;opacity:0.2;mix-blend-mode:multiply;}.cls-5{fill:#98c33c;}.cls-6{fill:#e4213e;}"))),E.createElement("g",null,E.createElement("rect",{style:{fillRule:"nonzero",fill:"url(#gradient-0)",paintOrder:"fill",stroke:"rgb(0, 153, 195)"},width:320,height:160,rx:24,ry:24,x:-373.488,y:-84.784}),E.createElement("g",{transform:"matrix(1, 0, 0, 1, -341.078735, 13.092591)"},r||(r=E.createElement("path",{d:"M 7.466 -79.936 C 3.526 -79.936 0.312 -76.722 0.208 -72.782 L 0.208 -64.798 C -0.518 -64.798 -1.244 -64.694 -2.073 -64.694 C -2.903 -64.694 -3.628 -64.694 -4.354 -64.591 L -4.354 -72.782 C -4.354 -76.722 -7.672 -79.936 -11.716 -79.832 C -15.552 -79.832 -18.663 -76.618 -18.766 -72.782 L -18.766 -53.704 C -18.663 -49.764 -15.448 -46.55 -11.405 -46.653 C -7.465 -46.757 -4.354 -49.868 -4.354 -53.704 L -4.354 -61.688 C -3.628 -61.688 -2.903 -61.791 -2.073 -61.791 C -1.244 -61.791 -0.518 -61.791 0.208 -61.895 L 0.208 -53.808 C 0.312 -49.868 3.526 -46.653 7.569 -46.757 C 11.509 -46.861 14.62 -49.971 14.62 -53.808 L 14.62 -72.782 C 14.62 -76.722 11.406 -79.936 7.466 -79.936 Z M -11.508 -77.033 C -9.124 -77.033 -7.257 -75.166 -7.257 -72.782 L -7.257 -64.383 C -9.331 -64.072 -11.405 -63.45 -13.375 -62.621 C -14.204 -62.206 -15.034 -61.791 -15.759 -61.169 L -15.759 -72.782 C -15.759 -75.063 -13.893 -77.033 -11.508 -77.033 Z M -7.257 -53.704 C -7.257 -51.319 -9.124 -49.453 -11.508 -49.453 C -13.893 -49.453 -15.759 -51.319 -15.759 -53.704 L -15.759 -55.57 C -15.759 -57.229 -14.411 -58.888 -12.13 -59.821 C -10.575 -60.547 -8.916 -60.962 -7.154 -61.273 L -7.257 -53.704 Z M 7.466 -49.453 C 5.081 -49.453 3.215 -51.319 3.215 -53.704 L 3.215 -62.102 C 5.288 -62.413 7.362 -63.035 9.332 -63.865 C 10.162 -64.28 10.991 -64.694 11.717 -65.317 L 11.717 -53.704 C 11.717 -51.319 9.747 -49.453 7.466 -49.453 Z M 8.088 -66.561 C 6.533 -65.835 4.874 -65.42 3.111 -65.109 L 3.111 -72.782 C 3.111 -75.166 4.977 -77.033 7.362 -77.033 C 9.747 -77.033 11.613 -75.166 11.613 -72.782 L 11.613 -70.915 C 11.717 -69.153 10.369 -67.598 8.088 -66.561 Z",fill:"url(#paint0_linear)"})),s||(s=E.createElement("path",{d:"M 111.046 -68.428 C 106.588 -68.428 102.855 -64.799 102.959 -60.237 C 102.959 -55.778 106.588 -52.046 111.15 -52.149 C 115.608 -52.149 119.237 -55.778 119.237 -60.34 C 119.237 -64.695 115.608 -68.428 111.046 -68.428 Z M 116.541 -60.237 C 116.541 -57.23 114.053 -54.741 111.046 -54.741 C 108.039 -54.741 105.551 -57.23 105.551 -60.237 C 105.551 -63.243 108.039 -65.732 111.046 -65.732 C 114.157 -65.732 116.541 -63.243 116.541 -60.237 Z",fill:"white"})),E.createElement("path",{d:"M 62.105 -68.323 C 61.38 -68.323 60.758 -67.701 60.758 -66.975 L 60.758 -66.249 C 57.44 -69.256 52.255 -69.049 49.249 -65.731 C 46.242 -62.413 46.449 -57.229 49.767 -54.222 C 52.878 -51.319 57.647 -51.319 60.758 -54.222 L 60.758 -53.496 C 60.758 -52.77 61.276 -52.148 62.002 -52.148 C 62.728 -52.148 63.35 -52.667 63.35 -53.393 L 63.35 -53.496 L 63.35 -66.975 C 63.453 -67.701 62.831 -68.323 62.105 -68.323 Z M 60.758 -60.236 C 60.758 -57.229 58.269 -54.74 55.262 -54.74 C 52.255 -54.74 49.767 -57.229 49.767 -60.236 C 49.767 -63.242 52.255 -65.731 55.262 -65.731 C 58.373 -65.731 60.758 -63.242 60.758 -60.236 Z",fill:"white",style:{}}),c||(c=E.createElement("path",{d:"M 76.314 -67.08 C 76.314 -66.354 75.692 -65.732 74.966 -65.732 L 74.759 -65.732 C 71.752 -65.732 69.263 -63.243 69.263 -60.237 C 69.16 -59.926 69.263 -55.778 69.263 -53.29 C 69.16 -52.564 68.538 -52.046 67.812 -52.149 C 67.19 -52.253 66.671 -52.875 66.671 -53.497 L 66.671 -66.976 C 66.671 -67.702 67.293 -68.324 68.019 -68.324 L 68.123 -68.324 C 68.849 -68.22 69.367 -67.702 69.367 -66.976 L 69.367 -66.25 C 70.819 -67.598 72.789 -68.428 74.862 -68.428 L 75.07 -68.428 C 75.692 -68.428 76.314 -67.806 76.314 -67.08 Z",fill:"white"})),i||(i=E.createElement("path",{d:"M 134.893 -61.584 L 134.893 -53.497 C 134.893 -52.771 134.271 -52.149 133.545 -52.149 C 132.819 -52.149 132.197 -52.771 132.197 -53.497 L 132.197 -54.845 L 132.197 -61.584 C 132.197 -63.865 130.331 -65.732 128.05 -65.732 C 127.946 -65.732 127.842 -65.732 127.739 -65.732 C 125.561 -65.628 123.902 -63.658 123.902 -61.481 L 123.902 -59.925 L 123.902 -54.949 L 123.902 -53.601 C 123.902 -52.875 123.28 -52.253 122.555 -52.253 C 121.829 -52.253 121.207 -52.875 121.207 -53.601 L 121.207 -66.976 C 121.207 -67.702 121.829 -68.324 122.555 -68.324 C 123.28 -68.324 123.902 -67.702 123.902 -66.976 L 123.902 -66.872 C 124.939 -67.702 126.287 -68.22 127.739 -68.324 C 131.471 -68.531 134.686 -65.628 134.789 -61.895 C 134.893 -61.792 134.893 -61.688 134.893 -61.584 Z",fill:"white"})),o||(o=E.createElement("path",{d:"M 44.585 -73.093 L 44.585 -53.393 C 44.585 -52.667 43.962 -52.045 43.237 -52.045 C 42.511 -52.045 41.889 -52.667 41.889 -53.393 L 41.889 -62.31 L 28.41 -62.31 L 28.41 -53.393 C 28.41 -52.667 27.788 -52.045 27.062 -52.045 C 26.336 -52.045 25.818 -52.667 25.818 -53.393 L 25.818 -73.093 C 25.818 -73.819 26.44 -74.441 27.166 -74.441 C 27.891 -74.441 28.514 -73.819 28.514 -73.093 L 28.514 -64.487 L 42.096 -64.487 L 42.096 -73.093 C 42.096 -73.819 42.718 -74.441 43.444 -74.441 C 43.962 -74.337 44.585 -73.819 44.585 -73.093 Z",fill:"white"})),C||(C=E.createElement("path",{d:"M 100.989 -60.962 L 100.989 -53.497 C 100.989 -52.771 100.367 -52.149 99.642 -52.149 C 98.916 -52.149 98.294 -52.771 98.294 -53.497 L 98.294 -60.236 L 98.294 -61.999 C 98.294 -64.073 96.738 -65.732 94.665 -65.732 C 92.591 -65.732 90.932 -64.176 90.932 -62.103 C 90.932 -61.999 90.932 -61.999 90.932 -61.895 L 90.932 -53.29 C 90.932 -52.564 90.414 -51.942 89.688 -51.942 C 88.962 -51.942 88.34 -52.46 88.34 -53.186 L 88.34 -53.29 L 88.34 -60.236 L 88.34 -61.999 C 88.34 -64.073 86.785 -65.732 84.711 -65.732 C 82.637 -65.732 80.978 -64.176 80.978 -62.103 C 80.978 -61.999 80.978 -61.999 80.978 -61.895 L 80.978 -53.29 C 80.978 -52.564 80.46 -51.942 79.734 -51.942 C 79.008 -51.942 78.386 -52.46 78.386 -53.186 L 78.386 -53.29 L 78.386 -66.768 C 78.386 -67.494 79.008 -68.116 79.734 -68.116 C 80.356 -68.116 80.978 -67.598 81.082 -66.976 C 83.882 -68.946 87.718 -68.427 89.792 -65.732 C 91.865 -68.531 95.909 -69.049 98.605 -66.872 C 100.16 -65.628 101.093 -63.762 101.093 -61.792 L 100.989 -60.962 Z",fill:"white"})),d||(d=E.createElement("path",{d:"M 151.068 -66.457 L 142.151 -47.172 C 141.736 -46.55 140.907 -46.342 140.285 -46.757 C 139.766 -47.068 139.455 -47.69 139.663 -48.312 L 142.047 -53.496 L 136.137 -66.457 C 135.723 -67.079 135.93 -67.908 136.552 -68.323 C 137.174 -68.738 138.004 -68.531 138.418 -67.908 C 138.418 -67.805 138.522 -67.701 138.522 -67.701 L 143.603 -56.814 L 148.683 -67.701 C 148.89 -68.427 149.72 -68.738 150.342 -68.531 C 151.068 -68.323 151.379 -67.494 151.171 -66.872 C 151.171 -66.561 151.068 -66.457 151.068 -66.457 Z",fill:"white"}))),E.createElement("text",{style:{fill:"rgb(255, 255, 255)",fillOpacity:.9,fontFamily:"Arial, sans-serif",fontSize:28,fontWeight:700,letterSpacing:1,whiteSpace:"pre"},x:-115.153,y:-46.998},"$1"),E.createElement("text",{style:{fill:"rgb(0, 232, 162)",fontFamily:"Arial, sans-serif",fontSize:16,whiteSpace:"pre"},x:-135.12,y:-27.562},"eGift Card"),E.createElement("text",{style:{fill:"rgb(255, 255, 255)",fillOpacity:.9,fontFamily:"Arial, sans-serif",fontSize:18,fontStyle:"italic",whiteSpace:"pre"},x:-279.885,y:60.558},"Happy Holidays!")),E.createElement("g",{transform:"matrix(1, 0, 0, 1, -219.236633, -38.530739)"},h||(h=E.createElement("rect",{className:"cls-5",x:-134.683,y:57.222,width:42.557,height:46.603})),u||(u=E.createElement("rect",{className:"cls-5",y:57.222,width:44.9,height:11.608,x:-135.855})),m||(m=E.createElement("rect",{className:"cls-3",x:-115.24,y:57.222,width:3.669,height:46.603})),p||(p=E.createElement("rect",{className:"cls-3",x:20.615,y:109.288,width:3.669,height:42.557,transform:"matrix(0, -1, 1, 0, -243.971573, 102.974228)"})),f||(f=E.createElement("path",{className:"cls-4",d:"M -134.683 68.83 C -134.013 68.83 -92.126 72.591 -92.126 72.591 L -92.126 68.83 Z"})),y||(y=E.createElement("rect",{className:"cls-4",x:-134.683,y:102.033,width:42.557,height:1.791})),E.createElement("path",{className:"cls-2",d:"M -117.889 28.899 L -118.086 27.159 C -118.114 26.911 -118.731 21.033 -115.191 17.802 C -113.004 15.804 -110.501 16.145 -108.99 17.368 C -107.124 18.88 -106.75 21.519 -108.081 23.785 C -110.065 27.16 -115.557 28.406 -116.177 28.538 Z M -111.762 19.561 C -112.25 19.591 -112.707 19.801 -113.046 20.151 C -114.386 21.373 -114.808 23.369 -114.924 24.856 C -113.392 24.299 -111.534 23.383 -110.824 22.173 C -110.178 21.074 -110.51 20.229 -110.994 19.838 C -111.209 19.658 -111.482 19.56 -111.762 19.561 Z",style:{fill:"rgb(205, 231, 11)"}}),E.createElement("path",{className:"cls-2",d:"M -117.786 28.899 L -119.499 28.538 C -120.119 28.406 -125.61 27.16 -127.593 23.785 C -128.925 21.519 -128.551 18.88 -126.686 17.368 C -125.173 16.144 -122.671 15.804 -120.483 17.802 C -116.944 21.033 -117.561 26.911 -117.59 27.159 Z M -123.913 19.561 C -124.193 19.56 -124.466 19.658 -124.682 19.838 C -125.164 20.229 -125.497 21.074 -124.851 22.173 C -124.141 23.383 -122.284 24.299 -120.75 24.856 C -120.866 23.369 -121.288 21.374 -122.628 20.151 C -122.968 19.802 -123.426 19.592 -123.913 19.561 Z",style:{fill:"rgb(205, 231, 11)"}}),E.createElement("rect",{className:"cls-2",x:-130.703,y:28.48,width:26.539,height:29.062,style:{fill:"rgb(205, 231, 11)"}}),E.createElement("rect",{className:"cls-2",x:-131.434,y:28.48,width:28,height:7.239,style:{fill:"rgb(205, 231, 11)"}}),b||(b=E.createElement("rect",{className:"cls-3",x:-118.578,y:28.48,width:2.288,height:29.062})),g||(g=E.createElement("rect",{className:"cls-3",x:16.729,y:48.787,width:2.288,height:26.539,transform:"matrix(0, -1, 1, 0, -179.490402, 60.884575)"})),x||(x=E.createElement("path",{className:"cls-4",d:"M -130.703 35.72 C -130.285 35.72 -104.164 38.064 -104.164 38.064 L -104.164 35.72 Z"})),L||(L=E.createElement("rect",{className:"cls-4",x:-130.703,y:56.425,width:26.539,height:1.117})),E.createElement("text",{style:{fill:"rgb(255, 255, 255)",fillOpacity:.6,fontFamily:"Arial, sans-serif",fontSize:22,fontWeight:700,letterSpacing:"0.6px",paintOrder:"fill",whiteSpace:"pre"},x:-51.206,y:68.318},"Click to Redeem")),j||(j=E.createElement("g",{transform:"matrix(0.69975, 0, 0, 0.69975, -178.948532, -65.336891)"},E.createElement("path",{className:"cls-6",d:"M -186.411 142.912 L -186.733 140.054 C -186.779 139.646 -187.793 129.993 -181.979 124.684 C -178.386 121.403 -174.274 121.961 -171.794 123.969 C -168.728 126.455 -168.113 130.789 -170.3 134.511 C -173.559 140.055 -182.58 142.102 -183.598 142.318 Z M -176.348 127.572 C -177.147 127.623 -177.898 127.968 -178.456 128.542 C -180.656 130.551 -181.351 133.828 -181.541 136.27 C -179.024 135.354 -175.973 133.852 -174.805 131.864 C -173.743 130.058 -174.291 128.67 -175.083 128.028 C -175.438 127.733 -175.886 127.572 -176.348 127.572 Z"}),E.createElement("path",{className:"cls-6",d:"M -186.24 142.912 L -189.054 142.318 C -190.072 142.102 -199.094 140.055 -202.352 134.511 C -204.537 130.789 -203.924 126.455 -200.858 123.969 C -198.376 121.96 -194.266 121.402 -190.672 124.684 C -184.858 129.993 -185.872 139.646 -185.918 140.054 Z M -196.305 127.572 C -196.766 127.572 -197.213 127.733 -197.568 128.028 C -198.36 128.67 -198.907 130.058 -197.847 131.864 C -196.679 133.852 -193.628 135.354 -191.111 136.271 C -191.301 133.828 -191.994 130.552 -194.194 128.543 C -194.753 127.969 -195.505 127.623 -196.305 127.572 Z"}),E.createElement("rect",{className:"cls-6",x:-208.475,y:158.629,width:46.147,height:30.682}),E.createElement("rect",{className:"cls-6",x:-210.54,y:141.139,width:50.278,height:17.489}),E.createElement("g",{transform:"matrix(1, 0, 0, 1, -291.254181, 122.342369)"},E.createElement("rect",{className:"cls-3",x:98.366,y:18.797,width:14.974,height:48.171}),E.createElement("rect",{className:"cls-6",x:104.112,y:17.712,width:3.482,height:49.255}),E.createElement("rect",{className:"cls-4",x:82.779,y:64.133,width:46.147,height:2.835}),E.createElement("polygon",{className:"cls-4",points:"82.779 36.287 128.927 40.059 128.927 36.287 82.779 36.287"})))))}var U=E.forwardRef(R),H=(a.p,a(13)),W=function(e){Object(P.a)(a,e);var t=Object(F.a)(a);function a(e){var n;return Object(Z.a)(this,a),(n=t.call(this,e)).state={value:"",redeemed:!1},n.handleChange=n.handleChange.bind(Object(k.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(k.a)(n)),n}return Object(A.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("eGiftCard Redeemed"),e.preventDefault()}},{key:"render",value:function(){var e=this,t=new B.a(new B.a.providers.HttpProvider("https://api.harmony.one")),a=window.location.search,n=new URLSearchParams(a),l=n.get("from"),r=n.get("to"),s=n.get("bouncer"),c=n.get("pwd"),i=n.get("pKey"),o=new t.eth.Contract(T,s),C=function(){var a=Object(S.a)(N.a.mark((function a(){var n,l;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.eth.accounts.wallet.create(0),n=t.eth.accounts.wallet.add(i),t.eth.defaultAccount=n[0],e.setState({redeemed:!0}),a.next=6,o.methods.grabONE(e.state.value,c).send({from:n.address,gasPrice:"1000000000",gas:"35000"});case 6:l=a.sent,console.log(l);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return 42!==this.state.value.length?Object(H.jsxs)("div",{className:"App",children:[Object(H.jsxs)("p",{children:["From: ",Object(H.jsx)("b",{children:l}),Object(H.jsx)("br",{}),"To: ",Object(H.jsx)("b",{children:r}),Object(H.jsx)("br",{}),"Paste Wallet Address Below: ",Object(H.jsx)("br",{})]}),Object(H.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange,placeholder:"Your Address 0x",required:!0}),Object(H.jsx)("br",{}),Object(H.jsx)("h3",{children:"Note: Live testing on Harmony Mainnet."})]}):!1===this.state.redeemed?Object(H.jsxs)("div",{className:"App",children:[Object(H.jsxs)("p",{children:["From: ",Object(H.jsx)("b",{children:l}),Object(H.jsx)("br",{}),"To: ",Object(H.jsx)("b",{children:r}),Object(H.jsx)("br",{}),"Paste Wallet Address Below: ",Object(H.jsx)("br",{})]}),Object(H.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange,placeholder:"Your Address 0x",required:!0}),Object(H.jsx)("br",{}),"0"===this.state.value.charAt(0)&&Object(H.jsx)("button",{onClick:C,alt:"eGiftCard",children:Object(H.jsx)(U,{})})]}):Object(H.jsx)("div",{children:Object(H.jsxs)("p",{children:["ONE Sucessfully redeemed to account ",this.state.value]})})}}]),a}(w.a.Component),D=W,K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,530)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),l(e),r(e),s(e)}))};v.a.render(Object(H.jsx)(w.a.StrictMode,{children:Object(H.jsx)(D,{})}),document.getElementById("root")),K()}},[[526,1,2]]]);
//# sourceMappingURL=main.70a19b98.chunk.js.map