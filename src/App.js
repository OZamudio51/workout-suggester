import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import WorkoutComparison from './WorkoutComparison';
import WorkoutList from './WorkoutList';
import LandingPage from './LandingPage';

class App extends React.Component {
  constructor(props) {
    super(props)
    
  }

  renderRoutes() {
    return (
        <>
           <Route exact path="/" component={LandingPage} />
           <Route exact path="/workout/:bodypart" component={WorkoutList} />
           <Route path='/workout-comparison' component={WorkoutComparison} />
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