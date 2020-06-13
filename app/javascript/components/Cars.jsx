import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import PropTypes from 'prop-types';
import './Cars.css';
import Car from './Car';
import { Header, Footer, SectionsContainer, Section } from 'react-fullpage';

class Cars extends React.Component {
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        sectionsColor={['#4BBFC3', '#7BAABE', 'whitesmoke', '#000']}
        continuousVertical = {true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              {this.props.cars.map(car => {
                return <Car car = {car} />
              })}
            </div>
          );
        }}
      />
    );
  }
}

export default Cars;