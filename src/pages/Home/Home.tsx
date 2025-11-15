import { CalendarOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { List, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { fetchStoryIdList, fetchStoryList } from '../../api/api';
import Loader from '../../components/Loader/Loader';
import { Story } from '../../types';

const Home: React.FC = () => {
  const [newsList, setNewsList] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const storyIdList = await fetchStoryIdList();
        const stroyList = await fetchStoryList(storyIdList.slice(0, 100));
        setNewsList(stroyList);
        console.log(stroyList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <List
          itemLayout='vertical'
          dataSource={newsList}
          pagination={{ align: 'center' }}
          loading={loading}
          renderItem={(news) => (
            <List.Item
              key={news.id}
              actions={[
                <IconText icon={StarOutlined} text={news.score?.toString() ?? '0'} key='news-rating' />,
                <IconText
                  icon={CalendarOutlined}
                  text={new Date(news.time).toLocaleDateString() ?? ''}
                  key='news-date'
                />,
                <IconText icon={MessageOutlined} text={news.comments?.toLocaleString() ?? '0'} key='news-comments' />
              ]}
            >
              <Link to='/news' data-id={news.id}>
                <List.Item.Meta title={news.by} description={news.title} />
              </Link>
            </List.Item>
          )}
        />
      )}
    </>
  );
};

export default Home;
