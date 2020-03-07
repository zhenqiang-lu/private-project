function XmlToJson() {
}
XmlToJson.prototype.setXml = function(xml) {
    if (xml && typeof xml == "string")
	{
		var IEVer = IEVersion();
		if (IEVer == 8) // IE8
		{
			function createXMLDOM() 
			{
				var version = ['MSXML2.DOMDocument.6.0','MSXML2.DOMDocument.3.0','MSXML2.DOMDocument'];
				for (var i = 0; i < version.length; i ++)
				{
					try
					{
						var xmlDom = new ActiveXObject(version[i]);
						return xmlDom;
					}
					catch(e)
					{
					}
				}
				throw new Error('Not support the MSXML!');
			}

			var xmldom = createXMLDOM();
			xmldom.loadXML(xml);
			this.xml = xmldom.getElementsByTagName('*')[0];	
			
			var xmlnode = this.xml.firstChild;
			while(xmlnode != null)
			{ 
				//alert(xmlnode.nodeName + '=' + xmlnode.firstChild.nodeValue);
				xmlnode = xmlnode.nextSibling;
			}
		}
		else
		{
			this.xml = document.createElement("div");
			//console.log("1.html=" + this.xml.innerHTML);
			this.xml.innerHTML = xml;
			//console.log("2.html=" + this.xml.innerHTML);
			this.xml = this.xml.getElementsByTagName("*")[0];
			//console.log("3.html=" + this.xml.innerHTML);
		}		
    }
    else if(typeof xml == "object")
	{
        this.xml = xml;
    }
};

XmlToJson.prototype.getXml = function() {
    return this.xml;
};
XmlToJson.prototype.parse = function(xml) {
    this.setXml(xml);
    return this.convert(this.xml);
};
XmlToJson.prototype.convert = function(xml){
	
    if (xml == null || xml.nodeType != 1)
	{
        return null;
    }
	
    var obj = {};
    obj.xtype = xml.nodeName.toLowerCase();
	//console.log(" obj.xtype= " + obj.xtype + " xml.nodeType =" + xml.nodeType);
	var IEVer = IEVersion();
	if (IEVer == 8) // IE8
	{
		var nodeValue = (xml.text || "").replace(/(\r|\n)/g, "").replace(/^\s+|\s+$/g, "");
	}
	else
	{
		var nodeValue = (xml.textContent || "").replace(/(\r|\n)/g, "").replace(/^\s+|\s+$/g, "");
	}
	
	if(nodeValue && xml.childNodes.length == 1)
	{
		obj.text = nodeValue;
	}	
		
	if (xml.attributes.length > 0)
	{
		for (var j = 0; j < xml.attributes.length; j++)
		{
			var attribute = xml.attributes.item(j);
			obj[attribute.nodeName] = attribute.nodeValue;
		}
	}
	if (xml.childNodes.length > 0)
	{
		var items = [];
		for(var i = 0; i < xml.childNodes.length; i++)
		{
			var node = xml.childNodes.item(i);
			var item = this.convert(node);
			if(item)
			{
				items.push(item);
			}
		}
		
		if(items.length > 0)
		{
			obj.items = items;
		}
	}
	
    return obj;
};

function JsonToXml() {
 this.result = [];
}
JsonToXml.prototype.spacialChars = ["&","<",">","\"","'"];
JsonToXml.prototype.validChars = ["&","<",">","\"","'"];
JsonToXml.prototype.toString = function(){
 return this.result.join("");
};
JsonToXml.prototype.replaceSpecialChar = function(s){
    for(var i=0;i<this.spacialChars.length;i++){
        s=s.replace(new RegExp(this.spacialChars[i],"g"),this.validChars[i]);
    }
    return s;
};
JsonToXml.prototype.appendText = function(s){
    s = this.replaceSpecialChar(s);
    this.result.push(s);
};
JsonToXml.prototype.appendAttr = function(key, value){
	//console.log("key ="+ key+" value="+value);
    this.result.push(" "+ key +"=\""+ value +"\"");
};
JsonToXml.prototype.appendFlagBeginS = function(s){
 this.result.push("<"+s);
};
JsonToXml.prototype.appendFlagBeginE = function(){
 this.result.push(">");
};
JsonToXml.prototype.appendFlagEnd = function(s){
 this.result.push("</"+s+">");
};
JsonToXml.prototype.parse = function(json){
 this.convert(json);
 return this.toString();
};
JsonToXml.prototype.convert = function(obj) {
 var nodeName = obj.xtype || "item";
	//alert("nodeName =" + nodeName);
	//alert("obj.text =" + obj.text);
	//alert("obj.items =" + obj.items);
	//alert("obj.item =" + obj.item);

if(obj.items == undefined && (obj.text == "" ||  (obj.text == undefined))  && obj.item == undefined){
	return;
 }
 
 //console.log("obj.items =" + obj.items);
 //console.log("obj.item =" + obj.item);
 //console.log("obj.text =" + obj.text);
  
 this.appendFlagBeginS(nodeName);
 var arrayMap = {};
 var txt;
 for(var key in obj) {
  var item = obj[key];
  if(key == "xtype") {
   continue;
  }
  if(item.constructor == String) {
	if(key != "text")
		this.appendAttr(key, item);
	else
		txt = item;
  }
 // console.log("key =" + key);
 // console.log("item =" + item);
  if(item.constructor == Array) {
   arrayMap[key] = item;
  }
 }
 this.appendFlagBeginE();
 this.result.push(txt);
 for(var key in arrayMap) {
  var items = arrayMap[key];
  for(var i=0;i<items.length;i++) {
   this.convert(items[i]);
  }
 }
 this.appendFlagEnd(nodeName);
};

