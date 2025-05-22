
import '../../../assets/css/korean.css';

import vocab from './korean/questions.json';

import KoreanWord from "../../../components/korean_word";

function korean_questions() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Questions</h1>
            <KoreanWord items={vocab}/>
        </div>
    );
}

export default korean_questions;
