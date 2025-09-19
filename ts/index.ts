//Quick Sort
function quickSort(arr: number[]):number[]{
    //base case
    if(arr.length <=1) return arr; 

    let pivot = arr[arr.length -1];
    let left = arr.filter((el)=> el<pivot);
    let right = arr.filter((el)=> el>pivot);
    let middle = arr.filter((el)=> el===pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}




// console.log(quickSort(arr));


//Merge Sort
function mergeSort(arr:number[]):number[]{
    if(arr.length>1){
        const mid = Math.floor(arr.length/2);
        const leftHalf = arr.slice(0,mid);
        const rightHalf = arr.slice(mid);

        mergeSort(leftHalf);
        mergeSort(rightHalf);

        let i=0;
        let j=0;
        let k=0;

        while(i<leftHalf.length && j<rightHalf.length){
            if(leftHalf[i]<rightHalf[j]){
                arr[k]=leftHalf[i];
                i++;
            }else{
                arr[k]=rightHalf[j];
                j++;
            }
            k++;
        }
        while(i<leftHalf.length){
            arr[k]=leftHalf[i];
            i++;
            k++;
        }
        while(j<rightHalf.length){
            arr[k]=rightHalf[j];
            j++;
            k++;
        }
    }
    return arr;
}

// console.log(mergeSort(arr));

//heap Sort
function heapify(arr:number[], heapSize:number, rootIndex:number){
    let largest = rootIndex;
    const leftChild = 2*rootIndex+1;
    const rightChild = 2*rootIndex+2;

    if(leftChild < heapSize && arr[leftChild] > arr[largest]){
        largest = leftChild;
    }
    if(rightChild<heapSize && arr[rightChild]>arr[largest]){
        largest=rightChild;
    }
    if(largest !== rootIndex){
        [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
        heapify(arr,heapSize,largest);
    }
}

let arr = [3,6,8,10,1,2,1,13,5,16];
function heapSort(arr:number[]){
    const n = arr.length;
    for(let i = Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i);
    }

    for(let i = n-1; i>0; i--){
        [arr[0],arr[i]]=[arr[i],arr[0]];
        heapify(arr,i,0);
    }
    return arr;
}

console.log(heapSort(arr));