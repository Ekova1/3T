import { useState, useEffect } from "react";


export function useNow(interval, enabled) {
	const [now, setNow] = useState();

	useEffect(() => {
		if (!enabled) {
			setNow(undefined)
			return
		}

		const int = setInterval(() => {
			setNow(Date.now());
		}, interval);

		return () => {
			clearInterval(int);
		};

	}, [interval, enabled]);

	return now;
}
