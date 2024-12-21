import {IconSearch} from '@tabler/icons-react';
import {Input, Space, Button} from 'antd';
import {FC, ChangeEvent, useCallback, useState} from 'react';

import {ICON_SIZE} from '@/constants/common';
import {BUTTON_TEXT, EMPTY_CHAR, SEARCH_PLACEHOLDER} from '@/constants/typography';

/**
 * @prop {boolean} [disabled] Disabled flag.
 * @prop {(value: string) => void} onSearch Search handler.
 * @prop {() => void} onClear Clear field handler.
 */
interface IProps {
  disabled?: boolean;
  onSearch: (value: string) => void;
  onClear: () => void;
}

/**
 * Search component.
 */
export const Search: FC<IProps> = ({disabled = false, onClear, onSearch}) => {
  const [inputValue, setInputValue] = useState(EMPTY_CHAR);

  const changeHandler = useCallback(({target: {value}}: ChangeEvent<HTMLInputElement>) => {
    if (!value) onClear();
    else setInputValue(value);
  }, [onClear]);

  return (
    <Space.Compact>
      <Input
        tw="w-[300px]"
        placeholder={SEARCH_PLACEHOLDER}
        disabled={disabled}
        allowClear
        onChange={changeHandler}
      />

      <Button
        type="primary"
        icon={<IconSearch size={ICON_SIZE.md} />}
        disabled={disabled}
        onClick={() => onSearch(inputValue)}
      >
        {BUTTON_TEXT.searchText}
      </Button>
    </Space.Compact>
  );
};
