// main.js

/* content1 - 퀵메뉴 이미지 */
// for()문을 이용해서 <img>를 quick01_0000.png~quick01_00019.png 생성
// <span>안에 넣기

/*
let quick1 = "";
for(let i=0;i<20;i++){
    if(i<10){
        quick1 += `<img src="images/quick01/quick01_0000${i}.png"/>`;
    }else{
        quick1 += `<img src="images/quick01/quick01_000${i}.png" />`;
    }
}
document.querySelector("span.quick1").innerHTML = quick1; */

// content1 이미지
const quickSpan = document.querySelectorAll('.content1>ul>li>a>span');

for(let j=0;j<quickSpan.length;j++){//span 4개 0,1,2,3 갯수만큼 for문 4번 반복
    let images = ''
    for(let i=0;i<20;i++){// 각 span안에 img 20개 생성
        if(i<10){
            images += `<img src="images/quick0${j+1}/quick0${j+1}_0000${i}.png"/>`;
        }else{
            images += `<img src="images/quick0${j+1}/quick0${j+1}_000${i}.png" />`;
        }
    }
    quickSpan[j].innerHTML = images;

}


/* 로그인 이미지 */
let appear = "";
for(let k=0;k<57;k++){
    if(k<10){
        appear += `<img src="images/appear/appear_0000${k}.png" />`;
    }else{
        appear += `<img src="images/appear/appear_000${k}.png" />`;
    }
}
document.querySelector("a.appear").innerHTML = appear;

let loop = "";
for(let h=0;h<82;h++){
    if(h<10){
        loop += `<img src="images/loop/loop_0000${h}.png" />`;
    }else{
        loop += `<img src="images/loop/loop_000${h}.png" />`;
    }
}
document.querySelector("a.loop").innerHTML = loop;

/* 로그인 애니메이션 */
// appear 0~56 이미지
// animation: ani 2.85s linear 0s 1;
// animation: ani 2.85s linear 0.05s 1;
// animation: ani 2.85s linear 0.10s 1;

// loop 0~81 이미지
// animation: ani 4.1s linear 2.85s infinite;
// animation: ani 4.1s linear 2.90s infinite;
// animation: ani 4.1s linear 2.95s infinite;
const delay = 0.05;
const appearImgs = document.querySelectorAll(".appear>img");
const loopImgs = document.querySelectorAll(".loop>img");
for(let i=0;i<appearImgs.length;i++){ //애니메이션
    appearImgs[i].style.animation = `ani 2.85s linear ${i*delay}s 1`;
}
for(let j=0;j<loopImgs.length;j++){ //자동실행
    loopImgs[j].style.animation = `ani 4.1s linear ${2.85+(j*delay)}s infinite`;
}


/* 고객센터 */
// toggle()
// title="고객센터 열기" -> title="고객센터 닫기"
const topMenuDD = document.querySelectorAll('dl.topMenu>dd');
topMenuDD[4].addEventListener('click',e => {
    e.currentTarget.classList.toggle("on");
    if(e.currentTarget.classList.contains("on")){
        e.currentTarget.children[0].setAttribute("title","고객센터 닫기");
    }else{
        e.currentTarget.children[0].setAttribute("title","고객센터 열기");
    }
})

/* 주메뉴 */
// .header_wrap.on
// nav.gnb>ul>li>ul.on
const headerWrap = document.querySelector(".header_wrap");
const gnbMenu = document.querySelectorAll('.gnb>ul>li'); //큰li
var subMenu = document.querySelectorAll('.gnb>ul>li>ul');

for(var i=0;i<gnbMenu.length;i++){
    gnbMenu[i].addEventListener('mouseover',() => {
        // 고객센터에 on붙어 있으면 고객센터의on을 지운다
        if(topMenuDD[4].classList.contains('on')){
            topMenuDD[4].classList.remove("on");
            //[4]는 인덱스 번호가 0,1,2,3,...으로 시작돼서 5번째 dd는 4번이다!!!
        }
        // 검색박스에 on붙어 있으면 검색박스의 on을 지운다
        if(srchOpen.classList.contains('on')){
            srchOpen.classList.remove("on");
            srchBox.classList.remove("on");
        }

        headerWrap.classList.add("on");
        subMenu.forEach(item => {
            item.classList.add("on");
        })
    }); //moueover
    gnbMenu[i].addEventListener('mouseout',() => {
        headerWrap.classList.remove("on");
        subMenu.forEach(item => {
            item.classList.remove("on");
        })
    }); //mouseout
    gnbMenu[i].children[0].addEventListener('focus',() => {
        headerWrap.classList.add("on");
        subMenu.forEach(item => {
            item.classList.remove("on");
        })
    }); //focus
    gnbMenu[i].children[0].addEventListener('blur',() => {
        headerWrap.classList.remove("on");
        subMenu.forEach(item => {
            item.classList.remove("on");
        })
    }); //blur
};

/* 검색열기닫기 */
const srchBox = document.querySelector('form.srch');
const srchOpen = document.querySelector('.srch_open');

