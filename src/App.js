import { GlobalStyles } from "./styles";
import Header from "./Header";
import MainImage from "./MainImage";
import Profile from "./Profile";
import Portfolio2 from "./Portfolio2";

function App() {
  return (
    <>
      {/* css 리셋 */}
      <GlobalStyles />

      {/* 메뉴 */}
      <Header />

      {/* 메인이미지 */}
      <MainImage />

      {/* 프로파일 */}
      <Profile />

      {/*포트폴리오*/}
      <Portfolio2 />
    </>
  );
}

export default App;
