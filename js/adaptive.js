
var width=screen.width;
var body=document.getElementById("body");

slayder=document.getElementById("slayder");
var page_1=body.children[0];


var text=page_1.firstElementChild.firstElementChild;
var zag=text.firstElementChild;
var descr=text.children[1];
var btn=document.getElementById("btn");
var btn_text=btn.firstElementChild;
var page_2=body.children[1];
var page_s_zag=page_2.firstElementChild;
var items=page_2.children[1];
var it_1=items.firstElementChild.firstElementChild;
var it_1_t=items.firstElementChild.children[1].firstElementChild;
var it_2=items.children[1].firstElementChild;
var it_2_t=items.children[1].children[1].firstElementChild;
var it_3=items.children[2].firstElementChild;
var it_3_t=items.children[2].children[1].firstElementChild;
var it_text_block=document.getElementsByClassName("it_block");
var slayder_descr=document.getElementById("slayder_descr");
var slayder_dot=document.getElementById("finddot").children[1];
var page_4=body.children[3];
var file=document.getElementById("file");

var page_5=body.children[4];
var pg5_text=page_5.firstElementChild;

var page_6=body.children[5];
var page_6_zag=page_6.firstElementChild;
var page_6_text=page_6.children[1];

var t_zag=page_6_text.firstElementChild.firstElementChild;
var bg6_block=page_6_text.firstElementChild;

var footer=body.children[6];
console.log(page_4);


