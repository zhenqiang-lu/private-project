
function getVLC(name)   
{   
     
} 


 

function PluginChanggeSize(width,height)
{
	//console.log(width);
	//console.log(height);
	$("#vidview").width(width);
	$("#vidview").height(height);	
}

function PluginStreamStop()   
{   
	document.getElementById("vidview").OnStopTalk();
	document.getElementById("vidview").OnStopPlay();
	document.getElementById("vidview").OnLogout();
}
 


function PluginStreamPlay(StreamType)   
{  
	var ip = GetIp();
	//var ip = '192.168.6.142'; 
	if(ip == null){
		return;
	}
	PluginStreamStop();
	//document.getElementById("vidview").SetLogInfo(0, 0, 0);
	document.getElementById("vidview").SetStreamType(StreamType);	
	document.getElementById("vidview").OnLogin(ip, 60001, 60002, "admin", "123456");
}

function PluginInit()
{

	
}

function ipcam_OnRealPlayResponse(val)
{
	alert('val = ' + val);
	document.getElementById("vidview").OnRealPlay();
}