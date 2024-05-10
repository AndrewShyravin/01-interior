import './StyleItem.css';

type StyleTypeProps = {
  title: string;
  text: string;
  photo: any;
};

const StyleItem: React.FC<StyleTypeProps> = ({ title, text, photo }) => {
  return (
    <div className="style__item">
      <div className="style__item-info">
        <h1 className="style__item-title">{title}</h1>
        <p className="style__item-text">{text}</p>
      </div>
      <img className="style__item-photo" src={photo} alt="style" />
    </div>
  );
};

export default StyleItem;
