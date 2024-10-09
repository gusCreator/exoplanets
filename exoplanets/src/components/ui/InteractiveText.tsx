import { defaultColor, invertedColor } from '@/styles/colors';
import { twMerge } from 'tailwind-merge';
import { InteractiveTextProps } from './types';

export default function IntreractiveText<
  T extends React.ComponentProps<any>,
  E extends React.ComponentProps<any>,
>({
  leftGraphic: LG,
  lgProps,
  rightGraphic: RG,
  rgProps,
  invertedStyle,
  content,
  onClick,
  asButton,
  className,
}: InteractiveTextProps<T, E>) {
  const baseStyle = 'cursor-pointer flex gap-2 items-center w-fit p-2 font-exo';
  const colorStyle = invertedStyle ? invertedColor : defaultColor;
  const Comp = asButton ? 'button' : 'div';
  return (
    <Comp
      type={asButton ? 'button' : undefined}
      onClick={asButton ? onClick : undefined}
      className={twMerge(baseStyle, colorStyle, className)}
    >
      {LG && lgProps && <LG {...lgProps} />}
      {content}
      {RG && rgProps && <RG {...rgProps} />}
    </Comp>
  );
}
