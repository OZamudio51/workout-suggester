import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import WorkoutList from './WorkoutList';
import LandingPage from './LandingPage';
import ApiContext from './ApiContext';
import config from './config';

// paths for router

const routes = [
  {
    path: '/',
    component: LandingPage,
  },
  {
    path: '/workout/bodypart',
    component: WorkoutList,
  }
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workoutsList: []
    };
  };

  //invokes the fetchWorkouts() function once the component mounts
  componentDidMount() {
    this.fetchWorkouts()
  };

  //fetches the workouts
  fetchWorkouts =  async () => {
    let workoutsRes = await fetch(`${config.API_ENDPOINT}/api/workouts`)
      let result = await workoutsRes.json()
      this.setState({
        workoutsList: result
      });
  };

  // maps over the routes related to the bodypart 
  renderRoutes() {
    return (
        <>
           {routes.map(({ path, component:C, workoutsList}, index) => (
             <Route 
                path={path}
                key={index}
                render={(props) => <C {...props} workoutsList={workoutsList}/>}
              />
           ))}
        </>
    );
};

  // renders the routes 
  render() {
    return (
     <ApiContext.Provider value={{workoutsList: this.state.workoutsList}}>
      <main className='App'>
        {this.renderRoutes()}
      </main>
      </ApiContext.Provider>
    );
  };
};

export default withRouter(App);