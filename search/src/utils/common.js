export function debounce(func, wait) {
    let timeout;
    console.log('fang都函数', func, wait,this,arguments)
    return function() {
      let context = this;
      let args = arguments;
      clearTimeout(timeout)
      
      timeout = setTimeout(function(){
        func.apply(context, args)
        console.log(123);
      }.bind(this), wait)
    }
  }