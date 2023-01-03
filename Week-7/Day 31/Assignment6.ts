function max(...ar:number[])
{
    var temp:number = 0;
    for(let n of ar)
    {
        if(n > temp)
        {
            temp = n;
        }
    }
    console.log(temp);
}

max(10, 20, 45, 6, 87, 9, 0, 23, 100);