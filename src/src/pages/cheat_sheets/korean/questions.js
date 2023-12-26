
import '../../../assets/css/korean.css';

import KoreanWord from "../../../components/korean_word";

function korean_questions() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Questions</h1>
            <KoreanWord items={[
              {"english":"What", "korean":"뭐"},
              {"english":"Why", "korean":"왜"},
              {"english":"When", "korean":"언제"},
              {"english":"Where", "korean":"어디"},
              {"english":"Who", "korean":"누가"},
              {"english":"Which", "korean":"어느 or 어떤"},
              {"english":"How", "korean":"어떻게"},
              {"english":"How much", "korean":"얼마나"},
            ]}/>
        </div>
    );
}

export default korean_questions;
