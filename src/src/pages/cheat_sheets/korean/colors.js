
import '../../../assets/css/korean.css';

import KoreanWord from "../../../components/korean_word";

function korean_colors() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Colors</h1>
            <KoreanWord items={[
              {"english":"", "korean":""},
            ]}/>
        </div>
    );
}

export default korean_colors;
