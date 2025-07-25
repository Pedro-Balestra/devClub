import PropTypes from "prop-types";
import { Button } from "./styles";

export function DefaultButton({ children, theme, ...props }) {
  return <Button {...props} theme={theme}>{children}</Button>;
}

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};
