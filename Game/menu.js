(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,921,625);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgyCkIAAhxIhljWIBxAAIAjBnQADALACAIIADAPIABAAQADgUAEgMIAjhpIBoAAIhoDVIAAByg");
	this.shape.setTransform(138.6,36.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("ABACkIgPg9IhgAAIgQA9IhrAAIBxlHIB6AAIBqFHgAgDhJIgcBqIA+AAIgXhYQgFgTgBgRIgCAAIgDASg");
	this.shape_1.setTransform(105.675,36.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhpCkIAAlHIBjAAIAAD6IBwAAIAABNg");
	this.shape_2.setTransform(76.775,36.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AiFCkIAAlHICGAAQBFAAAgAbQAgAaAAA3QAAAigRAZQgRAaggAOQgfAPgpAAIgeAAIAABpgAgigLIAWAAQAqAAAAgoQAAgUgMgLQgMgKgVAAIgTAAg");
	this.shape_3.setTransform(48.925,36.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(4,1,1).p("AvGmDIeNAAIAAMHI+NAAg");
	this.shape_4.setTransform(96.7,38.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AvGGEIAAsHIeNAAIAAMHg");
	this.shape_5.setTransform(96.7,38.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgyCkIAAhxIhljWIBxAAIAjBnQADALACAIIADAPIABAAQADgUAEgMIAjhpIBoAAIhoDVIAAByg");
	this.shape_6.setTransform(138.6,36.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("ABACkIgPg9IhgAAIgQA9IhrAAIBxlHIB6AAIBqFHgAgDhJIgcBqIA+AAIgXhYQgFgTgBgRIgCAAIgDASg");
	this.shape_7.setTransform(105.675,36.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhpCkIAAlHIBjAAIAAD6IBwAAIAABNg");
	this.shape_8.setTransform(76.775,36.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AiFCkIAAlHICGAAQBFAAAgAbQAgAaAAA3QAAAigRAZQgRAaggAOQgfAPgpAAIgeAAIAABpgAgigLIAWAAQAqAAAAgoQAAgUgMgLQgMgKgVAAIgTAAg");
	this.shape_9.setTransform(48.925,36.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(4,1,1).p("AvGmDIeNAAIAAMHI+NAAg");
	this.shape_10.setTransform(96.7,38.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AvGGEIAAsHIeNAAIAAMHg");
	this.shape_11.setTransform(96.7,38.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgrCPIAAhiIhYi7IBjAAIAeBaIAEAQIACAOIABAAQADgTADgKIAehbIBbAAIhbC6IAABjg");
	this.shape_12.setTransform(133.2,36.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AA3CPIgMg1IhUAAIgOA1IhdAAIBikdIBqAAIBdEdgAgDhAQgCALgWBSIA2AAIgUhNQgEgRgCgPIgBAAIgDAQg");
	this.shape_13.setTransform(104.525,36.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AhbCPIAAkdIBWAAIAADZIBhAAIAABEg");
	this.shape_14.setTransform(79.275,36.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Ah0CPIAAkdIB0AAQA9AAAcAXQAcAXAAAwQAAAegPAVQgPAXgbANQgcAMgjAAIgbAAIAABcgAgegKIAUAAQAkAAAAgjQAAgRgKgJQgLgJgSAAIgRAAg");
	this.shape_15.setTransform(54.975,36.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(4,1,1).p("AtLlSIaXAAIAAKlI6XAAg");
	this.shape_16.setTransform(96.7,38.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AtLFTIAAqlIaXAAIAAKlg");
	this.shape_17.setTransform(96.7,38.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF3300").s().p("AvGGEIAAsHIeNAAIAAMHg");
	this.shape_18.setTransform(96.7,38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_18},{t:this.shape_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2,-2,197.4,81.6);
p.frameBounds = [rect, rect, new cjs.Rectangle(10.3,3,172.8,71.8), new cjs.Rectangle(-2,-2,197.4,81.6)];


(lib.MiniPencil = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF99CC").ss(3,1,1).p("AhqBFIAAiJIDVAAIAACJ");
	this.shape.setTransform(10.65,6.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(3,1,1).p("ABsgzIAABnIjXAAIAAhnIDUAAg");
	this.shape_1.setTransform(10.8,18.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AhpE0IgCgDIAApkIDXAAIAAJkIgCADg");
	this.shape_2.setTransform(10.8,54.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCCCC").s().p("AhqBEIAAiIIDVAAIAACIg");
	this.shape_3.setTransform(10.65,6.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AhpETIDTAAIhmCqgAhrlUIAAhoIDUAAIADAAIAABog");
	this.shape_4.setTransform(10.8,58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,-1.5,24.6,104.2);
p.frameBounds = [rect];


(lib.FrownTeeth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkGBAQACgkAIgVQAFgKAGgLIAAABQAphFB+gZQBPgQBoAHQBqAGAwAYQgUAYgBAsQAAAXAIBRQh0gdimAPQiTAOhOAhQgHgSACglgAjYADIgIAPQgLAcADAjQBVgYBTgKIAAAAQCPgSCIAUQgHgqAAgUgAhEhNQhbARgpArIGZgQQACgSAHgTQhQgUhPAAQg/AAhAANg");
	this.shape.setTransform(0.0771,2.3051);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjYAYIAIgQIGngPQAAATAIAqQiJgUiOASIAAAAQhTAKhVAYQgDgjALgbgAg9hIQCPgcCQAjQgHATgCATImaAQQApgsBbgRg");
	this.shape_1.setTransform(-0.6755,1.798);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrownTeeth, rect = new cjs.Rectangle(-26.3,-9.8,52.7,24), [rect]);


(lib.FrownClosed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AjzAkQERjHDWDe");
	this.shape.setTransform(-3.125,3.6951);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrownClosed, rect = new cjs.Rectangle(-29,-3.6,51.8,14.7), [rect]);


(lib.LegStraightScrunched = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhbCgIAJk/IAUAAIALDyQACgFAKgBQALgBAFAEQALgdAhgNQAngOAgAjIhUBlIAAAAg");
	this.shape.setTransform(8.3,16.1125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LegStraightScrunched, rect = new cjs.Rectangle(-0.9,0.1,18.4,32.1), [rect]);


(lib.LegStraightBelow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhECnIAHlNIAUAAIALD+QADhoAzAHQAWADANAbQAOAdgGAhQgPBUhxAAIgHAAg");
	this.shape.setTransform(6.215,16.8285);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LegStraightBelow, rect = new cjs.Rectangle(-0.7,0.1,13.9,33.4), [rect]);


(lib.LegStraight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AheCgIAJk/IAUAAIALD+QAlgQAmAHQA9AMANA+g");
	this.shape.setTransform(8.55,16.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LegStraight, rect = new cjs.Rectangle(-0.9,0.1,18.9,32.1), [rect]);


(lib.LegBentAbove = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbCfQgdgjgOggQAdgeAbgwQAfg5gDgfQgEgwghgeIgrgjIAFgJQAbANAYATQAlAgAKAyQAFAbgSAxQgPAmgUAfQA1ATAVAvQAWAuglASQgIAEgJAAQgaAAgggmg");
	this.shape.setTransform(6.1985,18.6892);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LegBentAbove, rect = new cjs.Rectangle(-0.9,-1,14.2,39.4), [rect]);


(lib.LegBent = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2ClIgoAAQAdgjAbg3QAhhCgEgiQgEg3gigiIgrgpIAFgKQAbAPAYAXQAlAkAKA5QAMBDggA5QANgBAPADQA9AMANA+g");
	this.shape.setTransform(8.55,15.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LegBent, rect = new cjs.Rectangle(-0.9,-1,18.9,33.2), [rect]);


(lib.ArmStraight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpCoQgSgSAAgZQAAgZASgSQAKgKANgEIAJj8IATAAIAID8QAOAEAKAKQASASAAAZQAAAZgSASQgRARgZAAQgYAAgRgRg");
	this.shape.setTransform(0,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ArmStraight, rect = new cjs.Rectangle(-6,0,12,37), [rect]);


(lib.EyeSlantedMiddle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AApAlQgKgBgLgIIhIgyQgDgCgBgDQgBgDACgDQABgDADgBQADgBADACIBOAmQAMAHAGAIQAIAKgDAGQgCAFgHAAIgGgBg");
	this.shape.setTransform(0.3914,-5.2211);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAvQgKgWABgeQgBggAKgXIAFgJIAaAAIAAAKIASAAQAJAXAAAfQAAAegKAWQgKAWgOAAQgNAAgLgWg");
	this.shape_1.setTransform(0,0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EyeSlantedMiddle, rect = new cjs.Rectangle(-5.3,-9,11.5,16.6), [rect]);


(lib.EyeEyelidRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAMIhMgMQgDAAgCgBQgCgCAAgDQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQACgCADAAIBMAAQALAAAJAEQAKAFAAAFQAAAHgKACQgFACgHAAIgIgBg");
	this.shape.setTransform(0.1,-4.9995);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYApQgKgWABgeQgBgeAJgWIAyAAQAJAWAAAeQAAAegKAWQgKAXgOAAQgNAAgLgXg");
	this.shape_1.setTransform(3.15,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EyeEyelidRight, rect = new cjs.Rectangle(-5.6,-6.3,12.2,13.9), [rect]);


(lib.PinBodySide = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Handle
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A40B0B").ss(3,1,0,5).p("Am1FIIivFIIDxAAIKnAAIExAAIivlIIAArhICvj2IkxAAIqnAAIjxAAICvD2Am1FIIAArh");
	this.shape.setTransform(0.025,0.0125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA0E0E").s().p("AhsKQIhYlIIAArhIBYj2IEwAAIiuD2IAALhICuFIg");
	this.shape_1.setTransform(41.65,0.0125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F23131").s().p("AisKQICulIIgBAAIAArhIABAAIiuj2IDvAAIBqD2IAALhIhqFIg");
	this.shape_2.setTransform(-43.925,0.0125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F00F0F").s().p("AlTKQIBqlIIAArhIhqj2IKnAAIhYD2IAALhIBYFIg");
	this.shape_3.setTransform(-3.2,0.0125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Point
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(3,1,0,60).p("AAAkGIB6JHIjzAAg");
	this.shape_4.setTransform(0.0289,-96.4469);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3C3C3").s().p("Ah5EkIB5pHIB6JHg");
	this.shape_5.setTransform(0.025,-93.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PinBodySide, rect = new cjs.Rectangle(-64.1,-130,128.3,197.2), [rect]);


(lib.PencilBody = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(4,1,0,5).p("AjdiiIAqAAIBIAAIC3AAIBsAAIAnAAIAAFFIghAAIhyAAIifAAIgYAAIhIAAIgrAAgAjdiiIAAAA");
	this.shape.setTransform(-0.3148,-74.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3C3C3").s().p("Ag4CjIABlFIApAAIBHAAIAAFFIhGAAg");
	this.shape_1.setTransform(-16.8625,-74.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBF48").s().p("AgvLpIAA3RIBHAAIAYAAIAAXRg");
	this.shape_2.setTransform(-13.525,16.5375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5B5B5").s().p("ACECjIhxAAIifAAIgZAAIAAlFIC4AAIBsAAIAnAAIAAFFg");
	this.shape_3.setTransform(5.4,-74.2875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC536B").s().p("AC3CFIAAiXQAAhQhGAAIgmAAIiwAAQg8AAgPAtQgDAKgBAKIAACmIgpAAIgBAAIADivQAFgtAjgYQAZgTApgCIDoAAQBjAAAFBsIgBCdg");
	this.shape_4.setTransform(-0.275,-103.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0C575").s().p("AgkhxIAAgBIBhAAIACABIh9Dkg");
	this.shape_5.setTransform(10.8875,106.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E17389").s().p("Ag1B0IAAjnIAlAAQBGAAAABQIAACXg");
	this.shape_6.setTransform(12.65,-102.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E89700").s().p("Ag5LpIACgBIAA3QIBwAAIgEXRg");
	this.shape_7.setTransform(12.9,16.5375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E47E93").s().p("Ag3B0IhIAAIAAimQAAgKAEgKQAPgtA8AAICwAAIAADng");
	this.shape_8.setTransform(-5.55,-102.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BD8A2B").s().p("ABYBzIgrAAIB/jkIABgBIAuAAIiCDlgAhdBzIh9jkIAtgBIB6Dlg");
	this.shape_9.setTransform(0.0125,106.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B97800").s().p("ABcNsIAAAAIgGAJgAjet0IArAAIAAXSIBgAAICdAAIAAAnIj0AAIgtABgACwKFIgDAAIhiAAIAAgnIBuAAIAF3SIAhAAIgBX5g");
	this.shape_10.setTransform(-0.3125,30.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhahRIAqAAIBgAAIArAAIgFAJIhYCag");
	this.shape_11.setTransform(-0.2875,126.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3D08F").s().p("AgyBzIh6jlID0AAIABABIgbDkgACrhyIACAAIAAABg");
	this.shape_12.setTransform(-0.05,106.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFA909").s().p("AhPLpIAA3RICfAAIAAXQIgBABIieAAg");
	this.shape_13.setTransform(-0.75,16.5375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PencilBody, rect = new cjs.Rectangle(-24.5,-117.2,48.5,251.7), [rect]);


(lib.mouths = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FrownClosed();
	this.instance.setTransform(29.15,20.4,1,1,0,0,0,-3.1,3.7);

	this.instance_1 = new lib.FrownTeeth();
	this.instance_1.setTransform(32.35,19,1,1,0,0,0,0.1,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[]},1).to({state:[{t:this.instance_1}]},5).to({state:[]},1).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(3.3,-1.5,51.7,42.4);
p.frameBounds = [rect, rect, new cjs.Rectangle(3.3,13.1,51.8,14.7), new cjs.Rectangle(37.8,8.5,28.6,18.8), new cjs.Rectangle(31.1,10.4,37.8,13.7), new cjs.Rectangle(6,9.1,35.8,19.7), new cjs.Rectangle(5.9,6.9,51.9,24), new cjs.Rectangle(2.1,3.4,39.2,29.6), new cjs.Rectangle(6,7.1,52.7,23.8), new cjs.Rectangle(6.2,6.9,51.6,27.7), new cjs.Rectangle(5.4,6.9,52.4,34.8), new cjs.Rectangle(5.9,1.2,52.8,47.9), new cjs.Rectangle(5.4,0.7,53.7,49.3), new cjs.Rectangle(2.6,-1.5,67.6,42.4), new cjs.Rectangle(10.3,7.1,44.5,23.9), new cjs.Rectangle(6.7,7.3,51.9,15.5), new cjs.Rectangle(38.3,8.3,19.5,19.5), new cjs.Rectangle(46.8,7.6,14.5,14.5), new cjs.Rectangle(4,13.6,54.9,6.7), new cjs.Rectangle(3.3,6.8,51.3,20), rect=new cjs.Rectangle(3.3,-1.5,51.7,42.4), rect, new cjs.Rectangle(1.8,7.9,55.6,26.7), new cjs.Rectangle(1.8,7.9,58.4,26.6), new cjs.Rectangle(1.8,7.9,58.3,22.3), new cjs.Rectangle(0.4,8,57,30.2), new cjs.Rectangle(0,6.5,57.4,34.5), new cjs.Rectangle(4.8,-0.5,55.9,48), new cjs.Rectangle(4.3,-1.3,61.4,47.1), new cjs.Rectangle(9.1,10,49,23.5)];


(lib.eye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.EyeSlantedMiddle();
	this.instance.setTransform(11.75,21.35,1,1,0,0,0,0.4,-0.7);

	this.instance_1 = new lib.EyeEyelidRight();
	this.instance_1.setTransform(11.85,22.75,1,1,0,0,0,0.5,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},8).to({state:[]},1).to({state:[{t:this.instance_1}]},8).to({state:[]},1).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(2.1,13.7,18.7,12.9);
p.frameBounds = [rect, new cjs.Rectangle(2.2,13.7,18.6,12.9), new cjs.Rectangle(7.9,14.5,6.9,15.2), new cjs.Rectangle(3.7,2.3,15.5,27.4), new cjs.Rectangle(4,17.9,14.5,10.8), new cjs.Rectangle(6,11.6,10.5,23.4), new cjs.Rectangle(5.9,4.6,10.5,23.4), new cjs.Rectangle(5.5,16.1,11.7,13.5), new cjs.Rectangle(6.1,13.1,11.5,16.6), new cjs.Rectangle(4.9,14.9,13,14.7), new cjs.Rectangle(3,14.9,13,14.7), new cjs.Rectangle(5.9,13.1,11.5,16.6), new cjs.Rectangle(6.3,13.1,11.6,16.6), new cjs.Rectangle(5.1,13.1,11.4,16.6), new cjs.Rectangle(5.5,14.5,11.7,13.6), new cjs.Rectangle(5.8,14.3,12.1,13.8), new cjs.Rectangle(4.8,14.3,12.1,13.8), new cjs.Rectangle(5.8,15.8,12.2,13.9), new cjs.Rectangle(4.8,15.8,12.2,13.9), new cjs.Rectangle(1.7,0.3,15.4,29.4), new cjs.Rectangle(6.3,0,15,29.7), new cjs.Rectangle(3.9,5.9,16.4,23.8), new cjs.Rectangle(3.9,7.7,14.9,22), new cjs.Rectangle(2.7,5.9,16.3,23.8), new cjs.Rectangle(5,3.3,17.8,27.6), new cjs.Rectangle(0,3.3,17.8,27.6)];


(lib.WalkCycle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.LegStraight();
	this.instance.setTransform(-0.15,-0.1);

	this.instance_1 = new lib.LegStraightScrunched();
	this.instance_1.setTransform(-0.15,-0.15,1.1293,0.9061,0,34.6802,53.6956);

	this.instance_2 = new lib.LegBentAbove();
	this.instance_2.setTransform(-0.15,-0.1,0.9983,0.9983,56.6728);
	this.instance_2._off = true;

	this.instance_3 = new lib.LegBent();
	this.instance_3.setTransform(-0.15,-0.1,0.9949,0.6955,23.8162);

	this.instance_4 = new lib.LegStraightBelow();
	this.instance_4.setTransform(-0.15,-0.1,0.9997,1.0101,0,-35.376,-42.7021);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.1293,scaleY:0.9061,skewX:34.6802,skewY:53.6956,y:-0.15}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.04,scaleY:1.0099,skewX:41.8918,skewY:58.1466,y:-0.1}}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.9949,scaleY:0.6955,rotation:23.8162,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{scaleX:1.0014,scaleY:0.8378,rotation:0,skewX:-5.2334,skewY:-12.5585}}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9859,scaleY:1.0359,skewX:13.8127,skewY:-0.1038},2).to({_off:true},1).wait(9).to({_off:false,scaleX:0.9999,scaleY:1.1092,skewX:-27.5697,skewY:-34.8969},0).wait(1).to({scaleX:0.9986,scaleY:1.0807,skewX:-20.5682,skewY:-26.0795},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(1).to({scaleX:0.9966,scaleY:0.9046,rotation:64.9271,x:-0.1},0).wait(1).to({scaleX:0.9971,scaleY:0.813,rotation:67.4549,x:-0.15},0).wait(1).to({scaleX:0.9962,scaleY:0.7287,rotation:51.6437},0).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,0,18.9,32.1);
p.frameBounds = [rect, new cjs.Rectangle(-5,0,18.8,32.4), new cjs.Rectangle(-9,0,26.6,32.3), new cjs.Rectangle(-17.3,-0.9,28.9,40.7), new cjs.Rectangle(-22.3,-0.8,31.8,40.3), new cjs.Rectangle(-32.7,-1.4,40.7,33.4), new cjs.Rectangle(-31.9,-1.3,38.3,27.9), new cjs.Rectangle(-29.3,-1.2,35.1,25.4), new cjs.Rectangle(-22.6,-1.2,31.3,28.9), new cjs.Rectangle(-10,-1.1,26.6,28.7), new cjs.Rectangle(-1.1,-4.8,21,31.8), new cjs.Rectangle(-0.6,-8.9,29.7,36.9), new cjs.Rectangle(-0.8,-10.3,32,42.3), new cjs.Rectangle(-0.9,-7.9,29.1,40.8)];


(lib.ArmShaking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.ArmStraight();
	this.instance.setTransform(0.45,-0.05,0.9966,0.9966,33.7363);
	this.instance.alpha = 0.2109;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9994,scaleY:0.9994,rotation:-11.0296},0).wait(1).to({scaleX:0.9979,scaleY:0.9979,rotation:-0.4994},0).wait(1).to({scaleX:0.999,scaleY:0.999,rotation:-10.4291},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.ArmStraight();
	this.instance_1.setTransform(0.45,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.999,scaleY:0.999,rotation:19.5708},0).wait(1).to({rotation:-25.4292},0).wait(1).to({scaleX:0.9976,scaleY:0.9976,rotation:15.1611},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-3.3,31.5,40.3);
p.frameBounds = [rect, new cjs.Rectangle(-17.6,-2,31,39.4), new cjs.Rectangle(-5.5,-2.6,27.3,39.5), new cjs.Rectangle(-15,-1.6,28.1,39)];


// stage content:
(lib.menu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.playbtn.addEventListener("click", function() {
		  window.location.href = "game.html";
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29));

	// buttons
	this.playbtn = new lib.play();
	this.playbtn.name = "playbtn";
	this.playbtn.setTransform(650.4,309.85,1,1,0,0,0,96.7,38.8);
	new cjs.ButtonHelper(this.playbtn, 0, 1, 2, false, new lib.play(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playbtn).wait(29));

	// Pin
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(397.4,608.8,0.0561,0.0561,0,1.9019,-178.0981);

	this.instance_1 = new lib.eye("single",17);
	this.instance_1.setTransform(972.75,284,4.8304,4.8304,0,0,0,11.7,17.4);

	this.instance_2 = new lib.mouths("single",2);
	this.instance_2.setTransform(1078.95,453.1,4.9094,5.4076,0,0,0,35.5,24.4);

	this.instance_3 = new lib.Bitmap1();
	this.instance_3.setTransform(1021.3,604.4,0.2901,0.2901,0,-2.0497,177.9503);

	this.instance_4 = new lib.PinBodySide();
	this.instance_4.setTransform(1125.4,281.1,4.5136,4.5136,0,0,0,0.1,-28.5);

	this.instance_5 = new lib.Bitmap1();
	this.instance_5.setTransform(1489.6,511,0.3948,0.3948,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(29));

	// Pencil
	this.instance_6 = new lib.ArmShaking("synched",2);
	this.instance_6.setTransform(379.25,190.1,1,1,-30,0,0,-1.6,17.1);

	this.instance_7 = new lib.ArmShaking("synched",2);
	this.instance_7.setTransform(324.15,188.75,1,1,29.9992,0,0,-1.6,17);

	this.instance_8 = new lib.WalkCycle("synched",10);
	this.instance_8.setTransform(340.95,253,1.0015,1.0339);

	this.instance_9 = new lib.WalkCycle("synched",3);
	this.instance_9.setTransform(365,253,1.0015,1.0339);

	this.instance_10 = new lib.mouths("single",8);
	this.instance_10.setTransform(363.65,172.7,0.5159,1,0,0,0,35.1,24.2);

	this.instance_11 = new lib.eye("single",8);
	this.instance_11.setTransform(364.5,130,1,1,0,0,0,11.3,17.4);

	this.instance_12 = new lib.PencilBody();
	this.instance_12.setTransform(353.5,150.2,1,1,0,0,0,-0.3,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(29));

	// Text
	this.instance_13 = new lib.MiniPencil("synched",0);
	this.instance_13.setTransform(174.35,450.45,1,1,0,0,0,10.8,50.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai6DIQhKhEAAh5QAAhRAhg/QAgg/BBgkQBAgkBMAAQBQAAA4AgQA5AeAdA4QAdA4AABMIAABPIk7AAQAFAgAhATQAfATA2AAQBKAABDgdIAACHQhOAghuAAQiFAAhLhFgAgihyQgSAYgDAoICAAAQAAhZhAAAQgZAAgSAZg");
	this.shape.setTransform(684.775,601.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhpF7IAAr1IDTAAIAAL1g");
	this.shape_1.setTransform(640,589.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhqF2IAAn/IDUAAIAAH/gAhUjLQgigdAAgrQAAgsAhgbQAggbA1AAQA1AAAhAbQAhAbAAAsQAAAtghAcQghAcg1AAQgzAAghgdg");
	this.shape_2.setTransform(608.475,589.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRFvQgjgSgVgdIgCAAIAAA1IjVAAIAAr1IDVAAIAAE7IACAAQAZgmArgWQAqgWAzAAQBhAAA0BBQA0BAAAB7QAABUgcBBQgcBBgzAjQgzAjhAAAQgyAAgigSgAg5AgQgWAbAAArIAAAfQAAAsAUAaQATAaAhAAQAmAAAVgfQAVggAAg6QAAg0gUgaQgUgagkAAQggAAgWAcg");
	this.shape_3.setTransform(560.925,589.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjZDFQhOhJAAh+QAAhSAlg7QAkg9BDgfQBEghBXAAQBbABBDAhQBCAhAkA8QAkA7AABKQAACAhOBLQhPBJiLABQiMgBhNhHgAhPgCQAABzBQgBQBPAAAAh3QAAhphQAAQhPAAAABug");
	this.shape_4.setTransform(494.55,601.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADeFnIAAmJQAAg3ADhCIACgiIgGAAQgQBVgJAgIhpGvIjKAAIhvmpQgEgRgThqIgGAAQAHCoAAApIAAFTIi+AAIAArNIFEAAIBiGFQAEAMAGAlQAEAlACATIADAAQAFgtAMg+IBcmDIE/AAIAALNg");
	this.shape_5.setTransform(411.525,591.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiIBIIAAiPIERAAIAACPg");
	this.shape_6.setTransform(340.175,600.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AA7EGIAAkWQABgwgOgUQgPgVgfAAQgcAAgPAVQgPAWAAAhIAAEjIjWAAIAAn/IDWAAIAABQIABAAQAagsAqgYQArgYAyAAQCpAAAADUIAAE3g");
	this.shape_7.setTransform(287.55,600.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhqF2IAAn/IDUAAIAAH/gAhUjLQgigdAAgrQAAgsAhgbQAggbA1AAQA1AAAhAbQAhAbAAAsQAAAtghAcQghAcg1AAQgzAAghgdg");
	this.shape_8.setTransform(239.425,589.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AkkFnIAArNIElAAQCXABBHA5QBGA5AAB6QAABJglA5QgmA4hEAgQhGAfhaAAIhCAAIAADngAhMgaIAwAAQBcABAAhZQAAgrgZgXQgagWgwgBIgpAAg");
	this.shape_9.setTransform(192.85,591.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai6DIQhKhFAAh4QAAhRAhg/QAgg/BBgjQBAglBMABQBQAAA4AeQA5AgAdA4QAdA3AABMIAABOIk7AAQAFAiAhASQAfATA2AAQBKAABDgdIAACHQhOAfhuABQiFAAhLhFgAgihyQgSAYgDAoICAAAQAAhZhAAAQgZABgSAYg");
	this.shape_10.setTransform(623.625,459.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA+F7IAAkkQAAhMg6gBQgcAAgPAXQgPAVAAAiIAAEjIjVAAIAAr1IDVAAIAAE7IACAAQAcgnAmgVQAngWAtABQBTgBArA2QAsA1AABmIAAE7g");
	this.shape_11.setTransform(563.4,447.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhDEkQgygxAAhaIAAi7IhQAAIAAiUIBQAAIAAhlIDRg5IAACeIBrAAIAACUIhrAAIAACYQAABDA2AAQAZABAcgMIAACUQgPAHghAHQghAFguABQhZAAgygyg");
	this.shape_12.setTransform(510.15,452.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ai6DIQhKhFAAh4QAAhRAhg/QAgg/BBgjQBAglBMABQBQAAA4AeQA5AgAdA4QAdA3AABMIAABOIk7AAQAFAiAhASQAfATA2AAQBKAABDgdIAACHQhOAfhuABQiFAAhLhFgAgihyQgSAYgDAoICAAAQAAhZhAAAQgZABgSAYg");
	this.shape_13.setTransform(432.075,459.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ai8FhQgygggZg6QgZg6AAhPQAAhSAeg+QAdg/A2gjQA1gjBDAAQAfAAAaAJQAbAJAUAQQATAPAGAPIACAAIAAkpIDVAAIAAL1IjVAAIAAg8IgCAAQgaAigpATQgoATgoAAQhBAAgygggAgyAkQgWAgAAA1QAABsBKAAQAkAAAVgdQAVgdAAg4IAAgOQAAgugUgZQgUgagjAAQghAAgWAgg");
	this.shape_14.setTransform(369.125,447.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhqF2IAAn/IDUAAIAAH/gAhUjLQgigdAAgrQAAgsAhgbQAggbA1AAQA1AAAhAbQAhAbAAAsQAAAtghAcQghAcg1AAQgzAAghgdg");
	this.shape_15.setTransform(321.625,447.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah9EGQg0gIgfgJIAAiWQBeAqA/AAQA+AAAAghQAAgNgNgIQgPgJg+gVQhEgVgfgjQgegkAAg4QAAhQA/guQA/gvBxABQBEgBBKAUIAACQQgfgOglgJQgmgJgZAAQgWAAgMAHQgMAHAAAMQAAAPANAJQANAJApAMQBPAXAhAlQAjAjgBA4QABBXhCAwQhDAvh2ABQgigBgygGg");
	this.shape_16.setTransform(282.1,459.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA7EGIAAkWQABgwgOgUQgPgVgfAAQgcAAgPAVQgPAWAAAhIAAEjIjWAAIAAn/IDWAAIAABQIABAAQAagsAqgYQArgYAyAAQCpAAAADUIAAE3g");
	this.shape_17.setTransform(224.55,459.025);

	this.instance_14 = new lib.Bitmap1();
	this.instance_14.setTransform(468.35,608.8,0.0561,0.0561,0,1.9019,-178.0981);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_13}]}).wait(29));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(790.8,182.8,1338.8,972.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];
// library properties:
lib.properties = {
	id: 'CF2E011FA3E85446A3FC677796804E89',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#7E7E7E",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CF2E011FA3E85446A3FC677796804E89'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;