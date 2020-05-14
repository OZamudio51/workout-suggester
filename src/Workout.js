import React from 'react';
import { Rate } from 'antd';
import 'antd/dist/antd.css';

class Workout extends React.Component {
    render() {
      const { workouts } = this.props;
        return (
        <section>
          <h3>{workouts.name}</h3>
          <div className='img-container'>{workouts.video}</div>
          <p>{workouts.desc}</p>
          <label htmlFor='rating'>Rate this workout: </label>
          <Rate />
        </section>
        )
    };
};

export default Workout;