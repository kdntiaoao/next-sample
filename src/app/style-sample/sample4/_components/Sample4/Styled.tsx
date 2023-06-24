import { mq } from '@/utils/mq'
import styled from '@emotion/styled'

export const Wrapper = styled.section({
  padding: '4em',
  background: '#f6ede8',
  [mq('xl')]: {
    background: 'linear-gradient(0deg, #E364C4, #3EB5C0)',
  },
})

export const Title = styled.h1({
  fontSize: '1.5em',
  textAlign: 'center',
  color: '#c5c4e8',
})
