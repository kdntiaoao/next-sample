'use client'

import Link from 'next/link'
import styled from '@emotion/styled'

export const SList = styled.ul({
  display: 'grid',
  gap: '1rem',
  padding: '1rem',
})

export const SLink = styled(Link)({
  display: 'inline-block',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  backgroundColor: '#14b8a8',
  color: '#042522',
})
