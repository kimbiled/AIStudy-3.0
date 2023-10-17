import NavLink from "@root/ui/NavLink/NavLink";
import Layout from "@components/Layout/Layout";
import { useAuth } from "@root/hooks/auth/useAuth";

const Login = () => {
	const { signIn } = useAuth();

	return (
		<Layout>
			<section className="bg-gray-50 font-lato">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<p className="text-[22px] font-light font-lato text-[#444] opacity-90">Добро пожаловать!</p>
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
								action={async (formData: FormData) => {
									"use server";
									const username = formData.get("username") as string;
									const password = formData.get("password") as string;

									if (!username || !password) return;

									await signIn({
										username,
										password,
									})
								}}
							>
								<div>
									<label htmlFor="email" className="block mb-2 text-sm font-medium text-[#444444] text-[18px] font-lato">
										Почта
									</label>
									<input
										type="text"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-5 h-12"
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
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-5 h-12"
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
												className="w-4 h-4 border border-[#444] rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  "
											/>
										</div>
										<div className="ml-3 text-sm">
											<label htmlFor="remember" className="text-[#444]">
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
								<button className="group relative h-11 w-full overflow-hidden rounded-xl bg-[#444] text-white" type="submit">
									Войти
								</button>
								<p className="text-sm font-light text-[#444] opacity-80">
									Еще нет аккаунта?
									<NavLink
										href={{
											pathname: "/auth/sign-up",
											}}
										className="font-medium hover:underline text-[#444] ml-2"
									>
										Создать аккаунт
									</NavLink>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Login;
