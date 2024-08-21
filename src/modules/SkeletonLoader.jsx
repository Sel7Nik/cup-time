export const SkeletonLoader = ({ count = 6 }) => {
  return (
    <>
      {Array(count)
        .fill()
        .map((_, index) => {
          return <div className="skeleton-wrapper" key={index}></div>
        })}
    </>
  )
}
