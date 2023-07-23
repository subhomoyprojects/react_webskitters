import React from "react";
import "./Home.css";
import { Banner1, Pro1, Pro2, Pro3, Pro4, Star, Acc1, Acc2, Best1, Best2, Best3, Best4 } from "../../../images/Images";

export default function Home() {
  return (
    <>
      <section className="common-gap banner-wrapper">
        <div className="container">
          <div className="img-holder">
            <img src={Banner1} alt="" />
          </div>
          <div className="banner-content-holder">
            <h1>explore all Collection</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
            <button type="button" className="btn btn-white">
              shop all
            </button>
          </div>
        </div>
      </section>
      <section className="common-gap card-layout-wrapper">
        <div className="container">
          <div className="heading-style">
            <h2>
              Today’s Trending <span>Deals</span>
            </h2>
          </div>
          <div className="items">
            <div className="item">
              <div className="pro-img">
                <img src={Pro1} alt="" />
              </div>
              <div className="pro-content">
                <h5>Product name goes here</h5>
                <p className="rating">
                  <span>
                    4.3 <img src={Star} alt="" />
                  </span>
                  <span>412456 ratings</span>
                </p>
                <p className="price">
                  <div className="old-price">$74</div>
                  <div className="new-price">$25</div>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="pro-img">
                <img src={Pro2} alt="" />
              </div>
              <div className="pro-content">
                <h5>Product name goes here</h5>
                <p className="rating">
                  <span>
                    4.3 <img src={Star} alt="" />
                  </span>
                  <span>412456 ratings</span>
                </p>
                <p className="price">
                  <div className="old-price">$74</div>
                  <div className="new-price">$25</div>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="pro-img">
                <img src={Pro3} alt="" />
              </div>
              <div className="pro-content">
                <h5>Product name goes here</h5>
                <p className="rating">
                  <span>
                    4.3 <img src={Star} alt="" />
                  </span>
                  <span>412456 ratings</span>
                </p>
                <p className="price">
                  <div className="old-price">$74</div>
                  <div className="new-price">$25</div>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="pro-img">
                <img src={Pro4} alt="" />
              </div>
              <div className="pro-content">
                <h5>Product name goes here</h5>
                <p className="rating">
                  <span>
                    4.3 <img src={Star} alt="" />
                  </span>
                  <span>412456 ratings</span>
                </p>
                <p className="price">
                  <div className="old-price">$74</div>
                  <div className="new-price">$25</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="common-gap accessories-wrapper">
        <div className="container">
          <div className="heading-style text-center">
            <h2>
              All <span>accessories</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="accessories-item">
                <div className="accessories-img">
                  <img src={Acc1} alt="" />
                </div>
                <div className="accessories-content">
                  <h3>
                    <span>10% Off On</span> All Sunglasses
                  </h3>
                  <button type="button" className="btn btn-white">
                    shop now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="accessories-item">
                <div className="accessories-img">
                  <img src={Acc2} alt="" />
                </div>
                <div className="accessories-content">
                  <h3>
                    <span>15% Off On</span> All Branded Watches
                  </h3>
                  <button type="button" className="btn btn-white">
                    shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="common-gap card-layout-wrapper">
        <div className="container">
          <div className="heading-style">
            <h2>
              Our Best <span>Sellers</span>
            </h2>
          </div>
          <div className="items">
            <div className="item">
              <div className="pro-img">
                <img src={Best1} alt="" />
              </div>
              <div className="pro-content">
                <h5>Product name goes here</h5>
                <p className="rating">
                  <span>
                    4.3 <img src={Star} alt="" />
                  </span>
                  <span>412456 ratings</span>
                </p>
                <p className="price">
                  <div className="old-price">$74</div>
                  <div className="new-price">$25</div>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="pro-img">
                <img src={Best2} alt="" />
              </div>
              <div className="pro-content">
                <h5>Product name goes here</h5>
                <p className="rating">
                  <span>
                    4.3 <img src={Star} alt="" />
                  </span>
                  <span>412456 ratings</span>
                </p>
                <p className="price">
                  <div className="old-price">$74</div>
                  <div className="new-price">$25</div>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="pro-img">
                <img src={Best3} alt="" />
              </div>
              <div className="pro-content">
                <h5>Product name goes here</h5>
                <p className="rating">
                  <span>
                    4.3 <img src={Star} alt="" />
                  </span>
                  <span>412456 ratings</span>
                </p>
                <p className="price">
                  <div className="old-price">$74</div>
                  <div className="new-price">$25</div>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="pro-img">
                <img src={Best4} alt="" />
              </div>
              <div className="pro-content">
                <h5>Product name goes here</h5>
                <p className="rating">
                  <span>
                    4.3 <img src={Star} alt="" />
                  </span>
                  <span>412456 ratings</span>
                </p>
                <p className="price">
                  <div className="old-price">$74</div>
                  <div className="new-price">$25</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
