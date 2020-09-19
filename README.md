# manager
管理画面

# docker develop image build

```shell
> docker build -t manager_dev -f dockerfile/Dockerfile .
```

# docker develop run

```shell
> docker run -v D:/projects/customize-game/manager/web:/web -p 8080:8080 --name manager_dev -it -d manager_dev
```

# debug

```shell
> docker exec -it manager_dev /bin/bash
> yarn install
> yarn serve
```

