import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Beranda from "./Pages/Beranda/Beranda";
import Kegiatan from "./Pages/Kegiatan/Kegiatan";
import TentangKami from "./Pages/TentangKami/TentangKami";

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* <Beranda /> */}
			{/* <Kegiatan /> */}
			<TentangKami />
			<Footer />
		</div>
	);
}

export default App;
