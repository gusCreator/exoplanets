'use client';

import { twMerge } from 'tailwind-merge';
import TextButton from '../ui/TextButton';
import { Option } from '../form/select/types';

interface OptionUserProps {
  option: Option;
  onSelect?: () => void;
}

export default function OptionUser({
  option, onSelect,
}: OptionUserProps) {
  const baseStyle = 'cursor-pointer flex gap-2 p-2 font-exo w-full';
  return (
    <TextButton
      content={option.display || option.unique}
      className={twMerge(baseStyle)}
      onClick={onSelect}
    />
  );
}
