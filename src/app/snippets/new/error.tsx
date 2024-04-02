'use client'

interface Props {
  error: Error,
  reset: () => void
}

const errorPage = ({error}: Props) => {
  return (
    <div>{error.message}</div>
  )
}
export default errorPage