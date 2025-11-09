import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage";
import Streams from "./pages/Streams/Streams";
import FundraisingList from "./pages/Fundraising/Fundraising";


function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<HomePage />} />
        <Route path="fundraising" element={<FundraisingList />} />
        <Route path="streams" element={<Streams />} />
      </Route>
    </Routes> 		
	);
}

export default App;
