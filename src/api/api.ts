import axios from 'axios';
import { Story, StoryIdsList } from '../types';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const BASE_URL_QUERY_PARAMS = 'print=pretty';

export const fetchStoryIdList = async () => {
  try {
    const responseNewsIdList = await axios(`${BASE_URL}/newstories.json?${BASE_URL_QUERY_PARAMS}`);
    const newsIdList = await responseNewsIdList.data;
    return newsIdList;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const fetchStoryList = async (newsIdList: StoryIdsList) => {
  try {
    const responseNewsList: Story[] = await Promise.all(
      newsIdList.map(async (news: number) => {
        const responseNews = await axios(`${BASE_URL}/item/${news}.json?${BASE_URL_QUERY_PARAMS}`);
        const data: Story = await responseNews.data;
        return data;
      })
    );
    return responseNewsList;
  } catch (error) {
    console.log(error);
  }
  return [];
};
