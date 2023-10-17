import Layout from "@root/components/Layout/Layout";
import { useAuth } from "@root/hooks/auth/useAuth";

const Register = () => {
	const {signUp} = useAuth();

	return (
		<Layout>
			<section className="bg-gray-50 font-lato">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<p className="text-[22px] font-light font-lato text-[#444] opacity-90">Добро пожаловать!</p>
							<div className="flex flex-col gap-2">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
								Создать аккаунт
							</h1>
							<p className="font-light font-medium text-[#444444] opacity-90 ">
								Создайте аккаунт
							</p>
							</div>
							<form
								className="space-y-4 md:space-y-6"
								action={async (formData: FormData) => {
									"use server";
									const username = formData.get("username") as string;
									const email = formData.get("email") as string;
									const password = formData.get("password") as string;

									if (!username || !email || !password) return;

									await signUp({
										username,
										email,
										password,
									});
								}}
							>
								<div>
									<label htmlFor="email" className="block mb-2 text-sm font-medium text-[#444444] text-[18px] font-lato">
										Никнейм
									</label>
									<input
										type="text"
										name="username"
										id="username"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-5 h-12"
										placeholder="Username"
										required
									/>
								</div>
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
								<button className="group relative h-11 w-full overflow-hidden rounded-xl bg-[#444] text-white" type="submit">
									Войти
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Register;
