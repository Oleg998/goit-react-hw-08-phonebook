import { nanoid } from "nanoid"



const menuInems = 
[
    {
    id:nanoid(),
    to:"/",
    text:"Home Page",
    privat : false,
},
{
    id:nanoid(),
    to:"/contact",
    text:"Contact",
    privat : true,

}
];
export default menuInems