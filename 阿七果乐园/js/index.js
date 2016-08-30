// JavaScript Document

/*导航*/
function show(num){
	var obj=document.getElementById("ull"+num);
	obj.style.display="block";
	}
function hide(num){
	var obj=document.getElementById("ull"+num);
	obj.style.display="none";
	}
function changeyellow(num){
	var obj=document.getElementById("lii"+num);
	obj.style.backgroundColor="yellow";
	obj.style.color="black";
	}
function changenull(num){
	var obj=document.getElementById("lii"+num);
	obj.style.backgroundColor="";
	obj.style.color="";
	}
	
/*抢购*/
function addyinying(num){
	var obj=document.getElementById("add"+num);
	obj.style.boxShadow="2px 5px 5px #A7A7A7";
	}
function addnull(num){
	var obj=document.getElementById("add"+num);
	obj.style.boxShadow="";
	}

/*花样礼盒图*/
function addborder(num){
	var obj=document.getElementById("add_ph"+num);
	obj.style.border="2px solid #8CD499";
	}
function addborders(num){
	var obj=document.getElementById("add_ph"+num);
	obj.style.border="";
	}
	
	
/*隐藏的透明div	*/
function showo(num){
	var obj=document.getElementById("op"+num);
	obj.style.display="block";
	}
function hideo(num){
	var obj=document.getElementById("op"+num);
	obj.style.display="none";
	}
	
/*主界面转向blue界面*/
function leftbt(){
	var obj=document.getElementById("lefth");
	obj.style.display="block";
	var arr=document.getElementById("btzj");
	arr.style.display="none";
	
	}
/*主界面转向red界面*/
function leftbtt(){
	var obj=document.getElementById("lefthh");
	obj.style.display="block";
	var arr=document.getElementById("lefth");
	arr.style.display="none";
	
	}
/*主界面转向yellow界面*/
function rightbt(){
	var obj=document.getElementById("righth");
	obj.style.display="block";
	var arr=document.getElementById("btzj");
	arr.style.display="none";
	}
/*yellow转向主界面*/	
function rightbtr(){
	var obj=document.getElementById("btzj");
	obj.style.display="block";
	var arr=document.getElementById("righth");
	arr.style.display="none";
	}
/*red转向blue*/
function leftbtl(){
	var obj=document.getElementById("lefth");
	obj.style.display="block";
	var arr=document.getElementById("lefthh");
	arr.style.display="none";
	}
/*blue转向主界面*/
function leftbttl(){
	var obj=document.getElementById("btzj");
	obj.style.display="block";
	var arr=document.getElementById("lefth");
	arr.style.display="none";
	}






	
	