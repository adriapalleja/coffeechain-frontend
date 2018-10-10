import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './shared/theme';
import './shared/styles';
import Header from './components/header';
import Dashboard from './containers/dashboard';
import { Route } from 'react-router-dom';
import OfferDetail from './components/offer-detail';

import { connect } from 'react-redux';
import * as CoffeeActions from './redux/actions/coffees';

import CompVisual from './components/comp-visual';

// const Paragraph = styled('p')`
//   color: ${props => props.textColor ? props.textColor : props.theme.colors.primary};
//   background: ${props => props.theme.colors.secondary};
//   font-size: ${props => props.large ? '28px' : '14px'};
// `;

class App extends Component {
  render()  {

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header></Header>
          <Route exact={true} path='/' component={Dashboard}/>
          {/* <Paragraph large textColor="firebrick">Hi! This is my styled paragraph using emotion-theming :-)</Paragraph> */}
          <Route exact={true} path='/offer-detail' component={OfferDetail} />
         {/*  <CompVisual></CompVisual> */}
        </div>
      </ThemeProvider>
    );
  }
}

// App.propTypes = {
//   getProducers: PropTypes.array
// };

const mapStateToProps = (state) => ({
  coffees: state.coffees,
  producer: state.producer,
  coffeeShop: state.coffeeShop,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCoffees: () => dispatch(CoffeeActions.getAllCoffees()),
  getCoffee: (coffeeId) => dispatch(CoffeeActions.getCoffee(coffeeId)),
  createCoffee: () => dispatch(CoffeeActions.createCoffee())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
