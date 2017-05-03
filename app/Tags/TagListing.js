import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableHighlight
} from 'react-native';

const TAG_TYPES = ['World','Sports','Health','Art','Technology & Science'];
import { Actions } from 'react-native-router-flux';

class TagListing extends Component {
      static propTypes = {
    onTagClick: React.PropTypes.func.isRequired,
};
      constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      Tags: null,
      selectedItem: 'All'
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(TAG_TYPES),
        Feeds: TAG_TYPES,
      })
  }
  render() {
    return (
      <ListView style={styles.listView} dataSource={this.state.dataSource}
        renderRow={this.renderSingleFeed.bind(this)} />
    );
  }

  renderSingleFeed(Feed) {
    const goToFeed = () => Actions.Feed({filter: Feed});
    return (
    <TouchableHighlight>
    <View style={styles.container}>
        <View style = {styles.listData}>
          <Text onPress={goToFeed} style={styles.title}>{Feed}</Text>
        </View>
      </View>
    </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    height: 80,
    width: 40,
  },
  listData: {
    flex:1,
    borderWidth: 0.2,
  },
  title: {
      fontSize: 27,
  },
  listView: {
     marginTop: 50,
  },
});

module.exports = TagListing;