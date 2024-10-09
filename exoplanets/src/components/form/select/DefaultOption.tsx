import { Option, OptionProps } from './types';

export default function DefaultOption({
  option, onSelect,
}: OptionProps<Option>) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="cursor-pointer"
    >
      <p>{option.display || option.unique}</p>
    </button>
  );
}
