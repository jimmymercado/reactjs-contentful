import marked from 'marked';

const parseMarkdown = (data) =>{
  return{
    __html:marked(data, {sanitized:true})
  }
}

export default parseMarkdown;