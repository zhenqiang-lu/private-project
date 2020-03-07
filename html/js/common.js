//普通的SELECT
function SetSelected(id,value)
{	
	for(var i=0; i<document.getElementById(id).options.length; i++)
	{
		if(document.getElementById(id).options[i].value == value)
		{
			document.getElementById(id).options[i].selected = true;
			break;
		}
	}
}

function GetSelectedValue(id)
{
	for(var i=0; i<document.getElementById(id).options.length; i++)
	{
		if(document.getElementById(id).options[i].selected==true)
		{
			return {obj:document.getElementById(id).options[i],value:document.getElementById(id).options[i].value};
		}
	}
}
//事件实现函数
function BindEvent(id,mothod,fun,param)
{
	if (mothod == "onclick")
	{
		document.getElementById(id).onclick = function(){fun(param)};
	}
	else if (mothod == "onmousedown")
	{
		document.getElementById(id).onmousedown = function(){fun(param)};
	}
	else if (mothod == "onchange")
	{
		document.getElementById(id).onchange = function(){fun(param)};
	}
	else if (mothod == "onmouseup")
	{
		document.getElementById(id).onmouseup = function(){fun(param)};
	}
	else if (mothod == "onmouseenter")
	{
		document.getElementById(id).onmouseenter = function(){fun(param)};
	}
	else if (mothod == "onmouseleave")
	{
		document.getElementById(id).onmouseleave = function(){fun(param)};
	}
	else if (mothod == "onmousemove")
	{
		document.getElementById(id).onmousemove = function(){fun(param)};
	}
	else if (mothod == "onmouseout")
	{
		document.getElementById(id).onmousemove = function(){fun(param)};
	}
	else
	{
		alert(mothod+"no this mothod!");
		return;
	}
}

function BindObjEvent(obj,mothod,fun,param)
{
	//console.log(mothod);
	if(mothod == "onclick")
	{
		obj.onclick = function(){fun(param)};
	}
	else if(mothod == "onmousedown")
	{
		obj.onmousedown = function(){fun(param)};
	}
	else if(mothod == "onchange")
	{
		obj.onchange = function(){fun(param)};
	}
	else if(mothod == "onmouseup")
	{
		obj.onmouseup = function(){fun(param)};
	}
	else if(mothod == "onmouseover")
	{
		obj.onmouseover = function(){fun(param)};
	}
	else if(mothod == "onmouseout")
	{
		obj.onmouseout = function(){fun(param)};
	}
	else
	{
		alert(mothod+"no this mothod!");
	}
}

function BindFun(param,fun)
{
	fun(param);
}

function MoreBindEvent(id,mothod,fun,param)
{
	if(mothod == "onclick"){
		document.getElementById(id).onclick = function(){BindFun(param,fun)};
	}else if(mothod == "onmousedown"){
	//	console.log(id+"  start");
	//	alert(document.getElementById(id));
		document.getElementById(id).onmousedown = function(){BindFun(param,fun)};
		//console.log(id+"  end");
	}else if(mothod == "onchange"){
	//	console.log(id+"  start");
	//	alert(document.getElementById(id));
		document.getElementById(id).onchange = function(){BindFun(param,fun)};
		//console.log(id+"  end");
	}else{
		alert(mothod+"no this mothod!");
	}
}

function registerEventByObj(obj,event,handler)
{
	var plugin = obj;
	if (plugin) {
		if (plugin.attachEvent) {
			plugin.attachEvent (event, handler);
		} else if (plugin.addEventListener) {
			plugin.addEventListener (event, handler, true);
		} else {
			plugin["on" + event] = handler;
		}
	}
}

//判断IE版本
function IEVersion()
{
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
	var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
	var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
	if(isIE)
	{
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if(fIEVersion <= 8)
		{
			return 8;
		}
		else if(fIEVersion > 8)
		{
			return 9;
		}
	}
	else if(isEdge)
	{
		return 'edge';//edge
	}
	else if(isIE11)
	{
		return 11; //IE11  
	}
	else
	{
		return -1;//不是ie浏览器
	}
}

function registerEventById(id,event,handler)
{
	var plugin = document.getElementById(id);
	if (plugin)
	{
		if (plugin.addEventListener)
		{
			plugin.addEventListener (event, handler, true);
		}
		else if (plugin.attachEvent)
		{
			plugin.attachEvent (event, handler, true);
		}
		
		else
		{
			plugin["on" + event] = handler;
		}
	}
}





//自己手写实现的select
function GetSelectionOption(id)//获取SELECT NUM 
{
	
	var optionid = id+"_option";
	var obj = document.getElementsByName(optionid);
	var objlength = InitfSelectNum(obj, optionid)
	for(var i = 0;i< objlength.length;i++){
		if(objlength[i].innerHTML == 	document.getElementById(id).innerHTML){
			return i;
		}
	}
	return 0;
}


function GetSelectOptNum(id)
{
	return GetOptionByVlaue(id, document.getElementById(id).innerHTML);
}
function GetSelectionVal(id)
{
	return document.getElementById(id).innerHTML;
} 

function SetSelectionVal(id,value)//设置SLELCT内容通过选项内容
{
	document.getElementById(id).innerHTML = value;
	
}

function SetSelectionOptID(id,value)//设置SLELCT通过选项�?必须为整�?
{
	value = Number(value);
	document.getElementById(id).innerHTML = GetVlaueByOption(id,value);
}

function GetVlaueByOption(id,value)//获取SLELCT OPTION的文字内�? 通过选项�?必须为整�?
{
	value = Number(value);
	var optionid = id+"_option";
	//console.log(optionid);
	//console.log(value);
	var obj = document.getElementsByName(optionid);
	var objlength = InitfSelectNum(obj, optionid);
	return objlength   [value].innerHTML;
}

function GetOptionByVlaue(id,value)//获取SLELCT optionID 根据option内容
{
	var optionid = id+"_option";
	var obj = document.getElementsByName(optionid);
//	alert(obj.length);
	for(var i = 0;i< obj.length;i++){
	//	console.log(obj[i].innerHTML+"   "+value);
		if(obj[i].innerHTML == 	value){
			return i;
		}
	}
	return 0;
}

var timeEnable; 
function SelectOptionSelectedEvent(paramArray)
{
//	console.log(paramArray[0]);
//	console.log(paramArray[1]);
//	console.log(paramArray[2]);
	//timeEnable = true;
	var option = paramArray[1];
	
	var obj = document.getElementsByName(paramArray[1]);
	var objlength = InitfSelectNum(obj, option)
	for(var i = 0;i< objlength.length;i++){
		objlength[i].style.display = "none";
	}
	//setTimeout("timeEnable = false;",100);
	//console.log(paramArray[2]);
	//document.getElementById(paramArray[0]).innerHTML = paramArray[2];
	paramArray[5] = document.getElementById(paramArray[0]).innerHTML;
	//paramArray[6] = document.getElementsByName(paramArray[1])[paramArray[3]].innerHTML;
	paramArray[6] = objlength[paramArray[3]].innerHTML;
	
	//document.getElementById(paramArray[0]).innerHTML = document.getElementsByName(paramArray[1])[paramArray[3]].innerHTML;
	document.getElementById(paramArray[0]).innerHTML = objlength[paramArray[3]].innerHTML;
	
	if(paramArray[4] != null && undefined != paramArray[4]){
		
		paramArray[4](paramArray);
	}
	
}

