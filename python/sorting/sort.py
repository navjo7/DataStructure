unsortedArray = [ 5, 3, 6, 8, 2, 1, 4, 5, 6 ]

print("unsorted : ",*unsortedArray)
# selection sort
for i in range(len(unsortedArray)):
    minimumIndex = i
    for j in range(i+1,len(unsortedArray)):
        if unsortedArray[j] < unsortedArray[minimumIndex]:
            minimumIndex = j

    temp = unsortedArray[i]
    unsortedArray[i] = unsortedArray[minimumIndex]
    unsortedArray[minimumIndex] = temp


for i in range(len(unsortedArray)):
    print(unsortedArray[i],end=' ')
print()