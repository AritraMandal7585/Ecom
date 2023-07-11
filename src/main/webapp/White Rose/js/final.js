    let value=document.getElementById("quantity");
    let quantity=localStorage.getItem("Quantity");
    value.value=quantity;
    let payment=document.getElementById("tprice");
    let price=quantity*20;
    payment.value=price;
    value.innerHTML=quantity;

    let item=document.getElementById("Item-name");
    let itemname=localStorage.getItem("Item-name");
    item.value=itemname;