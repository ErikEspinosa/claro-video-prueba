import React from "react";
import TitleList from "../components/TitleList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTitleListAction } from "../redux/titleListDuck";

function Home() {
	const dispatch = useDispatch();
	const titleList = useSelector((store) => store.titleList.list);
	useEffect(() => {
		dispatch(getTitleListAction());
	}, [dispatch]);

	return (
		<div className="container">
			<TitleList titles={titleList} />
		</div>
	);
}

export default Home;
