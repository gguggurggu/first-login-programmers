      // 나만의 함수 만들고, 버튼 클릭하면 호출하기
      function myFunction() {
        alert("1");
        alert("2");
        alert("3");
      }

       // ID 란에 입력된 값을 팝업창에 띄우기
       function popId() {
        let userId = document.getElementById("txt-id").value;

        if (!userId) {
          alert("아이디를 입력해주세요.");
        } else {
          alert(userId);
        }
      }

      // var vs. let vs. const
      function compareVariable() {
        let num1 = 10;
        const num2 = 30;

        num1 = 20;
        alert("num1 : " + num1);
        alert("num2 : " + num2);
      }
