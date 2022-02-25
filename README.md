# Account-Book

### 관심 있는 주제를 공부하면서 만들어 본 가계부 서비스

## 시스템 구조
![image](https://user-images.githubusercontent.com/67899069/155756542-5fcc16c1-06b0-4f52-afb6-c12765bbe5d0.png)

## 기술 스택
![image](https://user-images.githubusercontent.com/67899069/155755668-abc88ccb-0e57-4077-a824-09b72964fa7d.png)

## 주요 기능

### 1. 거래내역 리스트 조회
* 날짜에 해당하는 거래내역을 조회할 수 있습니다.
* 거래내역은 월단위, 역순으로 정렬됩니다.
* 일별 수입, 지출 내역을 표시합니다.

### 2. 거래내역 추가, 수정, 삭제
* 거래내역을 추가, 수정, 삭제할 수 있습니다.

### 3. 카테고리 추가, 삭제
* 카테고리를 추가, 삭제할 수 있습니다.
* 카테고리 추가 시 중복되는 이름은 사용할 수 없습니다.
* 카테고리 삭제 시 해당 카테고리가 적용된 거래내역은 미분류로 표시됩니다.

### 4. 거래내역 달력
* 날짜에 해당하는 거래내역이 각 일자에 표시됩니다.(수입, 지출, 총계)
* 날짜에 해당하는 거래내역 요약이 하단에 표시됩니다.

### 5. 거래내역 통계
* Donut Chart를 통해 카테고릴 별 거래내역을 시각화합니다.
* 특정 카테고리를 클릭하면 해당 카테고리의 거래내역을 볼 수 있습니다.

## 프로토타입

|✅ 메인 페이지|✅ 달력 페이지|
|-|-|
|![image](https://user-images.githubusercontent.com/67899069/155740259-4556eaaa-1757-479c-92c2-1aff7f1f0553.png)|![image](https://user-images.githubusercontent.com/67899069/155740561-44b67712-b1de-44b9-bd08-167362d2876f.png)|

|✅ 통계 페이지|✅ 카테고리 추가 입력폼|
|-|-|
|![image](https://user-images.githubusercontent.com/67899069/155740649-4a779dc1-c466-42c4-8213-3d314ed62163.png)|![image](https://user-images.githubusercontent.com/67899069/155741147-54a0f860-1584-49af-8879-7a54a8dd2049.png)|

|✅ 거래내역 (수정, 삭제) 입력폼|✅ 거래내역 추가 입력폼|
|-|-|
|![image](https://user-images.githubusercontent.com/67899069/155740780-f9554813-1a95-4d18-86e5-dffc6acf4cd0.png)|![image](https://user-images.githubusercontent.com/67899069/155741351-fbe121c7-aa6e-4b11-b797-5bef0aa521d9.png)|
