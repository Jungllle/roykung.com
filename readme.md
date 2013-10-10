## 在自己的電腦跑起來

> 電腦請先安裝ruby

```
$ gem install jekyll
$ bundle install
$ jekyll serve --watch
```

打開瀏覽器到 [http://localhost:4000](http://localhost:4000)

## 使用手冊:

### 新增文章:

```
$ rake post title="A Title"
```

範例：

```
$ rake post title="範例"
```

就會在_post/下產生`2013-08-11-fan-li.md`

打開檔案最上面應該會產生出相關的資訊如下:

### 預覽網站:

除了上面`$ jekyll serve --watch`的方法看網站，也可以使用

```
$ rake preview
```

打開瀏覽器到 [http://localhost:4000](http://localhost:4000)

## 發佈

```
$ ./deploy
```

## Authors

- @garylai1990

## Contributors
