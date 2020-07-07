type Props = {
  text?: string
  url?: string
  hashtags?: string
  via?: string
  related?: string
  replyTo?: string
}

const treat = (str: string, { replace = '' } = {}) => str.split(' ').join(replace)

export const shareTwitterURL = ({ text, url, hashtags, via, related, replyTo }: Props) => {
  const baseURL = 'https://twitter.com/intent/tweet'
  const hasText = text && `text=${treat(text, { replace: '%20' })}`
  const hasUrl = url && `url=${url}`
  const hasHashtags = hashtags && `hashtags=${treat(hashtags)}`
  const hasVia = via && `via=${via}`
  const hasRelated = related && `related=${related}`
  const hasReplyTo = replyTo && `in-reply-to=${replyTo}`
  const arr = [hasText, hasUrl, hasHashtags, hasVia, hasRelated, hasReplyTo]
  const filtering = arr.filter(Boolean)
  const queries = filtering.join('&')

  return `${baseURL}?${queries}`
}
