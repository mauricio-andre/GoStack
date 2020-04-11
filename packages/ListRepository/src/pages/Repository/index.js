import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import api from '../../services/api';

import { Loading, Ownner, IssueList, Filter, Pagination } from './styles';
import Container from '../../components/Container';

class Repository extends Component {
  constructor() {
    super();
    this.state = {
      repository: {},
      issues: [],
      page: 1,
      stateIssue: 'open',
      loading: true,
    };
  }

  async componentDidMount() {
    this.searchIssues();
  }

  searchIssues = async () => {
    const { match } = this.props;
    const { stateIssue, page } = this.state;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`repos/${repoName}`),
      api.get(`repos/${repoName}/issues`, {
        params: {
          state: stateIssue,
          per_page: 5,
          page,
        },
      }),
    ]);

    this.setState({
      loading: false,
      repository: repository.data,
      issues: issues.data,
    });
  };

  handleSelectChange = async e => {
    await this.setState({
      page: 1,
      stateIssue: e.target.value,
    });
    this.searchIssues();
  };

  handlePageChange = async newPage => {
    const page = newPage < 1 ? 1 : newPage;
    await this.setState({ page });
    this.searchIssues();
  };

  render() {
    const { repository, issues, loading, stateIssue, page } = this.state;
    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <Container>
        <Ownner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Ownner>

        {(issues.length !== 0 || page !== 1) && (
          <>
            <Filter>
              <p>Filtrar issues</p>
              <select onChange={this.handleSelectChange} value={stateIssue}>
                <option value="all">Todas</option>
                <option value="open">Abertas</option>
                <option value="closed">Fechadas</option>
              </select>
            </Filter>

            <IssueList>
              {issues.map(issue => (
                <li key={String(issue.id)}>
                  <img src={issue.user.avatar_url} alt={issue.user.login} />
                  <div>
                    <strong>
                      <a href={issue.html_url}>{issue.title}</a>
                      {issue.labels.map(label => (
                        <span key={String(label.id)}>{label.name}</span>
                      ))}
                    </strong>
                    <p>{issue.user.login}</p>
                  </div>
                </li>
              ))}
            </IssueList>

            <Pagination>
              <button
                type="button"
                disabled={page === 1}
                onClick={() => {
                  this.handlePageChange(page - 1);
                }}
              >
                <FaAngleLeft color="#FFF" size={16} />
              </button>
              <p>#{page}</p>
              <button
                type="button"
                disabled={issues.length < 5}
                onClick={() => {
                  this.handlePageChange(page + 1);
                }}
              >
                <FaAngleRight color="#FFF" size={16} />
              </button>
            </Pagination>
          </>
        )}
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};

export default Repository;
