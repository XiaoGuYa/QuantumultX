
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/movie/WatchMovieNew';

const checkvip = '/api/Account/CheckVip';

const vipinfo = '/api/account/IndexDetail';

if (url.indexOf(vip) != -1) {
	obj["canWath"] = "true";
  obj["hadWach"] = "true";
	body = JSON.stringify(obj);
 }

if (url.indexOf(checkvip) != -1) {
	obj["data"] = "1";
   obj["value"] = "true";
	body = JSON.stringify(obj);
 }
if (url.indexOf(vipinfo) != -1) {
 	obj["nickName"] = "Xiao";
   obj["vipLevel"] = "3";
   obj["vipEndTime"] = "2222-02-22";
   obj["cartoonVip"] = "true";
	body = JSON.stringify(obj);
 }
$done({body});
