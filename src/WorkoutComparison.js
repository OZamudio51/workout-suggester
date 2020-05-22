import React from 'react';
import './WorkoutComparison.css'

class WorkoutComparison extends React.Component {

    render() {

        
        return (
    <div>
    <header>
        <h2>Compare workouts</h2>
    </header>

        <section>
        <h3>Bench</h3>
        [<em>placeholder for screenshot of Workout</em>]
        <p>This workout targets mostly your chest, but also targets your triceps. Also slightly targets the quads and core.</p>
        </section>

        <section className='comparing-divider'>
        <h4>Comparing to</h4>

        </section>
        <section>
        <h3>Cable Flys</h3>
        [<em>placeholder for screenshot of Workout</em>]
        <p>This workout targets mostly your chest, with a slight target to your biceps throughout the contraction of the lift.</p>
        </section>
    </div>
        )
    }
};

export default WorkoutComparison;