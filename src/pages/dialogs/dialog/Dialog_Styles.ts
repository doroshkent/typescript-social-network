import styled, { css } from "styled-components";

const Dialog = styled.div``

const Header = styled.header`
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

const Content = styled.div``

const List = styled.ul`
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

const SendMessageArea = styled.div`
  display: inline-block;
  position: relative;
  width: 94%;
  
  textarea {
    border: 1px solid #eaeaea;
    border-radius: 50px;
    box-sizing: content-box;
    display: inline-block;
    overflow: hidden;
    padding: 10px 70px 10px 10px;
    resize: none;
    vertical-align: middle;
    width: 95%;
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
  Dialog,
  Header,
  Content,
  List,
  Message,
  SendMessageArea,
}
