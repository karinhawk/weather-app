import "./Search.scss"

const Search = ({captureInput, searchForm}) => {
  return (
    <form className="form" onSubmit={captureInput}>
        <input ref={searchForm} className='form__searchbox' type="text" placeholder="Town... City... Country..." />
        <button className="form__button" type="submit">Go</button>
    </form>
  )
}

export default Search