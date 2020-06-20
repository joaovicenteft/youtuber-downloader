# youtuber-downloader
Criei meu próprio baixador de vídeos do youtube. Intenção de testar configurações de docker, docker-compose, docker-machine e deploy em heroku, firebase e AWS



![Screenshot](youtuber-downloader.png)

## Building docker
```
docker build -t youtuber-downloader .
```
## Running docker

```
docker run -p 4000:4000 youtuber-downloader
```
