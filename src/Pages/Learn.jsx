import React from "react";
import OtherPageNav from "../Components/OtherPageNav";
import "./Learn.css";
import Footer from "../Components/Footer";
import seminer_img from '../assets/seminer-img.png'
import LearnPageCounter from "../Components/LearnPageCounter";

function Learn() {
  return (
    <div className="learn-page" >
      <OtherPageNav />
      <div className="learn-page-wrapper">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
                <div className="learn-title">
                  <h1>ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট</h1>
                  <p>
                    ডিজিটাল সৃজনশীলতা এবং সাফল্যের প্রশিক্ষণে, <br /> আমরা আছি
                    আপনার সাথে
                  </p>
                  <p>
                    <span>শেখুন</span> <span>কোড করুন</span>{" "}
                    <span>ডিজিটাল পরিবেশে ফুটে যান</span>
                  </p>
                </div>
              
            </div>
            <div className="seminer-wrapper">
              <div className="seminer-title">
                <h1 className="text-center" >ওয়েব ডিজাইন ও ডেভেলপমেন্টে সেমিনার</h1>
              </div>
              <div className="row">
                <div className="col-md-7">
                <div className="seminer-details">
                  <h2>ডিজিটাল দুনিয়া নির্মাণে এক দলে</h2>
                  <p>
                    আমাদের সংস্থা "Amaito Soft" একটি উদ্ভাবনী প্রযুক্তি
                    কোম্পানি, যা উন্নত ওয়েব ডিজাইন এবং ডেভেলপমেন্টের দিকে
                    মুখোমুখি থাকে। আমরা গর্বিতভাবে একটি সেমিনার আয়োজন করছি,
                    যেটি দ্বারা ওয়েব ডিজাইন এবং ডেভেলপমেন্ট বিষয়ে আপনাদের
                    জ্ঞান এবং দক্ষতা প্রসার করার চেষ্টা করবে।
                  </p>
                  <p>সেমিনারের তারিখ ও সময়: 16 আগস্ট 2023, সন্ধ্যা 8:00 টা</p>
                  <p>সেমিনারে অংশগ্রহণের জন্য নিবন্ধন করুন: <br /> <a className="registrasino-link" target="blank" href="https://www.jotform.com/assign/232242290984054/232242324411037">রেজিস্ট্রেশন লিঙ্ক</a></p>
                  <p>সেমিনারে আপনাদের স্বাগত জানাই এবং সাথে থাকার জন্য আমরা অপেক্ষা করছি।</p>
                  <p>আপনার সম্মানিত "Amaito Soft"</p>

                  
                </div>
                </div>
                <div className="col-md-5">
                <div className="seminer-img-wrapper">
                    <div className="seminer-img">
                    <img className="img-fluid" src={seminer_img} alt="" />
                    </div>
                    <div className="seminer-time">
                        <p>সময়: 16 আগস্ট 2023, সন্ধ্যা 8:00 টা</p>
                        <p>স্পিকার: ইফতিহার মাহমুদ [CEO Amaito Soft]</p>
                        <p>স্পিকার: অভিষেক দাস [COO Amaito Soft]</p>
                    </div>
                    <div className="registrasion-link-wrapper" >
                        <a target="blank" href="https://www.jotform.com/assign/232242290984054/232242324411037">রেজিস্ট্রেশন করুন</a>
                    </div>
                </div>
              </div>
              </div>
              <LearnPageCounter/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Learn;
