import java.util.Arrays;

class Sort {

    public int[] selectionSort(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            int minimumIndex = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minimumIndex]) {
                    minimumIndex = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[minimumIndex];
            arr[minimumIndex] = temp;
        }
        return arr;
    }

    public void bubbleSort(int arr[]) {

    }

    public void insertionSort(int arr[]) {

    }

    public static void printingArray(String name, int arr[]) {

        System.out.print(name + ": ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
        }
        System.out.println();
    }

    public static void main(String[] args) {
        System.out.println("Welcome to sorting");
        int arr[] = { 5, 3, 6, 8, 2, 1, 4, 5, 6 };
        System.out.println("Printing Input Array: " + Arrays.toString(arr));
        int changeArr[] = new int[arr.length];
        System.arraycopy(arr, 0, changeArr, 0, arr.length);

        Sort sort = new Sort();
        int printArray[];
        printArray = sort.selectionSort(changeArr);
        printingArray("Input Array", arr);
        printingArray("selection sort", printArray);

    }
}