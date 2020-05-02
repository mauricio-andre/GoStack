import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Loader,
  NoItems,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

class User extends Component {
  constructor({ navigation, route }) {
    super();
    this.state = {
      stars: [],
      page: 1,
      complete: false,
      loading: true,
      refreshing: false,
    };

    navigation.setOptions({
      title: route.params.user.name,
    });
  }

  async componentDidMount() {
    await this.loadStars();
    this.setState({ loading: false });
  }

  loadStars = async () => {
    const { stars, page, complete } = this.state;
    const { route } = this.props;
    const { user } = route.params;

    if (complete) {
      return;
    }

    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page },
    });

    this.setState({
      stars: [...stars, ...response.data],
      complete: response.data.length === 0,
      page: page + 1,
    });
  };

  refreshList = async () => {
    this.setState({
      complete: false,
      refreshing: true,
      page: 1,
      stars: [],
    });

    await this.loadStars();
    this.setState({ refreshing: false });
  };

  render() {
    const { stars, loading, refreshing } = this.state;
    const { route } = this.props;
    const { user } = route.params;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <Loader color="#333" />
        ) : (
          <Stars
            data={stars}
            onEndReached={this.loadStars}
            onEndReachedThreshold={0.2}
            refreshing={refreshing}
            onRefresh={this.refreshList}
            keyExtractor={star => String(star.id)}
            ListEmptyComponent={() => {
              if (refreshing) {
                return null;
              }

              return <NoItems>Esse usuário não possui stars</NoItems>;
            }}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}

User.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.string,
        login: PropTypes.string,
        avatar: PropTypes.string,
        bio: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default User;
