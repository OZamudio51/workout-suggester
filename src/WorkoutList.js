import React from 'react';
import 'antd/dist/antd.css';
import Workout from './Workout'

// component for the workout list
class WorkoutList extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  // renders the workout list
    render() {
    const workout = this.props.WorkoutList
        return (
        <div>
         <Workout workout={workout}/>
        </div>
        );
    };
};

export default WorkoutList;