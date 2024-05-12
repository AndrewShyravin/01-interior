import { setPersons } from './redux/personsSlice';
import { setProjects } from './redux/projectsSlice';
import { setBlogs } from './redux/blogsSlice';
import { setTeam } from './redux/teamSlice';
import { setPrice } from './redux/priceSlice';
import { setNews } from './redux/newsSlice';
import { setStyle } from './redux/styleSlice';
import { useAppDispatch } from './hooks/hooks';
import { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUsPage/AboutUs';
import Services from './components/ServicesPage/Services';
import Pages from './components/PagesPage/PagesComponent/Pages';
import ContatcUs from './components/ContactUsPage/ContactUs';
import MainLayout from './layouts/MainLayout';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import { useAuth } from './hooks/useAuth';
import AuthLayout from './layouts/AuthLayout';
import NotFound from './components/PagesPage/NotFound/NotFound';
import PricingPlan from './components/PricingPlanPage/PricingPlan';
import RecentBlogsPage from './components/RecentBlogsPage/RecentBlogsPage';
import './App.css';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async (url: string, action: any) => {
      try {
        const res = await axios.get(`http://localhost:4000/${url}`);
        dispatch(action(res.data));
      } catch (error) {
        console.error(`Error fetching ${url}:`, error);
      }
    };

    const dataRequests = [
      { url: 'persons', action: setPersons },
      { url: 'projects', action: setProjects },
      { url: 'blogs', action: setBlogs },
      { url: 'team', action: setTeam },
      { url: 'style', action: setStyle },
      { url: 'news', action: setNews },
      { url: 'prices', action: setPrice },
    ];

    dataRequests.forEach(({ url, action }) => fetchData(url, action));
  }, []);

  const { isAuth } = useAuth();

  return (
    <div className="App">
      <Routes>
        {isAuth ? (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="pages/*" element={<Pages />} />
            <Route path="contact" element={<ContatcUs />} />
            <Route path="pricing" element={<PricingPlan />} />
            <Route path="recentblog" element={<RecentBlogsPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        ) : (
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
