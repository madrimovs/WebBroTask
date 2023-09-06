import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./Pages/Basket/Basket";
import Category from "./Pages/Catergory/Category";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Liked from "./Pages/Liked/Liked";
import Login from "./Pages/Login/Login";
import SinglePage from "./Pages/Single/SinglePage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/single/:id" element={<SinglePage />} />
				<Route path="/category" element={<Category />} />
				<Route path="/liked" element={<Liked />} />
				<Route path="/basket" element={<Basket />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<Error />} />
			</Routes>
			s
		</BrowserRouter>
	);
}

export default App;
