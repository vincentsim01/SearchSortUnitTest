var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Quick Sort
function quickSort(arr) {
    //base case
    if (arr.length <= 1)
        return arr;
    var pivot = arr[arr.length - 1];
    var left = arr.filter(function (el) { return el < pivot; });
    var right = arr.filter(function (el) { return el > pivot; });
    var middle = arr.filter(function (el) { return el === pivot; });
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(left), true), middle, true), quickSort(right), true);
}
var arr = [3, 6, 8, 10, 1, 2, 1, 13, 5, 16, 9, 2, 5, 3, 8, 10, 11];
// console.log(quickSort(arr));
//Merge Sort
function mergeSort(arr) {
    if (arr.length > 1) {
        var mid = Math.floor(arr.length / 2);
        var leftHalf = arr.slice(0, mid);
        var rightHalf = arr.slice(mid);
        mergeSort(leftHalf);
        mergeSort(rightHalf);
        var i = 0;
        var j = 0;
        var k = 0;
        while (i < leftHalf.length && j < rightHalf.length) {
            if (leftHalf[i] < rightHalf[j]) {
                arr[k] = leftHalf[i];
                i++;
            }
            else {
                arr[k] = rightHalf[j];
                j++;
            }
            k++;
        }
        while (i < leftHalf.length) {
            arr[k] = leftHalf[i];
            i++;
            k++;
        }
        while (j < rightHalf.length) {
            arr[k] = rightHalf[j];
            j++;
            k++;
        }
    }
    return arr;
}
// console.log(mergeSort(arr));
//heap Sort
function heapify(arr, heapSize, rootIndex) {
    var _a;
    var largest = rootIndex;
    var leftChild = 2 * rootIndex + 1;
    var rightChild = 2 * rootIndex + 2;
    if (leftChild < heapSize && arr[leftChild] > arr[largest]) {
        largest = leftChild;
    }
    if (rightChild < heapSize && arr[rightChild] > arr[largest]) {
        largest = rightChild;
    }
    if (largest !== rootIndex) {
        _a = [arr[largest], arr[rootIndex]], arr[rootIndex] = _a[0], arr[largest] = _a[1];
        heapify(arr, heapSize, largest);
    }
}
function heapSort(arr) {
    var _a;
    var n = arr.length;
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    for (var i = n - 1; i > 0; i--) {
        _a = [arr[i], arr[0]], arr[0] = _a[0], arr[i] = _a[1];
        heapify(arr, i, 0);
    }
    return arr;
}
console.log(heapSort(arr));
