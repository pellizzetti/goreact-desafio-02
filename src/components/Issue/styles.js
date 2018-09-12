import styled from 'styled-components';

const Container = styled.li`
    margin: 20px;
    padding: 20px;
    display: flex;
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);

    img {
      height: 62px;
      width: 62px;
      border-radius: 50%;
      margin-right: 10px;
    }

    div {
      margin-left: 10px;
      text-align: left;
      flex: 1;
      max-width: 320px;

      strong {
        display: block;
        color: #333;
        font-size: 16px;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
      }

      span {
        color: #666;
        font-size: 14px;
      }

      a {
        display: block;
        background-color: #B286D1;
        border-radius: 5px;
        color: #FFF;
        font-weight: bold;
        padding: 8px;
        text-decoration: none;
        text-transform: uppercase;
        width: 160px;
        margin-top: 10px;

        svg {
          margin-right: 10px;
        }
      }
    }
`;

export default Container;
