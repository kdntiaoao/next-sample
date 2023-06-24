'use client'

import styled from '@emotion/styled'

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Title = styled.h1({
  fontSize: '1.5em',
  textAlign: 'center',
  color: '#bf4f74',
})

export default function Sample1Page() {
  return (
    <div>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
    </div>
  )
}
