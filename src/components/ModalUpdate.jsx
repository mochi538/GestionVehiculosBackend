import React from "react";

const ModalUpdate = ({ isVisible, onClose, children })=>{
    if (!isVisible) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-150 relative h-72">
                    <button onClick={onClose} className="absolute top-2 right-2 text-red-500">
                        &times;
                    </button>
                    {children}
                </div>
            </div> 
        </>
    )
}
export default ModalUpdate; 