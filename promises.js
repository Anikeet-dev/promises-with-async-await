
console.log('person1 : shows ticket')
console.log('person2 : shows ticket')

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('popcorn'),4000);
    });
    const addButter = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('butter'), 5000);
    });
    const getColdDrinks = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('cold drinks'), 6000);
    });
    
    let ticket = await promiseWifeBringingTicks;
    
    console.log(`wife: I have the ${ticket}`)
    console.log('husband: We should go in')
    console.log('wife: no i am hungry')
    
    let popcorn = await getPopcorn;
    
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in')
    console.log('wife: no i need butter on my popcorn')
    
    let butter = await addButter;
    
    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: anything else?')
    console.log('wife: Ok, i need one last thing.')
    console.log('husband: what?')
    console.log('wife: cold drinks')
    
    let coldDrinks = await getColdDrinks;
    
    console.log(`husband: i got ${coldDrinks}`);
    console.log('wife: lets go we are getting late.')
    
    
    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));
