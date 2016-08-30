// JavaScript Document

/*南方军区*/
function nanfang(num){
	for(var i=1;i<=3;i++){
		if(i==num){
			var obj=document.getElementById("nanfangs"+i);
			obj.style.display="block";
			}
			else{
				var obj=document.getElementById("nanfangs"+i);
			obj.style.display="none";
				}
		}
	}
	
	
/*签约高校*/
function qianyue(num){
	for(var i=1;i<=6;i++){
		if(i==num){
			var obj=document.getElementById("qianyues"+i);
			obj.style.display="block";
			}
			else{
				var obj=document.getElementById("qianyues"+i);
			obj.style.display="none";
				}
		}
	}
	
	
	
function lis(num){
	for(var i=1;i<=4;i++){
		if(i==num){
			var obj=document.getElementById("lia"+i);
			obj.style.display="block";
			}
			else{
				var obj=document.getElementById("lia"+i);
			obj.style.display="none";
				}
		}
	
	
	}