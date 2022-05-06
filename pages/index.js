const Home = () => {

  const Grid = () => [...Array(9).keys()].map(i => {
    return <div className="flex items-center justify-center h-full bg-dark text-light">{i + 1}</div>
  })

  return (
    <div className="flex h-screen p-8 border-2 place-items-center">
      <div className="grid w-full h-full grid-flow-row border-light grid-cols-3 gap-[2px] text-center border-2 bg-light text-light">
        <Grid />
      </div>
    </div>
  )

}

export default Home