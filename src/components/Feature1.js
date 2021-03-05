import React, {Fragment, useState, useEffect} from 'react'
import client from '../utils/Client';
import Loader from './Loader';


const Feature1 = () => {

  const [feature, setFeature] = useState([]);

  useEffect(() => {
      //console.log('useEffect');
    //function getContent(){
      //const data = () => {
        // client.getEntries({
        //   content_type: 'feature',
        //   order: 'sys.createdAt'
        // }).then((entries)=>{
        //   //this.setState({homeFeature: entries.items[0].fields});
        //   setFeature(entries.items[0].fields);
        //   console.log(entries.items[0].fields);
        //   //console.log(entries.items[0].fields.feature_title);
        // });
      //}
    //}
    
    async function getContent(){
      
      const res = await client.getEntries({
        content_type: 'feature',
        order: 'sys.createdAt'
      });
      const data = res.items[0].fields;
      setFeature(data);
      //console.log(data);
    }
    getContent();
    
  }, [setFeature])

  //console.log(`title=${feature}`);

  return(
    <Fragment>
      <section id="feature" className="p-4">
      {
        feature.length === 0 ?
        <Loader/>
        :
        <div>
          <div className="container text-center">
            <h1>{feature.feature_title}</h1>
            <p className="lead">{feature.feature_description}</p>
          </div>
          <div className="container">
            <div className="row">
              {
                feature.feature_featureItems.map((item, index) => {
                  return(
                    <div key={index} className="col-md-4">
                      <div className="feature-wrap">
                        <i className={item.fields.feat1_icon}></i>
                        <h2>{item.fields.feat1_title}</h2>
                        <h3>{item.fields.feat1_decription}</h3>
                      </div>
                    </div>
                  )
                })
              }          
            </div>
          </div>
        </div>

      }
      </section>
    </Fragment> 
  );
}

export default Feature1;