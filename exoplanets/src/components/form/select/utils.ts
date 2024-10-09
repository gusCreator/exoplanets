import React, { ReactNode } from 'react';
import { Option, OptionProps } from './types';

export const isOptionElement = <T extends Option>(child: ReactNode): child is React.ReactElement<OptionProps<T>> => React.isValidElement(child) && 'option' in child.props;
