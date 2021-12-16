import React, { ForwardRefRenderFunction } from "react";
import { ButtonHTMLAttributes } from "react";

import { Container, AddIcon } from "./styles";

const AddCircleButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>> = (
    props,
    ref
) => {
    return (
        <Container className="add-circle-button" ref={ref} {...props}>
            <AddIcon />
        </Container>
    );
};

export const AddCircleButton = React.forwardRef(AddCircleButtonComponent);
