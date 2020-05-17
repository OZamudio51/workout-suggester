import React from 'react';
// import { Rate } from 'antd';
import 'antd/dist/antd.css';
import Workout from './Workout'

class WorkoutList extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  componentDidMount() {
    const { bodypart } = this.props.match.params
    console.log(bodypart)
  };
  
    render() {
      console.log(this.props);
      const { bodypart } = this.props.match.params
    console.log(bodypart)
    const workout = this.props.WorkoutList
        return (
        <div>
        <Workout workout={workout}/>
        </div>
        )
    };
};

export default WorkoutList;

