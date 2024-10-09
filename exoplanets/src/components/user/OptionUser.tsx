'use client';

import { twMerge } from 'tailwind-merge';
import { Option } from '../form/select/types';
import IntreractiveText from '../ui/InteractiveText';

interface OptionUserProps {
  option: Option;
  onSelect?: () => void;
}

export default function OptionUser({
  option, onSelect,
}: OptionUserProps) {
  const baseStyle = 'cursor-pointer flex gap-2 p-2 font-exo w-full';
  return (
    <IntreractiveText
      content={option.display || option.unique}
      className={twMerge(baseStyle)}
      asButton={onSelect ? true : undefined}
      onClick={onSelect || undefined}
    />
  );
}
