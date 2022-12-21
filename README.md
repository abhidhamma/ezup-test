![carbon (1)](https://user-images.githubusercontent.com/57596218/208799088-fff1f50c-c62e-4e9e-8e72-487d1f76b30e.png)

# Redux

redux toolkit으로 탭의 기능을 담당하는 slice를 만들고

activateMainTab - 탭을 클릭했을때 활성화하는 액션을 실행하는 리듀서

addMainTab - 왼쪽의 탭을 더블클릭하면 탭이 추가되는 액션을 실행하는 리듀서

removeMainTab - 탭을 삭제하는 리듀서

changeMainTabOrder - 탭의 순서를 바꾸는 리듀서

를 만들었습니다.


![carbon (2)](https://user-images.githubusercontent.com/57596218/208799108-13506eb3-9f26-440f-8583-a79a1e5e5f27.png)

# Component

탭이 존재하는 엘리먼트와 각 탭에 드래그앤 드롭을 구현하고 

필요한곳에 slice에서 작성한 reducer를 실행할 수 있는 

action object를 담은 dispatch를 실행하도록 배치하였습니다.
