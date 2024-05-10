import { Outlet } from 'react-router-dom';
import PageMenu from '../../components/PagesPage/PageMenu/PageMenu';
import './PagesLayout.css';

const PagesLayout = () => {
  return (
    <div className="pages__layout">
      <div className="pages__sidebar">
        <PageMenu />
      </div>
      <div className="pages__content">
        <Outlet />
      </div>
    </div>
  );
};

export default PagesLayout;
