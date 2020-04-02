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

### 生命週期

> 圖片網站參考：http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

React的主要作用：定義資料 > render 成視覺 > 資料變更時一定更新視覺元素

常用的生命週期階段 

> Render階段
> Commit階段

透過ajax更新資料和繪製canvas等有副作用的動作，應該放在commit階段執行，而非render階段執行

#### Constructor（建構函式）

組件一開始誕生會執行的函式

有constructor一定要呼叫super(這個class的副類別)

通常會輸入props

不要跑setState , 不要將props指定到state裡面 , 不要在裡面呼叫AJAX

#### Render（渲染函式）

>  第一常用的生命週期函式Render

把資料轉成視覺畫面

應該要做的事：讀取props,讀取 state, 應該要純粹的將資料轉成元素

要return 一個 JSX元素,React 16 之後可以return array,

render裡面不應該做的事：setState(絕對不行)，AJAX呼叫，fetch，axios

#### ComponentDidMount（組件即將掛載函式）

> 第二常用的生命週期函式ComponentDidMount

功用：在一個 component 被 mount（加入 DOM tree 中）後，`componentDidMount()` 會馬上被呼叫。需要 DOM node 的初始化應該寫在這個方法裡面。如果你需要從遠端終端點（remote endpoint）請求資料的話, 此處非常適合進行實例化網路請求（network request）。

第二常用的生命週期函式componentDidMount

用來做組件第一次render到頁面的函式（常用的功能）

1.可以fetch資料
2.可以setState
3.可以使用this.ref

#### ComponentDidMount（組件更新函式）

只要state和props有變，就會觸發componentDidUpdate()

1.只要state或props更新都就會呼叫，裡面要使用condition，要自己去檢查是否有更新 
2.有可帶入三個參數。prevProps prevState snapshot
3.也可以使用setState裡面，但必須放在condition裡面

#### ComponentWillUNmount（組件將取消或離開之前會執行函式）

一般用於，將綁定的 EventListener, setTimeout 或是 Ajax 等等不再需要的行為移除 ( removeEventListener, clearTimeout ...等 )

> ### 較不常用的生命週期函式

#### getDerivedStateFromProps（發生在組件剛掛載的時候執行，更新的時候也會執行，render之前）

1.是一個靜態的函式，不會有this可以用
2.發生在組件剛掛載的時候執行，更新的時候也會執行
3.吃兩個參數Prop跟State
4.return 新的state
5.可以用來做復原功能
6.但可以用很多方式來取代，多元件頁面時的效能比較好
7.不能接受非同步運作

#### shouldComponentUpdate（組件更新時，用於比較props變更判斷是否要更新組件）

1.控制組件要不要更新的時候使用shouldComponentUpdate生命週期函式，使用Props跟State參數

2.預設會return true，如果return false，就不會在跑render、componentDidMount....等

3.例如:上層組件會一直傳入ms給下層組件，只有上一個秒數跟下一個秒數不相等的時候才更新，可以改善render的效能。

4.PureComponent 內建shouldComponentUpdate

#### getSnapshotBeforeUpdate（常用於記錄非state的dom狀態，發生於更新組件之前）

```
class Log extends Component{
    getSnapshotBeforeUpdate(prevProps, prevState){
        if(prevProps.item.length !== this.props.items.length){
            const list = this.ref-current;
            return list.scrollHeight - list.scrollTop;
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState , snapshot){
        if(snapshot){
            const list = this.ref.current;
            list.scrollTop = list.scrollHeight - snapshot;
        }        
    }
}
export default Log;
```

#### React 16 - Render 更加靈活

React16之前：render只能回傳jsx，且最外層必須用個元素包裝起來

- 可以回傳jsx陣列或fragment等東西而不再有所限制

```
import React , {Component , Fragment} from 'react';
class MyComponent extends Component {
  render(){
     return [
         <div></div>,
         <span></span>,
         <ul></ul>,
     ]
     // return (
     //    <Fragment>
     //        <div></div>,
     //        <span></span>,
     //        <ul></ul>,
     //    </Fragment>
     // )
        
  }
}
export default MyComponent;
```

- Fragment的好處在於可以略過那些只吃一個節點的工具，例如ReactRouter中Router裡面只可以裝Single Element

- 可以回傳string 或 number

- 可以回傳boolean 或 null

React Fragment

https://reactjs.org/docs/react-api.html#fragments

#### React 錯誤處理

```
state = {
    hasError : false,
}
static getDerivedStateFromError(error){
    return {hasError:true};
}
```

https://zh-hant.reactjs.org/docs/error-boundaries.html
