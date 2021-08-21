import axios from "axios";

// Consts
const initList = {
	array: [],
};

// Types
const GET_CONTENT_LIST_SUCCESS = "GET_CONTENT_LIST_SUCCESS";

// Reducer
export default function reducer(state = initList, action) {
	switch (action.type) {
		case GET_CONTENT_LIST_SUCCESS:
			return { ...state, array: action.payload };
		default:
			return state;
	}
}

// Actions
export const getContentListAction = () => async (dispatch, getState) => {
	try {
		const res = await axios.get(
			"https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
		);
		dispatch({
			type: GET_CONTENT_LIST_SUCCESS,
			payload: res.data.results,
		});
	} catch (error) {
		console.log(error);
	}
};
