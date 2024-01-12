import styled from "styled-components";

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

const Box = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`

const Header = styled.header`
  max-width: 687px;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding-bottom: 12px;
  display: flex;
`

const User = styled.div`
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

export const S = {
  Dialogs,
  Box,
  Header,
  User,
  Status,
}
