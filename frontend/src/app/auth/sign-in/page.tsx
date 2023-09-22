
import NavLink from "@root/ui/NavLink/NavLink";
import { useEffect, useRef } from "react";

const Login = () => {

	return (
		<section className="bg-gray-50 ">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<p className="text-[22px] font-light font-lato text-[#444444] opacity-90">Добро пожаловать!</p>
						<div className="flex flex-col gap-2">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
							Войти
						</h1>
						<p className="font-light font-medium text-[#444444] opacity-90 ">
							Войдите в свой аккаунт
						</p>
						</div>
						<form
							className="space-y-4 md:space-y-6"
							action="#"
						>
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-[#444444] text-[18px] font-lato">
									Почта
								</label>
								<input
									type="text"
									name="email"
									id="email"
									className="border border-[1px] border-gray-400 w-full p-2.5 "
									placeholder="Email"
									required
								/>
							</div>
							<div>
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
									Пароль
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
									required
								/>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="remember"
											aria-describedby="remember"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  "
										/>
									</div>
									<div className="ml-3 text-sm">
										<label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
											Запомнить меня
										</label>
									</div>
								</div>
								<a
									href="#"
									className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
								>
									Забыли пароль?
								</a>
							</div>
							<button className="group relative h-11 w-full overflow-hidden rounded-xl bg-smrtBlue text-white" type="submit">
								Войти
								<div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Нет аккаунта?
								<NavLink
									href={{
										pathname: "/",
										}}
									className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
								>
									Создать аккаунт
								</NavLink>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
