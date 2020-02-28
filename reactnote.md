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
