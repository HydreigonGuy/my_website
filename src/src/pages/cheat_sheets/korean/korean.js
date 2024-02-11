
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
            {"url":"/korean/school", "title":"School vocabulary"},
            {"url":"/korean/animals", "title":"Animals"},
            {"url":"/korean/places", "title":"Learn places"},
            {"url":"/korean/vocabulary", "title":"Learn various words"},
          ]}/>
        </div>
        <div className='half_screen'>
          <h3 className='korean_cheatsheet_subtitle'>Grammar</h3>
          <KoreanCategoryLink items={[
            {"url":"/korean/dates", "title":"Time"},
            {"url":"/korean/places", "title":"Places"},
            {"url":"/korean/questions", "title":"Questions"},
            {"url":"/korean/adjectives", "title":"Adjectives"},
          ]}/>
        </div>
      </div>
    </>
  );
}

export default Korean;
