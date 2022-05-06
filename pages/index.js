const Home = () => {

  const Grid = () => [...Array(9).keys()].map(i => {
    return <div className="text-light"> {i + 1} </div>
  })

  return (
    <div className="grid grid-flow-row grid-cols-3 text-light">
      <Grid />
    </div>
  )

}

export default Home