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
              Что Кришна сказал Арджуне на поле битвы Курукшетра?
            </p>
          </div>
          <div>
            <button className="btn-q">Иди приготовь мне кофе</button>
            <button className="btn-q">
              Выходи в центр поля танцуй лезгинку
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
            <p className="test-q">Сколько имен у Кришны?</p>
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
              Откуда появился Нрисимха Дев чтобы защитить Прахлад Махараджа?
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
            <p className="test-q">Что Кришна и его друзья воровали у Гопи?</p>
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
            <p className="test-q">Голова какого животного у Ганеши?</p>
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
            <p className="test-q">На чем Кришна держал холм Говардхан?</p>
          </div>
          <div>
            <button className="btn-q">На коленях</button>
            <button className="btn-q">На мизинце левой ноги</button>
          </div>
          <div>
            <button className="btn-q">На ушах</button>
            <button className="btn-q">На мизинце левой руки</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">Выбери того кто НЕ является братом Арджуны</p>
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
            <p className="test-q">
              Как зовут демоницу которая пыталась напоить Кришну отравленным
              молоком?
            </p>
          </div>
          <div>
            <button className="btn-q">Путаница</button>
            <button className="btn-q">Распутница</button>
          </div>
          <div>
            <button className="btn-q">Паутина</button>
            <button className="btn-q">Путана</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-q">Как думаешь, Кришна любит тебя?</p>
          </div>
          <div>
            <button className="btn-q">Да</button>
            <button className="btn-q">Конечно</button>
          </div>
          <div>
            <button className="btn-q">А как же</button>
            <button className="btn-q">Несомненно</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div>
            <p className="test-result">
              Поздравляем, ваш результат 30% из 120%, поэтому вы получаете 30%
              от своего поздравления
            </p>
          </div>
          <div>
            <div className="test-result-s">
              Передите по ссылке -{" "}
              <a
                href="https://www.youtube.com/watch?v=Q6iRmKUGWok&list=RDQ6iRmKUGWok&index=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                ссылка
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </AliceCarousel>
  )
}

export default Gallery
