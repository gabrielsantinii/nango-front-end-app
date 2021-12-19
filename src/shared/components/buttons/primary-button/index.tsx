import React, { ForwardRefRenderFunction } from "react";
import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

const PrimaryButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>> = (props, ref) => {
  return (
    <Container className="primary-button" ref={ref} {...props}>
      {props.children}
    </Container>
  );
};

export const PrimaryButton = React.forwardRef(PrimaryButtonComponent)

