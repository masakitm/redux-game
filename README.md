# TIC-TAC-TOE
redux-actions + css modules  
create date: 2018/05

## TL;DR
React+Redux自己学習のため、いわゆる5目並べ系ゲームをスクラッチで再現・redux化しアレンジを加えたものです。  
使用パッケージは以下の通りです。  

```
  "devDependencies": {
    "autoprefixer": "^8.5.0",
    "babel-core": "^6.26.0",
    "babel-eslint": "^8.2.3",
    "babel-loader": "^7.1.4",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "css-loader": "^0.28.11",
    "eslint": "^4.19.1",
    "eslint-config-airbnb": "^16.1.0",
    "eslint-config-prettier": "^2.9.0",
    "eslint-plugin-flow": "^2.29.1",
    "eslint-plugin-import": "^2.11.0",
    "eslint-plugin-jsx-a11y": "^6.0.3",
    "eslint-plugin-prettier": "^2.6.0",
    "eslint-plugin-react": "^7.7.0",
    "flow-bin": "^0.70.0",
    "flow-typed": "^2.4.0",
    "node-sass": "^4.9.0",
    "postcss-loader": "^2.1.5",
    "prettier": "^1.12.1",
    "sass-loader": "^7.0.1",
    "style-loader": "^0.21.0",
    "webpack": "^4.6.0",
    "webpack-cli": "^2.0.14",
    "webpack-dev-server": "^3.1.3"
  },
  "dependencies": {
    "babel-polyfill": "^6.26.0",
    "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "react-redux": "^5.0.7",
    "redux": "^4.0.0",
    "redux-actions": "^2.3.2",
  }
```

### Javascript記法について
ES6記法にて実装をおこなっております。

### ディレクトリ構成について
* components viewを受け持つstatelessなコンポーネントとscssを格納しています
* container ビジネスロジックを受け持ち、reduxと接続するコンポーネントを格納しています
* modules redux関連 ducksを用いて記述したファイルを格納しています

### redux構成について
ducksと呼ばれる構成を用いてファイル数の削減・可読性の向上を狙っています。  
https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c  
これは`Reducer``Action``ActionCreator`　を1ファイルにまとめる記述方法の一種です。  
  
責務の面からは`Reducer``Action``ActionCreator`を分割するのは正しいです。  
ですが、互いにComponent内で紐づけられており、密結合であること。また大規模アプリケーション以外ではducksの見通しの良さが大きなメリットとなることから、ducksを選択いたしました。  

また、redux推奨パッケージ`redux-actions`を用いて見通しの改善を図っています。  

### css-modules採用について
CSS in JSは多様な選択肢があり、個人的にはstyled-componentsを好んで使っています。
https://github.com/styled-components/styled-components
webpackに別途loaderパッケージを追加する必要がなく、複雑な構成や設定でのハマりを防げる事。その上でcomponentに紐づいたスタイリングができ、またscssも使えることからベストな選択肢だと考えています。  
  
今回css-modulesを選択したのは、現場レベルでの採用率が高いことと、reactの知識が少ないデザイナーやマークアッパーにも理解しやすいためです。  
案件によってはまだまだstyled-componentsを導入しづらい現場もあるため今回はこちら導入をいたしました。　　

### eslintについて
eslintはJavaScript(ECMAScript)のための静的検証ツールです。括弧の有無、タイプミス、使用されていない変数など、コードを実行する前に明確なバグを見つけたりスタイルを統一するのに役立つ非常に便利なツールです。　　
自分のプロジェクトに合わせたカスタムルールも作れ、モダンフロントエンド開発には必須ともいうべきツールです。　　
https://qiita.com/mysticatea/items/f523dab04a25f617c87d　　
今回はairbnbが公開している`eslint-config-airbnb`を導入し、こちらに準拠したスタイルでコードを記述しています。

### prettierについて
prettierはコードコードフォーマッタです。  
eslintとよく似ていますが、ソースコードを綺麗に保つ・コードスタイルを統一・自動整形する部分により特化しています。
ESLintでは整形できないコードを整形できる・ESLintと比べて手軽で確実に整形できる部分が大きく秀でたツールです。
https://qiita.com/soarflat/items/06377f3b96964964a65d

これらを用いてエディタ上で保存した際にeslintとprettierが連携し自動でコードを修正を行うよう設定しています。 　　 
prettierとeslintはデフォルトでは衝突するため`eslint-config-prettier``eslint-plugin-prettier`の二つを導入して共存を可能とし、保存時にまずeslintが走る > prettierがeslintのルールに則って整形というマクロ的手法を採用しています。
これによりバグの発見やコードのちょっとした整形に手間を取られることなく、非常に効率的な開発が可能になります。
