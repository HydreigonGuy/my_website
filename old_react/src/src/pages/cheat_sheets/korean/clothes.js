
import '../../../assets/css/korean.css';

import vocab from './korean/vocab/clothes.json';

import KoreanWord from "../../../components/korean_word";

function korean_clothes() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Clothes</h1>
            <KoreanWord items={vocab}/>
        </div>
    );
}

export default korean_clothes;
