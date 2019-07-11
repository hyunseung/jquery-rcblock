# rcblock
Mouse right click protection script

이미지에 오른쪽 마우스를 클릭 했을때 저작권 표시 하는 jquery 플러그인 입니다.  

```
$(타켓 이미지).rightClickBlock(옵션[선택]); //$("#img").rightClickBlock({msg:'메시지내용',deley:2000});
```
  
**옵션**  
msg : 메시지 내용  
style : 메시지 박스 스타일  
em : msg(메시지 내용)에 class="em"이 있는 곳에 스타일을 지정할 수 있습니다.  
deley : 메시지 박스 표시 시간  

 
```
$(function(){
  $("#img").rightClickBlock(
    {
      msg:"이 디자인은 <span class='em'>만지작</span>의 소중한 자산입니다.",
      style:{padding:'7px 10px',background:'#000',color:'#c3c3c3','font-size':'0.68em','border-radius':'5px'},
      em:{color:'#fff','font-weight': 'bold'},
      deley:2000
    }
  );
})
```

