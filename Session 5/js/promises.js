function flippingACoin()
{
    return new Promise((resolve,reject)=>{
        const val=Math.round(Math.random()*1);//random function return value between 0 to 1
        console.log(val);
        val? resolve('Heads!!'):reject('Tails!!');
    });
}
    async function result()
    {
        try{
            const result= await flippingACoin();
            console.log(result);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    result();
    result();
    result();
    result();
    result();
    