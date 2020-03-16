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

- React 寫法排序以state > 生命週期 > 自訂函式 > render 來做順序較好（規矩寫法）

### Vue 與 React 比較

React

- render function 規則少，JSX幾乎沒有自訂規則  
- 變數和自訂函式在哪裡很清楚  
- 改變資料：傳入新的物件，改變舊狀態  
- redux, alt, reflux, context api 不同作者寫的，選擇多

Vue

- 模板語法規則多  
- template 裡的變數短  
- 優點，vue 會自動到 script 裡找變數，簡短快速  
- 缺點，光看程式碼不確定目標在哪  
- 要學 template、scrip 的規則  
- 
- 改變資料的思維：直接改變變數的值  
- 一條龍的 library，vue, vue router, vuex 同一個作者寫出來的

### ES6簡介

Scope:作用域，只有分function scope 與 global scope而已

bloack:區塊( {} 裡面的都是區塊 )

var , let , const

- var作用範圍在 scope

- let/const:block

- 

**箭頭函式**

this的用法簡稱**它在哪個物件下被呼叫**

**import , export語法**

**解構函式**

### JSX 簡介

1. 每個tag都需要close ( /> )

2. jsx 所有的物件都可以self closing </> , close tag = <div></div>

3. class避免與js撞名改用className , for 也改名為htmlFor

4. html 可以都小寫 , jsx method 都要用駝峰式命名onClick

5. jsx 可以用大括號{}來表達一個值或是一個表達式

#### 組件裡面有什麼

### JS 函式方法

bind 

### React 函式

setState ：React組建的內建函式，用於更新狀態

自訂函式的function (){}的這種寫法，function 內不會回傳this的組件內容

用箭頭函式，或用constructor(props){}方法

### HOC(進階高階組件)

Higher-Order Components（HOC）通常是一個函數，可代入元件（Component）作為參數，並回傳一個新的元件。使用 HOC ，的目的是將通用的邏輯放在 HOC 中，變動的部分就由代入 Component 的 props 和 state 傳入即可。

### React Key 屬性

陣列元素渲染時+key屬性的目的：讓每個渲染出來的component都能夠認得『 自己與資料 』的連結

key必須是unique的 (parent以內皆可，例如：不同div內，即使重複了也不會影響彼此) 

加上key，則react就會知道每個元素和資料對應，只要資料沒變就不會重新渲染。

不用index當做key (只能避掉warnning，不能避免效能的耗損)...！！例如刪除元素後每個

素對應的indexKey都會改變，則每次還是會重新渲染！！

理想的狀況下是請後端傳送足以讓你當做key的資料！
