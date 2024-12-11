import isOdd from "is-odd";

import { helloCJS } from "./myFunc.cjs";
import { helloESM } from "./myFunc2.js";

console.log(isOdd(1));

// 自作モジュール
helloCJS();
helloESM();