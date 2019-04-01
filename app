移动端设备像素比 dpr：
  devicePixeRatio其实指的是window.devicePixelRatio.
  window.devicePixelRatio是设备上物理像素和设备独立像素(device-independent pixels(dips))的比例。
  公式表示就是：window.devicePxelRatio = 物理像素 / dips
  
物理像素:
   一个物理像素是显示器(手机屏幕)上最小的物理显示单元，在操作系统的调度下，每个设备像素都有自己的颜色值和亮度值。
dips(dip或dp或device independent pixels)：
   设备独立像素(密度无关像素),可以认为是计算机坐标系统中的一个点，这个点代表一个可以由程序使用的。

虚拟像素:(比如:css像素),然后由相关系统转换为物理像素。

dip可以用来辅助区分视网膜设备还是非视网膜设备

  vue-upload:
post-action: POST请求得上传URL  类型: String 默认值: undefined 示例: <file-upload post-action="/upload/post.php"></file-upload>
put-action: PUT 请求的上传URL 类型: String 默认值: undefined  put-action 不为空请优先 PUT 请求 示例: <file-upload put-action="/upload/put.php"></file-upload>
custom-action: 类型: async Function 默认值: undefined  custom-action 优先级高于 put-action, post-action    

headers 自定义上传请求header 数据 类型 Object 默认值 {}
data: POST 请求: 附加请求的 body
      PUT 请求: 附加请求的 query

      类型: Object
      默认值: {}
value,v-model 文件列表
      类型: Array<File | Object>
      默认值: []
accept 表单的accept 属性
      类型: string
      默认值: undefined
multiple 表单属性 是否允许选择多个文件
