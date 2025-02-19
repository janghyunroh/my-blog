---
title: "Random Process Ch 1."
date: "2025-02-19"
---


## 0.1. 랜덤 프로세스의 개념 및 필요성


 랜덤 프로세스란 랜덤 변수(확률 변수)의 확장된 개념이다. 

  고등학교 수업까지 우리는 랜덤 변수라는 개념을 단순히 '확률적 모델링을 통해 값이 발생하는 변수'라고 배워왔지만, 엄밀히 말하면 이는 옳지 못한 표현이다. 

  랜덤 변수는 숨겨진 Underlying Probability Space의 outcome s를, 특정 실수 값에 매핑시키는 함수이다. 

  - 확률 변수란 확률적으로 모델링된 사건을, 특정 집합(치역)으로 매핑해주는 **스칼라 함수**이다. 
    - $X: s \rightarrow \mathbb{R}$
    - e.g. 주사위 던짐 $\rightarrow$ 눈금 개수 

  - 랜덤 벡터는 확률 변수가 확장된, 최대 무한 개의 확률 변수로 이루어진 **벡터**를 말한다. 
    - $X: s \rightarrow \mathbb{R^n}$
    - e.g.  3개의 주식 $\rightarrow$ 세 주식의 수익률 벡터

  - 랜덤 행렬은 랜덤 벡터가 모여 **행렬 형태**로 정리된 것을 말한다. 
    - $X: s \rightarrow \mathbb{R}^{m\times n}$
    - e.g. n개의 특성을 가지는 m개의 데이터 샘플링 $\rightarrow$ $m \times n$ 행렬
    
  - 랜덤 프로세스는 **사건**뿐만 아니라 **시간(또는 공간)**에 의해 결정되는 **다변수 함수**이다. 
    - $X: s \times t \rightarrow \mathbb{R}$
    - e.g. 주식 가격 변동, 시간 $\rightarrow$ 주가

Random process의 process는 '절차'가 아니라 '과정', 또는 '신호'의 의미에 가깝다. 정확한 의미는 'Probabilistic signal with uncertainty'이다. 

## 0.2. 왜 배워야 하는가?

 불확실성을 엄밀하게 수학적으로 모델링한다는 점에서 거의 모든 공학에서 사용된다. 
 
 인공지능 또한 불확실성이 깊게 관여하는 분야이며, 특히 인공신경망과 신호 처리의 관계를 생각해보면 반드시 공부해야 하는 분야라고 할 수 있다. 특히 시계열 모델 등을 다루려면 반드시 알아야 한다. 

## 0.3. 앞으로 배우게 될 내용

1. 사건에 대한 확률
- random experiment
- probability space
    - Sample Space ($S$)
    - Event Space ($A$)
    - Probability Measure ($p$)
- 확률적 독립(Statistical Independence)
- 조건부 확률(Conditional Probability)

2. 확률 변수(Random Variable)
- 이산확률변수(Discrete)
    - 확률질량함수(PMF)
- 연속확률변수(Continuous)
    - 확률밀도함수(PDF)

- 누적분포함수(CDF - Cumulative Distribution Function)
- CDF를 이용한 PDF, PMF의재정의
- 조건부 CDF/PDF

3. 랜덤 벡터(Random Vector)


4. 랜덤 프로세스(Random Process)
