import { useState } from "react";

/**
 * 
 * @param {Boolean} initialState: Is the initial value which the modal has
 * @returns An object with every function to handle the state of the modal
 */

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