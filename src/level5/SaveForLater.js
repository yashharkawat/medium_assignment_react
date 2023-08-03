const SaveForLater=()=>{
    const saveHandler=(e)=>{
        console.log(e.target.parentNode.id);
        //save post here
    }
    return (
        <button onClick={saveHandler}>Save for later</button>
    );
}
export default SaveForLater;