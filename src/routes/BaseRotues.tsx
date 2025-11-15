import { Route, Routes } from 'react-router';
import Home from '../pages/Home/Home';
import News from '../pages/News/News';
import NotFound from '../pages/NotFound/NotFound';

const BaseRotues = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='news' element={<News />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
};

export default BaseRotues;
