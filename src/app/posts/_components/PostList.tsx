import Link from 'next/link'
import { Post } from '../page'

type Props = {
  postList: Post[]
}

export const PostList = ({ postList }: Props) => {
  return (
    <ul>
      {postList.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
            {post.id} : {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
