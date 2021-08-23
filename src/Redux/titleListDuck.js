import axios from "axios";

const inialState = {
	list: [],
};

const GET_TITLE_LIST_SUCCESS = "GET_TITLE_LIST_SUCCESS";

export default function titleListReducer(state = inialState, action) {
	switch (action.type) {
		case GET_TITLE_LIST_SUCCESS:
			return {
				...state,
				list: action.payload,
			};
		default:
			return state;
	}
}

export const getTitleListAction = () => async (dispatch) => {
	try {
		const res = await axios.get(
			"https://api.themoviedb.org/3/discover/movie?api_key=756e1622851086c3d011b8461693b962&language=es-ES&sort_by=popularity.desc"
		);
		dispatch({
			type: GET_TITLE_LIST_SUCCESS,
			payload: res.data.results,
		});
	} catch (error) {
		console.log(error);
	}
};

// https://mfwkweb-api.clarovideo.net/services/content/list?api_version=v5.8&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=1uka8rqujakqqp65me121o7017&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=9869
