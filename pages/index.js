const Home = () => {

  const Grid = () => [...Array(9).keys()].map(i => {
    return <div className="flex items-center justify-center h-full bg-dark text-light">{i + 1}</div>
  })

  return (
    <div className="grid h-screen grid-flow-row p-8 border-2 grid-row-6 place-items-center">
      {/* <textarea className="w-full row-span-1 text-6xl text-right h-2/3" /> */}
      <p className="w-full row-span-1 text-6xl text-right bg-light h-2/3" contentEditable="true"> 965 </p>
      <div className="grid w-full row-span-5 h-full grid-flow-row border-light grid-cols-3 grid-rows-3 gap-[2px] text-center border-2 bg-light text-light">
        <Grid />
      </div>
    </div>
  )

}

export default Home