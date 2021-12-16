import { AuthPageContainer } from "../../../components/auth-page-container";
import { TextInput, SelectInput } from "../../../../shared/components/inputs";
import { PrimaryButton } from "../../../../shared/components/buttons";
import { Stepper } from "../components";

import { useStep } from "../../../../shared/hooks/use-step/use.step";
import { inputOptions, textByStep } from "../config";

import { SignupForm } from "./styles";
import { ContentSection, SectionTitle, SectionDescription } from "../../../shared/styles";

const numberOfSteps = 3;
export function SignupPageLayout(): JSX.Element {
    const { step, nextStep } = useStep({ numberOfSteps });
    return (
        <AuthPageContainer>
            <Stepper currentStep={step} numberOfSteps={numberOfSteps} />
            <ContentSection>
                <SectionTitle>{textByStep[step].title}</SectionTitle>
                <SectionDescription>{textByStep[step].description}</SectionDescription>
                <SignupForm>
                    {step === 0 && (
                        <>
                            <TextInput label="Nome da instituição" name="institutionName" register={() => {}} />
                            <SelectInput
                                label="Categorias"
                                name="categories"
                                register={() => {}}
                                isMulti
                                options={inputOptions.categories}
                            />
                            <TextInput label="Site" name="website" register={() => {}} />
                        </>
                    )}
                    {step === 1 && (
                        <>
                            <TextInput label="CEP" name="postalCode" register={() => {}} />
                            <TextInput label="Rua" name="street" register={() => {}} />
                            <TextInput label="Bairro" name="neighborhood" register={() => {}} />
                            <TextInput label="Cidade" name="city" register={() => {}} />
                            <TextInput label="state" name="state" register={() => {}} />
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <SelectInput
                                label="Número de funcionários"
                                name="numberOfEmployees"
                                register={() => {}}
                                options={inputOptions.numberOfEmployees}
                            />
                            <SelectInput
                                label="Número de alunos"
                                name="numberOfStudents"
                                register={() => {}}
                                options={inputOptions.numberOfStudents}
                            />
                            <TextInput label="Nome para contato" name="contactName" register={() => {}} />
                            <TextInput
                                label="E-mail para contato"
                                name="contactEmail"
                                register={() => {}}
                                helpMessage="Este e-mail será registrado como administrador da instituição."
                            />
                            <TextInput label="Telefone para contato" name="contactPhone" register={() => {}} />
                        </>
                    )}

                    <PrimaryButton className="next-button" onClick={nextStep} type="button">
                        {step === numberOfSteps - 1 ? "Registrar" : "Seguir"}
                    </PrimaryButton>
                </SignupForm>
            </ContentSection>
        </AuthPageContainer>
    );
}
