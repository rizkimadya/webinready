import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Beranda from "./Pages/Beranda/Beranda";
import Kegiatan from "./Pages/Kegiatan/Kegiatan";
import AdArt from "./Pages/Profile/AdArt";
import Gbho from "./Pages/Profile/Gbho";
import Exketum from "./Pages/Profile/Exketum";
import JuklakJuknis from "./Pages/Profile/JuklakJuknis";
import TentangKami from "./Pages/TentangKami/TentangKami";
import Sejarah from "./Pages/Profile/Sejarah";
import Berita from "./Pages/Berita/Berita";
import DetailBerita from "./Pages/Berita/DetailBerita";
import DetailKegiatan from "./Pages/Kegiatan/DetailKegiatan";
import Login from "./Pages/Login/login";
import Anggota from "./Pages/Anggota/Anggota";
import Karya from "./Pages/Karya/Karya";
import Struktur from "./Pages/StrukturOrganisasi/Struktur";

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* <Beranda /> */}
			{/* <Kegiatan /> */}
			{/* <TentangKami /> */}
			{/* <AdArt /> */}
			{/* <Gbho /> */}
			{/* <JuklakJuknis /> */}
			{/* <Exketum /> */}
			{/* <Sejarah /> */}
			{/* <Berita /> */}
			{/* <DetailBerita /> */}
			{/* <DetailKegiatan/> */}
			{/* <Login /> */}
			{/* <Anggota /> */}
			{/* <Karya /> */}
			<Struktur />
			<Footer />
		</div>
	);
}

export default App;
