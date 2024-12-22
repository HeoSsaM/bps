//지점
const $store_list = document.querySelector('.store_link_group');

function showStore() {
    $store_list.classList.toggle('on');
}

//chart
function updateChart(retailPercent, deliveryPercent) {
    // 유효성 검사: 퍼센트의 합이 100이어야 함
    if (retailPercent + deliveryPercent !== 100) {
        console.error('Error: Percentages must add up to 100.');
        return;
    }

    // DOM 요소 업데이트
    document.querySelector('.retail_bar').style.width = `${retailPercent}%`;
    document.querySelector('.delivery_bar').style.width = `${deliveryPercent}%`;

    // 레이블 텍스트 업데이트
    document.querySelector('.retail_label').innerHTML = `매장 <strong>${retailPercent}%</strong>`;
    document.querySelector('.delivery_label').innerHTML = `${deliveryPercent}% 배달`;
}

// 예제: 매장 60%, 배달 40%
updateChart(60, 40);
