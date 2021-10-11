import Styled from 'styled-components';
import Title from '../Title';

export const CustomTitle = Styled(Title)`
  color: ${(props) => props.color};
`;