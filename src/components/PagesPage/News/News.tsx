import { useAppSelector } from '../../../hooks/hooks';
import { selectNews } from '../../../redux/newsSlice';
import NewsItem from './NewsItem';
import './News.css';

const News = () => {
  const news = useAppSelector(selectNews);
  console.log(news);
  return (
    <div className="news">
      <h1>News</h1>
      <div className="news__items">
        {news.map((news, index) => (
          <NewsItem
            title={news.title}
            date={news.date}
            photo={news.photo}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
