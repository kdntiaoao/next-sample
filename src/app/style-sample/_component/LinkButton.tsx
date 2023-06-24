'use client'

import styled from '@emotion/styled'
import Link from 'next/link'

export const LinkButton = styled(Link)({
  padding: '1rem 0.5rem',
  backgroundColor: '#705c53',
  color: '#f5f5f7',
  display: 'inline-block',
  '&:hover': {
    backgroundColor: '#5b473e',
  },
})
