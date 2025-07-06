export default function Wrapper({children}) {
  return (
    <main className="mx-auto my-[1.875rem] grid w-[90%] max-w-[30rem] gap-6 md:w-[94%] md:max-w-[76.25rem] md:grid-cols-[1fr_minmax(18.25rem,30%)]">
      {children}
    </main>
  )
}