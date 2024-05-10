import { Route, Routes } from 'react-router-dom';
import './Pages.css';
import StyleGuide from '../StyleGuide/StyleGuide';
import Protected from '../Protected/Protected';
import Licenses from '../Licenses/Licenses';
import News from '../News/News';
import NotFound from '../NotFound/NotFound';
import PagesLayout from '../../../layouts/PagesLayout/PagesLayout';

const Pages = () => {
  return (
    <>
      <div className="pages">
        <Routes>
          <Route path="/" element={<PagesLayout />}>
            <Route index element={<StyleGuide />} />
            <Route path="protected" element={<Protected />} />
            <Route path="licenses" element={<Licenses />} />
            <Route path="news" element={<News />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default Pages;
