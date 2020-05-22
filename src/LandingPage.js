import React from 'react';
import './App.css';
import Workout from './Workout';
import BodyPartSelector from './BodyPartSelector';
import ApiContext from './ApiContext';
// import config from './config';



class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          workouts: '',
          bodypart: ''
        }
      }

    //   componentDidMount() {
    //     Promise.all([fetch(`${config.API_ENDPOINT}/api/workouts`)])
    //       .then(([workoutsRes,]) => {
    //         if(!workoutsRes.ok)
    //            return workoutsRes.json().then(e => Promise.reject(e));
    //            return Promise.all([workoutsRes.json()]);
    //       })
    //       .then(([workoutsList]) => {
    //         this.setState({workoutsList});
    //       })
    //       .catch(error => {
    //         console.error({error});
    //       });
    //   };
    

      static contextType = ApiContext;

    updateBodypart = (bodypart) => {
        console.log(bodypart)
        let workouts = [];
        console.log(this.context);
        this.context.workoutsList.forEach((workout) => {
          console.log(workout.bodypart)
          console.log(bodypart)
          if(workout.bodypart.toLowerCase() === bodypart) {
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

      bodypart  = this.bodypart;
    
      render() {
        

        return (
            <div>
            <header>
              <h1>Workout Suggester</h1>
            </header>
            <BodyPartSelector updateBodypart={this.updateBodypart} />      
{
        this.state.bodypart ? 
        this.state.workouts.map((workoutDetail, index) => {
          return <Workout workouts={workoutDetail} key={`workout-list-key ${index}`} />
        }) :
        <></> 
 }
          </div>
        )
      }
}

export default LandingPage;