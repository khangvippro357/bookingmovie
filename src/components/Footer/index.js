import React from "react";
import CGV from "../../img/cgv.png";
import BHD from "../../img/bhd.png";
import GALAXY from "../../img/galaxycine.png";
import CINESTA from "../../img/cinestar.png";
import MEGA from "../../img/megags.png";
import BT from "../../img/bt.jpg";
import LOTE from "../../img/404b8c4b80d77732e7426cdb7e24be20.png";
import DCINE from "../../img/dcine.png";
import DONGDAC from "../../img/dongdacinema.png";
import TOUCH from "../../img/TOUCH.png";
import CNX from "../../img/cnx.jpg";
import STARLIGHT from "../../img/STARLIGHT.png";
import ZALOPAY from "../../img/zalopay_icon.png";
import PAYOO from "../../img/payoo.jpg";
import VIETCOMBANK from "../../img/VCB.png";

export default function Footer() {
  return (
    <div id="footer" className="col-xs-12">
      <div className="myFooter">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <p className="title title-about">CyberPhim</p>
            <div className="col-md-12">
              <p>
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION Địa chỉ: Z06 Đường số
                13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay
                đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu
                tư Thành phố Hồ Chí Minh cấp. Số Điện Thoại (Hotline): 1900 545
                436
              </p>
            </div>
          </div>
          <div className="col-md-4 col-xs-12">
            <p className="title">Đối tác</p>
            <div className="row col-sm-12 col-xs-12 linePartner">
              <a target="_blank" href="https://www.cgv.vn/" title="CGV">
                <img
                  className="iconConnect"
                  src={CGV}
                  style={{ backgroundColor: "#fff" }}
                />
              </a>
              <a target="_blank" href="http://bhdstar.vn" title="BHD">
                <img className="iconConnect" src={BHD} />
              </a>
              <a target="_blank" href="http://galaxycine.vn" title="Galaxy">
                <img className="iconConnect" src={GALAXY} />
              </a>
              <a target="_blank" href="http://cinestar.com.vn" title="Cinestar">
                <img className="iconConnect" src={CINESTA} />
              </a>
              <a
                target="_blank"
                href="http://lottecinemavn.com"
                title="Lotte Cinema"
              >
                <img className="iconConnect" src={LOTE} />
              </a>
            </div>
            <div className="row col-sm-12 col-xs-12 linePartner">
              <a
                target="_blank"
                href="https://www.megagscinemas.vn"
                title="MegaGS"
              >
                <img className="iconConnect" src={MEGA} />
              </a>
              <a
                target="_blank"
                href="https://www.betacineplex.vn/"
                title="Beta"
              >
                <img className="iconConnect" src={BT} />
              </a>
              <a target="_blank" href="http://ddcinema.vn" title="DDC">
                <img className="iconConnect" src={DONGDAC} />
              </a>
              <a
                target="_blank"
                href="https://touchcinema.com/"
                title="Touch Cinema"
              >
                <img className="iconConnect" src={TOUCH} />
              </a>
              <a target="_blank" href="https://cinemaxvn.com/" title="Cinemax">
                <img className="iconConnect" src={CNX} />
              </a>
            </div>
            <div className="row col-sm-12 col-xs-12 linePartner">
              <a target="_blank" href="http://starlight.vn/" title="Starlight">
                <img className="iconConnect" src={STARLIGHT} />
              </a>
              <a target="_blank" href="https://www.dcine.vn/" title="Dcine">
                <img className="iconConnect" src={DCINE} />
              </a>
              <a target="_blank" href="https://zalopay.vn/" title="ZaloPay">
                <img className="iconConnect" src={ZALOPAY} />
              </a>
              <a target="_blank" href="https://www.payoo.vn/" title="Payoo">
                <img className="iconConnect" src={PAYOO} />
              </a>
              <a
                target="_blank"
                href="https://www.vietcombank.com.vn/"
                title="Vietcombank"
              >
                <img className="iconConnect" src={VIETCOMBANK} />
              </a>
            </div>
          </div>
          <div className="col-md-4 col-xs-12">
            <div className="col-xs-6 support">
              <p className="title">Hỗ trợ khách hàng</p>
              <div style={{padding: "0 15px"}}>
                  <a ui-sref="faqMobile.faq" href="/webview/faq.html">
                    FAQ
                  </a>
                  <a ui-sref="faqMobile.regular" href="/webview/regular.html">
                    Thỏa thuận sử dụng
                  </a>
                  {/* <a ui-sref="">Quy chế hoạt động</a> */}
                  <a ui-sref="faqMobile.policy" href="/webview/policy.html">
                    Chính sách bảo mật
                  </a>
                  <a ui-sref="guildline.guidev2" href="/brand-guideline/">
                    Brand Guidelines
                  </a>
              </div>
            </div>
            <div className="col-xs-6"></div>
          </div>
        </div>
        <hr className="hrFooter" />
        <div className="row"></div>
      </div>
    </div>
  );
}
