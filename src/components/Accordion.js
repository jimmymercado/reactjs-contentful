import React, {useState, useEffect, Fragment} from 'react';
import client from '../utils/Client';
import Loader from './Loader';
import marked from 'marked';

const Accordion = () => {

  const [accordion, setAccordion] = useState([]);

  useEffect(() => {
    client.getEntries({
      content_type: 'accordion',
      order: 'sys.createdAt'
    }).then((entries)=>{
      setAccordion(entries.items[0]);
      //console.log(accordion);
    });

  }, []);

  function accordionToggle(keyIndex){
    if(keyIndex === 1){
      return 'show';
    }
    return 'collapsed';
  }
  function getParsedMarkdown(data){
    return{
      __html:marked(data, {sanitized:true})
    }
  }

  return (
    <Fragment>
      <section id="faq">        
        {
          accordion.length === 0 ? 
          <Loader/>
          :          
          <div className="container">
            <h2>{accordion.fields.title}</h2>
            <p className="lead" dangerouslySetInnerHTML={getParsedMarkdown(accordion.fields.description)}></p>
                    
            
              <div className="accordion" id="accordionExample">
              {
                accordion.fields.accordionItems.map((item, num = 0) => {
                  num += 1;
                  return (
                    <div key={num} className="accordion-item">
                      <h2 className="accordion-header" id={`heading${num}`}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${num}`} aria-expanded="true" aria-controls={`collapse${num}`}>
                          {item.fields.title}
                        </button>
                      </h2>
                      <div id={`collapse${num}`} className={`accordion-collapse collapse ${accordionToggle(num)}`} aria-labelledby={`heading${num}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p dangerouslySetInnerHTML={getParsedMarkdown(item.fields.description)}></p>
                        </div>
                      </div>
                    </div>

                  )
                })
              }
                
                
              
            </div>
            <div className="spacer"/>
          </div>
        }

          
        </section>
    </Fragment>
  )
}

export default Accordion;