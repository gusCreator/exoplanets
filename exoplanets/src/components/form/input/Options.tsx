import { FaXmark, FaCheck } from 'react-icons/fa6';

interface OptionsProps {
  handleSending: () => void;
  handleCancel: () => void;
}

export default function Options({
  handleCancel, handleSending,
}: OptionsProps) {
  return (
    <div
      className="flex gap-1"
    >
      <button
        type="button"
        onClick={handleSending}
        className="text-green border-[1px] rounded-sm border-transparent hover:border-green transition-colors p-0.5 hover:bg-green-dark cursor-pointer"
      >
        <FaCheck
          size={20}
        />
      </button>
      <button
        type="button"
        onClick={handleCancel}
        className="text-red border-[1px] rounded-sm border-transparent hover:border-red transition-colors p-0.5 hover:bg-red-dark cursor-pointer"
      >
        <FaXmark
          size={20}
        />
      </button>
    </div>
  );
}
