import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';

import { Container, Form, RepositoriesList } from './styles';

export default class Sidebar extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    selectedRepository: {},
  }

  handleRepositoryChange = (e) => {
    this.setState({ repositoryInput: e.target.value });
  }

  handleRepositorySubmit = async (e) => {
    e.preventDefault();

    const { repositoryInput, repositories } = this.state;
    const response = await api.get(`/repos/${repositoryInput}`);

    this.setState({ repositories: [...repositories, response.data] });
  }

  handleSelectRepository = (repository) => {
    this.setState({ selectedRepository: repository });

    const { handleSelectedRepository } = this.props;

    handleSelectedRepository(repository);
  };

  render() {
    const { repositoryInput, repositories, selectedRepository } = this.state;
    const { isOpen } = this.props;

    return (
      <Container isOpen={isOpen}>
        <Form onSubmit={this.handleRepositorySubmit}>
          <input
            type="text"
            placeholder="user/repository"
            value={repositoryInput}
            onChange={this.handleRepositoryChange}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faPlusCircle} color="#FFF" />
          </button>
        </Form>
        <RepositoriesList>
          {repositories.map(repository => (
            <button
              type="button"
              selected={repository.id === selectedRepository.id ? 1 : 0}
              key={repository.id}
              onClick={() => this.handleSelectRepository(repository)}
            >
              <img src={repository.owner.avatar_url} alt={repository.full_name} />
              <div>
                <strong>
                  {repository.name}
                </strong>
                <span>
                  {repository.owner.login}
                </span>
              </div>
              <FontAwesomeIcon icon={faAngleRight} color="#999" />
            </button>
          ))}
        </RepositoriesList>
      </Container>
    );
  }
}