function SelectOnclick(id)
{
	//console.log("SelectOnclick id = "+id);
	var optionid = id+"_option";
	//console.log("SelectOnclick optionid = "+optionid);
	var obj = document.getElementsByName(optionid);
	//console.log("optionid length = "+ obj.length);
	//if(timeEnable == true){
	//	return ;
	//}
	var objlength = InitfSelectNum(obj, optionid);
	for(var i = 0;i< objlength.length;i++){
		objlength[i].style.display = "block";
	}
	for(var k = 0;k< selectArray.length;k++){
		//console.log(selectArray[k].id);
		if(selectArray[k].id == id){
			selectArray[k].enable = true;
		}
	}
	
	//console.log("end");
	
}
function BindSelectedChangeEvent(id,fun,param)
{
	
	var optionid = id+"_option";
	var obj = document.getElementsByName(optionid);
	for(var i = 0;i< obj.length;i++){
		var  paramArray = new Array();
		paramArray[0] = param;
		paramArray[1] = optionid;
		paramArray[2] = obj[i].innerHTML;
		paramArray[3] = i;
		paramArray[4] = id;
	
		BindObjEvent(obj[i],"onmouseup",fun,paramArray);
		//registerEventByObj(obj[i],"mouseup",fun);
	}
}
var selectArray;
function InitUdfSelect(id,param)
{
	var optionid = id+"_option";
	//alert(selectArray.length);
	var index = selectArray.length;
	selectArray[index]  = {
		id:id,
		enable:false
	};

	var obj = document.getElementsByName(optionid);
	var objlength = InitfSelectNum(obj, optionid);
	for(var i = 0;i< objlength.length;i++){
		var  paramArray = new Array();
		paramArray[0] = id;
		paramArray[1] = optionid;
		paramArray[2] = objlength[i].innerHTML;
		paramArray[3] = i;
		paramArray[4] = param;
		paramArray[5] = selectArray[index];
		BindObjEvent(objlength[i],"onmousedown",SelectOptionSelectedEvent,paramArray);
	}
	//BindEvent(id,"onmousedown",SelectOnclick,id);
	//BindEvent(id,"onclick",SelectOnclick,id);
	BindEvent(id,"onmouseup",SelectOnclick,id);
	BindEvent(id+"_selectico","onmousedown",SelectOnclick,id);
}

function InitfSelectNum(obj, optionid)
{
	if (obj > 0)
	{
		return i;
	}
	else
	{
		var objEle = document.getElementsByTagName('*');
		var objArrary = [];
		for (var i = 0; i < objEle.length; i++)
		{
			if (objEle[i].getAttribute("name") == optionid)
			{
				objArrary.push(objEle[i]);
			}
		}
		//console.log("objArrary=" + objArrary);
		return objArrary;
	}
}

$(function()
{
	selectArray = new Array();
	timeEnable = false;
	document.body.onclick = function(e)
	{
		//alert(e.target);
		e = window.event;
		//console.log("event.srcElement = " + e.srcElement.id);
		for(var k = 0; k < selectArray.length; k++)
		{
			//console.log(selectArray[k].id);
			if(e.srcElement.id == selectArray[k].id || e.srcElement.id == (selectArray[k].id + "_selectico"))
			{
				continue; 
			}
		//targer不支持IE8
		// console.log("e.target = "+e.target.id);
		// for(var k = 0;k< selectArray.length;k++){
			// console.log(selectArray[k].id);
			// if(e.target.id == selectArray[k].id || e.target.id == (selectArray[k].id+"_selectico")){
				// continue; 
			// }
			var optionid = selectArray[k].id+"_option";
			var obj = document.getElementsByName(optionid);
			for(var i = 0;i< obj.length;i++){
				obj[i].style.display = "none";
			}
		}
	}
	if (!Array.prototype.indexOf)
	{
		Array.prototype.indexOf = function(elt /*, from*/)
		{
			var len = this.length >>> 0;
			var from = Number(arguments[1]) || 0;
			from = (from < 0)
				 ? Math.ceil(from)
				 : Math.floor(from);
			if (from < 0)
				from += len;
			for(; from < len; from++)
			{
				if (from in this && this[from] === elt)
				return from;
			}
			return -1;
		};
	}
});


//手写checkbox
function CheckBoxChanged(param)
{
	var id = param[0];
	var vobj = document.getElementById(id+"_value");
	if(vobj.innerHTML == "true"){
		$("#"+id).removeClass("DivCheckBoxChecked");
		vobj.innerHTML = "false";
	}else{
		$("#"+id).addClass("DivCheckBoxChecked");
		vobj.innerHTML = "true";
	}
	if(param[1] != null && param[1] != undefined){
		param[1](id);
	}
}

function SetCheckBox(id,value)
{
	var vobj = document.getElementById(id+"_value");
	if(value == "false"){
		$("#"+id).removeClass("DivCheckBoxChecked");
		vobj.innerHTML = "false";
	}else{
		$("#"+id).addClass("DivCheckBoxChecked");
		vobj.innerHTML = "true";
	}
}

function InitCheckBox(id,value,cb)
{
	var addstr = '<div style="display:none;"  id="'+id+'_value">'+value+'</div>';
	$("#"+id).append(addstr);
	if(value == "true"){
		$("#"+id).addClass("DivCheckBoxChecked");
	}
	var param = new Array();
	param[0] = id;
	param[1] = cb;
	BindEvent(id,"onmousedown",CheckBoxChanged,param);
}

function GetCheckBoxValue(id)
{
	return document.getElementById(id+"_value").innerHTML;
}




//自定义RADIO标签
function RaioChanged(param)
{
	var id = param[0];
	var name = param[1];
	
	
	var obj = document.getElementsByName(param[1]);
	for(var i = 0;i< obj.length;i++){
		SetRaio(obj[i].id,"false");
	}
	
	
	var vobj = document.getElementById(id+"_value");
	if(vobj.innerHTML == "true"){
		vobj.innerHTML = "false";
	}else{
		vobj.innerHTML = "true";
	}
	SetRaio(id,vobj.innerHTML);
	if(param[2] != null && param[2] != undefined){
		param[2]();
	}
}

function SetRaioChanged(id,name)
{
	//var id = param[0];
	//var name = param[1];
	
	
	var obj = document.getElementsByName(name);
	for(var i = 0;i< obj.length;i++){
		SetRaio(obj[i].id,"false");
	}
	
	
	var vobj = document.getElementById(id+"_value");
	if(vobj.innerHTML == "true"){
		vobj.innerHTML = "false";
	}else{
		vobj.innerHTML = "true";
	}
	SetRaio(id,vobj.innerHTML);
}

function SetRaio(id,value)
{
	var vobj = document.getElementById(id+"_value");
	if(value == "false"){
		$("#"+id).removeClass("DivRadioChecked");
		vobj.innerHTML = "false";
	}else{
		$("#"+id).addClass("DivRadioChecked");
		vobj.innerHTML = "true";
	}
}

