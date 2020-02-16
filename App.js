import React, { Component } from 'react';
import { Container, Header, Tab, Tabs } from 'native-base';
import NormalCalc from './screens/normalCalc';
import QuadCalc from './screens/quadCalc';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="NormalCalc">
            <NormalCalc name="NormalCalc" />
          </Tab>
          <Tab heading="QuadCalc">
            <QuadCalc name="QuadCalc" />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}