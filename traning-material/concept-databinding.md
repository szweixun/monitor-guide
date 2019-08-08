[ Chapter III. 데이타 바인딩 ]

* 데이타 구조의 이해 - JSON
 - JSON의 개념 및 구조
  : JSON은 KEY, VALUE로 구성되어있는 데이터의 형태임

 - Scene-provider로 보내는 데이터의 형태
  : 퍼블리셔에서 데이터 포맷의 형태 4가지.
   (차트 - 테이블 형태의 데이터 샘플 그림과, 싱글 Value, 오브젝트 Value의 형태 + KEY VALUE 형태)

* 컴포넌트와 JSON 오브젝트의 연결관계 이해
 - ID, CLASS 속성의 이해

* 컴포넌트의 data 속성의 이해
 - accessor: data key/index

* TEXT와 VALUE 속성에서 데이타 직접 활용
 - #{data} 변수처리
 - 암묵적인 타입캐스팅 (TEXT => string, VALUE => number)

* 데이타 수집 방법 - PUSH(Pub/Sub), PULL(Polling)

* 데이타소스 컴포넌트 : MQTT, Stomp, Firebase, REST, ...

* 데이타 확산(spread)
 - target : id, class, (self), (parent), (siblings), (descendant) ..
 - mapping : value, map, range, eval

* Publisher
 - 데이터 푸쉬 설정 방법
 - DB데이터를 JSON형태로 파싱
 - 데이터 파싱의 형태
  1. Single Variable
  2. Key-Value Array
  3. Key-Value Object
  4. Key-Object Object
  5. Custom
