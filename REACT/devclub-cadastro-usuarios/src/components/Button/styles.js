import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) => (props.theme === "primary" ? "none" : "1px solid #ccc")};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
      : "transparent"};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  border-radius: 30px;

  &:hover {
    opacity: 0.8;
    background: ${(props) =>
      props.theme === "primary"
        ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
        : "#f0f0f0"};
    color: ${(props) => (props.theme === "primary" ? "#fff" : "#333")};
    transition: 0.3s;
  }

  &:active {
    opacity: 0.5;
  }
`;
