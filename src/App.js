import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import WorkoutComparison from './WorkoutComparison';
import WorkoutList from './WorkoutList';
import LandingPage from './LandingPage';
import Workout from './Workout';
// import Workout from './Workout';

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
  "bodypart": "stretches-warmup", 
  "name": "External Oblique Stretch",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 16,
  "bodypart": "stretches-warmup", 
  "name": "Quad stretch",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}, {
  "id": 17,
  "bodypart": "stretches-warmup", 
  "name": "Chest stretch",
  "video": "video of workout goes here",
  "desc": "Description of workout here"
}
];

const routes = [
  {
    path: '/',
    component: LandingPage,
    workoutsList: workoutsList
  },
  {
    path: '/workout/:bodypart',
    component: WorkoutList,
    workoutsList: workoutsList
  },
  {
    path: '/workout-comparison',
    component: WorkoutComparison,
    workoutsList: workoutsList
  },
]

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  renderRoutes() {
    return (
        <>
           {/* <Route exact path="/" component={LandingPage} />
           <Route exact path="/workout/:bodypart" component={WorkoutList} />
           <Route path='/workout-comparison' component={WorkoutComparison} /> */}

           {routes.map(({ path, component:C, workoutsList}, index) => (
             <Route 
                path={path}
                render={(props) => <C {...props} workoutsList={workoutsList} />}
              />
           ))}
        </>
    );
}


  render() {

    return (
      <main className='App'>
        {this.renderRoutes()}
      </main>
    )
  }
};

export default withRouter(App);