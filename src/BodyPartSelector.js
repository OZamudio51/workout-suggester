import React from 'react';
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
    };

    render() {
        
        return (
            <div>
        <label htmlFor='Workout'>Select a bodypart: </label>
          <select onChange={this.handleBodypartSubmit}>
            <option disabled value>Select a bodypart</option>
            <option value='chest'>Chest</option>
            <option value='legs'>Legs</option>
            <option value='back'>Back</option>
            <option value='cardio'>Cardio</option>
            <option value='stretches-warmups'>Stretches/Warmups</option>
          </select>
          {' '}
          {/* <button onClick={this.handleBodypartSubmit}>Go!</button> */}
        </div>

        )
    }
}

export default BodyPartSelector;