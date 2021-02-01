import React from "react";
import List from "./List";
const WordList = ({ data = [], loading = false }) => {

  if (!data.length) return (
    <div style={{ marginTop: 30 }} className="alert alert-dark" role="alert">
      No hay datos para mostrar.
    </div>
  );

  return (
    <div style={{ marginTop: 30 }}>
      <List
        loading={loading}
        data={data}
        columns={[
          {
            header: 'Original',
            accessor: 'current'
          },
          {
            header: 'Resultado',
            accessor: 'text'
          },
          {
            header: 'Es palindromo',
            accessor: 'palindrome',
            render: value => <span class={value ? "badge bg-success" : "badge bg-danger"}>{String(value)}</span>,
          }
        ]} />
    </div>
  )
}

export default WordList;