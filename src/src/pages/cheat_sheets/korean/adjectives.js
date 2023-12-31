
import '../../../assets/css/korean.css';

import KoreanWord from "../../../components/korean_word";

function korean_adjectives() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Adjectives</h1>
            <KoreanWord items={[
              {"english":"a lot", "korean":"많"},
              {"english":"a little", "korean":"조금"},
              {"english":"can't", "korean":"못"},
              {"english":"bad", "korean":"나쁜"},
            ]}/>
        </div>
    );
}

export default korean_adjectives;
