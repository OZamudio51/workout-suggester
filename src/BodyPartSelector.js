import React from 'react';
import './BodyPartSelector.css';

class BodyPartSelector extends React.Component {
    render() {
        return (
            <form>
        <label htmlFor='Workout'>Select a bodypart: </label>
          <select>
            <option placeholder='select'>Select a bodypart</option>
            <option value='chest'>Chest</option>
            <option value='legs'>Legs</option>
            <option value='back'>Back</option>
            <option value='cardio'>Cardio</option>
            <option value='stretches-warmups'>Stretches/Warmups</option>
          </select>
          {' '}
          <button>Go!</button>
        </form>

        )
    }
}

export default BodyPartSelector;