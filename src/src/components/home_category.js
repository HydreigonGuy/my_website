function HomeCategory(props) {
  return (
    <>
        {props.title}
        <hr/>
        {
            props.items.map(
                function (item) {
                    return (
                        <span className="home_category_element">
                          <a href={item.href}>
                            {item.name}
                          </a>
                        </span>
                    );
                }
            )
        }
        <br/>
        <br/>
    </>
  );
}

export default HomeCategory;
