import React, { Fragment } from 'react';

import { Container, Header, Content } from './styles';

import SideBar from '../../components/SideBar';

const Home = () => (
  <Fragment>
    <SideBar />
    <Container>
      <Header>
        <button type="button">Toggle</button>
        <h1>Header</h1>
      </Header>
      <Content>
        <h1>Content</h1>
      </Content>
    </Container>
  </Fragment>
);

export default Home;
