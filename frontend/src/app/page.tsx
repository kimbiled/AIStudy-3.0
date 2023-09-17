import Layout from "@components/Layout/Layout";
import { homedir } from "os";

import "../assets/styles/home.scss";
export default function page() {
   return (
      <Layout>
         {
            <section className="home">
               <div className="container">
                  <div className="home__screen">
                     <h2 className="home__screen-title">
                        Подготовка к IELTS в легкой форме
                     </h2>
                     <p className="home__screen-desc">
                        Используя новый подход к обучению c ИИ и игровыми
                        режимами, вы сможете получить желаемый балл
                     </p>
                     <button className="btn home__screen-btn">Начать</button>
                  </div>

                  <div className="home__mock">
                     <h3 className="home__mock-title">Mock Test</h3>
                     <p className="home__mock-desc">
                        <span>Бесплатный</span> пробный тест по главным секциям
                     </p>
                     <div className="home__mock-btns">
                        <button className="home__mock-btn">Writing</button>
                        <button className="home__mock-btn">Speaking</button>
                     </div>
                     <button className="btn">Начать</button>
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
                           <img className="home__detail-img" />
                           <div className="home__detail-title">
                              Мастер - классы
                           </div>
                           <div className="home__detail-desc">
                              Предзаписанные видеоуроки и материалы учителей из
                              партнерских центров по подготовке.
                           </div>
                        </div>
                        <div className="home__info-detail">
                           <img className="home__detail-img" />
                           <div className="home__detail-title">Mock Тесты</div>
                           <div className="home__detail-desc">
                              Бесплатные пробные тестирования для оценки ваших
                              знаний по каждой из секций.
                           </div>
                        </div>
                        <div className="home__info-detail">
                           <img className="home__detail-img" />
                           <div className="home__detail-title">Ресурсы</div>
                           <div className="home__detail-desc">
                              Дополнительные источники для самостоятельной
                              подготовки, такие как словари и примеры ответов на
                              вопросы.
                           </div>
                        </div>
                     </div>

                     <button className="btn home__info-btn">
                        Зарегестрироваться
                     </button>
                  </div>

                  <div className="home__faq">
                     <div className="home__faq-title">
                        Часто задаваемые вопросы
                     </div>

                     <div className="home__faq-section">
                        <ul className="home__faq-questions">
                           <li className="home__faq-question">
                              Как я могу связаться со службой поддержки
                              клиентов?
                           </li>
                           <li className="home__faq-question">
                              Защищены ли мои личные данные при использовании?
                           </li>
                           <li className="home__faq-question">
                              Точно ли ИИ оценивает мои навыки письма и
                              говорения?
                           </li>
                           <li className="home__faq-question">
                              Какие конкретные функции мне предлагает ИИ?
                           </li>
                           <li className="home__faq-question">
                              Как работает сервис подготовки на базе ИИ?
                           </li>
                        </ul>

                        <div className="home__faq-answers">
                           <div className="home__faq-topic">
                              Точно ли ИИ оценивает мои навыки письма и
                              говорения?
                           </div>
                           <div className="home__faq-answer">
                              Да! Наш ИИ натренирован на широкой базе пробных и
                              реальных тестов. Также, мы проводили тестирование
                              и сравнение с оценками учителей и выявили что ИИ
                              определяет те же ошибки и разбирает их, что делает
                              оценку точной и надежной.
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         }
      </Layout>
   );
}
