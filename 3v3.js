const { auth } = require("@googleapis/searchconsole");
const HaxballJS = require("haxball.js");
const fs = require('fs');
const path = require('path');
var cor = 0xa52a2a;
var mesjcor = 0xF0F0F0;
var relmsj = 0xDADADA;  
var entrmsj = 0xE7E000;
var commsj = 0x00B706;
var privmsg = 0x86CDFD;
var comcolor = 0x00BFFF;
var estilo = ["normal", "bold", "italic", "small", "small-bold", "small-italic"];
var mapa = '{"name":"Futsal x3  by Bazinga from HaxMaps","width":620,"height":270,"spawnDistance":350,"bg":{"type":"hockey","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80]},{"x":550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80]},{"x":-557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80]},{"x":557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80]},{"x":557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80]},{"x":557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":0,"y":-80,"bCoef":0.1,"trait":"line"},{"x":0,"y":80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":550,"y":80,"bCoef":0.1,"trait":"line"},{"x":-240,"y":256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":256,"bCoef":0.1,"trait":"line"},{"x":-240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":240,"y":256,"bCoef":0.1,"trait":"line"},{"x":120,"y":224,"bCoef":0.1,"trait":"line"},{"x":120,"y":256,"bCoef":0.1,"trait":"line"},{"x":240,"y":-224,"bCoef":0.1,"trait":"line"},{"x":240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90},{"x":-556,"y":123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line"},{"x":556,"y":123,"bCoef":0.1,"trait":"line"},{"x":575,"y":123,"bCoef":0.1,"trait":"line"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":381,"y":240,"bCoef":0.1,"trait":"line"},{"x":381,"y":256,"bCoef":0.1,"trait":"line"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":0},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-550},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":550},{"v0":64,"v1":65,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":66,"v1":67,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":69,"v1":68,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":70,"v1":71,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":67,"v1":71,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":73,"v1":72,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":80,"v1":81,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":82,"v1":83,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":89,"v1":88,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":91,"v1":90,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":92,"v1":93,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":94,"v1":95,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":99,"v1":98,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":98,"v1":99,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":101,"v1":100,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":100,"v1":101,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":103,"v1":102,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":102,"v1":103,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":105,"v1":104,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":104,"v1":105,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":107,"v1":106,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":106,"v1":107,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":109,"v1":108,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":111,"v1":110,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":110,"v1":111,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":113,"v1":112,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":112,"v1":113,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":115,"v1":114,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":114,"v1":115,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":117,"v1":116,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":116,"v1":117,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":119,"v1":118,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":118,"v1":119,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":121,"v1":120,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":120,"v1":121,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":123,"v1":122,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":122,"v1":123,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":125,"v1":124,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":124,"v1":125,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":127,"v1":126,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":126,"v1":127,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":129,"v1":128,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":128,"v1":129,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5}],"goals":[{"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red"},{"p0":[557.5,80],"p1":[557.5,-80],"team":"blue"}],"discs":[{"radius":5,"pos":[-550,80],"color":"FF6666","trait":"goalPost","y":80},{"radius":5,"pos":[-550,-80],"color":"FF6666","trait":"goalPost","y":-80,"x":-560},{"radius":5,"pos":[550,80],"color":"6666FF","trait":"goalPost","y":80},{"radius":5,"pos":[550,-80],"color":"6666FF","trait":"goalPost","y":-80},{"radius":3,"invMass":0,"pos":[-550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1},{"normal":[-1,0],"dist":-620,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFCC00"}}'
const HaxNotification = { NONE: 0, CHAT: 1, MENTION: 2 };
let lastPlayersTouched = [null, null];
let intervalo;
var playerNames = {};
var playerData = {};
var playerStats = {};
const playerStatsFilePath = path.join(__dirname, 'playerStats.json');
const maxtemp = 3;
const segundosPosibles = [30, 45, 60, 75, 90];
let relatorAlready = false;
let minutos;
let duracionAleatoria;
let finalizacionMensajeEnviado = false;
let entrya = false;
const playerIps = {};
let sizeEnabled = true;
let afkEnabled = true;
const inactivityThreshold = 7 * 24 * 60 * 60 * 1000;
let inactivePlayers = {};
const lastPrivateMessageFrom = {};
var blue = [0x000000,0x000000,0x000000]
var red = [0xFFFFFF,0xFFFFFF,0xFFFFFF]
const MAX_TEAM = 3;
const DELAY_AFTER_MOVING_LOSERS_MS = 600;
const MOVE_INTERVAL_MS = 200;

