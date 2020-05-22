import React from 'react';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import ApiContext from './ApiContext';

class Workout extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ApiContext;

    render() {
      console.log(this.context.workoutsList);
      console.log(this.props);
      const { workouts } = this.props;
      const { bodypart } = this.props.match.params
    console.log(bodypart)
        return (
        <section>
          <h3>{workouts.workout_name}</h3>
          <div className='img-container' dangerouslySetInnerHTML={{ __html: workouts.workout_video}}></div>
          <p>{workouts.workout_desc}</p>
          <label htmlFor='rating'>Rate this workout: </label>
          <Rate />
        </section>
        )
    };
};

export default Workout;