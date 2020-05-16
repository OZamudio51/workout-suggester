import React from 'react';
import { Rate } from 'antd';
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
        return (
        <section>
        <Workout />
        </section>
        )
    };
};

export default WorkoutList;

