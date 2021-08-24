import React from "react";
import TitleList from "../components/TitleList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTitleListAction } from "../redux/titleListDuck";

function Home() {
	const dispatch = useDispatch();
	const isLoading = useSelector((store) => store.titleList.isLoading);
	const titleList = useSelector((store) => store.titleList.list);
	const isError = useSelector((store) => store.titleList.isError);
	useEffect(() => {
		dispatch(getTitleListAction());
	}, [dispatch]);

	return (
		<div className="container">
			<TitleList titles={titleList} isloading={isLoading} iserror={isError} />
		</div>
	);
}

export default Home;
