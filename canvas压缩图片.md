## canvas压缩图片

随着手机像素的提高，拍摄的照片越来越大，在实现上传功能的时候经常会遇到超时或者超出上传限制的问题，需要前端在上传到接口之前对图片进行压缩处理，此处使用canvas实现图片的压缩


   选择上传文件后触发的函数
   ```

   // input元素
   <input @change="upFile" />
   
   // 函数方法  {此处以Vue中的方法为例}
   async upFile(event) {
       var file = event.target.file[0]
       const imgMsg = await this.compressImg(file, file.name)
   }
   ```

   压缩图片的函数
   ```
   compressImg(file, name) {
       return new Promise((resolve, reject) => {
            var read = new FileReader()
            var fileSize = parseFloat(parseInt(file['size']) / 1024 / 1024).toFixed(2)
            var _this = this
            read.readAsDataURL(file)
            read.onload = function(e) {
              var img = new Image()
              img.src = e.target.result
              img.onload = function() {
                // 默认按比例压缩
                var w = this.width,
                  h = this.height
                // 生成canvas
                var canvas = document.createElement('canvas')
                var ctx = canvas.getContext('2d')
                var base64
                // 创建属性节点
                canvas.setAttribute('width', w)
                canvas.setAttribute('height', h)
                ctx.drawImage(this, 0, 0, w, h)
                if (fileSize < 1) {
                  // 如果图片小于一兆 那么压缩0.5
                  base64 = canvas.toDataURL(file['type'], 0.5)
                } else if (fileSize > 1 && fileSize < 2) {
                  // 如果图片大于1M并且小于2M 那么压缩0.3
                  base64 = canvas.toDataURL(file['type'], 0.3)
                } else {
                  // 如果图片超过2m 那么压缩0.2
                  base64 = canvas.toDataURL(file['type'], 0.2)
                }
                // 回调函数返回file的值
                var newFile = _this.dataURLtoFile(base64, name)
                resolve(newFile)
              }
          }
       })
   }
   ```
   
   将base64转换成file的函数
   ```
   dataURLtoFile(dataurl, filename) {
      // 将base64转换为文件
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    }
   ```