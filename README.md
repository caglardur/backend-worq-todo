# Backend for Worq-TODO

# <<<<<<< HEAD

> > > > > > > ecabbd98faf83c418386f2e087b18023e43b5a97

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

## Database yapısı

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
npm run dev
```
