
import '../../../assets/css/korean.css';

import KoreanWord from "../../../components/korean_word";

function korean_animals() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Animals</h1>
            <KoreanWord items={[
              {"english":"Animal", "korean":"동물"},
              {"english":"Cat", "korean":"고양이"},
              {"english":"Dog", "korean":"개"},
              {"english":"Turtle", "korean":"고북이"},
              {"english":"Tiger", "korean":"호랑이"},
              {"english":"Bird", "korean":"새"},
              {"english":"Fish", "korean":"물고기"},
              {"english":"Rabbit", "korean":"토끼"},
              {"english":"Duck", "korean":"오리"},
              {"english":"Chicken", "korean":"닭"},
              {"english":"Wolf", "korean":"늑대"},
              {"english":"Spider", "korean":"거미"},
              {"english":"Mouse", "korean":"쥐"},
              {"english":"Sheep", "korean":"양"},
              {"english":"Cow", "korean":"소"},
              {"english":"Horse", "korean":"말"},
              {"english":"Pig", "korean":"돼지"},
              {"english":"Whale", "korean":"고래"},
              {"english":"Butterfly", "korean":"나비"},
              {"english":"Bear", "korean":"곰"},
              {"english":"Elephant", "korean":"코끼리"},
              {"english":"Shark", "korean":"상어"}
            ]}/>
        </div>
    );
}

export default korean_animals;
