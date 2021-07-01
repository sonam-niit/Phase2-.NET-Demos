function test()
{
    if(true)
    {
        var x=20;
        let y=30;
        const z=40;

        console.log("block scope "+y);
    console.log("block scope "+z);
    }

    console.log("function scope "+x);
    
}

test();