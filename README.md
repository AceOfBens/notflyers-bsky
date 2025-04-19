# Philadephia Flyers Bluesky Mirror Bot 🦋

This repository is used to build the bot that cross posts content from [@NHLFlyers](https://x.com/NHLFlyers) on X/Twitter to [@notflyers.bsky.social](https://bsky.app/profile/notflyers.bsky.social) on Bluesky by utilizing Mastodon's API to pull from the [Philadelphia Flyers mirror bot](https://mastodon.social/@NHLFlyers@sportsbots.xyz) on sportsbots.xyz.

## Credits
* [Phil Nash](https://github.com/philnash) for providing the code for building a bot that posts on its own schedule.
  * [Phil Nash's Bluesky bot template](https://github.com/philnash/bsky-bot)
* [acarters](https://github.com/acarters) for providing the code for building a bot that mirrors an X/Twitter account by pulling from existing mirror bots on Mastodon, due to the access restrictions on X's API. Most of the notes in the code that explain what each line does are from him.
* I ([Ben Ace](https://bsky.app/profile/aceofbens.com/)) cannot stress enough how much I didn't do much to this code and can't take credit for any the building of this repository, although I did create a template with an outline of how to create your own bot! I am not a developer but a [graphic designer and former content creator](https://aceofbens.com/) whose coding experience ends at tinkering with HTML and CSS on WordPress once in a while.

## FAQ

### How can I create my own?

I created a [template with instructions](https://github.com/AceOfBens/sports-mirror-bot-bsky/) on what to add or change in the [README file](https://github.com/AceOfBens/sports-mirror-bot-bsky/blob/main/README.md). 

### Does the bot post immediately when the Flyers account posts on Twitter?

No. Sometimes I change this setting, but usually the bot is scheduled to check the [Mastodon mirror bot](https://mastodon.social/@NHLFlyers@sportsbots.xyz) every 20 minutes. During busier times, like evenings (Eastern Standard/Daylight Time), which coincidentally is when the Flyers typically play and when their X/Twitter account posts the most often, this bot will check less often because Github's servers are running more repositories.

Because of this, sometimes the bot will not check for up to 3 hours and catch up on posts from an entire period/intermission or longer, so the time stamp on the Bluesky mirror post should not be used as a reference for anything other than when Github Actions ran a workflow for this bot. 

### This account liked one of my posts. Is it programmed to like posts it's mentioned in?

No, there are no instances in which this bot is programmed to like posts on Bluesky. If [@notflyers.bsky.social](https://bsky.app/profile/notflyers.bsky.social) liked your post, it was an actual human, and that actual human is [@aceofbens.com](https://bsky.app/profile/aceofbens.com) on Bluesky.

Generally, I try not to break the fourth wall on these mirror bot accounts. Even though I've taken every step to disclaim that the account is not officially affiliated with the Philadelphia Flyers in any way, it feels disingenuous to make it about me by replying to fans or (re)posting content the Flyers have not shared on their official channels.

That said, if the account is mentioned as a suggestion for someone to follow it, I appreciate that! So I like those posts to show that appreciation. Or, a few times, people have tagged this account to comment on a glitch, and I've liked those posts to let them know I'm aware of the issue and it has been or is being addressed.

### Are this account's mentions and message requests monitored?

Yes! I am actively logged into this account and try to check it at least once a day to make sure it's not broken in some way (as it has before and, unfortunately, I'm sure it will again). Currently, the DMs are closed, but I monitor the mentions (tags, replies, quotes) in case someone draws attention to an issue that way. Also, spam bots replying to random posts are becoming more of an issue lately, and I will hide their replies as I come across them.

### Can you make a bot for [insert X/Twitter account]?

If there is a mirror bot for it on Mastodon (check [@sportsbots@mastodon.social](https://www.sportsbots.xyz/), for example), then technically yes I can, but, frankly, I don't have enough email addresses to make so many new Bluesky accounts, and I can't be arsed to make more email addresses for this purpose. But if there's a team or reporter or sports media outlet that hasn't made their way to Bluesky yet, you can [try making a mirror bot yourself](https://github.com/AceOfBens/sports-mirror-bot-bsky/blob/main/README.md)!

### How can I make a Bluesky mirror bot that isn't available on sportsbots.xyz?

Great question! If there's no Mastodon mirror bot like the ones on sportsbots.xyz, then I have no idea. Like I said in the credits section at the top, I'm a graphic designer with experience as a social media manager, and the extent of my experience in coding is a few university classes in web design/building. The ***vast*** majority of this bot was built by [philnash](https://github.com/philnash) and [acarters](https://github.com/acarters). I'm sorry that I can't be of more help here :(

### How long will this bot be up for?

That depends on the NHL and the Philadelphia Flyers. There have been reports that [the NFL has told their teams not to use Bluesky](https://awfulannouncing.com/nfl/new-england-patriots-bluesky-shut-down-account.html), but this doesn't necessarily seem to be the case here as there are several domain-verified NHL accounts that are posting regularly including the [Seattle Kraken](https://bsky.app/profile/seattlekraken.com) and the [Buffalo Sabres](https://bsky.app/profile/sabres.com/), as well as a few team accounts that aren't domain-verified but are followed by the Sabres and/or Kraken and otherwise appear legit, including the [Ottawa Senators](https://bsky.app/profile/senators.bsky.social) and the [Tampa Bay Lightning](https://bsky.app/profile/tblightningnhl.bsky.social). However, many of these "active" accounts aren't cross posting everything from their X/Twitter accounts. For that reason, I'm currently unsure how active the Flyers' Bluesky account would have to be before I unplug this bot. It will probably come down to how long people find this bot useful.

As of right now, the Flyers don't appear to have made a Bluesky account. If their official account were to be domain-verified, it would likely be @philadelphiaflyers.com, as that is the link provided on their official X/Twitter account and Facebook page. Please also note that while the domain Flyers.com leads to a website about the Philadelphia Flyers, there is a disclaimer at the bottom of the homepage clarifying that it is not affiliated with the NHL team, therefore this is not the domain that the official Flyers account might eventually use.

Further, it is currently unclear how much of a priority cultivating a presence on Bluesky may be for the team. I do not know if contacting the Flyers will help push them to make an account and be active on Bluesky, and I do not recommend taking to other social media platforms to pester them, as [it's possible their social team is waiting on support from Bluesky's team](https://awfulannouncing.com/tech/bluesky-sports-top-priority-growth-spurt.html) before they begin adding the platform to their social media strategy.

### I have another question that isn't answered here. How can I contact you?

Honestly, I'm probably most reachable on Bluesky. My DMs are currently open; do not make me regret that.
