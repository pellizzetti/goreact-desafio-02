import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCog } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import api from '../../services/api';

import {
  Container, Header, Content, IssuesList,
} from './styles';

import SideBar from '../../components/SideBar';
import Issue from '../../components/Issue';

export default class Home extends Component {
  state = {
    selectedRepository: null,
    isSideBarOpen: true,
    isLoading: false,
    repositoryIssues: [],
    selectedFilter: 'all',
  };

  issueFilterOptions = [
    { text: 'Open', value: 'open' },
    { text: 'Closed', value: 'closed' },
    { text: 'All', value: 'all' },
  ];

  handleSelectedRepository = (repository) => {
    this.setState({ selectedRepository: repository }, this.getRepositoryIssues);
  };

  handleSideBarStatus = () => {
    const { isSideBarOpen } = this.state;
    const sideBarOpen = !isSideBarOpen;

    this.setState({ isSideBarOpen: sideBarOpen });
  };

  handleFilterChange = (e) => {
    this.setState({ selectedFilter: e.target.value }, this.getRepositoryIssues);
  };

  getRepositoryIssues = async () => {
    this.setState({ isLoading: true });

    try {
      const { selectedRepository, selectedFilter } = this.state;
      const response = await api.get(`/repos/${selectedRepository.full_name}/issues`, {
        params: { state: selectedFilter },
      });

      this.setState({ repositoryIssues: response.data });
    } catch (err) {
      toast.error('Failed to retrieve repository issues!');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const {
      selectedRepository,
      isSideBarOpen,
      repositoryIssues,
      selectedFilter,
      isLoading,
    } = this.state;

    return (
      <Fragment>
        <SideBar handleSelectedRepository={this.handleSelectedRepository} isOpen={isSideBarOpen} />
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
                  <strong>{selectedRepository.name}</strong>
                  <span>{selectedRepository.owner.login}</span>
                </div>
                <select value={selectedFilter} onChange={this.handleFilterChange}>
                  {this.issueFilterOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </Fragment>
            )}
          </Header>
          <Content>
            {isLoading && <FontAwesomeIcon icon={faCog} size="8x" color="#B286D1" spin />}
            {selectedRepository ? (
              <IssuesList>
                {repositoryIssues.map(repositoryIssue => (
                  <Issue key={repositoryIssue.id} issue={repositoryIssue} />
                ))}
              </IssuesList>
            ) : (
              <span>select a repository</span>
            )}
          </Content>
        </Container>
      </Fragment>
    );
  }
}
