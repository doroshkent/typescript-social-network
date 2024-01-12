import styled, { css } from "styled-components";

const Dialogs = styled.section`
  background: #fafafa none repeat scroll 0 0;
  border: 1px solid #e1e8ed;
  border-radius: 5px;
  display: block;
  padding: 15px 20px 20px;
  position: relative;
  width: 100%;
  z-index: 9;
`

const MessagesBox = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`

const MessagesHeader = styled.header`
  max-width: 687px;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding-bottom: 12px;
  display: flex;
`

const UserAvatar = styled.div`
  cursor: pointer;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 85px;
  margin-bottom: 8px;
  color: #13153e;

  &.active {
    color: #088dcd;
    font-weight: 500;
  }

  img {
    border: 1px solid #aaa;
    border-radius: 100%;
    display: inline-block;
    padding: 2px;
    max-width: 40px;
    object-fit: cover;
  }

  span {
    display: block;
    font-size: 13px;
    font-weight: 700;
    margin-top: 4px;
    width: 100%;
  }
`

const Status = styled.div<{ isOnline: boolean }>`
  &::before {
    border-radius: 100%;
    content: "";
    height: 10px;
    left: 15px;
    position: absolute;
    top: 0;
    width: 10px;
    background-color: ${ props => props.isOnline ? "#7fba00" : "#bcbcbc" };
  }
`

const MessagesContent = styled.div``

const ChatHeader = styled.header`
  background: #efefef none repeat scroll 0 0;
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  position: relative;
  width: 100%;

  p {
    display: inline-block;
    font-size: 13px;
    margin-bottom: 0;
    padding-left: 20px;
    text-transform: capitalize;
  }
`

const ChatContent = styled.div``

const ChattingArea = styled.ul`
  display: inline-block;
  list-style: outside none none;
  margin-bottom: 0;
  max-height: 322px;
  overflow-x: hidden;
  padding: 40px 15px 10px 0;
  position: relative;
  width: 100%;
`

const Message = styled.li<{ isSent: boolean }>`
  display: inline-block;
  margin-bottom: 20px;
  width: 100%;
  
  ${ props => props.isSent && css<{ isSent: boolean }>`
    text-align: right;
  ` }
  
  figure {
    margin: 0 0 1rem;
    display: inline-block;
    vertical-align: top;
    float: ${props => props.isSent ? "right" : "left"};
    
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid #088dcd;
      padding: 2px;
      object-fit: cover;
    }
  }

  p {
    color: #434343;
    display: inline-block;
    font-size: 14px;
    line-height: initial;
    margin-bottom: 0;
    margin-left: 10px;
    padding: 5px 8px;
    position: relative;
    vertical-align: top;
    max-width: 55%;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
    background-color: ${ props => props.isSent ? "rgba(39,170,225,.1)" : "rgba(255,255,255,.65)" };

    ${ props => props.isSent && css<{ isSent: boolean }>`
      margin-left: 0;
      margin-right: 10px;
      text-align: left;
    ` }
  }
`

const SendMessageForm = styled.form`
  display: inline-block;
  position: relative;
  width: 94%;
  
  textarea {
    border: 1px solid #eaeaea;
    border-radius: 50px;
    box-sizing: content-box;
    color: #7f7f7f;
    display: inline-block;
    line-height: 50px;
    overflow: hidden;
    padding-left: 46px;
    resize: none;
    vertical-align: middle;
    width: 92%;
    padding-right: 50px;
  }
  
  button {
    border-radius: 100%;
    height: 40px;
    padding: 0;
    position: absolute;
    right: 13px;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    border: none;
    color: #fff;
    font-size: 20px;
    background: #088dcd;
  }
`


export const S = {
  Dialogs,
  MessagesBox,
  MessagesHeader,
  UserAvatar,
  Status,
  MessagesContent,
  ChatHeader,
  ChatContent,
  ChattingArea,
  Message,
  SendMessageForm,
}
