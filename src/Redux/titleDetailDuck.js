import axios from "axios";

const inialState = {
	detail: [],
};

const GET_TITLE_DETAIL_SUCCESS = "GET_TITLE_DETAIL_SUCCESS";

export default function titleDetailReducer(state = inialState, action) {
	switch (action.type) {
		case GET_TITLE_DETAIL_SUCCESS:
			return {
				...state,
				detail: action.payload,
			};
		default:
			return state;
	}
}

export const getTitleDetailAction = (id) => async (dispatch) => {
	try {
		const res = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=756e1622851086c3d011b8461693b962&language=es-ES`
		);
		dispatch({
			type: GET_TITLE_DETAIL_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};
