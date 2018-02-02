session replay uglify
===
使用google extensions來實做。
關於更多google extensions可參考官方文件： [google extensions 官方文件](https://developer.chrome.com/extensions) 。

作品連結： [https://github.com/jd615645/session-replay-uglify](https://github.com/jd615645/session-replay-uglify)

# 功能
針對有做session replay的網站進行混淆，會定期對網頁發出移動滑鼠座標或是滑鼠點擊的事件，來污染傳送出去的資料。

## 插件初始畫面
有兩個選項能夠選擇，開啟後將會執行對應的動作，開啟後之後開啟的網頁都會執行該動作
![](https://imgur.com/lm6FmuV.png)
## 滑鼠移動混淆功能
開啟功能後每一秒會對瀏覽器發出移動到隨機XY座標的事件
![](https://imgur.com/lb27OMB.png)
## 滑鼠點擊混淆功能
開啟功能後每一秒會對瀏覽器發出點擊到隨機XY座標的事件
![](https://imgur.com/FPX8UTG.png)

# 如何安裝
1. 前往插件 Github 進行下載 [https://github.com/jd615645/session-replay-uglify](https://github.com/jd615645/session-replay-uglify)
2. 點擊 Clone or download
3. Download ZIP
4. 解壓縮
5. 至Chrome [擴充功能](chrome://extensions/)
6. 載入未封裝擴充功能
7. 選擇解壓縮後的資料夾安裝
8. 完成!


# 工具原理
session replay相關服務會請使用者插入一段JS代碼去追蹤使用者的瀏覽狀況，以 [Fullstory](https://www.fullstory.com/) 為例，它會去監聽使用者的鍵盤滑鼠輸入、移動、點擊等事件(圖1)，之後定期回傳至服務的伺服器(圖2)。

本工具在使用時會在網站插入 [JQuery](https://jquery.com/) 這個函式庫，之後使用JQuery來操作網頁各元件，本工具主要使用 [.trigger()](http://api.jquery.com/trigger/) 進行點擊事件的觸發並且模擬，範例程式碼如下：
```javascript
// 此段程式碼會模擬點擊事件對網頁發出點擊事件
var e = $.Event('click')
$(document).trigger(e)
```

[圖1] - 插入的追蹤程式碼片段
![圖1](https://imgur.com/tNweqeW.png)
[圖2] - 回傳紀錄的聆聽事件
![圖2](https://imgur.com/gBmBsbM.png)

# DEMO
開啟服務前(資料回傳無觸發事件)
![](https://imgur.com/gQCVYFm.png)
開啟服務後(資料回傳有事件觸發)
![](https://imgur.com/1jLoedo.png)
