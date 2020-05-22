import React from 'react';
import { withRouter } from 'react-router-dom';
import './BodyPartSelector.css';

class BodyPartSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bodypart: 'chest'
        }
        
        this.handleBodypartSubmit = this.handleBodypartSubmit.bind(this);
    };


    handleBodypartSubmit = e => {
        e.preventDefault();


        if (this.state.bodypart === 'select') {
            return alert('Please select a bodypart');
        } 
        
        this.setState({
            bodypart: e.target.value
        });

        this.props.updateBodypart(e.target.value)

        this.props.history.push(`/workout/${e.target.value}`);
    };


    render() {
        
        return (
            <div>
        <label htmlFor='Workout'>Working on: </label>
          <select onChange={this.handleBodypartSubmit} defaultValue='Select-a-bodypart'>
            <option value="Select-a-bodypart" disabled>Select a bodypart</option>
            <option value='chest'>Chest</option>
            <option value='legs'>Legs</option>
            <option value='shoulders'>Shoulders</option>
            <option value='back'>Back</option>
            <option value='arms'>Arms</option>
            <option value='cardio'>Cardio</option>
            <option value='stretches-warmup'>Stretches/Warmups</option>
          </select>
        </div>

        )
    }
}

export default withRouter(BodyPartSelector);