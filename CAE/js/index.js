// JavaScript Document
/*导航*/
function show(num){
	var bg=document.getElementById("div"+num);
	bg.style.backgroundColor="#0474ad";
	var obj=document.getElementById("ul"+num);
	obj.style.display="block";
	}
function hide(num){
	var bg=document.getElementById("div"+num);
	bg.style.backgroundColor="";
	var obj=document.getElementById("ul"+num);
	obj.style.display="none";
	}
function changeyellow(num){
	var obj=document.getElementById("lii"+num);
	
	obj.style.color="yellow";
	}
function changenull(num){
	var obj=document.getElementById("lii"+num);
	
	obj.style.color="";
	}
/*详细页	*/
function alter(){
	
	var new1=document.getElementById("alter_new1");
	new1.style.display="block";
	var at=document.getElementById("alter_news");
	at.style.display="none";
	var new2=document.getElementById("alter_new2");
	new2.style.display="none";
	}
/*返回首页*/
function show_index(){
	var index=document.getElementById("alter_news");
	index.style.display="block";
	var new1=document.getElementById("alter_new1");
	new1.style.display="none";
	var new2=document.getElementById("alter_new2");
	new2.style.display="none";
	}
/*列表页*/
function alterl(){
	var new2=document.getElementById("alter_new2");
	new2.style.display="block";
	var at=document.getElementById("alter_news");
	at.style.display="none";
	var newa=document.getElementById("alter_new1");
	newa.style.display="none";
	}
/*列表*/
function show_next(num){
	for(var i=1;i<=11;i++){
		if(i==num){
			var obj=document.getElementById("show_page"+i);
			obj.style.display="block";
			var o=document.getElementById("li_bg"+i);
			o.style.backgroundColor="#327ab7";
			}
		else{
			var obj=document.getElementById("show_page"+i);
			obj.style.display="none";
			var o=document.getElementById("li_bg"+i);
			o.style.backgroundColor="";
			var obj=document.getElementById("show_page11");
			obj.style.display="none";
			var ae=document.getElementById("last_page");
			ae.style.backgroundColor="";
			}
		
		}
	
	}
	
/*末页*/
	/*function lastpage(){
	var obj=document.getElementById("show_page11");
	obj.style.display="block";
	var ae=document.getElementById("last_page");
	ae.style.backgroundColor="#327ab7";
	var a=document.getElementById("show_page1");
			a.style.display="none";
			a.style.backgroundColor="";
	var a=document.getElementById("show_page3");
			a.style.display="none";
			a.style.backgroundColor="";
	}*/
