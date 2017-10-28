'use strict'

import test from 'ava'
import m from '.'

test(t => {
  const result = m({
    text: 'share twitter',
    url: 'https://bukinoshita.io',
    hashtags: 'js, share, twitter',
    via: 'bukinoshita',
    related: 'twitter',
    replyTo: '525001166233403393'
  })

  t.true(result.includes('text=share%20twitter'))
  t.true(result.includes('url=https://bukinoshita.io'))
  t.true(result.includes('hashtags=js,share,twitter'))
  t.true(result.includes('via=bukinoshita'))
  t.true(result.includes('related=twitter'))
  t.true(result.includes('in-reply-to=525001166233403393'))
})
