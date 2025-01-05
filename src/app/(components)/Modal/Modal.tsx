import { IconX } from "@tabler/icons-react";
import { ModalProps } from "@/app/lib/definitions";

export default function Modal({ title, isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[700px] max-w-full transition-all">
        <div className="flex justify-between items-end border-b p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-600 focus:outline-none"
          >
            <IconX className="h-6 w-6" />
          </button>
        </div>
        <div className="px-4 my-4">{children}</div>
      </div>
    </div>
  );
}
