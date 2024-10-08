export type TableProps = {
  columns: Array<{ key: string; header: string }>
  data: Record<string, string>[]
  className?: string
}

export function Table(props: TableProps) {
  return (
    <div className={[props.className, 'fLow-root'].join(' ')}>
      <div className="h-full overflow-auto whitespace-nowrap">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full text-start text-sm">
            <thead>
              <tr>
                {props.columns.map((column) => (
                  <th
                    className="border p-2 whitespace-nowrap text-start"
                    key={column.key}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.data.map((row) => (
                <tr key={row.id}>
                  {props.columns.map((column) => (
                    <td
                      className="border p-2 whitespace-nowrap"
                      key={column.key}
                    >
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
