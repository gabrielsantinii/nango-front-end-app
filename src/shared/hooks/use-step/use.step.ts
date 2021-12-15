import { useCallback, useState } from "react";
import { UseStep, UseStepProps } from "./interfaces";

export const useStep = ({ numberOfSteps }: UseStepProps): UseStep => {
    const [step, setStep] = useState(0);

    const nextStep = useCallback(() => {
        if (step < (numberOfSteps - 1)) {
            setStep((prevState) => prevState + 1);
        }
    }, [step, setStep, numberOfSteps]);

    const prevStep = useCallback(() => {
        setStep((prevState) => prevState - 1);
    }, [setStep]);

    return { step, nextStep, prevStep };
};
