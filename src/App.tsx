import { setPersons } from './redux/personsSlice';
import { setProjects } from './redux/projectsSlice';
import { setBlogs } from './redux/blogsSlice';
import { useAppDispatch } from './hooks/hooks';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUsPage/AboutUs';
import Services from './components/ServicesPage/Services';
import Pages from './components/PagesPage/Pages';
import ContatcUs from './components/ContactUsPage/ContatcUs';
import MainLayout from './layouts/MainLayout';
import './App.css';

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
      dispatch(addPersonsViaAPI);
    };
  }, []);

  useEffect(() => {
    const addProjectsViaAPI = async () => {
      try {
        const res = await axios.get('http://localhost:4000/projects');
        dispatch(setProjects(res.data));
      } catch (error) {
        console.log('Error fetching projects');
      }
      dispatch(addProjectsViaAPI);
    };
  }, []);

  useEffect(() => {
    const addBlogsViaAPI = async () => {
      try {
        const res = await axios.get('http://localhost:4000/blogs');
        dispatch(setBlogs(res.data));
      } catch (error) {
        console.log('Error fetching blogs');
      }
      dispatch(addBlogsViaAPI);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="pages" element={<Pages />} />
            <Route path="contact" element={<ContatcUs />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
