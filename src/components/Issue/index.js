import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import Container from './styles';

const Issue = ({ issue }) => (
  <Container>
    <img src={issue.user.avatar_url} alt={issue.user.login} />
    <div>
      <strong>{issue.title}</strong>
      <span>{issue.user.login}</span>
      <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faExternalLinkAlt} color="#FFF" />
        Open issue
      </a>
    </div>
  </Container>
);

Issue.propTypes = {
  issue: PropTypes.shape({
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
    html_url: PropTypes.string,
  }).isRequired,
};

export default Issue;
