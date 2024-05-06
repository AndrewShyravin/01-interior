import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import { useAuth } from '../hooks/useAuth';

const MainLayout = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};

export default MainLayout;
