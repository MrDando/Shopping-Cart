import uniqid from 'uniqid'

function Categories(props) {
    const { categories, selectCategory } = props

    return (
        categories.map(category => {
            const uppercased = category.charAt(0).toUpperCase() + category.slice(1);
            return (
                <div key={uniqid()} className='category'>
                    <button name={category} onClick={selectCategory}>{uppercased}</button>
                </div>
            )
        })
    )
}

export default Categories