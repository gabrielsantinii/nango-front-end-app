import React, { forwardRef, ForwardRefRenderFunction, useImperativeHandle } from "react";
import Sheet, { SheetRef } from "react-modal-sheet";
import { motion } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";

import { useModal } from "../../../../../../../shared/hooks";
import { PrimaryButton } from "../../../../../../../shared/components/buttons";
import { AddEmployeeModalHandles } from "../interfaces";

import { Modal, CloseIcon, Form } from "./styles";

const AddEmployeeModalComponent: ForwardRefRenderFunction<AddEmployeeModalHandles, {}> = ({}, ref): JSX.Element => {
    const modalRef = React.useRef<SheetRef>();
    const { modalIsOpen, closeModal, openModal } = useModal();
    const formMethods = useForm({ mode: "all" });

    useImperativeHandle(ref, () => {
        return {
            openModal,
        };
    });

    return (
        <FormProvider {...formMethods}>
            <Modal
                ref={modalRef}
                // snapPoints={window.innerHeight > 900 ? [300] : [0.8]}
                snapPoints={[0.8]}
                initialSnap={0}
                isOpen={modalIsOpen}
                onClose={closeModal}
                rootId="home-screen"
            >
                <Sheet.Container>
                    <Sheet.Content>
                        <header>
                            <p>
                                <strong>Colaboradores /</strong> Adicionar
                            </p>
                            <CloseIcon onClick={closeModal} />
                        </header>
                        <Form>
                            <PrimaryButton onClick={() => {}}>Aplicar filtro</PrimaryButton>
                        </Form>
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
