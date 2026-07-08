import{_ as V,o as P,m as l,b as O,c as T,d as a,f as t,w as i,t as v,h as S,an as U,p as y,ao as H,j as F,l as p,B as C,E as g}from"./index-DlW8UI-H.js";import{u as k}from"./useAI-DPoWALf_.js";const Y={class:"tool-container"},J={class:"tool-section"},Q={class:"tool-section"},W={class:"tool-section"},G={class:"mode-hint"},q={class:"tool-section"},X={class:"tool-label"},K={class:"tool-actions"},Z={key:0,class:"tool-card-general",style:{"margin-top":"12px"}},ee={class:"tool-actions",style:{"margin-top":"6px"}},te={__name:"AICode",setup(ne){const{isAIEnabled:R,callAI:I,loadConfig:L,getPrompt:B}=k(),x=p(""),o=p("generate"),r=p("javascript"),f=p(""),u=p("");P(async()=>{await L(),x.value=await B("ai-code")});const w=C(()=>({generate:"描述你要生成的代码功能",explain:"粘贴需要解释的代码",optimize:"粘贴需要优化的代码",comment:"粘贴需要添加注释的代码",fix:"粘贴有 Bug 的代码"})[o.value]||""),N=C(()=>{switch(o.value){case"generate":return"例如: 实现一个二分查找函数...";case"explain":return"粘贴代码，我将解释其功能...";case"optimize":return"粘贴代码，我将提供优化建议...";case"comment":return"粘贴代码，我将添加中文注释...";case"fix":return"粘贴有问题的代码，我将尝试修复...";default:return""}}),_={javascript:{generate:`/**
 * 根据需求生成的函数
 */
function solution(input) {
  // TODO: 实现功能
  return input;
}

// 示例用法
console.log(solution("test"));`,explain:`/**
 * 代码分析报告:
 * 
 * 功能: [描述代码的主要功能]
 * 输入: [参数类型/结构]
 * 输出: [返回值说明]
 * 
 * 复杂度: O(n) 时间复杂度, O(1) 空间复杂度
 * 
 * 关键逻辑:
 * 1. 遍历输入数据
 * 2. 处理每个元素
 * 3. 返回处理结果
 */`,optimize:`/**
 * 优化建议:
 * 
 * 1. 使用 const/let 代替 var
 * 2. 使用箭头函数简化回调
 * 3. 利用解构赋值
 * 4. 使用模板字符串
 * 5. 使用展开运算符
 * 
 * 优化后代码:
 */
const optimized = (items) => {
  return items
    .filter(Boolean)
    .map(item => item.trim())
    .filter(item => item.length > 0);
};`,comment:`/**
 * [函数名] - [功能描述]
 * @param {类型} paramName - 参数描述
 * @returns {类型} 返回值描述
 */
function processData(/* 参数 */) {
  // 步骤1: 验证输入
  // 步骤2: 处理数据
  // 步骤3: 返回结果
}`,fix:`/**
 * Bug 修复报告:
 * 
 * Bug: [描述问题]
 * 原因: [根因分析]
 * 修复: [修改内容]
 * 
 * 修复后的代码:
 */
function fixedFunction(items) {
  // 添加了空值检查
  if (!items || !Array.isArray(items)) {
    return [];
  }
  return items.filter(item => item != null);
}`},python:{generate:`def solution(input_data):
    """
    根据需求生成的函数
    
    Args:
        input_data: 输入数据
    
    Returns:
        处理后的结果
    """
    # TODO: 实现功能
    return input_data


if __name__ == "__main__":
    print(solution("test"))`,explain:`"""
代码分析报告:

功能: [描述代码的主要功能]
输入: [参数类型/结构]
输出: [返回值说明]

复杂度: O(n) 时间复杂度, O(1) 空间复杂度

关键逻辑:
1. 遍历输入数据
2. 处理每个元素
3. 返回处理结果
"""`,optimize:`"""
优化建议:

1. 使用列表推导式
2. 使用内置函数
3. 使用生成器减少内存
4. 类型提示增强可读性
5. 使用 f-string

优化后代码:
"""
def process_items(items):
    return [item.strip() for item in items if item]`,comment:`def process_data(param):
    """
    [函数名] - [功能描述]
    
    Args:
        param: 参数描述
    
    Returns:
        返回值描述
    """
    # 步骤1: 验证输入
    # 步骤2: 处理数据
    # 步骤3: 返回结果
    pass`,fix:`"""
Bug 修复报告:

Bug: [描述问题]
原因: [根因分析]
修复: [修改内容]

修复后的代码:
"""
def safe_divide(a, b):
    if b == 0:
        return None  # 修复除零错误
    return a / b`},java:{generate:`/**
 * 根据需求生成的类
 */
public class Solution {
    public static Object execute(Object input) {
        // TODO: 实现功能
        return input;
    }
    
    public static void main(String[] args) {
        System.out.println(execute("test"));
    }
}`,explain:`/**
 * 代码分析报告:
 * 
 * 功能: [描述代码的主要功能]
 * 输入: [参数类型/结构]
 * 输出: [返回值说明]
 * 
 * 复杂度: O(n) 时间复杂度, O(1) 空间复杂度
 * 
 * 关键逻辑:
 * 1. 遍历输入数据
 * 2. 处理每个元素
 * 3. 返回处理结果
 */`,optimize:`/**
 * 优化建议:
 * 
 * 1. 使用 StringBuilder 代替字符串拼接
 * 2. 使用增强 for 循环
 * 3. 使用 Optional 避免空指针
 * 4. 使用 Stream API
 * 5. 使用 Lambda 表达式
 * 
 * 优化后代码:
 */
public List<String> process(List<String> items) {
    return items.stream()
        .filter(Objects::nonNull)
        .map(String::trim)
        .filter(s -> !s.isEmpty())
        .collect(Collectors.toList());
}`,comment:`/**
 * [方法名] - [功能描述]
 *
 * @param paramName 参数描述
 * @return 返回值描述
 */
public Object processData(Object param) {
    // 步骤1: 验证输入
    // 步骤2: 处理数据
    // 步骤3: 返回结果
    return null;
}`,fix:`/**
 * Bug 修复报告:
 * 
 * Bug: [描述问题]
 * 原因: [根因分析]
 * 修复: [修改内容]
 * 
 * 修复后的代码:
 */
public String safeToString(Object obj) {
    return Objects.toString(obj, "");  // 修复空指针
}`},cpp:{generate:`/**
 * 根据需求生成的函数
 */
#include <iostream>
#include <string>

auto solution(auto input) -> decltype(input) {
    // TODO: 实现功能
    return input;
}

int main() {
    std::cout << solution("test") << std::endl;
    return 0;
}`,explain:`/**
 * 代码分析报告:
 * 
 * 功能: [描述代码的主要功能]
 * 输入: [参数类型/结构]
 * 输出: [返回值说明]
 * 
 * 复杂度: O(n) 时间复杂度, O(1) 空间复杂度
 * 
 * 关键逻辑:
 * 1. 遍历输入数据
 * 2. 处理每个元素
 * 3. 返回处理结果
 */`,optimize:`/**
 * 优化建议:
 * 
 * 1. 使用 const 引用避免拷贝
 * 2. 使用 move 语义
 * 3. 使用 auto 类型推导
 * 4. 使用智能指针
 * 5. 使用 STL 算法
 * 
 * 优化后代码:
 */
std::vector<std::string> process(const std::vector<std::string>& items) {
    std::vector<std::string> result;
    std::copy_if(items.begin(), items.end(), std::back_inserter(result),
        [](const std::string& s) { return !s.empty(); });
    return result;
}`,comment:`/**
 * [函数名] - [功能描述]
 * @param paramName 参数描述
 * @return 返回值描述
 */
void processData(const std::string& param) {
    // 步骤1: 验证输入
    // 步骤2: 处理数据
    // 步骤3: 返回结果
}`,fix:`/**
 * Bug 修复报告:
 * 
 * Bug: [描述问题]
 * 原因: [根因分析]
 * 修复: [修改内容]
 * 
 * 修复后的代码:
 */
std::string safeAccess(const std::vector<int>& vec, size_t index) {
    if (index >= vec.size()) return "";  // 修复越界访问
    return std::to_string(vec[index]);
}`},html:{generate:`<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题</title>
    <style>
        /* 样式 */
    </style>
</head>
<body>
    <!-- 内容 -->
    <div id="app"></div>
    <script>
        // JavaScript
    <\/script>
</body>
</html>`,explain:`<!--
代码分析报告:

功能: [描述 HTML 结构的主要功能]
关键元素:
1. [标签] - [作用]
2. [标签] - [作用]
3. [标签] - [作用]

布局方式: [flex/grid/float]
响应式: [是/否]
-->`,optimize:`<!--
优化建议:

1. 使用语义化标签
2. 合并 CSS/JS 文件
3. 使用懒加载
4. 优化图片
5. 使用 CSS 变量

优化后代码:
-->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>优化后</title>
</head>
<body>
    <header><!-- 语义化 header --></header>
    <main><!-- 语义化 main --></main>
    <footer><!-- 语义化 footer --></footer>
</body>
</html>`,comment:`<!--
主容器 - 页面主要布局区域
-->
<div id="app">
    <!-- 导航栏 -->
    <nav class="navbar">
        <!-- 导航链接 -->
    </nav>
    <!-- 主要内容区 -->
    <main class="content">
        <!-- 内容区块 -->
    </main>
</div>`,fix:`<!--
Bug 修复报告:

Bug: [描述问题]
原因: [根因分析]
修复: [修改内容]

修复后的代码:
-->
<div style="display: flex; flex-wrap: wrap; gap: 16px;">
    <!-- 修复了 flex 布局不换行的问题 -->
</div>`},css:{generate:`/* 根据需求生成的样式 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
}

.grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
}

.card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    padding: 24px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}`,explain:`/*
代码分析报告:

功能: [描述样式的主要作用]
关键选择器:
1. [选择器] - [作用]
2. [选择器] - [作用]
3. [选择器] - [作用]

布局方式: flex/grid
响应式: 使用 [媒体查询/clamp/auto-fill]
*/`,optimize:`/*
优化建议:

1. 使用 CSS 变量
2. 合并重复属性
3. 使用简写属性
4. 移除未使用的样式
5. 使用 calc/clamp/min/max

优化后代码:
*/
:root {
    --primary: #8B5CF6;
    --radius: 12px;
    --shadow: 0 2px 12px rgba(0,0,0,0.08);
}

.card {
    background: #fff;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 24px;
}`,comment:`/* 页面主容器 */
.container {
    max-width: 1200px;
    margin: 0 auto;  /* 水平居中 */
}

/* 卡片组件 - 可复用的卡片样式 */
.card {
    border-radius: 12px;  /* 圆角 */
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);  /* 阴影效果 */
}`,fix:`/*
Bug 修复报告:

Bug: [描述问题]
原因: [根因分析]
修复: [修改内容]

修复后的代码:
*/
.element {
    display: flex;
    flex-wrap: wrap;  /* 修复溢出问题 */
    box-sizing: border-box;  /* 修复盒模型计算 */
}`},go:{generate:`package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}`,explain:`Go 代码分析:
- package main 定义入口包
- import 导入依赖
- func main() 是程序入口
- fmt.Println 打印输出`,optimize:`优化建议:
1. 使用错误处理
2. 添加单元测试
3. 使用 go fmt 格式化`,comment:`// 函数注释示例
func hello(name string) string {
    return "Hello, " + name
}`,fix:`Bug 修复:
- 检查空指针
- 处理错误返回值
- 避免切片越界`},rust:{generate:`/// 根据需求生成的函数
fn solution(input: &str) -> String {
    // TODO: 实现功能
    input.to_string()
}

fn main() {
    println!("{}", solution("test"));
}`,explain:`/// 代码分析报告:
///
/// 功能: [描述代码的主要功能]
/// 输入: [参数类型/结构]
/// 输出: [返回值说明]
///
/// 复杂度: O(n) 时间复杂度, O(1) 空间复杂度
///
/// 关键逻辑:
/// 1. 遍历输入数据
/// 2. 处理每个元素
/// 3. 返回处理结果`,optimize:`/// 优化建议:
///
/// 1. 使用迭代器链式调用
/// 2. 使用 match 代替 if-else
/// 3. 使用 Option/Result 处理错误
/// 4. 使用泛型减少重复
/// 5. 使用闭包
///
/// 优化后代码:
fn process(items: Vec<String>) -> Vec<String> {
    items.into_iter()
        .filter(|s| !s.is_empty())
        .map(|s| s.trim().to_string())
        .collect()
}`,comment:`/// [函数名] - [功能描述]
///
/// # Arguments
/// * \`param\` - 参数描述
///
/// # Returns
/// 返回值描述
fn process_data(param: &str) {
    // 步骤1: 验证输入
    // 步骤2: 处理数据
    // 步骤3: 返回结果
}`,fix:`/// Bug 修复报告:
///
/// Bug: [描述问题]
/// 原因: [根因分析]
/// 修复: [修改内容]
///
/// 修复后的代码:
fn safe_divide(a: f64, b: f64) -> Option<f64> {
    if b == 0.0 { None } else { Some(a / b) }
}`},sql:{generate:`-- 根据需求生成的 SQL
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 查询示例
SELECT * FROM users WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
ORDER BY created_at DESC;`,explain:`/*
SQL 分析报告:

功能: [描述 SQL 的主要作用]
表: [表名]
操作: SELECT/INSERT/UPDATE/DELETE
条件: [WHERE 条件说明]
排序: [ORDER BY 说明]
限制: [LIMIT 说明]
*/`,optimize:`/*
优化建议:

1. 添加合适索引
2. 避免 SELECT *
3. 使用 JOIN 代替子查询
4. 使用 EXPLAIN 分析
5. 使用 LIMIT 分页

优化后代码:
*/
CREATE INDEX idx_users_email ON users(email);
SELECT u.id, u.name, o.order_date
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE u.created_at >= '2024-01-01'
ORDER BY o.order_date DESC
LIMIT 100;`,comment:`-- 查询用户信息
SELECT 
    u.id,           -- 用户ID
    u.name,         -- 用户名
    u.email         -- 邮箱
FROM users u       -- 用户表
WHERE u.status = 1  -- 只查激活用户
ORDER BY u.created_at DESC;  -- 按创建时间降序`,fix:`/*
Bug 修复报告:

Bug: [描述问题]
原因: [根因分析]
修复: [修改内容]

修复后的代码:
*/
SELECT * FROM users 
WHERE email = 'test@example.com'
LIMIT 1;  -- 修复缺少 LIMIT 导致的性能问题`}};function A(s,e){const n=_[s]||_.javascript;return n[e]||n.generate}const D={generate:"生成",explain:"解释",optimize:"优化",comment:"注释",fix:"修复"},z={javascript:"JavaScript",python:"Python",java:"Java",cpp:"C++",html:"HTML",css:"CSS",go:"Go",rust:"Rust",sql:"SQL"};async function $(){const s=f.value.trim();if(!s){g.warning("请输入代码或需求描述");return}try{if(R.value){const e=z[r.value]||r.value,n={generate:`请用${e}实现以下需求，只返回代码：

${s}`,explain:`请解释以下${e}代码的功能和工作原理：
\`\`\`
${s}
\`\`\``,optimize:`请优化以下${e}代码，给出优化后的代码和优化说明：
\`\`\`
${s}
\`\`\``,comment:`请为以下${e}代码添加中文注释：
\`\`\`
${s}
\`\`\``,fix:`请修复以下${e}代码中的 Bug，给出修复后的代码：
\`\`\`
${s}
\`\`\``},d=x.value||"你是资深编程专家，根据用户选择的模式和语言提供精准的代码服务。",m=await I([{role:"system",content:d},{role:"user",content:n[o.value]}]);u.value=m}else{let e=A(r.value,o.value);o.value==="generate"?(e=e.replace(/\/\/ TODO: 实现功能/g,`// ${s}`),e=e.replace(/# TODO: 实现功能/g,`# ${s}`)):e=`/* ${D[o.value]||"处理"}结果 (${r.value}) */

`+s+`

/*
`+e+`
*/`,u.value=e}}catch(e){g.error(e.message||"处理失败")}}function M(){u.value&&navigator.clipboard.writeText(u.value).then(()=>g.success("已复制")).catch(()=>g.warning("复制失败，请手动选择复制"))}return(s,e)=>{const n=l("el-option"),d=l("el-select"),m=l("el-col"),j=l("el-row"),b=l("el-input"),E=l("el-icon"),h=l("el-button");return O(),T("div",Y,[e[8]||(e[8]=a("div",{class:"tool-header-bar"},[a("div",{class:"th-icon",style:{background:"#8B5CF615",color:"#8B5CF6"}},"</>"),a("h3",null,"AI 代码助手"),a("span",{class:"th-hint"},"AI 辅助编程")],-1)),t(j,{gutter:16},{default:i(()=>[t(m,{span:24,md:8},{default:i(()=>[a("div",J,[e[3]||(e[3]=a("div",{class:"tool-label"},"模式",-1)),t(d,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=c=>o.value=c),style:{width:"100%"}},{default:i(()=>[t(n,{label:"代码生成",value:"generate"}),t(n,{label:"代码解释",value:"explain"}),t(n,{label:"代码优化",value:"optimize"}),t(n,{label:"添加注释",value:"comment"}),t(n,{label:"Bug 修复",value:"fix"})]),_:1},8,["modelValue"])])]),_:1}),t(m,{span:24,md:8},{default:i(()=>[a("div",Q,[e[4]||(e[4]=a("div",{class:"tool-label"},"语言",-1)),t(d,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=c=>r.value=c),style:{width:"100%"}},{default:i(()=>[t(n,{label:"JavaScript",value:"javascript"}),t(n,{label:"Python",value:"python"}),t(n,{label:"Java",value:"java"}),t(n,{label:"C++",value:"cpp"}),t(n,{label:"HTML",value:"html"}),t(n,{label:"CSS",value:"css"}),t(n,{label:"Go",value:"go"}),t(n,{label:"Rust",value:"rust"}),t(n,{label:"SQL",value:"sql"})]),_:1},8,["modelValue"])])]),_:1}),t(m,{span:24,md:8},{default:i(()=>[a("div",W,[e[5]||(e[5]=a("div",{class:"tool-label"},"模式提示",-1)),a("div",G,v(w.value),1)])]),_:1})]),_:1}),a("div",q,[a("div",X,v(o.value==="generate"?"描述需求":"输入代码"),1),t(b,{modelValue:f.value,"onUpdate:modelValue":e[2]||(e[2]=c=>f.value=c),type:"textarea",rows:8,class:"mono-font",placeholder:N.value},null,8,["modelValue","placeholder"])]),a("div",K,[t(h,{type:"primary",onClick:$},{default:i(()=>[t(E,null,{default:i(()=>[t(S(U))]),_:1}),y(" "+v(o.value==="generate"?"生成":o.value==="explain"?"解释":o.value==="optimize"?"优化":o.value==="comment"?"添加注释":"修复"),1)]),_:1})]),u.value?(O(),T("div",Z,[e[7]||(e[7]=a("div",{class:"tool-label"},"输出结果",-1)),t(b,{"model-value":u.value,type:"textarea",rows:10,readonly:"",class:"mono-font",style:{"margin-top":"6px"}},null,8,["model-value"]),a("div",ee,[t(h,{size:"small",onClick:M},{default:i(()=>[t(E,null,{default:i(()=>[t(S(H))]),_:1}),e[6]||(e[6]=y(" 复制",-1))]),_:1})])])):F("",!0)])}}},se=V(te,[["__scopeId","data-v-7c6f1505"]]);export{se as default};
