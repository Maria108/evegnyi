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
              Выходи в центр поля танцуй лезгингу
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
            <button className="btn-q">Из кармана Прахлад Махараджа</button>
            <button className="btn-q">Из под выподверта</button>
          </div>
          <div>
            <button className="btn-q">Из книги</button>
            <button className="btn-q">Из колонны</button>
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
            <p className="test-q">Что общего между Арджуной и Женей?</p>
          </div>
          <div>
            <button className="btn-q">
              У них обоих имена не начинаются на букву Ы
            </button>
            <button className="btn-q">Они одинакового роста</button>
          </div>
          <div>
            <button className="btn-q">Они оба были на Курукшетре</button>
            <button className="btn-q">Они оба воины</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">Голова какого животного у Ганеши</p>
          </div>
          <div>
            <button className="btn-q">Жирафа</button>
            <button className="btn-q">Комара</button>
          </div>
          <div>
            <button className="btn-q">Попугая</button>
            <button className="btn-q">Слона</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">На чем Кришна держал холм Говардхан</p>
          </div>
          <div>
            <button className="btn-q">На коленях</button>
            <button className="btn-q">На мезинце левой ноги</button>
          </div>
          <div>
            <button className="btn-q">На ушах</button>
            <button className="btn-q">На мезинце левой руки</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">Выбери того кто НЕ являлся братом Арджуны</p>
          </div>
          <div>
            <button className="btn-q">Бхима</button>
            <button className="btn-q">Юдхиштхира</button>
          </div>
          <div>
            <button className="btn-q">Сахадев</button>
            <button className="btn-q">Василий</button>
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
            <p className="test-q">
              Поздравляем, ваш результат 30%, поэтому вы получаете 30% от своего
              поздравления
            </p>
          </div>
          <div>
            <p>Передите по ссылке ...</p>
          </div>
        </Col>
      </Row>
    </AliceCarousel>
  )
}

export default Gallery
