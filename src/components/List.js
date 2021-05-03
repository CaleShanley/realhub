import React from 'react'
import data from '../comment_data.json'
import ListItem from './ListItem'
import styled from 'styled-components'

const List = () => {
  console.log(data)
  return (
    <Wrapper>
      {data.map((comment) => (
        <ListItem key={comment.id} comment={comment} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  top: 139px;
  margin-left: -16.1rem;
  position: absolute;
  width: 300px;
  height: 240px;
  overflow: scroll;
  /* border: 0.1px solid #d8d9d9; */
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export default List
