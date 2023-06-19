import Home from "../Components/screens/Home"
import Auth from "../Components/screens/Auth"
import NewWorkout from "../Components/screens/New-workout"
import Profile from "../Components/screens/Profile"


export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: false
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: false
	} /* 
	{
		path: '/new-exercise',

		component: NewExercise,
		isAuth: true,
	},

	{
		path: '/workout/:id',

		component: SingleWorkout,
		isAuth: true,
	},
	{
		path: '/workouts',

		component: ListWorkouts,
		isAuth: true,
	},
	{
		path: '/exercise/:id',

		component: SingleExercise,
		isAuth: true,
	}, */
]