srchOpen.addEventListener('click',e => {
    e.preventDefault();
    e.currentTarget.classList.toggle('on'); // srchOpen.classList.도 가능
    srchBox.classList.toggle('on');

    if(e.currentTarget.classList.contains('on')){
        e.currentTarget.children[0].setAttribute('title','검색입력서식 닫기');
    }else{
        e.currentTarget.children[0].setAttribute('title','검색입력서식 열기');
    }
});

//배너
//next 버튼을 눌렀을 때 
//배너번호 1증가 1left -2left
//배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로
//배너프레임의 left 값 변경해서 배너 움직이게 

//prev버튼 눌렀을 때

//오토배너 작동 settimeout , 재귀함수 사용

const btnNext = document.querySelector('.btn_next');
const btnprev = document.querySelector('.btn_prev');
const bnnFrame = document.querySelector('.banner_frame');
const bnnSection = document.querySelectorAll(".banner_frame>section"); //0~11번 섹션

const arrowA = document.querySelectorAll('.banner_arrow > a');
const rollingA = document.querySelectorAll('.banner_rolling a');

const bnn_rollA = document.querySelectorAll('.banner_rolling li a'); //a가 12개

let bnnW = document.querySelector('body>section').offsetWidth;
window.addEventListener('resize', () => {
  bnnW = document.querySelector('body>section').offsetWidth;
});

let bnnNum = 0;
let lastNum = bnnSection.length -1;


let secWhite = bannerNumer => { //함수를 만들어 중복되는 거 묶어주기
  bnn_rollA.forEach(item => { //롤링배너번호
    item.classList.remove('on');
    });
    bnn_rollA[bannerNumer].classList.add('on');

  if(bnnSection[bannerNumer].classList.contains('white')) {
    arrowA.forEach(item => {
     item.classList.add('white');
    })
    rollingA.forEach(item => {
     item.classList.add('white');
    }) 
 
   }else {
     arrowA.forEach(item => {
       item.classList.remove('white');
      })
      rollingA.forEach(item => {
       item.classList.remove('white');
      })
  }
  
}
secWhite(0);

btnNext.addEventListener('click', e => {
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum) bnnNum =0;
  //bnnFrame.style.left = `${-bnnNum * 100}%`; //0,-100%,200%...-1100%
  bnnFrame.style.left = `${-bnnNum * bnnW}px`; 
  secWhite(bnnNum);
});

btnprev.addEventListener('click', e => {
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum =lastNum;
  bnnFrame.style.left = `${-bnnNum * bnnW}px`; //prev를 눌러도 left 값은 -로 이동됨.
  secWhite(bnnNum);
});

//오토배너
let autoBanner = () => {
  bnnNum++;
  if(bnnNum>lastNum) bnnNum =0;
  //bnnFrame.style.left = `${-bnnNum * 100}%`; //0,-100%,200%...-1100%
  bnnFrame.style.left = `${-bnnNum * bnnW}px`; 
  secWhite(bnnNum);

  autoBnn = setTimeout(autoBanner,5000);
};
let autoBnn = setTimeout(autoBanner, 5000);


/* 재생/멈춤 버튼 */
let flag = true;
const btnPlay = document.querySelector('a.btn_play');
btnPlay.addEventListener('click', e => {
    e.preventDefault();
    if(flag){
        clearTimeout(autoBnn);
        btnPlay.classList.add('pause');
        flag = false;
    }else{
        autoBnn = setTimeout(autoBanner, 5000);
        btnPlay.classList.remove('pause');
        flag = true;
    }
});


/* 롤링 클릭 */
const bnnRollLists = document.querySelectorAll(".banner_rolling li");

for(let i=0;i<bnnRollLists.length;i++){
    bnnRollLists[i].addEventListener("click", e => {
        clearTimeout(autoBnn);
        bnnFrame.style.left = `${-i * bnnW}px`;
        secWhite(i);
    });

};

// content1
// 마우스 올렸을 때 이미지에 매이메이션 적용
// 마우스 뗐을때 이미지에 애니메이션 삭제
const content1Li  = document.querySelectorAll(".content1 ul li"); //querySelectorAll = 4개의 li 선택
for(let i=0;i<content1Li.length;i++){ //애니메이션
    content1Li[i].addEventListener("mouseover",e => {
        for(let k=0;k<20;k++){
            let imgLi = e.currentTarget.children[0].children[0].children; //currentTarget = li에 호버,타겟
            imgLi[k].style.animation = `ani 1s linear ${delay * k}s 1`;
        }
    })
}

// forEach문 = content1Li.forEach(item => {item.addEventListener(...)})
for(let i=0;i<content1Li.length;i++){ //애니메이션
    content1Li[i].addEventListener("mouseout",e => {
        for(let k=0;k<20;k++){
            let imgLi = e.currentTarget.children[0].children[0].children; //currentTarget = li에 호버,타겟
            imgLi[k].style.animation = "none";
        }
    })
}

