import styled from "styled-components";

export const GridLayout = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    

    ${props => props.mixin && props.mixin.cssStyles}
`;

export const GridBox = styled.div`
     width: 33%;
     min-width: 360px;
     height: 33%;
     min-height: 360px;
  ${props => props.mixin && props.mixin.cssStyles};
`;
