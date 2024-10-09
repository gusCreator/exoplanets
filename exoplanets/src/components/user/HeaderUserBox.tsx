import { defaultColor, invertedColor } from '@/styles/colors';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { HeaderBoxProps } from '../form/select/types';

export interface HeaderUserBoxProps extends HeaderBoxProps {
  image: string;
  className?: string;
}

export default function HeaderUserBox({
  image, title, invertedStyle, className,
}: HeaderUserBoxProps) {
  const baseStyle = 'cursor-pointer flex gap-2 justify-center items-center w-fit p-2 font-exo';
  const colorStyle = invertedStyle ? invertedColor : defaultColor;
  return (
    <div
      className={twMerge(baseStyle, colorStyle, className)}
    >
      <Image
        src={image}
        width={20}
        height={20}
        alt={title}
        className="rounded-full"
      />
      {title}
    </div>
  );
}
