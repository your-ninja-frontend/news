import { Layout, Typography } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.scss';
import Nav from './components/Nav';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import NotFound from './pages/NotFound/NotFound';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <BrowserRouter>
      <Layout className='font-sans min-h-full'>
        <Header className='flex items-center bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300'>
          <Title className='text-xs mb-0'>Hacker News</Title>
          <Nav />
        </Header>
        <Content className='grow'>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='news' element={<News />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
