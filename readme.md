# share-twitter [![Build Status](https://travis-ci.org/bukinoshita/share-twitter.svg?branch=master)](https://travis-ci.org/bukinoshita/share-twitter)

> Create a Twitter share url with ease


## Install

```bash
$ yarn add share-twitter
```


## Usage

```js
const shareTwitter = require('share-twitter')

shareTwitter({
  text: 'Check this library to help you create share twitter url',
  url: 'https://github.com/bukinoshita/share-twitter'
})
// https://twitter.com/intent/tweet?text=Check%20this%20library%20to%20help%20you%20create%20share%20twitter%20url&url=https://github.com/bukinoshita/share-twitter
```

_When add the `url` to a `<a/>` tag it should work like [this](https://twitter.com/intent/tweet?text=Check%20this%20library%20to%20help%20you%20create%20share%20twitter%20url&url=https://github.com/bukinoshita/share-twitter)_


## Examples

Check the [examples](https://github.com/bukinoshita/share-twitter/blob/master/examples)


## API

### shareTwitter([options])

Returns a `string`

#### text

Type: `string`<br/>
Example: `Hello%20World`

Pre-populated UTF-8 and URL-encoded Tweet text. The passed text will appear pre-selected for a Twitter user to delete or edit before posting. The length of your passed Tweet text should not exceed 140 characters when combined with any passed hashtags, via, or url parameters. Passed Tweet text which causes the Tweet to exceed 140 characters in length will require additional editing by a Twitter user before he or she can successfully post.

#### url

Type: `string`<br/>
Example: `https://bukinoshita.io`

A fully-qualified URL with a HTTP or HTTPS scheme, URL-encoded. The provided URL will be shortened by Twitter’s t.co to the number of characters specified by short_url_length.

#### hashtags

Type: `string`<br/>
Example: `nature,sunset`

Allow easy discovery of Tweets by topic by including a comma-separated list of hashtag values without the preceding `#` character.

#### via

Type: `string`<br/>
Example: `bukinoshita`

A Twitter username to associate with the Tweet, such as your site’s Twitter account. The provided username will be appended to the end of the Tweet with the text “via @username”. A logged-out Twitter user will be encouraged to sign-in or join Twitter to engage with the via account’s Tweets. The account may be suggested as an account to follow after the user posts a Tweet.

#### related

Type: `string`<br/>
Example: `javascript`

Suggest additional Twitter usernames related to the Tweet as comma-separated values. Twitter may suggest these accounts to follow after the user posts their Tweet. You may provide a brief description of how the account relates to the Tweet with a URL-encoded comma and text after the username.

#### replyTo

Type: `string`<br/>
Example: `525001166233403393`

The Tweet ID of a parent Tweet in a conversation, such as the initial Tweet from your site or author account.


## Related

- [share-facebook](https://github.com/bukinoshita/share-facebook) — Create a Facebook share url with ease


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
