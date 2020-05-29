import React from 'react';
import 'antd/dist/antd.css';
import ApiContext from './ApiContext';
import './Workout.css';

// component for the workout
class Workout extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = ApiContext;

  // renders the workout
    render() {
      const { workouts } = this.props;
        return (
        <section>
          <h2 style={{color: "white"}}>{workouts.workout_name}</h2>
          <div className='img-container' dangerouslySetInnerHTML={{ __html: workouts.workout_video}}></div>
          <div><p style={{color: "white"}}>{workouts.workout_desc}</p></div>
        </section>
        );
    };
};

export default Workout;