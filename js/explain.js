window.addEventListener("wheel", function(e){
    ge.preventDefault();
},{passive : false});

var $html = $("html");
var page = 1;
var lastPage = $(".content1").length;

$html.animate({scrollTop:0},10);
$(window).on("wheel", function(e){
if($html.is(":animated")) return;
if(e.originalEvent.deltaY > 0){
if(page== lastPage) return;
page++;
}else if(e.originalEvent.deltaY < 0){
if(page == 1) return;
page--;
}
var posTop = (page-1) * $(window).height();

$html.animate({scrollTop : posTop});

});
// 한 번 스크롤 했을 때 영역 이동 



var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $("#typing-txt ul li").length;

// 타이핑될 텍스트를 가져옴
var typingTxt = $("#typing-txt ul li").eq(liIndex).text(); 
//liIndex 인덱스로 구분해 한줄씩 가져옴

typingTxt=typingTxt.split(""); // 한 글자씩 잘라 배열로

if(typingBool==false){ // 타이핑이 진행되지 않았다면 
typingBool=true; 
var tyInt = setInterval(typing,100); // 반복
} 

function typing(){ 
$("#typing ul li").removeClass("on");
$("#typing ul li").eq(liIndex).addClass("on");
//현재 타이핑되는 문장에만 커서 애니메이션

if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
$("#typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한 글자씩 이어줌 
typingIdx++; 
} else{ //한 문장 끝나면
if(liIndex<liLength-1){
// 인덱스 1증가
liIndex++; 
//다음 문장 타이핑하기 위한 세팅
typingIdx=0;
typingBool = false; 
typingTxt = $("#typing-txt ul li").eq(liIndex).text(); 

//다음 문장 타이핑전 1초 쉼
clearInterval(tyInt);
//타이핑종료

setTimeout(function(){
//1초후에 다시 타이핑 반복 시작
tyInt = setInterval(typing,100);
},1000);
} else if(liIndex==liLength-1){

//마지막 문장까지 써지면 반복종료
clearInterval(tyInt);

//1초후
setTimeout(function(){
//사용했던 변수 초기화
typingBool = false; 
liIndex=0;
typingIdx=-0;

//첫번째 문장으로 세팅
typingTxt = $("#typing-txt ul li").eq(liIndex).text(); 
//타이핑 결과 모두 지우기
$("#typing > ul > li").html("")

//반복시작
tyInt = setInterval(typing,100);
}, 1000);


}
} 
}
