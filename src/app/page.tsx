"use client";

import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
//import Reply from "@/components/Reply";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner 
          fullName="Oakkharaphong Garpanya" 
          studentId="660610806" 
          content="ไม่ค่อยเข้าใจเรื่อง React เลยคับ แงงงงงงงง #261207" 
          like="100 คน"/>

        {/* Comment Example */}


        <div className="d-flex gap-2 my-2">
          <img
            src="/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              Lisa
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>จริงค่า</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>999 คน</span>
            </div>
          </div>
        </div>

        {/* Reply Example */}
        <PostOwnner 
          userImagePath="/profileImages/puppy.jpg"
          username="หมาน้อย" 
          replyText="จริงค้าบบบบบบบบ" 
          likeNum="2 คน" 
          />

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
