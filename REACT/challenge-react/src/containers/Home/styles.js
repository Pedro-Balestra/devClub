import styled from 'styled-components'

export const Container = styled.div`
    background: black;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    gap: 25px;
`

export const Image = styled.img`
    width: 342px;
    height: 354px;
    margin-top: 11px;
`
export const InputLabel = styled.p`
    color: #eee;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    margin: 15px 0 10px 15px;

`

export const Input = styled.input`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    border: none ;
    width: 342px;
    height: 58px;
    padding-left: 15px;
`