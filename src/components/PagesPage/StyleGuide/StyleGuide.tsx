import StyleItem from './StyleItem';
import { useAppSelector } from '../../../hooks/hooks';
import { selectStyle } from '../../../redux/styleSlice';
import './StyleGuide.css';

const StyleGuide = () => {
  const style = useAppSelector(selectStyle);
  return (
    <div className="style">
      <div className="style__text">
        <h1>Style and Interior Design</h1>
        <p>
          Style is a combination of artistic means and techniques of their use,
          characteristic of works of art. Style in interior design can be
          interpreted as the unity of artistic direction, a harmonious
          combination of features and characteristic traits of the created
          space. All the basic principles of composition used in fine art are
          also applicable to interior design.
          <br /> For a person, a home is a place where it is warm and cozy,
          where they feel protected. Taste, wealth, and the philosophy of the
          homeowner can change with age... And through the arrangement of living
          space, a person expresses the traits of their personality, creating
          the uniqueness of their own territory.
          <br /> The modern market offers us a wide range of means for
          renovation, furnishing, and decorating our homes. The problem of
          "getting" has turned into a problem of "choosing." Individually, the
          things you like can be wonderful, but together... It is very important
          at the very beginning of the journey to your dream home to address
          fundamental questions, such as zoning, considering the lifestyle of
          the homeowner and family members. And choose a common design theme for
          all rooms, which will ultimately form the unified image of your home -
          the style.
        </p>
      </div>
      <div className="style__items">
        {style.map((style, index) => (
          <StyleItem
            photo={style.photo}
            title={style.title}
            text={style.text}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default StyleGuide;
