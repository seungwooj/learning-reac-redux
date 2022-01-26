import { createStore } from "redux";

// Redux Counter
// Redux is built to help you with handling data!

// State: the data which is changed in your app
// Store: the place where you put your data (state)

// Reducer : a function which can modify your data and returns your data
// Reducer gets state as an input and returns the state as the output
// Reducer should be given to the store

// Action : the second argument of the reducer which is used to actually modify the state
// Action is the way of communication with the reducer
// Action should be an object ({ type: ~~~ })
// Store.dispatch will call the Reducer with the Action

// Subscribe : allows us to listen to the changes of the store

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const PLUS = "PLUS";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
	console.log(count, action); // current state changes
	switch (action.type) {
		case PLUS:
			return count + 1;
		case MINUS:
			return count - 1;
		default:
			return count;
	}
};

const countStore = createStore(countModifier);
console.log(countStore); // disPatch, getState, subscribe, replaceReducer

const onChange = () => {
	number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handlePlus = () => {
	countStore.dispatch({ type: PLUS });
};

const handleMinus = () => {
	countStore.dispatch({ type: MINUS });
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);

countStore.dispatch({ type: PLUS }); // dispatch(action) calls the reducer and reducer execute determined action.
