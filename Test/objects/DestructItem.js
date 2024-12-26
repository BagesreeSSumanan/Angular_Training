const item={
                      
    name: 'shoes',
    Size:{
     EU:44,
     US:18
        },

    Status:'live'
    
}
let {name,Size:{EU,US},Status} =item;
console.log(name+ " EU: "+ EU+ " US: "+US+" "+Status)