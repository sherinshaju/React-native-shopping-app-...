import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { CardItem, Text, Button, Left,Icon, Body, View } from "native-base";
import { connect } from "react-redux";

class Product extends Component {

  NewBtn = (key)=>{
    this.props.dispatch({
      type:"AddCart",
      id: key.id,
      product : key
    })
  }

  removeBtn= (key) =>{
    this.props.dispatch({
      type: "RemoveBtn",
      id: key.id,
      product: key,
      isCart : true
    });
}

  render() {
    console.log(this.props.product);
    return (
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom:30
          }}
        >
          {this.props.product.map(productVal => (
            <View style={styles.item}>
              <CardItem cardBody>
                <Image
                  source={productVal.image}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{productVal.name}</Text>
                    <Text note>Rs.{productVal.price}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <View style={styles.Btn}>
                {productVal.isCart === true ? (
                  <Button block danger onPress={()=>this.NewBtn(productVal)}>
                    <Text> Cart</Text>
                  </Button>
                ):
                <Button block danger onPress={()=>this.removeBtn(productVal)}>
                    <Text>Remove</Text>
                  </Button>
                
                }
                </View>
              </CardItem>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Btn: {
    width: "100%"
  },
  container: {
    height: "auto"
  },
  item: {
    width: "50%"
  }
});

function GetProduct(state) {
  return {
    product: state.fullproduct
  };
}

export default connect(GetProduct)(Product);
