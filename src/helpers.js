// debounce is used for pushing the text editor data to database when user pause's typing
export default function debounce(a,b,c){
    var d,e;
    return function(){
      function h(){
        d=null;
        c||(e=a.apply(f,g));
      }
      var f=this,g=arguments;
      return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
    }
  }
  
  // remove html tags from preview on LHS sidebar
  export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
  };