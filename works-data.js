const works = [
  {
    title: "아름다운 선택",
    englishTitle: "Beautiful Choice",
    category: "AI WEDDING BRAND FILM",
    year: "2026",
    description: "운명은 기다리는 것이 아니라 스스로 선택하는 것이라는 메시지를 담은 AI 웨딩 브랜드 필름입니다. 한 여성이 자신의 인생에서 가장 특별한 사람을 망설임 없이 선택했듯, 가장 아름다운 순간을 담을 공간도 직접 선택한다는 이야기를 시네마틱하게 표현했습니다.",
    thumbnail: "assets/works/beautiful-choice.jpg?v=20260727-1",
    youtubeId: "6rvvmInEPw0"
  },
  {
    title: "AI가 잇는 희망, 사람을 잇는 KT",
    englishTitle: "Connecting Hope, Connecting People",
    category: "AI SOCIAL BRAND FILM",
    year: "2026",
    description: "AI는 기술을 연결하는 것을 넘어 사람과 사람의 마음을 이어주는 도구가 될 수 있습니다. 버려지는 것들 속에서도 새로운 가치를 발견하고, 작은 연결이 희망으로 이어지는 과정을 따뜻한 감성의 스토리텔링으로 표현한 AI 브랜드 필름입니다.",
    thumbnail: "assets/works/kt-connecting-hope.jpg?v=20260727-1",
    youtubeId: "z5U-bVgRG7A"
  },
  {
    title: "Fusion Tomorrow",
    englishTitle: "Infinite Energy, Infinite Possibilities",
    category: "AI SCIENCE BRAND FILM",
    year: "2026",
    description: "인류가 꿈꿔온 무한 청정에너지는 먼 미래의 이야기가 아니라 오늘의 연구와 도전에서 시작됩니다. 핵융합 기술이 만들어 갈 지속가능한 미래와 새로운 가능성을 시네마틱한 영상으로 담아낸 AI 브랜드 필름입니다.",
    thumbnail: "assets/works/fusion-tomorrow.jpg?v=20260727-1",
    youtubeId: "6R4xQJToS4g"
  }

,
  {
    title: "사람을 잇는 미래의 길",
    englishTitle: "2050 Korea Future Railway",
    category: "AI FUTURE RAIL BRAND FILM",
    year: "2026",
    description: "철도는 단순한 교통수단을 넘어 사람과 도시, 그리고 미래를 연결하는 길입니다. 2050 대한민국 미래철도를 상상하며 AI 기술과 시네마틱한 영상미로 더 안전하고 지속가능한 이동의 미래를 담아낸 브랜드 필름입니다.",
    thumbnail: "assets/works/future-rail.jpg?v=20260727-4",
    youtubeId: "0sD2mJt0sKk"
  }
,
  {
    title: "세상이 잠들면 카페가 깨어난다",
    englishTitle: "4°C AI CAFE",
    category: "AI BRAND FILM",
    year: "2026",
    description: "모두가 잠든 시간에도 누군가에게는 따뜻한 휴식이 필요합니다. 24시간 운영되는 무인카페를 배경으로 AI 기술과 감성적인 영상미를 통해 언제나 열려 있는 공간의 따뜻한 가치를 담아낸 브랜드 필름입니다.",
    thumbnail: "assets/works/4c-ai-cafe.jpg?v=20260727-5",
    youtubeId: "NXyUA8_TDTI"
  }
,
  {
    title: "빛으로 세우다",
    englishTitle: "Immanuel Church",
    category: "AI BRAND FILM",
    year: "2026",
    description: "믿음은 사람을 세우고 공동체는 세상을 변화시킵니다. 임마누엘교회의 비전과 희망의 메시지를 영화적인 영상미와 AI 기술로 담아낸 브랜드 필름입니다.",
    thumbnail: "assets/works/immanuel-church.jpg?v=20260727-6",
    youtubeId: "pYvFkHQr1fk"
  }
,
  {
    title: "10년을 담근 깊은 맛",
    englishTitle: "Woori Farm",
    category: "AI FOOD BRAND FILM",
    year: "2026",
    description: "좋은 된장은 하루아침에 만들어지지 않습니다. 10년의 기다림과 정성, 그리고 자연이 빚어낸 깊은 맛을 시네마틱한 영상미와 AI 기술로 담아낸 브랜드 필름입니다.",
    thumbnail: "assets/works/woori-farm.jpg?v=20260727-7",
    youtubeId: "kHojhVs_J9Y"
  }
,
  {
    title: "도시를 깨우는 빛",
    englishTitle: "4°C AI",
    category: "AI TECHNOLOGY BRAND FILM",
    year: "2026",
    description: "혁신은 어둠을 밝히는 것에서 시작됩니다. 4°C AI의 기술이 빛을 통해 멈춰 있던 도시에 새로운 생명과 활력을 불어넣는다는 상상을 시네마틱한 영상미와 AI 기술로 구현한 브랜드 필름입니다.",
    thumbnail: "assets/works/4c-ai-city.jpg?v=20260727-8",
    youtubeId: "gJlw_saqYdo"
  }
,
  {
    title: "Mission: Smile",
    englishTitle: "AI Medical Brand Film",
    category: "AI MEDICAL BRAND FILM",
    year: "2026",
    description: "보이지 않는 적은 언제나 미소를 노립니다. Mission: Smile은 치아를 위협하는 보이지 않는 적과의 전쟁을 SF 액션 영화처럼 재해석한 AI 브랜드 필름입니다. 첨단 기술로 적을 추적하고 제거하는 과정을 압도적인 시네마틱 연출로 구현하여, 치과 치료를 '미소를 되찾기 위한 마지막 미션'으로 완성했습니다.",
    thumbnail: "assets/works/mission-smile.jpg?v=20260727-9",
    youtubeId: "C4Jb2W5-qgQ"
  }
  ,
{
title: "사랑은 언제나 먼저 옵니다",
englishTitle: "하나님의 위대한 사역 여정",
category: "AI CINEMATIC FILM",
year: "2026",
description: "100여 년 전 한국에 전해진 의료선교의 정신에서 시작해 오늘날 캄보디아로 이어지는 사랑과 헌신의 여정을 생성형 AI와 시네마틱 영상 언어로 재구성한 작품입니다.",
thumbnail: "assets/works/love-comes-first.jpg?v=20260811-1",
youtubeId: "cAZ0ALQtua4"
}
];
