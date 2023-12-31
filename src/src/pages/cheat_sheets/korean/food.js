
import '../../../assets/css/korean.css';

import KoreanWord from "../../../components/korean_word";

function korean_food() {
    return (
        <div className='korean_cheatsheet_body'>
            <h1 className='korean_cheatsheet_title'>Korean - Food</h1>
            <KoreanWord items={[
              {"english":"Cheese", "korean":"치즈"},
              {"english":"Sandwich", "korean":"샌드위치"},
              {"english":"Potato", "korean":"감자"},
              {"english":"Egg", "korean":"달걀"},
              {"english":"Fish", "korean":"생선"},
              {"english":"Sea food", "korean":"해산물"},
              {"english":"Cake", "korean":"케이크"},
              {"english":"Rice cake", "korean":"떡"},
              {"english":"Corn", "korean":"옥수수"},
              {"english":"Jam", "korean":"잼"},
              {"english":"Side dish", "korean":"반찬"},
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Fruit</h3>
            <KoreanWord items={[
              {"english":"Fruit", "korean":"과일"},
              {"english":"Apple", "korean":"사과"},
              {"english":"Banana", "korean":"바나나"},
              {"english":"Orange", "korean":"오렌지"},
              {"english":"Mandarin Orange", "korean":"귤"},
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Meals</h3>
            <KoreanWord items={[
              {"english":"Meal", "korean":"식사"},
              {"english":"Breakfast", "korean":"아침"},
              {"english":"Lunch", "korean":"점심"},
              {"english":"Dinner", "korean":"저녁"},
              {"english":"Snack", "korean":"과자"},
            ]}/>
            <h3 className='korean_cheatsheet_subtitle'>Utensils</h3>
            <KoreanWord items={[
              {"english":"Plate", "korean":"접시"},
              {"english":"Bowl", "korean":"그릇"},
            ]}/>
        </div>
    );
}

export default korean_food;
