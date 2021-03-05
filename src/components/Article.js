import React, {useState, useEffect} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import parseMarkdown from '../utils/parseMarkdown';
import client from '../utils/Client';
import Loader from './Loader';


const Article = (props) => {
  const [data, setData] = useState([]);
  const {slug} = useParams();
  const history = useHistory();
  
  useEffect(() => {
    
    if(slug){
      console.log(slug);
      client.getEntries({
        content_type: 'blogs',
        'fields.blogs_slug': slug
      }).then((entries) => {        
        setData(entries.items[0]);
        //console.log(entries.items[0]);
      })
    }
    
  }, [])

  const redirectToTarget = () => {    
    history.push('/blogs');
  }

  return(
    <div className="container">
    {
      data.length===0?
      <Loader/>
      :
      
      <div className="row">
        <div className="col-md-12 pt-4">
          <div> 
            
            <img className="img-fluid" src={data.fields.blogs_imageTeaser.fields.file.url} alt=""/>
            <h2 className="text-center m-4" >{data.fields.blogs_title}</h2>
            <p dangerouslySetInnerHTML={parseMarkdown(data.fields.blogs_description)}></p>
            <button><Link to="#" onClick={redirectToTarget}>Back</Link></button>
          </div>
        </div>
      </div>
      
    }
    <div className="spacer"/>
    </div>
    
  )

}

export default Article;