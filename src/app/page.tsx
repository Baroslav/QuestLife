import {Marck_Script} from "next/font/google"
import AddBtn from "./components/ui/addBtn/addBtn";
import Btn from "./components/ui/btn/btn";
import DifficultyLevel from "./components/ui/diffycultyLevel/diffycultyLevel";
import AchivementFillter from "./components/ui/achivementFilter/achivementFilter";
import AchivementFilter from "./components/ui/achivementFilter/achivementFilter";



const marckSctipt = Marck_Script({subsets : ["latin"], weight : "400"})

export default function Home() {
  return (
    <div className={marckSctipt.className}>
      <AchivementFillter/>
    </div>
  );
}
