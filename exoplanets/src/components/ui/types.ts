type TextBaseProps = {
  invertedStyle?: boolean;
  content: string;
  className?: string;
};

interface AsButton extends TextBaseProps {
  asButton?: boolean;
  onClick?: () => void;
}

interface WithLeftGraphic<T> extends TextBaseProps {
  leftGraphic?: React.ComponentType<T>;
  lgProps?: T;
}

interface WithRightGraphic<E> extends TextBaseProps {
  rightGraphic?: React.ComponentType<E>;
  rgProps?: E;
}

export type InteractiveTextProps<T, E> = WithLeftGraphic<T>
& WithRightGraphic<E>
& AsButton;
