import { ReactComponent as BellIcon } from '../images/svg/bell.svg'
import List from './List'
import React, { useState } from 'react'
import styled from 'styled-components'

const Bell = () => {
  const [showList, setShowList] = useState(false)

  return (
    <div>
      {/* Bellsvg is an actual React component */}
      <RowDiv>
        <Notifications>
          <BellIcon />
          <BellIcon />
        </Notifications>
        {showList && <List />}
      </RowDiv>
    </div>
  )
}

const Notifications = styled.button`
  height: 2rem;
  width: 3rem;
  border-radius: 4px;
  border: 0.5px solid #d8d9d9;
  border-width: 0.5px;
  margin-left: 0.3rem;
  background-color: white;
`
const RowDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
export default Bell
