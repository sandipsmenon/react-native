import React from 'react';
import { Container, Header, Left, Body, Right, Button, Title, Text, Icon } from 'native-base';

class HeaderComponent extends React.Component {
  render(){
    const headerComponent = props => {
      <Header style={{height:75, backgroundColor: '#00402e'}}>
        <Left/>
        <Body>
          <Title style={{fontSize: 25, color: '#fff'}}>
              Accounts
          </Title>
        </Body>
        <Right>
          <Button transparent>
           <Icon name='ios-log-out' style={{color: '#fff'}}  />
          </Button>
       </Right>
      </Header>
      }

    return(
      {headerComponent}
    );
  }
}


export default HeaderComponent;
