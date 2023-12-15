
import '../../../assets/css/korean.css';

import KoreanWord from "../../../components/korean_word";

function korean_dates() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Dates</h1>
            <h3 className='korean_cheatsheet_subtitle'>Days of the week</h3>
            <KoreanWord items={[
              {"english":"Monday", "korean":"월요일"},
              {"english":"Tuesday", "korean":"화요일"},
              {"english":"Wednesday", "korean":"수요일"},
              {"english":"Thursday", "korean":"목요일"},
              {"english":"Friday", "korean":"금요일"},
              {"english":"Saturday", "korean":"토요일"},
              {"english":"Sunday", "korean":"일요일"}
            ]}/>
            <br/>
            <h3 className='korean_cheatsheet_subtitle'>Time units</h3>
            <KoreanWord items={[
              {"english":"Minute", "korean":"분"},
              {"english":"A week", "korean":"일주일"}
            ]}/>
            <br/>
            <h3 className='korean_cheatsheet_subtitle'>Moments in time</h3>
            <KoreanWord items={[
              {"english":"Now", "korean":"지금"},
              {"english":"Today", "korean":"오늘"}
            ]}/>
        </div>
    );
}

export default korean_dates;
