import { useAppSelector } from '../../hooks/hooks';
import { selectBlogs } from '../../redux/blogsSlice';
import BlogsItem from './BlogsItem';
import './RecentBlogsPage.css';

const RecentBlogsPage = () => {
  const blogs = useAppSelector(selectBlogs);
  console.log(blogs);

  return (
    <div className="blogs__page">
      <div className="container">
        <div className="blogs__page-top">
          <h1 className="blogs__title">Recent Blogs</h1>
        </div>
        <div className="blogs__items">
          {blogs.map((blog, index) => {
            return (
              <BlogsItem
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

export default RecentBlogsPage;
