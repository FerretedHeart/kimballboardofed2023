import { Route, Routes } from 'react-router-dom';
import Banner from './banner';
import Bio from './bio';
import Home from './home';
import News from './news';

export function App() {
  return (
    <>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bio" element={<Bio />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
    </>
  );
}

export default App;
