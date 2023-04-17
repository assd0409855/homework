var btn = document.querySelector("#btn1")
var inp = document.getElementById('inp1');
var u = document.getElementsByClassName('u1')[0];

function add() {
    var i = document.createElement('li');
    

    i.setAttribute('class', 'l1');
    let listBtn = document.createElement("button")
    listBtn.setAttribute('class', 'del');
    listBtn.innerHTML = '刪除';  //增加button的文字

    i.innerHTML = inp.value;  //取input的值
    u.prepend(i);
    i.append(listBtn);
    //inp.value =''
}
//判斷input是否為空白或是null值
btn.addEventListener('click', function () {
    if(inp.value !== ''){
        add()
    }
});
//btn.addEventListener('click',newbtn)
//u.addEventListener("click", function functionName(){
//})
//event.target 抓選取的事件
u.addEventListener("click", function(event){
    if(event.target.classList[0] == "del"){
        event.target.parentElement.remove()
    }
    console.log(event.target)
})

