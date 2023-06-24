import styled from '@emotion/styled'
import Link from 'next/link'
import { LinkButton } from './_component/LinkButton'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ul className="flex gap-4 p-2 items-center">
        <li>
          <LinkButton href="/style-sample/sample1">sample1</LinkButton>
        </li>
        <li>
          <LinkButton href="/style-sample/sample2">sample2</LinkButton>
        </li>
        <li>
          <LinkButton href="/style-sample/sample3">sample3</LinkButton>
        </li>
        <li>
          <LinkButton href="/style-sample/sample4">sample4</LinkButton>
        </li>
      </ul>
      {children}
    </div>
  )
}
