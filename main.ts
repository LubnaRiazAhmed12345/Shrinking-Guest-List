//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.


let Guest_List : string[] = ["Lubna","Fatima","Shahina","aqsa"];
  // print message
  console.log("unfortunately ! the new dinner table won't arrive so we can invite only two guest");

  // Remove guest from the 
  while(Guest_List.length >2) {
    let removedGuest : string | undefined = Guest_List.pop();
    if(removedGuest !== undefined) {
        console.log(`sorry ${removedGuest}, we can't invite you.`);
            }

  }
  // print a message to each of the two people still on your list,
  // letting them know they're still invited.

  Guest_List.forEach(guest =>{
    console.log(`Dear ${guest}, you are still invited for the dinner`);
  })