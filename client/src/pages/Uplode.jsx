
export default function Uplode() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        fetch('http://localhost:3000/uploadImg', {
            method: 'POST',
            body: data
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
        
    }

    
  return (
    <form className="form" onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" />
        <button type="submit">Uplode</button>
    </form>
  )
}
