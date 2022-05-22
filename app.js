function init()
{
	vkBridge.send('VKWebAppInit');
}
function showAds()
{

	var f = vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"})
		  .then(data => console.log(data.result))
    		  .catch(error => console.log(error));
    	console.log(f)
    	if (f)
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
function showLeaderBoard()
{
	vkBridge.send("VKWebAppShowLeaderBoardBox", {user_result:100})
         .then(data => console.log(data.success))  
         .catch(error => console.log(error));
}
