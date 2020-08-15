/*
香蕉视频完美🔓
圈X
*/

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/ucp/index") != -1){
  obj.data.uinfo.play_daily_remainders = "999";
  obj.data.uinfo.minivod_play_daily_remainders = "999";
  obj.data.uinfo["next_upgrade_need"] = "9999";
  obj.data.user.isvip = "1";
  obj.data.user.gicon = "V6";
  obj.data.user.gid = "6";
  obj.data.user.nickname = "XiaoG";
  obj.data.user.avatar_url = "https://s1.ax1x.com/2020/07/14/UUc7cR.jpg";
  obj.data.user.dueday = "XiaoG";
}
if ($request.url.indexOf("/getGlobalData") != -1){
  obj.data.app_launch_times_adshow = "0";
  obj.data.adgroups = "";
  obj.data.iOS_adgroups ="";
}
if ($request.url.indexOf("/init") != -1){
  obj.data.user.isvip = "1";
  obj.data.user.gicon = "V6";
  obj.data.user.gid = "6";
}
if ($request.url.indexOf("/vod/show/") != -1){
  obj.data.vodrow.islimitv3 = "0";
  obj.data.vodrow.isvip = "0";
}
if ($request.url.indexOf("//vod/reqplay/") != -1){
  obj.retcode = "0";
  if(obj.data.hasOwnProperty("httpurl_preview")){
  var playurl = obj.data["httpurl_preview"];
  obj.data["httpurl"] = playurl;
  };
}

$done({body: JSON.stringify(obj)});
