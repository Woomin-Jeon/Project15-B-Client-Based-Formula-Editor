import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {setCount, resetCount} from "./slice";

export default function Counter() {
	const dispatch = useDispatch();
	const count = useSelector(state => state.count);

	const handleClick = () => {
		dispatch(setCount(count + 1));
	};

	const handleResetbutton = () => {
		dispatch(resetCount());
	};

	return (
		<>
			<div>{count}</div>
			<button type="button" onClick={handleClick}>+</button>
			<button type="button" onClick={handleResetbutton}>Reset</button>
		</>
	);
}
