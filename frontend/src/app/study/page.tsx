'use client'
import Layout from "@components/Layout/Layout";
import NavLink from "@ui/NavLink/NavLink";
const Study = () =>{
    return(
        <Layout>
            {
                <div className="flex flex-col gap-12 font-lato h-auto">
                    <div className="flex flex-col gap-4 m-auto mt-12">
                        <h3 className="text-[#444] text-5xl font-semibold">Обучение</h3>
                        <h5 className="text-[#444] opacity-80 text-2xl font-semibold">Учебные материалы</h5>
                    </div>
                    <div className="flex xl:flex-row xl:justify-around mb-20 lg:flex-col lg:mx-auto lg:gap-8 md:gap-8 md:flex-col md:mx-auto sm:gap-8 sm:flex-col sm:mx-auto">
                        <div className="w-[520px] h-[520px] bg-white rounded-[30px] border-[1px] border-[#C0C0C0] flex flex-col justify-center gap-4">
                            <div className="flex flex-col gap-4 justify-center items-center">
                                <h5 className="text-[#444] text-4xl font-semibold">Writing</h5>
                                <p className="text-[#444] opacity-80 text-lg">IELTS</p>
                            </div>
                            <div className="flex justify-center items-center w-[430px] h-auto text-center mx-auto">
                                <p> Письменная часть экзамена состоит из 2 частей и длится 60 минут. В 1 части требуется описать данную информацию, кратко изложить используя как минимум 150 слов. Данная часть составляет 33% оценки. Во 2 части требуется написать сочинение и аргументировать свою позицию в данном вопросе используя как минимум 250 слов. Данная часть составляет 67% оценки.
                                <br /> <br />В обоих заданиях тестируемых оценивают по их способности написать ответ, соответствующий содержанию, организации идей, а также точности и разнообразию словарного запаса и грамматики.</p>
                            </div>
                            <NavLink
				                href={{
					            pathname: "/writing",
				                }}
				                className="flex justify-center items-center mx-auto w-[200px] h-12 rounded-xl text-white font-medium text-xl border-[1px] border-[#444] bg-[#444]"
			                >
				            Начать
			                </NavLink>
                        </div>
                    
                        <div className="w-[520px] h-[520px] bg-white rounded-[30px] border-[1px] border-[#C0C0C0] flex flex-col justify-center gap-4">
                            <div className="flex flex-col gap-4 justify-center items-center">
                                <h5 className="text-[#444] text-4xl font-semibold">Speaking</h5>
                                <p className="text-[#444] opacity-80 text-lg">IELTS</p>
                            </div>
                            <div className="flex justify-center items-center w-[430px] h-auto text-center mx-auto">
                                <p> Устная часть экзамена состоит из 3 частей и длится 11-14 минут. В 1 части тестируемый отвечает на общие темы про себя в течение 4-5 минут. Во 2 части тестируемому выдается карточка на определенную тему и после экзаменатор может задать вопросы касательно темы в течение 3-4 минуты. В 3 части экзаменатор задает специфичные вопросы в виде диалога в течение 4-5 минут. <br/> <br/> Устная часть оценивает беглость, лексикон, грамматический диапазон и точность и произношение. Это относится к способности говорить непрерывно, а также связывать идеи и язык, образуя связную речь.</p>
                            </div>
                            <NavLink
				                href={{
					            pathname: "/speaking",
				                }}
				                className="flex justify-center items-center mx-auto w-[200px] h-12 rounded-xl text-white font-medium text-xl border-[1px] border-[#444] bg-[#444]"
			                >
				            Начать
			                </NavLink>
                            
                        </div>
                    </div>
                </div>
            }
        </Layout>
    );
}

export default Study;
