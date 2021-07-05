let array=[1,2,3,4,5,6,2,8,9,2];
class Count{
    Count(){
        console.log(array.filter(x=>x===2).length)

    }
}
class Sum extends Count{
    sum(){
        let sum=0,i=0;
        for(i;i<array.length;i++){
            sum=sum+array[i];
        }
       console.log(sum); 
    }
}

let obj= new Sum();
obj.sum();
obj.Count();
