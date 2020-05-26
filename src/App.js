import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import WorkoutList from './WorkoutList';
import LandingPage from './LandingPage';
import ApiContext from './ApiContext';
import config from './config';

const routes = [
  {
    path: '/',
    component: LandingPage,
  },
  {
    path: '/workout/bodypart',
    component: WorkoutList,
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workoutsList: []
    };

  };

  componentDidMount() {
    this.fetchWorkouts()
  };

  fetchWorkouts =  async () => {
    let workoutsRes = await fetch(`${config.API_ENDPOINT}/api/workouts`)
      let result = await workoutsRes.json()
      this.setState({
        workoutsList: result
      });
  };

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