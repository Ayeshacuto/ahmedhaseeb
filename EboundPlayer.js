if (top.location && document.location != top.location) top.location = document.location;

document.write("<iframe data-video-ads='true' id='google_top' name='google_top' style='display:none'></iframe>");
document.write("<scr'+'ipt async src='//pagead2.googlesyndication.com/pagead/js/google_top.js'></scr'+'ipt>");

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-25337038-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
var scripts = document.getElementsByTagName('script');
var myScript = scripts[ scripts.length - 1 ];
var queryString = myScript.src.replace(/^[^\?]+\??/,'');
var params = parseQuery( queryString );
//Creating scr link 
var var_scr='http://www.eboundservices.com/iframe/new/iframe.php?stream=express&width='+params['width']+'&height='+params['height']+'&clip=express&syndicate=100000001';
var var_scr1='http://eboundservices.com/images/contentblock.png';
var domain = (location.hostname.replace('www.',''));;
var playersize = params['width'];
if (domain=="saadtv.com")
{
document.write("<center><iframe name='eboundservices' width='640' height='360' src="+var_scr1+" frameborder='0' scrolling='no'></center></iframe>");
}
else if (playersize==null)
{
document.write('<center><scr'+'ipt type="text/javascript" src="http://www.eboundservices.com/ads/468_60.js"></scr'+'ipt></center>');
document.write("<center><iframe name='eboundservices' width='615' height='350' src="+var_scr+" frameborder='0' scrolling='no'></center></iframe>"); document.write('</br></br>');
}
else
{
document.write('<center><scr'+'ipt type="text/javascript" src="http://www.eboundservices.com/ads/468_60.js"></scr'+'ipt></center>');
document.write("<center><iframe name='eboundservices' width="+params['width']+" height="+params['height']+" src="+var_scr+" frameborder='0' scrolling='no'></center></iframe>");
document.write('</br></br>');
}
/****************************to return parameters******************************/
function parseQuery ( query ) {
  var Params = new Object ();
  if ( ! query ) return Params; // return empty object
  var Pairs = query.split(/[;&]/);
  for ( var i = 0; i < Pairs.length; i++ ) {
    var KeyVal = Pairs[i].split('=');
    if ( ! KeyVal || KeyVal.length != 2 ) continue;
    var key = unescape( KeyVal[0] );
    var val = unescape( KeyVal[1] );
    val = val.replace(/\+/g, ' ');
    Params[key] = val;
  }
  return Params;
}
document.write('<scr'+'ipt type="text/javascript" src="http://www.eboundservices.com/ads/extra.js"></scr'+'ipt>');