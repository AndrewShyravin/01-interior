import { useAppSelector } from '../../../hooks/hooks';
import { selectBlogs } from '../../../redux/blogsSlice';
import Blog from './Blog';
import './SectionBlogs.css';

const SectionBlogs = () => {
  const blogs = useAppSelector(selectBlogs);

  return (
    <div className="section__blogs">
      <div className="container">
        <div className="blogs__top">
          <h1 className="blogs__title">Recent Blogs</h1>
          <p className="blogs__text">
            Get updates about our latest trends and techniques used in interior
            design project works.
          </p>
        </div>
        <div className="blogs__items">
          {blogs.map((blog, index) => {
            return (
              <Blog
                photo={blog.photo}
                title={blog.title}
                date={blog.date}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionBlogs;
