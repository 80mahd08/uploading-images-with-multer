
export default function Uplode() {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        try {
            const resp = await fetch('http://localhost:3000/uploadImg', {
                method: 'POST',
                body: data
            })
            const result = await resp.json()
            console.log(result)
        } catch (error) {
            throw error
        }
        
    }

    
  return (
    <form className="form" onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" />
        <button type="submit">Uplode</button>
    </form>
  )
}
