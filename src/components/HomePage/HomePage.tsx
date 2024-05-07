import SectionInteror from '../SectionInterior/SectionInterior';
import SectionInfo from '../SectionInfo/SectionInfo';
import SectionDesign from '../SectionDesign/SectionDesign';
import SectionPeople from '../SectionPeople/SectionPeople';
import SectionBrand from '../SectionBrand/SectionBrand';
import SectionProjects from '../SectionProjects/SectionProjects';
import SectionStatistics from '../SectionStatistics/SectionStatistics';
import SectionBlogs from '../SectionBlogs/SectionBlogs';
import SectionJoin from '../SectionJoin/SectionJoin';

const Home = () => {
  return (
    <>
      <SectionInteror />
      <SectionInfo />
      <SectionDesign />
      <SectionPeople />
      <SectionBrand />
      <SectionProjects />
      <SectionStatistics />
      <SectionBlogs />
      <SectionJoin />
    </>
  );
};

export default Home;
