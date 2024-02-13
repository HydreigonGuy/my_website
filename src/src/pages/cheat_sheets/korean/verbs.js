
import '../../../assets/css/korean.css';

import vocab from './korean/verbs.json';

import KoreanWord from "../../../components/korean_word";

function korean_verbs() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Verbs</h1>
            <KoreanWord items={vocab}/>
        </div>
    );
}

export default korean_verbs;
