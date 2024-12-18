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
var comandos = ["!claim", "!1v1", "!help", "!clearbans", "start"]
var v1 = '{"name":"1v1 host Kim Jong Un","width":420,"height":200,"spawnDistance":350,"bg":{"type":"grass","width":370,"height":170,"kickOffRadius":75,"cornerRadius":0},"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.96,"acceleration":0.11,"kickingAcceleration":0.11,"kickingDamping":0.96,"kickStrength":11},"ballPhysics":{"radius":6.25,"color":"FFCC00","bCoef":0.3,"invMass":0.65,"damping":0.99},"vertexes":[{"x":-370,"y":170,"trait":"ballArea"},{"x":-370,"y":64,"trait":"ballArea"},{"x":-370,"y":-64,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":170,"trait":"ballArea"},{"x":370,"y":64,"trait":"ballArea"},{"x":370,"y":-64,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":0,"y":200,"trait":"kickOffBarrier"},{"x":0,"y":75,"trait":"kickOffBarrier"},{"x":0,"y":-75,"trait":"kickOffBarrier"},{"x":0,"y":-200,"trait":"kickOffBarrier"},{"x":-380,"y":-64,"trait":"goalNet"},{"x":-400,"y":-44,"trait":"goalNet"},{"x":-400,"y":44,"trait":"goalNet"},{"x":-380,"y":64,"trait":"goalNet"},{"x":380,"y":-64,"trait":"goalNet"},{"x":400,"y":-44,"trait":"goalNet"},{"x":400,"y":44,"trait":"goalNet"},{"x":380,"y":64,"trait":"goalNet"},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-380,"y":-64},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-380,"y":64},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":380,"y":-64},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":380,"y":64},{"bCoef":1,"trait":"ballArea","x":385,"y":64,"cMask":["ball"]},{"bCoef":1,"trait":"ballArea","x":385,"y":170,"cMask":["ball"]},{"bCoef":1,"trait":"ballArea","x":385,"y":-170,"cMask":["ball"]},{"bCoef":1,"trait":"ballArea","x":385,"y":-64,"cMask":["ball"]},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":64},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":170},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":-170},{"bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-385,"y":-64}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":12,"v1":13,"trait":"goalNet","curve":-90},{"v0":13,"v1":14,"trait":"goalNet"},{"v0":14,"v1":15,"trait":"goalNet","curve":-90},{"v0":16,"v1":17,"trait":"goalNet","curve":90},{"v0":17,"v1":18,"trait":"goalNet"},{"v0":18,"v1":19,"trait":"goalNet","curve":90},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"vis":false,"color":"FFCCCC","bCoef":1,"trait":"ballArea","v0":24,"v1":25,"cMask":["ball"],"x":385},{"vis":false,"color":"CCCCFF","bCoef":1,"trait":"ballArea","v0":26,"v1":27,"x":385,"cMask":["ball"]},{"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"ballArea","v0":28,"v1":29,"x":-385},{"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"ballArea","v0":30,"v1":31,"x":-385},{"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"ballArea","v0":31,"v1":31}],"goals":[{"p0":[-370,64],"p1":[-370,-64],"team":"red"},{"p0":[370,64],"p1":[370,-64],"team":"blue"}],"discs":[{"pos":[-370,64],"trait":"goalPost","color":"FFCCCC","bCoef":0.5},{"pos":[-370,-64],"trait":"goalPost","color":"FFCCCC"},{"pos":[370,64],"trait":"goalPost","color":"CCCCFF"},{"pos":[370,-64],"trait":"goalPost","color":"CCCCFF"}],"planes":[{"normal":[0,1],"dist":-170,"trait":"ballArea"},{"normal":[0,-1],"dist":-170,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.1},{"normal":[0,-1],"dist":-200,"bCoef":0.1},{"normal":[1,0],"dist":-420,"bCoef":0.1},{"normal":[-1,0],"dist":-420,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":[],"cMask":[]}}}';
var v2 = '{"name":"Futsal x1 and x2 ; by Bazinga! & GLH from HaxMaps","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":65,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-171,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"line"},{"bCoef":1,"trait":"ballArea","x":368,"y":171},{"bCoef":1,"trait":"ballArea","x":368,"y":-171},{"bCoef":0,"trait":"line","x":0,"y":171},{"bCoef":0,"trait":"line","x":0,"y":-171},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":199,"trait":"kickOffBarrier"},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":0,"y":-199,"trait":"kickOffBarrier"},{"x":-368.53340356886,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368.53340356886,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.09926357786,"y":63.94882446641,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":64,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":-61.927767991658,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.9681846993,"y":-62.144998272018,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":-90},{"x":-358.5379338963,"y":-171,"bCoef":0.1,"trait":"line","curve":-90},{"x":-368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":90},{"x":-358.5379338963,"y":171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":-90},{"x":358.36266315432,"y":171,"bCoef":0.1,"trait":"line","curve":-90},{"x":368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":90},{"x":358.36266315432,"y":-171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":8,"v1":9,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":10,"y":171},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":11,"y":-171},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":12,"v1":13},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":9,"v1":8},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":15,"v1":14},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":2,"v1":1},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":16,"v1":17,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":18,"v1":19,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":20,"v1":21,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":22,"v1":23,"cMask":["ball"],"x":330},{"v0":24,"v1":25,"trait":"kickOffBarrier"},{"v0":26,"v1":27,"trait":"kickOffBarrier"},{"v0":28,"v1":29,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":29,"v1":30,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":30,"v1":31,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":32,"v1":33,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":33,"v1":34,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":34,"v1":35,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":36,"v1":37,"curve":94.0263701017,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":39,"v1":38,"curve":86.632306418889,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":40,"v1":41,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":37,"v1":41,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":43,"v1":42,"curve":-86.632306418888,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":45,"v1":44,"curve":86.632306418884,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":47,"v1":46,"curve":-86.632306418899,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":48,"v1":49,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":50,"v1":51,"curve":94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":52,"v1":53,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":55,"v1":54,"curve":-180.00692920292,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":54,"v1":55,"curve":-180.00218240614,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":57,"v1":56,"curve":-179.64823645332,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":56,"v1":57,"curve":-180.35758668147,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":59,"v1":58,"curve":-180.02357323962,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":58,"v1":59,"curve":-180.00924102399,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":61,"v1":60,"curve":-180.06885755885,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":60,"v1":61,"curve":-180.02948353257,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":63,"v1":62,"curve":-179.99869069543,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":62,"v1":63,"curve":-179.99939258776,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":65,"v1":64,"curve":-180.08826047163,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":64,"v1":65,"curve":-179.91186753664,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":67,"v1":66,"curve":-179.99528711105,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":66,"v1":67,"curve":-179.99743836358,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":69,"v1":68,"curve":-179.98626041101,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":68,"v1":69,"curve":-179.99175181595,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":71,"v1":70,"curve":-180.04715562398,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":70,"v1":71,"curve":-179.95294709391,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":73,"v1":72,"curve":-179.95715750564,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":72,"v1":73,"curve":-179.89943871875,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":75,"v1":74,"curve":-179.94773754738,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":74,"v1":75,"curve":-179.98221351296,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":77,"v1":76,"curve":-180.4151727218,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":76,"v1":77,"curve":-179.58764458796,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":79,"v1":78,"curve":-180.00086646359,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":78,"v1":79,"curve":-180.01965986376,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":81,"v1":80,"curve":-180.03532601389,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":80,"v1":81,"curve":-179.99380079,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":83,"v1":82,"curve":-180.0044468452,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":82,"v1":83,"curve":-180.01386779847,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":85,"v1":84,"curve":-180.05158287563,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":84,"v1":85,"curve":-180.01212223878,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":90,"v1":91,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":108,"v1":109,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":110,"v1":111,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":112,"v1":113,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":114,"v1":115,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":116,"v1":117,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":118,"v1":119,"cMask":["ball"],"x":371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":120,"v1":121,"cMask":["ball"],"x":371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":122,"v1":123,"cMask":["ball"],"x":-371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":124,"v1":125,"cMask":["ball"],"x":-371}],"goals":[{"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},{"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":3.9405255187564,"pos":[-368.53340356886,64.043361696331],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[-368.53340356886,-62.053454903872],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3.9405255187564,"pos":[368.9681846993,-62.144998272018],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[368.09926357786,63.94882446641],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3,"invMass":0,"pos":[-368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5,"bCoef":0},"ballPhysics":{"radius":6.25,"color":"FFCC00","bCoef":0.4,"invMass":1.5,"damping":0.99}}'
var v3 = '{"name":"Futsal x3  by Bazinga from HaxMaps","width":620,"height":270,"spawnDistance":350,"bg":{"type":"hockey","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80]},{"x":550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80]},{"x":-557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80]},{"x":557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80]},{"x":557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80]},{"x":557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":0,"y":-80,"bCoef":0.1,"trait":"line"},{"x":0,"y":80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":550,"y":80,"bCoef":0.1,"trait":"line"},{"x":-240,"y":256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":256,"bCoef":0.1,"trait":"line"},{"x":-240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":240,"y":256,"bCoef":0.1,"trait":"line"},{"x":120,"y":224,"bCoef":0.1,"trait":"line"},{"x":120,"y":256,"bCoef":0.1,"trait":"line"},{"x":240,"y":-224,"bCoef":0.1,"trait":"line"},{"x":240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90},{"x":-556,"y":123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line"},{"x":556,"y":123,"bCoef":0.1,"trait":"line"},{"x":575,"y":123,"bCoef":0.1,"trait":"line"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":381,"y":240,"bCoef":0.1,"trait":"line"},{"x":381,"y":256,"bCoef":0.1,"trait":"line"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":0},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-550},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":550},{"v0":64,"v1":65,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":66,"v1":67,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":69,"v1":68,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":70,"v1":71,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":67,"v1":71,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":73,"v1":72,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":80,"v1":81,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":82,"v1":83,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":89,"v1":88,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":91,"v1":90,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":92,"v1":93,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":94,"v1":95,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":99,"v1":98,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":98,"v1":99,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":101,"v1":100,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":100,"v1":101,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":103,"v1":102,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":102,"v1":103,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":105,"v1":104,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":104,"v1":105,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":107,"v1":106,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":106,"v1":107,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":109,"v1":108,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":111,"v1":110,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":110,"v1":111,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":113,"v1":112,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":112,"v1":113,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":115,"v1":114,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":114,"v1":115,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":117,"v1":116,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":116,"v1":117,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":119,"v1":118,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":118,"v1":119,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":121,"v1":120,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":120,"v1":121,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":123,"v1":122,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":122,"v1":123,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":125,"v1":124,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":124,"v1":125,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":127,"v1":126,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":126,"v1":127,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":129,"v1":128,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":128,"v1":129,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5}],"goals":[{"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red"},{"p0":[557.5,80],"p1":[557.5,-80],"team":"blue"}],"discs":[{"radius":5,"pos":[-550,80],"color":"FF6666","trait":"goalPost","y":80},{"radius":5,"pos":[-550,-80],"color":"FF6666","trait":"goalPost","y":-80,"x":-560},{"radius":5,"pos":[550,80],"color":"6666FF","trait":"goalPost","y":80},{"radius":5,"pos":[550,-80],"color":"6666FF","trait":"goalPost","y":-80},{"radius":3,"invMass":0,"pos":[-550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1},{"normal":[-1,0],"dist":-620,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFCC00"}}'
var v4 = '{"name":"Futsal x4 by Bazinga from HaxMaps","width":800,"height":350,"bg":{"type":"hockey","width":700,"height":320,"kickOffRadius":80},"vertexes":[{"x":-700,"y":321,"cMask":["ball"]},{"x":-700,"y":-319,"cMask":["ball"]},{"x":699,"y":319,"cMask":["ball"]},{"x":601,"y":-320,"cMask":["ball"]},{"x":0,"y":350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-700,"y":-99,"bCoef":0.1,"cMask":["ball"]},{"x":-750,"y":-99,"bCoef":0.1,"cMask":["ball"]},{"x":-750,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":700,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":749,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":749,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":699,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":321,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":-99,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":-319,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":321,"bCoef":2,"cMask":["ball"]},{"x":699,"y":319,"bCoef":2,"cMask":["ball"]},{"x":699,"y":90,"bCoef":1.25,"cMask":["ball"]},{"x":699,"y":319,"bCoef":1.25,"cMask":["ball"]},{"x":699,"y":-321,"bCoef":1.25,"cMask":["ball"]},{"x":699,"y":-90,"bCoef":1.25,"cMask":["ball"]},{"x":601,"y":-320,"bCoef":0,"cMask":["ball"]},{"x":601,"y":-320,"bCoef":0,"cMask":["ball"]},{"x":-699,"y":-320,"bCoef":2,"cMask":["ball"]},{"x":699,"y":-321,"bCoef":2,"cMask":["ball"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-710,"y":90,"cMask":["ball"]},{"x":-710,"y":321,"cMask":["ball"]},{"x":-710,"y":90,"cMask":["ball"]},{"x":-710,"y":321,"cMask":["ball"]},{"x":-710,"y":-315,"cMask":["ball"]},{"x":-710,"y":-99,"cMask":["ball"]},{"x":710,"y":-90,"cMask":["ball"]},{"x":709,"y":-317,"cMask":["ball"]},{"x":709,"y":-90,"cMask":["ball"]},{"x":709,"y":94,"cMask":["ball"]},{"x":709,"y":319,"cMask":["ball"]},{"x":-699,"y":274,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":-141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":-141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-699,"y":-274,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":698,"y":273,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":140,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":140,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":-142,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":-142,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":698,"y":-275,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":-701,"y":90,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-701,"y":-90,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":699,"y":90,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":699,"y":-90,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":-713,"y":90,"cMask":["ball"]},{"x":-713,"y":321,"cMask":["ball"]},{"x":-713,"y":-315,"cMask":["ball"]},{"x":-713,"y":-99,"cMask":["ball"]},{"x":712,"y":-317,"cMask":["ball"]},{"x":712,"y":-90,"cMask":["ball"]},{"x":712,"y":94,"cMask":["ball"]},{"x":712,"y":319,"cMask":["ball"]},{"x":704,"y":-317,"cMask":["ball"]},{"x":704,"y":-90,"cMask":["ball"]},{"x":704,"y":-317,"cMask":["ball"]},{"x":704,"y":-90,"cMask":["ball"]},{"x":704,"y":94,"cMask":["ball"]},{"x":704,"y":319,"cMask":["ball"]},{"x":704,"y":94,"cMask":["ball"]},{"x":704,"y":319,"cMask":["ball"]},{"x":-705,"y":90,"cMask":["ball"]},{"x":-705,"y":321,"cMask":["ball"]},{"x":-705,"y":90,"cMask":["ball"]},{"x":-705,"y":321,"cMask":["ball"]},{"x":-705,"y":-315,"cMask":["ball"]},{"x":-705,"y":-99,"cMask":["ball"]},{"x":-705,"y":-315,"cMask":["ball"]},{"x":-705,"y":-99,"cMask":["ball"]},{"x":-699,"y":319.88890075683594,"bCoef":2,"cMask":["ball"]},{"x":699,"y":318.88890075683594,"bCoef":2,"cMask":["ball"]}],"segments":[{"v0":8,"v1":9,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":9,"v1":10,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":10,"v1":11,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":12,"v1":13,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":14,"v1":15,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":4,"v1":5,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":5,"v1":6,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"F8F8F8"},{"v0":6,"v1":5,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":6,"v1":7,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":16,"v1":17,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":18,"v1":19,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":22,"v1":23,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":24,"v1":25,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":26,"v1":27,"bCoef":0,"cMask":["ball"],"color":"F8F8F8"},{"v0":28,"v1":29,"bCoef":2,"cMask":["ball"],"color":"F8F8F8"},{"v0":30,"v1":31,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":32,"v1":33,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":42,"v1":43,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":44,"v1":45,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":46,"v1":47,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":49,"v1":50,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":51,"v1":52,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":54,"v1":53,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":56,"v1":55,"bCoef":0.1,"curve":10,"curveF":11.430052302761343,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":58,"v1":57,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":59,"v1":60,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":61,"v1":62,"bCoef":0.1,"curve":10,"curveF":11.430052302761343,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":63,"v1":64,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":65,"v1":66,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":67,"v1":68,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":69,"v1":70,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":71,"v1":72,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":73,"v1":74,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":75,"v1":76,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":77,"v1":78,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":79,"v1":80,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":81,"v1":82,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":83,"v1":84,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":85,"v1":86,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":87,"v1":88,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":89,"v1":90,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":91,"v1":92,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":93,"v1":94,"bCoef":2,"cMask":["ball"],"color":"F8F8F8"}],"planes":[{"normal":[0,1],"dist":-320,"cMask":["ball"]},{"normal":[0,-1],"dist":-317.5,"cMask":["ball"]},{"normal":[0,1],"dist":-350,"bCoef":0.1},{"normal":[0,-1],"dist":-350,"bCoef":0.1},{"normal":[1,0],"dist":-800,"bCoef":0.1},{"normal":[-1,0],"dist":-800,"bCoef":0.1}],"goals":[{"p0":[-707,-94],"p1":[-707,86],"team":"red"},{"p0":[706,90],"p1":[706,-90],"team":"blue"}],"discs":[{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FFCC00","cGroup":["ball","kick","score"]},{"pos":[-700,89],"radius":6,"invMass":0,"color":"FF0000"},{"pos":[-700,-99],"radius":6,"invMass":0,"color":"FF0000"},{"pos":[700,90],"radius":6,"invMass":0,"color":"33FF"},{"pos":[701,-89],"radius":6,"invMass":0,"color":"33FF"}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083},"ballPhysics":"disc0","spawnDistance":350}'
var v5 = '{"name":"UZY Futsal 5v5 from HaxMaps","bg":{"type":"hockey"},"width":950,"height":410,"vertexes":[{"x":-750,"y":-90,"trait":"v"},{"x":-750,"y":90,"trait":"v"},{"x":-760,"y":-90,"trait":"v"},{"x":-780,"y":70,"trait":"v"},{"x":-780,"y":-70,"trait":"v"},{"x":-760,"y":90,"trait":"v"},{"x":750,"y":-90,"trait":"v"},{"x":750,"y":90,"trait":"v"},{"x":760,"y":-90,"trait":"v"},{"x":780,"y":70,"trait":"v"},{"x":780,"y":-70,"trait":"v"},{"x":760,"y":90,"trait":"v"},{"x":-750,"y":-315,"trait":"v"},{"x":-750,"y":315,"trait":"v"},{"x":750,"y":315,"trait":"v"},{"x":750,"y":-315,"trait":"v"},{"x":0,"y":-350,"trait":"v"},{"x":0,"y":-80,"trait":"v"},{"x":0,"y":-380,"trait":"v"},{"x":0,"y":80,"trait":"v"},{"x":-750,"y":-350,"trait":"v"},{"x":750,"y":-350,"trait":"v"},{"x":-750,"y":350,"trait":"v"},{"x":0,"y":350,"trait":"v"},{"x":0,"y":380,"trait":"v"},{"x":750,"y":350,"trait":"v"}],"segments":[{"v0":0,"v1":1,"trait":"nc"},{"v0":0,"v1":2,"trait":"n"},{"v0":4,"v1":3,"trait":"n"},{"v0":5,"v1":1,"trait":"n"},{"v0":2,"v1":4,"trait":"n","curve":-90},{"v0":3,"v1":5,"trait":"n","curve":-90},{"v0":7,"v1":6,"trait":"nc"},{"v0":8,"v1":6,"trait":"n","color":"3377AE"},{"v0":9,"v1":10,"trait":"n","color":"3377AE"},{"v0":7,"v1":11,"trait":"n","color":"3377AE"},{"v0":10,"v1":8,"trait":"n","curve":-90,"color":"3377AE"},{"v0":11,"v1":9,"trait":"n","curve":-90,"color":"3377AE"},{"v0":12,"v1":13,"trait":"nc","curve":180},{"v0":14,"v1":15,"trait":"nc","curve":180},{"v0":16,"v1":17,"trait":"ko"},{"v0":16,"v1":18,"trait":"ko","vis":false},{"v0":19,"v1":17,"trait":"ko","curve":180,"color":"DA4D4B","cGroup":["blueKO"]},{"v0":21,"v1":20,"trait":"bb"},{"v0":20,"v1":0,"trait":"bb"},{"v0":1,"v1":22,"trait":"bb"},{"v0":23,"v1":19,"trait":"ko"},{"v0":23,"v1":24,"trait":"ko","vis":false},{"v0":17,"v1":19,"trait":"ko","curve":180,"color":"3377AE","cGroup":["redKO"]},{"v0":22,"v1":25,"trait":"bb"},{"v0":6,"v1":21,"trait":"bb"},{"v0":25,"v1":7,"trait":"bb"}],"planes":[{"normal":[0,1],"dist":-380,"trait":"pb"},{"normal":[0,-1],"dist":-380,"trait":"pb"},{"normal":[1,0],"dist":-850,"trait":"pb"},{"normal":[-1,0],"dist":-850,"trait":"pb"}],"goals":[{"p0":[-756.25,-90],"p1":[-756.25,90],"team":"red"},{"p0":[756.25,-90],"p1":[756.25,90],"team":"blue"}],"discs":[{"pos":[0,0],"cGroup":["ball","kick","score"],"radius":6.25,"color":"FFCC00","bCoef":0.4,"invMass":1.5},{"pos":[-750,-90],"trait":"p","color":"CE9E9E"},{"pos":[-750,90],"trait":"p","color":"CE9E9E"},{"pos":[750,-90],"trait":"p","color":"9EAFCE"},{"pos":[750,90],"trait":"p","color":"9EAFCE"}],"ballPhysics":"disc0","playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083},"traits":{"v":{"cMask":[""]},"bb":{"cMask":["ball"],"bias":99,"color":"1E252A"},"pb":{"bCoef":1,"cMask":["all"],"bias":99},"nc":{"cMask":[""],"color":"737573"},"p":{"radius":5,"invMass":0},"n":{"bCoef":0.1,"cMask":["ball"],"bias":3,"color":"DA4D4B"},"ko":{"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"],"color":"737573"}}}'
var v7 = '{"name":"Futsal x4 by Bazinga from HaxMaps","width":800,"height":350,"bg":{"type":"hockey","width":700,"height":320,"kickOffRadius":80},"vertexes":[{"x":-700,"y":321,"cMask":["ball"]},{"x":-700,"y":-319,"cMask":["ball"]},{"x":699,"y":319,"cMask":["ball"]},{"x":601,"y":-320,"cMask":["ball"]},{"x":0,"y":350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-700,"y":-99,"bCoef":0.1,"cMask":["ball"]},{"x":-750,"y":-99,"bCoef":0.1,"cMask":["ball"]},{"x":-750,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":700,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":749,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":749,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":699,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":321,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":-99,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":-319,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":321,"bCoef":2,"cMask":["ball"]},{"x":699,"y":319,"bCoef":2,"cMask":["ball"]},{"x":699,"y":90,"bCoef":1.25,"cMask":["ball"]},{"x":699,"y":319,"bCoef":1.25,"cMask":["ball"]},{"x":699,"y":-321,"bCoef":1.25,"cMask":["ball"]},{"x":699,"y":-90,"bCoef":1.25,"cMask":["ball"]},{"x":601,"y":-320,"bCoef":0,"cMask":["ball"]},{"x":601,"y":-320,"bCoef":0,"cMask":["ball"]},{"x":-699,"y":-320,"bCoef":2,"cMask":["ball"]},{"x":699,"y":-321,"bCoef":2,"cMask":["ball"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-710,"y":90,"cMask":["ball"]},{"x":-710,"y":321,"cMask":["ball"]},{"x":-710,"y":90,"cMask":["ball"]},{"x":-710,"y":321,"cMask":["ball"]},{"x":-710,"y":-315,"cMask":["ball"]},{"x":-710,"y":-99,"cMask":["ball"]},{"x":710,"y":-90,"cMask":["ball"]},{"x":709,"y":-317,"cMask":["ball"]},{"x":709,"y":-90,"cMask":["ball"]},{"x":709,"y":94,"cMask":["ball"]},{"x":709,"y":319,"cMask":["ball"]},{"x":-699,"y":274,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":-141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":-141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-699,"y":-274,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":698,"y":273,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":140,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":140,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":-142,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":-142,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":698,"y":-275,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":-701,"y":90,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-701,"y":-90,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":699,"y":90,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":699,"y":-90,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":-713,"y":90,"cMask":["ball"]},{"x":-713,"y":321,"cMask":["ball"]},{"x":-713,"y":-315,"cMask":["ball"]},{"x":-713,"y":-99,"cMask":["ball"]},{"x":712,"y":-317,"cMask":["ball"]},{"x":712,"y":-90,"cMask":["ball"]},{"x":712,"y":94,"cMask":["ball"]},{"x":712,"y":319,"cMask":["ball"]},{"x":704,"y":-317,"cMask":["ball"]},{"x":704,"y":-90,"cMask":["ball"]},{"x":704,"y":-317,"cMask":["ball"]},{"x":704,"y":-90,"cMask":["ball"]},{"x":704,"y":94,"cMask":["ball"]},{"x":704,"y":319,"cMask":["ball"]},{"x":704,"y":94,"cMask":["ball"]},{"x":704,"y":319,"cMask":["ball"]},{"x":-705,"y":90,"cMask":["ball"]},{"x":-705,"y":321,"cMask":["ball"]},{"x":-705,"y":90,"cMask":["ball"]},{"x":-705,"y":321,"cMask":["ball"]},{"x":-705,"y":-315,"cMask":["ball"]},{"x":-705,"y":-99,"cMask":["ball"]},{"x":-705,"y":-315,"cMask":["ball"]},{"x":-705,"y":-99,"cMask":["ball"]},{"x":-699,"y":319.88890075683594,"bCoef":2,"cMask":["ball"]},{"x":699,"y":318.88890075683594,"bCoef":2,"cMask":["ball"]}],"segments":[{"v0":8,"v1":9,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":9,"v1":10,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":10,"v1":11,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":12,"v1":13,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":14,"v1":15,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":4,"v1":5,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":5,"v1":6,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"F8F8F8"},{"v0":6,"v1":5,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":6,"v1":7,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":16,"v1":17,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":18,"v1":19,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":22,"v1":23,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":24,"v1":25,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":26,"v1":27,"bCoef":0,"cMask":["ball"],"color":"F8F8F8"},{"v0":28,"v1":29,"bCoef":2,"cMask":["ball"],"color":"F8F8F8"},{"v0":30,"v1":31,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":32,"v1":33,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":42,"v1":43,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":44,"v1":45,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":46,"v1":47,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":49,"v1":50,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":51,"v1":52,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":54,"v1":53,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":56,"v1":55,"bCoef":0.1,"curve":10,"curveF":11.430052302761343,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":58,"v1":57,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":59,"v1":60,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":61,"v1":62,"bCoef":0.1,"curve":10,"curveF":11.430052302761343,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":63,"v1":64,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":65,"v1":66,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":67,"v1":68,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":69,"v1":70,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":71,"v1":72,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":73,"v1":74,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":75,"v1":76,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":77,"v1":78,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":79,"v1":80,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":81,"v1":82,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":83,"v1":84,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":85,"v1":86,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":87,"v1":88,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":89,"v1":90,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":91,"v1":92,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":93,"v1":94,"bCoef":2,"cMask":["ball"],"color":"F8F8F8"}],"planes":[{"normal":[0,1],"dist":-320,"cMask":["ball"]},{"normal":[0,-1],"dist":-317.5,"cMask":["ball"]},{"normal":[0,1],"dist":-350,"bCoef":0.1},{"normal":[0,-1],"dist":-350,"bCoef":0.1},{"normal":[1,0],"dist":-800,"bCoef":0.1},{"normal":[-1,0],"dist":-800,"bCoef":0.1}],"goals":[{"p0":[-707,-94],"p1":[-707,86],"team":"red"},{"p0":[706,90],"p1":[706,-90],"team":"blue"}],"discs":[{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FFCC00","cGroup":["ball","kick","score"]},{"pos":[-700,89],"radius":6,"invMass":0,"color":"FF0000"},{"pos":[-700,-99],"radius":6,"invMass":0,"color":"FF0000"},{"pos":[700,90],"radius":6,"invMass":0,"color":"33FF"},{"pos":[701,-89],"radius":6,"invMass":0,"color":"33FF"}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083},"ballPhysics":"disc0","spawnDistance":350}'
var v10 = '{"name":"10x10 futsal from HaxMaps","width":1200,"height":606,"spawnDistance":310,"bg":{"type":"hockey","width":1130,"height":490,"kickOffRadius":134,"cornerRadius":0},"vertexes":[{"x":-1129.1842739345,"y":492.68317626901,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-1129.1842739345,"y":135.27428250161,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-1129.1842739345,"y":-135.27428250161,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-1129.1842739345,"y":-492.68317626901,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":1129.1842739345,"y":492.68317626901,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":1129.1842739345,"y":135.27428250161,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":1129.1842739345,"y":-135.27428250161,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":1129.1842739345,"y":-492.68317626901,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":575.27168558578,"trait":"kickOffBarrier"},{"x":0,"y":135.27428250161,"trait":"kickOffBarrier"},{"x":0,"y":-135.27428250161,"trait":"line"},{"x":0,"y":-575.27168558578,"trait":"kickOffBarrier"},{"x":-1169.054588777,"y":-135.27428250161,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":1169.054588777,"y":-135.27428250161,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-1169.054588777,"y":135.27428250161,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":1169.054588777,"y":135.27428250161,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-1129.1842739345,"y":-385.88769008353,"trait":"line"},{"x":-814.49357464125,"y":-71.196990790319,"trait":"line"},{"x":1129.1842739345,"y":-385.88769008353,"trait":"line"},{"x":814.49357464125,"y":-71.196990790319,"trait":"line"},{"x":-1129.1842739345,"y":385.88769008353,"trait":"line"},{"x":-814.49357464125,"y":71.196990790319,"trait":"line"},{"x":1129.1842739345,"y":385.88769008353,"trait":"line"},{"x":814.49357464125,"y":71.196990790319,"trait":"line"},{"x":1129.1842739345,"y":492.68317626901,"bCoef":1,"trait":"ballArea"},{"x":1129.1842739345,"y":-492.68317626901,"bCoef":1,"trait":"ballArea"},{"x":0,"y":492.68317626901,"bCoef":0,"trait":"line"},{"x":0,"y":-492.68317626901,"bCoef":0,"trait":"line"},{"x":0,"y":135.27428250161,"trait":"kickOffBarrier"},{"x":0,"y":-135.27428250161,"trait":"kickOffBarrier"},{"x":1141.9997322767,"y":-139.54610194903,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":1141.9997322767,"y":-492.68317626901,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-1141.9997322767,"y":-139.54610194903,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-1141.9997322767,"y":-492.68317626901,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-1141.9997322767,"y":139.54610194903,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-1141.9997322767,"y":492.68317626901,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":1141.9997322767,"y":139.54610194903,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":1141.9997322767,"y":492.68317626901,"bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-821},{"v0":13,"v1":15,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":29,"v1":28,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614}],"goals":[{"p0":[-1141.9997322767,-135.27428250161],"p1":[-1141.9997322767,135.27428250161],"team":"red"},{"p0":[1141.9997322767,135.27428250161],"p1":[1141.9997322767,-135.27428250161],"team":"blue"}],"discs":[{"radius":7.1196990790319,"pos":[-1129.1842739345,135.27428250161],"color":"FFFFFF","trait":"goalPost"},{"radius":7.1196990790319,"pos":[-1129.1842739345,-135.27428250161],"color":"FFFFFF","trait":"goalPost"},{"radius":7.1196990790319,"pos":[1129.1842739345,135.27428250161],"color":"FFFFFF","trait":"goalPost"},{"radius":7.1196990790319,"pos":[1129.1842739345,-135.27428250161],"color":"FFFFFF","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-492.68317626901,"trait":"ballArea"},{"normal":[0,-1],"dist":-492.68317626901,"trait":"ballArea"},{"normal":[0,1],"dist":-575.27168558578,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-575.27168558578,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-1281.5458342257,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-1281.5458342257,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.14,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":{"radius":6.4,"color":"EAFF00"}}'
var penalmapp = '{"name":"HaxSports Penalty Map 115 from HaxMaps","width":420,"height":200,"spawnDistance":300,"bg":{"type":"grass","width":500,"height":250,"kickOffRadius":10,"cornerRadius":0},"vertexes":[{"x":420,"y":600,"trait":"ballArea"},{"x":420,"y":-600,"trait":"ballArea"},{"x":283,"y":500,"trait":"kickOffBarrier","curve":0,"cMask":["blue","red"]},{"x":283,"y":-500,"trait":"kickOffBarrier","curve":0,"cMask":["blue","red"]},{"x":335,"y":500,"trait":"gkArea"},{"x":335,"y":-500,"trait":"gkArea"},{"x":-475,"y":-200,"trait":"penArea"},{"x":-10,"y":-190,"trait":"penArea"},{"x":-10,"y":190,"trait":"penArea"},{"x":-475,"y":200,"trait":"penArea"},{"x":300,"y":-250,"trait":"line"},{"x":300,"y":250,"trait":"line"},{"x":0,"y":9,"trait":"line"},{"x":0,"y":-9,"trait":"line"},{"x":0,"y":9,"trait":"line"},{"x":0,"y":-9,"trait":"line"},{"x":175,"y":-175,"trait":"line"},{"x":300,"y":-175,"trait":"line"},{"x":175,"y":175,"trait":"line"},{"x":300,"y":175,"trait":"line"},{"x":-120,"y":-250,"trait":"line"},{"x":-120,"y":250,"trait":"line"},{"x":-120,"y":-190,"trait":"line"},{"x":-120,"y":190,"trait":"line"},{"x":300,"y":-100,"trait":"line"},{"x":350,"y":-98,"trait":"line"},{"x":350,"y":98,"trait":"line"},{"x":300,"y":100,"trait":"line"},{"x":0,"y":-15,"trait":"powerboost"},{"x":0,"y":15,"trait":"powerboost"},{"x":400,"y":-135,"trait":"line"},{"x":400,"y":135,"trait":"line"},{"x":-10,"y":-190,"trait":"penArea"},{"x":-10,"y":190,"trait":"penArea"},{"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","x":282,"y":-100},{"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","x":282,"y":100}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"penArea"},{"v0":7,"v1":8,"trait":"penArea","curve":50},{"v0":8,"v1":9,"trait":"penArea"},{"v0":9,"v1":6,"trait":"penArea"},{"v0":10,"v1":11,"trait":"line"},{"v0":12,"v1":13,"trait":"line","curve":-180},{"v0":14,"v1":15,"trait":"line","curve":180},{"v0":16,"v1":17,"trait":"line"},{"v0":16,"v1":18,"trait":"line"},{"v0":18,"v1":19,"trait":"line"},{"v0":20,"v1":21,"trait":"line"},{"v0":22,"v1":23,"trait":"line","curve":-140},{"v0":24,"v1":25,"trait":"goalnet","curve":10},{"v0":25,"v1":26,"trait":"goalnet","curve":10},{"v0":26,"v1":27,"trait":"goalnet","curve":10},{"v0":28,"v1":29,"trait":"powerboost","curve":180},{"v0":25,"v1":30,"trait":"line"},{"v0":26,"v1":31,"trait":"line"},{"v0":32,"v1":33,"trait":"penArea","curve":50},{"curve":0,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","v0":34,"v1":35,"x":282}],"goals":[{"p0":[310,99],"p1":[310,-99],"team":"blue","_selected":true},{"p0":[300,100],"p1":[-400,100],"team":"red"},{"p0":[300,-100],"p1":[-400,-100],"team":"red"},{"p0":[-10,250],"p1":[-10,-250],"team":"red"}],"discs":[{"pos":[300,100],"trait":"goalPost"},{"pos":[300,-100],"trait":"goalPost"},{"pos":[400,-135],"trait":"stanchion"},{"pos":[400,135],"trait":"stanchion"}],"planes":[{"normal":[0,1],"dist":-200,"trait":"ballArea"},{"normal":[0,-1],"dist":-200,"trait":"ballArea"},{"normal":[0,1],"dist":-250,"bCoef":0.1},{"normal":[0,-1],"dist":-250,"bCoef":0.1},{"normal":[1,0],"dist":-400,"bCoef":0.1},{"normal":[-1,0],"dist":-400,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"gkArea":{"vis":false,"bCoef":0,"cMask":["blue"]},"penArea":{"vis":false,"bCoef":0,"cMask":["red"]},"line":{"vis":true,"color":"C7E6BD","cMask":[]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"goalnet":{"vis":true,"bCoef":0.1,"color":"C7E6BD","cMask":["ball","red","blue"]},"powerboost":{"vis":false,"bCoef":-2.4,"cMask":["ball"],"color":"C7E6BD"},"goalPost":{"radius":5,"invMass":0,"bCoef":1.3,"color":"FFFFFF"},"stanchion":{"radius":3,"invMass":0,"bCoef":1,"color":"FFFFFF"}}}'
var estilo = ["normal", "bold", "italic", "small", "small-bold", "small-italic"];
var atlanta = [0xFCCE00,0x00335E,0xFCCE00]
var caca = [0x000000,0x781010,0x000000]
var moron = [0xFFFFFF,0x770000,0xFFFFFF]
var chicago = [0x095C00,0x000000,0x095C00]
var ferro = [0x0F9E00,0x046E0B,0x0F9E00]
var almbrown = [0xFFEB85,0x00000,0xFFEB85] 
var quilmes = [0xF5F5F5] // Color de nombre: 040073
var eljequipos = [caca,moron,chicago,ferro,almbrown,quilmes]
let room;
const HaxNotification = { NONE: 0, CHAT: 1, MENTION: 2 };
var welcomeColor = 0xc4ff65;
let tiempoTocandoPelota = 0;
let cambioColorRealizado = true;
let activePlay = false;
let lastTeamTouched = null;
let lastPlayersTouched = [null, null];
let playerBall = false;
const triggerDistance = 20; // Ajusta según tus necesidades
const touchDistance = 15; // Ajusta según tus necesidades
let intervalo;
var playerNames = {};
    var playerData = {};
    var playerStats = {};
    const playerStatsFilePath = path.join(__dirname, 'playerStats.json');
