import {Input} from 'antd';
import {FC} from 'react';
import styled from 'styled-components';

/**
 * @prop {number} value Amount of rows.
 */
interface IProps {
  value: number;
}

/**
 * Selected table rows counter.
 */
export const Counter: FC<IProps> = ({value}) => <StyledInput value={value} disabled />;

const StyledInput = styled(Input)<IProps>`
  width: 32px;
  cursor: default !important;
`;
