import { FormProvider, useForm, useWatch } from "react-hook-form";
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
import { useMemo } from "react";
import { SignupController } from "../controllers";

const numberOfSteps = 3;
export function SignupPageLayout(): JSX.Element {
    const navigation = useNavigation();
    const { step, nextStep } = useStep({ numberOfSteps });
    const formMethods = useForm<SignupFormValues>({
        mode: "all",
        resolver: yupResolver(SignupSchema),
        defaultValues: { address: { country: "Brasil" } },
    });
    const signupController = useMemo(() => new SignupController(formMethods), []);
    const categoriesWatcher = useWatch({ control: formMethods.control, name: "categories" });
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
                                    label="Nome da instituição *"
                                    name="name"
                                    placeholder="Digite o nome da instituição"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["name"]?.message}
                                />
                                <SelectInput
                                    label="Categorias *"
                                    name="categories"
                                    register={formMethods.register}
                                    error={
                                        // @ts-expect-error
                                        formMethods.formState.errors["categories"]?.message
                                    }
                                    isMulti
                                    options={
                                        categoriesWatcher?.length && categoriesWatcher.length >= 3
                                            ? []
                                            : inputOptions.categories
                                    }
                                    placeholder="Selecione até 3 opções"
                                    noOptionsMessage="Você só pode selecionar até 3 opções"
                                />

                                <SelectInput
                                    label="Número de funcionários *"
                                    name="rangeOfEmployees"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["rangeOfEmployees"]?.label?.message}
                                    options={inputOptions.rangeOfEmployees}
                                />
                                <SelectInput
                                    label="Número de alunos *"
                                    name="rangeOfStudents"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["rangeOfStudents"]?.label?.message}
                                    options={inputOptions.rangeOfStudents}
                                />
                                <TextInput
                                    label="Site"
                                    name="website"
                                    placeholder="Digite o site da instituição"
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
                                    placeholder="Digite o CEP"
                                    error={formMethods.formState.errors["address"]?.["postalCode"]?.message}
                                />
                                <TextInput
                                    label="Rua"
                                    name="address.street"
                                    register={formMethods.register}
                                    placeholder="Digite a rua"
                                    error={formMethods.formState.errors["address"]?.["street"]?.message}
                                />
                                <TextInput
                                    label="Bairro"
                                    name="address.neighborhood"
                                    placeholder="Digite o bairro"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["address"]?.["neighborhood"]?.message}
                                />
                                <TextInput
                                    label="Cidade *"
                                    name="address.city"
                                    placeholder="Digite a cidade"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["address"]?.["city"]?.message}
                                />
                                <TextInput
                                    label="Estado *"
                                    name="address.state"
                                    placeholder="Digite o estado"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["address"]?.["state"]?.message}
                                />
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <TextInput
                                    label="Nome *"
                                    placeholder="Digite seu nome"
                                    name="contactPerson.firstName"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["contactPerson"]?.["firstName"]?.message}
                                />
                                <TextInput
                                    label="Sobrenome *"
                                    placeholder="Digite seu sobrenome"
                                    name="contactPerson.lastName"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["contactPerson"]?.["lastName"]?.message}
                                />
                                <TextInput
                                    label="Telefone *"
                                    placeholder="Digite seu telefone"
                                    name="contactPerson.phone"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["contactPerson"]?.["phone"]?.message}
                                />
                                <TextInput
                                    label="E-mail *"
                                    name="contactPerson.email"
                                    placeholder="Digite seu e-mail"
                                    register={formMethods.register}
                                    error={formMethods.formState.errors["contactPerson"]?.["email"]?.message}
                                    helpMessage="Este e-mail será registrado como administrador da instituição."
                                />

                                <TextInput
                                    label="Senha de acesso *"
                                    placeholder="Crie sua senha"
                                    name="contactPerson.pass"
                                    register={formMethods.register}
                                    type="password"
                                    error={formMethods.formState.errors["contactPerson"]?.["pass"]?.message}
                                />
                            </>
                        )}

                        <PrimaryButton
                            className="next-button"
                            onClick={() => {
                                signupController.advanceStep(step, nextStep, navigation);
                            }}
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
