
function DevOpsCategoryLink(props) {
    return (
        <>
        {
            props.items.map(
                function (item) {
                    return (
                        <>
                            <a className="devops_cheat_sheet_category_url" href={item.url}>{item.title}</a>
                        </>
                    );
                }
            )
        }
        </>
    );
}

export default DevOpsCategoryLink;
