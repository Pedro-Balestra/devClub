import PropTypes from "prop-types";
import { Button } from "./styles";

export function DefaultButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
