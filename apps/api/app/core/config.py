from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    # App
    env: str = "development"
    port: int = 8000
    allowed_origins: str = "http://localhost:5173,http://localhost:5174"

    # Auth
    jwt_secret: str = "change-me"
    jwt_expires_days: int = 7

    # Cloudflare D1 (REST)
    cloudflare_account_id: str = ""
    d1_database_id: str = ""
    d1_api_token: str = ""

    # Cloudflare R2 (S3-compatible)
    r2_account_id: str = ""
    r2_access_key_id: str = ""
    r2_secret_access_key: str = ""
    r2_bucket_name: str = "ksajobs24-media"
    r2_s3_endpoint: str = ""
    r2_public_url: str = ""

    @property
    def cors_origins(self) -> list[str]:
        return [o.strip() for o in self.allowed_origins.split(",") if o.strip()]

    @property
    def r2_endpoint(self) -> str:
        return (
            self.r2_s3_endpoint
            or f"https://{self.r2_account_id}.r2.cloudflarestorage.com"
        )

    @property
    def d1_api_url(self) -> str:
        return (
            f"https://api.cloudflare.com/client/v4/accounts/"
            f"{self.cloudflare_account_id}/d1/database/{self.d1_database_id}/query"
        )


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
