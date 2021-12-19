import React, { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useMemo } from "react";
import Sheet, { SheetRef } from "react-modal-sheet";
import { motion } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";

import { useModal } from "../../../../../../../shared/hooks";
import { PrimaryButton } from "../../../../../../../shared/components/buttons";
import { AddEmployeeFormValues, AddEmployeeModalHandles } from "../interfaces";

import { Modal, Form } from "../../styles";
import { SelectInput, TextInput } from "../../../../../../../shared/components/inputs";
import { inputOptions } from "../config";
import { AddEmployeeController } from "../controllers";

const AddEmployeeModalComponent: ForwardRefRenderFunction<AddEmployeeModalHandles, {}> = ({}, ref): JSX.Element => {
    const modalRef = React.useRef<SheetRef>();
    const { modalIsOpen, closeModal, openModal } = useModal();
    const formMethods = useForm<AddEmployeeFormValues>({ mode: "all" });
    const addEmployeeController = useMemo(() => new AddEmployeeController(), []);
    useImperativeHandle(ref, () => {
        return {
            openModal,
        };
    });

    return (
        <FormProvider {...formMethods}>
            <Modal ref={modalRef} snapPoints={[0.7]} initialSnap={0} isOpen={modalIsOpen} onClose={closeModal}>
                <Sheet.Container>
                    <Sheet.Content>
                        <header>
                            <p>
                                <strong>Colaboradores /</strong> Adicionar
                            </p>
                        </header>
                        <FormProvider {...formMethods}>
                            <Form
                                onSubmit={formMethods.handleSubmit((data: AddEmployeeFormValues) =>
                                    addEmployeeController.add(data, closeModal)
                                )}
                            >
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
                                <SelectInput
                                    placeholder="Selecione um perfil"
                                    label="Perfil"
                                    name="profileType"
                                    options={inputOptions.profileType}
                                    register={formMethods.register}
                                />
                                <TextInput
                                    placeholder="Digite o cargo em específico"
                                    label="Cargo"
                                    name="role"
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

export const AddEmployeeModal = forwardRef(AddEmployeeModalComponent);
