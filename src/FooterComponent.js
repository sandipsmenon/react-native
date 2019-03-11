import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';

const footerComponent = props => {
return(
  
    <Footer style={{backgroundColor: '#00402e'}}>
      <FooterTab>
        <Button transparent>
          <Icon name="ios-card" style={{color: '#fff'}} />
          <Text style={{color: '#fff'}}>
              Accounts
          </Text>
        </Button>
        <Button transparent>
          <Icon name="ios-cash" style={{color: '#fff'}} />
          <Text style={{color: '#fff'}}>
             Transfer
          </Text>
        </Button>
        <Button transparent>
          <Icon name="ios-chatbubbles" style={{color: '#fff'}} />
          <Text style={{color: '#fff'}}>
              Support
          </Text>
        </Button>
        <Button transparent>
          <Icon name="ios-more" style={{color: '#fff'}} />
          <Text style={{color: '#fff'}}>
              More
          </Text>
        </Button>
      </FooterTab>
    </Footer>
 
);
}
export default footerComponent;
