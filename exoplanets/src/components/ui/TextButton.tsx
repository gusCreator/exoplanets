import { defaultColor, invertedColor } from '@/styles/colors';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface TextButtonProps {
  leftIcon?: IconType,
  rightIcon?: IconType,
  invertedStyle?: boolean
  content: string,
  className?: string,
}

export default function TextButton({
  leftIcon: LeftIcon, rightIcon: RightIcon, invertedStyle, content, className,
}: TextButtonProps) {
  const baseStyle = 'cursor-pointer flex gap-2 justify-center items-center w-fit p-1 font-exo';
  const colorStyle = invertedStyle ? invertedColor : defaultColor;
  return (
    <div
      className={twMerge(baseStyle, colorStyle, className)}
    >
      {LeftIcon && <LeftIcon />}
      <span>
        {content}
      </span>
      {RightIcon && <RightIcon />}
    </div>
  );
}
