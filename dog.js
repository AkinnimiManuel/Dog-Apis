const DogIMage = document.getElementById('DogImage');
const DogButton = document.getElementById('Dogbutton');

const FecthFog = () => {
	fetch('https://dog.ceo/api/breeds/image/random')
		.then((response) => response.json())
		.then((json) => {
			DogIMage.innerHTML = `<img src = '${json.message}'height = 300 width = 300/>`;
		});
};

FecthFog();
DogButton.onclick = () => {
	FecthFog();
};
