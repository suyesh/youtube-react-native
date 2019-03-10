import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/dist/MaterialIcons";

const Home = () => <Text>Home</Text>;

const Trending = () => <Text>Trending</Text>;

const Subscriptions = () => <Text>Subscriptions</Text>;

const Inbox = () => <Text>Inbox</Text>;

const Library = () => <Text>Library</Text>;

class App extends Component {
  state = {
    index: 0,
    routes: [
      { key: "home", title: "Home", icon: "home" },
      { key: "trending", title: "Trending", icon: "trending-up" },
      { key: "subscriptions", title: "Subscriptions", icon: "subscriptions" },
      { key: "inbox", title: "Inbox", icon: "email" },
      { key: "library", title: "Library", icon: "folder" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    trending: Trending,
    subscriptions: Subscriptions,
    inbox: Inbox,
    library: Library
  });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require("./src/assets/images/youtube_logo.png")}
              style={styles.logo}
            />
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Icon name="cast" size={24} color="#606060" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="videocam" size={24} color="#606060" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="search" size={24} color="#606060" />
            </TouchableOpacity>
          </View>
        </View>

        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
          activeColor="red"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    flex: 1
  },
  header: {
    height: 40,
    backgroundColor: "#FFFFFF",
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  logoContainer: {
    height: 30,
    width: 120,
    marginLeft: 10,
    padding: 0
  },
  logo: {
    flex: 1,
    width: 120
  },
  iconContainer: {
    width: 180,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default App;
