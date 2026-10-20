import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    )
  }, [location.pathname])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D7D7D7] text-black px-6">
      <div className="text-center border-[8px] border-black p-10 bg-white">
        <h1 className="font-montserrat font-bold text-5xl mb-4 tracking-widest">
          404
        </h1>
        <p className="font-opensans text-base text-neutral-700 mb-6">
          Página não encontrada
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 border-l-2 border-r-2 border-black font-montserrat font-bold text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  )
}

export default NotFound
