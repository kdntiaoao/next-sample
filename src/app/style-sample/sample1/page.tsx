/** @jsxRuntime classic */
/** @jsx jsx */
'use client'

import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import { SBaseTitle } from '../_components/styled'

const SWrapper = styled.section({
  padding: '4em',
  background: '#ffe3e5',
})

const STitle = styled(SBaseTitle)({
  color: '#383d3d',
})

const wrapperStyles = css({
  padding: '4em',
  background: '#eddfe0',
})

const titleStyles = css({
  fontSize: '1.5em',
  textAlign: 'center',
  color: '#705c53',
})

export default function Sample2Page() {
  return (
    <div>
      <SWrapper>
        <STitle>Hello World!</STitle>
      </SWrapper>
      <div css={css(wrapperStyles)}>
        <h1 css={titleStyles}>Hello World!</h1>
      </div>
    </div>
  )
}
