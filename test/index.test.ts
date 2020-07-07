import { shareTwitterURL } from '../source'

test('create share twitter url', () => {
  const twitterURL = shareTwitterURL({
    text: 'share twitter',
    url: 'https://bukinoshita.com',
    hashtags: 'js, share, twitter',
    via: 'bukinoshita',
    related: 'twitter',
    replyTo: '525001166233403393',
  })

  expect(twitterURL.includes('text=share%20twitter')).toBe(true)
  expect(twitterURL.includes('url=https://bukinoshita.com')).toBe(true)
  expect(twitterURL.includes('hashtags=js,share,twitter')).toBe(true)
  expect(twitterURL.includes('via=bukinoshita')).toBe(true)
  expect(twitterURL.includes('related=twitter')).toBe(true)
  expect(twitterURL.includes('in-reply-to=525001166233403393')).toBe(true)
})
