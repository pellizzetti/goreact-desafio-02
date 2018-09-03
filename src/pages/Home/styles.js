import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 64px;
  padding-left: 20px;
  background-color: #38d;
`;

export const Content = styled(Container)`
  padding: 20px;
`;
