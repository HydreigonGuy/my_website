
function KoreanWord(props) {
  return (
      <>
      {
          props.items.map(
              function (item) {
                  return (
                      <p className="korean_word">
                          {item.english} - {item.korean}
                      </p>
                  );
              }
          )
      }
      </>
  );
}

export default KoreanWord;
