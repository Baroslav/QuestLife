import {Marck_Script} from "next/font/google"
import AddBtn from "./components/ui/addBtn/addBtn";
import Btn from "./components/ui/btn/btn";


const marckSctipt = Marck_Script({subsets : ["latin"], weight : "400"})

export default function Home() {
  return (
    <div className={marckSctipt.className}>
      <Btn contetnType="done" type="questDone"/>
      <Btn contetnType="refuse" type="questRefuse"/>
      <Btn contetnType="edit" type="questEdit"/>
      <Btn contetnType="done" type="achieveDote"/>
      <Btn contetnType="refuse" type="achieveRefuse"/>
      <Btn contetnType="edit" type="achieveEdit"/>
    </div>
  );
}
