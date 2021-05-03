import styled from 'styled-components'
import React, { useState } from 'react'
import { ReactComponent as EmailIcon } from './images/svg/mail.svg'
import { ReactComponent as BellIcon } from './images/svg/bell.svg'
import { Container } from './components/Layout'
import List from './components/List'

const App = () => {
  const [showList, setShowList] = useState(false)

  return (
    <Container>
      <HeroContainer className="App">
        <p>Realhub React Test</p>
        <Box>
          <Nav>
            <Header>
              <RowDiv>
                <ShareButton>
                  <IconWrapper>
                    <Icon>
                      <EmailIcon />
                    </Icon>
                    <Flex>Share Proof</Flex>
                  </IconWrapper>
                </ShareButton>
              </RowDiv>
              <RowDiv>
                <MinusButton>
                  <strong>-</strong>
                </MinusButton>
                <Input defaultValue="150%" type="text" />
                <PlusButton>
                  <strong>+</strong>
                </PlusButton>
              </RowDiv>
              <RowDiv>
                <Notifications onClick={() => setShowList(!showList)}>
                  <BellIcon />
                </Notifications>
                {showList && <List />}
              </RowDiv>
            </Header>
          </Nav>
        </Box>
      </HeroContainer>
    </Container>
  )
}

// I wanted to use styled components since I saw that you use them on your website.

const HeroContainer = styled.div`
  background: var(--white);
  padding: 1rem 0;
  margin-bottom: 3rem;
  margin-top: 1em;
  border-width: 1px;
  font-size: 20px;
  word-spacing: 2px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
`
const Nav = styled.div`
  border: 1px solid #d8d9d9;
`
const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
  margin-right: 2px;
  margin-left: 2px;
  margin-bottom: 3px;
`
const RowDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
const Box = styled.div`
  background-color: white;
  width: 323px;
  height: 280px;
  border: 1px solid #8c8c8e;
`
const ShareButton = styled.button`
  height: 2rem;
  width: 7rem;
  border-radius: 4px;
  border-width: 1px;
  background-color: white;
  border: 0.5px solid #d8d9d9;
  color: #404041;
`
const MinusButton = styled.button`
  height: 2rem;
  width: 2rem;
  margin-left: 0.3rem;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border: 0.5px solid #d8d9d9;
  color: #404041;
  background-color: white;
`
const Input = styled.input`
  text-align: center;
  width: 5rem;
  border-width: 0.5px;
  border-left: none;
  border-right: none;
  border-radius: 0px;
  color: #404041;
  border: 0.5px solid #d8d9d9;
`
const PlusButton = styled.button`
  height: 2rem;
  width: 2rem;
  border-width: 0.5px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border: 0.5px solid #d8d9d9;
  color: #404041;
  background-color: white;
`
const Notifications = styled.button`
  height: 2rem;
  width: 3rem;
  border-radius: 4px;
  border: 0.5px solid #d8d9d9;
  border-width: 0.5px;
  margin-left: 0.3rem;
  background-color: white;
`
const Icon = styled.div`
  width: 15px;
  margin-top: 2px;
  padding-right: 5px;
`
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`

export default App
