let inp1 = document.getElementById('input1')
let inp2 = document.getElementById('input2')
let inp3 = document.getElementById('input3')
function btnpls(id)
{
    let number = 1
    if(id =='btnpls1' && inp1.value !=50){
        let result = +inp1.value + +number
        inp1.value = result
        inp1.focus()
    }else if(id =='btnpls2'){
        let result = +inp2.value + +number
        inp2.value = result
        inp2.focus()
    }else if(id == 'btnpls3'){
        let result = +inp3.value + +number
        inp3.value = result
        inp3.focus()
    }
}
function btnremov(id)
{
    let number = 1
    if(id =='remov1'){
        let result = +inp1.value - +number
        inp1.value = result
        inp1.focus()
    }else if(id =='remov2'){
        let result = +inp2.value - +number
        inp2.value = result
        inp2.focus()
    }else if(id == 'remov3'){
        let result = +inp3.value - +number
        inp3.value = result
        inp3.focus()
    }
}














