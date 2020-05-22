import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import WorkoutList from './WorkoutList';
import LandingPage from './LandingPage';
import ApiContext from './ApiContext';
import config from './config';

// const workoutsList = [{
//   "id": 0,
//   "bodypart": "chest",
//   "workout_name": "Benchpress",
//   "workout_video": <div><iframe width="610" height="300" src="https://www.youtube.com/embed/6JtP6ju0IMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "The benchpress hits mostly your chest, with a little bit of your triceps and shoulders. One of the cornerstones of weightlifting."
// }, {
//   "id": 1,
//   "bodypart": "chest",
//   "workout_name": "Incline Benchpress",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/jPLdzuHckI8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "The purpose of the incline press is to focus more of the work on the upper pecs. The main benefit in performing incline presses is to develop the upper portion of the pectoral muscles."
// }, {
//   "id": 2,
//   "bodypart": "chest",
//   "workout_name": "Decline Benchpress",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/OR6WM5Z2Hqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "The decline bench press is an excellent exercise for strengthening your lower chest muscles. In a decline bench press, the bench is set to 15 to 30 degrees on a decline. This angle places your upper body on a downward slope, which activates the lower pectoral muscles as you push weights away from your body."
// }, {
//   "id": 3,
//   "bodypart": "legs", 
//   "workout_name": "Squat",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/nhoikoUEI8U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "A barbell squat is a push-type, compound exercise which works primarily your quadriceps, but also trains your glutes, hamstrings, and calves, as well as muscles in your lower back. This workout is considered the 'king of the lifts'."
// }, {
//   "id": 4,
//   "bodypart": "legs", 
//   "workout_name": "Quad Extensions",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/vRQpiTwUeyM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "The leg extension is a type of strength training exercise. It's an excellent move for strengthening your quadriceps, which are in the front of your upper legs."
// }, {
//   "id": 5,
//   "bodypart": "legs", 
//   "workout_name": "Lunges",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/QOVaHwm-Q6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "A lunge is a single-leg bodyweight exercise that works your hips, glutes, quads, hamstrings, and core and the hard-to-reach muscles of your inner thighs. Lunges can help you develop lower-body strength and endurance."
// }, {
// }, {
//   "id": 6,
//   "bodypart": "shoulders", 
//   "workout_name": "Overhead Press",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/F3QY5vMz_6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "The Overhead Press is a full body, compound exercise. Your shoulders and arms press the weight over your head while your legs, lower back and abs balance you. The Overhead Press is one of the best exercises to build strong, muscular and healthy shoulders with bigger arms."
// }, {
// }, {
//   "id": 7,
//   "bodypart": "shoulders", 
//   "workout_name": "Side Laterals",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/X0qUJoAU8GM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "The side lateral raise is an upper body isolation exercise for building shoulder strength and muscle. It's a staple strength training move and is a great option for accessory work on upper body training days. This exercise particularly focuses on the lateral or medial head of the deltoid, making them appear wider and more developed."
// }, {
// }, {
//   "id": 8,
//   "bodypart": "shoulders", 
//   "workout_name": "Rear delt fly",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/0GSu6Z-Oj7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "Begin by lifting both arms out to your sides. Maintain a slight bend in your elbows. Continue upward until your elbows are even with your back and you can squeeze your shoulder blades together. Then begin slowly lowering the dumbbells back to starting position."
// }, {
//   "id": 9,
//   "bodypart": "back",
//   "workout_name": "Deadlift",
//   "workout_video": <div><iframe width="610" height="300" src="https://www.youtube.com/embed/-4qRntuXBSc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "The barbell deadlift is a compound exercise used to develop overall strength and size in the posterior chain. It is a competition lift in the sport of powerlifting, but is also considered a classic benchmark of overall strength."
// }, {
//   "id": 10,
//   "bodypart": "back",
//   "workout_name": "Pull-up",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/-tHy40sfzp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "A pull-up is an upper-body strength exercise. The pull-up is a closed-chain movement where the body is suspended by the hands and pulls up. As this happens, the elbows flex and the shoulders adduct and extend to bring the elbows to the torso."
// }, {
//   "id": 11,
//   "bodypart": "back",
//   "workout_name": "One-arm Dumbbell Rows",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/KR8onsa5jFQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "the single-arm row works out the latissimus dorsi (lats). You also engage the entire back, shoulders, and arms (the trapezius, rhomboids, teres major and minor, deltoids, infraspinatus, biceps, brachialis, brachioradialis, and even pecs)."
// }, {
//   "id":12,
//   "bodypart": "arms", 
//   "workout_name": "Dumbbell curls",
//   "workout_video": <div><iframe width="610" height="300" src="https://www.youtube.com/embed/jZrxHTSGV84" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "Dumbbell Curls work the biceps muscles at the front of the upper arm, and also the muscles of the lower arm—the brachialis, and brachioradialis."
// }, {
//   "id": 13,
//   "bodypart": "arms", 
//   "workout_name": "Skull Crushers",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/QXzhjRnYRT0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "The skull crusher is a push exercise that works the triceps brachii in isolation. It works this muscle from the elbow up to the latissimus dorsi of the back."
// },
//  {
//   "id": 14,
//   "bodypart": "arms", 
//   "workout_name": "Wrist Curls",
//  "workout_video": <div><iframe width="610" height="300" src="https://www.youtube.com/embed/ZcvhJ_exix8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "The wrist curl is a weight training exercise for developing just the wrist flexor muscles of the forearm. It is therefore an isolation exercise. Ideally, it should be done in combination with the reverse wrist curl (also called wrist extension) to ensure equal development of the wrist flexor and wrist extensor muscles."
// },
//  {
//   "id": 15,
//   "bodypart": "cardio",
//   "workout_name": "Rowing Machine",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/QPvYrfyGHi8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "The rowing machine will work your rhomboids (upper back), latissimus dorsi (mid back at either side of your torso), quadriceps (front of your thighs), hamstrings (back of your thighs), your core muscles and your biceps and forearms."
// }, {
//   "id": 16,
//   "bodypart": "cardio",
//   "workout_name": "Stairmaster",
//   "workout_video": <div><iframe width="610" height="300" src="https://www.youtube.com/embed/tl90dPJ9Od8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "the Stairmaster strengthens your thighs, buttocks, and calves – but your legs go through a full range of motion, and that is pivotal for shaping toned muscles."
// },{
//   "id": 17,
//   "bodypart": "cardio",
//   "workout_name": "Treadmill",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/8i3Vrd95o2k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "The treadmill mainly works the lower body and cardiovascular system. The principal muscles involved are the thighs – both quadriceps and hamstrings – the calves and the glutes, more so as you increase the incline on your treadmill. The abdominals are also worked, especially if you run."
// }, {
//   "id": 18,
//   "bodypart": "stretches-warmup", 
//   "workout_name": "External Oblique Stretch",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/VSJUfWO6Zv8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "The external oblique muscles are located on the outer surface of the sides of the abdomen, on each side of the rectus abdominis. The muscles extend from the lower ribs to the pelvis. The external oblique muscles are responsible for the twisting of the trunk."
// }, {
//   "id": 19,
//   "bodypart": "stretches-warmup", 
//   "workout_name": "Quad stretch",
//   "workout_video":<div><iframe width="610" height="300" src="https://www.youtube.com/embed/CZBKSOtyssM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "Your quads are made up four muscles, all of which help straighten your knee: the rectus femoris, the vastus lateralis, the vastus medialis, and the vastus intermedius."
// }, {
//   "id": 20,
//   "bodypart": "stretches-warmup", 
//   "workout_name": "Chest stretch",
//   "workout_video": <div><iframe width="610" height="300" src="https://www.youtube.com/embed/wwKWBwj-05U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>,
//   "workout_desc": "Pectoral muscles are the muscles that connect the front of the human chest with the bones of the upper arm and shoulder."
// }
// ];

const routes = [
  {
    path: '/',
    component: LandingPage,
    // workoutsList: workoutsList
  },
  {
    path: '/workout/bodypart',
    component: WorkoutList,
    // workoutsList: workoutsList
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workoutsList: []
    }

  }

  componentDidMount() {
    this.fetchWorkouts()
  };

  fetchWorkouts =  async () => {
    let workoutsRes = await fetch(`${config.API_ENDPOINT}/api/workouts`)
      let result = await workoutsRes.json()
      console.log(result)
      this.setState({
        workoutsList: result
      })
  }


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
}


  render() {

    return (
     <ApiContext.Provider value={{workoutsList: this.state.workoutsList}}>
      <main className='App'>
        {this.renderRoutes()}
      </main>
      </ApiContext.Provider>
    )
  }
};

export default withRouter(App);