import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    height:60px;
    width:100%;
`

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    jsutify-content:space-between;
    align-items:center;
`

const Left = styled.div`flex:1;`

const Language = styled.span`

`
const Center = styled.div`flex:1;`
const Right = styled.div`flex:1;`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>left</Left>
            <Center>center</Center>
            <Right>RIGHT</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar