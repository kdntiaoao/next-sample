import { Post } from '@/app/posts/page'
import useSWR from 'swr'

const sleep = (ms: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const fetcher = async (url: string) => {
  const res = await fetch(url).then(await sleep(2000))
  if (!res.ok) {
    throw new Error('Failed to get blog data')
  }
  const postList = await res.json()
  return postList
}

export const usePostList = () => {
  const { data, error, isLoading } = useSWR<Post[]>('https://jsonplaceholder.typicode.com/posts', fetcher, {
    fallbackData: [],
    errorRetryCount: 2,
    errorRetryInterval: 1000,
  })

  return {
    postList: data,
    error: error,
    isLoading,
  }
}
