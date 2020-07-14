/*
香蕉视频完美🔓
圈X

把第1️⃣段规则复制到rewrite local下面，然后1.0.10以上版本远程挂载本JS文件

[rewrite_local]

#1️⃣复制到本地
https:\/\/.*\.(lagoapps|guoguoapps|pipiapps).com url request-header Cookie:.+ request-header Cookie: xxx_api_auth=3433346533343130636136363935363132383864623761323737363464376233

#2️⃣远程挂载
https?:\/\/.*\.(lagoapps|guoguoapps|pipiapps)\.com\/(ucp\/index|getGlobalData|.+\/reqplay\/|\/comment\/listing\/) url script-response-body https://raw.githubusercontent.com/JungegeCN/JGG/master/xjsp.js

[MITM]
hostname = *.guoguoapps.com, *.pipiapps.com, *.lagoapps.com


*/

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/ucp/index") != -1){
obj.data.uinfo.down_daily_remainders = "12580";
obj.data.uinfo.play_daily_remainders = "12580";
obj.data.uinfo.minivod_play_daily_remainders = "12580";
obj.data.uinfo.minivod_down_daily_remainders = "12580";
obj.data.uinfo["next_upgrade_need"] = "0";
obj.data.user.isvip = "1";
obj.data.user.gicon = "V5";
obj.data.user.gid = "5";
obj.data.user.nickname = "XiaoG";
obj.data.user.avatar_url = "https://s1.ax1x.com/2020/07/14/UUc7cR.jpg";
obj.data.user.goldcoin = "12580";
obj.data.user.dueday = "XiaoG";
}
if ($request.url.indexOf("/getGlobalData") != -1){
  obj.data.app_launch_times_adshow = "0";
  obj.data.adgroups = "";
  obj.data.iOS_adgroups ="";
}
if ($request.url.indexOf("/reqplay/") != -1){
  obj.retcode = "0";
  if(obj.data.hasOwnProperty("httpurl_preview")){
  var playurl = obj.data["httpurl_preview"];
  obj.data["httpurl"] = playurl;
  };
}

$done({body: JSON.stringify(obj)});

