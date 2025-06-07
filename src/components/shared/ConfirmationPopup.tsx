import React from 'react';

interface ConfirmationPopupProps {
  imageAddress: string;
  title: string;
  message: string;
  confirmationText: string;
  confirmationIcon?: React.ReactNode;
  confirmationBackgroundColor?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  cancelText?: string;
  imageBackground?: string;
}

export const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  imageAddress,
  title,
  message,
  confirmationText,
  confirmationIcon,
  confirmationBackgroundColor = '#8B5CF6', // Default to purple-500
  onConfirm,
  onCancel,
  cancelText = 'Batalkan',
  imageBackground = 'bg-gradient-to-b from-[#A78BFA] to-[#7C3AED]', // default purple
}) => {
  return (
    <div className="w-[420px] rounded-2xl shadow-xl bg-white overflow-hidden flex flex-col">
      {/* Image section */}
      <div className={`flex items-center justify-center h-36 ${imageBackground}`}>
        <img src={imageAddress} alt="Popup Illustration" className="h-30 w-30 object-contain" />
      </div>
      {/* Content section */}
      <div className="flex flex-col items-center px-6 py-6 bg-white">
        <h2 className="text-xl font-bold text-slate-800 mb-2 text-center">{title}</h2>
        <p className="text-slate-500 text-sm text-center mb-6">{message}</p>
        <div className="flex gap-4 w-full justify-center">
          <button
            type="button"
            onClick={onCancel}
            className="text-red-500 hover:cursor-pointer font-semibold text-sm px-4 py-2 rounded-md hover:bg-red-50 transition"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={`flex items-center gap-2 hover:cursor-pointer text-white font-semibold text-sm px-4 py-2 rounded-md shadow ${confirmationBackgroundColor}`}
          >
            {confirmationIcon}
            {confirmationText}
          </button>
        </div>
      </div>
    </div>
  );
}; 