import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import client from '../utils/Client';
import Loader from './Loader';
import truncateText from '../utils/truncateText';


const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client.getEntries({
      'content_type': 'blogs',
      'order': 'sys.createdAt'
    }).then((entries)=>{
      setData(entries.items);
    });

  }, []) 

  return(
    <section id="blog" className="pt-4">
      <div className="container">
        <div className="text-center">
          <h2>Blogs</h2>
          <p className="lead">
            Aut quas laboriosam alias sed ultrices placerat praesentium? Quam, augue anim officiis at tempore asperiores, interdum arcu porro! Luctus impedit, maecenas hymenaeos. Posuere tempore, class repudiandae class! Sapiente quisquam pretium venenatis nobis ratione, nunc pulvinar, exercitationem consequat incididunt hymenaeos cupiditate. Iste blandit nulla occaecati non dictumst dolore quod! Interdum quos.
          </p>
        </div>

        {
          data.length === 0 ?
          <Loader/>
          :              
          <div className="row">
          {
            data.map((item, index) => {
              return (
              <div key={index} className="col-md-6 blog-content">
                <img src={item.fields.blogs_imageTeaser.fields.file.url} alt=""/>
                <h3><Link to={`../blogs/${item.fields.slug}`}>{item.fields.blogs_title}</Link></h3>
                <p>
                  {truncateText(item.fields.blogs_description, 250)}
                </p>
                <Link to={`../blogs/${item.fields.slug}`} className="btn btn-primary">Read more...</Link>
              </div>
              )
            })
          }
          </div>
          


        }

        
      </div>
    </section>
  )
}

export default Blog;