export const getData= (myKey) =>{
    const myData = JSON.parse(localStorage.getItem(myKey));
    
    if(!myData){
        return [];
    }
    return myData;
  }