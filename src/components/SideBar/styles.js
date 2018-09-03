import styled from 'styled-components';

const Container = styled.div`
  flex-shrink: 0;
  background-color: #eee;
  overflow-x: hidden;
  width: ${({ open }) => (open ? '250px' : '0')};
  transition: width 0.4s ${({ open }) => (open ? 'ease-out' : 'ease-in')};
`;

export default Container;
