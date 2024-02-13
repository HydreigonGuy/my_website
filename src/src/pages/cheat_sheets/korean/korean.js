
import '../../../assets/css/korean.css';

import KoreanCategoryLink from "../../../components/korean_category_link";

function Korean() {
  return (
    <>
      <div className='korean_cheatsheet_body'>
        <h1 className='korean_cheatsheet_title'>My Korean Cheat Sheet</h1>
        <div className='half_screen'>
          <h3 className='korean_cheatsheet_subtitle'>Vocabulary</h3>
          <KoreanCategoryLink items={[
            {"url":"/korean/verbs", "title":"List of verbs"},
            {"url":"/korean/food", "title":"Food"},
            {"url":"/korean/animals", "title":"Animals"},
            {"url":"/korean/color", "title":"Colors"},
            {"url":"/korean/places", "title":"Learn places"},
            {"url":"/korean/dates", "title":"Learn dates"},
            {"url":"/korean/adjectives", "title":"Adjectives"},
            {"url":"/korean/vocabulary", "title":"Learn various words"},
          ]}/>
        </div>
        <div className='half_screen'>
          <h3 className='korean_cheatsheet_subtitle'>Grammar</h3>
          <KoreanCategoryLink items={[
            {"url":"/korean/time", "title":"Time"},
            {"url":"/korean/position", "title":"Position"},
            {"url":"/korean/questions", "title":"Questions"},
            {"url":"/korean/adverb", "title":"Adverbs"},
          ]}/>
        </div>
      </div>
    </>
  );
}

export default Korean;
