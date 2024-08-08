// prompt the user to enter their full name . Generate a username for them based on the input . Start username with @AbortController, followed by their full name and ending with the full name length.
fullname=prompt("enter ypur fullname");
userName="@"+fullname;
console.log(userName);
console.log(userName.concat(fullname.length))

