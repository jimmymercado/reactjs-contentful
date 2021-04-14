import React from 'react';
import axios from 'axios';

const Contact = () => {


  const onSubmit = () => {
    let bodyFormData = new FormData();
    bodyFormData.append('sSubject', 'subject');
    bodyFormData.append('sTo', 'jimmy_mercado@trimble.com');
    bodyFormData.append('sFrom', 'webserver@trimble.com');
    bodyFormData.append('sBody', 'Hello World');
    bodyFormData.append('sCC', '');
    bodyFormData.append('sBCC', '');
    bodyFormData.append('format', 'HTML');

    let data = {
      'sSubject':'subject',
      'sTo':'jimmy_mercado@trimble.com',
      'sFrom':'webserver@trimble.com',
      'sBody':'Hello World',
      'sCC':'',
      'sBCC':'',
      'format':'HTML',
    }
    let x='?sSubject=subject' +
      '&sTo=jimmy_mercado@trimble.com'+
      '&sFrom=webserver@trimble.com'+
      '&sBody=Hello World'+
      '&sCC='+
      '&sBCC='+
      '&format=HTML'


    console.log('sending...');

    // axios.post('http://newcd1.trimble.com/webservices/email.asmx/SendEmail' + x,{
      
    // }).then(function(res){
    //   console.log(res);
    // }).catch(function(err){
    //   console.log(err);
    // })

    // axios({
    //   method:'post',
    //   url: 'http://newcd1.trimble.com/webservices/email.asmx/SendEmail',
    //   data: bodyFormData,
    //   headers:{'Content-Type': 'multipart/form-data'}
    // }).then(function(res){
    //   console.log(res);
    // }).catch(function(err){
    //   console.log(err);
    // })

    fetch('http://newcd1.trimble.com/webservices/email.asmx/SendEmail' + x,{
      method: 'POST',
      headers:{'Content-type':'application/json'}
    }).then(r=>r.json()).then(res=>{
      if(res){
        console.log(res);
      }
    });


  }

  return(
    <div>
      <section id="section" className="pt-4">
        <div className="container">
          <div className="text-center">
            <h2>Drop your message</h2>
            <p className="lead">Nisl reiciendis penatibus repellendus! Illum exercitation porro eius, ex, tempus pariatur magnis feugiat vel praesentium a labore labore doloribus euismod lectus. Platea odio voluptas, assumenda nisl penatibus penatibus possimus .</p>
          </div>
          <form className='form' onSubmit={onSubmit} >            
            <input type='submit' value='Submit' className='btn btn-dark btn-block'/>
          </form>

        </div>
      </section>
    </div>
  );

}

export default Contact;