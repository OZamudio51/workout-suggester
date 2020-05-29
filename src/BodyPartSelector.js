import React from 'react';
import { withRouter } from 'react-router-dom';
import './BodyPartSelector.css';

// component for selecting the bodypart
class BodyPartSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bodypart: 'chest'
        };
        
        this.handleBodypartSubmit = this.handleBodypartSubmit.bind(this);

    };

// submits selection once chosen
    handleBodypartSubmit = e => {
        e.preventDefault();


        if (this.state.bodypart === 'select') {
            return alert('Please select a body part');
        }; 
        
        this.setState({
            bodypart: e.target.value
        });

        this.props.updateBodypart(e.target.value);

        this.props.history.push(`/workout/${e.target.value}`);
    };

// renders selector
    render() {
        return (
        <div>
         <form htmlFor='Workout'>
         <label htmlFor='Workout' style={{color: "white"}}>Select a body part to get started: </label>
          <select title='Workout' className='body-selection' onChange={this.handleBodypartSubmit} defaultValue='Select-a-bodypart'>
            <option value="Select-a-bodypart" disabled>Select a body part</option>
            <option value='chest'>Chest</option>
            <option value='legs'>Legs</option>
            <option value='shoulders'>Shoulders</option>
            <option value='back'>Back</option>
            <option value='arms'>Arms</option>
            <option value='cardio'>Cardio</option>
            <option value='stretches-warmup'>Stretches/Warmups</option>
          </select>
         </form>
        </div>
        );
    };
};

export default withRouter(BodyPartSelector);