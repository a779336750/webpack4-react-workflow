# webpack4-react-workflow
独立开发和配置基于webpack4的用于react开发的工作流
# webpack性能优化 #
###优化构建速度
- 将loader应用于最少数的必要模块中，使用include或exclude配置，指定应用loader的文件夹下的对应文件类型

```

    test: /\.js$/,
    include: path.resolve(__dirname, 'src'),
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }
```

- noParse性能优化,告诉webpack哪些文件不必解释，因为某些库文件，如jquery，lodash等直接可用，无需解析就可使用
`    noParse: [/jquery|lodash/, /react\.min\.js$/],
`

- resolve设置别名,使用@src别名可以在执行代码时减少resolve的层层嵌套
```resolve: {
	alias: {
	  '@src': path.resolve(__dirname, 'src')
	}
  }
```
- resolve指定第三方modules搜索的目录,避免层层查找
```
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')]
  }
```

- 关闭inline模式可以减少构建时间，chunk越多提升月明显。关闭方式：
`devserver:{inline:false}`
- UglifyJSPlugin插件开启缓存和parallel
`[
  new UglifyJsPlugin({
    cache: true,
    parallel: true
  })
]`

- 开启模块热替换HMR,无需刷新页面即可观察到部分的更改
(注意:开启模块热替换以后必须设置inline为true，否则无法开发模块热替换)
```
devServer: {
  contentBase: './dev',
  hot: true,
  inline: true,
}
```

###优化输出质量-压缩文件体积
- 区分环境--减小生产环境代码体积
许多第三方库中也有大量的根据开发环境判断的if else代码，构建也需要根据不同环境输出不同的代码，所以需要一套机制可以在源码中区分环境，区分环境之后可以使输出的生产环境的代码体积减小。

- 压缩代码-JS、ES、CSS

	压缩js:UglifyJSPlugin插件，默认选项：[https://github.com/mishoo/UglifyJS2/tree/harmony#compress-options](https://github.com/mishoo/UglifyJS2/tree/harmony#compress-options "compress默认选项")

- 压缩CSS：css-loader?minimize、PurifyCSSPlugin

	   cssnano基于PostCSS，不仅是删掉空格，还能理解代码含义，例如把color:#ff0000 转换成 color:red，css-loader内置了cssnano，只需要使用 css-loader?minimize 就可以开启cssnano压缩。

- 使用ExtractTextPlugin插件抽离css文件 
```
{
  test: /\.less$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader?minimize',
        options: {
          modules: true,
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
          importLoaders: 1
        }
      },
      {
        loader: 'less-loader' // compiles Less to CSS
      }
    ]
  })
},
plugins: [
  new ExtractTextPlugin('style.css')
]
```

# REACT组件#
##### 表单组件@src/component/form
##### 弹窗组件：
- modal-dialog:
	优点：无需外部控制弹窗的显隐，使用组件内部state控制，减少业务耦合
	以static方法暴露一个show方法，巧妙使用自定义事件（document.dispatchEvent）方法实现参数传递
	
- modal-hoc:

	使用高阶组件的方式，将业务组件包裹成弹窗
```
  //包裹业务组件
  @ModalHoc
  class HelloWorld extends React.Component {
   render() {
     return <div>hello world</div>;
   }
  }
  //弹出弹窗
  HelloWorld.show()
```
##### 评星组件@src\components\star-rating
##### 移动端视频播放组件@src\components\video-player
##### 全屏滚动组件@src\components\full-screen-scroll
##### 监听触摸滑动组件@src\components\slider
##### 登录注册相关组件@src\components\LoginRegisterWrapper
##### 无限滚动组件@src\components\infinite-scroll
##### 链接组件@src\components\link
##### 无限滚动组件\components\link
##### UI相关组件
- toast
- toggle
- button
- collapse
- flower-spinner

#...

