function debounce(f, N) {
	let canInvoke = true;

	return function (...args) {
		if (canInvoke) {
			f.apply(null, args);
			canInvoke = false;

			setTimeout(()=>{
				canInvoke = true;
			}, N);
		}
	};
}
