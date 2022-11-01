// import { createApp } from "vue"

// import SButton from "./button"
// import SFCButton from "./SFCButton.vue";
// import JSXButton from "./JSXButton.tsx";
import { createApp } from "vue/dist/vue.esm-bundler.js";
import SmartyUI from "./entry";

createApp({
  template: `
        <div>
            <SButton color="blue">蓝色按钮</SButton>
            <SButton color="green">绿色按钮</SButton>
            <SButton color="gray">灰色按钮</SButton>
            <SButton color="yellow">黄色按钮</SButton>
            <SButton color="red">红色按钮</SButton>
        </div>
        <div>
            <SButton plain color="blue">朴素按钮</SButton>
            <SButton plain color="green">绿色按钮</SButton>
            <SButton plain color="gray">灰色按钮</SButton>
            <SButton plain color="yellow">黄色按钮</SButton>
            <SButton plain color="red">红色按钮</SButton>
        </div>
        <div>
            <SButton size="small" color="blue">小按钮</SButton>
            <SButton size="medium" color="green">标准按钮</SButton>
            <SButton size="large" color="gray">大按钮</SButton>
        </div>
        <div>
            <SButton color="blue" round plain icon="search" ></SButton>
            <SButton color="green" round plain icon="edit" ></SButton>
            <SButton color="gray" round plain icon="check" ></SButton>
            <SButton color="yellow" round plain icon="message" ></SButton>
            <SButton color="red" round plain icon="delete" ></SButton>
        </div>
        <div>
            <SButton round color="blue">圆角按钮</SButton>
            <SButton round color="green">绿色按钮</SButton>
            <SButton round color="gray">灰色按钮</SButton>
            <SButton round color="yellow">黄色按钮</SButton>
            <SButton round color="red">红色按钮</SButton>
        </div>
    `,
})
  .use(SmartyUI)
  .mount("#app");
