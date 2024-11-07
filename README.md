# Platine Client
## Set up
3) Clone the project:
```bash
git clone https://forge.univ-lyon1.fr/but3-ra1/front-end.git
```

2) Install dependecies:
```bash
npm install
```

3) Create network
```bash
docker network create platine-network
```

## Run
### Linux
```bash
docker compose up
```
### Windows - Docker desktop
```bash
docker compose up --watch
```

## Production
### Build
```bash
npm run build
```
### Start
```bash
npm run start
```
