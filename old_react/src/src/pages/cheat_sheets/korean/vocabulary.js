
import '../../../assets/css/korean.css';

import vocab from './korean/vocab/vocab.json';

import KoreanWord from "../../../components/korean_word";

function korean_vocabulary() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Various Vocabulary</h1>
            <KoreanWord items={vocab}/>
        </div>
    );
}

export default korean_vocabulary;
