import React from 'react';
import './App.css';
import Workout from './Workout';
import BodyPartSelector from './BodyPartSelector';
import ApiContext from './ApiContext';

// Landing Page of App

class LandingPage extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        workouts: '',
        bodypart: ''
      };
    };


    static contextType = ApiContext;

  // Updates the DOM with selection after it's chosen

  updateBodypart = (bodypart) => {
      let workouts = [];
      this.context.workoutsList.forEach((workout) => {
        if(workout.bodypart.toLowerCase() === bodypart) {
          workouts.push(workout)
        }
      });

      this.setState({
        workouts: workouts,
        toWorkout: true,
        bodypart: bodypart
      });
    };

    bodypart  = this.bodypart;
    
    // Renders workouts related to bodypart 

  render() {
    return (
      <div>
        <header>
          <h1 className='workout-header'>Workout Suggester</h1>
        </header>
        <BodyPartSelector updateBodypart={this.updateBodypart} />
    {this.state.bodypart ? 
      this.state.workouts.map((workoutDetail, index) => {
      return <Workout workouts={workoutDetail} key={`workout-list-key ${index}`} />}) : <></>}
      </div>
    );
  };
};

export default LandingPage;