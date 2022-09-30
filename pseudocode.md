## Pseudocode for Mind Reader

### STATE:

 - Schematic:
 
![image](https://user-images.githubusercontent.com/101759410/192631172-4b155126-0860-4018-a801-74d806e03a44.png)



```

INPUTS:
 Zipcode field --> user input
  
OUTPUTS:
 City --> API
 Temperature --> API
 Condition --> API
 Other Info --> API

ACTIONS:
 Get Weather --> button
 
```

### Event Listeners:
- Get Weather button
  - Calls zipcodeValidtion()
  - If zipcode is valid, calls getWeatherData()


### Functions:
- CREATE zipcodeValidation()
    - IF zipcode length is equal to 5 and is not a number return true
    - ELSE return false and create error message

- CREATE getWeatherData()
    - GET data with async await method
    - IF response is good, capture data
    - IF response errors, catch error with console log and create error message

- CREATE currentState()
    - GET API response data, parse needed values using dot notation and assign to variables    
 

 ### START:
 ```
 zipcodeValidation()
 getWeatherData()
 addEventListener 
 currentState()
 
 ```
 
 
 ### END:
 ```
 addEventlistener - clears zipcode field
 ```
