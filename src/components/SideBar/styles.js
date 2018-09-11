import styled from 'styled-components';

export const Container = styled.aside`
  flex-shrink: 0;
  background-color: #FFF;
  overflow-x: hidden;
  box-shadow: 5px 0px 25px 5px rgba(0,0,0,0.1);
  z-index: 1;
  width: ${({ isOpen }) => (isOpen ? '320px' : '0')};
  padding: ${({ isOpen }) => (isOpen ? '30px' : '0')};
  transition: width 0.4s ${({ isOpen }) => (isOpen ? 'ease-out' : 'ease-in')};
`;

export const Form = styled.form`
  display: flex;
  border-bottom: 1px solid #EEE;
  padding-bottom: 18px;

  input {
    background-color: #EEE;
    height: 42px;
    border-radius: 5px;
    border: none;
    width: 210px;
    padding: 15px;
  }
  
  button {
    flex-grow: 1;
    background-color: #59EA9A;
    height: 42px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-left: 10px;
  }
`;

export const RepositoriesList = styled.div`
  button {
    display: flex;
    margin-top: 18px;
    justify-content: start;
    align-items: center;
    opacity: ${({ selected }) => (selected ? 1 : 0.5)};
    cursor: pointer;
    background: none;
    border: none;
    width: 100%;

    img {
      height: 45px;
      width: 45px;
    }

    div {
      margin-left: 10px;
      text-align: left;

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

    svg {
      margin-left: auto;
    }

    &:hover {
      opacity: 1;
    }
  }
`;
