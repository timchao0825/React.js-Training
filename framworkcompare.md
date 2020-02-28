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
