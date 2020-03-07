function getVLC(name)   
{   
        if (window.document[name])      
        {
                return window.document[name];   
        }   
        if (navigator.appName.indexOf("Microsoft Internet")==-1)   
        {
                if (document.embeds && document.embeds[name])   
                        return document.embeds[name];      
        }   
        else   
        {   
                return document.getElementById(name);   
        }  
		// return document.getElementById(name);   
} 

function PluginChanggeSize(width,height)
{
	//console.log(width);
	//console.log(height);
	$("#vlc").width(width);
	$("#vlc").height(height);	
}

function PluginStreamStop()   
{   //?D??¨º?¡¤?¡ä??¨²vlc2??t?¡ê
	if(getVLC("vlc").playlist==null){
	return;
}
     getVLC("vlc").playlist.stop();   
}
 


function PluginStreamPlay(StreamTye)   
{  
	var ip = GetIp();
	if(ip == null){
		return ;
	}
	var resp = $.sendMsg("ThirdServer",null,"/ISAPI/Network/ExtServerParam","POST");
	if(resp.success == false){
		//alert("recv ThirdServer msg fail");
		return;  
	}
	var map = resp.data;
	//console.log( JSON.stringify(map));

	var mrl;
	
	var port = Number(map.option_3.port);
	mrl = 'rtsp://'+ip+':' +port+'/H264?channel=1&subtype='+StreamTye+'&unicast=true&proto=Onvif/video&GWweb';
	//console.log(mrl);
	var vlc = getVLC("vlc");
	var options = new Array("rtsp-tcp");
	itemId= vlc.playlist.add(mrl, "fancy name", options);	
	vlc.playlist.playItem(itemId);   
}
 /*
function PluginStreamPlay(StreamTye)   
{  
	
//	var mrl = "rtsp://192.168.6.205:554/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif";
	var mrl = 'rtsp://192.168.6.142:554/H264?channel=1&subtype=0&unicast=true&proto=Onvif/video';
	var vlc = getVLC("vlc");
	var options = new Array("rtsp-tcp");
//	var options = new Array("--newwork-caching=300"); 
	//console.log(vlc);
	itemId= vlc.playlist.add(mrl, "fancy name", options);	
	//vlc.playlist.add(mrl);   
	vlc.playlist.playItem(itemId);   
}  
*/
function PluginAttachEvent(event, handler)
{
	var plugin = getVLC("vlc");
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

function MediaPlayerEncounteredError(event)
{
	//	alert('MediaPlayerEncounteredError');
		return ;
}

function PluginInit()
{
	PluginAttachEvent('MediaPlayerEncounteredError', MediaPlayerEncounteredError);
	//PluginAttachEvent('MediaPlayerEncounteredError', MediaPlayerEncounteredError);
}

function CheckPluginState(val)
{
	var vlc = getVLC("vlc");
	//alert(vlc.playlist.isPlaying);
	if(false == vlc.playlist.isPlaying){
		//console.log('false');
		PluginStreamPlay(val);	
	}
	/*console.log('true');
	console.log('vlc.input.state = '+ vlc.input.state);
	console.log('vlc.input.length = '+ vlc.input.length);
	console.log('vlc.mediaDescription.nowPlaying= '+ vlc.mediaDescription.nowPlaying);
	console.log('vlc.mediaDescription.publisher= '+ vlc.mediaDescription.publisher);
	*/
}