function InitRaio(id,name,value,callback)
{
	if(value == "fasle"){
		value = "true";
	}else{
		value = "false";
	}
	//alert(id);
	var obj = document.getElementById(id);
	var addstr = '<div style="display:none;"  id="'+id+'_value">'+value+'</div>';
	$("#"+id).append(addstr);
	var param = new Array(); 
	param[0] = id;
	param[1] = name;
	RaioChanged(param);
	param[2] = callback;
	BindEvent(id,"onmousedown",RaioChanged,param);
}

function GetRaioValue(name)
{
	var obj = document.getElementsByName(name);
	for(var i = 0;i< obj.length;i++){
		var vobj = document.getElementById(obj[i].id+"_value");
		if(vobj.innerHTML == "true"){
			var lable = document.getElementById(obj[i].id+"_lable");
			return lable.innerHTML;
		}
	}
}

function GetRaioIndex(name)//获取该Name选中值的index序号
{
	var obj = document.getElementsByName(name);
	for(var i = 0;i< obj.length;i++){
		var vobj = document.getElementById(obj[i].id+"_value");
		if(vobj.innerHTML == "true"){
			return i;
		}
	}
}

function GetRaioID(name)//获取该RADIO标签选中的ID
{
	var obj = document.getElementsByName(name);
	for(var i = 0;i< obj.length;i++){
		var vobj = document.getElementById(obj[i].id+"_value");
		if(vobj.innerHTML == "true"){
			return obj[i].id;
		}
	}
}

//获取IP
/*function GetIp()
{
	var url = document.location.href;
	var ipAddr;
	url.replace(/[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/,function(value){ipAddr = value;});
	if(null == ipAddr){
		//alert("Not Found IP");
		return  "192.168.6.30";
		return null;
	}
	//alert(ipAddr);
	return ipAddr;
												
}*/

function GetIp() 
{
	//return "192.168.6.69";	
	var url = document.URL; 
	//var url = "http://192.168.1.119:80/123";
	//var url = "http://www.baidu.com.aad/123";
	//var url = "http://192.168.1.119";
	//var url = "https://192.168.1.119/index.html";
	var index;
	var ip;
	var end;
	index = url.indexOf(".");
	if(index  < 0){
		//return NULL;
		return "192.168.0.146";
	}
	end = url.indexOf(":",index);
	if(end < 0){
		 end = url.lastIndexOf('/');
	}
	if(end < 7){
		end = url.length;
	}
	//alert("end = " + end);
	//alert("end = " + (end - 7));
	//alert(url);
	index = url.indexOf("://");
	
	ip = url.substring(index+3,end);
	//alert(ip);
	return ip;
}

//特殊转换
function TranslationStrAndBool(value)
{
	if("0" == value || 0 == value){
		return 'false';
	}
	if("1" == value || 1 == value){
		return 'true';
	}
}

function CheckboxToInt(value)
{
	if(value == "true"){
		return "1";
	}else{
		return "0";
	}
}

function TranslationStrEnable(value)
{
	if("0" == value || 0 == value){
		return 'Disable';
	}
	if("1" == value || 1 == value){
		return 'Enable';
	}
}




//拖动条控�?
var SliderBar = function(id,min,max,value,callBackfun){  
		this.id = id;
		this.value = value;
		var val;
        var drageState = false;  
		var g_Line = document.getElementById(id);
		var g_Bar_id = id+"Bar";
		var g_Bar = document.getElementById(g_Bar_id);
		var g_father = g_Line.parentElement.parentElement;
		registerDragEvent();
		ChangePosByValue(value);

		
		function EventCall_Dragstart(ev)
		{
			//console.log( "dragStart");
			drageState = true;
		}

		function EventCall_Dragend(ev)
		{
			//console.log( "dragEnd");
			drageState = false;
		}
		
		function EventCall_Drag(ev)
		{
			if(drageState == false) return;
			var x = ev.pageX; 
			var y = ev.pageY;
			var movepx= ev.pageX - g_Line.offsetLeft;
		 
			var maxwidth = $("#"+id).width() - 0;
			if(movepx > maxwidth || movepx < 0){
				//console.log("not alow move");
				return;
			}
			g_Bar.style.marginLeft = movepx + "px";
			var perValue = (movepx/maxwidth)*100;
			g_Bar.title = (perValue - parseInt(perValue) > 0.5)? parseInt(perValue)+1:parseInt(perValue);
			//console.log("g_Bar.title = "+g_Bar.title);
			val = g_Bar.title = this.value = g_Bar.title *(max - min) / 100;
			if(g_Bar.title > 100){
				g_Bar.title = this.value = 100;
				
			}
			if(g_Bar.title < 0){
				g_Bar.title = this.value = 0;
				
			}
			if(callBackfun != null)
			callBackfun(id,this.value);
		}
		
		
		function Event_MouseOutSlibarArea(ev)
		{
			var MaxX = g_father.offsetLeft + $("#"+this.id).width();
			var MinX = g_father.offsetLeft;
			var MaxY = g_father.offsetTop  + $("#"+this.id).height();
			var MinY = g_father.offsetTop;
		    if(	ev.pageX > MaxX ||ev.pageX < MinX || ev.pageY > MaxY ||ev.pageY < MinY)
			{
				//console.log("your slierbar must stop");
				drageState = false;
			}
		}
		
		function registerDragEvent()
		{
			BindEvent(id + "Bar",'onmousedown', EventCall_Dragstart);
			BindEvent(id + "Bar",'onmouseup',   EventCall_Dragend);
			
			var objs = document.getElementById(id);
			BindObjEvent(objs.parentElement.parentElement,'onmouseup', EventCall_Dragend);
			var objsID = objs.parentElement.parentElement.id;
			$("#" + objsID).mousemove(function(ev){
				if(drageState == false) return;
				var x = ev.pageX; 
				var y = ev.pageY;
				var movepx= ev.pageX - g_Line.offsetLeft;
			 
				var maxwidth = $("#" + id).width() - 10;
				if (movepx > maxwidth || movepx < 0)
				{
					return;
				}
				g_Bar.style.marginLeft = movepx + "px";
				var perValue = (movepx/maxwidth)*100;
				g_Bar.title = (perValue - parseInt(perValue) > 0.5)? parseInt(perValue)+1:parseInt(perValue);
				val = g_Bar.title = this.value = g_Bar.title *(max - min) / 100;
				if (g_Bar.title > 100)
				{
					g_Bar.title = this.value = 100;
					
				}
				if (g_Bar.title < 0)
				{
					g_Bar.title = this.value = 0;
					
				}
				if(callBackfun != null)
				callBackfun(id,this.value);
			})
			$("#" + objsID).mouseout(function(ev)
			{
				var MaxX = g_father.offsetLeft + $("#"+this.id).width();
				var MinX = g_father.offsetLeft;
				var MaxY = g_father.offsetTop  + $("#"+this.id).height();
				var MinY = g_father.offsetTop;
				if(	ev.pageX > MaxX ||ev.pageX < MinX || ev.pageY > MaxY ||ev.pageY < MinY)
				{
					drageState = false;
				}
			})
			
		}
		
		function ChangePosByValue(param)
		{
			//console.log(param);
			if(param > max) param = max;
			if(param < min) param = min;
			//console.log(param);
			var movx =  parseInt(param /(max - min)*$("#"+id).width());
			val = this.value =  g_Bar.title = param;
			 
			//console.log("param =" + param);
			//console.log("val =" + val);
			g_Bar.style.marginLeft = movx + "px";
			//if(callBackfun != null)
			//	callBackfun(id,this.value);
			return;
		}		

		this.SetValue = function(param){
			//console.log(param);
			ChangePosByValue(Number(param));
			//console.log(this.value);
			if(callBackfun != null)
				callBackfun(id,val);
		}
		
		this.SetValueFobidenCb = function(param){
			//console.log(param);
			ChangePosByValue(Number(param));
			//console.log("this =" + this.value);
		}
		
		this.GetValue = function(){
			//console.log(this.value);
			//console.log(val);
			return val;
		}
		

} 


