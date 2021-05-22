
function sleep(){
    console.log("sleep!");
return new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(123) },1000)
    
})
}
async function test(){
    
    console.log("test sleep before!");
    await sleep();
    console.log("test sleep after!");
}
 async function main(){
    await test();
    
    console.log("await sleep before!");
    await sleep();

    console.log("await sleep after!");    
    console.log("adsf");
    
}

main();