/*像页面贴图片*/
$(document).ready(function(){
	$(".imgRight").each(function(){
		$(this).attr({src:"../img/UserName/right.png"});
	});
	$(".imgWrong").each(function(){
		$(this).attr({src:"../img/UserName/wrong.png"});
	});
	$(".imgUpdate").each(function(){
			var updateImfor=$(this).attr({src:"../img/UserName/ClickBefore/Pencli.png"});
		updateImfor.hover(function(){
			$(this).attr({src:"../img/UserName/ClickAfter/Pencli.png"});
		},function(){
			$(this).attr({src:"../img/UserName/ClickBefore/Pencli.png"});
		});
	});
});
//#>拖动功能
//#>移动代码开始
//(function ($) {
//    $.fn.draggable = function (s) {
//        if (this.size() > 1) return this.each(function (i, o) { $(o).draggable(s) });
//        var t = this, h = s ? t.find(s) : t, m = {}, to = false,
//	      d = function (v) {
//	          v.stopPropagation();
//	          m = { ex: v.clientX, ey: v.clientY, x: t.css("position") == "relative" ? parseInt(t.css("left")) : t.position().left, y: t.css("position") == "relative" ? parseInt(t.css("top")) : t.position().top, fw: t.get(0).style.width, w: t.width() };
//	          if (t.css("position") == "static") to = { "left": m.x, "top": m.y };
//	          $(document).mousemove(b).mouseup(e);
//	          if (document.body.setCapture) document.body.setCapture();
//	      },
//		  b = function (v) { t.css({ "left": v.clientX - m.ex + m.x, "top": v.clientY - m.ey + m.y }); },
//		  e = function (v) {
//		      if (document.body.releaseCapture) document.body.releaseCapture();
//		      $(document).unbind("mousemove").unbind("mouseup");
//		  };
//        h.mousedown(d);
//        return t;
//    };
//})(jQuery);



function FunObjMove(_tag) {
    /// <summary>可以使页面元素为可移动模式</summary>
    //alert(_tag);
    $(_tag).draggable();
}
//#<移动代码结束
//#<

$(function () {
    $.fn.draggable = function (s) {
        if (this.size() > 1) return this.each(function (i, o) { $(o).draggable(s) });
        var t = this, h = s ? t.find(s) : t, m = {}, to = false,
	      d = function (v) {
	          v.stopPropagation();
	          m = { ex: v.clientX, ey: v.clientY, x: t.css("position") == "relative" ? parseInt(t.css("left")) : t.position().left, y: t.css("position") == "relative" ? parseInt(t.css("top")) : t.position().top, fw: t.get(0).style.width, w: t.width() };
	          if (t.css("position") == "static") to = { "left": m.x, "top": m.y };
	          $(document).mousemove(b).mouseup(e);
	          if (document.body.setCapture) document.body.setCapture();
	      },
		  b = function (v) { t.css({ "left": v.clientX - m.ex + m.x, "top": v.clientY - m.ey + m.y }); },
		  e = function (v) {
		      if (document.body.releaseCapture) document.body.releaseCapture();
		      $(document).unbind("mousemove").unbind("mouseup");
		  };
        h.mousedown(d);
        return t;
    };
})

//#>接收网此参数
function RequestName(strName) {
    var strHref = window.document.location.href;
    var intPos = strHref.indexOf("?");
    var strRight = strHref.substr(intPos + 1);
    var arrTmp = strRight.split("&");
    for (var i = 0; i < arrTmp.length; i++) {
        var arrTemp = arrTmp[i].split("=");
        if (arrTemp[0].toUpperCase() == strName.toUpperCase())
            return arrTemp[1];
    }
    return "";
}
//#<

//#>得到window路径
function WindowDoc(_count) {
    if (_count == 0) {
        return document;
    }
    var _parent = "";
    for (i = 1; i <= _count; i++) {
        _parent += "parent.";
    }
    return eval("window." + _parent + "document");
}
//#<

//#>-----------------------关闭方法-----------------------------------
function DivClose() {
    //var Doc = WindowDoc(RequestName("WinCount"));
    var Doc = window.parent.document;
    if ($("#BackDiv", Doc).length > 0) {
        $("#BackDiv", Doc).remove();
        ShowSelect(Doc);
    }
    if ($("#FloatDiv", Doc).length > 0) {
        $("#FloatDiv", Doc).remove();
    }
}
function PageClose() {
    /// <summary>关闭本页面中的层</summary>
    var Doc = document;
    if ($("#BackDiv", Doc).length > 0) {
        $("#BackDiv", Doc).remove();
        ShowSelect(Doc);
    }
    if ($("#FloatDiv", Doc).length > 0) {
        $("#FloatDiv", Doc).remove();
    }
}
//#<-----------------------关闭方法-----------------------------------

//#>---------------------login方法--------------------------------



