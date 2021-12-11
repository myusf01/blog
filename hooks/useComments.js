import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'

export default function useComments(params) {
  const { getAccessTokenSilently } = useAuth0()

  const [text, textSet] = useState('')
  const [url, urlSet] = useState(null)
  const [comments, commentsSet] = useState([])

  const fetchComment = async () => {
    const query = new URLSearchParams({ url })
    const newUrl = `/api/comment?${query.toString()}`
    const response = await fetch(newUrl, {
      method: 'GET'
    })
    const data = await response.json()
    commentsSet(data)
  }

  useEffect(() => {
    if (!url) return
    fetchComment()
  }, [url])

  useEffect(() => {
    const url = window.location.origin + window.location.pathname
    urlSet(url)
  }, [url])

  const onSubmit = async e => {
    e.preventDefault()
    const userToken = await getAccessTokenSilently()

    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ text, userToken, url }),
      headers: { 'Content-Type': 'application/json' }
    })

    fetchComment()
    textSet('')
  }
  return [comments, onSubmit, text, textSet]
}
