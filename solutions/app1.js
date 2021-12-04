const setCookie = (value) => {
	const expires = new Date(Date.now() + 15 * 60 * 1000999);
	document.cookie = `token=${value};expires=${expires}`;
};

export default setCookie;
