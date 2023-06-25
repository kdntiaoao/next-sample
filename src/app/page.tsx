import { SLink, SList } from './_components/styled'

export default function Home() {
  return (
    <div>
      <SList>
        <li>
          <SLink href="/style-sample/sample1">style-sample</SLink>
        </li>
        <li>
          <SLink href="/posts">posts</SLink>
        </li>
      </SList>
    </div>
  )
}
