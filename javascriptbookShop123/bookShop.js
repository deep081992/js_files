let b1=document.querySelector('#book1');
let b2=document.querySelector('#book2');
let b3=document.querySelector('#book3');
let b4=document.querySelector('#book4');
let displayPrice=document.querySelector('#disp-book-price');
let displayName=document.querySelector('#Display-Book-Name');
let bookname1=document.querySelector('#book1name');
let bookname2=document.querySelector('#book2name');
let bookname3=document.querySelector('#book3name');
let bookname4=document.querySelector('#book4name');
let cpen=document.querySelector('#checkbox-pen');
let cpencil=document.querySelector('#checkbox-pencil');
let ccover=document.querySelector('#checkbox-book-cover');
let cstickers=document.querySelector('#checkbox-stickers');
let bookAmount=document.querySelector('#disp-total-amount');

/*--------------radio1----------------*/
b1.addEventListener('change',function()
{
    let selectedBookPrice=Number(b1.value);
    displayPrice.innerText=selectedBookPrice;
   let selectedBookName=bookname1.innerText;
    displayName.innerText=selectedBookName;
    //alert(displayPrice.innerText);
    calculate();
   // alert(tamount);

})
/*--------------radio2----------------*/
b2.addEventListener('change',function()
{
    let selectedBookPrice=Number(b2.value);
    displayPrice.innerText=selectedBookPrice;
    let selectedBookName=bookname2.innerText;
    displayName.innerText=selectedBookName;
    calculate();
})
/*--------------radio3----------------*/
b3.addEventListener('change',function()
{
    let selectedBookPrice=Number(b3.value);
    displayPrice.innerText=selectedBookPrice;
    let selectedBookName=bookname3.innerText;
    displayName.innerText=selectedBookName;
})
/*--------------radio4----------------*/
b4.addEventListener('change',function()
{
    let selectedBookPrice=Number(b4.value);
    displayPrice.innerText=selectedBookPrice;
    let selectedBookName=bookname4.innerText;
    displayName.innerText=selectedBookName;
})
/*---------Create object-items---------*/
let extraStuffs=[{id:'01',name:'pen',price:'50'},{id:'02',name:'pencil',price:'20'},{id:'03',name:'Book-cover',price:'100'},{id:'04',name:'sticker',price:'200'}]

/*-----------checkbox-1----------------*/
//let c=document.getElementById('checkbox-pen').checked;
$('#checkbox-pen').change(function()
{
    let rate=0;
   if(this.checked)
   {
       let selectedStuffPen=extraStuffs.filter(function(extraStuff)
    {
       return extraStuff.name==='pen' && extraStuff.price;
       totalPrice+=extraStuff.price
    });
    displaydata(selectedStuffPen,'pen');

   }
   else
       removeCheckBoxvalue('pen');
});
/*cpen.addEventListener('change',function()
{
    if(cpen.checked(true))
    /!*let checkBoxProperty=cpen.prop();
   alert(checkBoxProperty);*!/
   /!*if(cpen.prop("checked")==="true")*!/
   {
       alert("checked");
   }
   else {
       alert("not checked");
   }*/




/*-----------checkbox-2----------------*/
$('#checkbox-pencil').change(function () {
    if(this.checked){
        let selectedStuffPencil=extraStuffs.filter(function(extraStuff)
        {
            return extraStuff.name==='pencil' && extraStuff.price;

        });
        displaydata(selectedStuffPencil,'stuffPencil');
    }
    else {
        removeCheckBoxvalue('stuffPencil');
    }

});

/*
cpencil.addEventListener('change',function()
{

    let selectedStuffPencil=extraStuffs.filter(function(extraStuff)
    {
        return extraStuff.name==='pencil' && extraStuff.price;
    })
    displaydata(selectedStuffPencil);
});*/
/*-----------checkbox-3----------------*/
$('#checkbox-book-cover').change(function () {
    if(this.checked){
        let selectedStuffPencil=extraStuffs.filter(function(extraStuff)
        {
            return extraStuff.name==='Book-cover' && extraStuff.price;
        });
        displaydata(selectedStuffPencil,'pencil');
    }
    else
        removeCheckBoxvalue('pencil');
});

/*
ccover.addEventListener('change',function()
{
    let selectedStuffPencil=extraStuffs.filter(function(extraStuff)
    {
        return extraStuff.name==='Book-cover' && extraStuff.price;
    })
    displaydata(selectedStuffPencil);
});*/
/*-----------checkbox-4----------------*/
$('#checkbox-stickers').change(function () {
    if(this.checked){
        let selectedStuffPencil=extraStuffs.filter(function(extraStuff)
        {
            return extraStuff.name==='sticker' && extraStuff.price;
        })
        displaydata(selectedStuffPencil,'sticker');
    }
    else {
        removeCheckBoxvalue('sticker');
        console.log('Unchecked');
    }
});
/*
cstickers.addEventListener('change',function()
{
    let selectedStuffPencil=extraStuffs.filter(function(extraStuff)
    {
        return extraStuff.name==='sticker' && extraStuff.price;
    })
    displaydata(selectedStuffPencil);
});*/
let totalPrice =0;
/*-----------display-data----------------*/
let displaydata=(extraStuffs,id)=>
{
    let tablebody=document.querySelector('#disp-checkbox-data');
    let rowData=document.createElement('tr');
    rowData.setAttribute('id',id);
    for(let extraStuff of extraStuffs)
    {
        rowData.innerHTML =`
                     <td>${extraStuff.name}</td>
                      <td>${extraStuff.price}</td>
                  `;
        tablebody.appendChild(rowData);
        $('#9').text(totalPrice+=parseInt(extraStuff.price));
    }
    //tablebody.innerHTML=rowData;
   //tablebody.innerHTML.appendChild(rowData);
   // tablebody.innerHTML=rowData;

}
let removeCheckBoxvalue=(id)=> {
    let tablebody=document.querySelector('#disp-checkbox-data').lastChild;
    //let rowData=document.createElement('tr');
    //let rowData=document.removeChild();
    id='#'+id;
    let rate =parseInt(document.querySelector(id).lastElementChild.innerText);
    $('#9').text(totalPrice-=rate);
    document.querySelector(id).remove();
}

let calculate=()=>
{
    let total='';

    let bookAmounts=  displayPrice.innerText;
    //alert(bookAmounts);
    bookAmount.innerText=bookAmounts;
}