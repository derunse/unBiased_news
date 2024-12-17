export interface NewsItem {
  id: string;
  title: string;
  imageUrl: string;
  date: string;
  facts: string[];
  discussionLeft: {
    content: string;
    person: string;
  };
  discussionRight: {
    content: string;
    person: string;
  };
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: '尹 부부 운명의 7일, 탄핵안·특검법 동시 표결',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.%EC%9C%A4%EB%B6%80%EB%B6%80.jpg-B6rTl3ZtlrlsgtCEfJnuNBT8JncD0v.jpeg',
    date: '2024-12-06',
    facts: [
      '윤석열 대통령 부부의 운명을 가를 국회 탄핵안과 김건희 여사 특검법이 동시에 표결될 예정이다.',
      '더불어민주당은 7일 오후 7시 전후로 탄핵소추안을 비롯해 김건희 여사에 대한 특검법 재표결을 추진하고 있으며, 여당의 불참을 방지하고자 두 사안을 패키지로 다루는 전략을 세웠다.'
    ],
    discussionLeft: {
      content: '탄핵안 표결 시점을 6일이 아닌 7일 저녁으로 정한 이유는 국민도 탄핵안 판단을 위한 시간적 여유를 가질 필요가 있다고 느껴서다. 국민의힘 의원들에게도 한동훈 대표처럼 위헌·위법적인 내란, 반란 기도에 대해서 결단해야 하는 충분한 숙고의 시간을 주는 측면이 있다.',
      person: '조승래 (민주당 수석대변인)'
    },
    discussionRight: {
      content: '당 대표로서 이번 탄핵은 준비 없는 혼란으로 인한 국민과 지지자들의 피해를 막기 위해 통과되지 않도록 노력하겠다.',
      person: '한동훈 (국민의 힘 대표)'
    }
  },
  {
    id: '2',
    title: '박안수 전 계엄사령관 "계엄 선포, 발표 보고 알아"',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.%EB%B0%95%EC%95%88%EC%88%98.jpg-iAZ0gaIwE79t6vBrCbxw3bjumBlZiW.jpeg',
    date: '2024-12-06',
    facts: [
      '박안수 전 계엄사령관은 비상계엄 선포 사실을 윤석열 대통령의 담화를 통해 처음 인지했다고 밝혔다.',
      '계엄사령관에 임명된 직후 바로 전군지휘관회의를 통해 상황을 확인했다고 전했다.',
      '김용현 전 국방부 장관의 지시로 조지호 경찰청장에게 계엄 포고령 관련 내용을 전화로 전파했다고 말했다.'
    ],
    discussionLeft: {
      content: '문장1',
      person: 'ㅇㅇㅇ'
    },
    discussionRight: {
      content: '문장2',
      person: 'ㅁㅁㅁ'
    }
  },
  {
    id: '3',
    title: '감사원장·중앙지검장 헌정사상 첫 탄핵소추',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.%ED%83%84%ED%95%B5%EC%86%8C%EC%B6%94.jpg-6JdNW2HFlIoUlaUdWqJ6MncHsmWewW.jpeg',
    date: '2024-12-06',
    facts: [
      '헌정 사상 처음으로 감사원장과 서울중앙지검장 탄핵소추안이 처리됐다.',
      '더불어민주당 등 야당은 5일 최재해 감사원장과 이창수 중앙지검장 등 검사 3명에 대한 탄핵소추안을 국회 본회의에서 처리했다.',
      '최 원장과 이 지검장은 헌법재판소 탄핵 심판 전까지 직무가 자동으로 정지됐다.',
      '최 원장 탄핵 사유로 대통령 집무실 및 관저 이전 감사가 부실하게 이뤄졌다는 점을 꼽았으며, 이 중앙지검장과 검사들에 대해서는 김건희 여사의 도이치모터스 주가조작 사건을 제대로 수사하지 않았다는 점을 탄핵사유로 적시했다.'
    ],
    discussionLeft: {
      content: '더 이상 보류하다 폐기되는 건 적절치 않다.',
      person: '조승래 (민주당 수석대변인)'
    },
    discussionRight: {
      content: '이재명 대표 방탄에 방해가 되면 국가기관, 헌법기관, 수사기관 할 것 없이 탄핵으로 겁박하고 기능을 마비시키려고 한다.',
      person: '추경호 (국민의힘 원내대표)'
    }
  },
  {
    id: '4',
    title: 'SK하이닉스, 2025년 조직개편 단행',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.sk%ED%95%98%EC%9D%B4%EB%8B%89%EC%8A%A4.jpg-U361P8Oppy9pfWLOTzrLW1oBPIFA1m.jpeg',
    date: '2024-12-06',
    facts: [
      'SK하이닉스는 반도체 산업의 고도화와 급변하는 시장 상황에 대응하기 위해 조직을 재편하고 기술 중심의 조직 운영을 강화하려 하고 있다.',
      '특히, 인공지능(AI)과 차세대 기술에 대한 연구 개발을 강화하고, 글로벌 시장에서의 경쟁력을 강화하려는 목적이 있다.',
      '올해 연말 인사에서 신규 임원 수를 대폭 줄이면서도 승진자 3분의 2를 연구·개발(R&D) 중심의 기술 인재로 발탁했다.'
    ],
    discussionLeft: {
      content: '기술·현장·글로벌 중심 인사로 사업 본연의 경쟁력에 집중해 불확실한 경영환경 극복에 나설 계획.',
      person: 'SK그룹 관계자'
    },
    discussionRight: {
      content: 'SK 싫어요',
      person: 'SK그룹 안티'
    }
  },
  {
    id: '5',
    title: '서울 지하철 1노조 임단협 타결',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.%20%EC%A7%80%ED%95%98%EC%B2%A0%EB%85%B8%EC%A1%B0.jpg-ePTjV2mWXsgFZ5qhRj1lQQGLZaV258.jpeg',
    date: '2024-12-06',
    facts: [
      '서울교통공사 1~3노조 모두 새벽까지 이어진 협상 끝에 사측과의 임금 및 단체협약(임단협) 교섭을 극적 타결하며 출근길 지하철 대란 우려가 해소됐다.',
      '노조에서 요구했던 인력 추가 채용과 2호선 1인 승무제 중단을 사측이 받아들였다.'
    ],
    discussionLeft: {
      content: '지하철 정상 운행을 위해 애써주신 노사 양측과 각자의 일상에서 교섭 결과를 기다려주신 시민 여러분께 감사드린다.',
      person: '오세훈 (서울시장)'
    },
    discussionRight: {
      content: '공사와 서울시가 나름의 성의를 보여 합의할 수 있었다.',
      person: '이양섭 (2노조 위원장)'
    }
  },
  {
    id: '6',
    title: '국·영·수 모두 쉬웠던 수능, 만점자 11명',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.%EC%88%98%EB%8A%A5-7NtsRaf8YD0xnnn28OZ0nQG1lCzitz.jpeg',
    date: '2024-12-06',
    facts: [
      '2025학년도 대학수학능력시험(수능) 채점 결과 국어와 수학 영역이 지난해보다 쉬웠던 것으로 나타났다.',
      '만점자 수가 각각 1000명을 넘어서며 전 과목 만점자도 11명에 달했다.',
      '영역별 표준점수 최고점(만점자 표준점수)은 국어와 수학 모두 지난해보다 낮아졌다. 국어가 139점으로 지난해 150점보다 11점 내려갔고 수학은 140점으로 지난해 148점에서 8점 하락했다. 통상 시험이 어려울 땐 표준점수 최고점이 높아지고, 쉬우면 하락한다.'
    ],
    discussionLeft: {
      content: '지난해 만점자는 졸업생 1명이었는데 올해는 11명이 총 전 과목에 만점을 받았다. 이 중에서 재학생은 4명, 졸업생은 7명으로 확인했다.',
      person: '오승걸 (한국교육과정평가원장)'
    },
    discussionRight: {
      content: '최상위권에선 국어보다 수학 과목이 상대적으로 중요해지고, 영어는 사실상 변별력이 없을 것이다.',
      person: '입시 전문가'
    }
  }
];

