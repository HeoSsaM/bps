//swiper
var swiper = new Swiper(".chatbot_slider", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  //지점
  const $store_list = document.querySelector('.store_link_group');

  function showStore() {
    $store_list?.classList.toggle('on');
  }

  //bestMenu tab
    const tabMenuItems = document.querySelectorAll("#bestMenu > li"); // 탭 메뉴 항목
    const tabContents = document.querySelectorAll("#bestMenuContents > .tab_contents"); // 탭 콘텐츠
    console.log(tabContents)

    tabMenuItems.forEach(tab => {
        tab.addEventListener("click", () => {
            // 모든 탭에서 'on' 클래스 제거
            tabMenuItems.forEach(item => item.classList.remove("on"));

            // 모든 콘텐츠에서 'on' 클래스 제거
            tabContents.forEach(content => content.classList.remove("on"));

            // 클릭된 탭 활성화
            tab.classList.add("on");

            // 클릭된 탭과 연결된 콘텐츠 활성화
            const target = tab.getAttribute("data-tab");
            document.getElementById(target).classList.add("on");
        });
    });





