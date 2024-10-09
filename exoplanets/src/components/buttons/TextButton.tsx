import { defaultColor, invertedColor } from '@/styles/colors';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

export interface TextButtonProps {
  leftIcon?: IconType;
  rightIcon?: IconType;
  invertedStyle?: boolean;
  content: string;
  onClick?: () => void;
  className?: string;
}

export default function TextButton({
  leftIcon: LeftIcon, rightIcon: RightIcon, invertedStyle, content, onClick, className,
}: TextButtonProps) {
  const baseStyle = 'cursor-pointer flex gap-2 items-center w-fit p-2 font-exo';
  const colorStyle = invertedStyle ? invertedColor : defaultColor;
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(baseStyle, colorStyle, className)}
    >
      {LeftIcon && <LeftIcon />}
      {content}
      {RightIcon && <RightIcon />}
    </button>
  );
}

export interface ButtonProps<
  T extends { [key: string]: any },
  E extends { [key: string]: any } = T,
> {
  leftGraphic?: React.ComponentType<T>;
  lgProps?: T;
  rightGraphic?: React.ComponentType<E>;
  rgProps?: E;
  invertedStyle?: boolean;
  content: string;
  onClick?: () => void;
  className?: string;
}

export function Button<
  T extends { [key: string]: any },
  E extends { [key: string]: any } = T,
>({
  leftGraphic: LG, lgProps, rightGraphic: RG, rgProps, invertedStyle, content, onClick, className,
}: ButtonProps<T, E>) {
  const baseStyle = 'cursor-pointer flex gap-2 items-center w-fit p-2 font-exo';
  const colorStyle = invertedStyle ? invertedColor : defaultColor;
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(baseStyle, colorStyle, className)}
    >
      {LG && lgProps && <LG {...lgProps} />}
      {content}
      {RG && rgProps && <RG {...rgProps} />}
    </button>
  );
}
