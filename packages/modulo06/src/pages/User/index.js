import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

class User extends Component {
  constructor({ navigation, route }) {
    super();
    this.state = {
      stars: [],
    };

    navigation.setOptions({
      title: route.params.user.name,
    });
  }

  async componentDidMount() {
    const { route } = this.props;
    const { user } = route.params;

    const response = await api.get(`/users/${user.login}/starred`);
    this.setState({ stars: response.data });
  }

  render() {
    const { stars } = this.state;
    return <View />;
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
      }),
    }),
  }).isRequired,
};

export default User;
