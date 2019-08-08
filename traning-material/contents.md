[ Prerequisites ] 
- SQL
- Javascript (기초)
- JSON
 
[ Chapter I. 컴포넌트 모델 구조의 이해 ]
 
* 컴포넌트 종류 :
- 그래피컬 컴포넌트 : 2D 컴포넌트, 3D 가능 (3dish) 컴포넌트
- Non 그래피컬 컴포넌트 : DataSource, Clone, Template
 
* 컴포넌트 공통 속성
- Dimension : Scale, Bound, Center, Rotation
- Style : Color, Stroke, Line
- Effect, Animation
- Text : padding, font, ..
- Hidden, Lock
 
* (그래피컬)컴포넌트 / 컨테이너 구조 
- (컨테이너) 레이아웃 
- 그룹
- 3D 컨테이너
 
* 컴포넌트 설계 원칙 
- TEXT 속성과 VALUE 속성 
- Atomic : 하나의 컴포넌트는 하나의 특화된 기능만 갖는다.
 
[ Chapter II. 애니메이션 및 효과 ]
 
* 애니메이션
- AnimationFrame의 이해
- 애니메이션 공통 속성
 
* 그래피컬 효과
- 그림자, 그라데이션, 백그라운드 패턴
 
* 이벤트
- tap, hover 이벤트
 
[ Chapter III. 데이타 바인딩 ]
 
* 데이타 구조의 이해 - JSON 
* 컴포넌트와 JSON 오브젝트의 연결관계 이해
* 컴포넌트의 data 속성의 이해
- ID, CLASS 속성의 이해
* TEXT와 VALUE 속성에서 데이타 직접 활용 
- #{data} 변수처리
- 암묵적인 타입캐스팅 (TEXT => string, VALUE => number)
* 데이타 수집 방법 - PUSH(Pub/Sub), PULL(Polling)
* 데이타소스 컴포넌트 : MQTT, Stomp, Firebase, REST, ...
* 데이타 확산(spread)
- accessor: data key/index
- target : id, class, (self), (parent), (siblings), (descendant) ..
- mapping : value, map, range, eval
 
[ Chapter IV. 완성도 높은 보드 편집 팁 및 실습 ]
 
* 모델러를 활용한 편집 기능의 이해
- 복사/붙여넣기, 맞춤, UNDO/REDO, 확대/축소, ShortCut Key, ..
* 설계과정에서 컴포넌트 갯수는 최소로 
- Group의 활용
- Lock 속성의 활용
- ...
 
[ Chapter V. 모니터링 활용 ]
 
* Play 
* Full Screen
* Mobile
 
[ Chapter VI. 컴포넌트 개발자 과정 ]
 
* 개발환경 구성 (yeoman generator-things) 
* 컴포넌트 개발 템플릿 설명
* 컴포넌트 간단 테스트 환경
* things-scene API
* 컴포넌트 라이프사이클 이해
- create, ready, start, stop, dispose
* 이벤트 시스템의 이해
* 컴포넌트 설계 TIP
* SDK 활용 => 어플리케이션에 보드 임베딩