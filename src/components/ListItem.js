import React, { useState } from 'react'
import styled from 'styled-components'

const ListItem = ({ comment }) => {
  const [acknowledged, setAcknowledged] = useState(comment.acknowledged)

  return (
    <ListContainer
      // Each comment I noticed a had "acknowledged" in the data. so i attached a onClick function to change the result from with true or false once clicked.
      onClick={() => setAcknowledged(!acknowledged)}
      acknowledged={acknowledged}>
      <Wrapper>
        {/* I was couldn't figure out how to set the svg as blue when there are new notifications*/}
        <ImageDiv>
          <Image src={comment.user.image.original_url} alt="" />
        </ImageDiv>

        <TextDiv>
          <Names>
            {comment.user.first_name} {comment.user.last_name}
          </Names>
          <Comment>{comment.body}</Comment>
          <Date>{comment.dates.created.date_time}</Date>
        </TextDiv>
      </Wrapper>
    </ListContainer>
  )
}

const ListContainer = styled.div`
  cursor: pointer;
  width: 300px;
  color: ${(props) => (props.acknowledged ? 'green' : 'red')};
  background-image: linear-gradient(
    to right,
    #d8d9d9 40%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-right: 1px solid #d8d9d9;
`
const ImageDiv = styled.div`
  display: flex;
  border-left: 1px solid #d8d9d9;
`
const TextDiv = styled.div`
  margin-right: 10px;
`
const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 5px;
  margin-top: 1rem;
`
const Names = styled.p`
  font-size: 13px;
  color: #02b7e2;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
`
const Comment = styled.p`
  font-size: 12px;
  color: #404041;
  margin: 0;
  padding: 0;
`
const Date = styled.p`
  font-size: 11px;
  color: #8c8c8e;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
`
export default ListItem
