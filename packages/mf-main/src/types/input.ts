import {InputRef} from 'antd';
import {LabelTooltipType} from 'antd/es/form/FormItemLabel';
import {CSSProperties, InputHTMLAttributes, ReactNode, RefAttributes} from 'react';
import {FieldValues, UseControllerProps} from 'react-hook-form';

/**
 * Common input models.
 */
export namespace NInput {
  type THtmlProps = InputHTMLAttributes<HTMLInputElement>;

  interface ICommonProps extends RefAttributes<InputRef> {
    allowClear?: boolean;
    className?: string;
    isDisabled?: boolean;
    style?: CSSProperties;
  }

  export type TProps = Omit<THtmlProps, 'size'> & ICommonProps & {};
}

/**
 * RHF input field props.
 */
export type TInputFieldProps<TControl extends FieldValues> = NInput.TProps &
  Omit<UseControllerProps<TControl>, 'name'> &
  {
    fieldName: UseControllerProps<TControl>['name'];
    label?: ReactNode;
    tooltip?: LabelTooltipType;
    isReadOnly?: boolean;
    onClick?: (e: MouseEvent) => void;
    onChange?: (value: string) => void;
  };