class Command {
    constructor(name, args, description, options = { admin: false }) { // Establece admin como false por defecto
        this.name = name;
        this.args = args;
        this.description = description;
        this.options = options; // Este objeto puede contener { admin: true }
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function loadPlayerStats() {
    if (fs.existsSync(playerStatsFilePath)) {
        const data = fs.readFileSync(playerStatsFilePath);
        playerStats = JSON.parse(data);
    }
}

// Guardar estadísticas de jugadores en el archivo JSON
function savePlayerStats() {
    fs.writeFileSync(playerStatsFilePath, JSON.stringify(playerStats, null, 2));
}

function cleanupInactivePlayers() {
    const now = Date.now();
    for (const auth in playerStats) {
        const lastConnected = new Date(playerStats[auth].lastConnected).getTime();
        if (now - lastConnected > inactivityThreshold) {
            delete playerStats[auth]; // Eliminar estadísticas del jugador
        }
    }
    savePlayerStats(); // Guardar los cambios después de limpiar
}

HaxballJS.then((HBInit) => {
    room = HBInit({
        roomName: "𝟯𝙫𝟯 #𝙃𝙓𝘽𝙃",
        maxPlayers: 9,
        public: true,
        noPlayer: true,
        token: "thr1.AAAAAGk9o_MdeE-v0Rv4QA.M2voQVXSdkQ",
        playerName: "⚽𝗔𝗿𝗯𝗶𝘁𝗿𝗼",
        flag: "AR"
    });  

    room.setCustomStadium(mapa)
    room.setScoreLimit(3);
    room.setTimeLimit(maxtemp);
    room.setTeamColors(2,0,0xFFFFFF, blue)
    room.setTeamColors(1,0,0x000000, red)
    room.startGame();

    let adminPassword = 100 + getRandomInt(9000);
    console.log("adminPassword : " + adminPassword);


    room.onRoomLink = function (link) {
        console.log(link);
    };

    let redTeamCount = 0;
    let blueTeamCount = 0;

    room.onPlayerJoin = function (player) {
        const players = room.getPlayerList();
        const redCount = players.filter(p => p.team === 1).length;
        const blueCount = players.filter(p => p.team === 2).length;

        if (player.avatar === "卐" || (player.avatar && player.avatar.includes("卐")) || player.name.includes("卐")) {
            room.kickPlayer(player.id, "Nombre o avatar inapropiado. Conseguite una vida tarado", true);
            return;
        }

        if (redCount < MAX_TEAM || blueCount < MAX_TEAM) {

            if (redCount < blueCount && redCount < MAX_TEAM) {
                room.setPlayerTeam(player.id, 1);
            } else if (blueCount < redCount && blueCount < MAX_TEAM) {
                room.setPlayerTeam(player.id, 2);
            } else if (redCount < MAX_TEAM) {
                room.setPlayerTeam(player.id, 1);
            } else if (blueCount < MAX_TEAM) {
                room.setPlayerTeam(player.id, 2);
            } else {
                room.setPlayerTeam(player.id, 0);
            }

        } else {
            room.setPlayerTeam(player.id, 0);
        }
    
        var playerConnection = player.conn;
        const output = Buffer.from(playerConnection, 'hex');
    
    
        playerData[player.id] = {
            ...player
          }
    
        const playerAuth = playerData[player.id].auth;
    
        if (!playerStats[playerAuth]) {
            playerStats[playerAuth] = {
                name: player.name,
                goals: 0,
                autoGoals: 0,
                matches: 0,
                prefix: undefined,
                isAdmin: false,
                lastConnected: new Date().toISOString() // Fecha actual
            };
        } else {
            const defaultValues = {
                goals: 0,
                autoGoals: 0,
                matches: 0,
                prefix: undefined,
                isAdmin: false,
                lastConnected: new Date().toISOString()
            };
        
            Object.keys(defaultValues).forEach(field => {
                if (!(field in playerStats[playerAuth])) {
                    playerStats[playerAuth][field] = defaultValues[field];
                }
            });
        }
        playerStats[playerAuth].lastConnected = new Date().toISOString();
        playerStats[playerAuth].name = player.name;

        updatePlayerName(player);
        playerNames[player.id] = player.name;
    
        playerIps[player.id] = output || "IP no disponible";
    
        room.sendAnnouncement(` ╔════════════════════════════════════════════════════╗\n ║           ⚽ ¡Bienvenido ${player.name} a Primera HaxNacional!⚽\n ║           👨‍💻 Revisa los comandos con !help y mira tus estadísticas\n ║           😂¡Diviértete y mete goles!😂\n ╚════════════════════════════════════════════════════╝`, player.id, comcolor, estilo[0], HaxNotification.CHAT);
    
        if (playerStats[player.auth].isAdmin) {
            room.setPlayerAdmin(player.id, true);
            room.sendAnnouncement(`Se ha unido a la sala el Admin ${player.name}`, null, 0x00BFFF, estilo[1], HaxNotification.CHAT);
            playerStats[player.auth].isAdmin = true;
            updatePlayerName(player);
        }
        savePlayerStats();
    };

    function getTeamPrefix(player) {
        const playerDataEntry = playerData[player.id]; // Guardamos la entrada de playerData
        const playerAuth = playerDataEntry ? playerDataEntry.auth : null; // Verificamos si existe antes de acceder a auth
    
        if (player.admin) {
            return "[⚡Admin ] "; 
        } else if (player.team === 1) {
            return "[🔴] "; 
        } else if (player.team === 2) {
            return "[🔵] "; 
        } else if (player.team === 0) {
            return "[⚫] "; 
        }
    
        return ""; // Retornamos una cadena vacía si no se cumple ninguna condición
    }
    
    // Eliminar el prefijo de equipo y admin
    function removeTeamPrefix(name) {
        if (name) {
            return name.replace(/^\[(?:🔴|🔵|⚫|⚡Admin |😴 )\]\s*/, "").trim(); 
        } else {
            return "";
        }
    }
    
    function updatePlayerName(player) {
        const playerId = player.id;
        var data = playerData[playerId];
        
        if (data) {
            var teamPrefix = getTeamPrefix(player);
            var nameWithoutPrefix = removeTeamPrefix(data.name);
            var newName = teamPrefix + nameWithoutPrefix;
            playerData[player.id].name = newName;
            lastName = newName; // Actualizamos lastName aquí para actualizar el nombre del jugador en el juego
        } else {

        }
    }

    function onPlayerAdminChange(target) {
    const targetAuth = playerData[target.id]?.auth;

    if (!targetAuth || !playerStats[targetAuth]) {
        room.sendAnnouncement("❌ No se pudo actualizar el estado de admin. Datos faltantes.", null, comcolor, estilo[1], HaxNotification.CHAT);
        return;
    }

    if (!playerStats[targetAuth].isAdmin) {
        room.sendAnnouncement(`${target.name} 👑 Ahora es admin.`, null, comcolor, estilo[1], HaxNotification.CHAT);
    } else if (playerStats[targetAuth].isAdmin) {
        room.sendAnnouncement(`${target.name} ❌ Ya no es admin.`, null, comcolor, estilo[1], HaxNotification.CHAT);
    }

    updatePlayerName(target);
}   

    loadPlayerStats();

    room.onPlayerLeave = function(player) {
        delete inactivePlayers[player.id];
        const players = room.getPlayerList();
        const redCount = players.filter(p => p.team === 1).length;
        const blueCount = players.filter(p => p.team === 2).length;
        const spectators = players.filter(p => p.team === 0);

        if (spectators.length > 0) {

            if (redCount < blueCount && redCount < MAX_TEAM) {
                room.setPlayerTeam(spectators[0].id, 1);

            } else if (blueCount < redCount && blueCount < MAX_TEAM) {
                room.setPlayerTeam(spectators[0].id, 2);

            } else if (redCount < MAX_TEAM) {
                room.setPlayerTeam(spectators[0].id, 1);

            } else if (blueCount < MAX_TEAM) {
                room.setPlayerTeam(spectators[0].id, 2);
            }
        }
    };
    
    room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
        const newTeam = changedPlayer.team;
        var equipo;
    
        if (newTeam == 1) { 
            equipo = "Rojo";
            redTeamCount++;
            if (changedPlayer.team == 2) {
                redTeamCount--;
            }
        } else if (newTeam == 2) {
            equipo = "Azul";
            blueTeamCount++;
            if (changedPlayer.team == 1) {
                blueTeamCount--;
            }
        } else if (newTeam == 0) {
            elapsedTime = 0
            equipo = "Espectadores";
            if (changedPlayer.team == 1) {
                blueTeamCount--;
            } else if (changedPlayer.team == 2) {
                redTeamCount--;
            }
        }
        
        removeTeamPrefix();
        updatePlayerName(changedPlayer);
    
        // Verificar si el jugador existe en playerData antes de asignar el equipo
        if (playerData[changedPlayer.id]) {
            playerData[changedPlayer.id].team = changedPlayer.team;

        } else {
            console.error(`Player data for ID ${changedPlayer.id} not found.`);
            // Inicializar playerData si es necesario
            playerData[changedPlayer.id] = {
                name: changedPlayer.name,
                team: changedPlayer.team,
                auth: changedPlayer.auth,
                admin: changedPlayer.admin
            };
        }
    
        if (entrya == true && newTeam !== 0) {
            room.sendAnnouncement(`Entrenador💪: Ahora jugas para el equipo ${equipo}`, changedPlayer.id, entrmsj, estilo[1], HaxNotification.CHAT);
        }
        entrya = true;
    };

    function Victory() {
        const scores = room.getScores();
        const blueScore = scores.blue;
        const redScore = scores.red;

        const winnerTeam = blueScore > redScore ? 2 : 1; // 1 = red, 2 = blue
        const loserTeam = winnerTeam === 1 ? 2 : 1;
        const tie = blueScore === redScore;

        const msg = tie
            ? `Relator🎙️: ¡Empate! 🟦${blueScore}-${redScore}🟥`
            : `Relator🎙️: Ganó el ${winnerTeam === 1 ? "ROJO 🟥" : "AZUL 🟦"} ${blueScore}-${redScore}!`;

        room.sendAnnouncement(msg, null, 0xFFFFFF);

        room.stopGame();

        const beforeSnapshot = room.getPlayerList();
        const spectatorsBefore = beforeSnapshot.filter(p => p.team === 0);

        const losers = beforeSnapshot.filter(p => p.team === loserTeam);
        losers.forEach(p => room.setPlayerTeam(p.id, 0));
        setTimeout(() => {
            const refreshed = room.getPlayerList();
            const currentLosers = refreshed.filter(p => p.team === loserTeam);
            const spectatorsNow = refreshed.filter(p => p.team === 0);
            const missing = MAX_TEAM - currentLosers.length;
            if (missing <= 0) {
                setTimeout(() => room.startGame(), 500);
                return;
            }

            const pool = [];
            for (let p of spectatorsBefore) {
                const stillSpec = spectatorsNow.find(s => s.id === p.id);
                if (stillSpec) pool.push(stillSpec);
            }
            for (let p of spectatorsNow) {
                if (pool.length >= missing) break;
                if (!pool.some(x => x.id === p.id)) pool.push(p);
            }
            const toMove = pool.slice(0, missing);

            let idx = 0;
            const moveNext = () => {
                if (idx >= toMove.length) {
                    room.sendAnnouncement("Comentarista 💬: El nuevo partido comenzará pronto!", null, commsj, estilo[1], HaxNotification.CHAT);
                    setTimeout(() => room.startGame(), 700);
                    return;
                }
                const p = toMove[idx];
                room.setPlayerTeam(p.id, loserTeam);
                idx++;
                setTimeout(moveNext, MOVE_INTERVAL_MS);
            };

            if (toMove.length > 0) {
                setTimeout(moveNext, 150);
            } else {
                setTimeout(() => room.startGame(), 700);
            }

        }, DELAY_AFTER_MOVING_LOSERS_MS);
    }

    room.onTeamVictory = function () {
        setTimeout(() => {
            Victory();
        }, 3000);
    }

    function shuffleTeams() {
        const players = room.getPlayerList();
        const activePlayers = players.filter(p => p.team !== 0);

        activePlayers.forEach(p => room.setPlayerTeam(p.id, 0));

        for (let i = activePlayers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [activePlayers[i], activePlayers[j]] = [activePlayers[j], activePlayers[i]];
        }

        const half = Math.ceil(activePlayers.length / 2);

        const team1 = activePlayers.slice(0, half);  // ROJO
        const team2 = activePlayers.slice(half);     // AZUL

        team1.forEach(p => room.setPlayerTeam(p.id, 1));
        team2.forEach(p => room.setPlayerTeam(p.id, 2));
}


    room.onPlayerChat = function (player, message) {
        const args = message.split(" ");
        message = message.trim();
        lastName = player.name
        const playerAuth = playerData[player.id].auth;
        const playerInfo = playerStats[playerAuth];
        const isAdmin = player.admin
        // Detectar el equipo del jugador
        if (message.startsWith('!')) {
            // Si el mensaje comienza con "!", es un comando
            var command = message.split(" ")[0].toLowerCase(); // Obtener el comando (la primera palabra después de "!")
            switch (command) {
                case "!claim":
                    if (parseFloat(message.split(" ")[1]) === adminPassword) {
                        room.setPlayerAdmin(player.id, true);
                        onPlayerAdminChange(player);
                        updatePlayerName(player);
                        adminPassword = 100 + getRandomInt(9000);
                        console.log("adminPassword : " + adminPassword);
                        room.sendAnnouncement(`Bienvenido ${player.name}`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                    } else {
                        room.sendAnnouncement(`Código erróneo`, player.id, cor, estilo[1], HaxNotification.CHAT);
                    }
                    return false;
                    break;
                    case "!team":
                        var teamArgs = message.split(" ");
                        
                        // Verificar que se haya pasado un argumento
                        if (teamArgs.length === 2) {
                            var teamChoice = teamArgs[1].toLowerCase(); // Convertir la opción a minúsculas
                            
                            // Verificar si el jugador es admin
                            if (player.admin) {
                                switch (teamChoice) {
                                    case 'b':
                                        room.setPlayerTeam(player.id, 2); 
                                        break;
                                    case 'r':
                                        room.setPlayerTeam(player.id, 1); 
                                        break;
                                    case 'e':
                                        room.setPlayerTeam(player.id, 0); 
                                        inactivePlayers[player.id] = undefined;
                                        room.sendAnnouncement(`${player.name} se ha unido a los Espectadores.`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                        break;
                                    default:
                                        room.sendAnnouncement("Opción de equipo inválida. Usa 'b' para Blue, 'r' para Red o 'e' para Espectadores.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                }
                            } else {
                                room.sendAnnouncement("Comando denegado. Solo los administradores pueden cambiar de equipo.", player.id, cor, estilo[1], HaxNotification.CHAT);
                            }
                        } else {
                            room.sendAnnouncement("Uso incorrecto. Usa: !team <b/r/e>", player.id, cor, estilo[1], HaxNotification.CHAT);
                        }
                        return false;
                        break;
                    
                case "!help":
                        const Commands = [
                            new Command('help', [], 'Muestra esta página', { optionalArgs: true }),
                            new Command('claim', ['code'], 'Le da admin a un jugador con codigo', { admin: true }),
                            new Command('admin', ['id'], 'Le da admin a un jugador', { admin: true }),
                            new Command('unadmin', ['id'], 'Le saca admin a un jugador', { admin: true }),
                            new Command('map', ['map-name'], 'Permite cambiar el mapa', { admin: true }),
                            new Command('team', ['team-id'], 'Cambia tu equipo', { admin: true }),
                            new Command('clearbans', [], 'Elimina los baneos', { admin: true }),
                            new Command('ball', [], 'Mueve la pelota a (0;0)', { admin: true }),
                            new Command('say', ['id'], 'Decir algo desde el nombre de otra persona', { admin: true }),
                            new Command('msg', ['id'], 'Envía mensaje privado a otro jugador por su id'),
                            new Command('r', [''], 'Respondele un mensaje privado a alguien'),
                            new Command('id', ['name'], 'Obtén el id de un jugador mediante su nombre', { admin: true }),
                            new Command('shuffle', [], 'Mezcla los equipos', { admin: true }),
                            new Command('adm', ['value'], 'Cambia la configuración de un comando', { admin: true }),
                            new Command('size', ['radius'], 'Cambia el tamaño del jugador (default: 15)'),
                            new Command('ip', ['id'], 'Obtiene la ip de un jugador por su id', { admin: true }),
                            new Command('stats', [], 'Mira tus estadísticas como jugador. (Goles, Autogoles y partidos jugados)'),
                            new Command('auth', [], 'Revisa tu auth'),
                            new Command('prefix', ['prefix'], 'Agrega un prefix antes de tu nombre.', { admin: true}),
                            new Command('delprefix', [], 'Elimina tu prefix.', { admin: true})
                        ];
                    
                        let messagesToSend = [];
                        let helpMessage = "║ Comandos disponibles:\n";
                        let commandCount = 0;
                    
                        Commands.forEach(command => {
                            if (command.options.admin && !player.admin) return;
                    
                            let commandMessage = 
                                `║ Comando: ${command.name}   ●  Descripción: ${command.description}\n` +
                                (command.args.length > 0 ? 
                                    `║ Argumentos: ${command.args.map(arg => `<${arg}>`).join(' ')}\n` : '') +
                                `║\n`;
                    
                            helpMessage += commandMessage;
                            commandCount++;
                    
                            if (commandCount === 8) {
                                messagesToSend.push(helpMessage);
                                helpMessage = ""; // Reinicia el mensaje
                                commandCount = 0; // Reinicia el contador
                            }
                        });
                    
                        // Envía cualquier mensaje que haya quedado
                        if (helpMessage.trim() !== "") {
                            messagesToSend.push(helpMessage);
                        }
                    
                        // Envía el mensaje con los bordes solo en el primer y último mensaje
                        if (messagesToSend.length > 0) {
                            room.sendAnnouncement(`╔════════════════════════════════════════════════════╗\n${messagesToSend[0]}`, player.id, comcolor, estilo[4], HaxNotification.CHAT);
                    
                            // Envía los mensajes intermedios sin bordes
                            for (let i = 1; i < messagesToSend.length; i++) {
                                room.sendAnnouncement(`${messagesToSend[i]}`, player.id, comcolor, estilo[4], HaxNotification.CHAT);
                            }
                    
                            // Envía el último mensaje con el borde
                            room.sendAnnouncement(`╚════════════════════════════════════════════════════╝`, player.id, comcolor, estilo[4], HaxNotification.CHAT);
                        } else {
                            room.sendAnnouncement("No hay comandos disponibles.", player.id, cor, estilo[1], HaxNotification.CHAT);
                        }
                        
                        return false;
                        break;

                case "!clearbans":
                    var playerInfoClearBans = room.getPlayer(player.id);
                    if (playerInfoClearBans && playerInfoClearBans.admin) {
                        room.clearBans();
                        room.sendAnnouncement(`Todos los jugadores baneados han sido desbaneados`, player.id, comcolor, estilo[4], HaxNotification.CHAT);
                    } else {
                        room.sendAnnouncement(`Comando denegado`, player.id, cor, estilo[1], HaxNotification.CHAT);
                    }
                    return false;
                    break;
                case "!ball":
                    if (isAdmin) {
                        room.setDiscProperties(0, { x: 0, y: 0, xspeed: 0, yspeed: 0 })
                        room.sendAnnouncement(`La pelota ha sido teletransportada a (0;0)`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                    } else {
                        room.sendAnnouncement(`Comando denegado`, player.id, cor, estilo[1], HaxNotification.CHAT);
                    }
                    return false;
                    break;
                    case "!say":
                        var sayArgs = message.split(" ");
                        if (sayArgs.length >= 3) {
                            var targetId = parseInt(sayArgs[1]);
                            var targetPlayer = room.getPlayer(targetId);

                            if (!player.admin) {
                                room.sendAnnouncement("❌ Comando denegado.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                return false;
                            }

                            if (!targetPlayer || !playerData[targetId]) {
                                room.sendAnnouncement("❌ Jugador no encontrado o desconectado.", player.id, mesjcor, estilo[1], HaxNotification.CHAT);
                                return false;
                            }

                            var targetIdAuth = playerData[targetId].auth;
                            var targetMessage = sayArgs.slice(2).join(" ");

                            if (playerStats[targetIdAuth]?.prefix !== undefined) {
                                if (playerStats[targetIdAuth].isAdmin) {
                                    room.sendAnnouncement(`[${playerStats[targetIdAuth].prefix}] ${playerData[targetId].name} » ${targetMessage}`, null, 0x00BFFF, estilo[1], HaxNotification.CHAT);
                                } else {
                                    room.sendAnnouncement(`[${playerStats[targetIdAuth].prefix}] ${playerData[targetId].name} » ${targetMessage}`, null, mesjcor, estilo[2], HaxNotification.CHAT);
                                }
                            } else {
                                if (playerStats[targetIdAuth].isAdmin) {
                                    room.sendAnnouncement(`${playerData[targetId].name} » ${targetMessage}`, null, 0x00BFFF, estilo[1], HaxNotification.CHAT);
                                } else {
                                    room.sendAnnouncement(`${playerData[targetId].name} » ${targetMessage}`, null, mesjcor, estilo[2], HaxNotification.CHAT);
                                }
                            }
                        } else {
                            room.sendAnnouncement("❌ Uso incorrecto. Usa: !say <id> <mensaje>", player.id, cor, estilo[1], HaxNotification.CHAT);
                        }
                        return false;
                        break;

                    case "!ip":
                        const ipArgs = message.split(" ");
                        const targetIpId = parseInt(ipArgs[1]); // Obtener el ID del jugador
                    
                        // Verificar si el jugador es admin
                        if (player.admin) {
                            const targetPlayer = room.getPlayer(targetIpId); // Verificar si el jugador está en línea
                            if (targetPlayer) {
                                if (playerIps[targetIpId]) {
                                    // Enviar el anuncio con la IP del jugador
                                    room.sendAnnouncement(`IP de ${playerData[targetIpId].name}: ${playerIps[targetIpId]}`, player.id, null, mesjcor, estilo[1], HaxNotification.CHAT);
                                } else {
                                    room.sendAnnouncement("IP no disponible para este jugador.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                }
                            } else {
                                room.sendAnnouncement("Jugador no encontrado o desconectado.", player.id, cor, estilo[1], HaxNotification.CHAT);
                            }
                        } else {
                            room.sendAnnouncement("Comando denegado", player.id, cor, estilo[1], HaxNotification.CHAT);
                        }
                        return false;
                        break;
                    case "!size":
                            var sizeArgs = message.split(" ");
                            
                            if (sizeEnabled) { // Verifica si el comando está habilitado
                                if (sizeArgs.length >= 2) {
                                    var newSize = parseFloat(sizeArgs[1]); 
                                    
                                    // Verifica que el tamaño sea un número y esté entre 1 y 99
                                    if (!isNaN(newSize) && newSize >= 1 && newSize <= 99) {
                                        room.setPlayerDiscProperties(player.id, { radius: newSize });
                                        pSize = newSize;
                                        room.sendAnnouncement(`El tamaño de tu jugador ahora es ${newSize}.`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                    } else {
                                        room.sendAnnouncement("Tamaño inválido. Debe estar entre 1 y 99.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                    }
                                } else {
                                    room.sendAnnouncement("Uso incorrecto. Usa: !size <número>", player.id, cor, estilo[1], HaxNotification.CHAT);
                                }
                            } else {
                                room.sendAnnouncement("El comando !size está deshabilitado. Un administrador puede habilitarlo con !adm size true.", player.id, cor, estilo[1], HaxNotification.CHAT);
                            }
                            return false;
                            break;
                        
                        case "!adm":
                            var admArgs = message.split(" ");

                            if (!player.admin) {
                                room.sendAnnouncement(`Comando denegado`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                return false;
                            }

                            if (admArgs[1] === "help") {
                                const AdmCommands = [
                                    new Command('help', [], 'Muestra esta página de ayuda para !adm'),
                                    new Command('size', ['true/false'], 'Habilita o deshabilita el uso del comando !size para los jugadores'),
                                    new Command('afk', ['true/false'], 'Activa o desactiva el sistema automático de AFK'),
                                ];

                                let admMessagesToSend = [];
                                let admHelpMessage = "║ Comandos de administración disponibles:\n";
                                let admCommandCount = 0;

                                AdmCommands.forEach(command => {
                                    let commandMessage = 
                                        `║ Comando: ${command.name}   ●  Descripción: ${command.description}\n` +
                                        (command.args.length > 0 ? 
                                            `║ Argumentos: ${command.args.map(arg => `<${arg}>`).join(' ')}\n` : '') +
                                        `║\n`;

                                    admHelpMessage += commandMessage;
                                    admCommandCount++;

                                    if (admCommandCount === 8) {
                                        admMessagesToSend.push(admHelpMessage);
                                        admHelpMessage = "";
                                        admCommandCount = 0;
                                    }
                                });

                                if (admHelpMessage.trim() !== "") {
                                    admMessagesToSend.push(admHelpMessage);
                                }

                                if (admMessagesToSend.length > 0) {
                                    room.sendAnnouncement(`╔════════════════════════════════════════════════════╗\n${admMessagesToSend[0]}`, player.id, comcolor, estilo[4], HaxNotification.CHAT);

                                    for (let i = 1; i < admMessagesToSend.length; i++) {
                                        room.sendAnnouncement(`${admMessagesToSend[i]}`, player.id, comcolor, estilo[4], HaxNotification.CHAT);
                                    }

                                    room.sendAnnouncement(`╚════════════════════════════════════════════════════╝`, player.id, comcolor, estilo[4], HaxNotification.CHAT);
                                } else {
                                    room.sendAnnouncement("No hay comandos administrativos disponibles.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                }

                                return false;
                            }
                            if (admArgs.length >= 3) {
                                var command = admArgs[1];
                                var status = admArgs[2];

                                if (command === "size") {
                                    if (status === "true") {
                                        useSizeCommand = true;
                                        room.sendAnnouncement("El comando !size fue habilitado.", null, cor, estilo[0], HaxNotification.CHAT);
                                    } else if (status === "false") {
                                        useSizeCommand = false;
                                        room.sendAnnouncement("El comando !size fue deshabilitado.", null, cor, estilo[0], HaxNotification.CHAT);
                                        room.getPlayerList().forEach(player => {
                                            if (!player.admin) room.setPlayerDiscProperties(player.id, { radius: 15 });
                                        });
                                    } else {
                                        room.sendAnnouncement("Uso incorrecto. Usa: !adm size true/false", player.id, cor, estilo[1], HaxNotification.CHAT);
                                    }
                                } else if (command === "afk" && (status === "true" || status === "false")) {
                                        if (status === "false") {
                                            afkEnabled = false;
                                            room.sendAnnouncement("El modo afk ha sido deshabilitado.", null, cor, estilo[1], HaxNotification.CHAT);
                                        } else if (status === "true") {
                                            afkEnabled = true;
                                            room.sendAnnouncement("El modo afk ha sido habilitado nuevamente.", null, comcolor, estilo[1], HaxNotification.CHAT);
                                        }
                                    } else {
                                    room.sendAnnouncement("Comando de administración no reconocido. Usa !adm help para ver los comandos disponibles.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                }
                            } else {
                                room.sendAnnouncement("Uso incorrecto. Usa: !adm <comando> <true/false> o usa !adm help", player.id, cor, estilo[1], HaxNotification.CHAT);
                            }

                            return false;
                            break;
                         case "!msg":
                                var msgArgs = message.split(" ");

                                if (msgArgs.length >= 3) {
                                    var targetId = parseInt(msgArgs[1]);
                                    var msgContent = msgArgs.slice(2).join(" ");
                            
                                    // Busca al jugador por ID
                                    var targetPlayer = room.getPlayer(targetId);
                                    
                                    if (targetId == player.id) {
                                        room.sendAnnouncement(`No podes mandarte mensajes a ti mismo chinchulin`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                    } else {
                                        if (targetPlayer) {
                                            room.sendAnnouncement(`Mensaje privado de ${player.name}: ${msgContent}`, targetId, privmsg, estilo[1], HaxNotification.CHAT);
                                            room.sendAnnouncement(`Mensaje privado a ${targetPlayer.name}: ${msgContent}`, player.id, privmsg, estilo[1], HaxNotification.CHAT);
                                            lastPrivateMessageFrom[targetId] = {
                                                id: player.id,
                                                name: player.name,
                                                time: Date.now()
                                            };
                                        } else {
                                            room.sendAnnouncement(`El jugador con ID ${targetId} no está en la sala.`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                        }
                                    }
                                } else {
                                    room.sendAnnouncement("Uso incorrecto. Usa: !msg <id> <mensaje>", player.id, cor, estilo[1], HaxNotification.CHAT);
                                }
                                return false;
                                break;
                            case "!r":
                                const replyContent = args.slice(1).join(" ");

                                if (!replyContent) {
                                    room.sendAnnouncement("Uso incorrecto. Usa: !r <mensaje>", player.id, cor, estilo[1], HaxNotification.CHAT);
                                    return false;
                                }

                                const lastMsg = lastPrivateMessageFrom[player.id];

                                if (!lastMsg) {
                                    room.sendAnnouncement("No tienes a quien responderle nada!", player.id, cor, estilo[1], HaxNotification.CHAT);
                                    return false;
                                }

                                const now = Date.now();
                                const elapsed = now - lastMsg.time;

                                if (elapsed > 15 * 60 * 1000) {
                                    room.sendAnnouncement("No tienes a quien responderle, usa !msg <id>", player.id, cor, estilo[1], HaxNotification.CHAT);
                                    return false;
                                }

                                const target = room.getPlayer(lastMsg.id);
                                if (!target) {
                                    room.sendAnnouncement("El jugador ya no está en la sala.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                    return false;
                                }

                                room.sendAnnouncement(`Mensaje privado de ${player.name}: ${replyContent}`, target.id, privmsg, estilo[1], HaxNotification.CHAT);
                                room.sendAnnouncement(`Mensaje privado a ${target.name}: ${replyContent}`, player.id, privmsg, estilo[1], HaxNotification.CHAT);
                                lastPrivateMessageFrom[target.id] = {
                                    id: player.id,
                                    name: player.name,
                                    time: Date.now()
                                };
                                return false;
                                break;
                             case "!shuffle":
                                if (player.admin) {
                                    shuffleTeams(); 
                                    room.sendAnnouncement("Los equipos han sido mezclados correctamente.", null, comcolor, estilo[1], HaxNotification.CHAT);
                                } else {
                                    room.sendAnnouncement(`Comando denegado`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                }
                                return false;
                                break;
                            case "!id":
                            const args = message.split(" ");
                                if (args.length === 1) {
                                    room.sendAnnouncement(`Tu id es ${player.id}`, player.id, mesjcor, estilo[1], HaxNotification.CHAT);
                                } else if (player.admin) {
                                    const targetPlayerName = args.slice(1).join(" ");
                                    const targetPlayer = room.getPlayerList().find(p => p.name.toLowerCase() === targetPlayerName.toLowerCase());
                                    if (targetPlayer) {
                                        room.sendAnnouncement(`El id del jugador ${targetPlayer.name} es ${targetPlayer.id}`, player.id, mesjcor, estilo[1], HaxNotification.CHAT);
                                    } else {
                                        room.sendAnnouncement(`Jugador no encontrado`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                    }
                                }
                                return false;
                                break;
                            case "!stats":
                                const AuthplayerStats = playerStats[playerAuth]; // Obtener las estadísticas del jugador basado en su auth
                        
                                if (AuthplayerStats) {
                                    room.sendAnnouncement( `📊 Tus estadísticas:\n⚽ Goles: ${AuthplayerStats.goals}\n🚫 Autogoles: ${AuthplayerStats.autoGoals}\n🏆 Partidos Jugados: ${AuthplayerStats.matches}`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                } else {
                                    room.sendAnnouncement(`🚫 No se encontraron estadísticas para ${player.name}.`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                }
                                return false
                                break
                            case "!auth":
                                        var msgArgs = message.split(" ");
                                    
                                        if (msgArgs.length === 1) {
                                            room.sendAnnouncement(`🔑 Tu auth: ${playerAuth}`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                        } 
                                        else if (msgArgs.length === 2) {
                                            const targetId = parseInt(msgArgs[1]);
                                            const targetPlayer = room.getPlayer(targetId);
                                    
                                            if (!targetPlayer) {
                                                room.sendAnnouncement("❌ Jugador no encontrado.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                            } else if (!player.admin) {
                                                room.sendAnnouncement("⚠️ Solo los administradores pueden ver el auth de otros jugadores.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                            } else {
                                                const targetAuth = playerData[targetPlayer.id].auth;
                                                room.sendAnnouncement(`🔑 Auth de ${targetPlayer.name}: ${targetAuth}`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                            }
                                        } else {
                                            room.sendAnnouncement("❌ Uso incorrecto. Usa: !auth o !auth <id>", player.id, cor, estilo[1], HaxNotification.CHAT);
                                        }
                                    
                                        return false;
                                        break;
                                    
                                    case "!prefix":
                                        var msgArgs = message.split(" ");
                                        const prefix = msgArgs[1];
                                    
                                        if (isAdmin) {
                                            if (prefix === "Admin" && !player.admin) {
                                                room.sendAnnouncement(`❌ No puedes establecer el prefijo como "Admin".`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                            }  else if (prefix && prefix.length <= 5) {
                                                playerStats[playerAuth].prefix = prefix;
                                                room.sendAnnouncement(`✅ Prefijo cambiado a: ${prefix}`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                            } else {
                                                room.sendAnnouncement(`❌ El prefijo debe tener un máximo de 5 letras.`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                            }
                                        } else {
                                            room.sendAnnouncement(`❌ No tienes permiso para usar este comando.`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                        }
                                        return false;
                                        break;
                                case "!delprefix":                                
                                    if (isAdmin) {
                                        // Restablecer el prefijo a undefined
                                        playerStats[playerAuth].prefix = undefined;
                                        room.sendAnnouncement(`✅ Tu prefijo ha sido eliminado.`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                    } else {
                                        room.sendAnnouncement(`❌ No tienes permiso para usar este comando.`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                    }
                                    return false;
                                    break;
                                case "!admin":
                                    if (!player.admin) {
                                        room.sendAnnouncement("❌ Solo los administradores pueden usar este comando.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                        return false;
                                    }

                                    var adminArgs = message.split(" ");
    
                                    if (adminArgs.length >= 2) {
                                        var targetId = parseInt(adminArgs[1]); 
                                        
                                        if (isNaN(targetId)) {
                                            room.sendAnnouncement("❌ El ID debe ser un número válido.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                            return false;
                                        }
                                        
                                        if (!playerData[targetId]) {
                                            room.sendAnnouncement("❌ Jugador no encontrado.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                            return false;
                                        }
                                        
                                        if (adminArgs.length === 3) {
                                            var targetAuth = playerData[targetId].auth
                                            
                                            playerStats[targetAuth] = playerStats[targetAuth] || {};
                                            playerStats[targetAuth].isAdmin = true; 
                                        }

                                    
                                        room.setPlayerAdmin(targetId, true);
                                        const targetPlayer = room.getPlayer(targetId);
                                        if (targetPlayer) {
                                            onPlayerAdminChange(targetPlayer);
                                        }
                                        savePlayerStats(targetAuth);
                                        room.sendAnnouncement(`✅ ${playerData[targetId].name} ahora es administrador.`, null, comcolor, estilo[1], HaxNotification.CHAT);
                                        
                                    } else {
                                        room.sendAnnouncement("❌ Uso incorrecto. Usa: !admin <id> o !admin <id> <auth>", player.id, cor, estilo[1], HaxNotification.CHAT);
                                    }
                                    return false;
                                    break;
                                case "!unadmin":
                                    if (!player.admin) {
                                        room.sendAnnouncement("❌ Solo los administradores pueden usar este comando.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                        return false;
                                    }
                                
                                    var unadminArgs = message.split(" ");
                                
                                    // Verificamos si se pasó un argumento de ID
                                    if (unadminArgs.length === 2) {
                                        var targetId = parseInt(unadminArgs[1]);
                                
                                        // Verificamos si el argumento es un número válido
                                        if (isNaN(targetId)) {
                                            room.sendAnnouncement("❌ El ID debe ser un número válido.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                            return false;
                                        }
                                
                                        const targetAuth = playerData[targetId].auth; // Cambiado a const
                                        room.setPlayerAdmin(targetId, false);
                                        const targetPlayer = room.getPlayer(targetId);
                                        if (targetPlayer) {
                                            onPlayerAdminChange(targetPlayer);
                                        }
                                        console.log(targetAuth);
                                        savePlayerStats(targetAuth);
                                        // Si el jugador tiene estadísticas almacenadas, actualizamos su estado
                                        if (playerStats[targetAuth]) {
                                            playerStats[targetAuth].isAdmin = false;
                                        }
                                
                                    } else {
                                        room.sendAnnouncement("❌ Uso incorrecto. Usa: !unadmin <id>", player.id, cor, estilo[1], HaxNotification.CHAT);
                                    }
                                    return false;
                                    break;
                default:
                    room.sendAnnouncement(`El comando ${command} no existe.`, player.id, cor, estilo[1], HaxNotification.CHAT);
                    return false;
                    break;
            }
            } else {
                updatePlayerName(player);
                if (playerStats[playerAuth]) {
                    if (isAdmin) {
                        if (playerStats[playerAuth].prefix !== undefined) {
                            room.sendAnnouncement(`[${playerStats[playerAuth].prefix}] ` + playerData[player.id].name + " » " + message, null, 0x00BFFF, estilo[1], HaxNotification.CHAT);
                        } else {
                            room.sendAnnouncement(playerData[player.id].name + " » " + message, null, 0x00BFFF, estilo[1], HaxNotification.CHAT);
                        }
                    } else {
                        if (playerStats[playerAuth].prefix !== undefined) {
                            room.sendAnnouncement(`[${playerStats[playerAuth].prefix}] ` + playerData[player.id].name + " » " + message, null, mesjcor, estilo[2], HaxNotification.CHAT); // Color blanco (o el color que prefieras)
                        } else {
                            room.sendAnnouncement(playerData[player.id].name + " » " + message, null, mesjcor, estilo[2], HaxNotification.CHAT); 
                        }
                    }
                    return false; 
                }                 
            }
    };
    
    room.onPlayerBallKick = function (player) {
        if (lastPlayersTouched[0] === null || player.id !== lastPlayersTouched[0].id) {
            activePlay = true;
            lastTeamTouched = player.team;
            lastPlayersTouched[1] = lastPlayersTouched[0];
            lastPlayersTouched[0] = player;
        }
    };  

    function elegirSegundosAleatorios() {
        const indiceAleatorio = Math.floor(Math.random() * segundosPosibles.length);
        return segundosPosibles[indiceAleatorio];
    }
    
    // Función para enviar el anuncio al chat de la sala
    function enviarAnuncioRelator(room) {
        if (!relatorAlready) {
            // Elegir la duración aleatoria
            duracionAleatoria = elegirSegundosAleatorios();
            // Convertir segundos a minutos para la presentación
            minutos = duracionAleatoria / 60;
            // Enviar el anuncio al chat de la sala
            room.sendAnnouncement(`Relator🎙️: Se han agregado ${minutos} minutos al partido, ¡metan gol o termina en empate!`, null, relmsj, estilo[1], HaxNotification.CHAT);
            relatorAlready = true;
    
            // Establecer un temporizador para enviar otro anuncio justo antes de que finalice el partido
        }
    }

    function checkInactivePlayers(room) {
        const players = room.getPlayerList().filter(p => p.team !== 0);

        players.forEach(p => {
            const passedTime = Date.now() - playerData[p.id].lastActivity;
            const warningTime = 9000;
            const afkTime = 14000;

            if (afkEnabled) {
                if (passedTime >= warningTime && passedTime < afkTime) {
                    room.sendAnnouncement(`😴 Si no te mueves seras expulsado`, p.id, comcolor, estilo[1], HaxNotification.CHAT);
                } else if (passedTime >= afkTime) {
                    room.kickPlayer(p.id, "Te has quedado AFK.");
                }
            }
        });
        
        savePlayerStats();
    }

    setInterval(() => {
        checkInactivePlayers(room);
    }, 5000);

    room.onPlayerActivity = function(player) {
        if (playerData[player.id]) {
            playerData[player.id].lastActivity = Date.now();
        }
    };

    function resetActivityTimers(room) {
        const players = room.getPlayerList();
        players.forEach(p => {
            if (playerData[p.id]) {
                playerData[p.id].lastActivity = Date.now();
            }
        });
    }
    
    
    // Definir el evento onGameTick
    room.onGameTick = function () {
        const currentScoreTime = Math.round(room.getScores().time);
        if (currentScoreTime == maxtemp*60 && room.blueScore == room.redScore) {
            enviarAnuncioRelator(room);
        }
        const calcTemp = (maxtemp*60)+(duracionAleatoria-5);
        if (relatorAlready == true && finalizacionMensajeEnviado == false && currentScoreTime == calcTemp) {
            room.sendAnnouncement(`Relator🎙️: El partido esta a punto de finalizar! Marquen goles`, null, relmsj, estilo[1], HaxNotification.CHAT);
            finalizacionMensajeEnviado = true;
            setTimeout(() => {
                Victory();
            }, 6000);
        }
    };

    room.onGameStart = function () {
        finalizacionMensajeEnviado = false;
        tie = false;
        room.setTimeLimit(maxtemp);
        resetActivityTimers(room);

        const players = room.getPlayerList().filter(player => player.team === 1 || player.team === 2);

        players.forEach(player => {
            const playerAuth = playerData[player.id].auth;
            if (playerData[player.id]) {
                playerStats[playerAuth].matches += 1;
            }
        });
    };

    room.onGameStop = function () {
        clearInterval(intervalo);
        resetActivityTimers(room);
    };

    room.onTeamGoal = function (team) {
        const scores = room.getScores();
        const blueScore = scores.blue; // Obtener la puntuación del equipo azul
        const redScore = scores.red; // Obtener la puntuación del equipo rojo
        tiempoTocandoPelota = 0;

        if (lastPlayersTouched[0] != null) {
            setTimeout(() => {

                const goalScorer = room.getPlayer(lastPlayersTouched[0].id);
                const goalScorerAuth = playerData[goalScorer.id].auth;
                let goalScorerStats = playerStats[goalScorerAuth];

                if (!goalScorerStats) {
                    goalScorerStats = { goals: 0, autoGoals: 0 }; // Inicializa si no existe
                    playerStats[goalScorerAuth] = goalScorerStats; // Guarda en playerStats
                }

                if (goalScorer && goalScorer.team === team) {
                    room.sendAnnouncement(`Relator🎙️: Golazo de ${goalScorer.name} el partido se encuentra 🟦${blueScore}-${redScore}🟥`, null, relmsj, estilo[1], HaxNotification.CHAT);

                    const originalAvatar = goalScorer.avatar; // Almacena el avatar original

                    const changeAvatarPattern = (avatarSequence, currentIndex) => {
                        if (currentIndex < avatarSequence.length) {
                            setTimeout(() => {
                                room.setPlayerAvatar(goalScorer.id, avatarSequence[currentIndex]);
                                changeAvatarPattern(avatarSequence, currentIndex + 1);
                            }, 500);
                        } else {
                            // Después de completar el patrón, restaurar el avatar original
                            setTimeout(() => {
                                room.setPlayerAvatar(goalScorer.id, originalAvatar);
                            }, 500);
                        }
                    };

                    changeAvatarPattern(["G", "O", "L", "G", "O", "L", "G", "O", "L"], 0);

                    goalScorerStats.goals += 1;
                } else {
                    room.sendAnnouncement(`Relator🎙️: Gol en contra de ${goalScorer.name}, Ahora el partido va 🟦${blueScore}-${redScore}🟥`, null, relmsj, estilo[1], HaxNotification.CHAT);

                    const originalAvatar = goalScorer.avatar; // Almacena el avatar original

                    const changeLoserPattern = (loserSequence, currentIndex, repetitionCount) => {
                        if (currentIndex < loserSequence.length) {
                            setTimeout(() => {
                                room.setPlayerAvatar(goalScorer.id, loserSequence[currentIndex]);
                                changeLoserPattern(loserSequence, currentIndex + 1, repetitionCount);
                            }, 500);
                        } else if (repetitionCount < 2) {
                            setTimeout(() => {
                                changeLoserPattern(loserSequence, 0, repetitionCount + 1); // Reinicia la secuencia
                            }, 2000);
                        } else {
                            // Después de completar el patrón, restaurar el avatar original
                            setTimeout(() => {
                                room.setPlayerAvatar(goalScorer.id, originalAvatar);
                            }, 500);
                        }
                    };

                    changeLoserPattern(["L", "O", "S", "E", "R"], 0, 0);

                    goalScorerStats.autoGoals += 1;
                }

                savePlayerStats();
            }, 1000);
        }
    };
    setInterval(() => {
        cleanupInactivePlayers();
    }, 24 * 60 * 60 * 1000);    
})
