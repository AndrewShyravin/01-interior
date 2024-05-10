import './NewsItem.css';

type NewsItemProps = {
  photo: any;
  title: string;
  date: string;
};

const NewsItem: React.FC<NewsItemProps> = ({ photo, title, date }) => {
  return (
    <div className="news__item">
      <img src={photo} alt="news" />
      <div className="news__item-info">
        <p className="news__item-title">{title}</p>
        <p className="news__item-date">{date}</p>
      </div>
    </div>
  );
};

export default NewsItem;
