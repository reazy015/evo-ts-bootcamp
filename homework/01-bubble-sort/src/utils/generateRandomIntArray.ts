const generateRandomIntArray = (elementsNumber: number) => (
    [...new Array(elementsNumber)].map(() => Math.round(Math.random() * 8) * 30 + 15)
)

export default generateRandomIntArray;
