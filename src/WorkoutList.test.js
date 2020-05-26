import React from 'react';
import WorkoutList from './WorkoutList';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';


Enzyme.configure({ adapter: new Adapter() });

const mockWorkouts = [
    {
        id: 3,
        bodypart: 'Chest',
        workout_name: 'Bench Press',
        workout_video: '<div><iframe width="610" height="300" src="https://www.youtube.com/embed/6JtP6ju0IMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
        workout_desc: 'The benchpress hits mostly your chest, with a little bit of your triceps and shoulders. One of the cornerstones of weightlifting.'
      },
      {
        id: 4,
        bodypart: 'Chest',
        workout_name: 'Incline Benchpress',
        workout_video: '<div><iframe width="610" height="300" src="https://www.youtube.com/embed/jPLdzuHckI8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
        workout_desc: 'The purpose of the incline press is to focus more of the work on the upper pecs. The main benefit in performing incline presses is to develop the upper portion of the pectoral muscles.'
      },
      {
        id: 5,
        bodypart: 'Chest',
        workout_name: 'Decline Benchpress',
        workout_video: '<div><iframe width="610" height="300" src="https://www.youtube.com/embed/OR6WM5Z2Hqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
        workout_desc: 'The decline bench press is an excellent exercise for strengthening your lower chest muscles. In a decline bench press, the bench is set to 15 to 30 degrees on a decline. This angle places your upper body on a downward slope, which activates the lower pectoral muscles as you push weights away from your body.'
      },
]

describe('Workout component', () => {
    test('renders', () => {
        const wrapper = shallow(<WorkoutList workouts={mockWorkouts}/>);

        expect(wrapper.exists()).toBe(true);
    });
});
