
import '../../../assets/css/korean.css';

import KoreanWord from "../../../components/korean_word";

function korean_places() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Places</h1>
            <KoreanWord items={[
              {"english":"House", "korean":"집"},
              {"english":"Parc", "korean":"공원"},
              {"english":"Restaurant", "korean":"식당"},
              {"english":"Library", "korean":"도서관"},
              {"english":"Market", "korean":"시장"},
              {"english":"Mountain", "korean":"산"},
              {"english":"School", "korean":"학교"},
              {"english":"Workplace", "korean":"회사"},
              {"english":"Theater", "korean":"극장"},
              {"english":"Sea", "korean":"바다"},
              {"english":"Forest", "korean":"숲"},
              {"english":"Farm", "korean":"농장"},
              {"english":"Toilet", "korean":"화장실"},
              {"english":"Dormitory", "korean":"기숙사"}
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Pointing</h3>
            <KoreanWord items={[
              {"english":"Here (close to speaker)", "korean":"여기"},
              {"english":"There (close to speaker)", "korean":"거기"},
              {"english":"There (far from both)", "korean":"저기"},
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Countries</h3>
            <KoreanWord items={[
              {"english":"Korea", "korean":"한국"},
              {"english":"China", "korean":"중국"},
              {"english":"Japan", "korean":"일본"},
              {"english":"France", "korean":"프랑스"},
              {"english":"Germany", "korean":"독일"},
              {"english":"U.K.", "korean":"영국"},
              {"english":"U.S.A", "korean":"미국"}
            ]}/>
        </div>
    );
}

export default korean_places;