function Login(strTitle, _url, IframeWidth, IframeHeight, IsBackDiv, _count, _bindEle, fn) {
    /// <summary>弹出层（窗口）</summary>
    /// <param name="strTitle" type="String">框架网页的标题</param>
    /// <param name="_url" type="String">框架网页的地址</param>
    /// <param name="IframeWidth" type="String">框架网页显示的宽度,如:"300"[如果为all则为_count级别的窗口的宽的全部]</param>
    /// <param name="IframeHeight" type="String">框架网页显示的高度,如:"300"[如果为all则为_count级别的窗口的高的全部]</param>
    /// <param name="IsBackDiv" type="String">是否存在Div层      如:True/False</param>
    /// <param name="_count" type="int">是在哪个窗口中弹出;本窗口0,上一级1,上上一级2,依次轮推</param>
    /// <param name="_bindEle" type="String(Object)">在IFrame中要绑定事件的对像</param>
    /// <param name="fn" type="Function">在IFrame中要绑定的方法</param>
	
    var IsIE = (navigator.appName == 'Microsoft Internet Explorer');
    if (!_count) {
        _count = 0;
    }
    var DomDoc = WindowDoc(_count);
    var arrPageScroll_alert = FunGetPageScroll(DomDoc);
    var arrPageSizes_alert = FunGetPageSize(DomDoc);
    if (_url.indexOf("?") > 0) {
        Lian = "&";
    } else {
        Lian = "?";
    }
    _url = _url + Lian + "WinCount=" + _count + "&_=" + Math.random();
    var _left = (arrPageSizes_alert[0] / 2 + arrPageScroll_alert[0] - IframeWidth / 2);
    var _top = (arrPageSizes_alert[3] / 22) + arrPageScroll_alert[1];
    var _bw = 0;
    var _bh = 0;
    // alert(IframeHeight);
    // alert(IframeWidth);
    if (IframeWidth.toLowerCase() == "all") {
        IframeWidth = arrPageSizes_alert[0] - 6 - 5;
        _left = 6;
        _bw = IframeWidth;
    } else {
        _bw = arrPageSizes_alert[0];
    }

    if (IframeHeight.toLowerCase() == "all") {
        IframeHeight = arrPageSizes_alert[1] - 26 - 10;
        _top = 26;
        _bh = IframeHeight;
    } else {
        _bh = arrPageSizes_alert[1];
    }
    if ($("#BackDiv", DomDoc).length <= 0 && IsBackDiv == true) {
        var BackDivStr = new StringBuilder();
        //        _width = Math.max(DomDoc.body.scrollWidth, DomDoc.documentElement.clientWidth);
        //        _height = Math.max(DomDoc.body.scrollHeight, DomDoc.documentElement.clientHeight) + 15;
        BackDivStr.Append("<div id=\"BackDiv\" style=\"filter:alpha(opacity=20); -moz-opacity: 0.2; opacity: 0.2; position:absolute; z-index:500; left:0px; top:0px; width:" + _bw + "px; height:" + _bh + "px; \">");
        BackDivStr.Append("</div>");
        HideSelect(DomDoc);
        setTimeout(function () { $("body", DomDoc).append(BackDivStr.toString()); }, 50);

    }
    else if (IsBackDiv == true) {
        HideSelect(DomDoc);
        $("#BackDiv", DomDoc).show();
    }

    if ($("#FloatDiv", DomDoc).length <= 0) {
        //        _width = Math.max(DomDoc.body.scrollWidth, DomDoc.documentElement.clientWidth);
        //        _height = Math.max(DomDoc.body.scrollHeight, DomDoc.documentElement.clientHeight);

        var DivStr = new StringBuilder();

        DivStr.Append("<div id='FloatDiv'");
        DivStr.Append("style='position:absolute; z-index:5001; background-color:#F3F3F5; border:solid 1px #6C92AD; border-top:0px; width:" + IframeWidth + "px; height:" + IframeHeight + "px;top:" + _top + "px; left:" + _left + "px;'>");
        DivStr.Append("<div style=\"position:relative; width:100%;height:" + IframeHeight + "px;\">");
        DivStr.Append("<div style=\"position:absolute;z-index:200; width:100%;height:" + IframeHeight + "px;\"><iframe style=\"width:100%;height:" + IframeHeight + "px;\" src=''  frameborder=\"0\" scrolling=\"no\"></iframe></div>");
        DivStr.Append("<div style=\"position:absolute;z-index:205; background:#dcdcdc;border:1px solid #6c92ad; width:100%;height:" + IframeHeight + "px;\">"); //内容区域开始
        DivStr.Append("<div class=\"AlertTitle\">");
        DivStr.Append("   <div class=\"AlertTitleLeft\"></div>");
        DivStr.Append("   <div class=\" AlertTitleRight\" style='background:#dcdcdc;'>");
        DivStr.Append("       <span onclick=\"PageClose()\"  class=\"AClose\">×</span></div>");
        DivStr.Append("   <div class=\"clearFloat\"></div>");
        DivStr.Append("</div>");
        DivStr.Append("<div class=\"AlertContent\" style=\"min-height: 104px; _height: 104px;\">");
        DivStr.Append("   <div class=\"AlertContentIn\" id=\"AlertContentIn\">");
        DivStr.Append("      <div class=\"Login_LoadingTip\" style=\"text-align:center; padding-top:50px;\">");
        DivStr.Append("        ");
        DivStr.Append("      </div>");
        var _h = IframeHeight - 60;
        DivStr.Append("     <iframe id=\"IFrameAlert\" onload=\"GetFocus20110523()\" name=\"IFrameAlert\" frameborder=\"0\" scrolling=\"auto\" src=\"" + _url + "\" width=\"100%\" height=\"" + _h + "\"></iframe>");
        DivStr.Append("    </div>");
        DivStr.Append("   </div>");
        DivStr.Append("  </div>"); //内容区域结束
        DivStr.Append(" </div>");
        DivStr.Append("</div>");
        setTimeout(function () {
            $("body", DomDoc).append(DivStr.toString());
            if (_count > 0) {
                var _parent = "";
                for (i = 0; i < _count; i++) {
                    _parent += "parent.";
                }
                eval(_parent + "window.FunObjMove('#FloatDiv')");
            } else {
                FunObjMove("#FloatDiv");
            }

        }, 800);
        //alert(2);
    }
    else {
        //alert(1);
        $("#FloatDiv", DomDoc).show();
    }
	//fun(_url);

}


