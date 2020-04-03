const names  = [
	"Ismael",
	"Carlos",
	"Ana",
	"Diego",
	"Laura",
	"Miriam",
	"Karen",
	"Carolina",
	"Karla"
]

const randomName = () => {
	const name = names[Math.floor(Math.random() * names.length)]
	console.log(name)
};

module.exports = { randomName };