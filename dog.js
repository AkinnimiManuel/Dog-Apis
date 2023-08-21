const DogIMage = document.getElementById('DogImage');
const DogButton = document.getElementById('Dogbutton');

const FecthDog = () => {
	fetch('https://dog.ceo/api/breeds/image/random')
		.then((response) => response.json())
		.then((json) => {
			DogIMage.innerHTML = `<img src = '${json.message}'height = 300 width = 300/>`;
		});
};

FecthDog();
DogButton.onclick = () => {
	FecthFog();
};
