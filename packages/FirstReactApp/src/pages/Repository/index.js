import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

class Repository extends Component {
  constructor({ navigation, route }) {
    super();
    this.state = {
      htmlUrl: route.params.repository.html_url,
    };

    navigation.setOptions({
      title: route.params.repository.name,
    });
  }

  render() {
    const { htmlUrl } = this.state;
    return <WebView source={{ uri: htmlUrl }} style={{ flex: 1 }} />;
  }
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.shape({
        name: PropTypes.string,
        html_url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Repository;
