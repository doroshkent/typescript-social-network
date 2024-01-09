import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: "row" | "row-reverse" | "column" | "column-reverse"
  justify?: "flex-start" | "flex-end" | "space-around" | "space-between" | "space-evenly" | "center"
  align?: "flex-start" | "flex-end" | "center" | "stretch"
  wrap?: "nowrap" | "wrap" | "wrap-reverse"
  height?: string
  gap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${ props => props.direction || "row" };
  justify-content: ${ props => props.justify || "flex-start" };
  align-items: ${ props => props.align || "stretch" };
  flex-wrap: ${ props => props.wrap || "nowrap" };
  gap: ${ props => props.gap || "0px" };
  height: ${ ({ height }) => height || "100%" };
`
