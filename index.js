const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//findMatching()
//returns all drivers that match the passed in name
//returns matching drivers if case does not match but letters do
//returns an empty array if there is no match

function findMatching(drivers, driverName){
  return drivers.filter(drivers => drivers.toLowerCase()
=== driverName.toLowerCase())  
}

function  fuzzyMatch(drivers, driverName){
    return drivers.filter(drivers => drivers.charAt(0)=== driverName.charAt(0));
  }

 

function  matchName(drivers, driverName){
const match = drivers.filter(drivers => drivers.name === driverName);
return match;
}




