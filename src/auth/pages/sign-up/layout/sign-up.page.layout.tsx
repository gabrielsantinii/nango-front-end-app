import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthPageContainer } from "../../../components/auth-page-container";
import { TextInput, SelectInput } from "../../../../shared/components/inputs";
import { PrimaryButton } from "../../../../shared/components/buttons";
import { Stepper } from "../components";

import { useNavigation, useStep } from "../../../../shared/hooks";
import { inputOptions, textByStep } from "../config";

import { SignupSchema } from "../schemas";
import { SignupFormValues } from "../interfaces";
import { SignupForm } from "./styles";
import { ContentSection, SectionTitle, SectionDescription } from "../../../shared/styles";

const numberOfSteps = 3;
export function SignupPageLayout(): JSX.Element {
    const navigation = useNavigation();
    const { step, nextStep } = useStep({ numberOfSteps });
    const formMethods = useForm<SignupFormValues>({
        mode: "all",
        resolver: yupResolver(SignupSchema),
        defaultValues: { address: { country: "Brasil" } },
    });
    return (
        <AuthPageContainer>
            <Stepper currentStep={step} numberOfSteps={numberOfSteps} />
            <ContentSection>
                <SectionTitle>{textByStep[step].title}</SectionTitle>
                <SectionDescription>{textByStep[step].description}</SectionDescription>
                <FormProvider {...formMethods}>
                    <SignupForm>
                        {step === 0 && (
                            <>
                                <TextInput
                                    label="Nome da instituição"
                                    name="name"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["name"]?.message}
                                />
                                <SelectInput
                                    label="Categorias"
                                    name="categories"
                                    register={formMethods.register}
                                    error={
                                        formMethods.formState.errors["categories"]?.find((c) => c.label?.message)?.label
                                            ?.message
                                    }
                                    isMulti
                                    options={inputOptions.categories}
                                />
                                <TextInput
                                    label="Site"
                                    name="website"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["website"]?.message}
                                />
                            </>
                        )}
                        {step === 1 && (
                            <>
                                <TextInput
                                    label="CEP"
                                    name="address.postalCode"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["address"]?.["postalCode"]?.message}
                                />
                                <TextInput
                                    label="Rua"
                                    name="address.street"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["address"]?.["street"]?.message}
                                />
                                <TextInput
                                    label="Bairro"
                                    name="address.neighborhood"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["address"]?.["neighborhood"]?.message}
                                />
                                <TextInput
                                    label="Cidade"
                                    name="address.city"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["address"]?.["city"]?.message}
                                />
                                <TextInput
                                    label="state"
                                    name="address.state"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["address"]?.["state"]?.message}
                                />
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <SelectInput
                                    label="Número de funcionários"
                                    name="rangeOfEmployees"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["rangeOfEmployees"]?.label?.message}
                                    options={inputOptions.rangeOfEmployees}
                                />
                                <SelectInput
                                    label="Número de alunos"
                                    name="rangeOfStudents"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["rangeOfStudents"]?.label?.message}
                                    options={inputOptions.rangeOfStudents}
                                />
                                <TextInput
                                    label="Nome para contato"
                                    name="contactPerson.name"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["contactPerson"]?.["name"]?.message}
                                />
                                <TextInput
                                    label="E-mail para contato"
                                    name="contactPerson.email"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["contactPerson"]?.["email"]?.message}
                                    helpMessage="Este e-mail será registrado como administrador da instituição."
                                />
                                <TextInput
                                    label="Telefone para contato"
                                    name="contactPerson.phone"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["contactPerson"]?.["phone"]?.message}
                                />
                            </>
                        )}

                        <PrimaryButton
                            className="next-button"
                            onClick={() => (step === numberOfSteps - 1 ? navigation.goToHomePage() : nextStep())}
                            type="button"
                        >
                            {step === numberOfSteps - 1 ? "Registrar" : "Seguir"}
                        </PrimaryButton>
                    </SignupForm>
                </FormProvider>
            </ContentSection>
        </AuthPageContainer>
    );
}
