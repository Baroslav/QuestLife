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
import Auth from "./components/auth/auth";
import HeaderContet from "./components/headerContetn/headerContetn";
import MainPage from "./components/pages/main/main";
import styles from "./page.module.css"
import QuestsPage from "./components/pages/quests/quest";
import PageWrapper from "./components/pageWrapper/pageWrapper";



const marckSctipt = Marck_Script({subsets : ["latin"], weight : "400"})

export default function Home() {
  return (
      <div className={marckSctipt.className}>
        <HeaderGoroup/>
        <PageWrapper bgImg="./mythical.svg">
          <QuestsPage/>
        </PageWrapper>
      </div>
  );
}