//时间波形组件
var SequentiaWaveform = function(id,GetMaskCb){
	var mask;
	CreateBox();
	InitMask();
	InitMotionDisplayBox();
	function CreateBox()
	{
		 str = '<div id="id_scaleV" style="width:28px;height:160px;float:left;"></div><div id="id_content" style="width:240px;height:152px;float:left;border-bottom:1px solid #1e3b56;"></div>';
		 $("#"+id).append(str);
	}
	function Line(startX, startY, endX, endY, container) 
	{  
		//console.log("startX ="+startX+ ";startY ="+startY+";endX ="+endX+";endY ="+endY);
        if (startX == endX) {  
            if (startY > endY) {  
                var tempY = startY;  
                startY = endY;  
                endY = tempY;  
            }  
            for (var k = startY; k < endY; k++) {  
                createPoint(container, startX, k);  
            }  
        }  
        // y = ax + b  
        var a = (startY - endY) / (startX - endX);  
        var b = startY - ((startY - endY) / (startX - endX)) * startX;  
        if (Math.abs(startX - endX) > Math.abs(startY - endY)) {  
            if (startX > endX) {  
                var tempX = endX;  
                endX = startX;  
                startX = tempX;  
            }  
            var left = container.style.left;  
            var top = container.style.top;  
            for (var i = startX; i <= endX; i++) {  
                createPoint(container, i, a * i + b);  
            }  
        } else {  
            if (startY > endY) {  
                var tempY = startY;  
                startY = endY;  
                endY = tempY;  
            }  
            for (var j = startY; j <= endY; j++) {  
                createPoint(container, (j - b) / a, j);  
            }  
        }  
	
	}  
      
	function createPoint(container, x, y) 
	{  
			var node = document.createElement('div');  
			node.className = 'line'; 
			node.style.marginTop = y + 'px';  
			node.style.marginLeft = x + 'px';  	
			container.appendChild(node);  
	}  

	function ClearLine(containId) 
	{  
			var childList; 
			while(1){
				childList= document.getElementById(containId).childNodes;
				if(childList.length == 0){
					return;
				}
				for(var i =0;i < childList.length;i++){
					document.getElementById(containId).removeChild(childList[i]);
				}
			}
	}

	function InitMotionDisplayBox()
	{
		var str;
		for(var i = 0; i < 10;i++){
			str = '<div class="DivLableScale" >'+(100 - i*10) + '</div><div class="scaleBig" ';
			if(i == 0)  str +='style="border-right:0px;"';
			str += '></div>';
			str += '<div  class="scaleSmall"></div>';
			str += '<div  class="scaleSmall"></div>';
			str += '<div  class="scaleSmall"></div>';
			str += '<div  class="scaleSmall"></div>';
			str += '<div  class="scaleSmall"></div>';
			$("#id_scaleV").append(str);
		 }
		 str = '<div class="DivLableScale" >'+ 0 + '</div><div class="scaleBig"></div>';
		 $("#id_scaleV").append(str);
	}
	
	this.UpdateBox = function (){
		ClearLine('id_content');
		var obj = document.getElementById('id_content');
		//var left  = obj.getBoundingClientRect().left;
		//var top = obj.getBoundingClientRect().top;
		var starthight = $("#id_content").height();
		UpdateMask(GetMaskCb()* 0.748);
		//console.log($("#id_content").height());
		//console.log(top);
		//console.log(starthight);
		for(var i = 0; i < 120;i++){
			Line(i*2,starthight - mask[i]*2,(i+1)*2,starthight - mask[i+1]*2,obj);
		}
	}
	function UpdateMask(value)
	{
		for(var i = 0; i < 120; i++){
			mask[i] = mask[i+1] ; 
		}
			mask[119] = value;
	}
	function InitMask()
	{
		mask = new Array();
		for(var i = 0; i < 120; i++){
			mask[i] =  0; 
		}	
	}	
}