const maxtemp = 5;
const segundosPosibles = [30, 45, 60, 75, 90];
let relatorAlready = false;
let minutos;
let duracionAleatoria;
let finalizacionMensajeEnviado = false;
let tie = false;
let entrya = false;
let index = 0;
let cycleCount = 0;
const maxCycles = 2;
const playerIps = {};
let sizeEnabled = true;
let pSize = 15;
let totalPlayers = 0;
const inactivityThreshold = 7 * 24 * 60 * 60 * 1000;
let inactivePlayers = {};


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
        roomName: "⚽ Primera HaxNacional | Juegan todos ⚽",
        maxPlayers: 22,
        public: false,
        noPlayer: true,
        token: "thr1.AAAAAGcYQRlRczFA9EM2bg.kzGkso41jOc",
        playerName: "⚽𝗔𝗿𝗯𝗶𝘁𝗿𝗼",
        flag: "AR"
    });     

    room.setCustomStadium(v1)
    room.setScoreLimit(4);
    room.setTimeLimit(maxtemp);
    room.setTeamColors(2, 0, 0xFFFFFF, atlanta)
    room.setTeamColors(1, 0, 0xFFFFFF, caca)
    room.startGame();

    let adminPassword = 100 + getRandomInt(9000);
    console.log("adminPassword : " + adminPassword);


    room.onRoomLink = function (link) {
        console.log(link);
    };

    let redTeamCount = 0;
    let blueTeamCount = 0;

    function getTeamPrefix(player) {
        const playerDataEntry = playerData[player.id]; // Guardamos la entrada de playerData
        const playerAuth = playerDataEntry ? playerDataEntry.auth : null; // Verificamos si existe antes de acceder a auth
    
        if (player.admin) {
            return "[⚡Admin ] "; 
        } else if (playerStats[playerAuth] && playerStats[playerAuth].isVip) {
            return "[🌟Vip ] ";
        } else if (playerDataEntry && playerDataEntry.afk) {
            return "[😴] ";
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
            return name.replace(/^\[(?:🔴|🔵|⚫|⚡Admin |😴|🌟Vip )\]\s*/, "").trim(); 
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

    room.onPlayerAdminChange = function (player) {
        updatePlayerName(player); 
        room.sendAnnouncement(`${player.name} ${player.admin ? '👑 Ahora es admin' : '❌ Ya no es admin'}.`, null, comcolor, estilo[1], HaxNotification.CHAT);
    };

    function onVipChange(target) {
        const targetAuth = playerData[target.id].auth
        
        if (playerStats[targetAuth].isVip) { 
            room.sendAnnouncement(`${playerData[target.id].name} 🌟 Ahora es VIP.`, null, comcolor, estilo[1], HaxNotification.CHAT); 
            updatePlayerName(target); 
        } else {
            room.sendAnnouncement(`${playerData[target.id].name} ❌ Ya no es VIP.`, null, comcolor, estilo[1], HaxNotification.CHAT);
            updatePlayerName(target); 
        }
        savePlayerStats(targetAuth);
    }
    
    room.onPlayerJoin = function (player) {
        const redCount = room.getPlayerList().filter(p => p.team === 1).length;
        const blueCount = room.getPlayerList().filter(p => p.team === 2).length;
    
        if (player.avatar === "卐" || (player.avatar && player.avatar.includes("卐")) || player.name.includes("卐")) {
            room.kickPlayer(player.id, "Nombre o avatar inapropiado. Conseguite una vida tarado", true);
            return; 
        }
    
        room.setPlayerTeam(player.id, redCount > blueCount ? 2 : 1);
    
        var playerConnection = player.conn;
        const output = Buffer.from(playerConnection, 'hex');
    
    
        playerData[player.id] = {
            ...player,
            afk: false,
            afkTeam: player.team
          }
    
        const playerAuth = playerData[player.id].auth;
    
        if (!playerStats[playerAuth]) {
            playerStats[playerAuth] = {
                name: player.name,
                goals: 0,
                autoGoals: 0,
                matches: 0,
                password: undefined,
                loggedIn: false,
                prefix: undefined,
                isVip: false,
                isAdmin: false,
                lastConnected: new Date().toISOString() // Fecha actual
            };
        } else {
            const defaultValues = {
                goals: 0,
                autoGoals: 0,
                matches: 0,
                password: undefined,
                loggedIn: false,
                prefix: undefined,
                isVip: false,
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
    
        updatePlayerName(player);
        playerNames[player.id] = player.name;
    
        playerIps[player.id] = output || "IP no disponible";
    
        room.sendAnnouncement(` ╔════════════════════════════════════════════════════╗\n ║           ⚽ ¡Bienvenido ${player.name} a Primera HaxNacional!⚽\n ║           👨‍💻 Revisa los comandos con !help y mira tus estadísticas\n ║           😂¡Diviértete y mete goles!😂\n ╚════════════════════════════════════════════════════╝`, player.id, comcolor, estilo[0], HaxNotification.CHAT);
    
        if (player.auth === "1HExEYLgzeXZdf8RAnziWjKYSqU5Pz8Uoqcq-nfmaxw") {
            room.setPlayerAdmin(player.id, true);
            room.setPlayerTeam(player.id, 2);
            room.sendAnnouncement(`Se ha unido a la sala el Admin ${player.name}`, null, 0x00BFFF, estilo[1], HaxNotification.CHAT);
        }

        if (playerStats[player.auth].isAdmin) {
            room.setPlayerAdmin(player.id, true);
            room.sendAnnouncement(`Se ha unido a la sala el Admin ${player.name}`, null, 0x00BFFF, estilo[1], HaxNotification.CHAT);
        }
    
        savePlayerStats(); // Guardar los datos cada vez que un jugador se une
    };
    

    loadPlayerStats();

    room.onPlayerLeave = function(player) {
        delete inactivePlayers[player.id];
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
    
            // Actualizar afkTeam solo si el jugador no está en modo AFK
            if (!playerData[changedPlayer.id].afk) {
                playerData[changedPlayer.id].afkTeam = changedPlayer.team; // Actualiza el equipo original si no está en AFK
            }
        } else {
            console.error(`Player data for ID ${changedPlayer.id} not found.`);
            // Inicializar playerData si es necesario
            playerData[changedPlayer.id] = {
                name: changedPlayer.name,
                team: changedPlayer.team,
                auth: changedPlayer.auth,
                admin: changedPlayer.admin,
                afk: false,
                afkTeam: changedPlayer.team // Inicializar afkTeam también
            };
        }
    
        if (entrya == true && newTeam !== 0) {
            room.sendAnnouncement(`Entrenador💪: Ahora jugas para el equipo ${equipo}`, changedPlayer.id, entrmsj, estilo[1], HaxNotification.CHAT);
        }
    };

    function Victory() {
        const scores = room.getScores();
        const blueScore = scores.blue;
        const redScore = scores.red;
        const winner = blueScore > redScore ? 'blue' : 'red';
        const loser = blueScore > redScore ? 'red' : 'blue';
        let tie = false;
    
        if (blueScore == redScore) {
            tie = true;
        }
    
        let message = ``;
        if (!tie) {
            message = `Relator🎙️: ¡Ganó el ${winner.toUpperCase()} ${blueScore}-${redScore} ante el ${loser.toUpperCase()}!`;
        } else {
            message = `Relator🎙️: ¡Hubo un empate! 🟦${blueScore}-${redScore}🟥`;
        }
        if (winner == "blue") {
            room.sendAnnouncement(message, null, 0x0078d7, estilo[1], HaxNotification.CHAT);
        } else {
            room.sendAnnouncement(message, null, 0xe81224, estilo[1], HaxNotification.CHAT);
        }
        room.stopGame();
    
        const randomIndex = getRandomInt(eljequipos.length);
        const selectedTeamName = Object.keys(eljequipos)[randomIndex];
        let nombreRival;
    
        if (selectedTeamName == 0) {
            room.setTeamColors(1, 0, 0xFFFFFF, caca);
            nombreRival = "Chacarita";
        } else if (selectedTeamName == 1) {
            nombreRival = "Moron";
            room.setTeamColors(1, 0, 0xFFFFFF, moron);
        } else if (selectedTeamName == 2) {
            room.setTeamColors(1, 0, 0xFFFFFF, chicago);
            nombreRival = "Nueva Chicago";
        } else if (selectedTeamName == 3) {
            room.setTeamColors(1, 0, 0xFFFFFF, ferro);
            nombreRival = "Ferro";
        } else if (selectedTeamName == 4) {
            room.setTeamColors(1, 0, 0xFFFFFF, almbrown);
            nombreRival = "Almirante Brown";
        } else if (selectedTeamName == 5) {
            room.setTeamColors(1, 0, 0x040073, quilmes);
            nombreRival = "Quilmes";
        }
    
        const players = room.getPlayerList();
        const activePlayers = players.filter(player => player.team !== 0);
        const totalPlayers = activePlayers.length;
    
        if (totalPlayers <= 4) {
            room.setCustomStadium(v2);
        } else if (totalPlayers <= 6) {
            room.setCustomStadium(v3);
        } else if (totalPlayers <= 8) {
            room.setCustomStadium(v4);
        } else if (totalPlayers <= 10) {
            room.setCustomStadium(v5);
        } else if (totalPlayers <= 14) {
            room.setCustomStadium(v7);
        } else if (totalPlayers <= 22) {
            room.setCustomStadium(v10);
        }
    
        setTimeout(function () {
            room.sendAnnouncement(`Mezclando equipos...`, null, privmsg, estilo[1], HaxNotification.CHAT);
            shuffleTeams();
        }, 2000);
    
        setTimeout(function () {
            room.sendAnnouncement(`Comentarista 💬: El nuevo partido es Atlanta VS ${nombreRival}`, null, commsj, estilo[1], HaxNotification.CHAT);
            room.startGame();
        }, 5000);
        relatorAlready = false;
    }
    
    
    
    room.onTeamVictory = function () {
        setTimeout(() => {
            Victory();
        }, 3000);
    }

    function shuffleTeams() {
        const players = room.getPlayerList();
        
        // Filtrar solo jugadores que no son espectadores
        const activePlayers = players.filter(player => player.team !== 0);
        
        // Mezclar el arreglo de jugadores
        for (let i = activePlayers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [activePlayers[i], activePlayers[j]] = [activePlayers[j], activePlayers[i]];
        }
    
        // Contar los jugadores activos
        totalPlayers = activePlayers.length;
        const half = Math.floor(totalPlayers / 2);
    
        // Dividir los jugadores en dos equipos
        const team1 = activePlayers.slice(0, half);
        const team2 = activePlayers.slice(half);
    
        // Asignar los nuevos equipos
        team1.forEach(player => room.setPlayerTeam(player.id, 1)); // Equipo Rojo
        team2.forEach(player => room.setPlayerTeam(player.id, 2)); // Equipo Azul
    
    }
    
    
    
    room.onPlayerChat = function (player, message) {
        message = message.trim();
        lastName = player.name
        const playerAuth = playerData[player.id].auth;
        const playerInfo = playerStats[playerAuth];
        const isAdminOrVIP = player.admin || (playerInfo && playerInfo.isVip);
        // Detectar el equipo del jugador
        if (message.startsWith('!')) {
            // Si el mensaje comienza con "!", es un comando
            var command = message.split(" ")[0].toLowerCase(); // Obtener el comando (la primera palabra después de "!")
            switch (command) {
                case "!claim":
                    if (parseFloat(message.split(" ")[1]) === adminPassword) {
                        room.setPlayerAdmin(player.id, true);
                        updatePlayerName(player); // Actualiza el nombre inmediatamente
                        adminPassword = 100 + getRandomInt(9000);
                        console.log("adminPassword : " + adminPassword);
                        room.sendAnnouncement(`Bienvenido ${player.name}`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                    } else {
                        room.sendAnnouncement(`Código erróneo`, player.id, cor, estilo[1], HaxNotification.CHAT);
                    }
                    return false;
                    break;
                case "!unadmin":
                        if (player.admin) {
                            room.setPlayerAdmin(player.id, false);
                        }
                        return false;
                        break;
                case "!map":
                    if (player.admin) {
                        var mapArgs = message.split(" ");
                        
                        if (mapArgs.length >= 2) {
                            var mapNumber = mapArgs[1];
                
                            if (mapNumber == "v1" || mapNumber == "v2" || mapNumber == "v3" || mapNumber == "v4" || mapNumber == "v5" || mapNumber == "v7" || mapNumber == "v10") {
                                room.stopGame();
                
                                // Cambio de mapa
                                if (mapNumber == "v1") {
                                    room.setCustomStadium(v1);
                                } else if (mapNumber == "v2") {
                                    room.setCustomStadium(v2);
                                } else if (mapNumber == "v3") {
                                    room.setCustomStadium(v3);
                                } else if (mapNumber == "v4") {
                                    room.setCustomStadium(v4);
                                } else if (mapNumber == "v5") {
                                    room.setCustomStadium(v5);
                                } else if (mapNumber == "v7") {
                                    room.setCustomStadium(v7);
                                } else if (mapNumber == "v10") {
                                    room.setCustomStadium(v10);
                                }
                
                                room.startGame();
                                room.sendAnnouncement("Mapa cambiado exitosamente", null, comcolor, estilo[1], HaxNotification.CHAT);
                            } else {
                                // Mapa no válido
                                room.sendAnnouncement(`Error: El mapa "${mapNumber}" no existe. Usa: !map <map_id>`, player.id, cor, estilo[1], HaxNotification.CHAT);
                            }
                        }
                    } else {
                        room.sendAnnouncement(`Comando denegado`, player.id, cor, estilo[1], HaxNotification.CHAT);
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
                                        playerData[player.id].afk = true;
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
                            new Command('claim', ['code'], 'Le da admin a un jugador', { admin: true }),
                            new Command('unadmin', ['id'], 'Le saca admin a un jugador', { admin: true }),
                            new Command('map', ['map-name'], 'Permite cambiar el mapa', { admin: true }),
                            new Command('team', ['team-id'], 'Cambia tu equipo', { admin: true }),
                            new Command('clearbans', [], 'Elimina los baneos', { admin: true }),
                            new Command('ball', [], 'Mueve la pelota a (0;0)', { admin: true }),
                            new Command('say', ['id'], 'Decir algo desde el nombre de otra persona', { admin: true }),
                            new Command('msg', ['id'], 'Envía mensaje privado a otro jugador por su id'),
                            new Command('id', ['name'], 'Obtén el id de un jugador mediante su nombre', { admin: true }),
                            new Command('shuffle', [], 'Mezcla los equipos', { admin: true }),
                            new Command('adm', ['value'], 'Cambia la configuración de un comando', { admin: true }),
                            new Command('size', ['radius'], 'Cambia el tamaño del jugador (default: 15)'),
                            new Command('ip', ['id'], 'Obtiene la ip de un jugador por su id', { admin: true }),
                            new Command('afk', [], 'Alterna el estado afk'),
                            new Command('afklist', [], 'Muestra los jugadores afk'),
                            new Command('stats', [], 'Mira tus estadísticas como jugador. (Goles, Autogoles y partidos jugados)'),
                            new Command('register', ['password'], 'Create una cuenta en el servidor'),
                            new Command('login', ['password'], 'Ingresa a tu cuenta del servidor'),
                            new Command('auth', [], 'Revisa tu auth'),
                            new Command('changepassword', ['newPassword', 'auth'], 'Si te olvidaste tu contraseña, puedes cambiarla.'),
                            new Command('prefix', ['prefix'], 'Agrega un prefix antes de tu nombre. Maximo 5 caracteres. Solo apto para vip o superior', { admin: true}),
                            new Command('delprefix', [], 'Elimina tu prefix. Solo apto para vip o superior', { admin: true}),
                            new Command('vip', ['id'], 'Otorgar vip a un jugador por su id', { admin: true }),
                            new Command('unvip', ['id'], 'Quitarle el vip a un jugador', { admin: true }),

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
                    
                            // Si se alcanzan los 8 comandos, se envía el mensaje
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
                    if (isAdminOrVIP) {
                        room.setDiscProperties(0, { x: 0, y: 0, xspeed: 0, yspeed: 0 })
                        room.sendAnnouncement(`La pelota ha sido teletransportada a (0;0)`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                    } else {
                        room.sendAnnouncement(`Comando denegado`, player.id, cor, estilo[1], HaxNotification.CHAT);
    s
                    }
                    return false;
                    break;
                    case "!say":
                        var sayArgs = message.split(" ");
                        if (sayArgs.length >= 3) {
                            var targetId = parseInt(sayArgs[1]);
                            const targetIdAuth = playerData[targetId].auth
                            var targetMessage = sayArgs.slice(2).join(" ");
                            var targetPlayer = room.getPlayer(targetId);
                            
                            // Verificar si el jugador es admin
                            if (player.admin) {
                                if (targetPlayer) {
                                    // Verificar si el jugador tiene un prefijo
                                    if (playerStats[targetIdAuth].prefix !== undefined) {
                                        room.sendAnnouncement(`[${playerStats[targetIdAuth].prefix}] ` + playerData[targetId].name + " » " + targetMessage, null, mesjcor, estilo[2], HaxNotification.CHAT);
                                    } else {
                                        room.sendAnnouncement(playerData[targetId].name + " » " + targetMessage, null, mesjcor, estilo[2], HaxNotification.CHAT);
                                    }
                                } else {
                                    room.sendAnnouncement("Jugador no encontrado o desconectado.", player.id, mesjcor, estilo[1], HaxNotification.CHAT);
                                }
                            } else {
                                room.sendAnnouncement("Comando denegado", player.id, cor, estilo[1], HaxNotification.CHAT);
                            }
                        } else {
                            room.sendAnnouncement("Uso incorrecto. Usa: !say <id> <mensaje>", player.id, cor, estilo[1], HaxNotification.CHAT);
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
                            
                            if (player.admin) {
                                if (admArgs.length >= 3) {
                                    var command = admArgs[1]; // Ej: "size"
                                    var status = admArgs[2];   // Ej: "false" o "true"
                        
                                    if (command === "size" && (status === "true" || status === "false")) {
                                        if (status === "false") {
                                            sizeEnabled = false; // Deshabilitar
                                            room.sendAnnouncement("El comando !size ha sido deshabilitado.", null, cor, estilo[1], HaxNotification.CHAT);
                                            if (room.getPlayerList().length > 0) {
                                                room.getPlayerList().forEach(p => {
                                                    room.setPlayerDiscProperties(p.id, { radius: 15 }); // Reinicia el tamaño a 15
                                                    pSize = 15;
                                                });
                                            }
                                        } else {
                                            sizeEnabled = true; // Habilitar
                                            room.sendAnnouncement("El comando !size ha sido habilitado.", null, comcolor, estilo[1], HaxNotification.CHAT);
                                        }
                                    } else {
                                        room.sendAnnouncement("Uso incorrecto. Usa: !adm <comando> <true/false>", player.id, cor, estilo[1], HaxNotification.CHAT);
                                    }
                                } else {
                                    room.sendAnnouncement("Uso incorrecto. Usa: !adm size <true/false>", player.id, cor, estilo[1], HaxNotification.CHAT);
                                }
                            } else {
                                room.sendAnnouncement(`Comando denegado`, player.id, cor, estilo[1], HaxNotification.CHAT);
                            }
                            return false;
                            break;
                         case "!msg":
                                var msgArgs = message.split(" ");
                                
                                // Verifica que haya al menos 3 argumentos (comando, ID y mensaje)
                                if (msgArgs.length >= 3) {
                                    var targetId = parseInt(msgArgs[1]); // El ID del jugador objetivo
                                    var msgContent = msgArgs.slice(2).join(" "); // El mensaje que se va a enviar
                            
                                    // Busca al jugador por ID
                                    var targetPlayer = room.getPlayer(targetId);
                                    
                                    if (targetId == player.id) {
                                        room.sendAnnouncement(`No podes mandarte mensajes a ti mismo chinchulin`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                    } else {
                                        if (targetPlayer) {
                                            // Envia el mensaje al jugador objetivo
                                            room.sendAnnouncement(`Mensaje privado de ${player.name}: ${msgContent}`, targetId, privmsg, estilo[1], HaxNotification.CHAT);
                                            // Envia una confirmación al jugador que lo envió
                                            room.sendAnnouncement(`Mensaje privado a ${targetPlayer.name}: ${msgContent}`, player.id, privmsg, estilo[1], HaxNotification.CHAT);
                                        } else {
                                            room.sendAnnouncement(`El jugador con ID ${targetId} no está en la sala.`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                        }
                                    }
                                } else {
                                    room.sendAnnouncement("Uso incorrecto. Usa: !msg <id> <mensaje>", player.id, cor, estilo[1], HaxNotification.CHAT);
                                }
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
                                if (player.admin) { 
                                    // Supongamos que quieres obtener el ID de un jugador que ingresó el nombre en el mensaje
                                    const targetPlayerName = message.split(" ")[1]; // El nombre del jugador se obtiene del mensaje después del comando "!id"
                                    const targetPlayer = room.getPlayerList().find(p => p.name === targetPlayerName);
                            
                                    if (targetPlayer) {
                                        room.sendAnnouncement(`El id del jugador ${targetPlayer.name} es ${targetPlayer.id}`, player.id, mesjcor, estilo[1], HaxNotification.CHAT);
                                    } else {
                                        room.sendAnnouncement(`Jugador no encontrado`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                    }
                                } else {
                                    room.sendAnnouncement(`Comando denegado`, player.id, cor, estilo[1], HaxNotification.CHAT);
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
                            case "!afk": 
                                const playerOldTeam = playerData[player.id].team;
                                let playerTeam = playerData[player.id].afkTeam || playerOldTeam;
                                
                                if (playerOldTeam == 1 || playerOldTeam == 2) {
                                    playerData[player.id].afkTeam = playerOldTeam;
                                    room.setPlayerTeam(player.id, 0);
                                    playerData[player.id].afk = true;
                                    inactivePlayers[player.id] = undefined;
                                    room.sendAnnouncement(`😴 Ahora estás en modo afk, usa !afk para volver`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                } else if (playerOldTeam == 0 && playerData[player.id].afk) {
                                    room.setPlayerTeam(player.id, playerTeam);
                                    playerData[player.id].afk = false;
                                    room.sendAnnouncement(`⏰ Ya no estás en modo afk`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                }
                                return false;
                                break;
                            case "!afklist":
                                    let afkPlayers = room.getPlayerList().filter(p => playerData[p.id] && playerData[p.id].afk);

                                    if (afkPlayers.length === 0) {
                                        room.sendAnnouncement("No hay jugadores AFK", player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                    } else {
                                        afkPlayers.sort((a, b) => a.id - b.id);
                                        const afkPlayersNames = afkPlayers.map(p => `${p.name} (id: ${p.id})`).join(', ');
                                        room.sendAnnouncement(`Los jugadores AFK son: ${afkPlayersNames}`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                    }
                                    return false;
                                    break;
                                case "!register":
                                        var msgArgs = message.split(" ");
                                    
                                        if (playerStats[playerAuth].password == undefined) {
                                            if (msgArgs.length >= 2) {
                                                var password = msgArgs[1];
                                                playerStats[playerAuth].password = password;
                                                room.sendAnnouncement(`✅ Perfectamente registrado. Recuerda no compartir tu contraseña! 🔒\nUsa !login para logearte en tu cuenta`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                            } else {
                                                room.sendAnnouncement("❌ Uso incorrecto. Usa: !register <contraseña>", player.id, cor, estilo[1], HaxNotification.CHAT);
                                            }
                                        } else {
                                            room.sendAnnouncement("⚠️ Ya tienes una contraseña. Usa !login para logearte\n Si no recuerdas tu contraseña, usa !changepassword", player.id, cor, estilo[1], HaxNotification.CHAT);
                                        }
                                        return false;
                                        break;
                                    
                                case "!login":
                                        var msgArgs = message.split(" ");
                                        var password = msgArgs[1];
                                    
                                        if (playerStats[playerAuth].loggedIn) {
                                            room.sendAnnouncement("🔑 Ya has iniciado sesión.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                            return false;
                                        }
                                    
                                        if (msgArgs.length >= 2) {
                                            if (playerStats[playerAuth].password !== undefined && password === playerStats[playerAuth].password) {
                                                playerStats[playerAuth].loggedIn = true;
                                                room.sendAnnouncement(`✅ Sesión iniciada! Recuerda no compartir tu contraseña! 🔒`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                            } else if (playerStats[playerAuth].password == undefined) {
                                                room.sendAnnouncement("⚠️ Todavía no tienes una cuenta! Usa !register <contraseña> para crear una", player.id, cor, estilo[1], HaxNotification.CHAT);
                                            } else if (password !== playerStats[playerAuth].password) {
                                                room.sendAnnouncement("❌ Contraseña incorrecta\n Si no recuerdas tu contraseña, usa !changepassword\n Recuerda utilizar !auth para obtener tu auth y asi cambiar la contraseña", player.id, cor, estilo[1], HaxNotification.CHAT);
                                            }
                                        } else {
                                            room.sendAnnouncement("❌ Uso incorrecto. Usa: !login <contraseña>", player.id, cor, estilo[1], HaxNotification.CHAT);
                                        }
                                        return false;
                                        break;
                                    
                                case "!unlogin":
                                        if (!playerStats[playerAuth].loggedIn) {
                                            room.sendAnnouncement("⚠️ Debes estar logeado para cerrar sesión", player.id, cor, estilo[1], HaxNotification.CHAT);
                                        } else if (playerStats[playerAuth].loggedIn) {
                                            playerStats[playerAuth].loggedIn = false;
                                            room.sendAnnouncement(`✅ Sesión cerrada! Recuerda no compartir tu contraseña! 🔒`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                        }
                                        return false;
                                        break;
                                    
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
                                    
                                    case "!changepassword":
                                        var msgArgs = message.split(" ");

                                        if (msgArgs.length < 3) {
                                            room.sendAnnouncement("❌ Uso incorrecto. Usa: !changepassword <nueva contraseña> <auth>", player.id, cor, estilo[1], HaxNotification.CHAT);
                                            return false;
                                        }
                                    
                                        const newPassword = msgArgs.slice(1, -1).join(" "); // La nueva contraseña ingresada
                                        const providedAuth = msgArgs[msgArgs.length - 1]; // El auth proporcionado por el jugador
                                    
                                        // Verificar si la nueva contraseña contiene espacios
                                        if (newPassword.includes(" ")) {
                                            room.sendAnnouncement("❌ La contraseña no puede contener espacios. Intenta nuevamente.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                            return false;
                                        }
                                    
                                        if (providedAuth === playerData[player.id].auth) {
                                            playerStats[playerData[player.id].auth].password = newPassword; // Cambiar la contraseña del jugador
                                            room.sendAnnouncement("✅ Contraseña cambiada exitosamente. Recuerda no compartirla con nadie. 🔒", player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                        } else if (player.admin) {
                                            playerStats[providedAuth].password = newPassword; // Cambiar la contraseña del jugador
                                            room.sendAnnouncement("✅ Contraseña cambiada exitosamente. Recuerda no compartirla con nadie. 🔒", player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                        } else {
                                            room.sendAnnouncement("❌ El auth proporcionado no coincide con tu cuenta. Verifica el auth e intenta nuevamente.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                        }
                                    
                                        return false;
                                        break;
                                    case "!prefix":
                                        var msgArgs = message.split(" ");
                                        const prefix = msgArgs[1];
                                    
                                        if (isAdminOrVIP) {
                                            if (prefix === "Admin" && !player.admin) {
                                                room.sendAnnouncement(`❌ No puedes establecer el prefijo como "Admin".`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                            } else if (prefix === "Vip" && !playerData[playerAuth].isVip) {
                                                room.sendAnnouncement(`❌ No puedes establecer el prefijo como "Vip".`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                            } else if (prefix && prefix.length <= 5) {
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
                                    if (isAdminOrVIP) {
                                        // Restablecer el prefijo a undefined
                                        playerStats[playerAuth].prefix = undefined;
                                        room.sendAnnouncement(`✅ Tu prefijo ha sido eliminado.`, player.id, comcolor, estilo[1], HaxNotification.CHAT);
                                    } else {
                                        room.sendAnnouncement(`❌ No tienes permiso para usar este comando.`, player.id, cor, estilo[1], HaxNotification.CHAT);
                                    }
                                    return false;
                                    break;
                                case "!vip":
                                    var vipArgs = message.split(" ");
                                    if (vipArgs.length === 2) {
                                        var targetId = parseInt(vipArgs[1]);
                                        const targetInfo = room.getPlayer(targetId)
                                        
                                        // Verifica si el jugador existe en playerData
                                        if (!playerData[targetId]) {
                                            room.sendAnnouncement("❌ Jugador no encontrado.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                            return false;
                                        }
                                        
                                        const targetAuth = playerData[targetId].auth;
                                
                                        if (player.admin) {
                                            playerStats[targetAuth].isVip = true; 
                                            onVipChange(targetInfo);
                                        } else {
                                            room.sendAnnouncement("❌ No tienes permiso para usar este comando.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                        }
                                    } else {
                                        room.sendAnnouncement("❌ Uso incorrecto. Usa: !vip <id>", player.id, cor, estilo[1], HaxNotification.CHAT);
                                    }
                                    return false;
                                    break;
                                case "!unvip":
                                    var unvipArgs = message.split(" ");
                                    if (unvipArgs.length === 2) {
                                        const target = player;
                                        var targetId = parseInt(unvipArgs[1]);
                                        const targetInfo = room.getPlayer(targetId)
                                        
                                        // Verifica si el jugador existe en playerData
                                        if (!playerData[targetId]) {
                                            room.sendAnnouncement("❌ Jugador no encontrado.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                            return false;
                                        }
                                
                                        const targetIdAuth = playerData[targetId].auth;
                                
                                        if (player.admin) {
                                            playerStats[targetIdAuth].isVip = false; 
                                            onVipChange(targetInfo);
                                        } else {
                                            room.sendAnnouncement("❌ No tienes permiso para usar este comando.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                        }
                                    } else {
                                        room.sendAnnouncement("❌ Uso incorrecto. Usa: !unvip <id>", player.id, cor, estilo[1], HaxNotification.CHAT);
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
                                        
                                        // Hacemos al jugador administrador
                                        room.setPlayerAdmin(targetId, true);
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
                                
                                        // Verificamos si el jugador con ese ID existe
                                        const targetInfo = playerData[targetId];
                                        if (!targetInfo) {
                                            room.sendAnnouncement("❌ Jugador no encontrado.", player.id, cor, estilo[1], HaxNotification.CHAT);
                                            return false;
                                        }
                                
                                        // Si el jugador existe, se le quita el admin
                                        const targetAuth = targetInfo.auth; // Cambiado a const
                                        room.setPlayerAdmin(targetId, false);
                                
                                        // Si el jugador tiene estadísticas almacenadas, actualizamos su estado
                                        if (playerStats[targetAuth]) {
                                            playerStats[targetAuth].isAdmin = false;
                                        }
                                
                                        // Confirmación por consola y mensaje en el chat
                                        console.log(`${targetInfo.name} ya no es administrador, su ID es ${targetId}. Prompt: ${unadminArgs}`);
                                        room.sendAnnouncement(`✅ ${targetInfo.name} ya no es administrador.`, null, comcolor, estilo[1], HaxNotification.CHAT);
                                
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
                var modifiedName = playerNames[player.id];
                if (player.team == 1) {
                    modifiedName = "[🔴] " + modifiedName;
                } else if (player.team == 2) {
                    modifiedName = "[🔵] " + modifiedName;
                } else if (player.team == 0) {
                    modifiedName = "[⚫] " + modifiedName;  
                }

                updatePlayerName(player.id)

                if (playerStats[playerAuth] && playerStats[playerAuth].loggedIn) {
                    if (player.admin) {
                        modifiedName = "[⚡] " + modifiedName;
                        if (playerStats[playerAuth].prefix !== undefined) {
                            room.sendAnnouncement(`[${playerStats[playerAuth].prefix}] ` + playerData[player.id].name + " » " + message, null, 0x00BFFF, estilo[1], HaxNotification.CHAT);
                        } else {
                            room.sendAnnouncement(playerData[player.id].name + " » " + message, null, 0x00BFFF, estilo[1], HaxNotification.CHAT);
                        }
                    } else if (playerInfo.isVip) {
                        if (playerStats[playerAuth].prefix !== undefined) {
                            room.sendAnnouncement(`[${playerStats[playerAuth].prefix}] ` + playerData[player.id].name + " » " + message, null, 0xFFD700, estilo[1], HaxNotification.CHAT); // Color dorado
                        } else {
                            room.sendAnnouncement(playerData[player.id].name + " » " + message, null, 0xFFD700, estilo[1], HaxNotification.CHAT); // Color dorado
                        }
                    } else if (playerData[player.id].afk === true) {
                        if (playerStats[playerAuth].prefix !== undefined) {
                            room.sendAnnouncement(`[${playerStats[playerAuth].prefix}] ` + playerData[player.id].name + " » " + message, null, mesjcor, estilo[2], HaxNotification.CHAT);
                        } else {
                            room.sendAnnouncement(playerData[player.id].name + " » " + message, null, mesjcor, estilo[2], HaxNotification.CHAT);
                        }
                    } else {
                        if (playerStats[playerAuth].prefix !== undefined) {
                            room.sendAnnouncement(`[${playerStats[playerAuth].prefix}] ` + playerData[player.id].name + " » " + message, null, mesjcor, estilo[2], HaxNotification.CHAT); // Color blanco (o el color que prefieras)
                        } else {
                            room.sendAnnouncement(playerData[player.id].name + " » " + message, null, mesjcor, estilo[2], HaxNotification.CHAT); 
                        }
                    }
                    return false; 
                } else {
                    room.sendAnnouncement("⛔ Para poder hablar debes haber iniciado secion. Usa 🔑 !login para logearte\n📝 Si no tienes cuenta utiliza !register para crearte una", player.id, cor, estilo[1], HaxNotification.CHAT); 
                    return false;
                }
            
                 
            }
    };
    
    
    function ordinal(numero) {
        var sufijo = "";
        var ultimoDigito = numero % 10;
        var penultimoDigito = Math.floor(numero / 10) % 10;
    
        if (penultimoDigito === 1) {
            sufijo = "º";
        } else {
            if (ultimoDigito === 1) {
                sufijo = "er";
            } else if (ultimoDigito === 2) {
                sufijo = "do";
            } else if (ultimoDigito === 3) {
                sufijo = "er";
            } else {
                sufijo = "º";
            }
        }
    
        return numero + sufijo;
    }
    
    
    function getLastTouchOfTheBall() {
        const ballPosition = room.getBallPosition();
        for (let i = 0; i < players.length; i++) {
            if (players[i].position !== null) {
                const distanceToBall = pointDistance(players[i].position, ballPosition);
                if (distanceToBall < triggerDistance) {
                    activePlay = true;
                    lastTeamTouched = players[i].team;
    
                    if (distanceToBall < touchDistance) {
                        playerBall = true;
                        return true;
                    } else {
                        playerBall = true;
                    }
    
                    if (playerBall) {
                        intervalo = setInterval(() => {
                            tiempoTocandoPelota += 100;
                            verificarTiempoPelota(); // Lógica para cambiar el color después de 2 segundos
                        }, 100);
                    }
                }
            }
        }
    }
    
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
            const passedTime = Date.now() - playerData[p.id].lastActivity
            const warningTime = 5000;
            const afkTime = 10000;
    
            if (passedTime >= warningTime && passedTime < afkTime && !playerData[p.id].afk) {
                room.sendAnnouncement(`😴 Si no te mueves seras movido como afk`,p.id, comcolor, estilo[1], HaxNotification.CHAT);
            } else if (passedTime >= afkTime) {
                playerData[p.id].afk = true;
                room.setPlayerTeam(p.id, 0)
                updatePlayerName(p.id)
                room.sendAnnouncement(`😴 ${p.name} Ahora esta afk. usa !afk para volver`, null, comcolor, estilo[1], HaxNotification.CHAT);
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
            playerData[player.id].afk = false; 
        }
    };
    
    
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
        entrya = true;
    };

    room.onGameStart = function () {
        finalizacionMensajeEnviado = false;
        tie = false;
        room.setTimeLimit(maxtemp);

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

                // Guardar estadísticas después de cada gol
                savePlayerStats();
            }, 1000);
        }
    };
    setInterval(() => {
        cleanupInactivePlayers();
    }, 24 * 60 * 60 * 1000);    
})
