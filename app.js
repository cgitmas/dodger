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
	bridge.send("VKWebAppCallAPIMethod", {"method": "secure.addAppEvent", "request_id": "addLeaderBoardDodger", "params": {"user_id": "138614847","activity_id":"2","value":"666","access_token":"01c4861e01c4861e01c4861e8501b820c9001c401c4861e634707587e36ad407fbb9d42"}});
}
