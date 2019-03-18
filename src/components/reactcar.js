import React from "react"
import AliceCarousel from "react-alice-carousel"
import { Row, Col } from "react-bootstrap"

import { IoMdStar } from "react-icons/io"
import "react-alice-carousel/lib/alice-carousel.css"

const Gallery = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <AliceCarousel mouseDragEnabled>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">
              Что Кришна сказал Арджуне на поле битвы Курукшетра
            </p>
          </div>
          <div>
            <button className="btn-q">Иди приготовь мне кофе</button>
            <button className="btn-q">
              Выходи в центр поля танцуй лизгингу
            </button>
          </div>
          <div>
            <button className="btn-q">Беги отсюда что есть сил</button>
            <button className="btn-q">Сражайся!</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">Сколько имен у Кришны</p>
          </div>
          <div>
            <button className="btn-q">2</button>
            <button className="btn-q">108</button>
          </div>
          <div>
            <button className="btn-q">33</button>
            <button className="btn-q">4</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">
              Откуда появился Нрисимха Дев чтобы защитить Прахлад Махараджа
            </p>
          </div>
          <div>
            <button className="btn-q">из кармана Прахлад Махараджа</button>
            <button className="btn-q">из под выподверта</button>
          </div>
          <div>
            <button className="btn-q">из книги</button>
            <button className="btn-q">из колонны</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">Что Кришна и его друзья воровали у Гопи</p>
          </div>
          <div>
            <button className="btn-q">сари</button>
            <button className="btn-q">веник с совком</button>
          </div>
          <div>
            <button className="btn-q">пуговицы</button>
            <button className="btn-q">масло</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">Кришна</p>
          </div>
          <div>
            <button className="btn-q">Кришна</button>
            <button className="btn-q">Кришна</button>
          </div>
          <div>
            <button className="btn-q">Кришна</button>
            <button className="btn-q">Кришна</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">Кришна</p>
          </div>
          <div>
            <button className="btn-q">Кришна</button>
            <button className="btn-q">Кришна</button>
          </div>
          <div>
            <button className="btn-q">Кришна</button>
            <button className="btn-q">Кришна</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">Кришна</p>
          </div>
          <div>
            <button className="btn-q">Кришна</button>
            <button className="btn-q">Кришна</button>
          </div>
          <div>
            <button className="btn-q">Кришна</button>
            <button className="btn-q">Кришна</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">Кришна</p>
          </div>
          <div>
            <button className="btn-q">Кришна</button>
            <button className="btn-q">Кришна</button>
          </div>
          <div>
            <button className="btn-q">Кришна</button>
            <button className="btn-q">Кришна</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">Кришна</p>
          </div>
          <div>
            <button className="btn-q">Кришна</button>
            <button className="btn-q">Кришна</button>
          </div>
          <div>
            <button className="btn-q">Кришна</button>
            <button className="btn-q">Кришна</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">Кришна</p>
          </div>
          <div>
            <button className="btn-q">Кришна</button>
            <button className="btn-q">Кришна</button>
          </div>
          <div>
            <button className="btn-q">Кришна</button>
            <button className="btn-q">Кришна</button>
          </div>
        </Col>
      </Row>
    </AliceCarousel>
  )
}

export default Gallery