//alert(charUser);

//#<

function GetFocus20110523() {
    $(".Login_LoadingTip").hide();
    $("#IFrameAlert").show();
    if ($("#IFrameAlert").contents().find("input").length > 0) {
        $("#IFrameAlert").contents().find("body").focus();
    }
}
//#>显示隐藏下拉框
function ShowSelect(doc) {
    $("select", doc).show();
}
function HideSelect(doc) {
    $("select", doc).hide();
}
//#<

//#>模拟面向对象中StringBuilder类开始
function StringBuilder(value) {
    this.Strings = new Array("");
    this.Append(value);
}
// Appends the given value to the end of this instance.
StringBuilder.prototype.Append = function (value) {
    if (value) {
        this.Strings.push(value);
    }
}

// Clears the string buffer

StringBuilder.prototype.Clear = function () {
    this.Strings.length = 1;
}

// Converts this instance to a String.
StringBuilder.prototype.toString = function () {
    return this.Strings.join("");
}
//#<

//#>得到页面信息
function FunGetPageScroll(DomDoc) {
    /// <summary>得到水平，垂直的数值</summary>
    var xScroll, yScroll;
    if (self.pageYOffset) {
        yScroll = self.pageYOffset;
        xScroll = self.pageXOffset;
        //alert("1");
    } else if (DomDoc.documentElement && DomDoc.documentElement.scrollTop) {	 // Explorer 6 Strict
        yScroll = DomDoc.documentElement.scrollTop;
        xScroll = DomDoc.documentElement.scrollLeft;
        // alert("2");
    } else if (DomDoc.body) {// all other Explorers
        yScroll = DomDoc.body.scrollTop;
        xScroll = DomDoc.body.scrollLeft;
        //alert("3");
    }
    //alert(xScroll);
    arrayPageScroll = new Array(xScroll, yScroll);
    return arrayPageScroll;
}

function FunGetPageSize(DomDoc) {
    /// <summary>Description</summary>
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {
        xScroll = window.innerWidth + window.scrollMaxX;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (DomDoc.body.scrollHeight > DomDoc.body.offsetHeight) { // all but Explorer Mac
        xScroll = DomDoc.body.scrollWidth;
        yScroll = DomDoc.body.scrollHeight;
    } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
        xScroll = DomDoc.body.offsetWidth;
        yScroll = DomDoc.body.offsetHeight;
    }
    var windowWidth, windowHeight;
    if (self.innerHeight) {	// all except Explorer
        if (DomDoc.documentElement.clientWidth) {
            windowWidth = DomDoc.documentElement.clientWidth;
        } else {
            windowWidth = self.innerWidth;
        }
        windowHeight = self.innerHeight;
    } else if (DomDoc.documentElement && DomDoc.documentElement.clientHeight) { // Explorer 6 Strict Mode
        windowWidth = DomDoc.documentElement.clientWidth;
        windowHeight = DomDoc.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
        windowWidth = DomDoc.body.clientWidth;
        windowHeight = DomDoc.body.clientHeight;
    }
    // for small pages with total height less then height of the viewport
    if (yScroll < windowHeight) {
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }
    // for small pages with total width less then width of the viewport
    if (xScroll < windowWidth) {
        pageWidth = xScroll;
    } else {
        pageWidth = windowWidth;
    }
    arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight);
    return arrayPageSize;
};
//#