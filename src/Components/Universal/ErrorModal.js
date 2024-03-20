import React from "react";

const ErrorModal = ({ errorMessage, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4">{errorMessage}</h1>
        <h2>Please try again later</h2>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md">
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
