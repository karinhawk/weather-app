import "./Search.scss"

const Search = ({captureInput, searchForm}) => {
  return (
    <div>
    <form onSubmit={captureInput}>
        <input ref={searchForm} className='searchbox' type="text" placeholder="Town... City... Country..." />
        <button className="form-button" type="submit">Go</button>
    </form>
    </div>
  )
}

export default Search