debugger;




const draw = (x)=>{
    let ans = ''
    let num = x
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if(num-1 > j){
                ans += "-"
            }
            else{
                ans += "*"
            }  
        }
        for (let j = 0; j < x-1; j++) {
            if (i <= j ) {
                ans += "-"
               
            } else {
                ans += "*"
            }
        }
        ans += "\n"
        num--
    }
    console.log(ans)
}

draw(2)
draw(3)
draw(4)
