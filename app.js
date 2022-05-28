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
	vkBridge.send("VKWebAppCallAPIMethod", {"method":"secure.addAppEvent","request_id":"test","params":{"user_id":"138614847", "activity_id":"2", 	 		 "value":"666", "v":"5.131", "access_token":"abd395a0abd395a0abed22ccb8abaf3377aabd3abd395a0c941870a513edd870d595ab0"}})
	 .then(data => console.log(data.result))
	 .catch(error => console.log(error));
}
