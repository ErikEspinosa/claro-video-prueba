import React from "react";
import TitleDetails from "../components/TitleDetails";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTitleDetailAction } from "../redux/titleDetailDuck";
import { useParams } from "react-router-dom";

function Single() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const titleDetail = useSelector((store) => store.titleDetail.detail);
	const isLoading = useSelector((store) => store.titleDetail.isLoading);
	const isError = useSelector((store) => store.titleDetail.isError);
	useEffect(() => {
		dispatch(getTitleDetailAction(id));
	}, [dispatch, id]);

	return (
		<div className="container">
			<TitleDetails
				detail={titleDetail}
				isloading={isLoading}
				iserror={isError}
			/>
		</div>
	);
}

export default Single;
