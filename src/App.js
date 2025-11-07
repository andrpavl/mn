import FundraisingList from "./components/Fundraising/Fundraising";
import NeedsList from "./components/NeedsList/NeedsList";
import Streams from "./components/Streams/Streams";

function App() {
	return (
		<div className="App">
			<NeedsList />
			<div className="adds">
				<FundraisingList />
				<Streams />
			</div>
		</div>
	);
}

export default App;
