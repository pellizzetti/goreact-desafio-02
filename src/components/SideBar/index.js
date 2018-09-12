import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, Form, RepositoryItem } from './styles';

export default class Sidebar extends Component {
  static propTypes = {
    handleSelectedRepository: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };

  state = {
    repositoryInput: '',
    repositories: [],
    selectedRepository: {},
    repositoryInputError: false,
  };

  handleRepositoryChange = (e) => {
    this.setState({ repositoryInput: e.target.value });
  };

  handleRepositorySubmit = async (e) => {
    e.preventDefault();

    const { repositoryInput, repositories } = this.state;

    try {
      const response = await api.get(`/repos/${repositoryInput}`);

      if (repositories.find(repository => repository.id === response.data.id)) {
        toast.warn('Repository already listed!', {
          position: toast.POSITION.TOP_CENTER,
        });

        return;
      }

      this.setState({ repositories: [...repositories, response.data] });
      this.setState({ repositoryInputError: false });
    } catch (err) {
      this.setState({ repositoryInputError: true }, () => {
        toast.error('Repository not found!', {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    }
  };

  handleSelectRepository = (repository) => {
    const { selectedRepository } = this.state;
    const { handleSelectedRepository } = this.props;

    if (repository.id === selectedRepository.id) {
      return;
    }

    this.setState({ selectedRepository: repository });

    handleSelectedRepository(repository);
  };

  render() {
    const {
      repositoryInput, repositories, selectedRepository, repositoryInputError,
    } = this.state;
    const { isOpen } = this.props;

    return (
      <Container isOpen={isOpen}>
        <Form onSubmit={this.handleRepositorySubmit} error={repositoryInputError}>
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
        <ul>
          {repositories.map(repository => (
            <RepositoryItem
              type="button"
              selected={repository.id === selectedRepository.id ? 1 : 0}
              key={repository.id}
              onClick={() => this.handleSelectRepository(repository)}
            >
              <img src={repository.owner.avatar_url} alt={repository.full_name} />
              <div>
                <strong>{repository.name}</strong>
                <span>{repository.owner.login}</span>
              </div>
              <FontAwesomeIcon icon={faAngleRight} color="#999" />
            </RepositoryItem>
          ))}
        </ul>
      </Container>
    );
  }
}
