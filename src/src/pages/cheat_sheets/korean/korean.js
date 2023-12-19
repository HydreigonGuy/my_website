
import '../../../assets/css/korean.css';

import KoreanCategoryLink from "../../../components/korean_category_link";

function Korean() {
  return (
    <>
      <div className='korean_cheatsheet_body'>
        <h1 className='korean_cheatsheet_title'>My Korean Cheat Sheet</h1>
        <KoreanCategoryLink items={[
          {"url":"/korean/verbs", "title":"Learn verbs"},
          {"url":"/korean/dates", "title":"Learn dates"},
          {"url":"/korean/school", "title":"Learn school vocabulary"},
          {"url":"/korean/animals", "title":"Learn animals"},
          {"url":"/korean/questions", "title":"Learn questions"},
          {"url":"/korean/places", "title":"Learn places"}
        ]}/>
      </div>
    </>
  );
}

export default Korean;
