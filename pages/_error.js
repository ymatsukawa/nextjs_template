const Error = ({ statusCode }) => {
  return (
    <h1>
      {statusCode
        ? `An error ${statusCode}`
        : 'System Error'}
    </h1>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const error = err ? err.statusCode : 404
  const statusCode = res ? res.statusCode : error
  return { statusCode }
}

export default Error
