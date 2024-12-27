fetch('https://jsonplaceholder.typicode.com/users')
    
    .then(response => response.json())  
    .then(json => {
        const names = json.map(item => item.name);
        names.forEach((element,index) => {
            console.log(index+". "+element)           
        });
      //  console.log(names)  
    })
    .catch(err => console.log('Request Failed', err)); 
