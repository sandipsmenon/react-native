import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Thumbnail, Card, CardItem, Body } from 'native-base';
import {StyleSheet,Text} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Avatar } from 'react-native-elements';


const styles = StyleSheet.create({
    Content: {
      backgroundColor: '#ddd',
    },
  });


const bodyComponent = props => {
return(
    <Content style={{backgroundColor: '#ddd'}}>
        {this.customerDetail}
        {this.card1}
        {this.card2}
        {this.card3}
    </Content>
  
);
}
export default bodyComponent;

const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

customerDetail = (
    <Card >
        <CardItem>
            <Grid>
                <Row style={{margin:10,justifyContent: 'center'}} >
                    <Avatar 
                        overlayContainerStyle={{backgroundColor: '#dc2a4d'}}
                        rounded size="large" 
                        title="VT" 
                    />
                </Row>
                <Row style={{justifyContent: 'center'}}>
                    <Text style={{fontSize: 25}}>
                        Mr. Venkat Thiagarajan
                    </Text>
                </Row>
                <Row style={{justifyContent: 'center'}}>
                    <Text style={{ color:'#383738'}}>
                        108, Roseberry Ave, E12 6PS, London
                    </Text>
                </Row>
            </Grid>
        </CardItem>
    </Card>
  
);

card1 = (
    <Card >
      <CardItem header button onPress={() => alert("This is Card Header")}>
        <Grid>
          <Row>
            <Col>
                <Text style={{fontSize: 18, marginBottom: 10}}>
                    LLOYDS CLASSIC
                </Text>
                <Text style={{ color:'#383738'}}>
                    77-66-01     878754566
                </Text>
            </Col>
            <Col style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: 25}}>
                    £12,181.90
                </Text>
            </Col>
          </Row>
          <Row style={ {marginTop: 10}}>
              <Col>
                <Text style={{ color:'#383738'}}>
                    Available balance
                </Text>
              </Col>
              <Col style={{alignItems: 'flex-end'}}>
                <Text style={{ color:'#383738'}}>
                    £11,422.90
                </Text>
              </Col>
          </Row>
        </Grid>
      </CardItem>
    </Card>
  );
  

card2 =  (
    <Card >
      <CardItem header button onPress={() => alert("This is Card Header")}>
        <Grid>
          <Row>
            <Col>
                <Text style={{fontSize: 18, marginBottom: 10}}>
                    CREDIT CARD
                </Text>
                <Text style={{ color:'#383738'}}>
                    **** **** **** 0721
                </Text>
            </Col>
            <Col style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: 25}}>
                    £453.50
                </Text>
            </Col>
          </Row>
          <Row style={ {marginTop: 10}}>
              <Col>
                <Text style={{ color:'#383738'}}>
                    Credit limit
                </Text>
              </Col>
              <Col style={{alignItems: 'flex-end'}}>
                <Text style={{ color:'#383738'}}>
                    £1500.00
                </Text>
              </Col>
          </Row>
        </Grid>
      </CardItem>
    </Card>
  );

  card3 =  (
    <Card >
      <CardItem header button onPress={() => alert("This is Card Header")}>
        <Grid>
          <Row>
            <Col>
                <Text style={{fontSize: 18, marginBottom: 10}}>
                    PERSONAL LN
                </Text>
                <Text style={{ color:'#383738'}}>
                    72-01-31     96661955
                </Text>
            </Col>
            <Col style={{alignItems: 'flex-end'}}>
                <Text style={{ color:'#dc2a4d',fontSize: 25}}>
                    -£15,000.00
                </Text>
            </Col>
          </Row>
          <Row style={ {marginTop: 10}}>
              <Col>
                <Text style={{ color:'#383738'}}>
                    Term remaining
                </Text>
              </Col>
              <Col style={{alignItems: 'flex-end'}}>
                <Text style={{ color:'#383738'}}>
                    22 months
                </Text>
              </Col>
          </Row>
        </Grid>
      </CardItem>
    </Card>
  );