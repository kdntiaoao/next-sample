'use client'

import Link from 'next/link'
import { PostList } from './_components/PostList'
import { Loading } from '../_components/Loading'
import { usePostList } from '@/hooks/usePostList'

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export default function PostsPage() {
  const { postList, error, isLoading } = usePostList()

  if (isLoading) {
    return <Loading color="blue" />
  }

  if (error) {
    return <div>データの取得に失敗しました。</div>
  }

  return (
    <div className="p-4">
      <div className="pb-4">
        <Link href="/">&lt; TOP</Link>
      </div>
      <PostList postList={postList || []} />
    </div>
  )
}
