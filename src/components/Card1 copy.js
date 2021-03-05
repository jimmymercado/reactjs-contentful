import React, {useState, useEffect, Fragment} from 'react';
import client from '../utils/Client';
import Loader from './Loader';


const Card1 = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client.getEntries({
      'content_type': 'services',
      'fields.service_title': props.title,
      //'order': 'fields.services_items.sys.createdAt'
    })
    .then((entries) => {
       setData(entries.items[0]);
       console.log(data);
    })

  }, [])

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
                return (
                  <div className="col-md-4" key={index}>
                    <div className="media service-wrap">
                      <div>
                        <img className="pr-3" src={item.fields.service_icon.fields.file.url} alt='' />
                      </div>
                      <div className="media-body">
                        <h3 className="media-heading">{item.fields.service_title}</h3>
                        <p>{item.fields.service_description}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            }
                
            </div>                
          </div>
        </section>



                       
      }  
    </Fragment>
  );

}


export default Card1;