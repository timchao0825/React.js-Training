### React 特色與思維

- 專注於View上面的構建

- 透過組件(component)的方式，來開發使用者介面
  
  - 好處：重複使用呈現資料，以及反應資料的改變

- React不使用Template方法，而是使用JavaScript來建構rendor函式

- React不做資料綁定，單向資料流

- React作用流程：
  
  - 資料變更的時候，會將組件全部重新Rendor一次
  
  - rendor成virtul dom之後．會跟真實的dom做比對更新有變更的元素
  
  - 優點：每次資料變更都只更新最少、最必要的元素

- 組件是由狀態(props)、屬性(state)、生命週期(life cycle)、自訂方法(custom methods)的單位

- 開發react大部分都在開發組件

- React思維：聲明式、單向資料流、不會修改dom元素、而是修改資料，讓react更新視覺元素

### 三大框架比較

- Angular
  
  - Google 2010
  
  - MVVM  
  
  - 優點：
    
    - 完整的教學文件
    
    - 強大的解決方案
    
    - 雙向綁定
    
    - 依賴注入
  
  - 缺點：
    
    - 要花很多時間去學習
    
    - 語法複雜(typescript)
    
    - 版本變動大

- Vue
  
  - 尤雨溪
  
  - Vue 2
  
  - MVVM
  
  - 優點：
    
    - 完整多國語言教學文件
    
    - 集各家特色
    
    - 容易整合
    
    - 輕量
  
  - 缺點：
    
    - 生態還不夠全面

- React
  
  - Facebook 2013
  
  - React 16
  
  - Virtual DOM
  
  - MVC 當中的 V
  
  - 優點：
    
    - 簡單好學
    
    - 運用靈活
    
    - 單向資料流
    
    - Virtual DOM技術
    
    - 升級工具
  
  - 缺點：
    
    - 沒有React百科（缺少好的文件）
    
    - 太過靈活
    
    - JS知識需求高

- Virtual DOM 介紹
  
  - Virtual DOM是在component render function與DOM之間，virtual dom在每次資料異動時，都會被全部重新render，在跟實際的DOM互相比較，比較後更新Real DOM差異處
  
  - 優點：
    
    - 初始Render快
    
    - 大量更新快
    
    - 容易實作dom以外的render(React Native)

- MVVM
  
  - 小量更新快
  
  - 要做優化，大量更新才快

### ES6簡介

Scope:作用域，只有分function scope 與 global scope而已

bloack:區塊( {} 裡面的都是區塊 )

var , let , const

- var作用範圍在 scope

- let/const:block

箭頭函式

this的用法簡稱**它在哪個物件下被呼叫**








