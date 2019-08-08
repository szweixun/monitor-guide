[ Chapter I. 컴포넌트 모델 구조의 이해 ]

* 컴포넌트 종류
  - 그래피컬 컴포넌트(2D)
   : 넓이와 높이의 속성을 가지고있는 컴포넌트로 대부분의 컴포넌트를 포함하는 유형입니다. 일반적을 모니터링 모델링에 가장 많이 사용되며, 데이터를 매핑할 시 직관적으로 표현됩니다.
   대표적으로 사각형, 텍스트, 프로그레스, 차트, 테이블 등이 있으며 그 외에 약 40여종의 컴포넌트들이 있습니다.
  - 그래피컬 컴포넌트(3D)
   : 2D형태의 컴포넌트에서 깊이를 추가하여 3D형태로 표현이 가능한 컴포넌트들 입니다. 모든 3D컴포넌트는 반드시 3D컨테이너 안에 포함되어 있어야 하며 깊이가 필요한 컴포넌트들은 Spacific속성에서 적용할 수 있습니다.
   모델링은 2D상에서 모델링을 하며

  - Non 그래피컬 컴포넌트 : DataSource, Clone, Template

* 컴포넌트 속성
  - Dimension : Scale, Bound, Center, Rotation
  - Style : Color, Stroke, Line
  - Effect, Animation
  - Text : padding, align, wrap, format, style
  - Hidden, Lock
  - Specific Property

* (그래피컬)컴포넌트 / 컨테이너 구조
  - (컨테이너) 레이아웃
  - 그룹
  - 3D 컨테이너
  - IndoorMap 컴포넌트

* 컴포넌트 설계 원칙
  - TEXT 속성과 VALUE 속성
  - Atomic : 하나의 컴포넌트는 하나의 특화된 기능만 갖는다.
