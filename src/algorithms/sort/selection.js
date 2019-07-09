import { swap } from '../../utils';

export function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++){ 
    let indexOfMinElement = i;
    for (let j = i + 1 ; j < length; j++){  
      if (array[indexOfMinElement] > array[j]){
        indexOfMinElement = j;
      }
    }
    swap(array, i, indexOfMinElement);
  }
  return array;
}