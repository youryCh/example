import {Form, Input} from 'antd';
import {FieldValues, useController} from 'react-hook-form';

import {EMPTY_CHAR} from '@/constants/typography';
import {TInputFieldProps} from '@/types/input';

/**
 * Ant input with setup form controller.
 */
export const InputField = <TControl extends FieldValues>({
  className,
  control,
  fieldName,
  label,
  rules,
  style,
  tooltip,
  ...restProps
}: TInputFieldProps<TControl>) => {
  const {field, fieldState} = useController({
    name: fieldName,
    control,
    rules
  });

  return (
    <Form.Item
      className={className}
      style={style}
      label={label}
      help={fieldState.error?.message}
      tooltip={tooltip}
      required={!!rules?.required}
    >
      <Input
        {...restProps}
        {...field}
        value={field.value ?? EMPTY_CHAR}
        status={fieldState.invalid && 'error'}
      />
    </Form.Item>
  );
};
