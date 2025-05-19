
import '../../../assets/css/korean.css';

import vocab from './korean/adverb.json';

import KoreanWord from "../../../components/korean_word";

function korean_adverb() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Adverbs</h1>
            <KoreanWord items={vocab}/>
        </div>
    );
}

export default korean_adverb;
