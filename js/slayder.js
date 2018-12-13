

console.log("Slayder!!!!!!!!!!");
slayder.classList.add("sl_bg1");
var width=screen.width;
if(width>769){
var slayder,sl1_cl,sl2_cl,sl3_cl,sl4_cl,desc,num=1;
slayder=document.getElementById("slayder");
var cl=document.getElementsByClassName("cl");

for (var i =0 ; i <= cl.length - 1; i++) {
	cl[i].addEventListener("click", dot_click);
}
var timerId = setInterval(next, 3000);

function dot_click(){

if(num!=1)
	{
		slayder.classList.remove("sl_bg"+num);
	}
	var active=document.getElementsByClassName("circle_active");
	active[0].classList.remove("circle_active");

this.classList.add("circle_active");
num=this.id;
slayder.classList.add("sl_bg"+num);

}
function next(){

	var dot=document.getElementById(num);//1
	slayder.classList.remove("sl_bg"+num);
	dot.classList.remove("circle_active");
	num++;
	//console.log(num);
	if (num>4) {
	num=1;}
	
	var dot_n=document.getElementById(num);
	dot_n.classList.add("circle_active");
	slayder.classList.add("sl_bg"+num);

}
 }