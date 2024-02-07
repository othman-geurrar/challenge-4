const readline = require('readline');
const fs = require('fs');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for their name
const contacts = [];
function addContact (){
    rl.question('enter contact name : ' ,(name)=>{
        rl.question('enter contact phone number : ', (phoneNumber)=>{
            const contact = { name , phoneNumber};
            contacts.push(contact)
            console.log(`th contact ${name} added successfully!`)  
            main();
        })
        
    })
    
}


//addContact();
function displayContact (){
    console.log('all contacts')
    contacts.forEach((contact)=>{
        console.log(`cotact name : ${contact.name} , contact phone number : ${contact.phoneNumber}`)
    });
    main()
}



function searchContact() {
    rl.question('Enter the contact name to search: ', (searchName) => {
      const foundContact = contacts.find((contact) => contact.name.toLowerCase() === searchName.toLowerCase());
      if (foundContact) {
        console.log(`Contact found: Name: ${foundContact.name}, Phone: ${foundContact.phoneNumber}`);
      } else {
        console.log(`Contact "${searchName}" not found.`);
      }
      main(); // Go back to the main menu
    });
  }


function exitApp(){
    console.log('Exiting the application. Goodbye!')
    rl.close();
}


function main(){
    console.log('Contact Manager');
    console.log('1. Add a contact');
    console.log('2. Display all contacts');
    console.log('3. Search for a contact');
    console.log('4. Exit the application');

    rl.question('Select an option (1, 2, 3, or 4):' , (option) => {
        switch(option){
            case '1': addContact();
            break;
            case '2': displayContact();
            break;
            case '3': searchContact();
            break;
            case '4': exitApp()
            break
            default:
                console.log('invalid choice please try again');
                main();
        }
        
    })
}
main();