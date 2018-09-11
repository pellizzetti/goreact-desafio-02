import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { Container, Header, Content } from './styles';

import SideBar from '../../components/SideBar';

export default class Home extends Component {
  state = {
    selectedRepository: null,
    isSideBarOpen: true,
  }

  handleSelectedRepository = (repository) => {
    this.setState({ selectedRepository: repository });
  }

  handleSideBarStatus = () => {
    const { isSideBarOpen } = this.state;
    const sideBarOpen = !isSideBarOpen;
    this.setState({ isSideBarOpen: sideBarOpen });
  }

  render() {
    const { selectedRepository, isSideBarOpen } = this.state;

    return (
      <Fragment>
        <SideBar
          handleSelectedRepository={this.handleSelectedRepository}
          isOpen={isSideBarOpen}
        />
        <Container>
          <Header>
            <FontAwesomeIcon
              icon={isSideBarOpen ? faAngleLeft : faAngleRight}
              color="#999"
              onClick={this.handleSideBarStatus}
            />
            {selectedRepository && (
              <Fragment>
                <img src={selectedRepository.owner.avatar_url} alt={selectedRepository.full_name} />
                <div>
                  <strong>
                    {selectedRepository.name}
                  </strong>
                  <span>
                    {selectedRepository.owner.login}
                  </span>
                </div>
                <select>
                  <option value="Abertas">Abertas</option>
                </select>
              </Fragment>
            )}
          </Header>
          <Content>
            <h1>Content</h1>
          </Content>
        </Container>
      </Fragment>
    );
  }
}
