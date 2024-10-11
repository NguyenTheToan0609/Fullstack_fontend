import React, { Component } from "react";
import { connect } from "react-redux";
import logoVtv from "../../../assets/logo-about/vtv1.png";
import logoIct from "../../../assets/logo-about/ictnews.png";
import logoVne from "../../../assets/logo-about/vnexpress.png";
import logoVtc from "../../../assets/logo-about/165432-vtcnewslogosvg.png";
import logoByt from "../../../assets/logo-about/cuc-cong-nghe-thong-tin-bo-y-te-2.png";
import logoDantri from "../../../assets/logo-about/110757-dantrilogo.png";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          Truyền thông nói gì về BookingCare
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="330"
              src="https://www.youtube.com/embed/FyDQljKtWnI"
              title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <div className="logo-about">
              <a
                target="_blank"
                href="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm"
              >
                <img src={logoVtv} alt="logoVtv" />
              </a>
            </div>
            <div className="logo-about">
              <a
                target="_blank"
                href="https://vietnamnet.vn/thong-tin-truyen-thong"
              >
                <img src={logoIct} alt="logoIct" />
              </a>
            </div>
            <div className="logo-about">
              <a
                target="_blank"
                href="https://video.vnexpress.net/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html"
              >
                <img src={logoVne} alt="logoVne" />
              </a>
            </div>
            <div className="logo-about">
              <a
                target="_blank"
                href="https://vtcnews.vn/dat-kham-chuyen-khoa-va-hanh-trinh-ho-tro-cac-benh-vien-qua-tai-ar434101.html"
              >
                <img src={logoVtc} alt="logoVtc" />
              </a>
            </div>
            <div className="logo-about">
              <a target="_blank" href="https://moh.gov.vn/vi">
                <img src={logoByt} alt="logoByt" />
              </a>
            </div>
            <div className="logo-about">
              <a
                target="_blank"
                href="https://dantri.com.vn/nhan-tai-dat-viet/san-pham-nen-tang-dat-kham-booking-care-201908201625624751.htm"
              >
                <img src={logoDantri} alt="logoDantri" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

export default connect(mapStateToProps)(About);
