$('#list-product .slick-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

$("#list-product .slick-prev").html("<");
$("#list-product .slick-next").html(">");


var listProct = [
  {
    id : 'SP01',
    name: "Giường châu âu",
    img: 'imgs/san-pham/sp-1.jpg',
    description : '(Size lớn, trắng sữa)',
    price : 8999000
  },
  {
    id : 'SP02',
    name: "Bàn làm việc",
    img: 'imgs/san-pham/sp-2.jpg',
    description : 'Size vừa, trắng nâu)',
    price : 8999000
  }, {
    id : 'SP03',
    name: "Tủ quần áo",
    img: 'imgs/san-pham/sp-3.jpg',
    description : '(4 ngăn, trắng gỗ)',
    price : 8999000
  }, {
    id : 'SP04',
    name: "Kệ để đồ",
    img: 'imgs/san-pham/sp-4.jpg',
    description : '(4 ngăn, trắng gỗ)',
    price : 2499000
  }, {
    id : 'SP05',
    name: "Giường châu âu 1",
    img: 'imgs/san-pham/sp-1.jpg',
    description : '(Size lớn, trắng sữa)',
    price : 8999000
  },
  {
    id : 'SP06',
    name: "Bàn làm việc 3",
    img: 'imgs/san-pham/sp-2.jpg',
    description : 'Size vừa, trắng nâu)',
    price : 8999000
  },
]

function renderProduct(product) {
  var render = `
  <div class="box-product">
    <div class="img-product">
      <img src="${product.img}" alt="${product.name}">
    </div>
    <div class="content-product text-center">
      <a href="#">
        <h5>${product.name}</h5>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <p>${product.description} <br>
          <span class="sp-price">${product.price} VNĐ</span>
        </p>
      </a>
    </div>
  </div>`;
}

function renderListProduct(listPro) {
  for(let i = 0; i < listPro.length; i++) {
    if(listPro[i].hot === true) {
      $('#list-product .slick-slider').append(renderProduct(listPro[i]));
    }
  }
}
renderListProduct(listProduct);

function validateForm() {
  const emailInput = document.getElementById('email-phone');
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const phonePattern = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

  let isValid = true;
  if (emailValue === "") {
    isValid = false;
    alert("Vui lòng nhập email hoặc số điện thoại.");
  } else {
    if (!emailPattern.test(emailValue) && !phonePattern.test(emailValue)) {
      isValid = false;
      alert("Vui lòng nhập đúng định dạng email hoặc số điện thoại.");
    }
    if (phonePattern.test(emailValue) && emailValue.length < 10) {
      isValid = false;
      alert("Số điện thoại phải có 10 chữ số.");
    }
  }

  return isValid;
}

submitButton.onclick = function(event) {
  event.preventDefault();
  if (validateForm()) {
    alert("Thông tin được gửi thành công!");
  }
};