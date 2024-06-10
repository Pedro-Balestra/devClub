import styled from "styled-components";

export const Button = styled.button`
    background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.5);' : '#D93856'};
    width: 342px;
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    text-align: center;
    font-size: 17px;
    font-weight: 900;
    border: none;
    margin-top: 50px;
    margin-bottom: 50px;
`