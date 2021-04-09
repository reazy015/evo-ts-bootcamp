const swap = (array: number[], a: number, b: number) => {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    return array;
};

const bubbleSort = function(array: number[]){
	const length = array.length;
	let swapped = false;
	for (let i = 0; i < length; i++){
		swapped = false;
		for (let j = 0; j < length - i - 1; j++){
			if (array[j] > array[j + 1] ){
				array = swap(array, j, j + 1);
				swapped = true;
                return array;
			};
		}

		if (!swapped){
			break;
		}
	}
};

export default bubbleSort;
