function getSleepHours (day){
    day = day.toLowerCase();
    switch(day){
      case 'sunday':
       return 9;
        break;
      case 'monday':
       return 7;
        break;
      case 'tuesday':
       return 6;
        break;
      case 'wednesday':
       return 8;
        break;
      case 'thursday':
       return 5;
        break;
      case 'friday':
       return 4;
        break;
      case 'saturday':
       return 10;
        break;
    }
  }
  
  const getActualSleepHours = () => 8 + 8 + 8 + 8 + 8 + 8 + 8; 
  
  const getIdealSleepHours = idealHours => idealHours * 7;
    
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours(8)
    if(actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep!')
    } else if (actualSleepHours >= idealSleepHours){
      console.log('You got ' + (actualSleepHours + idealSleepHours) + 'hours more sleep than needed!')
    } else if(actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours ) + ' hours of sleep, you should get some rest!')
    }
  }
  
  calculateSleepDebt();