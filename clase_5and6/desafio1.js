let numbers = {}
const randomNumber = (numbers) => {
    for(let i = 0; i < 10000; i++) {
        let number = Math.floor(Math.random() * 20)+1;
        !numbers[number] ? numbers[number] = 1 : numbers[number]++;
    }
}
randomNumber(numbers);

console.log(numbers);