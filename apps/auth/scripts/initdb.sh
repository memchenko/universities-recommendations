#!/usr/bin/env bash

set -e

psql -v --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE auth ENCODING UTF8;
    CREATE ROLE auth LOGIN PASSWORD 'password';
    GRANT ALL PRIVILEGES ON DATABASE auth TO auth;
    ALTER USER auth WITH SUPERUSER;
EOSQL