/*Mobile*/
if(width<417)
{
    console.log(slayder.classList);
slayder.classList.remove("sl_bg1");
slayder.classList.add("sl-m_bg1");
	/*Page1*/
	page_1.classList.remove("page_f_bg");
	page_1.classList.add("page_f_m");	
	text.classList.remove("text");
	text.classList.add("text_m");
	zag.classList.remove("text_zag");
	zag.classList.add("text_zag_m");
	zag.classList.remove("text_desc");
    descr.classList.remove("text_desc");
    descr.classList.add("text_desc_m");
    btn.classList.remove("btn_1");
    btn.classList.add("btn_1_m");
    btn_text.classList.remove("text_btn");
    btn_text.classList.add("text_btn_m");
    /*Page2*/
    page_s_zag.classList.remove("page_s_zag");
    page_s_zag.classList.add("page_s_zag_m");
    items.classList.remove("items");
    items.firstElementChild.classList.remove("item","item_1");
    items.children[1].classList.remove("item","item_2");
    items.children[2].classList.remove("item","item_3");
    it_1.classList.add("it_s_m");
    it_2.classList.add("it_s_m");
    it_3.classList.add("it_s_m");
    items.firstElementChild.classList.add("item_m");
    items.children[1].classList.add("item_m");
    items.children[2].classList.add("item_m");


    it_1_t.classList.remove("item_text");
    it_2_t.classList.remove("item_text");
    it_3_t.classList.remove("item_text");

     it_1_t.classList.add("item_t_m");
    it_2_t.classList.add("item_t_m");
    it_3_t.classList.add("item_t_m");
  	
  	it_text_block[0].classList.add("it_block_m");
  	it_text_block[1].classList.add("it_block_m");
  	it_text_block[2].classList.add("it_block_m");

console.log("fjf:"+slayder_descr.parentElement.parentElement.classList);
  	slayder_descr.parentElement.parentElement.classList.remove("slayder_descr");
  	slayder_descr.classList.add("hide");
  	slayder_dot.classList.add("hide");

/*Page3*/


var num=1;
var timerId = setInterval(next, 3000);


  	function next(){
	slayder.classList.remove("sl-m_bg"+num);
  num++;
	if(num>=4){
		num=1
	}
  
	slayder.classList.add("sl-m_bg"+num);
	
	

}
/*Page4 */
page_4.firstElementChild.classList.remove("page_s_zag");
page_4.firstElementChild.classList.add("page_s_zag_m");
page_4.children[1].classList.remove("items");

page_4.children[1].firstElementChild.classList.remove("item","item_1","it_4");
page_4.children[1].firstElementChild.classList.add("item_4_m");
page_4.children[1].firstElementChild.classList.add("it_4_m");
page_4.children[1].firstElementChild.children[1].classList.remove("it_4_text");
page_4.children[1].firstElementChild.children[1].classList.add("it_4_text_m");

page_4.children[1].children[1].classList.remove("item","item_1","it_4");
page_4.children[1].children[1].classList.add("item_4_m");
page_4.children[1].children[1].classList.add("it_4_m");
page_4.children[1].children[1].children[1].classList.remove("it_4_text");
page_4.children[1].children[1].children[1].classList.add("it_4_text_m");

page_4.children[1].children[2].classList.remove("item","item_1","it_4");
page_4.children[1].children[2].classList.add("item_4_m");
page_4.children[1].children[2].classList.add("it_4_m");
page_4.children[1].children[2].children[1].classList.remove("it_4_text");
page_4.children[1].children[2].children[1].classList.add("it_4_text_m");

//console.log(file.firstElementChild);
file.remove();
page_4.children[2].remove();

/*Page5 */
page_5.classList.remove("page_5");
page_5.classList.add("page_5_m");
pg5_text.classList.remove("pg5_text");
pg5_text.classList.add("pg5_text_m");

pg5_text.children[1].classList.remove("pg5_zag");
pg5_text.children[1].classList.add("pg5_zag_m");

pg5_text.children[2].classList.remove("list");
pg5_text.children[2].classList.add("list_m");

pg5_text.children[3].classList.remove("pg5-cont");
pg5_text.children[3].classList.add("pg5-cont_m");


/*Page6 */
page_6.classList.remove("page_6");
page_6.classList.add("page_6_m");
page_6_zag.classList.remove("bg6_zag");
page_6_zag.classList.add("bg6_zag_m");
var t_zag=page_6_text.firstElementChild.firstElementChild;
t_zag.classList.remove("t_zag");
t_zag.classList.add("t_zag_m");	
bg6_block.classList.remove("bg6_text_block");
bg6_block.classList.add("bg6_block_m");
bg6_block.children[1].classList.remove("bg6_list");
bg6_block.children[1].classList.add("bg6_list_m");
//console.log(bg6_block.children[1].lastElementChild);
bg6_block.children[1].lastElementChild.remove();
bg6_block.children[1].lastElementChild.remove();

/*Footer*/
footer.classList.remove("footer");
footer.classList.add("footer_m");
footer.firstElementChild.classList.remove("foot_block","clearfix");
footer.firstElementChild.classList.add("foot_block_m");
footer.firstElementChild.firstElementChild.classList.remove("footer_left");
footer.firstElementChild.children[1].classList.remove("footer_right");
footer.firstElementChild.children[1].classList.add("footer_cont_m");
footer.firstElementChild.firstElementChild.firstElementChild.classList.remove("foot_cont");

footer.firstElementChild.firstElementChild.firstElementChild.firstElementChild.classList.remove("cont_1");


}




/*IPad*/
if(width>417&&width<769)
{
	console.log("Я зашел ipadversia");

text.classList.add("text_pl");
text.children[1].classList.add("text_descr_pl");
text.children[2].firstElementChild.firstElementChild.classList.add("but_1_pl");

items.classList.add("items_pl");
items.children[2].classList.add("it_3_pl");
slayder_descr.parentElement.parentElement.classList.add("sl_pl_m");
page_4.children[1].firstElementChild.classList.add("it_4_pl");
page_4.children[1].children[1].classList.add("it_4_pl");
page_4.children[1].children[2].classList.add("it_4_pl","it_3_pl");
page_4.children[1].classList.add("items_pl");
file.firstElementChild.classList.add("btn2_m");
page_4.lastElementChild.classList.add("pg4_cont_m");


page_5.classList.remove("page_5");
page_5.classList.add("page_5_pl");
page_6.classList.remove("page_6");
page_6.classList.add("page_6_pl");



bg6_block.classList.add("bg6_block_pl");
bg6_block.children[1].classList.add("bg6_list_pl");
footer.classList.add("footer_pl");


}








