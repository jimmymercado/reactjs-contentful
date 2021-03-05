import React from 'react';


const Card1 = (props) => {
  const {CardTitle, CardDescription, CardIcon} = props;

  return(

    <div className="col-md-4" >
      <div className="media service-wrap">
        <div>
          <img className="pr-3" src={CardIcon} alt='{CardIcon}' />
        </div>
        <div className="media-body">
          <h3 className="media-heading">{CardTitle}</h3>
          <p>{CardDescription}</p>
        </div>
      </div>
    </div>
    
  );

}


export default Card1;