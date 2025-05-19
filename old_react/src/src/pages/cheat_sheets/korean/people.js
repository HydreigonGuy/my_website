
import '../../../assets/css/korean.css';

import vocab_family from './korean/vocab/people/family.json';

import KoreanWord from "../../../components/korean_word";

function korean_people() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - People</h1>
            <h3 className='korean_cheatsheet_subtitle'>Family</h3>
            <KoreanWord items={vocab_family}/>
        </div>
    );
}

export default korean_people;
