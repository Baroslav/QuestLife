import {Marck_Script} from "next/font/google"
import AddBtn from "./components/ui/addBtn/addBtn";
import Btn from "./components/ui/btn/btn";
import DifficultyLevel from "./components/ui/diffycultyLevel/diffycultyLevel";
import AchivementFillter from "./components/ui/achivementFilter/achivementFilter";
import AchivementFilter from "./components/ui/achivementFilter/achivementFilter";
import Search from "./components/ui/search/search";
import NavBar from "./components/header/navBar/navBar";
import HeaderGoroup from "./components/header/headerGoroup/headerGoroup";
import QuestInput from "./components/ui/input/questInput";



const marckSctipt = Marck_Script({subsets : ["latin"], weight : "400"})

export default function Home() {
  return (
    <div className={marckSctipt.className}>
      <QuestInput type ="text" paleceHolderText="text holder" icon="./email.png"/>
    </div>
  );
}
