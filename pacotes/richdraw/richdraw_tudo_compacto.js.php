<?php error_reporting(0);if(extension_loaded('zlib')){ob_start('ob_gzhandler');} header("Content-type: text/javascript"); ?>function RichDrawEditor(elem,renderer){this.container=elem;this.gridX=10;this.gridY=10;this.mouseDownX=0;this.mouseDownY=0;this.mode='';this.fillColor='';this.lineColor='';this.lineWidth='';this.circColor='';this.textColor='';this.selected=null;this.selectedBounds={x:0,y:0,width:0,height:0};this.onselect=function(){};this.onunselect=function(){};this.renderer=renderer;this.renderer.init(this.container);this.fecha=function(){pontosdistobj=new pontosdist();elem.innerHTML="";elem.style.display="none";if(g_tipoacao=="mede"){mudaiconf("pan")}if(document.getElementById("mostradistancia")){document.getElementById("mostradistancia").style.display="none"}if(document.getElementById("mostraarea")){document.getElementById("mostraarea").style.display="none"}}}RichDrawEditor.prototype.clearWorkspace=function(){this.container.innerHTML=''};RichDrawEditor.prototype.deleteSelection=function(){if(this.selected){this.renderer.remove(this.container.ownerDocument.getElementById('tracker'));this.renderer.remove(this.selected);this.selected=null}};RichDrawEditor.prototype.select=function(elem){if(elem==this.selected)return;this.selected=elem;this.renderer.showTracker(this.selected);this.onselect(this)};RichDrawEditor.prototype.unselect=function(){if(this.selected){this.renderer.remove(this.container.ownerDocument.getElementById('tracker'));this.selected=null;this.onunselect(this)}};RichDrawEditor.prototype.getSelectedElement=function(){return this.selected};RichDrawEditor.prototype.setGrid=function(horizontal,vertical){this.gridX=horizontal;this.gridY=vertical};RichDrawEditor.prototype.editCommand=function(cmd,value){if(cmd=='mode'){this.mode=value}else if(this.selected==null){if(cmd=='fillcolor'){this.fillColor=value}else if(cmd=='linecolor'){this.lineColor=value}else if(cmd=='textcolor'){this.textColor=value}else if(cmd=='circcolor'){this.circColor=value}else if(cmd=='linewidth'){this.lineWidth=parseInt(value)+'px'}}else{this.renderer.editCommand(this.selected,cmd,value)}};RichDrawEditor.prototype.queryCommand=function(cmd){if(cmd=='mode'){return this.mode}else if(this.selected==null){if(cmd=='fillcolor'){return this.fillColor}else if(cmd=='linecolor'){return this.lineColor}else if(cmd=='textcolor'){return this.textColor}else if(cmd=='circcolor'){return this.circColor}else if(cmd=='linewidth'){return this.lineWidth}}else{return this.renderer.queryCommand(this.selected,cmd)}};RichDrawEditor.prototype.onSelectStart=function(event){return false};RichDrawEditor.prototype.onClick=function(event){var offset=Position.cumulativeOffset(this.container);var snappedX=Math.round((Event.pointerX(event)-offset[0])/this.gridX)*this.gridX;var snappedY=Math.round((Event.pointerY(event)-offset[1])/this.gridY)*this.gridY;if(this.mode!='select'){this.unselect();this.mouseDownX=snappedX;this.mouseDownY=snappedY;this.selected=this.renderer.create(this.mode,this.fillColor,this.lineColor,this.lineWidth,this.mouseDownX,this.mouseDownY,1,1);this.selected.id='shape:'+createUUID();Event.observe(this.selected,"mousemove",this.onHitListener);Event.observe(this.container,"mousemove",this.onDrawListener)}else{if(this.mouseDownX!=snappedX||this.mouseDownY!=snappedY)this.unselect()}return false};RichDrawEditor.prototype.onMouseDown=function(event){var offset=Position.cumulativeOffset(this.container);var snappedX=Math.round((Event.pointerX(event)-offset[0])/this.gridX)*this.gridX;var snappedY=Math.round((Event.pointerY(event)-offset[1])/this.gridY)*this.gridY;if(this.mode!='select'){this.unselect();this.mouseDownX=snappedX;this.mouseDownY=snappedY;this.selected=this.renderer.create(this.mode,this.fillColor,this.lineColor,this.lineWidth,this.mouseDownX,this.mouseDownY,1,1);this.selected.id='shape:'+createUUID();Event.observe(this.selected,"mousedown",this.onHitListener);Event.observe(this.container,"mousemove",this.onDrawListener)}else{if(this.mouseDownX!=snappedX||this.mouseDownY!=snappedY)this.unselect()}return false};RichDrawEditor.prototype.onMouseUp=function(event){Event.stopObserving(this.container,"mouseup",this.onDrawListener);Event.stopObserving(this.container,"mouseup",this.onDragListener);if(this.mode!='select'){this.selected=null}};RichDrawEditor.prototype.onDrag=function(event){var offset=Position.cumulativeOffset(this.container);var snappedX=Math.round((Event.pointerX(event)-offset[0])/this.gridX)*this.gridX;var snappedY=Math.round((Event.pointerY(event)-offset[1])/this.gridY)*this.gridY;var deltaX=snappedX-this.mouseDownX;var deltaY=snappedY-this.mouseDownY;this.renderer.move(this.selected,this.selectedBounds.x+deltaX,this.selectedBounds.y+deltaY);this.renderer.showTracker(this.selected)};RichDrawEditor.prototype.onResize=function(event){var offset=Position.cumulativeOffset(this.container);var snappedX=Math.round((Event.pointerX(event)-offset[0])/this.gridX)*this.gridX;var snappedY=Math.round((Event.pointerY(event)-offset[1])/this.gridY)*this.gridY;var deltaX=snappedX-this.mouseDownX;var deltaY=snappedY-this.mouseDownY;this.renderer.track(handle,deltaX,deltaY);show_tracker()};RichDrawEditor.prototype.onDraw=function(event){if(this.selected==null)return;var offset=Position.cumulativeOffset(this.container);var snappedX=Math.round((Event.pointerX(event)-offset[0])/this.gridX)*this.gridX;var snappedY=Math.round((Event.pointerY(event)-offset[1])/this.gridY)*this.gridY;this.renderer.resize(this.selected,this.mouseDownX,this.mouseDownY,snappedX,snappedY)};RichDrawEditor.prototype.onHit=function(event){if(this.mode=='select'){this.select(Event.element(event));this.selectedBounds=this.renderer.bounds(this.selected);var offset=Position.cumulativeOffset(this.container);this.mouseDownX=Math.round((Event.pointerX(event)-offset[0])/this.gridX)*this.gridX;this.mouseDownY=Math.round((Event.pointerY(event)-offset[1])/this.gridY)*this.gridY;Event.observe(this.container,"mousemove",this.onDragListener)}};function createUUID(){return[4,2,2,2,6].map(function(length){var uuidpart="";for(var i=0;i<length;i++){var uuidchar=parseInt((Math.random()*256)).toString(16);if(uuidchar.length==1)uuidchar="0"+uuidchar;uuidpart+=uuidchar}return uuidpart}).join('-')}function AbstractRenderer(){};AbstractRenderer.prototype.init=function(elem){};AbstractRenderer.prototype.bounds=function(shape){return{x:0,y:0,width:0,height:0}};AbstractRenderer.prototype.create=function(shape,fillColor,lineColor,lineWidth,left,top,width,height,texto){};AbstractRenderer.prototype.remove=function(shape){};AbstractRenderer.prototype.move=function(shape,left,top){};AbstractRenderer.prototype.track=function(shape){};AbstractRenderer.prototype.resize=function(shape,fromX,fromY,toX,toY){};AbstractRenderer.prototype.editCommand=function(shape,cmd,value){};AbstractRenderer.prototype.queryCommand=function(shape,cmd){};AbstractRenderer.prototype.showTracker=function(shape){};AbstractRenderer.prototype.getMarkup=function(){return null};
function SVGRenderer(){this.base=AbstractRenderer;this.svgRoot=null}SVGRenderer.prototype=new AbstractRenderer;SVGRenderer.prototype.init=function(elem){this.container=elem;this.container.style.MozUserSelect='none';var svgNamespace='http://www.w3.org/2000/svg';this.svgRoot=this.container.ownerDocument.createElementNS(svgNamespace,"svg");this.container.appendChild(this.svgRoot)};SVGRenderer.prototype.bounds=function(shape){var rect=new Object();var box=shape.getBBox();rect['x']=box.x;rect['y']=box.y;rect['width']=box.width;rect['height']=box.height;return rect};SVGRenderer.prototype.create=function(shape,fillColor,lineColor,lineWidth,left,top,width,height,texto){var svgNamespace='http://www.w3.org/2000/svg';var svg;if(shape=='rect'){svg=this.container.ownerDocument.createElementNS(svgNamespace,'rect');svg.setAttributeNS(null,'x',left+'px');svg.setAttributeNS(null,'y',top+'px');svg.setAttributeNS(null,'width',width+'px');svg.setAttributeNS(null,'height',height+'px')}else if(shape=='ellipse'){svg=this.container.ownerDocument.createElementNS(svgNamespace,'ellipse');svg.setAttributeNS(null,'cx',(left+width/2)+'px');svg.setAttributeNS(null,'cy',(top+height/2)+'px');svg.setAttributeNS(null,'rx',(width/2)+'px');svg.setAttributeNS(null,'ry',(height/2)+'px')}else if(shape=='circ'){svg=this.container.ownerDocument.createElementNS(svgNamespace,'ellipse');svg.setAttributeNS(null,'cx',left+'px');svg.setAttributeNS(null,'cy',top+'px');svg.setAttributeNS(null,'rx',width+'px');svg.setAttributeNS(null,'ry',width+'px')}else if(shape=='roundrect'){svg=this.container.ownerDocument.createElementNS(svgNamespace,'rect');svg.setAttributeNS(null,'x',left+'px');svg.setAttributeNS(null,'y',top+'px');svg.setAttributeNS(null,'rx','20px');svg.setAttributeNS(null,'ry','20px');svg.setAttributeNS(null,'width',width+'px');svg.setAttributeNS(null,'height',height+'px')}else if(shape=='line'){svg=this.container.ownerDocument.createElementNS(svgNamespace,'line');svg.setAttributeNS(null,'x1',left+'px');svg.setAttributeNS(null,'y1',top+'px');svg.setAttributeNS(null,'x2',width+'px');svg.setAttributeNS(null,'y2',height+'px')}else if(shape=='text'){svg=this.container.ownerDocument.createElementNS(svgNamespace,'text');var n=this.container.ownerDocument.createTextNode(texto);svg.appendChild(n);svg.setAttributeNS(null,'x',left+'px');svg.setAttributeNS(null,'y',top+'px');svg.setAttributeNS(null,'font-size','12px')}svg.style.position='absolute';if(fillColor.length==0)fillColor='none';svg.setAttributeNS(null,'fill',fillColor);if(lineColor.length==0)lineColor='none';svg.setAttributeNS(null,'stroke',lineColor);svg.setAttributeNS(null,'stroke-width',lineWidth);this.svgRoot.appendChild(svg);return svg};SVGRenderer.prototype.remove=function(shape){shape.parentNode.removeChild(shape)};SVGRenderer.prototype.move=function(shape,left,top){if(shape.tagName=='line'){var deltaX=shape.getBBox().width;var deltaY=shape.getBBox().height;shape.setAttributeNS(null,'x1',left);shape.setAttributeNS(null,'y1',top);shape.setAttributeNS(null,'x2',left+deltaX);shape.setAttributeNS(null,'y2',top+deltaY)}else if(shape.tagName=='ellipse'){shape.setAttributeNS(null,'cx',left+(shape.getBBox().width/2));shape.setAttributeNS(null,'cy',top+(shape.getBBox().height/2))}else{shape.setAttributeNS(null,'x',left);shape.setAttributeNS(null,'y',top)}};SVGRenderer.prototype.track=function(shape){};SVGRenderer.prototype.resize=function(shape,fromX,fromY,toX,toY){var deltaX=toX-fromX;var deltaY=toY-fromY;if(shape.tagName=='line'){shape.setAttributeNS(null,'x2',toX);shape.setAttributeNS(null,'y2',toY)}else if(shape.tagName=='ellipse'){if(deltaX<0){shape.setAttributeNS(null,'cx',(fromX+deltaX/2)+'px');shape.setAttributeNS(null,'rx',(-deltaX/2)+'px')}else{shape.setAttributeNS(null,'cx',(fromX+deltaX/2)+'px');shape.setAttributeNS(null,'rx',(deltaX/2)+'px')}if(deltaY<0){shape.setAttributeNS(null,'cy',(fromY+deltaY/2)+'px');shape.setAttributeNS(null,'ry',(-deltaY/2)+'px')}else{shape.setAttributeNS(null,'cy',(fromY+deltaY/2)+'px');shape.setAttributeNS(null,'ry',(deltaY/2)+'px')}}else{if(deltaX<0){shape.setAttributeNS(null,'x',toX+'px');shape.setAttributeNS(null,'width',-deltaX+'px')}else{shape.setAttributeNS(null,'width',deltaX+'px')}if(deltaY<0){shape.setAttributeNS(null,'y',toY+'px');shape.setAttributeNS(null,'height',-deltaY+'px')}else{shape.setAttributeNS(null,'height',deltaY+'px')}}};SVGRenderer.prototype.editCommand=function(shape,cmd,value){if(shape!=null){if(cmd=='fillcolor'){if(value!='')shape.setAttributeNS(null,'fill',value);else shape.setAttributeNS(null,'fill','none')}else if(cmd=='linecolor'){if(value!='')shape.setAttributeNS(null,'stroke',value);else shape.setAttributeNS(null,'stroke','none')}else if(cmd=='linewidth'){shape.setAttributeNS(null,'stroke-width',parseInt(value)+'px')}}};SVGRenderer.prototype.queryCommand=function(shape,cmd){var result='';if(shape!=null){if(cmd=='fillcolor'){result=shape.getAttributeNS(null,'fill');if(result=='none')result=''}else if(cmd=='linecolor'){result=shape.getAttributeNS(null,'stroke');if(result=='none')result=''}else if(cmd=='linewidth'){result=shape.getAttributeNS(null,'stroke');if(result=='none')result='';else result=shape.getAttributeNS(null,'stroke-width')}}return result};SVGRenderer.prototype.showTracker=function(shape){var box=shape.getBBox();var tracker=document.getElementById('tracker');if(tracker){this.remove(tracker)}var svgNamespace='http://www.w3.org/2000/svg';tracker=document.createElementNS(svgNamespace,'rect');tracker.setAttributeNS(null,'id','tracker');tracker.setAttributeNS(null,'x',box.x-10);tracker.setAttributeNS(null,'y',box.y-10);tracker.setAttributeNS(null,'width',box.width+20);tracker.setAttributeNS(null,'height',box.height+20);tracker.setAttributeNS(null,'fill','none');tracker.setAttributeNS(null,'stroke','blue');tracker.setAttributeNS(null,'stroke-width','1');this.svgRoot.appendChild(tracker)};SVGRenderer.prototype.getMarkup=function(){return this.container.innerHTML};
function VMLRenderer(){this.base=AbstractRenderer}VMLRenderer.prototype=new AbstractRenderer;VMLRenderer.prototype.init=function(elem){this.container=elem;this.container.style.overflow='hidden';elem.ownerDocument.namespaces.add("v","urn:schemas-microsoft-com:vml");var style=elem.ownerDocument.createStyleSheet();style.addRule('v\\:*',"behavior: url(#default#VML);")};VMLRenderer.prototype.bounds=function(shape){var rect=new Object();rect['x']=shape.offsetLeft;rect['y']=shape.offsetTop;rect['width']=shape.offsetWidth;rect['height']=shape.offsetHeight;return rect};VMLRenderer.prototype.create=function(shape,fillColor,lineColor,lineWidth,left,top,width,height,texto){var vml;if(shape=='rect'){vml=this.container.ownerDocument.createElement('v:rect')}else if(shape=='roundrect'){vml=this.container.ownerDocument.createElement('v:roundrect')}else if(shape=='ellipse'){vml=this.container.ownerDocument.createElement('v:oval')}else if(shape=='circ'){vml=this.container.ownerDocument.createElement('v:oval')}else if(shape=='line'){vml=this.container.ownerDocument.createElement('v:line')}else if(shape=='text'){vml=this.container.ownerDocument.createElement('v:textbox');vml.innerHTML=texto}if(shape!='line'){vml.style.position='absolute';vml.style.left=left;vml.style.top=top;vml.style.width=width;vml.style.height=height;if(fillColor!=''){vml.setAttribute('filled','true');vml.setAttribute('fillcolor',fillColor)}else{vml.setAttribute('filled','false')}}else{vml.style.position='absolute';vml.setAttribute('from',left+'px,'+top+'px');vml.setAttribute('to',width+'px,'+height+'px')}if(lineColor!=''){vml.setAttribute('stroked','true');vml.setAttribute('strokecolor',lineColor);vml.setAttribute('strokeweight',lineWidth)}else{vml.setAttribute('stroked','false')}this.container.appendChild(vml);return vml};VMLRenderer.prototype.remove=function(shape){shape.removeNode(true)};VMLRenderer.prototype.move=function(shape,left,top){if(shape.tagName=='line'){shape.style.marginLeft=left;shape.style.marginTop=top}else{shape.style.left=left;shape.style.top=top}};VMLRenderer.prototype.track=function(shape){};VMLRenderer.prototype.resize=function(shape,fromX,fromY,toX,toY){shape.setAttribute('to',toX+'px,'+toY+'px')};VMLRenderer.prototype.editCommand=function(shape,cmd,value){if(shape!=null){if(cmd=='fillcolor'){if(value!=''){shape.filled='true';shape.fillcolor=value}else{shape.filled='false';shape.fillcolor=''}}else if(cmd=='linecolor'){if(value!=''){shape.stroked='true';shape.strokecolor=value}else{shape.stroked='false';shape.strokecolor=''}}else if(cmd=='linewidth'){shape.strokeweight=parseInt(value)+'px'}}};VMLRenderer.prototype.queryCommand=function(shape,cmd){if(shape!=null){if(cmd=='fillcolor'){if(shape.filled=='false')return'';else return shape.fillcolor}else if(cmd=='linecolor'){if(shape.stroked=='false')return'';else return shape.strokecolor}else if(cmd=='linewidth'){if(shape.stroked=='false'){return''}else{return(parseFloat(shape.strokeweight)*(screen.logicalXDPI/72))+'px'}}}};VMLRenderer.prototype.showTracker=function(shape){var box=this.bounds(shape);var tracker=document.getElementById('tracker');if(tracker){this.remove(tracker)}tracker=this.container.ownerDocument.createElement('v:rect');tracker.id='tracker';tracker.style.position='absolute';tracker.style.left=box.x-10;tracker.style.top=box.y-10;tracker.style.width=box.width+20;tracker.style.height=box.height+20;tracker.setAttribute('filled','false');tracker.setAttribute('stroked','true');tracker.setAttribute('strokecolor','blue');tracker.setAttribute('strokeweight','1px');this.container.appendChild(tracker)};VMLRenderer.prototype.getMarkup=function(){return this.container.innerHTML};

<?php if(extension_loaded('zlib')){ob_end_flush();}?>