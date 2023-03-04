<template>
  <footer>
    <div class="container p-3">
      <div class="row">
        <div class="col-md-4">
          <div class="title">Trụ sở chính</div>
          <div class="content">
            <p>CÔNG TY TNHH PHÁT TRIỂN VÀ CHUYỂN GIAO PHẦN MỀM</p>
            <p>
              Trụ sở: Số 49/203, Kim Ngưu. P. Thanh Lương , Q. Hai Bà Trưng, Tp
              Hà Nội
            </p>
            <p>
              Trụ sở 02: Thôn 4 - Vạn Phúc - Thanh Trì - Hà Nội (Hotline:
              0243.8213982)
            </p>
            <p>
              Chi nhánh: Số 49/3, TX38, P. Thạnh Xuân, Q. 12, Tp Hồ Chí Minh
            </p>
            <p>SĐT hỗ trợ: 029.2394.1789</p>
            <p>Email: cskh@dtsoft.vn</p>
            <p>Zalo OA: DTSOFT Phần mềm hiệu quả</p>
            <p>Mã số thuế: 0101148771</p>
            <p>
              Nơi cấp: Phòng kinh doanh, Sở kế hoạch và đầu tư Thành phố Hà Nội
            </p>
            <p>Ngày cấp: 26/06/2001, thay đổi lần thứ 3, 16/12/2020</p>
          </div>
        </div>
        <div class="col-md-2">
          <div class="title">Văn phòng</div>
          <div class="content">
            <p>Trụ sở Hà Nội (024)3686.6691</p>
            <p>Chi nhánh Hồ Chí Minh (028)3716.0047</p>
            <p>Văn phòng Nha Trang (025)8355.1309</p>
            <p>Văn phòng Cần Thơ (029)2394.1789</p>
          </div>
        </div>
        <div class="col-md-2">
          <div class="title">Site map</div>
          <div class="content">
            <router-link to="" class="link-site">Sản phẩm</router-link>
            <router-link to="" class="link-site">Tin tức</router-link>
            <router-link to="" class="link-site">Giới thiệu</router-link>
          </div>
        </div>
        <div class="col-md-4">
          <div class="title">Map / Liên hệ</div>
          <div class="content">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119212.33606183536!2d105.7556952!3d20.9771787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac081257e447%3A0x300c1e78d03356f0!2zRFRTT0ZUIC0gQ8OUTkcgVFkgVE5ISCBQSMOBVCBUUknhu4JOIFbDgCBDSFVZ4buCTiBHSUFPIFBI4bqmTiBN4buATQ!5e0!3m2!1sen!2s!4v1597980192784!5m2!1sen!2s"
              width="100%"
              height="200"
              frameborder="0"
              style="border: 0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  color: #ffffff;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

footer {
  color: #ffffff;
  font-size: 15px;
  background: #222222;
}
.title {
  color: #01a8df;
  text-transform: uppercase;
  font-size: 17px;
  font-weight: bold;
}
.content {
  line-height: 25px;
  font-size: 15px;
}
.link-site {
  display: inline-block;
  width: 100%;
}
</style>
