export default function GlobalFilter({filter,setFilter}){
    return(
<div className="globalSearch">
   <label>
   Search: <input type="search" value={filter || ''} onChange={e => setFilter(e.target.value)}/>
   </label>
   
</div>
    )
}