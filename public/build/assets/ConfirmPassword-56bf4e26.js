import{W as l,r as c,j as r,a as s,b as p}from"./app-e58e60bd.js";import{G as u}from"./GuestLayout-f87f056b.js";import{T as f,I as w}from"./TextInput-e248aeab.js";import{I as h}from"./InputLabel-8bfba483.js";import{P as b}from"./PrimaryButton-27083571.js";function C(){const{data:e,setData:t,post:o,processing:m,errors:i,reset:n}=l({password:""});c.useEffect(()=>()=>{n("password")},[]);const d=a=>{t(a.target.name,a.target.value)};return r(u,{children:[s(p,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),r("form",{onSubmit:a=>{a.preventDefault(),o(route("password.confirm"))},children:[r("div",{className:"mt-4",children:[s(h,{htmlFor:"password",value:"Password"}),s(f,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:d}),s(w,{message:i.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(b,{className:"ml-4",disabled:m,children:"Confirm"})})]})]})}export{C as default};