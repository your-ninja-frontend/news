import { Layout, Typography } from 'antd';
import { ReactNode } from 'react';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout className='font-sans min-h-full'>
      <Header className='flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>
        <Title className='font-sans text-lg mb-0 text-zinc-700'>Hacker News</Title>
      </Header>
      <Content className='grow flex flex-col p-[50px]'>{children}</Content>
      <Footer className='bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>Footer</Footer>
    </Layout>
  );
};

export default BaseLayout;
