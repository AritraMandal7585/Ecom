function increment(){
    let itemno=document.getElementById("itemno").value;
    let cost=document.getElementById("cost");
    let count=itemno;
    let price=count*15;
    let item=document.getElementById("item").innerText;
    cost.innerText="Rs. "+price;
    if(item.includes(" ")){
        var s=item.replace(' ','_');
        item=s;
    }
    localStorage.setItem("Quantity",itemno);
    localStorage.setItem("Item-name",item);
    localStorage.setItem("Total-Price",price);
}

function passvalue(){
    var itemno=document.getElementById("itemno").value;
    localStorage.setItem("Quantity",itemno);
    return false;
}