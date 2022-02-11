# Backend for Worq-TODO

Bu proje [frontend-Worq-todo](https://github.com/caglardur/frontend-worq-todo) uygulamasını beslemek için hazırlanmıştır. Database için [Postgresql](https://www.postgresql.org/) kullanılmıştır.

Kullanılan paketler:

- [Express](https://expressjs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [pg](https://www.npmjs.com/package/pg)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Repository Klonlama

Repository'i kendi bilgisayarınıza klonlayın.

```bash
git clone https://github.com/caglardur/backend-worq-todo.git
```

Aşağıdaki komut ile Npm paketlerini yükleyin.

```bash
cd backend-worq-todo
npm install
```

## ENV file örneği:

```bash
PORT=
PGHOST=
PGUSER=
PGDATABASE=
PGPASSWORD=
PGPORT=
```

## Database oluşturma

```bash
CREATE TABLE public.tasks (
    id bigserial NOT NULL,
    title character varying(50) NOT NULL,
    description text NOT NULL,
    posting_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updating_date timestamp with time zone,
    is_complated boolean DEFAULT false NOT NULL
);
```

```bash
                                                   Tablo "public.tasks"
     Kolon     |        Veri tipi         | Sıralama (collation) | Boş (null) olabilir |            Varsayılan
---------------+--------------------------+----------------------+---------------------+-----------------------------------
 id            | bigint                   |                      | not null            | nextval('tasks_id_seq'::regclass)
 title         | character varying(50)    |                      | not null            |
 description   | text                     |                      | not null            |
 posting_date  | timestamp with time zone |                      | not null            | CURRENT_TIMESTAMP
 updating_date | timestamp with time zone |                      |                     |
 is_complated  | boolean                  |                      | not null            | false
```

## Çalıştırma

Projeyi çalıştırmak için aşağıdaki komutu terminalinize yazın.

```bash
npm start
```