/* 스크롤 이벤트 */
window.addEventListener('scroll',() => {
    let scroll = document.querySelector('html').scrollTop;
    // 도넛
    const doughnut_left_l = document.querySelector(".doughnut_left_l");
    const doughnut_left_s = document.querySelector(".doughnut_left_s");
    const combine_left = document.querySelector(".combine_left");

    const doughnut_center_m = document.querySelector(".doughnut_center_m");
    const doughnut_center_s = document.querySelector(".doughnut_center_s");

    const doughnut_right_m = document.querySelector(".doughnut_right_m");
    const doughnut_right_s = document.querySelector(".doughnut_right_s");
    const combine_right = document.querySelector(".combine_right");
    // 
    combine_left.style.top = `${scroll * 0.7}px`;
    doughnut_left_s.style.top = `${scroll * 0.5}px`;
    doughnut_left_l.style.top = `${1310-scroll * 0.8}px`;

    doughnut_center_m.style.top = `${scroll * 0.5}px`;
    
    combine_right.style.top = `${1310-scroll * 0.4}px`;
    doughnut_right_s.style.top = `${1310-scroll * 0.4}px`;
    doughnut_right_m.style.top = `${scroll * 0.8}px`;

    // top버튼
    if(scroll<= 0){
        BtnTop.classList.remove("on","ab");
    }else if(scroll>0 && scroll<2700){
        BtnTop.classList.remove("ab");
        BtnTop.classList.add("on");
    }else{
        BtnTop.classList.add("ab");
    }
});

// content3
// 브랜드 li에 mouseover 시 모든 li에 .on을 지우고 mouseover한 li만 .on추가
const brandLi = document.querySelectorAll('.content3_inner>div>ul>li');

brandLi.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('on');
  });
  item.addEventListener('mouseout', (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('on');
  });
});

// 카테고리 li 클릭 시 해당 li class의 속성값 가져와서 변수에 할당
// 브랜드 li와 변수 값이랑 비교 해서 switch case문 사용

const categoryLi = document.querySelectorAll('.content3_inner>ul>li>a'); //5개
let categoryClass = '';

let categoryAction = (idx, cls) => {
  categoryLi.forEach((item) => {
    item.classList.remove('on');
    categoryLi[idx].classList.add('on');
  });
  brandLi.forEach((item) => {
    item.style.display = 'block';
    if (item.classList.contains(cls) == false) {
      item.style.display = 'none';
    }
  });
};

categoryLi.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); //누를 때마다 튕기기 때문에 써줘야됨.
    categoryClass = e.currentTarget.parentElement.getAttribute('class');

    switch (categoryClass) {
      case 'all':
        categoryLi.forEach((item) => {
          item.classList.remove('on');
          categoryLi[0].classList.add('on');
        });
        brandLi.forEach((item) => {
          item.style.display = 'block';
        });
        break;
      case 'ent':
        categoryAction(1, 'ent');
        break;
      case 'shop':
        categoryAction(2, 'shop');
        break;
      case 'diner':
        categoryAction(3, 'diner');
        break;
      case 'box':
        categoryAction(4, 'box');
        break;
      default:
        break;
    }
  });
});


// footer
// 패밀리 사이트
const familySite = document.querySelector("dd.family_site");
familySite.addEventListener('click', e => {
  e.preventDefault();
  e.currentTarget.classList.toggle("on");

  if(e.currentTarget.classList.contains("on")) {
    e.currentTarget.children[0].setAttribute("title", "닫기");
  }else {
    e.currentTarget.children[0].setAttribute("title", "열기");
  }
 
})

// top
const BtnTop = document.querySelector('.top');
BtnTop.addEventListener('click',e => {
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

// 햄버거 버튼 클릭
const body = document.querySelector('body');
const bg = document.querySelector('.bg');

const mobBtn = document.querySelector(".mobBtn");
const mobBtn_Close = document.querySelector(".mobBtn_close");
const mob = document.querySelector(".mob");

mobBtn.addEventListener('click', e => {
  e.preventDefault();
  body.classList.add('on');
  bg.classList.add('on');
  mob.classList.add('on');
  mobBtn_Close.classList.add('on');
});
mobBtn_Close.addEventListener('click', e => {
  e.preventDefault();
  body.classList.remove('on');
  bg.classList.remove('on');
  mob.classList.remove('on');
  mobBtn_Close.classList.remove('on');
});

// 모바일 메뉴
const mobDds = document.querySelectorAll("div.mob dd");

for(let f=0; f<mobDds.length; f++){
    mobDds[f].addEventListener('click', (e) =>{
        e.currentTarget.classList.toggle("on");
        if (e.currentTarget.classList.contains("on")){
            e.currentTarget.children[0].setAttribute("title", "메뉴 닫기");
        }else{
            e.currentTarget.children[0].setAttribute("title", "메뉴 열기");
        }
    });
};


// 모바일 gnb 메뉴
const mobLis = document.querySelectorAll("nav.mob_gnb>ul>li");

for(let p=0; p<mobLis.length; p++){
    mobLis[p].addEventListener('click', (e) =>{
        e.currentTarget.classList.toggle("on");
        if (e.currentTarget.classList.contains("on")){
            e.currentTarget.children[0].setAttribute("title", "메뉴 닫기");
        }else{
            e.currentTarget.children[0].setAttribute("title", "메뉴 열기");
        }
    });
};