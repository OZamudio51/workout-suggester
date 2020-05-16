import React from 'react';
import { Rate } from 'antd';
import 'antd/dist/antd.css';

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
    //   const { bodypart } = this.props.match.params
    // console.log(bodypart)
        return (
        <section>
        <h1>hello</h1>
        </section>
        )
    };
};

export default WorkoutList;

