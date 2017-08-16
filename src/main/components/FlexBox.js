import styled from "styled-components";

export const GridLayout = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 75%
    padding-left : 12.5%;
    padding-right: 12.5%
    align: center;
    ${props => props.mixin && props.mixin.cssStyles}
`;

export const GridBox = styled.div`
     width: 33%;
     min-width: 360px;
     height: 33%;
     min-height: 360px;
  ${props => props.mixin && props.mixin.cssStyles};
`;
