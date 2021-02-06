import Main from '../components/Main'

const Help = () => {

  return (
    <Main title='Help' titleSuffix={true}>
      <div className="flex items-center justify-center my-16">
        <h1>Help</h1>
      </div>

      <style jsx>{`
        .main {
          display: flex;
          align-items: center;
        }
      `}</style>
    </Main>
  )
}

export default Help