/*SlectInput*/
var SelectInput = function(id,value,max,min,ChanggeFun){
	var upid = id + "_selecticoup";
	var downid = id +"_selecticodown";
	var inputObj;
	Init();
	

	function ChangeCb()
	{
		if(ChanggeFun != null){
			ChanggeFun(id,value);
		}
	}
	
	function SetValue()
	{
		var temp=parseInt(value);
		value=temp;
		if(value > max ){value = max;} 
		if(value < min) {value = min;}
		if(value < 10){
			inputObj.value = "0"+value;
		}else{
			inputObj.value = value;
		}
	}
	
	function OnchangeEvent()
	{
		var str = inputObj.value;
		var r = /^\+?[0-9][0-9]*$/;　　//正整�?
		r.test(str);
		if(r.test(str) == false){
			//alert("Please Input Number");
			value = min;
		}else{
			value = inputObj.value;
		}
		SetValue();
		if(ChanggeFun != null){
			ChanggeFun(id,value);
		}
	}
	function SetValue()
	{
		var temp = parseInt(value);
		value = temp;
		if (value > max) {value = max;} 
		if (value < min) {value = min;}
		
		if(id.indexOf('Input') != -1)
		{
			inputObj.value = value;
		}
		else
		{			
			if(value < 10)
			{
				inputObj.value = "0" + value;
			}
			else
			{
				inputObj.value = value;
			}
		}
	}
	
	function CreateIco()
	{
		
		var width = $("#"+id).width();
		var height = $("#"+id).height();
		var inputstyle='style="width:'+width+'px;height:'+height+'px;float:left;text-align:center;"';
		var appendstr ='<input class="DivInput"  '+inputstyle+'id='+id+'_input ></input>';
		appendstr += '<div style="float:left">';
		appendstr += '<div style="clear:both"></div>';
		$("#"+id).append(appendstr);
	}
	var lastValue;
	function Init()
	{
		CreateIco();
		inputObj = document.getElementById(id).firstChild;
		
		inputObj.onchange = function(){
			OnchangeEvent();
		}
		$("#"+id).on("mousewheel DOMMouseScroll", function (e) {
			var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
						(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
			if (delta > 0) {
				value++;
			} else if (delta < 0) {
				value--;
			}
			SetValue();
		});  		
		
		SetValue();
	}
	this.GetValue = function (){
		//return value;
		return inputObj.value;
	}
	
	this.SetValue = function(val){
		value = parseInt(val);
		//console.log(val);
		SetValue();
	}
	
}

var iEnable = new Array();
var iStartTime = new Array();
var iEndTime = new Array();
var StartDay;

function InitPlanTime()
{
	for(var i = 0; i < 7; i++)
	{
		iEnable[i] = new Array();
		iStartTime[i] = new Array();
		iEndTime[i] = new Array();				
		for(var j = 0; j < 4; j++)
		{					
			iStartTime[i][j] = new Array();
			iEndTime[i][j] = new Array();					
			iEnable[i][j] = new Array();
			iEnable[i][j] = 0;	
			
			for(var n = 0; n < 3; n++)
			{
				iStartTime[i][j][n] = new Array();
				iEndTime[i][j][n] = new Array();	
				
				iStartTime[i][j][n] = 0;
				iEndTime[i][j][n] = 0;
			}
		}
	}
}

var url = window.location.href;
function FixedTopVlue (url, top)
{
	if (url.indexOf('MotionPage') != -1)
	{
		if (top != 151)
		{
			return 151;
		}
	}
			
	else if ((url.indexOf('VideoBlindPage') != -1) || (url.indexOf('AlarmPage') != -1) || (url.indexOf('SnapPage') != -1))
	{
		if (top != 109)
		{
			return 109;
		}
	}
	
	
	else if (url.indexOf('RemoteRecord') != -1)
	{
		if (top != 69)
		{
			return 69;
		}
	}
}

var TimeTable = function(id)
{
	CreateTimeLine();
	CreateBox();
	InitMotionDisplayBox();
	CreateDivTable();
	CreateBlock();
	CreateTimeDiv();
	var Drage = false;
	var StartX, StartY;
	var EndX, EndY;
	var StartTimeX, StartTimeY;
	var paraEnable,StartTime,EndTime;
		
	function EventCall_DragstartDown(ev)
	{
		StartX = (ev.pageX).toFixed(0);
		StartY = (ev.pageY).toFixed(0);
		
		// 开始时间度坐标记录
		StartTimeX = (ev.pageX).toFixed(0); 
		StartTimeY = (ev.pageY).toFixed(0);
		if(Drage == false)
		{
			document.getElementById('id_block').style.display = "block";
			document.getElementById('id_block').style.width = 0 + "px";
			document.getElementById('id_block').style.height = 0 + "px";
			var top = document.getElementById('id_TimeTableSmallBox').getBoundingClientRect().top;
			var left = document.getElementById('id_TimeTableSmallBox').getBoundingClientRect().left;
			document.getElementById('id_block').style.marginTop = StartY - top + "px";
			document.getElementById('id_block').style.marginLeft = StartX - left + "px";
			Drage = true;			
		}
		else
		{
			return;
		}
		//console.log("Down StartX:" + StartTimeX + ", StartY" + StartTimeY);
	}
	
	function ClearOtherTime(i, j, NewStartTime, NewEndTime)
	{
		var OldStartTime1;
		var OldEndTime1;
		
		for(var k = 3; k > 0; k--)
		{
			OldStartTime1 = parseInt(iStartTime[i][k][0] * 60) + parseInt(iStartTime[i][k][1]);// 从某一个时间段开始判断				
			OldEndTime1 = parseInt(iEndTime[i][k][0] * 60) + parseInt(iEndTime[i][k][1])
			if ((OldStartTime1 != 0) && ((NewEndTime >= OldStartTime1) || (NewEndTime >= OldEndTime1))) 
			{
				for(var n = j + 1; n <= k; n++)
				{
					iStartTime[i][n] = [0, 0, 0];  // 合并后的时间段清0
					iEndTime[i][n] = [0, 0, 0]; // 重新设置结束时间					
					iEnable[i][n] = 0;
				}
//				console.log("ClearOtherTime k=" + k);										
				break;
			}
		}
		
		return;
	}
	
	function SetTimesLength(i, j, StartTimeHour, StartTimeMin, EndTimeHour, EndTimeMin, NewStartTime, 
		OldStartTime, OldEndTime, NewStartTime, NewEndTime)
	{
		var OldStartTime1;
		var OldEndTime1;
		
		for (var m = 1; m <= 3; m++)
		{			
			OldStartTime1 = parseInt(iStartTime[i][m][0] * 60) + parseInt(iStartTime[i][m][1]);// 从某一个时间段开始判断				
			OldEndTime1 = parseInt(iEndTime[i][m][0] * 60) + parseInt(iEndTime[i][m][1]);
			// console.log("1.1Set Time i=" + i + ", j=" + j + ", m=" + m + ", OldStartTime1=" + 
     		// OldStartTime1 + ", OldEndTime1=" + OldEndTime1 + ", OldStartTime=" + 
			// OldStartTime + ", OldEndTime=" + OldEndTime + ", NewStartTime=" + 
			// NewStartTime + ", NewEndTime=" + NewEndTime);
			if ((NewEndTime >= OldStartTime1) && (NewEndTime <= OldEndTime1)) // 从本时间段往后设置一部分,但已连到下一个时间段
			{
				if (iEnable[i][j] == 1) // 已经有布防时间，再次画时间就清空
				{
					if (NewStartTime <= OldStartTime)
					{
						iStartTime[i][j] = [StartTimeHour, StartTimeMin, 0];
						//console.log("2.Set Front Time i=" + i + ", StartTimeHour=" + StartTimeHour + ", StartTimeMin=" + StartTimeMin);
					}
					
					if (iEnable[i][m] == 1)
						iEndTime[i][j] = iEndTime[i][m]; // 重新设置结束时间
					else
						iEndTime[i][j] = [EndTimeHour, EndTimeMin, 59]; // 重新设置结束时间
					//console.log("iEndTime[i][j]=" + iEndTime[i][j]);
					for(var n = j + 1; n <= m; n++)
					{
						iStartTime[i][n] = [0, 0, 0]; // 合并后的时间段清0
						iEndTime[i][n] = [0, 0, 0]; // 重新设置结束时间				
						iEnable[i][n] = 0;
						//console.log("2.Set back Time i=" + i + ", n=" + n + ", NewStartTime=" + NewStartTime + ", NewEndTime=" + NewEndTime);						
					}
					
					// console.log("2.Set back Time i=" + i + ", j=" + j + ", n=" + n + ", m=" + m + ", StartTimeHour=" + 
						// StartTimeHour + ", StartTimeMin=" + StartTimeMin + ", EndTimeHour=" + 
						// EndTimeHour + ", EndTimeMin=" + EndTimeMin);
					break;
				}				
			}
			else if (NewEndTime <= OldEndTime1)
			{
				if (NewStartTime <= OldStartTime) 
				{
					iStartTime[i][j] = [StartTimeHour, StartTimeMin, 0];
				}
				iEndTime[i][j] = [EndTimeHour, EndTimeMin, 59];
				ClearOtherTime(i, j, NewStartTime, NewEndTime);
				// console.log("3.Set back Time i=" + i + ", j=" + j + ", m=" + m + ", StartTimeHour=" + 
					// StartTimeHour + ", StartTimeMin=" + StartTimeMin + ", EndTimeHour=" + 
					// EndTimeHour + ", EndTimeMin=" + EndTimeMin);
				break;
			}
			else if ((NewEndTime >= OldEndTime1))
			{
				var k;
				if (m >= 3)
					k = 3;
				else
					k = m + 1;
				if ((iEnable[i][k] != 1) || ( 3 == m))// 如果下一个时间段有画，先不处理，应该放在下一个循环处理
				{					
					if (NewStartTime <= OldStartTime) 
					{
						iStartTime[i][j] = [StartTimeHour, StartTimeMin, 0];				
					}
					iEndTime[i][j] = [EndTimeHour, EndTimeMin, 59];				
					ClearOtherTime(i, j, NewStartTime, NewEndTime);
					
					// console.log("4.Set back Time i=" + i + ", j=" + j + ", m=" + m + ", StartTimeHour=" + 
						// StartTimeHour + ", StartTimeMin=" + StartTimeMin + ", EndTimeHour=" + 
						// EndTimeHour + ", EndTimeMin=" + EndTimeMin);
					break;
				}				
			}
			else if ((NewEndTime >= OldEndTime1) && (3 == m))
			{
				if (NewStartTime <= OldStartTime) 
				{
					iStartTime[i][j] = [StartTimeHour, StartTimeMin, 0];				
				}
				iEndTime[i][j] = [EndTimeHour, EndTimeMin, 59];				
				ClearOtherTime(i, j, NewStartTime, NewEndTime);				
				
				// console.log("5.Set back Time i=" + i + ", j=" + j + ", m=" + m + ", StartTimeHour=" + 
					// StartTimeHour + ", StartTimeMin=" + StartTimeMin + ", EndTimeHour=" + 
					// EndTimeHour + ", EndTimeMin=" + EndTimeMin);
				break;
			}
		}
	}
	
	function SetTimeEnable()
	{
	    var StartTimeHour;
	    var StartTimeMin;
	    
	    var EndTimeHour;
	    var EndTimeMin;
	
		var OldStartTime = 0, OldEndTime = 0;
		
		for(var i = 0; i < 7; i++)
		{
			for(var j = 0; j < 4; j++)
			{
				OldStartTime = parseInt(iStartTime[i][j][0] * 60) + parseInt(iStartTime[i][j][1]) + parseInt(iStartTime[i][j][2]);//上一次画的开始时间					
				OldEndTime = parseInt(iEndTime[i][j][0] * 60) + parseInt(iEndTime[i][j][1]) + parseInt(iEndTime[i][j][2]);      //上一次画的结束时间
				
				if ((OldStartTime >　0) || (OldEndTime > 0))
				{
					iEnable[i][j] = 1;
				}
				else
				{
					iEnable[i][j] = 0;				
				}
	
				StartTimeHour = iStartTime[i][j][0];
				StartTimeMin = iStartTime[i][j][1];
				EndTimeHour = iEndTime[i][j][0];
				EndTimeMin = iEndTime[i][j][1];
				
//				console.log("PrintTime i=" + i + ", j=" + j + ", StartTimeHour=" + StartTimeHour + 
//				", StartTimeMin=" + StartTimeMin + ", EndTimeHour=" + EndTimeHour + 
//				", EndTimeMin=" + EndTimeMin + " iEnable=" + iEnable[i][j]);
			}
		}
	}
	
	function EventCall_DragendUp(ev)
	{
		if (Drage == true)
		{
			var StartPointX = (document.getElementById("id_TimeTableSmallBox").getBoundingClientRect().left).toFixed(0);
			var StartPointY;
//			console.log("StartPointY:" + StartPointY);
			EndX = (ev.pageX).toFixed(0);
			EndY = (ev.pageY).toFixed(0);
			
			StartPointY = FixedTopVlue(url, StartPointY);
			
			//console.log("Up EndX:" + EndX + ", EndY" + EndY);
    
			var StartTimeHour = parseInt((StartTimeX - StartPointX) / 20); //起始位置
			var StartTimeMin =  parseInt((StartTimeX - StartPointX) % 20 * 3.3);  //起始位置
			    
			var EndTimeHour = parseInt((EndX - StartPointX) / 20); //起始位置
			var EndTimeMin =  parseInt((EndX - StartPointX) % 20 * 3.3);  //起始位置
			   
			var StartTimeSec = 0; //起始位置
		    StartDay = parseInt((StartTimeY - StartPointY) / 30);
			var EndDay = parseInt((EndY - StartPointY) / 30);
			
			var OldStartTime = 0, OldEndTime = 0;
			var NewStartTime, NewEndTime;
			var tempStartTimeHour, tempStartTimeMin;
			var tempEndTimeHour, tempEndTimeMin;
			var MinIndex = -1, tempEnable = 0;
		  
			if (StartDay < 0)
				StartDay = 0;
				
		   if (StartDay > 6)
				StartDay = 6;
				
			if (EndDay < 0)
				EndDay = 0;
				
		   if (EndDay > 6)
				EndDay = 6;				

		   if (StartTimeHour > 23)
				StartTimeHour = 23;    
		    
		   if (StartTimeMin > 59)
		    	StartTimeMin = 59;

			NewStartTime = StartTimeHour * 60 + StartTimeMin;//当前画的开始时间
			NewEndTime = EndTimeHour * 60 + EndTimeMin;		 //当前画的结束时间
			//console.log(" NewStartTime= " + NewStartTime + ", EndTime= " + NewEndTime);
            if(NewStartTime >= NewEndTime)
            {
            	//alert("Parr Error");
				document.getElementById('id_block').style.opacity = 0;
				Drage = false;
				return;				
            }
			
			for(var i = StartDay; i <= EndDay; i++)
			{
				for(var j = 0; j < 4; j++)
				{
					OldStartTime = parseInt(iStartTime[i][j][0] * 60) + parseInt(iStartTime[i][j][1]);//上一次画的开始时间					
					OldEndTime = parseInt(iEndTime[i][j][0] * 60) + parseInt(iEndTime[i][j][1]);      //上一次画的结束时间
					
					// console.log("EventCall_DragendUp i=" + i + ", j=" + j +  ", iStartTime=" +
						// iStartTime[i][j][0] + ", iStartTime=" + iStartTime[i][j][1] + ", iEndTime=" + 
						// iEndTime[i][j][0] + ", iEndTime=" + iEndTime[i][j][1] + ", iEnable" + iEnable[i][j]);	
				
					// console.log("i=" + i + ", j=" + j +  ", NewStartTime=" +
						// NewStartTime + ", OldStartTime=" + OldStartTime + ", NewEndTime=" + 
						// NewEndTime + ", OldEndTime=" + OldEndTime + ", iEnable" + iEnable[i][j]);
					
					if ((NewStartTime < OldStartTime) && (NewEndTime > OldStartTime)) // 从前面合并时间
					{						
						if (NewEndTime <= OldEndTime) // 在同一个时间段前面合并
						{						
							iStartTime[i][j] = [StartTimeHour, StartTimeMin, 0]; // 重新设置开始时间
							// console.log("Set Front Time i=" + i + ", j=" + j + ", StartTimeHour=" + 
								// StartTimeHour + ", StartTimeMin=" + StartTimeMin + ", EndTimeHour=" +
								// EndTimeHour + ", EndTimeMin=" + EndTimeMin);
							break;
						}
						else if (NewEndTime >= OldEndTime)
						{
							//console.log("SetTimesLength1");
							SetTimesLength(i, j, StartTimeHour, StartTimeMin, EndTimeHour, EndTimeMin, NewStartTime, 
								OldStartTime, OldEndTime, NewStartTime, NewEndTime);						
							break;
						}						
					}					
					else if ((NewStartTime > OldStartTime) && (NewEndTime > OldEndTime) && (NewStartTime < OldEndTime)) // 从后面合并时间
					{
						//console.log("SetTimesLength2");
						SetTimesLength(i, j, StartTimeHour, StartTimeMin, EndTimeHour, EndTimeMin, NewStartTime,
							OldStartTime, OldEndTime, NewStartTime, NewEndTime);																								
						break;
					}
					//新的结束时间小于上一次结束时间并且新的开始时间大于上一次的开始时间
					else if ((NewEndTime < OldEndTime) && (NewStartTime > OldStartTime)) // 取消合并时间							
					{
						if (iEnable[i][j] == 1) // 已经有布防时间，再次画时间就清空
						{
							iStartTime[i][j] = [0, 0, 0];// 重新设置开始时间
							iEndTime[i][j] = [0, 0, 0]; // 重新设置结束时间
							iEnable[i][j] = 0;
						}
						else
						{
							iStartTime[i][j] = [StartTimeHour, StartTimeMin, 0];
							iEndTime[i][j] = [EndTimeHour, EndTimeMin, 59];	
							iEnable[i][j] = 1;
						}
						// console.log("SetTimesLength2 Set Time i=" + i + ", j=" + j + ", iEnable=" + iEnable[i][j]);							
						break;
					}				
					else if ((iStartTime[i][j][0] == 0) && (iStartTime[i][j][1] == 0) && (iStartTime[i][j][2] == 0))
					{
						iStartTime[i][j] = [StartTimeHour, StartTimeMin, 0];
						iEndTime[i][j] = [EndTimeHour, EndTimeMin, 59];
						iEnable[i][j] = 1;
						// console.log("New Time i=" + i + ", j=" + j + ", StartTimeHour=" + 
							// StartTimeHour + ", StartTimeMin=" + StartTimeMin + ", EndTimeHour=" + 
							// EndTimeHour + ", EndTimeMin=" + EndTimeMin);
						break;
					}
				}
			}
			
			for(var i = StartDay; i <= EndDay; i++)
			{	
				for(var j = 0; j < 4; j++)
				{	
					MinIndex = -1;
					OldStartTime = 30 * 60 + 60;
					for(var n = j; n < 4; n++)
					{						
						StartTimeHour = iStartTime[i][n][0];
						StartTimeMin = iStartTime[i][n][1];
						EndTimeHour = iEndTime[i][n][0];
						EndTimeMin = iEndTime[i][n][1];						
						if (StartTimeHour * 60 + StartTimeMin > 0)
						{							
							if (OldStartTime > StartTimeHour * 60 + StartTimeMin) // 找出最小的
							{
								MinIndex = n;
								OldStartTime = StartTimeHour * 60 + StartTimeMin;
								//console.log("1==== i=" + i + ", j=" + j + ", n=" + n + ", StartTimeHour=" + StartTimeHour);
								tempStartTimeHour = StartTimeHour;
								tempStartTimeMin = StartTimeMin;
								tempEndTimeHour = EndTimeHour;
								tempEndTimeMin = EndTimeMin;
								tempEnable = iEnable[i][n];
							}
						}				
					}				
					if (MinIndex >= 0)
					{
						iStartTime[i][MinIndex] = iStartTime[i][j];													
						iEndTime[i][MinIndex] = iEndTime[i][j];
						iEnable[i][MinIndex] = iEnable[i][j];
						//console.log("2==== Max Hour=" + iStartTime[i][j][0] + ", Min=" + iStartTime[i][j][1]);
						iStartTime[i][j] = [tempStartTimeHour, tempStartTimeMin, 0];					
						iEndTime[i][j] = [tempEndTimeHour, tempEndTimeMin, 59];					
						iEnable[i][j] = tempEnable;
						//console.log("2==== Min Hour=" + iStartTime[i][j][0] + ", Min=" + iEndTime[i][j][1] + "iEnable[i][j]=" + iEnable[i][j]);
						//console.log("2====Hour=" + iStartTime[i][MinIndex] + ", Min=" + iEndTime[i][MinIndex] + "iEnable[i][j]=" + iEnable[i][MinIndex]);			
					}
				}								
			}
	      	SetPlanTime(iEnable, iStartTime, iEndTime);	      	
		}
		//console.log("Up Drage:" + Drage + ", StartY:" + StartY);
		document.getElementById('id_block').style.opacity = 0;
	 	Drage = false;
	 	return;
	}
	
	function EventCall_DragMove(ev)
	{
		StartX = (ev.pageX).toFixed(0);
		StartY = (ev.pageY).toFixed(0);
		if (Drage == false) return;
		var top = StartTimeY; 
		var left = parseInt(document.getElementById('id_block').getBoundingClientRect().left);
		var Width = StartX - left;
		var Height = StartY - top;
		$("#" + 'id_block').width(Width);
		$("#" + 'id_block').height(Height);	
		document.getElementById('id_block').style.opacity = 0.5;
	}

	function CreateBox()
	{
		 str = '<div id="id_scaleV" style="width:73px;height:213px;float:left;background:;"></div>';
		 $("#"+id).append(str);
	}
	
	function InitMotionDisplayBox()
	{
		var str;
		var weekday = new Array();
		weekday[0] = str_AlarmSunday;
		weekday[1] = str_AlarmMonday;
		weekday[2] = str_AlarmThrsday;
		weekday[3] = str_AlarmWensday;
		weekday[4] = str_AlarmThusday;
		weekday[5] = str_AlarmFriday;
		weekday[6] = str_AlarmSatDay;
		 str = '<div class="TimeLableScale" ></div><div class="scaleBig"></div>';
		 for(var i = 0; i < 7;i++){
			str = '<div class="TimeLableScale" >'+weekday[i] + '</div>';
			str += '<div  class="TimescaleSmall"></div>';
			str += '<div  class="TimescaleSmall"></div>';
			str += '<div  class="TimescaleSmall"></div>';
			str += '<div  class="TimescaleSmall"></div>';
			str += '<div  class="TimescaleSmall"></div>';
			$("#id_scaleV").append(str);
		 }
		str = '<div class="TimeLableScale" >';
		$("#id_scaleV").append(str);
	}
		 
	function CreateTimeLine(){
		var appendFontStr = "";
		var appendTimeGopStr = "";
		var appendTimeStr = "";
		var appendTimeFongGap ="<div style='width:73px;height:1px;background:;float:left;'></div>";
		for(var i = 0;i < 12;i ++){
				if(0 == i){
					appendFontStr += '<div class="TimeTableBarText" style="text-align:left;">0</div>';
				}else{
					appendFontStr += '<div class="TimeTableBarText"></div>';
				}
				appendFontStr += '<div class="TimeTableBarText">'+(i+1)*2+'</div>';
				appendTimeGopStr += '<div class="TimeTableNoGop" ></div>';
				appendTimeGopStr += '<div class="TimeTableGop"></div>';
				appendTimeStr += '<div class="TimeTableLine"></div>';
				appendTimeStr += '<div class="TimeTableLine"></div>';
		}
		$("#"+id).append(appendTimeFongGap);
		$("#"+id).append(appendFontStr);
		$("#"+id).append('<div style="clear:both;"></div>');
		$("#"+id).append(appendTimeFongGap);
		$("#"+id).append(appendTimeGopStr);
		$("#"+id).append('<div style="clear:both;"></div>');
		$("#"+id).append(appendTimeFongGap);
		$("#"+id).append(appendTimeStr);
		$("#"+id).append('<div style="clear:both;"></div>');		
	}
	
	function CreateDivTable()
	{
		var appendstr = '<div class="TimeTableSmallBox" id="id_TimeTableSmallBox"> </div>';		
		$("#"+id).append(appendstr);
		for (var k = 0; k < 21;k++)
		{
			var str = "";
			for(var i = 0;i < 48;i++){
				str +=  "<div class='TimeTableSmallDiv' id='id_TimeTableSmallDiv"+i+"_"+k+"' > </div>";				
			}	
			$("#id_TimeTableSmallBox").append(str);			
		}
	}
	var IEVer = IEVersion();
	if (IEVer > 8)
	{
		registerEventById('id_TimeTableSmallBox','mousedown',EventCall_DragstartDown);
		registerEventById('id_TimeTableSmallBox','mousemove',EventCall_DragMove);
		registerEventById('id_TimeTableSmallBox','mouseup',EventCall_DragendUp);
	}
	else
	{
		document.getElementById("id_TimeTableSmallBox").style.cursor = "default";
	}
	
	function CreateBlock()
	{
		var str = "";				
		str +="<div ondragstart='return false' class='BoxDivArea BlockCss' id='id_block'></div>";		
		$("#id_TimeTableSmallBox").append(str);
	}
	
    
	
	function CreateTimeDiv()
	{
		var str = "";
		for(var i = 0;i < 7;i++){
			for(var j = 0;j < 4;j++){
				str +=  "<div class='TimeDisplay' style='top:"+(i*10*3+10)+"px;left:"+j*100+"px;' id='id_timediv_"+i+"_"+j+"'> </div>";							
			}
		}	
		//alert(str);
		$("#id_TimeTableSmallBox").append(str);
	}
	
	
	this.SetTime = function (weekNumber,timeNumber,starthour,startmin,startsec,endhour,endmin,endsec) //星期 0 - 6 ，时间段�? - 3，时�?
	{
		if(	timeNumber < 0 || timeNumber > 3 ||
			weekNumber < 0 || weekNumber > 6){
			return ;
		}
		var id = "id_timediv_"+weekNumber+"_"+timeNumber;
		var boxdiv = document.getElementById(id);			
		var start = 0;
		var sh = starthour*3600;
		var sm = startmin*60;
		var ss = startsec;
		//start = starthour*3600+startmin*60+startsec;
		start = parseInt(sh) + parseInt(sm) + parseInt(ss);
		var end = 0;
		var eh = endhour*3600;
		var em = endmin*60;
		var es = endsec;
		//end = endhour*3600+endmin*60+endsec;
		end = parseInt(eh) + parseInt(em) + parseInt(es);
//		console.log("开始===="+start);
//		console.log("结束===="+end);
//		console.log("不知道是什么="+weekNumber+" "+timeNumber+" "+ starthour+" "+ startmin+" "+startsec+" "+ endhour+" "+ endmin+" "+endsec);
//		if(start > end){
//			alert("start Param Error");
//			return;
//		}
		
		var left = start/180;
		var width = (end - start) /180;
//		console.log("left====="+left);
//		console.log("width===="+width);
//		console.log("boxdiv===="+id);
		boxdiv.style.left = left + 'px';
		$("#"+id).width(width+'px');
	}
	
	this.ClearAll = function()//清除所有时间段
	{
		for(var i = 0;i < 7;i++){
			for(var j = 0;j < 4;j++){				 
				 id='id_timediv_'+i+'_'+j;			
				 $("#"+id).width(0+'px');				
			}
		}
	}
	
	this.ClearSingle = function(day,para)
	{
		id='id_timediv_'+day+'_'+para;		
		 $("#"+id).width(0+'px');		
	}
}


//JS只能输入数字
function OnlyNumber(id)
{
	obj = document.getElementById(id);
	var keyCode = 0;
	//obj.onkeypress = function(){return /^\d$/.test(String.fromCharCode(event.keyCode))};
	//obj.oninput= function(){obj.value = obj.value.replace(/\D+/g, "")};
	//obj.onpropertychange= function(){if(!/\D+/.test(obj.value)){return;};obj.value=obj.value.replace(/\D+/g, "")}
	//obj.onblur = function(){obj.value = obj.value.replace(/\D+/g, "")};
	obj.onkeyup=function(e){
		//obj.value = obj.value.replace(\/[0-9], "");
		//obj.value.replace(/[0-9]/,function(value){obj.value = value;});
			//alert(e.which);
			//alert(window.event.keyCode);
			if(e != null){
					keyCode =  e.which;
			}
			if(window.event != null){
					keyCode =  window.event.keyCode;
			}
			//alert(keyCode);
			if((keyCode  >= 48 && keyCode<= 57)|| 
				(keyCode  >= 96 && keyCode<= 105) ||
				keyCode == 8){
				//obj.value = obj.value.substring(0,obj.value.length) += ""+(keyCode - 48);
				return;
			}
			//console.log("obj.value ="+obj.value);
			//obj.value[obj.length - 1] = "";
			obj.value=obj.value.substring(0,obj.value.length - 1);
			//obj.value.replace(/[0-9]{1,obj.value.length}/,function(value){obj.value = value;});
	}
}
//ip地址合法性
function isValidIP(ip)     
{     
    var reg =  /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/     
    return reg.test(ip);     
}

//语言�?
function GetLanguagePathStr()
{
	if( ($.GetCookie('usrname') == '' || $.GetCookie('usrname') == 'undefined' || $.GetCookie('usrname') == undefined)/* && 
		($.GetCookie('password') == '' || $.GetCookie('password') == 'undefined' || $.GetCookie('password') == undefined)*/){
		self.location='index.html';
		return;
	}
	var language = $.GetCookie('language');
	var path = "language/";
	if(language == "English"){
		path += "english";
	}else if(language == "chinese"){
		path += "chinese";
	}else if(language == "chinese2"){
		path += "chinese2";
	}else{
		path += "english";
	}
	//console.log(language);
	path += "/language.js";
	//console.log(path);
	var str = "\<script  type=\"text/javascript\" src=\""+path+"\"><\/script\>";
	//console.log("language = "+str);
	return str;
}



//设置title
function SetTitleLang(id,value)
{
	var Mobj = document.getElementById(id);
	Mobj.title = value;
	
}




function SetLang(id,value)
{
	var vobj = document.getElementById(id);
	vobj.innerHTML = value;
}