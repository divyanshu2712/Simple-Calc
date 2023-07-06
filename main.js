/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable semi */
const disp=document.querySelector(".display")
const btns=document.querySelectorAll(".btn")
const key=document.querySelectorAll(".btns")
btns.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.dataset.num==='=')
        {
            if(disp.value==="")
            {
                disp.value=""
            }
            else
            {
                let len=disp.value.length
                let exp=disp.value
                if((exp[len-1]==="/") || (exp[len-1]==="*"))
                {
                    exp+="1"
                }
                else if ((exp[len-1]==="-") || (exp[len-1]==="+"))
                {
                    exp+="0"
                }
                try{
                    let ans=eval(exp)
                    disp.value=ans
                }
                catch
                {
                    disp.value=""
                    console.log("Invalid Expression Given")
                }
            }
        }
        else if(e.target.dataset.num==='clear')
        {
            disp.value="0"
        }
        else
     {   
        let str=e.target.dataset.num
        if (disp.value==='0')
        {
            disp.value=str
        }
        else{
            disp.value=disp.value+str
        }
    }
}
)})