## github

https://github.com/tacogips/javascript

gitをクラウドで保存できるようになるサービス。

ファイルをクラウドに保存したり、何人かで1つのドキュメントを編集できるようなる。

git なので作業履歴が見れる

Pull Request(略称PR)


```
git clone  https://github.com/tacogips/javascript
```


## javasctipt
プログラミング言語の1つ。

Javaと名前が似ているがまったくの別物(Javascriptの設計時はJavaの影響があったため名前が似ているが現在はまったく関係ないと思っていい)。

### Javascriptの用途の違い

1. ブラウザでwebページを見たときに、文字を動かしたり、スマホのスクロールに合わせて画像を変えたりなど、サイトに動きをつけて格好良くできる。 サイト上の動画プレイヤーもJavascriptが使われていることが多い。
サイトのページを移動せずにサーバにデータを送ったり受け取ったりしてスムーズにページを変えたりすることもできる。(Ajax)
HTMLやCSSとセットで書く。サーバが返すHTML,CSS,JavascriptのコードがPCのブラウザ上で動作する。

2. サーバ上で動き、データベースにデータを書き込んだり、HTMLやCSSのコードをブラウザに返したりする。Server上でNodeがJavascriptを動かすことでこれを行う(サーバサイドではブラウザではなくNodeがJavascriptを実行する)


## 用語


### レンダリング
絵を描いたりする描画のこと。主にブラウザがHTMLのコードを解析してブラウザにwebページを描くことを指す。


### 関数
functionともいう。引数(ひきすう)を受け取り何か処理をして戻り値を返すもの。


```
// 関数の定義
// name が引数
function kawaii(name){
	return name + 'は可愛い'; //戻り値(文字列も'+'で結合できる)
}

// 関数の実行
kawaii('ももクロ'); //関数の戻り値 => ももクロは可愛い

```


## コマンド

```
brew install npm  # npm(node のライブラリ管理ツール) インストール  node package manager => npm
npm install # install libraries
node app.js # run

# with browser access to http://localhost:3000

```






## 代入

用意した箱に値を入れること。
javascriptでは` = `を書く。数学の=とは違うのでややこしい。
(数学の = は `==`や `===`を使う(この2つの違いは後々) )

```
x = 1 // xという箱に1を入れる
y = x + 2 // xの箱の中身に2を足してyという箱にいれる

// y の中身を表示
console.log(y) // => 3
```


### フレームワーク、ライブラリ

ライブラリは、よくやる動作をプログラムで何度も書かなくても良いよう関数などにまとめて公開されているもの。文字の数をカウントするライブラリとか
。
ブラウザ上でを簡単にアニメーションなどを行うライブラリはJqueryが有名


フレームワークはライブラリと似ているが,たくさんのライブラリを組み合わせたりして何かをより作りやすくするもの。
(小さいものがライブラリ、大きくて複雑なものがフレームワークと考えてもそんなに間違ってない)

Webサイトを作るためのフレームワークはWebフレームワークと呼ばれる。

サーバサイドで動くWeb Frameworkは
RubyのRuby On Raisとかが有名。Javascriptではexpressなど。

ブラウザ上でレンダリングをやりやすくしたり動きを作りやすくしたりするフレームワークはReactやAngularなど。


### XML

```
<PERSON>
	<NAME>Marilyn</NAME>
	<AGE>25</AGE>
	<TALL>159</TALL>
</PERSON>
```

の用に<>と</>で囲ってデータを書くルール。

HTMLと名前が似ているのはHTMLもXMLの一種だから
(HTMLはXMLのルールにしたがいつつ `<HTML>`や`<BODY>`など、使えるタグと文法が決まっている)
```

### Ajax
Asyncchronous Javascript+XML
URLを移動せずにサーバとのデータのやりとりを行うのでスムーズにレンダリングが行える






