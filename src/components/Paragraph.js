import React, {useState, useEffect, Fragment } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import client from '../utils/Client';
import Loader from './Loader';


const Paragraph = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    client.getEntries({
      'content_type': 'paragraph'
    })
    .then((entries) => {
       setData(entries.items[0]);
       //console.log(data);
    })
  }, [data])


  

  return (
    <section>
      <div>
        <div className="container pt-4">
          
          {
            data.length===0 ?
            <Loader/>
            :
            <Fragment>
              <h2 className="text-center">{data.fields.paragraph_title}</h2>
              <div>{documentToReactComponents(data.fields.paragraph_description)}</div>
            </Fragment>
          }
        </div>
        
      </div>
    </section>
  )
}

export default Paragraph;