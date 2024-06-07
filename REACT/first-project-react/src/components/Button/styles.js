import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 130px;
    border-radius: 14px;
    background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.80)'};
    border: ${props => props.isBack ? '1px solid #fff' : 'none'};

    color: #FFF;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    transition: 0.5s;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }

    img{
        transform: ${props => props.isBack && 'rotateY(180deg)'};
    }

`;