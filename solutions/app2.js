const cookiesArray = document.cookie.split('; ');
const cookieHandler = {
	getAll() {
		return Object.fromEntries(cookiesArray.map((cookie) => cookie.split('=')));
	},

	flush() {
		cookiesArray.forEach((cookie) => {
			const [key] = cookie.split('=');
			document.cookie = `${key}=; expires=Thu, 01 jan 1970 00:00:00 UTC; path=/;`;
		});
	},

	toSesssionStorage() {
		cookiesArray.forEach((cookie) => {
			const [key, value] = cookie.split('=');
			sessionStorage.setItem(key, value);
		});
	},
};
export default cookieHandler;
