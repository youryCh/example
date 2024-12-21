import {IconChevronLeft, IconChevronRight} from '@tabler/icons-react';
import {Button, Form, Typography} from 'antd';
import debounce from 'lodash/debounce';
import {FC, useEffect} from 'react';
import {useForm} from 'react-hook-form';

import {NumberInputContainer} from '@/components/containers/NumberInputContainer';
import {InputField} from '@/components/inputs/InputField';
import {ICON_SIZE} from '@/constants/common';
import {PAGINATION_TEXT} from '@/constants/typography';
import {getPagesCount} from '@/shared/utils';
import {IPagination} from '@/types/common';

/**
 * @prop {IPagination} pagination Pagination parameters.
 * @prop {string} [className] CSS class.
 * @prop {boolean} [disabled] Disable interaction flag.
 * @prop {(page: number) => void} onPageChange Change page handler.
 * @prop {(size: number) => void} onSizeChange List size handler.
 */
interface IProps {
  pagination: IPagination;
  className?: string;
  disabled?: boolean;
  onPageChange: (page: number) => void;
  onSizeChange: (size: number) => void;
}

/**
 * Pagination component.
 */
export const Pagination: FC<IProps> = ({className, disabled = false, onPageChange, onSizeChange, pagination}) => {
  const {hasNextPage, size, totalCount} = pagination;

  const page = pagination.page + 1;
  const actualSize = totalCount < size ? totalCount : size;

  const methods = useForm({
    defaultValues: {
      page,
      size: actualSize
    },
    mode: 'onChange'
  });

  const pagesCount = getPagesCount(page, size, totalCount);
  const hasPrevPage = page !== 1;
  const isPageChangeDisabled = pagesCount <= 1 || disabled;
  const isSizeChangeDisabled = totalCount <= 1 || disabled;

  const handlePageChange = (inputPage: number) => {
    onPageChange(inputPage - 1);
  };

  const handleSizeChange = (inputSize: number) => {
    onSizeChange(Number(inputSize));
  };

  const handleSubmit = (values: {page: number; size: number}) => {
    if (values.page < 1 || values.size < 1) return;

    handlePageChange(values.page);
    handleSizeChange(values.size);
  };

  const handleBackward = () => {
    onPageChange(page - 2);
  };

  const handleForward = () => {
    onPageChange(page);
  };

  useEffect(() => {
    methods.setValue('size', actualSize);
    methods.setValue('page', page);
  }, [methods, pagination, page, actualSize]);

  return (
    <Form
      tw="flex w-full flex-row justify-between"
      className={className}
      layout="horizontal"
      onChange={methods.handleSubmit(debounce(handleSubmit, 400))}
    >
      <div tw="flex space-x-2">
        <Typography.Text tw="mt-1">{PAGINATION_TEXT.page}</Typography.Text>

        <NumberInputContainer>
          <InputField
            tw="w-10"
            type="number"
            fieldName="page"
            control={methods.control}
            isDisabled={isPageChangeDisabled}
          />
        </NumberInputContainer>

        <Typography.Text tw="mt-1">{`of ${pagesCount}`}</Typography.Text>
      </div>

      <div tw="flex justify-center space-x-2">
        <Button
          type="text"
          icon={<IconChevronLeft size={ICON_SIZE.md} />}
          disabled={!hasPrevPage || disabled}
          onClick={handleBackward}
        />

        <Button
          type="text"
          icon={<IconChevronRight size={ICON_SIZE.md} />}
          disabled={!hasNextPage || disabled}
          onClick={handleForward}
        />
      </div>

      <div tw="flex flex-row space-x-2">
        <Typography.Text tw="mt-1">{PAGINATION_TEXT.itemsPerPage}</Typography.Text>

        <NumberInputContainer>
          <InputField
            tw="w-10"
            type="number"
            fieldName="size"
            control={methods.control}
            isDisabled={isSizeChangeDisabled}
          />
        </NumberInputContainer>

        <Typography.Text tw="mt-1">{`of ${totalCount}`}</Typography.Text>
      </div>
    </Form>
  );
};
