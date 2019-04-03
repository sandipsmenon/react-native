import React, {Component} from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Thumbnail, Card, CardItem, Body, Separator, ListItem, Left, Right } from 'native-base';
import { Avatar } from 'react-native-elements';
import {StyleSheet,Text} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';

const cards = 
    {
      image: require('./img/spend.jpeg'),
    }
  

class Transfer extends Component {
    static navigationOptions = {
        title: 'Card',
        headerBackTitle: null,
        headerStyle: {
          backgroundColor: '#00402e',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#fff'
        },
      };
      
render(){
    return(
    <Content style={{backgroundColor: '#fff'}}>
        <Grid>
            <Row style={{justifyContent: 'center'}} >
                <Image style={{ height: 300, flex: 1 }} source={cards.image} />
            </Row>
        </Grid>
        <Separator bordered style={{height: 50}}>
            <Row style={{marginLeft: 5, marginRight: 10}}>
                <Left>
                    <Icon active name="md-arrow-down" style={{color: '#4cd964'}}/>
                </Left>
                <Col>
                    <Text>
                        April, 2019
                    </Text>
                </Col>
                <Col style={{alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 18}}>
                        £2500,00
                    </Text>
                </Col>
              </Row>
        </Separator>
        <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#4cd964" }}>
                <Icon active name="ios-swap" />
              </Button>
            </Left>
            <Body>
              <Text>Credit Transfers</Text>
            </Body>
            <Right >
                <Text>
                    £2500.00
                </Text>
            </Right>
        </ListItem>
        <Separator bordered style={{height: 50}}>
            <Row style={{marginLeft: 5, marginRight: 10}}>
                <Left>
                    <Icon active name="md-arrow-up" style={{color: '#ff3b30'}}/>
                </Left>
                <Col>
                    <Text>
                        April, 2019
                    </Text>
                </Col>
                <Col style={{alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 18}}>
                        £1998.44
                    </Text>
                </Col>
              </Row>
        </Separator>
        <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#5856d6" }}>
                <Icon active name="ios-cart" />
              </Button>
            </Left>
            <Body>
              <Text>Groceries</Text>
            </Body>
            <Right >
                <Text>
                    £219.10
                </Text>
            </Right>
        </ListItem>
        <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="ios-restaurant" />
              </Button>
            </Left>
            <Body>
              <Text>Eating Out</Text>
            </Body>
            <Right>
                <Text>
                    £32.00
                </Text>
            </Right>
        </ListItem>
        <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="md-bus" />
              </Button>
            </Left>
            <Body>
              <Text>Transport</Text>
            </Body>
            <Right>
                <Text>
                    £15.31
                </Text>
            </Right>
        </ListItem>
        <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#dc2a4d" }}>
                <Icon active name="ios-pricetag" />
              </Button>
            </Left>
            <Body>
              <Text>Shopping</Text>
            </Body>
            <Right>
                <Text>
                    £56.76
                </Text>
            </Right>
        </ListItem>
        <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#ff3b30" }}>
                <Icon active name="md-heart" />
              </Button>
            </Left>
            <Body>
              <Text>Personal Care</Text>
            </Body>
            <Right>
                <Text>
                    £43.00
                </Text>
            </Right>
        </ListItem>
        <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#4cd964" }}>
                <Icon active name="md-bulb" />
              </Button>
            </Left>
            <Body>
              <Text>Bills</Text>
            </Body>
            <Right>
                <Text>
                    £89.49
                </Text>
            </Right>
        </ListItem>
        <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#ffcc00" }}>
                <Icon active name="md-happy" />
              </Button>
            </Left>
            <Body>
              <Text>Entertainment</Text>
            </Body>
            <Right>
                <Text>
                    £180.24
                </Text>
            </Right>
        </ListItem>
    </Content>
    );
}
}

export default Transfer;
