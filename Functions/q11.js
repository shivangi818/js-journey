function myFunction(str){
    //"Shivangi",count=0 increase as identified as vowel
    let count=0
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
        {
            count++
        }

        
    }
    //console.log(count);
    return count;

}