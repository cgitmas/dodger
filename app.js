var user_name = 'test_user_name'

function publish() {
	alert("Hello");
}
function getAuthToken()
{
	vkBridge.send('VKWebAppInit');
	vkBridge.send("VKWebAppAddToFavorites");
	console.log("Its OKAY!");
}
function showOrderBox()
{
	vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"})
		.then(data => console.log(data.result))
    		.catch(error => console.log(error));
	vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "reward"})
		.then(data => console.log(data.result))
    		.catch(error => console.log(error));
    	vkBridge.send("VKWebAppShowNativeAds", {ad_format:"reward"})
    		.then(data => console.log(data.result))
    		.catch(error => console.log(error));
}
function vibro()
{
	vkBridge.send("VKWebAppTapticImpactOccurred", {"style": "heavy"});
}
