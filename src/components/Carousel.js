import React, {useState, useEffect, Fragment} from 'react';
import client from '../utils/Client';
import Loader from './Loader';


const Carousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client.getEntries({
      content_type: 'homeBanner',
      order: 'sys.createdAt'
    }).then((entries)=>{
      setData(entries.items);
      //console.log(this.state.homeBanner);
    });
  }, []);

  function setCarouselStatus(keyIndex){
    if(keyIndex === 0){
      return 'active';
    }
    return '';
  }


  return(
    <Fragment>
      <section id="banner">
        {
          data.length === 0 ?
          <Loader/>
          :

          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            {
              data.map((item, index) => {
                return (
                  <div key={index} className={`carousel-item ${setCarouselStatus(index)}`}>
                    <img src={item.fields.homeBanner_image.fields.file.url} className="d-block w-100" alt={item.fields.homeBanner_altText}/>
                  </div>
                )
              })
            }            
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        }
      </section>
    </Fragment>
  )
}

export default Carousel;