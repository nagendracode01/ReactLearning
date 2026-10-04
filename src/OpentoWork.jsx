function OpentoWork({work}) {
  return (
    <div>
       {work && (
        <p style={{backgroundColor: "seagreen", color: "white"}}>OpentoWork</p>
       )}
    </div>
  )
}

export default OpentoWork