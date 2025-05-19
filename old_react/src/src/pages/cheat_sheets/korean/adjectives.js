
import '../../../assets/css/korean.css';

import vocab from './korean/vocab/adjective.json';

import KoreanWord from "../../../components/korean_word";

function korean_adjectives() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Adjectives</h1>
            <KoreanWord items={vocab}/>
        </div>
    );
}

export default korean_adjectives;
