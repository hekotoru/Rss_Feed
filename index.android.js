/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import App from './app/App';


export default class Rss_Feed extends Component {

  render() {

    return (
      <App />
    );
  }
}



AppRegistry.registerComponent('Rss_Feed', () => Rss_Feed);
