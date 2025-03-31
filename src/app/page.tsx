import {Marck_Script} from "next/font/google"
import AddBtn from "./components/ui/addBtn/addBtn";
import Btn from "./components/ui/btn/btn";
import DifficultyLevel from "./components/ui/diffycultyLevel/diffycultyLevel";



const marckSctipt = Marck_Script({subsets : ["latin"], weight : "400"})

export default function Home() {
  return (
    <div className={marckSctipt.className}>
      <DifficultyLevel/>
    </div>
  );
}
