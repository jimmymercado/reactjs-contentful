import React, {useState, useEffect, Fragment} from 'react';
import client from '../utils/Client';
import Loader from './Loader';
import Card1 from './Card1';

const Feature2 = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client.getEntries({
      'content_type': 'services',
      'fields.service_title': props.Entry_Title,
      //'order': 'fields.services_items.sys.createdAt'
    })
    .then((entries) => {
       setData(entries.items[0]);
       //console.log(data);
    })

  }, [data, props.Entry_Title])

  return(
    <Fragment>      
      {
        data.length===0 ?
        <Loader/>
        :
        <section id="services" className="pt-4">
          <div className="container">
            <div className="text-center">
              <h2>{data.fields.service_title}</h2>
              <p className="lead">{data.fields.service_description}</p>
            </div>
            <div className="row">              
            {
              data.fields.services_items.map((item, index) => {
                return(                  
                  <Card1 key={index} CardTitle={item.fields.service_title} CardIcon={item.fields.service_icon.fields.file.url} CardDescription={item.fields.service_description} />
                )
              })
            }
                
            </div>                
          </div>
        </section>                       
      }  
    </Fragment>
  );

}


export default Feature2;