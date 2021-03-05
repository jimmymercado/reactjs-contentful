import React, {useEffect, useState, Fragment} from 'react';
import client from '../utils/Client';
import Loader from './Loader';


const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    client.getEntries({
      content_type: 'gallery',
      order: 'sys.createdAt'
    }).then((entries)=>{
      setPortfolio(entries.items[0]);
      //console.log(portfolio);
    });
  }, []);

  return(
    <Fragment>
      {
        portfolio.length === 0 ?
        <Loader/>
        :
        <section id="portfolio">
          <div className="container">
            <h2>Portfolio</h2>
            <p className="lead">Voluptas sed, natus eos. Commodi per voluptate vestibulum voluptas nibh. Class ante, eiusmod quidem aliqua sociis, platea eros nullam perferendis, cillum natoque maxime cras, duis voluptas soluta tincidunt magnam sodales, erat eveniet cras semper, culpa vitae accusamus quidem, litora mus! Sed cupiditate, earum vestibulum, aliquet lectus diam blanditiis. Enim harum.</p>
          </div>
          <div className="container">
            {
            portfolio.fields.gallery_images.map((item, num = 0) => {
              num += 1;
              return (
                <div key={num} className="cssbox">
                  <a id={num} href={`#${num}`}><img className="cssbox_thumb" src={item.fields.file.url} alt={num}/>
                    <span className="cssbox_full"><img src={item.fields.file.url} alt={num}/></span>
                  </a>
                  <a className="cssbox_close" href="#void"> </a>
                  <a className="cssbox_next" href={`#${num+1}`}>&gt;</a>
                </div>
              )
            })
            }
            

          </div>
        </section>

        
      }
    </Fragment>
  );

}


export default Portfolio;