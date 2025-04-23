const accountId = 144556;
let accountEmail ="hanash@gmail.com";
var accountPassword = "12345";
accountCity = "Peshawar";
let accountState;

// accountId = 22; //const variables are immutable.
accountEmail = "hkay@gmail.com";
accountPassword = "31313131";
accountCity = "Batkhela";

console.log(accountId);

/*

due to issues in block and funtional scope, prefer not to use var

*/

console.table([accountEmail,accountId,accountPassword,accountCity, accountState]);
