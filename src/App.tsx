import data from './data.json'
import { Table } from './Table'

function App() {
  return (
    <div className="space-y-10 px-4">
      <h1 className="text-2xl text-center">Table</h1>
      <Table
        className="h-[400px]"
        columns={[
          { key: 'title', header: 'Title' },
          { key: 'release_year', header: 'Release Year' },
          { key: 'actor_1', header: 'Actor 1' },
          { key: 'actor_2', header: 'Actor 2' },
          { key: 'actor_3', header: 'Actor 3' },
          { key: 'director', header: 'Director' },
          { key: 'distributor', header: 'Distributor' },
          { key: 'locations', header: 'Locations' },
          { key: 'production_company', header: 'Production Company' },
          { key: 'writer', header: 'Writer' }
        ]}
        data={data}
      />
    </div>
  )
}

export default App
