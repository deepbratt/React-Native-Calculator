import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Container, Text, Content, Card, CardItem , Body, Item, Input, Button, Grid, Col} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class QuadCalc extends Component {
    constructor(props){
        super(props);
        this.state = {
            a: 1,
            b: 1,
            c:-1,
            result1 : '',
            result2 : '',
            loading: true
        }
    }

    async componentDidMount() {
      await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      })
      this.setState({ loading: false })
    }

    handleChange = (name, value) => {
        this.setState({[name]:value});
    }

    handleClick(){
      const {a,b,c} = this.state;

      let result1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
      let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a); 
      
      //console.log(result1);
      //console.log(result2);
      this.setState({result1,result2});

    }

  render() {
    const {result1, result2} = this.state;

    if (this.state.loading) {
      return (
        <Text></Text>
      );
    }
    return (
        <Container>
            <Content>
                <Card>
                    <CardItem bordered>
                    <Body>
                            <Grid>
                                <Col style={{height: 50 }}>
                                    <Item regular>
                                        <Input placeholder='a' onChangeText={v => this.handleChange("a", v)} keyboardType={'numeric'} />
                                    </Item>
                                </Col>
                                <Col style={{height: 50 }}>
                                    <Item regular>
                                        <Input placeholder='b' onChangeText={v => this.handleChange("b", v)} keyboardType={'numeric'} />
                                    </Item>
                                </Col>
                                <Col style={{height: 50 }}>
                                    <Item regular>
                                        <Input placeholder='c' onChangeText={v => this.handleChange("c", v)} keyboardType={'numeric'} />
                                    </Item>
                                </Col>
                            </Grid>


                            <Grid style={{marginTop:10,marginBottom:10}}>
                                <Col style={{height: 50 }}>
                                    <Button><Text onPress={() => this.handleClick()}> Find Roots</Text></Button>
                                    <Text > Find Roots of Quad ax2+bx+c = 0  </Text>
                                </Col>
                            </Grid>
                        
                    </Body>
                    </CardItem>

                    <CardItem footer>
                        <Text> Root1 : {result1}</Text>
                    </CardItem>

                    <CardItem footer>
                        <Text> Root2 : {result2}</Text>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
  }
}