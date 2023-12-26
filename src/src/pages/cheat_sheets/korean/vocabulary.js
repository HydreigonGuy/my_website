
import '../../../assets/css/korean.css';

import KoreanWord from "../../../components/korean_word";

function korean_vocabulary() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Vocabulary</h1>
            <h3 className='korean_cheatsheet_subtitle'>Family</h3>
            <KoreanWord items={[
              {"english":"Family", "korean":"가족"},
              {"english":"Parent", "korean":"부모"},
              {"english":"Child", "korean":"아이"},
              {"english":"Baby", "korean":"아기"},
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Discussion</h3>
            <KoreanWord items={[
              {"english":"Word", "korean":"단어"},
              {"english":"Dialogue", "korean":"대화"},
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Mail</h3>
            <KoreanWord items={[
              {"english":"Mail", "korean":"우편"},
              {"english":"Postcard", "korean":"엽서"},
              {"english":"Box", "korean":"상자"},
              {"english":"Envelope", "korean":"봉투"},
              {"english":"Stamp", "korean":"우표"},
              {"english":"Package", "korean":"소포"},
              {"english":"Letter", "korean":"편지"},
              {"english":"Thank you note", "korean":"감사장"},
              {"english":"Invitation", "korean":"초대장"},
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Gift</h3>
            <KoreanWord items={[
              {"english":"Present", "korean":"선물"},
              {"english":"Toy", "korean":"장난감"},
            ]}/>
        </div>
    );
}

export default korean_vocabulary;
