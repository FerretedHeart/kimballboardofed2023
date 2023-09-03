import { Route, Routes } from 'react-router-dom';
import Banner from './banner';
import Campaign from './campaign';
import Home from './home';
import News from './news';
import Footer from './footer';

export function App() {
  return (
    <>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/campaign" element={<Campaign />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
