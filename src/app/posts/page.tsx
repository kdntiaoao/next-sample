import Link from 'next/link'
import { PostList } from './_components/PostList'

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const sleep = (ms: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const getPostList = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(await sleep(3000))
  if (!res.ok) {
    throw new Error('Failed to get blog data')
  }
  const postList: Post[] = await res.json()
  return postList
}

export default async function PostsPage() {
  const postList = await getPostList()

  return (
    <div className="p-4">
      <div className="pb-4">
        <Link href="/">&lt; TOP</Link>
      </div>
      <PostList postList={postList} />
    </div>
  )
}
