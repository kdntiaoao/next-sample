import styled from '@emotion/styled'
import { SBaseTitle } from '@/app/style-sample/_components/styled'
import { mq } from '@/utils/mq'

export const SWrapper = styled.section({
  padding: '4em',
  background: '#f6ede8',
  [mq('xl')]: {
    background: 'linear-gradient(0deg, #E364C4, #3EB5C0)',
  },
})

export const STitle = styled(SBaseTitle)({
  color: '#fff',
})
