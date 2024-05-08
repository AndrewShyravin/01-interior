import './TeamItem.css';

type TeamItemProps = {
  name: string;
  profession: string;
  photo: any;
};

const TeamItem: React.FC<TeamItemProps> = ({ name, profession, photo }) => {
  return (
    <div className="team__item">
      <img src={photo} alt="team" />
      <div className="team__item-info">
        <h5 className="team__title-person">{name}</h5>
        <p className="team__text-person">{profession}</p>
      </div>
    </div>
  );
};

export default TeamItem;
