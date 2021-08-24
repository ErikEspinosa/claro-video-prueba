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
			`https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=rrscut2td9j0v73m68jrf3k665&group_id=${id}`
		);
		dispatch({
			type: GET_TITLE_DETAIL_SUCCESS,
			payload: res.data.response.group.common,
		});
	} catch (error) {
		console.log(error);
	}
};
