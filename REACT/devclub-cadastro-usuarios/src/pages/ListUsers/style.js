import styled from "styled-components";

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 40px 0;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 380px;
  gap: 20px;

  h3 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 3px;
  }

  p {
    color: #fff;
    font-size: 14px;
    font-weight: 200;
  }
`;
export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 30px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
export const AvatarUser = styled.img`
  height: 80px;
  padding-right: 20px;
`;