function ParseData(data)
{
	var map;
	map = "{";
	for(var i = 0; i < data.length;i++){
		//console.log(data[i].xtype +"   "+data[i].text );
		if(i != 0){
			map += ',';
		}
		//console.log(data[i].items);
		if(data[i].items == undefined){
			if(data[i].text == undefined){
				map += '"'+data[i].xtype+'":null';
			}else{
				map += '"'+data[i].xtype+'":"'+data[i].text+'"'; 
			}				
		}else{
			//console.log(data[i].xtype);
			map += '"'+data[i].xtype+'":';
			map += ParseData(data[i].items);
		}
		
	}
	map+="}";
	return map;
}


/*function(){
	var xml = "<DeviceInfo><DeviceName>tanfan</DeviceName><DeviceID>123456</DeviceID><DeviceModel>IPC</DeviceModel><SoftwareVer>1.2.3</SoftwareVer><FactoryInfo>brm</FactoryInfo></DeviceInfo>";
	var xmlParser = new XmlToJson();
	var json = xmlParser.parse(xml);
	console.log( JSON.stringify(json) );
	
	var jsonParser = new JsonToXml();
	var xml = jsonParser.parse(json);
	console.log( xml );
}*/

function IEVersion()
{
	var userAgent = navigator.userAgent; //»°µ√‰Ø¿¿∆˜µƒuserAgent◊÷∑˚¥Æ  
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //≈–∂œ «∑ÒIE<11‰Ø¿¿∆˜  
	var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //≈–∂œ «∑ÒIEµƒEdge‰Ø¿¿∆˜  
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
		return -1;//≤ª «ie‰Ø¿¿∆˜
	}
}

(function($){
	//var sendcount = 0;
    $.extend({
        sendMsg: function(cmd, body,url,mothod){
		var usr = $.GetCookie('usrname');
		var pwd = $.GetCookie('password');
		var sessionid = $.GetCookie('sessionid');
		url = url + "?ID=" + sessionid;
		if(body !=  null){
        	var message = $.buildMessage(cmd, body);
			var resp;
			var str;
			var jsonParser = new JsonToXml();
			var xml = jsonParser.parse(message);
			xml = '<?xml version="1.0" encoding="utf-8"?>' + xml;
			//console.log("xml = " + xml);
			$.ajax({
				url: url,
				async: false,
				type:mothod,
				timeout:1000,
				dataType:"text",
				username:usr,
				password:pwd,
				data: xml
			})
			.done(function(response){
				//console.log("response = " + response);
				var xmlParser = new XmlToJson();
				var json = xmlParser.parse(response);
				//console.log( JSON.stringify(json));
				var map= JSON.parse(ParseData(json.items));
				//console.log("map to="+map);
				resp = {success:true,data:map};
				sendcount = 0;
			}).fail(function(){
				resp = {success:false,data:""};	
				/*
				sendcount++;
				//console.log("sendcount ="+sendcount);
				if(sendcount > 3){
					resp = {success:false,data:""};	
					sendcount = 0;
				}else{
					resp = $.sendMsg(cmd, body,url,mothod);
				}*/
			})		
		//	console.log(resp.data);
			return resp;
		}else{
			var resp;
			$.ajax({
				url: url,
				async: false,
				type:"POST",
				timeout:1000,
				username:usr,
				password:pwd,
				dataType:"text"
			}).done(function(response) {
			//	console.log("response = " + response);
				var xmlParser = new XmlToJson();
				var json = xmlParser.parse(response);
			//	console.log("json to="+JSON.stringify(json));
				var map=  JSON.parse(ParseData(json.items));
			//	console.log("map ="+JSON.stringify(map));
				resp = {success:true,data:map};
				//sendcount = 0;
			}).fail(function(){
				
				
				/*sendcount++;
				//console.log("sendcount ="+sendcount);
				if(sendcount > 3){
					resp = {success:false,data:""};	
					sendcount = 0;
				}else{
					resp = $.sendMsg(cmd, body,url,mothod);
				}
				 //$.sendMsg(cmd, body,url,mothod);*/ 
				 resp = {success:false,data:""};	
			})		
		//	console.log("resp.data = "+resp.data);
			return resp;
		}
		},
		buildMessage: function(cmd, bodyMsg) {
			var message = {
				xtype:cmd,
				items:bodyMsg
			}
			return message;		
		},
		SetCookie: function (name,value){
			var str = name + "="+value+"&amp;";
			document.cookie = str;
			return ;
		},
		GetCookie: function(name){
			var arrstr = document.cookie.split("&amp; ");
			if(!arrstr)
			{
				return null;
			}
			for(var i = 0;i < arrstr.length;i++)
			{
				var temp = arrstr[i].split("=");
				if(temp[0] == name)
				{
					return $.SpliteCookie(temp[1]);
				}
					
			}
			return null;
		},
		SpliteCookie: function(value){
			len =  value.indexOf("&amp");
			if(len > 0){
				return value.substr(value,len); 
			}
			return value;
		}
	})
})(jQuery);





