export interface Option {
  unique: string;
  display?: string;
}

export interface OptionProps<T extends Option> {
  option: T;
  onSelect?: () => void;
}

export interface HeaderBoxProps {
  title: string;
  invertedStyle?: boolean;
}
