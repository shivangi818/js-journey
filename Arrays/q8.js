// for a given array with marks of students as given . find the average marks of the entire class


let marks=[85,97,44,37,76,60];
sum=0
for(idx=0;idx<marks.length;idx++){
    sum=sum+marks[idx];
    
}
console.log(sum)
average=sum/marks.length;
console.log(average);