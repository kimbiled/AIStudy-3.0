declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly BACKEND_PORT: string;

			readonly GOOGLE_PROJECT_ID: string;
			readonly GOOGLE_KEY_FILE: string;
			readonly GOOGLE_ROOT_EMAIL: string;
			readonly GOOGLE_ROOT_CLIENT_ID: string;
			readonly GOOGLE_ROOT_CLIENT_SECRET: string;
			readonly GOOGLE_ROOT_REDIRECT_URI: string;
			readonly GOOGLE_ROOT_REFRESH_TOKEN: string;

			readonly GOOGLE_STORAGE_BUCKET_NAME: string;

			readonly GOOGLE_VERTEX_ENTRY_POINT: string;
			readonly GOOGLE_VERTEX_MODEL_AI: string;
			readonly GOOGLE_VERTEX_LOCATION: string;
		}
	}
}
export {};
