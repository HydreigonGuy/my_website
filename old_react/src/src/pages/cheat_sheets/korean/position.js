
import '../../../assets/css/korean.css';

import vocab from './korean/place/relative_position.json';

import KoreanWord from "../../../components/korean_word";

function korean_position() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Relative Position</h1>
            <KoreanWord items={vocab}/>
        </div>
    );
}

export default korean_position;
