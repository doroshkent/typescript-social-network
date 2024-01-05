import styled from "styled-components";

export const GridAppWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 2fr 10fr;
  grid-template-areas: "header header"
                       "nav content";
`
