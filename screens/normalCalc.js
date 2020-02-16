import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Container, Text, Content, Card, CardItem , Body, Item, Input, Picker, Button, Grid, Col} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class NormalCalc extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberOne: 0,
            numberTwo: 0,
            result : '',
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

    handleClick = (value) => {
        const {numberOne,numberTwo} = this.state;
        let result;
        
        if(value === "add"){
            result = parseFloat(numberOne)+parseFloat(numberTwo);
        }
        else if(value === "minus"){
            result = parseFloat(numberOne)-parseFloat(numberTwo);
        }
        else if(value === "multiply"){
            result = parseFloat(numberOne)*parseFloat(numberTwo);
        }
        else if(value === "divide"){
            result = parseFloat(numberOne)/parseFloat(numberTwo);
        }else{
            result = 0;
        }
        
        //console.log(result);
        this.setState({result});
    }

  render() {
    const {result} = this.state;
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
                                        <Input placeholder='input 01' onChangeText={v => this.handleChange("numberOne", v)} keyboardType={'numeric'} />
                                    </Item>
                                </Col>
                                <Col style={{height: 50 }}>
                                    <Item regular>
                                        <Input placeholder='input 02' onChangeText={v => this.handleChange("numberTwo", v)} keyboardType={'numeric'} />
                                    </Item>
                                </Col>
                            </Grid>


                            <Item>
                                
                            </Item>

                            <Grid>
                                <Col style={{height: 50 ,padding:5}}>
                                    <Button onPress={() => this.handleClick("add")} style={{padding:10}}><Text> Add </Text></Button>
                                </Col>
                                <Col style={{height: 50 ,padding:5}}>
                                    <Button onPress={() => this.handleClick("minus")} style={{padding:10}}><Text> Substract </Text></Button>
                                </Col>
                            </Grid>
                            <Grid>
                                <Col style={{ height: 50 ,padding:5}}>
                                    <Button onPress={() => this.handleClick("multiply")} style={{padding:10}}><Text> Multiply </Text></Button>
                                </Col>
                                <Col style={{ height: 50 ,padding:5}}>
                                    <Button onPress={() => this.handleClick("divide")} style={{padding:10}}><Text> Divide </Text></Button>
                                </Col>
                            </Grid>
                        
                    </Body>
                    </CardItem>

                    <CardItem footer>
                        <Text> Result : {result}</Text>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
  }
}