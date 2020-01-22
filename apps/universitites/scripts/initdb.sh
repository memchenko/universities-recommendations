#!/usr/bin/env bash

set -e

psql -v --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE universities ENCODING UTF8;
    CREATE ROLE universities LOGIN PASSWORD 'password';
    GRANT ALL PRIVILEGES ON DATABASE universities TO universities;
    ALTER USER universities WITH SUPERUSER;
EOSQL