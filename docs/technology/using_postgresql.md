---
sidebar_position: 4
---

# Installing PostgreSQL with Homebrew

1. Run the following command: `brew install postgresql` 

```
==> Downloading https://formulae.brew.sh/api/formula.jws.json
==> Downloading https://formulae.brew.sh/api/cask.jws.json
==> Downloading https://ghcr.io/v2/homebrew/core/postgresql/14/manifests/14.15
############################################################################################################ 100.0%
==> Fetching dependencies for postgresql@14: krb5, lz4 and readline
==> Downloading https://ghcr.io/v2/homebrew/core/krb5/manifests/1.21.3
Already downloaded: /Users/my-user/Library/Caches/Homebrew/downloads/c5793441ca90aa09420dddd84f19d4aaf86da4f0b3f60c84940d77b1cb4c6863--krb5-1.21.3.bottle_manifest.json
==> Fetching krb5
==> Downloading https://ghcr.io/v2/homebrew/core/krb5/blobs/sha256:c7e8ec4458b77cb3bdc1bea7b6db6f6dfa6bb6c377cc0e6b
Already downloaded: /Users/my-user/Library/Caches/Homebrew/downloads/b71cfbbd7e24bcdd2339bb44586acf2bf92881b953b4b9fcc7836139ac2a1e97--krb5--1.21.3.arm64_sonoma.bottle.tar.gz
==> Downloading https://ghcr.io/v2/homebrew/core/lz4/manifests/1.10.0-1
Already downloaded: /Users/my-user/Library/Caches/Homebrew/downloads/8e11e90eb21a06e0f199af9d80e011e3693c77dd353b2477579d95c8471a5802--lz4-1.10.0-1.bottle_manifest.json
==> Fetching lz4
==> Downloading https://ghcr.io/v2/homebrew/core/lz4/blobs/sha256:6590245dc4a919c46afa16366914cd4b5c0c4a8f4fb35a4f6
Already downloaded: /Users/my-user/Library/Caches/Homebrew/downloads/a55f61ddbdff069a1efe8a91355fe7541dc2dd53cddb6ab925c6af8d6b7de045--lz4--1.10.0.arm64_sonoma.bottle.1.tar.gz
==> Downloading https://ghcr.io/v2/homebrew/core/readline/manifests/8.2.13
Already downloaded: /Users/my-user/Library/Caches/Homebrew/downloads/aa1afa38997a2866d91c81fdda8b36d436cd4ea7a82aed07d13c83c56eb3460e--readline-8.2.13.bottle_manifest.json
==> Fetching readline
==> Downloading https://ghcr.io/v2/homebrew/core/readline/blobs/sha256:e46d4ff0c800dd35b9d5cef74e61ade54edc0834231f
Already downloaded: /Users/my-user/Library/Caches/Homebrew/downloads/83111ac86e24adf736d55f6be8bf15929cea064dcb47859cedcad53389ef8478--readline--8.2.13.arm64_sonoma.bottle.tar.gz
==> Fetching postgresql@14
==> Downloading https://ghcr.io/v2/homebrew/core/postgresql/14/blobs/sha256:e06e4275448de050feb2dfd89aded87b710beef
############################################################################################################ 100.0%
==> Installing dependencies for postgresql@14: krb5, lz4 and readline
==> Installing postgresql@14 dependency: krb5
==> Downloading https://ghcr.io/v2/homebrew/core/krb5/manifests/1.21.3
Already downloaded: /Users/my-user/Library/Caches/Homebrew/downloads/c5793441ca90aa09420dddd84f19d4aaf86da4f0b3f60c84940d77b1cb4c6863--krb5-1.21.3.bottle_manifest.json
==> Pouring krb5--1.21.3.arm64_sonoma.bottle.tar.gz
🍺  /opt/homebrew/Cellar/krb5/1.21.3: 163 files, 5.6MB
==> Installing postgresql@14 dependency: lz4
==> Downloading https://ghcr.io/v2/homebrew/core/lz4/manifests/1.10.0-1
Already downloaded: /Users/my-user/Library/Caches/Homebrew/downloads/8e11e90eb21a06e0f199af9d80e011e3693c77dd353b2477579d95c8471a5802--lz4-1.10.0-1.bottle_manifest.json
==> Pouring lz4--1.10.0.arm64_sonoma.bottle.1.tar.gz
🍺  /opt/homebrew/Cellar/lz4/1.10.0: 24 files, 714.2KB
==> Installing postgresql@14 dependency: readline
==> Downloading https://ghcr.io/v2/homebrew/core/readline/manifests/8.2.13
Already downloaded: /Users/my-user/Library/Caches/Homebrew/downloads/aa1afa38997a2866d91c81fdda8b36d436cd4ea7a82aed07d13c83c56eb3460e--readline-8.2.13.bottle_manifest.json
==> Pouring readline--8.2.13.arm64_sonoma.bottle.tar.gz
🍺  /opt/homebrew/Cellar/readline/8.2.13: 51 files, 1.7MB
==> Installing postgresql@14
==> Pouring postgresql@14--14.15.arm64_sonoma.bottle.tar.gz
==> /opt/homebrew/Cellar/postgresql@14/14.15/bin/initdb --locale=C -E UTF-8 /opt/homebrew/var/postgresql@14
==> Caveats
This formula has created a default database cluster with:
  initdb --locale=C -E UTF-8 /opt/homebrew/var/postgresql@14

To start postgresql@14 now and restart at login:
  brew services start postgresql@14
Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/postgresql@14/bin/postgres -D /opt/homebrew/var/postgresql@14
==> Summary
🍺  /opt/homebrew/Cellar/postgresql@14/14.15: 3,328 files, 45.6MB
==> Running `brew cleanup postgresql@14`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
==> Caveats
==> postgresql@14
This formula has created a default database cluster with:
  initdb --locale=C -E UTF-8 /opt/homebrew/var/postgresql@14

To start postgresql@14 now and restart at login:
  brew services start postgresql@14
Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/postgresql@14/bin/postgres -D /opt/homebrew/var/postgresql@14
```

2. Start the service using: `brew services start postgresql@14`
3. Check if the service is available and running: `brew services info --all`

```
postgresql@14 (homebrew.mxcl.postgresql@14)
Running: ✔
Loaded: ✔
Schedulable: ✘
User: my-user
PID: 777
```

4. Connect to the database: `psql -h localhost -d postgres`

## Additional commands

- Create a database: `CREATE DATABASE personal_expenses`
- Create a role: `CREATE ROLE app_user WITH LOGIN PASSWORD 'strong_password'`