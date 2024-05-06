import { setPersons } from './redux/personsSlice';
import { setProjects } from './redux/projectsSlice';
import { setBlogs } from './redux/blogsSlice';
import { useAppDispatch } from './hooks/hooks';
import { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUsPage/AboutUs';
import Services from './components/ServicesPage/Services';
import Pages from './components/PagesPage/Pages';
import ContatcUs from './components/ContactUsPage/ContatcUs';
import MainLayout from './layouts/MainLayout';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const addPersonsViaAPI = async () => {
      try {
        const res = await axios.get('http://localhost:4000/persons');
        dispatch(setPersons(res.data));
      } catch (error) {
        console.log('Error fetching persons');
      }
    };
    addPersonsViaAPI();
  }, []);

  useEffect(() => {
    const addProjectsViaAPI = async () => {
      try {
        const res = await axios.get('http://localhost:4000/projects');
        dispatch(setProjects(res.data));
      } catch (error) {
        console.log('Error fetching projects');
      }
    };
    addProjectsViaAPI();
  }, []);

  useEffect(() => {
    const addBlogsViaAPI = async () => {
      try {
        const res = await axios.get('http://localhost:4000/blogs');
        dispatch(setBlogs(res.data));
      } catch (error) {
        console.log('Error fetching blogs');
      }
    };
    addBlogsViaAPI();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="pages" element={<Pages />} />
          <Route path="contact" element={<ContatcUs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
