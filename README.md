This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

## build
```bash
npm run build
```

## build avec analyse
```bash
$env:ANALYZE="true"; npm run build
```

## puis
```bash
npm run start
```


## Docker

- en dev
```bash
docker-compose -f docker-compose.dev.yml up --build
```

- en prod
```bash
docker-compose -f docker-compose.prod.yml up --build
```