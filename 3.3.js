
debugger;
const draw = (x) => {
    let num = x
    const list = []
    for (let i = 0; i < x; i++) {
        const o = []
        for (let j = 0; j < x; j++) {
            if (num > j) {
                
                o.push("*")
                
            }
            else {
                o.push("-") 
            }
        }
        list.push(o)
        num--

    }
    console.log(list)



}

draw(2)
draw(3)
draw(4)
