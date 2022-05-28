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

}
