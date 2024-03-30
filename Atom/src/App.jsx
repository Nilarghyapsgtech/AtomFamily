import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Atomfamily } from "./components/recoil";
import { useEffect } from "react";


function App(){
 return (
  <div>
    <RecoilRoot>
   
    <TODO id={1}/>
      <TODO id={2}/>
    </RecoilRoot>
  </div>
 )
}
function TODO({id}){
const currentTodo=useRecoilValue(Atomfamily(id));
return (
  <>
  {currentTodo.title}
  <br />
  {currentTodo.description}
  <br/>
  </>
)
}
function Update({id}){
  const update=useSetRecoilState(Atomfamily(id));
  useEffect(()=>{
setTimeout(()=>{
  update(
    { id:'2',
     title:'New TODO',
   description:'New TODO'
   }
   )
},5000)
  },[])

}

export default App;