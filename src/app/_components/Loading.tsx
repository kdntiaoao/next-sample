/** @jsxRuntime classic */
/** @jsx jsx */
'use client'

import { jsx, css } from '@emotion/react'

type Props = {
  color?: string
}

export const Loading = ({ color = 'red' }: Props) => {
  const loadingStyles = css({
    padding: '2rem',
    fontSize: '2rem',
    color: color,
  })

  return <div css={loadingStyles}>Loading...</div>
}
