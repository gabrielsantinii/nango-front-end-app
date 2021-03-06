import { Container, Circle, LineWrapper } from "./styles";

export function Stepper({ numberOfSteps = 0, currentStep = 0 }) {
    const stepList = Array.from({ length: numberOfSteps });
    return (
        <Container>
            {stepList.map((_, i) => {
                return (
                    <>
                        <Circle index={i} current={currentStep} key={i} numberOfSteps={numberOfSteps}>
                            {i + 1}
                        </Circle>
                        {i !== stepList.length - 1 && (
                            <LineWrapper index={i} key={i*7 + 10} current={currentStep} numberOfSteps={numberOfSteps}>
                                <div className="firstLine" />
                                <div className="lastLine" />
                            </LineWrapper>
                        )}
                    </>
                );
            })}
        </Container>
    );
}
