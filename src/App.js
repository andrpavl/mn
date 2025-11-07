import FundraisingList from "./components/Fundraising/Fundraising";
import NeedsList from "./components/NeedsList/NeedsList";
import Streams from "./components/Streams/Streams";
import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.App}>
			<NeedsList />
			<div className={styles.adds}>
				<FundraisingList />
				<Streams />
			</div>
		</div>
	);
}

export default App;
