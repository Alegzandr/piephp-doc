"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[225],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),m=a,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2,title:"Security",description:"Information on how to secure your framework and protect against common security threats."},i="Security",s={unversionedId:"advanced-features/security",id:"advanced-features/security",title:"Security",description:"Information on how to secure your framework and protect against common security threats.",source:"@site/docs/advanced-features/security.md",sourceDirName:"advanced-features",slug:"/advanced-features/security",permalink:"/docs/advanced-features/security",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Security",description:"Information on how to secure your framework and protect against common security threats."},sidebar:"sidebar",previous:{title:"User Authentication",permalink:"/docs/advanced-features/user-authentication"},next:{title:"Error Handling",permalink:"/docs/advanced-features/error-handling"}},c={},p=[{value:"Password Hashing",id:"password-hashing",level:3},{value:"SQL Injection Prevention",id:"sql-injection-prevention",level:3}],u={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"security"},"Security"),(0,a.kt)("p",null,"The security of your web application is paramount, and the framework provides a number of built-in security features to help you protect your users' data. In particular, the framework uses password hashing to protect user passwords, and takes steps to avoid SQL injection attacks."),(0,a.kt)("h3",{id:"password-hashing"},"Password Hashing"),(0,a.kt)("p",null,"To protect user passwords, the framework uses a secure, salted hashing algorithm to store passwords in the database. The ",(0,a.kt)("strong",{parentName:"p"},"default algorithm")," used is ",(0,a.kt)("inlineCode",{parentName:"p"},"bcrypt"),", with a cost factor of 12. However, you can easily change this by modifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"encryptPassword")," method in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Core/Security.php")," file. Simply adjust the options passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"password_hash")," function to suit your needs."),(0,a.kt)("p",null,"For example, to increase the cost factor to 14, you could modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"encryptPassword")," method as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'public static function encryptPassword($password)\n{\n    $options = [\n        "cost" => 14\n    ];\n\n    return password_hash($password, PASSWORD_BCRYPT, $options);\n}\n')),(0,a.kt)("h3",{id:"sql-injection-prevention"},"SQL Injection Prevention"),(0,a.kt)("p",null,"The framework takes care to prevent SQL injection attacks by using prepared statements and parameter binding when interacting with the database. All database requests made through the ORM are automatically prepared and executed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"bindParam")," method, which helps to prevent SQL injection attacks."),(0,a.kt)("p",null,"In addition, the framework ",(0,a.kt)("strong",{parentName:"p"},"sanitizes")," all user input to help prevent against XSS attacks and other forms of injection attacks. For example, in controllers, the email parameter is sanitized before being used in a query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$email = filter_var($this->queryParameters["email"], FILTER_SANITIZE_EMAIL);\n')),(0,a.kt)("p",null,"By following best practices and utilizing the framework's built-in security features, you can help ensure that your web application is as secure as possible."))}d.isMDXComponent=!0}}]);