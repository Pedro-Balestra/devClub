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

export const ContainerOrder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;
    width: 250px;
    
`

export const Order = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    border-radius: 14px;
    background: rgba(255, 255, 255, 0.5);

    width: 342px;
    border: none;
    outline: none;

    margin-top: 20px;

    p{
        color: #FFF;
        font-size: 20px;
        font-style: normal;
        line-height: normal;
        
        font-size: 18px;
        font-weight: 300;
    }

    button{
        background: none ;
        border: none;
        cursor: pointer;
    }
`
export const StyledP = styled.div`
    font-weight: 700;
`