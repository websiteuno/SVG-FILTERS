$(document).ready(function(){function e(e,t){$(e).click(function(){$("img").removeClass().addClass(t)})}function t(){$(O).click(function(){var e=document.getElementsByTagName("body"),t=r[~~(Math.random()*r.length)];$(e).each(function(){$(e).addClass(t),setTimeout(function(){$(e).removeClass(t)},3500)})})}function n(){$(m).animate({left:"-100%"},400),$("img").removeClass()}function a(){$(m).animate({left:"0"},400).addClass("panel-bottom").css("height",l)}function i(){$("#holder").css("height",c)}function o(e,t){$(e).click(function(){$(t).removeClass("hide")})}var r=["saturate","saturotate","rotamatrix","tablen","dishue","matrix","matrix-dos","huerotate","luminance","discrete","discrete-dos","table","table-dos","identity","linear","gamma","turbulence","sepia","turbu-map","fematrix-uno","fematrix-dos","map-uno","map-dos","blur-uno","blur-dos","morpho-uno","morpho-dos","multitable","begamma","bulence"],l=$(".section-buttons").outerHeight()+15,u=$("picture").find("img"),c=$(u).outerHeight(),s=$(".section-buttons").find("button"),d=$("#panel-btn-close"),m=$(".panel"),p=($(".panel-info"),$(".panel-input")),f=$(".btn-saturate"),b=$(".btn-saturotate"),x=$(".btn-rotamatrix"),y=$(".btn-tablen"),h=$(".btn-multitable"),g=$(".btn-dishue"),v=$(".btn-matrix"),B=$(".btn-matrix-dos"),C=$(".btn-hueRotate"),E=$(".btn-luminance"),G=$(".btn-discrete"),I=$(".btn-discrete-dos"),z=$(".btn-table"),F=$(".btn-table-dos"),T=$(".btn-identity"),k=$(".btn-linear"),M=$(".btn-gamma"),R=$(".btn-turbulence"),S=$(".btn-sepia"),V=$(".btn-turbu-map"),j=$(".btn-con-matrix-uno"),A=$(".btn-con-matrix-dos"),H=$(".btn-map-uno"),N=$(".btn-map-dos"),U=$(".btn-blur-uno"),q=$(".btn-blur-dos"),w=$(".btn-morpho-uno"),D=$(".btn-morpho-dos"),O=$(".btn-poison"),J=$(".btn-begamma"),K=$(".btn-bulence"),L=$("#panel-saturate"),P=$("#panel-huerotate"),Q=$("#panel-luminance"),W=$("#panel-linear"),X=$("#panel-turbulence"),Y=$("#panel-gamma"),Z=$("#panel-blur"),_=$("#panel-morpho"),ee=$("#panel-morpho-dilate"),te=$("#panel-saturotate"),ne=$("#panel-discrete"),ae=$("#panel-discrete-dos"),ie=$("#panel-matrix"),oe=$("#panel-matrix-dos"),re=document.getElementById("panel-code-saturate"),le=document.getElementById("panel-code-huerotate");$(re).text('<filter id="saturate-customize">\n <feColorMatrix type="saturate" values="14"/>\n</filter>'),$(le).text('<filter id="huerotate-customize">\n <feColorMatrix type="hueRotate" values="90"/>\n</filter>');var ue=document.getElementById("panel-code-gamma");$(ue).text('<filter id="gamma-customize">\n<feComponentTransfer>\n<feFuncR type="gamma" amplitude="1" exponent="1"/>\n<feFuncG type="gamma" amplitude="0.4" exponent="0.25"/>\n<feFuncB type="gamma" amplitude="1" exponent="1"/>\n</feComponentTransfer>\n</filter>');var ce=document.getElementById("panel-code-blur");$(ce).text('<filter id="blur-customize">\n <feGaussianBlur stdDeviation="3"/>\n</filter>');var se=document.getElementById("panel-code-morpho");$(se).text('<filter id="morpho-customize">\n <feGaussianBlur operator="erode" in="SourceGraphic" radius="3"/>\n</filter>');var de=document.getElementById("panel-code-morpho-dilate");$(de).text('<filter id="morpho-customize-dilate">\n <feGaussianBlur operator="dilate" in="SourceGraphic" radius="6"/>\n</filter>');var me=document.getElementById("panel-code-saturotate");$(me).text('<filter id="saturotate-customize" filterUnits="objectBoundingBox">\n <feColorMatrix type="saturate" result="saturado" values="20"/>\n <feColorMatrix type="hueRotate" in="saturado" in2="SourceGraphic" values="291"/>\n</filter>');var pe=document.getElementById("panel-code-turbulence");$(pe).text('<filter id="turbulence-customize">\n <feTurbulence type="turbulence" result="fuzz" baseFrequency="0.7" numOctaves="2" stitchTiles="stitch"/>\n <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="0" k2="1" k3="-3" k4="0.01"/>\n</filter>');var fe=document.getElementById("panel-code-linear");$(fe).text('<filter id="linear-customize">\n<feComponentTransfer>\n<feFuncR type="linear" slope="0.5" intercept="0.25"/>\n<feFuncG type="linear" slope="0.5" intercept="0"/>\n<feFuncB type="linear" slope="0.5" intercept="0.5"/>\n</feComponentTransfer>\n</filter>');var $e=document.getElementById("panel-code-matrix");$($e).text('<filter id="matrix">\n<feColorMatrix type="matrix" in="SourceGraphic" values="-1 2 -3 0 -.5 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"/>\n</filter>');var be=document.getElementById("panel-code-matrix-dos");$(be).text('<filter id="matrix">\n<feColorMatrix type="matrix" in="SourceGraphic" values="-1 2 -3 0 -.5 2 1 0 0 0 0 3 0 0 0 0 0 1 1 0"/>\n</filter>');var xe=document.getElementById("panel-code-luminance");$(xe).text('<filter id="luminanceToAlpha" filterUnits="objectBoundingBox">\n<feColorMatrix id="luminance-value" type="luminanceToAlpha" in="SourceGraphic"/>\n</filter>');var ye=document.getElementById("panel-code-discrete");$(ye).text('<filter id="discrete">\n<feFuncR type="discrete" tableValues="0 .5 1 1"/>\n<feFuncG type="discrete" tableValues="0 .5 1"\n<feFuncB type="discrete" tableValues="0 .5 "\n</filter>');var he=document.getElementById("panel-code-discrete-dos");$(he).text('<filter id="discrete">\n<feFuncR type="discrete" tableValues="0 .5 1 1"/>\n<feFuncG type="discrete" tableValues="0 .5 1"\n<feFuncB type="discrete" tableValues="0 .5 "\n</filter>');var ge=new Clipboard(".panel-btn-copy");ge.on("success",function(e){function t(){$(n).text("Copied!").addClass("success"),setTimeout(function(){$(n).removeClass("success").text("Copy to clipboard")},1e3)}var n=document.getElementsByClassName("panel-btn-copy");setTimeout(t,300)}),ge.on("error",function(e){}),$(s).click(function(){a()}),$(d).click(function(){n(),$(p).addClass("hide")}),i(),t(),e(f,r[0]),e(b,r[1]),e(x,r[2]),e(y,r[3]),e(g,r[4]),e(v,r[5]),e(B,r[6]),e(C,r[7]),e(E,r[8]),e(G,r[9]),e(I,r[10]),e(z,r[11]),e(F,r[12]),e(T,r[13]),e(k,r[14]),e(M,r[15]),e(R,r[16]),e(S,r[17]),e(V,r[18]),e(j,r[19]),e(A,r[20]),e(H,r[21]),e(N,r[22]),e(U,r[23]),e(q,r[24]),e(w,r[25]),e(D,r[26]),e(h,r[27]),e(J,r[28]),e(K,r[29]),o(f,L),o(C,P),o(E,Q),o(k,W),o(R,X),o(M,Y),o(U,Z),o(q,Z),o(w,_),o(D,ee),o(b,te),o(G,ne),o(I,ae),o(v,ie),o(B,oe)});