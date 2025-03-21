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



(lib.Bitmap = function() {
	this.initialize(img.Bitmap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,545,547);// helper functions:

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


(lib.ground = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CC0000").ss(4,1,1).p("EhnLgFVMDOXAAAIAAKrMjOXAAAg");
	this.shape.setTransform(660.425,34.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("EhnLAFWIAAqrMDOXAAAIAAKrg");
	this.shape_1.setTransform(660.425,34.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ground, rect = new cjs.Rectangle(-2,-2,1324.9,72.3), [rect]);


(lib.door = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(4,1,1).p("Ass3EIZZAAMAAAAuJI5ZAAg");
	this.shape.setTransform(81.3,147.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#33CC00").ss(4,1,1).p("ADQAAQAABWg9A9Qg9A9hWAAQhVAAg9g9Qg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A9AABVg");
	this.shape_1.setTransform(78.7,40.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA9g9BVAAQBWAAA9A9QA9A9AABVQAABWg9A9Qg9A9hWAAQhVAAg9g9g");
	this.shape_2.setTransform(78.7,40.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AssXEMAAAguIIZZAAMAAAAuIgAisy9Qg9A9AABWQAABWA9A9QA9A9BWAAQBVAAA9g9QA9g9AAhWQAAhWg9g9Qg9g9hVAAQhWAAg9A9g");
	this.shape_3.setTransform(81.3,147.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.door, rect = new cjs.Rectangle(-2,-2,166.6,299.3), [rect]);


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


(lib.EyeEyelidMiddle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAAANIgFgBIgxgMQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBIgBgFIABgEQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAIBsAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIABAEIgBAFQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgwAMIgGABIAAAAg");
	this.shape.setTransform(0,-4.6498);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYApQgKgWABgeQgBgeAJgWIAyAAQAJAWAAAeQAAAegKAWQgKAXgOAAQgNAAgLgXg");
	this.shape_1.setTransform(0,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EyeEyelidMiddle, rect = new cjs.Rectangle(-5.8,-5.9,11.7,13.6), [rect]);


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


(lib.a = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap();
	this.instance.setTransform(0,0,0.7762,0.7762);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,423,424.6);
p.frameBounds = [rect];


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
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(3.3,-1.5,51.7,42.4);
p.frameBounds = [rect, rect, new cjs.Rectangle(3.3,13.1,51.8,14.7), new cjs.Rectangle(37.8,8.5,28.6,18.8), new cjs.Rectangle(31.1,10.4,37.8,13.7), new cjs.Rectangle(6,9.1,35.8,19.7), new cjs.Rectangle(5.9,6.9,51.9,24), new cjs.Rectangle(2.1,3.4,39.2,29.6), new cjs.Rectangle(6,7.1,52.7,23.8), new cjs.Rectangle(6.2,6.9,51.6,27.7), new cjs.Rectangle(5.4,6.9,52.4,34.8), new cjs.Rectangle(5.9,1.2,52.8,47.9), new cjs.Rectangle(5.4,0.7,53.7,49.3), new cjs.Rectangle(2.6,-1.5,67.6,42.4), new cjs.Rectangle(10.3,7.1,44.5,23.9), new cjs.Rectangle(6.7,7.3,51.9,15.5), new cjs.Rectangle(38.3,8.3,19.5,19.5), new cjs.Rectangle(46.8,7.6,14.5,14.5), new cjs.Rectangle(4,13.6,54.9,6.7), new cjs.Rectangle(3.3,6.8,51.3,20), rect=new cjs.Rectangle(3.3,-1.5,51.7,42.4), rect, new cjs.Rectangle(1.8,7.9,55.6,26.7), new cjs.Rectangle(1.8,7.9,58.4,26.6), new cjs.Rectangle(1.8,7.9,58.3,22.3), new cjs.Rectangle(0.4,8,57,30.2), new cjs.Rectangle(0,6.5,57.4,34.5), new cjs.Rectangle(4.8,-0.5,55.9,48), new cjs.Rectangle(4.3,-1.3,61.4,47.1), new cjs.Rectangle(9.1,10,49,23.5)];


(lib.limbs = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ArmStraight();
	this.instance.setTransform(33.95,36.55,1,1,0,0,0,0,18.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10.1,16.1,24.2,38);
p.frameBounds = [rect, new cjs.Rectangle(28,18.1,12,37), new cjs.Rectangle(28,18.1,12,43.6), new cjs.Rectangle(11.3,17.5,29.2,37.6), new cjs.Rectangle(18,17.7,28.4,36.8), rect=new cjs.Rectangle(21.7,17.2,18.3,37.8), rect, new cjs.Rectangle(21.7,17.2,12.4,41.8), new cjs.Rectangle(5.1,15.5,48,33.8), new cjs.Rectangle(6.1,15.3,47.2,34.8), new cjs.Rectangle(0.3,4.8,67.3,32.1), new cjs.Rectangle(14,2.3,40.6,37.6), new cjs.Rectangle(0,3.8,69.1,35.4), new cjs.Rectangle(33.1,18.2,16.8,42.9), new cjs.Rectangle(33.9,16,41.2,21.8), new cjs.Rectangle(33.5,17.1,16.9,29.3), new cjs.Rectangle(33.1,17.1,21.4,33.2)];


(lib.FanSpin = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.a("synched",0);
	this.instance.setTransform(299.3,299.3,1,1,0,0,0,211.5,212.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-165.0017,x:299.2,y:299.35},10).to({regX:211.3,scaleX:0.9999,scaleY:0.9999,rotation:-180.0009,x:299.4},1).to({regX:211.5,scaleX:1,scaleY:1,rotation:-360,x:299.3,y:299.3},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(87.8,87.1,423,424.6);
p.frameBounds = [rect, new cjs.Rectangle(36.3,35.8,526.2,527.3), new cjs.Rectangle(6.4,6.2,586,586.5), new cjs.Rectangle(0.6,0.7,597.6,597.4), new cjs.Rectangle(19.4,19.8,559.9,559.2), new cjs.Rectangle(61.3,61.9,476.2,474.8), new cjs.Rectangle(56.5,57.2,485.6,484.2), new cjs.Rectangle(16.7,17,565.3,564.6), new cjs.Rectangle(0,0,598.6,598.5), new cjs.Rectangle(7.9,7.8,582.6,583), new cjs.Rectangle(40,39.5,518.5,519.6), new cjs.Rectangle(87.7,87,423,424.6), new cjs.Rectangle(32.6,32.1,533.5,534.4), new cjs.Rectangle(3.4,3.4,591.8,592.1), new cjs.Rectangle(3.3,3.6,592.1,591.7), new cjs.Rectangle(32.1,32.7,534.4,533.4), new cjs.Rectangle(87.1,87.9,424.6,423), new cjs.Rectangle(32.1,32.7,534.5,533.5), new cjs.Rectangle(3.3,3.5,592.1,591.8), new cjs.Rectangle(3.4,3.3,591.8,592.1), new cjs.Rectangle(32.6,32.2,533.5,534.5), new cjs.Rectangle(87.8,87.1,423,424.6)];


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
	this.instance = new lib.EyeEyelidMiddle();
	this.instance.setTransform(11.35,22.85,1,1,0,0,0,0,0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({_off:true},1).wait(18));

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


(lib.TwoLegWalk = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WalkCycle("synched",0);
	this.instance.setTransform(-27.75,-1.85,1.0015,1.0339);

	this.instance_1 = new lib.WalkCycle("synched",7);
	this.instance_1.setTransform(18.6,-1.85,1.0015,1.0339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.8,-2.5,48,33.8);
p.frameBounds = [rect, new cjs.Rectangle(-32.8,-2.4,53.2,34), new cjs.Rectangle(-36.7,-2.6,62.6,34.1), new cjs.Rectangle(-45,-2.8,83.5,34.2), new cjs.Rectangle(-50.1,-3.2,94,34.6), new cjs.Rectangle(-55.6,-3,105.4,34.3), new cjs.Rectangle(-55.8,-2.7,102.6,34.8), new cjs.Rectangle(-53.6,-2.5,90.1,33.8), new cjs.Rectangle(-45.6,-2.4,77.9,34), new cjs.Rectangle(-37.7,-2.6,66,34.1), new cjs.Rectangle(-28.4,-2.8,48.1,34.2), new cjs.Rectangle(-27.8,-3.2,47.3,34.6), new cjs.Rectangle(-27.8,-3,47.4,34.3), new cjs.Rectangle(-27.8,-2.7,47.2,34.8)];


(lib.Pencil = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mouths("synched",2);
	this.instance.setTransform(44.15,152.75,0.644,0.8445,0,0,0,35.1,24.2);

	this.instance_1 = new lib.eye("synched",7);
	this.instance_1.setTransform(42.1,122.45,1,1,0,0,0,11.3,17.4);

	this.instance_2 = new lib.limbs("single",1);
	this.instance_2.setTransform(66.2,153.8,1,1,-14.999,0,0,37.6,30.9);

	this.instance_3 = new lib.limbs("single",1);
	this.instance_3.setTransform(15.55,155.75,1,1,14.9983,0,0,37.6,30.9);

	this.instance_4 = new lib.PencilBody();
	this.instance_4.setTransform(35.6,125.85,1,1,0,0,0,-0.3,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.4,0,72,251.7);
p.frameBounds = [rect];


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.legs = new lib.TwoLegWalk();
	this.legs.name = "legs";
	this.legs.setTransform(-2.95,112,0.5961,1,0,0,0,-5.4,13.3);

	this.body = new lib.Pencil();
	this.body.name = "body";
	this.body.setTransform(0.05,-4.1,1,1,0,0,0,37.4,125.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body},{t:this.legs}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, rect = new cjs.Rectangle(-37.3,-130,74.8,260), [rect]);


// stage content:
(lib.game = function(mode,startPosition,loop,reversed) {
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
		var _this = this;
		
		// Remove any previous click listeners just to be safe
		_this.movieClip_1.removeAllEventListeners("click");
		
		// Add a single click event
		_this.movieClip_1.on("click", function() {
		    _this.movieClip_1.x += 50;
		});
		
		stage.enableMouseOver(3);
		
		createjs.Ticker.on("tick", handleTick);
		
		function handleTick(event) {
		    if (_this.movieClip_1.hitTest(
		        _this.door.x - _this.movieClip_1.x,
		        _this.door.y - _this.movieClip_1.y
		    )) {
		        // Navigate to menu.html
		        window.location.href = "menu.html";
		
		        // Stop checking after redirect is triggered
		        createjs.Ticker.off("tick", handleTick);
		    }
		
		    stage.update();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22));

	// door
	this.door = new lib.door();
	this.door.name = "door";
	this.door.setTransform(1167.45,502.8,1,1,0,0,0,81.3,147.7);

	this.timeline.addTween(cjs.Tween.get(this.door).wait(22));

	// ground
	this.ground = new lib.ground();
	this.ground.name = "ground";
	this.ground.setTransform(662.05,683.45,1,1,0,0,0,660.4,34.1);

	this.timeline.addTween(cjs.Tween.get(this.ground).wait(22));

	// Layer_7
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(408.8,513.7);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(22));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpAiQgPgOAAgUQAAgVAPgNQAQgNAZAAQAaAAAQANQAPANAAAVQAAAVgPAOQgPANgbAAQgYAAgRgOg");
	this.shape.setTransform(618.8,51.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdB/IAAiGQAAgXgHgKQgHgKgPAAQgNAAgHAKQgIAKAAARIAACMIhnAAIAAj3IBnAAIAAAnIABAAQANgVATgMQAVgMAZAAQBRAAAABnIAACWg");
	this.shape_1.setTransform(595.575,43.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhoBfQgmgjAAg8QAAgoASgdQARgdAggPQAigQApAAQAsAAAgAQQAhARAQAcQASAdAAAkQAAA9gmAkQgmAkhDAAQhDAAglgjgAgmAAQAAA2AnAAQAlAAABg5QAAgygnAAQgmAAAAA1g");
	this.shape_2.setTransform(564.3,43.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzC1IAAj3IBmAAIAAD3gAgohiQgQgOAAgUQAAgWAPgNQAQgNAZAAQAaAAAQANQAPANAAAWQAAAVgPAOQgQANgaAAQgYAAgQgOg");
	this.shape_3.setTransform(540.975,38.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8B+QgZgDgPgFIAAhIQAuAUAeAAQAdAAAAgPQAAgHgGgEQgHgEgdgKQghgLgPgQQgPgRAAgcQAAgmAfgWQAegXA2AAQAhAAAkAKIAABFQgPgGgSgFQgSgEgNAAQgKAAgGADQgFAEAAAGQAAAHAGAEQAGAEAUAGQAmAMAQARQAQAQAAAcQAAAqgfAXQghAXg4AAQgRAAgYgEg");
	this.shape_4.setTransform(521.825,43.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhcB+IAAj3IBmAAIAAAsIABAAQAKgYARgMQARgMAXAAQAJAAAGADIAABaQgFgDgLgCQgKgCgGAAQgzAAAAA6IAABrg");
	this.shape_5.setTransform(499.6,43.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhZBhQgkghAAg6QAAgnAPgfQAQgeAfgRQAfgSAlAAQAmAAAbAPQAcAPAOAbQAOAbAAAlIAAAlIiYAAQADAQAPAJQAPAJAaAAQAkAAAggNIAABBQglAPg2AAQg/AAgkghgAgQg3QgJAMgBATIA9AAQAAgqgfAAQgMAAgIALg");
	this.shape_6.setTransform(474.175,43.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+B8IhSj3IBrAAIAeCGQAHAhAAAQIACAAIABgJIAjiuIBsAAIhXD3g");
	this.shape_7.setTransform(445.7,43.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhoBfQgmgjAAg8QAAgoARgdQASgdAggPQAhgQAqAAQAsAAAgAQQAhARAQAcQASAdAAAkQAAA9gmAkQgmAkhDAAQhDAAglgjgAgmAAQAAA2AmAAQAnAAAAg5QAAgygnAAQgmAAAAA1g");
	this.shape_8.setTransform(401.75,43.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABtB/IAAiOQAAgSgGgIQgHgJgOAAQgOAAgIALQgIAKAAATIAACJIhmAAIAAiLQAAgmgaAAQgQAAgIALQgIALAAAUIAACHIhnAAIAAj3IBnAAIAAAnIABAAQAGgKANgLQAMgKAQgHQAQgHATAAQAZAAASALQASAKAMAXQANgVAWgLQAWgMAaAAQAnAAAVAaQAVAZAAAwIAACag");
	this.shape_9.setTransform(362.675,43.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhZBhQgkghAAg6QAAgnAPgfQAQgeAfgRQAfgSAlAAQAmAAAbAPQAcAPAOAbQAOAbAAAlIAAAlIiYAAQADAQAPAJQAPAJAaAAQAkAAAggNIAABBQglAPg2AAQg/AAgkghgAgQg3QgJAMgBATIA9AAQAAgqgfAAQgMAAgIALg");
	this.shape_10.setTransform(325.375,43.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhaCrQgZgQgLgcQgMgcgBgmQABgnAOgeQAOgeAZgRQAagRAhAAQAPAAAMAEQANAFAJAHQAKAHADAHIABAAIAAiPIBmAAIAAFtIhmAAIAAgdIgBAAQgNARgUAJQgSAJgUAAQggAAgXgPgAgXASQgMAPABAZQAAA1AjAAQARAAALgOQAKgOgBgbIAAgHQAAgWgJgMQgKgNgRAAQgPAAgKAQg");
	this.shape_11.setTransform(294.95,38.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhZBhQgkghAAg6QAAgnAPgfQAQgeAfgRQAfgSAlAAQAmAAAbAPQAcAPAOAbQAOAbAAAlIAAAlIiYAAQADAQAPAJQAPAJAaAAQAkAAAggNIAABBQglAPg2AAQg/AAgkghgAgQg3QgJAMgBATIA9AAQAAgqgfAAQgMAAgIALg");
	this.shape_12.setTransform(252.175,43.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAeC3IAAiNQAAglgcAAQgNAAgHALQgHAKAAARIAACMIhoAAIAAltIBoAAIAACYIAAAAQAOgTASgKQATgKAVAAQAoAAAWAaQAUAZAAAxIAACYg");
	this.shape_13.setTransform(223.05,37.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfCOQgZgZAAgrIAAhaIgnAAIAAhIIAnAAIAAgwIBkgcIAABMIA0AAIAABIIg0AAIAABJQABAgAZAAQAMAAAOgEIAABGQgHAEgQADQgQADgXAAQgqAAgXgXg");
	this.shape_14.setTransform(197.35,40.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag8B+QgZgDgPgFIAAhIQAuAUAeAAQAdAAAAgPQAAgHgGgEQgHgEgdgKQghgLgPgQQgPgRAAgcQAAgmAfgWQAegXA2AAQAhAAAkAKIAABFQgPgGgSgFQgSgEgNAAQgKAAgGADQgFAEAAAGQAAAHAGAEQAGAEAUAGQAmAMAQARQAQAQAAAcQAAAqgfAXQghAXg4AAQgRAAgYgEg");
	this.shape_15.setTransform(161.775,43.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgzC1IAAj3IBmAAIAAD3gAgohiQgQgOAAgUQAAgWAPgNQAQgNAZAAQAaAAAQANQAPANAAAWQAAAVgPAOQgQANgaAAQgYAAgQgOg");
	this.shape_16.setTransform(141.725,38.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag8B+QgZgDgPgFIAAhIQAuAUAeAAQAdAAAAgPQAAgHgGgEQgHgEgdgKQghgLgPgQQgPgRAAgcQAAgmAfgWQAegXA2AAQAhAAAkAKIAABFQgPgGgSgFQgSgEgNAAQgKAAgGADQgFAEAAAGQAAAHAGAEQAGAEAUAGQAmAMAQARQAQAQAAAcQAAAqgfAXQghAXg4AAQgRAAgYgEg");
	this.shape_17.setTransform(108.875,43.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgzC1IAAj3IBmAAIAAD3gAgohiQgQgOAAgUQAAgWAPgNQAQgNAZAAQAaAAAQANQAPANAAAWQAAAVgPAOQgQANgaAAQgYAAgQgOg");
	this.shape_18.setTransform(88.825,38.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAeC3IAAiNQAAglgcAAQgNAAgHALQgHAKAAARIAACMIhnAAIAAltIBnAAIAACYIAAAAQAOgTASgKQATgKAVAAQAoAAAVAaQAWAZgBAxIAACYg");
	this.shape_19.setTransform(66.1,37.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag0CtIAAkIIhhAAIAAhRIErAAIAABRIhiAAIAAEIg");
	this.shape_20.setTransform(34.95,38.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(22));

	// FanSpin
	this.instance = new lib.FanSpin("synched",0);
	this.instance.setTransform(292.4,360.1,1,1,0,0,0,299.2,299.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));

	// Layer_2
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#252525").s().p("Eh3XBGXQgtAAgWgGQgcgKgkggQhihVhJhtQhJhtgoh7QgmhygOiQQgLhsABiaIAAgQQhTi1gGjQQgGjkBZjLQBajLCsiVQCsiXDWg9QBsgfCQgLQBjgTBmACQBQABBOAOICFAEQCVAFBmgGQBcgFCJgSIDkgeQEEgdF9ACQDYAAGuAQIJPAUQCyAFBaABQCVABB2gJQDOgPEgg+QDtgyD7hDQCZgqExhaIJmi1QDehCB5glQC9g7CWg3QC8hEEah3QF+ifDjhvQDahpD5iLQDDhtEDidQGwkFFMjfQGRkPFIkIQBzhcBJhDQBjhbBHhXQAvg6AyhKQAkg1A0hVQCJjbBXihQAthTBJiPQBUinAfg8QA3hpCRkDQCOj+BLiMQBhi0BLibQgTjhBIjbQBFjPCKipQBjh6B6hXQA/hyA8hdQATgdASgJQALgGAfAAIYogCIABAAIAEAAQAbABANAFQAUALATAiQBhCwAYDGIACACIBIA8QAqAkAgAVQAlAZA8AdIBkAwQC6BiCFCpQCFCqAzDLQArCugNDnQgGBpgoEyQCgAyCIBmQCJBnBeCKQBeCKAtClQAtClgLCmQgLCehFDTQgnB5hXDvQgiBrhADxQg8DjgpB3QhBC/h/EKIjZG/IhRC1IjVHjQCmBLCECBQCFCCBMCkQBNClANC5QANC4g1CuQglB3hJB+Qg6BmhcB7QkbF3lsEhQl0EomoCzQg8AagqAOQg5ASgyAIQguAGheAAg");
	this.shape_21.setTransform(680.4892,324.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(22));

	// Layer_1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000002").s().p("EAnrBUCQgwhqgYhwQgHgfgEggIjNBjIjaBpQg+AeghANQg2AVguAIQgcAFglACIhCABMiedgADQCtiJEPghQBqgNCGACQBOABCjAJQIiAgDnATIFMAaQDBAPCLAFQEKAKF2gOQJ5gXIYhAQJnhJIbiEQDrg5EfhWQB6gkC/g8IDNhBQOQkiIai/QMYkYJzkZQDphoGgjIQIbkDEeifQG/j6FAkEQC+iaDPjQQCaiaDWjtQDLjgCKilQCzjXCJjCQEmmhC1m3QBNi5BrlGQBzlcA6jcQA4jTAJgfQApiJAwhgIANgYQAgieAqi8QAnivBsnRQBPlQAqiXIAkh+QAUhIAKg2QANhFAIhWQAFgzAHhoIAMjXQAGh4AAheIACkyQAFiwAfh+QAvi8B1igQB2igCmhlQBOgvBWggQBegkBngQQDEgfC8AsQDXAyCxCOQCyCOBfDGQBBCJAdCsQAYCSgBCzQgBBygPDTQgPDfgCBmQgCBvADDfQgDDDgdCGQgTBVgqB6IhIDMQgaBQgbBoIguC6QhXFsgmCuQhDEtgpDyQghDDgDB1QgBArAEBtQADBhgDA3QgOEhivD2IgIALQhmCNiEBfQgzCYgqBuQgpBtgwBuQAdgbAcgXQCJhtCqg4QCqg4CvAFQDdAHDLBoQA9AfA2AlQCABYBeB8QCHCwAuDgQAuDgg2DWQgqCoh0DCQghA4i7EWQhQB4iTDsQiXDyhMByQhrChjSEiIk6GzQh4Ckg/BRQhqCFhgBhQj1D0kGBYQjDBCjUgTQjTgTi0hkQhLgphCg2QmZF1izCpQgcAbgRANQgaAUgaAIQgZAIg1AAg");
	this.shape_22.setTransform(701.058,378.6593);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("EAlyBRpQAFAgAHAgQhGAOhEAKIhOAMIDMhkgEglgBMIQj6hKioiDQhfhKhGhcQhJhhgkhsQshBcvIAqQrBAfwtANQj9AEiGgNQjVgUidhDQiwhMiJiQQiHiOhEi1QhEiyAEjGQAEjDBJizQBEinB4iDQB8iHCdhLQCZhIDUgZQCDgPD8gBQNVgEIEgPQLwgWJng0QLUg+J6hxQLBh9JxjBQFehtGgifQEmhwHLi/QJykEF7iyQIikAGmkCQQXp8JCstQDck1DImWQCWkxC3nIQC2nFBakvQB7mmAXlqQAFhHAFiPQAIh8AShXQA5kYDTjVQDTjWEXg8QEXg9EZBqQBPAeBHAoQhWAghOAwQimBlh2CgQh1CfgvC8QgfB+gFCwIgCEyQAABfgGB4IgMDWQgHBogFA0QgIBWgNBEQgKA2gUBJIgkB9QgqCXhPFRQhsHRgnCvQgqC8ggCdIgNAYQgwBhgpCIQgJAfg4DTQg6DdhzFcQhrFGhNC4Qi1G4kmGhQiJDBizDXQiKCmjLDfQjWDuiaCaQjPDPi+CaQlAEFm/D5QkeCgobEDQmgDIjpBoQpzEYsYEYQoaC/uQEiIjNBBQgxgLgsgOgEBqfAMIQAqhuAziZQCDheBniOIAIgLQCrBTCFBTQCtBsCEB6QB8BzBbCDQg3gmg8gfQjLhojdgHQivgFiqA4QiqA5iJBtQgdAXgcAaQAvhtAqhtg");
	this.shape_23.setTransform(704.7889,365.8008);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).wait(22));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(497.6,193.3,1687,1083.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];
// library properties:
lib.properties = {
	id: 'E7B103A52C5227488235063E92652E56',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap.png", id:"Bitmap"}
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
an.compositions['E7B103A52C5227488235063E92652E56'] = {
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