import React, { Component } from "react";
import banner from "../assets/banner.png";
import banner2 from "../assets/banner2.png";

export interface BannerProps {}

export interface BannerState {
  bannerInfo: any;
}

class Banner extends React.Component<BannerProps, BannerState> {
  constructor(props: BannerProps) {
    super(props);
    this.state = { bannerInfo: [] };
  }
  render() {
    return (
      <div>
        {/* <hr className="bannerLine" /> */}
        <img src={banner2} alt="book" style={{ width: "100%" }} />
        <div className="about-footer">&copy; BookWyrm BookClub 2020</div>
      </div>
    );
  }
}

export default Banner;
