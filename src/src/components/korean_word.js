
function KoreanWord(props) {
  return (
      <>
      {
        Object.keys(props.items).map((english, _) => (
          <p className="korean_word">
              {english} - {props.items[english]}
          </p>
        ))
      }
      </>
  );
}

export default KoreanWord;
