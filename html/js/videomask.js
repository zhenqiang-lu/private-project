var RoImask;
var ColorBlock;
var cow = 22;
var coh = 18;
var boxwidth = 20;
var boxHeight = 20;
function GetPositionMaskValue(top,left,pox,poy)
{
	var x = pox - left;
	var y = poy - top;
	var obj_j = parseInt(x/boxwidth);
	var obj_i = parseInt(y/boxHeight);
	var mask = GetMask();
	var value =  mask[obj_i][obj_j];
	return value;
}
function ChangeBoxDivState(top,left,pox,poy)
{
	var x = pox - left;
	var y = poy - top;
	var obj_j = parseInt(x/boxwidth);
	var obj_i = parseInt(y/boxHeight);
	var mask = GetMask();
	//console.log(obj_i,obj_j);
	//console.log(obj_i,obj_j,mask[obj_i][obj_j]);
	if(mask[obj_i][obj_j] == 0){
		document.getElementById('block_'+obj_i+'_'+obj_j).style.display = "block";
		mask[obj_i][obj_j] = 1;
	}else{
		document.getElementById('block_'+obj_i+'_'+obj_j).style.display = "none";
		mask[obj_i][obj_j] = 0;
	}
	SetMask(mask);
}


function ChangeBoxAreaDivState(top,left,starpox,startpoy,endpox,endpoy,value)
{
	var obj_sj = parseInt((starpox - left)/boxwidth);
	var obj_si = parseInt((startpoy - top)/boxHeight);
	var obj_ej = parseInt((endpox - left)/boxwidth);
	var obj_ei = parseInt((endpoy - top)/boxHeight);
	var mask = GetMask(mask);
	//console.log("("+obj_sj+','+obj_si+")-("+obj_ej+","+obj_ei+")");
	
	if(obj_si - obj_ei > 0){var pv = obj_si;obj_si = obj_ei;obj_ei = pv;}
	if(obj_sj - obj_ej > 0){var pv = obj_sj;obj_sj = obj_ej;obj_ej = pv;}
	for(var i = obj_si;i < obj_ei;i++){
		for(var j = obj_sj;j < obj_ej;j++){
			//console.log('mask['+i+']['+j+'] = '+value);
			if(mask[i][j] != value){
				if(value == 0){
					document.getElementById('block_'+i+'_'+j).style.display = "none";
				}else{
					document.getElementById('block_'+i+'_'+j).style.display = "block";
				}
				mask[i][j] = value;
			}
		}
	}
	SetMask(mask);
}
function CreateRoiMask(value)
{
	RoImask = new Array();
	for(var j = 0;j < coh;j++){
		RoImask[j]  = new Array(cow);
		for(var i = 0; i < cow;i++){
			RoImask[j][i] = value;
		}
	}
}
function InitRoiMask(value)
{
	for(var j = 0;j < coh;j++){
		for(var i = 0; i < cow;i++){
			RoImask[j][i] = value;
		}
	}
}


function SetMask(mask)
{
	RoImask = mask;
}
function GetMask()
{	
	return RoImask;
}

function UpdateBoxLine(mask)
{
	for(var i = 0; i < coh;i++){
		for(var j = 0;j < cow;j++){
			if(1 == mask[i][j]){
				document.getElementById('block_'+i+'_'+j).style.display = "block";
			}else{
				document.getElementById('block_'+i+'_'+j).style.display = "none";
			}
		}
	}
}

function FullScreenBoxLine()
{
	InitRoiMask(1);
	UpdateBoxLine(GetMask());
}

function ClearScreenBoxLine()
{
	InitRoiMask(0);
	UpdateBoxLine(GetMask());
}

function InitBoxLine()
{
	var mask = GetMask();
	for(var i = 0; i < coh;i++){
		for(var j = 0;j < cow;j++){
			appendstr = '<div  ondragstart="return false;" class="BoxlineBlock" style="margin-top:'+boxHeight*i+'px;margin-left:'+boxwidth*j+'px;" id="block_'+i+'_'+j+'"></div>';
			//appendstr = '<iframe  ondragstart="return false;" class="BoxlineBlock" style="margin-top:'+20*i+'px;margin-left:'+20*j+'px;" id="block_'+i+'_'+j+'"></iframe>';
			$("#id_plugin_img").append(appendstr);
		}
	}
	UpdateBoxLine(mask);
}

function BoxDivChangeColor(ColorBlock)
{
	var mask = GetMask();
	for(var i = 0; i < coh;i++){
		for(var j = 0;j < cow;j++){
			if(1 == mask[i][j] && 1 == ColorBlock[i][j]){
				//document.getElementById('block_'+i+'_'+j).style.display = "block";BoxlineBlockSelected
				$("#"+'block_'+i+'_'+j).addClass("BoxlineBlockSelected");
			}else{
				//document.getElementById('block_'+i+'_'+j).style.display = "none";
				$("#"+'block_'+i+'_'+j).removeClass("BoxlineBlockSelected");
			}
		}
	}
}

function CreateColorBlock()
{
	ColorBlock = new Array();
	for(var j = 0;j < coh;j++){
		ColorBlock[j]  = new Array(cow);
		for(var i = 0; i < cow;i++){
			ColorBlock[j][i] = 0;
		}   
	}
	
}

function GetColorBlock()
{
	return ColorBlock;
}

//坐标转换
function translateHeightToPos1000(value)
{
	value = parseInt(value) * 1000 / 288;
	return value;
}

function translateHeightToPosLocal(value)
{
	value = parseInt(value) * 288 / 1000;
	return value;
}

function translateWidthToPos1000(value)
{
	value = parseInt(value) * 1000 / 352;
	return value;
}

function translateWidthToPosLocal(value)
{
	value = parseInt(value) * 352 / 1000;
	return value;
}