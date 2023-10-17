import Layout from "@components/Layout/Layout";
import FAQ from "@components/FAQ/FAQ";
import NavLink from "@ui/NavLink/NavLink";
import { homedir } from "os";
import {diary, camera, paper} from '../assets/icons/index';
import {hero} from '../assets/imgs/index';
import Image from 'next/image'

import "../assets/styles/home.scss";

export default function page() {
   return (
      <Layout>
         {
            <section className="home">
               <div className="container">
                  <div className="home__screen">
                     <div style={{zIndex: -1, position:"absolute", width:"100vw", height:"100vh", top:"0", left:"0"}}>
                        <Image src={hero} alt="hero-img" layout="fill" objectFit="cover" quality={100}/>
                     </div>
                     <div className="home__screen-info">
                        <h2 className="home__screen-title">
                           Подготовка к IELTS в легкой форме
                        </h2>
                        <p className="home__screen-desc">
                           Используя новый подход к обучению c ИИ и игровыми
                           режимами, вы сможете получить желаемый балл
                        </p>
                     </div>

                        <NavLink
                           href={{
                              pathname: "/auth/sign-in",
                           }}
                        className={"home__screen-btn"}
                        >
                           Начать
                        </NavLink>
                  </div>

                  <div className="home__mock" >
                     <div className="home__mock-info">
                        <p className="text-xl font-semibold text-white text-right flex justify-center items-center w-96 m-auto p-4">Узнай свой уровень прямо сейчас, пройдя пробный тест!</p>
                     </div>

                     <h3 className="home__mock-title">Mock Test</h3>
                     <p className="home__mock-desc">
                        <span>Бесплатный</span> пробный тест по главным секциям
                     </p>

                     <div className="home__mock-btns">
                        <div className="home__mock-btn">Writing</div>
                        <div className="home__mock-btn">Speaking</div>
                     </div>
                        <NavLink
                           href={{
                              pathname: "/auth/sign-in",
                           }}
                           className="home__mock-login"
                        >
                           Начать
                        </NavLink>
                  </div>

                  <div className="home__info">
                     <h3 className="home__info-title">
                        Начните свой путь прямо сейчас вместе с абсолютно новыми
                        методиками
                     </h3>
                     <h4 className="home__info-desc">
                        Мы предлагаем новую программу подготовки, что позволит
                        сделать ваш график и результат эффективнее!
                     </h4>
                     <div className="home__info-benefits">
                        <div className="home__info-benefit">
                           <div className="home__info-subtitle">
                              Свободное расписание
                           </div>
                           <div className="home__info-subdesc">
                              Вы можете сами составить себе расписание обучения
                              и заниматься в удобное лично для вас время, в
                              любой день и время дня, без привязки к группе и
                              учителю.
                           </div>
                        </div>
                        <div className="home__info-benefit">
                           <div className="home__info-subtitle">
                              Искусственный интеллект
                           </div>
                           <div className="home__info-subdesc">
                              Наш сервис использует нейронные сети специально
                              натренированные для проверки секций письма и
                              говорения, что позволяет вам получить точечную
                              обратную связь в считанные минуты.
                           </div>
                        </div>
                     </div>
                     <h4 className="home__info-title">
                        Не забудем про классические дополнения к подготовке
                     </h4>

                     <div className="home__info-details">
                        <div className="home__info-detail">
                           <div className="home__detail-img">
                              <Image src={camera} alt="camera-icon" />
                           </div>
                           <div className="home__detail-title">
                              Мастер - классы
                           </div>
                           <div className="home__detail-desc">
                              Предзаписанные видеоуроки и материалы учителей из
                              партнерских центров по подготовке.
                           </div>
                        </div>
                        <div className="home__info-detail">
                           <div className="home__detail-img">
                              <Image src={diary} alt="camera-icon" />
                           </div>
                           <div className="home__detail-title">Mock Тесты</div>
                           <div className="home__detail-desc">
                              Бесплатные пробные тестирования для оценки ваших
                              знаний по каждой из секций.
                           </div>
                        </div>
                        <div className="home__info-detail">
                           <div className="home__detail-img">
                              <Image src={paper} alt="camera-icon" />
                           </div>
                           <div className="home__detail-title">Ресурсы</div>
                           <div className="home__detail-desc">
                              Дополнительные источники для самостоятельной
                              подготовки, такие как словари и примеры ответов на
                              вопросы.
                           </div>
                        </div>
                     </div>

                     <NavLink
                           href={{
                              pathname: "/auth/sign-up",
                           }}
                        className="home__info-signup"
                        >
                           Зарегестрироваться
                        </NavLink>
                  </div>

                  <FAQ />
               </div>
            </section>
         }
      </Layout>
   );
}
