import { SwitcherProps } from "../interface";

import { SwitcherContainer } from "./styles";

export const Switcher = ({ active }: SwitcherProps) => {
    return (
        <SwitcherContainer active={active} className="switch-container">
            <div className="circle" />
        </SwitcherContainer>
    );
};
