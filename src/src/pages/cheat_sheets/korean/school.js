
import '../../../assets/css/korean.css';

import KoreanWord from "../../../components/korean_word";

function korean_school() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - School Vocabulary</h1>
            <KoreanWord items={[
              {"english":"School", "korean":"학교"},
              {"english":"Student", "korean":"학생"},
              {"english":"University", "korean":"대학교"},
              {"english":"Book", "korean":"책"},
              {"english":"Desk", "korean":"책상"},
              {"english":"Bag", "korean":"가방"},
              {"english":"Notebook", "korean":"공책"},
              {"english":"Pen", "korean":"볼펜"},
              {"english":"Pencil", "korean":"연필"},
              {"english":"Chair", "korean":"의자"},
              {"english":"Eraser", "korean":"지우개"},
              {"english":"Dictionary", "korean":"사전"},
              {"english":"Watch / Clock", "korean":"시계"},
              {"english":"Glasses", "korean":"안경"},
              {"english":"Ruler", "korean":"자"},
              {"english":"Pencil Case", "korean":"필통"},
              {"english":"Computer", "korean":"컴퓨터"}
            ]}/>
        </div>
    );
}

export default korean_school;
