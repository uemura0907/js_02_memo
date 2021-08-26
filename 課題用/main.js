
// 日付を表示する関数
$(function(){
    var now_date  = new Date();
    const today = now_date.getFullYear()+ '/' +(now_date.getMonth()+1)+ '/' +now_date.getDate();
    $("#today").append(today);
});
// const tag1 ="0";
// const tag2 ="0";
// for (const tag1,){
// }

// クリックしたときの関数
$("#save").on("click", function(){
    const today =$("#today").text();
    const kamoku1 =$("#kamoku1").val();
    const kingaku1 =$("#kingaku1").val();
    // const kamoku2 =$("#kamoku1").val();
    // const kingaku2=$("#kingaku2").val();
    
    if(kamoku1 === '' && kingaku1 === ''){
        alert('入力されていません')
        return;
    }
    
    localStorage.setItem("day",today);
    localStorage.setItem("kamoku",kamoku1);
    localStorage.setItem("nedan",kingaku1);
  
    
    const html =`<tr><th>`+today+`</th><td>`+kamoku1+`</td><td>`+kingaku1+"円"+`</td></tr>`;
        $("#list").append(html);

        $("#kamoku1").val("");
        $("#kingaku1").val("");
        // $("#kamoku2").val("");
        // $("#kingaku2").val("");    
});
$("#clear").on("click",function(){
    localStorage.clear();
    $("#list").empty();
});


// function sum(){
//     var pricelist = $("table td[class=price]").map(function(index, val){
//         var price = parseInt($(val).text());
//         if(price >= 0) {
//           return price;
//         } else {
//           return null;
//         }
//       });
//       var total = 0;
//       pricelist.each(function(index, val){
//         total = total + val;
//       });
//       $(".sum_price").text("合計："+total+"円");
//     }


// for(let i=0; i<localStorage.length; i++){
//   const date = localStorage.getItem("day");
//   const kamoku1 = localStorage.getItem("kamoku");
//   const kingaku1 = localStorage.getItem("nedan");

//   const html =`<tr><th>`+date+`</th><td>`+kamoku1+`</td><td>`+kingaku1+"円"+`</td></tr>`;
//   $("#list").append(html);
// }


  if(localStorage.getItem("kamoku")){
        const date = localStorage.getItem("day");
        const kamoku1 = localStorage.getItem("kamoku");
        const kingaku1 = localStorage.getItem("nedan");
    
        const html =`<tr><th>`+date+`</th><td>`+kamoku1+`</td><td>`+kingaku1+"円"+`</td></tr>`;
        $("#list").append(html);
    }
    