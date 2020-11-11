
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/movie/WatchMovieNew';
const checkvip = '/api/Account/CheckVip';
const vipinfo = '/api/account/IndexDetail';
const Downvip = '/api/download/CheckDownloadTorrent';
const cartoonvip = '/api/cartoon/VipInfo';
const cartooncheckvip = '/api/video/watch/';
const vipinfos = '/api/movie/SeriesFilterNew/*/10/0/0/0/1';
if (url.indexOf(vip) != -1) {
	obj["code"] = "1";
	obj["canWath"] = "true";
        obj["hadWach"] = "true";
	obj["surplusCount"] = "9999";
	body = JSON.stringify(obj);
 }
if (url.indexOf(checkvip) != -1) {
	obj["data"] = "1";
        obj["value"] = "true";
	body = JSON.stringify(obj);
 }
if (url.indexOf(Downvip) != -1) {
	obj["isVip"] = "ture";
        obj["hadLoadCount"] = "80";
	obj["toDayHadLoadCount"] = "80";
	obj["toDayCanLoadCount"] = "80";
	obj["allCount"] = "80";
	obj["vipLevel"] = "4";
	body = JSON.stringify(obj);
 }
if (url.indexOf(vipinfo) != -1) {
 	obj["nickName"] = "Xiao";
        obj["vipLevel"] = "4";
        obj["vipEndTime"] = "2222-02-22";
        obj["cartoonVip"] = "true";
	body = JSON.stringify(obj);
 }
if (url.indexOf(vipinfos) != -1) {
 	obj.data.result.cznVipLevel = "3";
	obj.data.result.canOnLine = "ture";
	obj.data.result.canLoad = "ture";
	obj.data.result.czn = "ture";
	body = JSON.stringify(obj);
 }
if (url.indexOf(cartoonvip) != -1) {
 	obj["isVip"] = "ture";
        obj["vipEndTime"] = "2222-02-22";
        obj["loadCount"] = "999";
	body = JSON.stringify(obj);
 }

if (url.indexOf(cartooncheckvip) != -1) {
	obj["data"] = "1";
        obj["value"] = "true";
	body = JSON.stringify(obj);
 }
$done({body});
