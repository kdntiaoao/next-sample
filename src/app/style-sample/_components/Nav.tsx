import { SLinkButton } from './styled'

export const Nav = () => {
  return (
    <ul className="flex gap-4 p-2 items-center">
      <li>
        <SLinkButton href="/style-sample/sample1">sample1</SLinkButton>
      </li>
      <li>
        <SLinkButton href="/style-sample/sample2">sample2</SLinkButton>
      </li>
      <li>
        <SLinkButton href="/style-sample/sample3">sample3</SLinkButton>
      </li>
    </ul>
  )
}
