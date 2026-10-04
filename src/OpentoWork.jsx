function OpentoWork({work}) {
  return (
    <div>
       {work && (
        <button style={{backgroundColor: "seagreen", color: "white"}}>OpentoWork</button>
       )}
    </div>
  )
}

export default OpentoWork