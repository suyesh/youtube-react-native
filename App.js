import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from "react-native";
import {
  BottomNavigation,
  Text,
  Card,
  Paragraph,
  Title,
  Button,
  Avatar
} from "react-native-paper";
import Icon from "react-native-vector-icons/dist/MaterialIcons";

const Home = () => (
  <ScrollView
    style={{ flex: 1, width: "100%" }}
    refreshControl={
      <RefreshControl refreshing={false} onRefresh={() => console.log("1")} />
    }
  >
    <Card style={styles.card}>
      <Card.Cover source={require("./src/assets/images/video1.png")} />
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          padding: 5
        }}
      >
        <Avatar.Image
          source={{ uri: "https://randomuser.me/api/portraits/men/84.jpg" }}
          size={50}
        />
        <Card.Content style={{ flex: 1 }}>
          <Title numberOfLines={2}>
            5 Reasons why chinese millitary is weaker than you think
          </Title>
          <Paragraph>Beyond Science</Paragraph>
        </Card.Content>
      </View>
    </Card>
  </ScrollView>
);

const Trending = () => (
  <ScrollView style={{ flex: 1, backgroundColor: "blue" }}>
    <Text>Trending</Text>
  </ScrollView>
);

const Subscriptions = () => (
  <ScrollView style={{ flex: 1, backgroundColor: "yellow" }}>
    <Text>Subscriptions</Text>
  </ScrollView>
);

const Inbox = () => (
  <ScrollView style={{ flex: 1, backgroundColor: "teal" }}>
    <Text>Inbox</Text>
  </ScrollView>
);

const Library = () => (
  <ScrollView style={{ flex: 1, backgroundColor: "brown" }}>
    <Text>Library</Text>
  </ScrollView>
);

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
    justifyContent: "space-between",
    elevation: 1
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
  },
  card: {
    marginBottom: 5
  }
});

export default App;
