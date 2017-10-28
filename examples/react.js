'use strict'

import shareTwitter from 'share-twitter'

export default = ({ url, text }) => <a href={shareTwitter({ text, url })}>Share on Twitter</a>
