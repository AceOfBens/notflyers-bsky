import * as Mastodon from 'tsl-mastodon-api';
const mastodon = new Mastodon.API({access_token: 'DlRovob5ujTMeOFQFeWARurfj-oy8Hv_auRCOBmFXhk', api_url: 'https://mastodon.social/api/v1/'}); // access the Mastodon API using the access token.

/*
	getPostText():

	This function performs a Mastodon API GET request to get the n most recent tweets created by the Flyers. Using this, the function formats these strings down into the desired plaintext of a Bluesky post, stripping out all of the unnecessary HTML tag notation and handling formatting such that the text is compatible with Bluesky.

	args: None

	returns: A string representing the desired text of the Bluesky posts we want to create. Text for different posts are delimited by \/ characters. 
*/
export default async function getPostText() 
{
	const limitVal = 15; // The number of posts to get from Mastodon.
	var pReg = new RegExp("</p><p>", "g"); // A regex to deal with <p></p>. This should create a new section in the text, which we do via 2 line breaks.
	var brReg = new RegExp("<br>", "g"); // A regex to deal with <br>. This should go to the next line, which we do via a line break. 
	var quoteReg = new RegExp(`\\\\"`, "g"); // A regex to deal with \". This should be replaced with a " value with no \.
	var andReg = new RegExp("&amp;", "g"); // A regex to deal with &amp;. This should be replaced with &.
	var logoReg = new RegExp("&nbsp;", "g"); // A regex to deal with &nbsp;. Should be deleted.
	var twitterReg = new RegExp("@twitter.com", "g"); // A regex to deal with @twitter.com. Should be deleted.
	var sportsBotsReg = new RegExp("@sportsbots.xyz", "g");
	var nhlflyersReg = new RegExp("@nhlflyers@sportsbots.xyz", "g"); // A regex to deal with Flyers's @. Should be replaced with the bot's @.
	
	var nbcsphillyReg = new RegExp("@NBCSPhilly", "g");
	var wmmrReg = new RegExp("@933WMMR", "g");
	var pecoReg = new RegExp("@PECOConnect", "g");
	var wfcReg = new RegExp("@WellsFargoCtr", "g");
	var huluReg = new RegExp("@hulu", "g");
	var espnReg = new RegExp("@espn", "g");
	var espnplusReg = new RegExp("@ESPNPlus", "g");
	var tntReg = new RegExp("@NHL_On_TNT", "g");
	var maxReg = new RegExp("@SportsonMax", "g");
	var abcReg = new RegExp("@ABC", "g");
	var fanaticReg = new RegExp("@975TheFanatic", "g");
	var grittynhlReg = new RegExp("@GrittyNHL", "g");
	var eaglesReg = new RegExp("@Eagles", "g");
	var philliesReg = new RegExp("@Phillies", "g");
	var sixersReg = new RegExp("@sixers", "g");
	var unionReg = new RegExp("@PhilaUnion", "g");
	var stgReg = new RegExp("@SnowTheGoalie", "g");
	var charitiesReg = new RegExp("@FlyersCharities", "g");
	var tcenterReg = new RegExp("@FlyersTCenter", "g");
	
	var brinkReg = new RegExp ("@BobbyBrink19", "g");
	var catesReg = new RegExp("@cates_noah", "g");
	var foersterReg = new RegExp ("@tfoerster8", "g");
	var johnsonReg = new RegExp("@6ErikJohnson", "g");
	var laughtonReg = new RegExp("@Laughts21", "g");
	var myrtetusReg = new RegExp("@jasonmyrt", "g");
	var sanheimReg= new RegExp("@sanheim17", "g");
	var simmondsReg = new RegExp("@Simmonds17", "g");
	var yorkReg = new RegExp("camyork2", "g");
	var tagReg = new RegExp("<(:?[^>]+)>", "g"); // A general regex for HTML. Used to get the plaintext value of the mastodon post without tag notation.
	var invalidLinkReg = new RegExp("\\S*(\\.com|\\.ca|\\.org|\\.net)\\S*(…|\\.\\.\\.)", "g");

	var awaitTweet = await mastodon.getStatuses("109705347039296818", {'limit':limitVal}); //Use the Mastodon API to get a specified number of recent posts from the Mastodon API.
	var string = JSON.stringify(awaitTweet); // Convert the post into a JSON string.
	var objJSON = JSON.parse(string)["json"]; // Convert the JSON string back to a JSON object. Kinda silly, but it doesn't work otherwise. 
	var stringArr = []; // Initialize an empty array that we will store the regexed plaintexts in.
	var urlArr = [];
	var altTextArr = [];
	var cardArr = [];
	for (let i = 0; i < limitVal; i++) // Iterate over all the posts we collected using the Mastodon API. 
	{
		var postUrlArr = [];
		var postAltTextArr = [];
		for (let j = 0; j < 4; j++)
		{	
			if (objJSON[i]["media_attachments"][j] != undefined)
			{
				if (objJSON[i]["media_attachments"][j]["type"] == "image" || objJSON[i]["media_attachments"][j]["type"] == "gifv" || objJSON[i]["media_attachments"][j]["type"] == "video")
				{
					postUrlArr.push(objJSON[i]["media_attachments"][j]["url"]);
				}
				else
				{
					postUrlArr.push("None");
				}

				if (objJSON[i]["media_attachments"][j]["type"] == "video" || objJSON[i]["media_attachments"][j]["type"] == "gifv")
				{
					postAltTextArr.push(`${objJSON[i]["media_attachments"][j]["meta"]["original"]["width"]}@#*${objJSON[i]["media_attachments"][j]["meta"]["original"]["height"]}@#*${objJSON[i]["media_attachments"][j]["meta"]["original"]["duration"]}@#*${objJSON[i]["media_attachments"][j]["preview_url"]}`);
				}
				else if (objJSON[i]["media_attachments"][j]["description"] == null)
				{
					postAltTextArr.push("None");
				}
				else
				{
					postAltTextArr.push(objJSON[i]["media_attachments"][j]["description"]);
				}
			}
			else
			{
				postUrlArr.push("None");
				postAltTextArr.push("None");
			}
		}
		var postUrl = postUrlArr.join("!^&");
		var postAltText = postAltTextArr.join("!^&");
		urlArr.push(postUrl);
		altTextArr.push(postAltText);
		var contentJSON = objJSON[i]["content"]; // Filter through all the values of the JSON object, to get just the content of post i. 
		var contentString = JSON.stringify(contentJSON); // Convert the content of the post into a JSON string.
		contentString = contentString.slice(1,-1); // Remove the quotation marks.
		contentString = contentString.replace(twitterReg, "").replace(nhlflyersReg, "notflyers.bsky.social").replace(sportsBotsReg, "").replace(logoReg, "").replace(quoteReg, `"`).replace(andReg, "&").replace(pReg, "\n\n").replace(brReg, "\n").replace(tagReg, ""); //Use the ", &, <p>, and <br> regexes to apply appropriate formatting. Then use the general regex to remove the HTML formatting from the mastodon post. 
		contentString = contentString.replace(nbcsphillyReg, "NBCSP").replace(wmmrReg, "93.3 WMMR").replace(pecoReg, "PECO").replace(wfcReg, "Wells Fargo Center").replace(huluReg, "Hulu").replace(espnReg, "@espn.com").replace(espnplusReg, "ESPN+").replace(tntReg, "TNT").replace(maxReg, "Max").replace(abcReg, "ABC").replace(fanaticReg, "97.5 The Fanatic").replace(grittynhlReg, "Gritty").replace(eaglesReg, "@philadelphiaeagles.bsky.social").replace(philliesReg, "@phillies.com").replace(sixersReg, "@sixersnba.bsky.social").replace(unionReg, "@philadelphiaunion.com").replace(stgReg, "Snow The Goalie").replace(charitiesReg, "Flyers Charities").replace(tcenterReg, "the Flyers Training Center");
		contentString = contentString.replace(brinkReg, "Bobby Brink").replace(catesReg, "Noah Cates").replace(foersterReg, "Tyson Foerster").replace(johnsonReg, "Erik Johnson").replace(laughtonReg, "Scott Laughton").replace(myrtetusReg, "@jasonmyrt.bsky.social").replace(sanheimReg, "Travis Sanheim").replace(simmondsReg, "Wayne Simmonds");

		if (contentString.includes("RT ") || contentString.includes("Retweet ") || contentString.includes("retweet ") || contentString.includes("RETWEET "))
		{
			contentString = contentString + "\n\n (Offer not valid on Bluesky.)";
		}

		if (objJSON[i]["card"] != null)
		{
			contentString = contentString.replace(invalidLinkReg, objJSON[i]["card"]["url"]);
			var postCardArr = [];
			postCardArr.push(objJSON[i]["card"]["url"]);
			postCardArr.push(objJSON[i]["card"]["title"]);
			postCardArr.push(objJSON[i]["card"]["description"]);
			postCardArr.push(objJSON[i]["card"]["image"]);
			var postCard = postCardArr.join("!^&");
			cardArr.push(postCard);
		}
		else
		{
			cardArr.push("None");
		}
		stringArr.push(contentString); // Add the regexed content to the array of plaintexts.
	}
	//urlArr[27] = "None!^&None!^&None!^&None";
	//altTextArr[27] = "None!^&None!^&None!^&None";

	var urls = urlArr.join("@#%");
	var strings = stringArr.join("@#%"); // Turn the string array into a single string by joining them with a \/ delimiter. This will be undone when used by bot functions. 
	var alts = altTextArr.join("@#%"); 
	var cards = cardArr.join("@#%");
	var urlsStringsAltsCardsArr = [urls, strings, alts, cards];
	var urlsStringsAltsCards = urlsStringsAltsCardsArr.join("~~~");
	return urlsStringsAltsCards; // Return this singular concatenated string. 
}
