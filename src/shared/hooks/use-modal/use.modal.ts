import { useCallback, useState } from "react";
import { UseModal } from "./interfaces";

export function useModal(): UseModal {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const openModal = useCallback(() => {
        setModalIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setModalIsOpen(false);
    }, []);

    return { modalIsOpen, openModal, closeModal };
}
