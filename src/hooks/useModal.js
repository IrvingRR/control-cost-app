import { useState } from "react";

export const useModal = (initialState = false) => {

    const [isModalOpen, setIsModalOpen] = useState(initialState);

    const handleOpenModal = () => setIsModalOpen(true);

    const handleCloseModal = () => setIsModalOpen(false);
    
    const handleToggleModal = () => setIsModalOpen(isModalOpen);

    return {
        isModalOpen,
        handleOpenModal,
        handleCloseModal,
        handleToggleModal
    };

};