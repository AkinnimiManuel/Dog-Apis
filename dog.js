const DogIMage = document.getElementById('DogImage');
const DogButton = document.getElementById('Dogbutton');

// const FecthDog = () => {
// 	fetch('https://dog.ceo/api/breeds/image/random')
// 		.then((response) => response.json())
// 		.then((json) => {
// 			DogIMage.innerHTML = `<img src = '${json.message}'height = 300 width = 300/>`;
// 		});
// };

const showDog = (json) => {
	DogIMage.innerHTML = `<img src = '${json.message}'height = 300 width = 300/>`;
};

FecthDog = async () => {
	const url = 'https://dog.ceo/api/breeds/image/random';
	try {
		const response = await fetch(url);
		const result = await response.json();
		showDog(result);
		return result;
	} catch (error) {
		return error;
	}
};

FecthDog();

DogButton.addEventListener('click', FecthDog);
