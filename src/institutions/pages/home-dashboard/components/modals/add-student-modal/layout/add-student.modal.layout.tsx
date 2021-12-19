import React, { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useMemo } from "react";
import Sheet, { SheetRef } from "react-modal-sheet";
import { motion } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";

import { useModal } from "../../../../../../../shared/hooks";
import { PrimaryButton } from "../../../../../../../shared/components/buttons";
import { AddStudentFormValues, AddStudentModalHandles } from "../interfaces";

import { Modal, Form } from "../../styles";
import { TextInput } from "../../../../../../../shared/components/inputs";
import { AddStudentController } from "../controllers";

const AddStudentModalComponent: ForwardRefRenderFunction<AddStudentModalHandles, {}> = ({}, ref): JSX.Element => {
    const modalRef = React.useRef<SheetRef>();
    const { modalIsOpen, closeModal, openModal } = useModal();
    const formMethods = useForm<AddStudentFormValues>({ mode: "all" });
    const addStudentController = useMemo(() => new AddStudentController(), []);
    useImperativeHandle(ref, () => {
        return {
            openModal,
        };
    });

    return (
        <FormProvider {...formMethods}>
            <Modal ref={modalRef} snapPoints={[0.6]} initialSnap={0} isOpen={modalIsOpen} onClose={closeModal}>
                <Sheet.Container>
                    <Sheet.Content>
                        <header>
                            <p>
                                <strong>Alunos /</strong> Adicionar
                            </p>
                        </header>
                        <FormProvider {...formMethods}>
                            <Form
                                onSubmit={formMethods.handleSubmit((data: AddStudentFormValues) =>
                                    addStudentController.add(data, closeModal)
                                )}
                            >
                                <TextInput
                                    placeholder="Digite o CPF"
                                    label="CPF"
                                    name="cpfCnpj"
                                    register={formMethods.register}
                                />
                                <TextInput
                                    placeholder="Digite o nome"
                                    label="Nome"
                                    name="firstName"
                                    register={formMethods.register}
                                />
                                <TextInput
                                    placeholder="Digite o sobrenome"
                                    label="Sobrenome"
                                    name="lastName"
                                    register={formMethods.register}
                                />
                                <TextInput
                                    placeholder="Digite o e-mail"
                                    label="E-mail"
                                    name="email"
                                    register={formMethods.register}
                                />
                                <TextInput
                                    placeholder="Digite o telefone"
                                    label="Telefone"
                                    name="phone"
                                    register={formMethods.register}
                                />
                                <PrimaryButton onClick={() => {}}>Adicionar</PrimaryButton>
                            </Form>
                        </FormProvider>
                    </Sheet.Content>
                </Sheet.Container>
                <motion.div onClick={closeModal}>
                    <Sheet.Backdrop style={{ background: "rgba(1, 1, 1, 0.8)" }} />
                </motion.div>
            </Modal>
        </FormProvider>
    );
};

export const AddStudentModal = forwardRef(AddStudentModalComponent);
