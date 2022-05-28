function init()
{
	vkBridge.send('VKWebAppInit').then(data => console.log(data.result));
}
function showAds()
{

	var check_ads_status = vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"})
		  .then(data => console.log(data.result))
    		  .catch(error => console.log(error));
    	if (check_ads_status)
    	{
    		vkBridge.send("VKWebAppShowNativeAds", {ad_format:"interstitial"})
    		  .then(data => console.log(data.result))
    		  .catch(error => console.log(error));
    	}
}
function vibro()
{
	vkBridge.send("VKWebAppTapticImpactOccurred", {"style": "heavy"});
}
function showLeaderBoard(score)
{
	vkBridge.send("VKWebAppShowLeaderBoardBox", {user_result:score, global:1})
         .then(data => console.log(data.success))  
         .catch(error => console.log(error));
}
function addToGlobalLeaderBoard()
{
	vkBridge.send("VKWebAppCallAPIMethod", {"method":"secure.addAppEvent","request_id":"test","params":{"user_id":"138614847", "activity_id":"2", 	 		 "value":"666", "v":"5.131", "access_token":"fca010d3fca010d3fca010d34ffcdcb604ffca0fca010d39e31e8db22d9c0ad08e7457b","client_secret":"3fd677633fd677633fe8c00feb3faad1b433fd63fd677635d44610d81dfbe3714126c83"}})
	 .then(data => console.log(data.result))
	 .catch(error => console.log(error));
}
