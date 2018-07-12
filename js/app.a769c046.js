(function(t){function e(e){for(var n,o,l=e[0],a=e[1],u=e[2],d=0,f=[];d<l.length;d++)o=l[d],r[o]&&f.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);c&&c(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,l=1;l<i.length;l++){var a=i[l];0!==r[a]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},r={1:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=a;s.push([4,0]),i()})({4:function(t,e,i){t.exports=i("Vtdi")},"7BSa":function(t,e,i){},Vtdi:function(t,e,i){"use strict";i.r(e);i("VRzm");var n=i("oCYn"),r=i("Q/mQ"),s=i.n(r),o=i("2MWQ"),l=i.n(o),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Game")],1)},u=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-game"},[i("div",{staticClass:"controls"},[i("div",{staticClass:"button reset",on:{click:t.resetTiles}},[t._v("Reset")]),i("div",{staticClass:"sliders"},[i("vue-slider",{attrs:{min:.5,max:10,interval:.5},model:{value:t.tileSize,callback:function(e){t.tileSize=e},expression:"tileSize"}}),i("vue-slider",{attrs:{min:2,max:40},on:{callback:t.changeTilesCount},model:{value:t.tilesInRow,callback:function(e){t.tilesInRow=e},expression:"tilesInRow"}})],1),i("div",{staticClass:"button shuffle",on:{click:t.shuffleTiles}},[t._v("Shuffle")])]),i("transition-group",{staticClass:"tiles-board",style:{width:t.boardSize},attrs:{tag:"div",name:"tiles"}},t._l(t.tiles,function(e){return i("tile",{key:e.id,attrs:{id:e.id,focused:!(null==t.srcIndex||e.id!==t.tiles[t.srcIndex].id),size:t.tileSize},on:{dragstart:t.drag,drop:t.drop,click:t.click}})}))],1)},d=[],f=i("iv4g"),h=i("9WAK"),p=i.n(h),g=i("zJgK"),m=i.n(g),v=i("b3l/"),b=i.n(v),x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tile",class:{focus:t.focused},style:{"background-color":t.color,width:t.size+"rem",height:t.size+"rem"},attrs:{draggable:"",tabindex:"0"},on:{dragstart:t.onDragstart,dragenter:t.onDragenter,dragover:function(e){return e.preventDefault(),t.onDragover(e)},dragleave:t.onDragleave,drag:t.onDrag,drop:t.onDrop,dragend:t.onDragend,click:t.onClick}})},w=[],I=(i("KKXr"),i("xfY5"),["#f90e44","#7b8b57","#a2efb5","#77b5b3","#28aa8c","#bed294","#386b73","#529449","#e35739","#4aac49","#22a8b4","#6c0125","#df747d","#3368b4","#019263","#d20bd4"]),y={props:{id:{type:String,required:!0},size:{type:Number,required:!0},focused:{type:Boolean,default:!1}},computed:{colorIndex:function(){return this.id.split("").reduce(function(t,e){return t+e.charCodeAt()},0)%I.length},color:function(){return I[this.colorIndex]}},methods:{onDragstart:function(t){return this.$emit("dragstart",this.id)},onDragenter:function(t){return this.$emit("dragenter",this.id)},onDragover:function(t){return this.$emit("dragover",this.id)},onDragleave:function(t){return this.$emit("dragleave",this.id)},onDrag:function(t){return this.$emit("drag",this.id)},onDrop:function(t){return this.$emit("drop",this.id)},onDragend:function(t){return this.$emit("dragend",this.id)},onClick:function(t){return this.$emit("click",this.id)}}},T=y,S=(i("hXK1"),i("KHd+")),k=Object(S["a"])(T,x,w,!1,null,"0eb148f6",null),C=k.exports,O=10,z=5,D=1e3,_=20,j={components:{Tile:C,vueSlider:b.a},data:function(){return{shadowTiles:[],tiles:[],srcIndex:null,tileSize:O,tilesInRow:z}},computed:{boardSize:function(){return"".concat(this.tilesInRow*this.tileSize,"rem")},tilesCount:function(){return Math.pow(this.tilesInRow,2)},timePerTile:function(){return D/this.tilesCount},tilesInChunk:function(){return Math.max(Math.floor(_/this.timePerTile),1)}},methods:{shuffleTiles:function(){this.tiles=p()(this.tiles),this.srcIndex=null},resetTiles:function(){this.tileSize=O,this.tilesInRow=z,this.changeTilesCount()},changeTilesCount:function(){this.srcIndex=null,this.tiles=[],this.shadowTiles=p()(this.initTiles()),this.animateTilesAppear()},animateTilesAppear:function(){this.shadowTiles.length>0&&(this.tiles=this.tiles.concat(this.shadowTiles.splice(0,this.tilesInChunk)),setTimeout(this.animateTilesAppear,_))},indexById:function(t){return this.tiles.map(function(t){return t.id}).indexOf(t)},drag:function(t){this.srcIndex=this.indexById(t)},drop:function(t){var e=this.indexById(t);null!=this.srcIndex&&this.doSwap(this.srcIndex,e)},click:function(t){var e=this.indexById(t);null!=this.srcIndex?this.doSwap(this.srcIndex,e):this.srcIndex=e},doSwap:function(t,e){var i=this.tiles[t],n=this.tiles[e];this.tiles.splice(t,1,n),this.tiles.splice(e,1,i),this.srcIndex=null},initTiles:function(){return Object(f["a"])(Array(this.tilesCount)).map(function(){return{id:m()()}})}},mounted:function(){this.tiles=p()(this.initTiles())}},$=j,R=(i("kUOF"),Object(S["a"])($,c,d,!1,null,"bbaa6b68",null)),M=R.exports,P={name:"app",components:{Game:M}},B=P,K=(i("nNx0"),Object(S["a"])(B,a,u,!1,null,null,null)),A=K.exports;i("Ud79");n["default"].use(l.a),n["default"].use(s.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(A)}}).$mount("#app")},boi5:function(t,e,i){},hXK1:function(t,e,i){"use strict";var n=i("7BSa"),r=i.n(n);r.a},kUOF:function(t,e,i){"use strict";var n=i("qQtW"),r=i.n(n);r.a},nNx0:function(t,e,i){"use strict";var n=i("boi5"),r=i.n(n);r.a},qQtW:function(t,e,i){}});
//# sourceMappingURL=app.a769c046.js.map