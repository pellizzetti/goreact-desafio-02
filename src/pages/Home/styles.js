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
  height: 100px;
  padding: 30px;
  background-color: #FFF;

  svg {
    width: 1.5em !important;
    height: 100%;
    cursor: pointer;
  }

  img {
    width: 45px;
    height: 45px;
    margin-left: 10px;
  }

  div {
    margin-left: 10px;
    text-align: left;
    flex: 1;

    strong {
      display: block;
      color: #333;
      font-size: 16px;
    }

    span {
      color: #666;
      font-size: 14px;
    }
  }

  select {
    border: 1px solid #DDD;
    padding: 0 15px;
    height: 42px;
    flex-grow: 0.2;
  }
`;

export const Content = styled(Container)`
  background-color: #F5F5F5;
  padding: 20px;
`;
