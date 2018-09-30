 window.onload=function(){

var width=screen.width;
var body=document.getElementById("body");
var page_1=body.children[0];
var text=page_1.firstElementChild.firstElementChild;
var zag=text.firstElementChild;
var descr=text.children[1];
var btn=document.getElementById["btn"];
var text_btn=btn.firstElementChild;

if(width<=320)
{
	
	page_1.classList.remove("page_f_bg");
	page_1.classList.add("page_f_m");	
	text.classList.remove("text");
	text.classList.add("text_m");
	zag.classList.remove("text_zag");
	zag.classList.add("text_zag_m");
	zag.classList.remove("text_desc");
    descr.classList.remove("text_desc");
    descr.classList.add("text_desc_m");
    btn.classList.remove("btn");
    btn.classList.add("btn_m");
    text_btn.classList.remove("text_btn");
    text_btn.classList.add("text_btn_m");

}
console.log(page_1.firstElementChild.firstElementChild);
 }
