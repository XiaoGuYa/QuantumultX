
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/movie/WatchMovieNew';
const checkvip = '/api/Account/CheckVip';
const vipinfo = '/api/account/IndexDetail';
const Downvip = '/api/download/CheckDownloadTorrent';

const cartoonvip = '/api/cartoon/VipInfo';
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
        obj["hadLoadCount"] = "999";
	obj["toDayHadLoadCount"] = "999";
	obj["toDayCanLoadCount"] = "999";
	obj["allCount"] = "999";
	obj["vipLevel"] = "3";
	body = JSON.stringify(obj);
 }
if (url.indexOf(vipinfo) != -1) {
 	obj["nickName"] = "Xiao";
        obj["vipLevel"] = "3";
        obj["vipEndTime"] = "2222-02-22";
        obj["cartoonVip"] = "true";
	body = JSON.stringify(obj);
 }

if (url.indexOf(cartoonvip) != -1) {
 	obj["isVip"] = "ture";
        obj["vipEndTime"] = "2222-02-22";
        obj["loadCount"] = "999";
	body = JSON.stringify(obj);
 }
$done({body});
