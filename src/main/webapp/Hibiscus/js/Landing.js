function increment(){
    let itemno=document.getElementById("itemno").value;
    let cost=document.getElementById("cost");
    let count=itemno;
    let price=count*10;
    let item=document.getElementById("item").innerText;
    cost.innerText="Rs. "+price;
    localStorage.setItem("Quantity",itemno);
    localStorage.setItem("Item-name",item);
    localStorage.setItem("Total-Price",price);
}

function passvalue(){
    var itemno=document.getElementById("itemno").value;
    localStorage.setItem("Quantity",itemno);
    return false;
}