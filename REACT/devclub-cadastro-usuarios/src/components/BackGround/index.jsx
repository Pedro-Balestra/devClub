import { Background } from "./styles";

export function DefaultBackGround({ children, ...props }) {
  return <Background {...props}>{children}</Background>;
}
