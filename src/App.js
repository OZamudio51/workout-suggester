import React from 'react';
import './App.css';
import Workout from './Workout';
import BodyPartSelector from './BodyPartSelector';
import WorkoutComparison from './WorkoutComparison';

const store = [{
  "id": 0,
  "name": "Benchpress",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 1,
  "name": "Incline Benchpress",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 2,
  "name": "Decline Benchpress",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 3,
  "name": "Squat",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 4,
  "name": "Quad Extensions",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 5,
  "name": "Lunges",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 6,
  "name": "Deadlift",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 7,
  "name": "Cable Pull-down",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 8,
  "name": "Dumbbell Rows",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 9,
  "name": "Dumbbell curls",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 10,
  "name": "Skull Crushers",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
},
 {
  "id": 11,
  "name": "Forearm Curls",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
},
 {
  "id": 12,
  "name": "Rowing Machine",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 13,
  "name": "Stairmaster",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
},{
  "id": 14,
  "name": "Treadmill",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 15,
  "name": "External Oblique Stretch",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 16,
  "name": "Quad stretch",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 17,
  "name": "Chest stretch",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}
];

class App extends React.Component {
  

  render() {
    return (
      <main className='App'>
        
        <header>
          <h1>Workout Suggester</h1>
        </header>
        <BodyPartSelector />
        
      {store.map((workoutDetail, index) => {
        return <Workout workouts={workoutDetail} key={`workout-list-key ${index}`} />
      })}

      <WorkoutComparison />
      </main>
    )
  }
};

export default App;