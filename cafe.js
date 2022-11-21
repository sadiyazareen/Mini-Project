// Add to cart functionality
const UpdateCart = (x) => {
    document.getElementById("cart-btn").innerHTML =  x;   
}

const Counter = (function (x){
    let counter = x
    return [
        function() { counter ++; UpdateCart(counter)},
        function() { 
            if (counter <=0) return;
            counter --; UpdateCart(counter)}
    ]
})(0);






// contact alert
function subMit(){
    var name=document.myform.name.value;  
    var message=document.myform.message.value;

    if (name==""){  
        alert("Name cannot be blank");  
        return false;  
      }
      else if(message==""){  
        alert("Please write your message");  
        return false;  
        }  
      }

