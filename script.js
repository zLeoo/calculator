
var classes = ["calculator","mode","bar","display-container","buttons-container"]
var btn = document.getElementsByClassName("button")
var disabled = true

function changeMode(mode){
    if(mode === "dark"){
      /*document.getElementsByClassName("calculator")[0].classList.remove('light')
        document.getElementsByClassName("mode")[0].classList.remove('light')
        document.getElementsByClassName("bar")[0].classList.remove('light')
        document.getElementsByClassName("display-container")[0].classList.remove('light')
        document.getElementsByClassName("buttons-container")[0].classList.remove('light')*/

        for(i = 0; i < classes.length; i++){
            document.getElementsByClassName(classes[i])[0].classList.remove('light')

        }
       
        for(i = 0; i < btn.length; i++){
            btn[i].classList.remove('light')
        }
    }
    if(mode === "light"){
        /*document.getElementsByClassName("calculator")[0].classList.add('light')
        document.getElementsByClassName("mode")[0].classList.add('light')
        document.getElementsByClassName("bar")[0].classList.add('light')
        document.getElementsByClassName("display-container")[0].classList.add('light')
        document.getElementsByClassName("buttons-container")[0].classList.add('light')*/

        for(i = 0; i < classes.length; i++){
            document.getElementsByClassName(classes[i])[0].classList.add('light')
        }

        for(i = 0; i < btn.length; i++){
            btn[i].classList.add('light')
        }
       
    }
}

function calc(type,value){
    if(type === "number"){
        //console.log('numero: '+value)
        document.getElementsByClassName("count")[0].innerHTML += value
        disabled = false
    }
    if(type === "action" && disabled == false){
        if(value === "+" || value === "-" || value === "*" || value === "."){
            document.getElementsByClassName("count")[0].innerHTML += " "+value+" "
            disabled = true
        }
        if (value === "/" && disabled == false){
            value = " ( "+document.getElementsByClassName("count")[0].innerHTML+" ) / "
            document.getElementsByClassName("count")[0].innerHTML = value
            disabled = true
        }
        
        if(value === "="){
            result = eval(document.getElementsByClassName("count")[0].innerHTML)
            document.getElementsByClassName("result")[0].innerHTML = result
            disabled = false     
        }

        if(value === "clear"){
            document.getElementsByClassName("count")[0].innerHTML = ""
            document.getElementsByClassName("result")[0].innerHTML = ""
            disabled = true
        }
          
    }
}