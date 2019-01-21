import React, { Component } from 'react';
import { connect } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import '../../../node_modules/react-alice-carousel/lib/alice-carousel.css';

import Card from '../../components/Card/Card';
import * as actions from '../../store/actions/index';

class Forecast extends Component {
  componentDidMount() {
    this.props.onInitForecast();
  }

  render() {
    const handleOnDragStart = e => e.preventDefault();
    let elements = null;
    let body = null;
    if (this.props.forecast) {
      elements = [];
      for (let i = 0; i < 14; i++) {
        const f = this.props.forecast[i];
        elements.push((
          <Card
            key={i}
            date={f.date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
            icon={f.icon}
            onDragStart={handleOnDragStart}
            temperature={f.temperature}
            description={f.description}></Card>
        ));
      }
      const carouselProps = {
        mouseDragEnabled: true,
        items: elements,
        infinite: false,
        buttonsDisabled: true,
        responsive: {
          0: { items: 1 },
          400: { items: 2 },
          500: { items: 3 },
          600: { items: 4 },
          700: { items: 5 },
          800: { items: 6 },
          900: { items: 7 } }
      };
      body = <AliceCarousel {...carouselProps} />;
    }

    return body;
  }
}

const mapStateToProps = state => ({
  forecast: state.forecast.forecastData,
});

const mapDispatchToProps = dispatch => ({
  onInitForecast: () => dispatch(actions.initForecast()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
