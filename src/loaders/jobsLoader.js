import { getShoppingCart } from "../utilities/fakedb";

const jobLoader=async()=>{
    const loadedJobs=await fetch('jobDetails.json');
    const jobs=await loadedJobs.json();
    
    
    const storedJobs=getShoppingCart()

    const saveJobs=[] 

    for(const id in storedJobs){
        
        //console.log(id)
          
        const addedJobs = jobs.find(jb=> jb.id == id)

        if(addedJobs){
            const quantity=storedJobs[id];
            //console.log(quantity)
             addedJobs.quantity = quantity;
             saveJobs.push(addedJobs)
        }
    }

    //console.log(storedJobs)
    return saveJobs;

}

export default jobLoader