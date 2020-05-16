import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Workout from './Workout';
import BodyPartSelector from './BodyPartSelector';
import WorkoutComparison from './WorkoutComparison';
import WorkoutList from './WorkoutList';

const workoutsList = [{
  "id": 0,
  "bodypart": "chest",
  "name": "Benchpress",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 1,
  "bodypart": "chest",
  "name": "Incline Benchpress",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 2,
  "bodypart": "chest",
  "name": "Decline Benchpress",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 3,
  "bodypart": "legs", 
  "name": "Squat",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 4,
  "bodypart": "legs", 
  "name": "Quad Extensions",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 5,
  "bodypart": "legs", 
  "name": "Lunges",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 6,
  "bodypart": "back",
  "name": "Deadlift",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 7,
  "bodypart": "back",
  "name": "Cable Pull-down",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 8,
  "bodypart": "back",
  "name": "Dumbbell Rows",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 9,
  "bodypart": "arms", 
  "name": "Dumbbell curls",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 10,
  "bodypart": "arms", 
  "name": "Skull Crushers",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
},
 {
  "id": 11,
  "bodypart": "arms", 
  "name": "Forearm Curls",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
},
 {
  "id": 12,
  "bodypart": "cardio",
  "name": "Rowing Machine",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 13,
  "bodypart": "cardio",
  "name": "Stairmaster",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
},{
  "id": 14,
  "bodypart": "cardio",
  "name": "Treadmill",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 15,
  "bodypart": "stretch", 
  "name": "External Oblique Stretch",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 16,
  "bodypart": "stretch", 
  "name": "Quad stretch",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 17,
  "bodypart": "stretch", 
  "name": "Chest stretch",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workouts: workoutsList
    }
  }

//   renderRoutes() {
//     return (
//         <>
//             {/* {["/workout", '/workout-comparison'].map(path => (
//                 <Route
//                     exact
//                     key={path}
//                     path={path}
//                     component={App}
//                 />
//             ))} */}
//             <Route exact path="/workout/:bodypart" component={WorkoutList} />
//             <Route path='/workout-comparison' component={WorkoutComparison} />
//         </>
//     );
// }

  updateBodypart = (bodypart) => {
    console.log(bodypart)
    let workouts = [];
    workoutsList.forEach((workout) => {
      console.log(workout.bodypart)
      console.log(bodypart)
      if(workout.bodypart === bodypart) {
        workouts.push(workout)
      }
    })
    console.log(workouts);
    this.setState({
      workouts: workouts,
      toWorkout: true,
      bodypart: bodypart
    })
  };

  render() {

    // if (this.state.toWorkout === true) {
    //   return <Redirect to={`/workout/${this.state.bodypart}`} />
    // }

    return (
      <main className='App'>
        {/* {this.renderRoutes()} */}
        <header>
          <h1>Workout Suggester</h1>
        </header>
        <BodyPartSelector updateBodypart={this.updateBodypart} />

      {this.state.workouts.map((workoutDetail, index) => {
        return <Workout workouts={workoutDetail} key={`workout-list-key ${index}`} />
      })}

      <WorkoutComparison />
      </main>
    )
  }
};

export default App;