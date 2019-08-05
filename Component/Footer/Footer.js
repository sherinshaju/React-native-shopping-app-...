import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge,
  View
} from "native-base";
import { connect } from "react-redux";
import { Link } from "react-router-native";

class FooterTabsBadgeExample extends Component {
  Click = () => {
    this.context.history.push("/cart");
  };

  render() {
    return (
      <View>
        <Footer style={styles.footerBotm}>
          <FooterTab>
            <Button active vertical>
              <Icon name="apps" />
              <Link to="/">
                <Text>Home</Text>
              </Link>
            </Button>

            <Button vertical>
              <Icon active name="navigate" />
              <Text>Contact</Text>
            </Button>

            <Button badge vertical>
              <Badge>
                <Text>{this.props.NewCart}</Text>
              </Badge>
              <Icon name="person" />
              <Link to="/cart">
                <Text>Cart</Text>
              </Link>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  footerBotm: {
    position: "absolute",
    bottom: 0,
    left: 0
  }
});

function getingData(state) {
  return {
    NewCart: state.NewCart.length
  };
}

export default connect(getingData)(FooterTabsBadgeExample);
