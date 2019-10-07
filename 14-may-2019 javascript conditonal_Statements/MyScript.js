// if-else condition
let time = -10;
let message = '';
if(time >= 0 && time <= 12){
    message = "Good Morning";
}
else if(time > 12 && time <= 17){
    message = "Good Afternoon";
}
else if(time > 17 && time <= 23){
    message = "Good Evening";
}
else{
    message = 'Enter Proper time';
}
console.log(message);

// Switch
let day = new Date().getDay();
let today = `Today is : `;
switch(day){
    case 0:
        today += ' Sunday ';
        break;
    case 1:
        today += ' Monday ';
        break;
    case 2:
        today += ' Tuesday ';
        break;
    case 3:
        today += ' Wednesday ';
        break;
    case 4:
        today += ' Thursday ';
        break;
    case 5:
        today += ' Friday';
        break;
    case 6:
        today += ' Saturday ';
        break;
    default:
        today += ' No Match ';
        break;
}
console.log(today);

