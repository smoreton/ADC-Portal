import styled from "styled-components";

export const Popup = styled.div`
position: fixed;
z-index: 1101;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.5);
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
${props => props.mixin && props.mixin.cssStyles}
`;
