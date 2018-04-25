function comp(fn1, fn2) {
    var args = Array.prototype.slice.call(arguments);
	var result;

	function foo() {
		result = Array.prototype.slice.call(arguments);
        console.log('args:-',args);
		args.forEach(fn => {
			    console.log('fn:-', fn);
				if(typeof fn === 'function' ) {
					if(typeof result !== 'object')
						result = fn(result);
					else 
					result = fn(...result);
                }
				console.log('result:-', result);
        })
		return result;
    }
	return foo;
}
