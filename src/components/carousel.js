import React from "react"

import Carousel from "re-carousel"

import Background from "../images/zheka.jpg"
import Zheka from "../images/zheka1.jpeg"
import Zh from "../images/zheka2.jpeg"
import Zk from "../images/zheka5.jpg"
import Zl from "../images/zheka6.jpg"
import Zp from "../images/zheka7.jpg"
import Zx from "../images/zheka8.jpg"
import Zv from "../images/zheka9.jpg"

export default function carousel() {
  return (
    <Carousel loop auto interval={2500}>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          height: "100%",
        }}
      />
      <div
        style={{
          backgroundImage: `url(${Zheka})`,
          backgroundSize: "contain",
          height: "100%",
        }}
      />
      <div
        style={{
          backgroundImage: `url(${Zh})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
        }}
      />
      <div
        style={{
          backgroundImage: `url(${Zk})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
        }}
      />
      <div
        style={{
          backgroundImage: `url(${Zl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
        }}
      />
      <div
        style={{
          backgroundImage: `url(${Zp})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
        }}
      />
      <div
        style={{
          backgroundImage: `url(${Zx})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
        }}
      />
      <div
        style={{
          backgroundImage: `url(${Zv})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100%",
        }}
      />
    </Carousel>
  )
}
