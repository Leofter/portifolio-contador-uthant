import { motion } from 'framer-motion'
import { portfolioService } from '@/services/portfolioService'

/**
 * Preloader Component de Entrada
 * Inspirado diretamente em '/Users/usere/Downloads/Portfolio website - awwwwards  style (Community)/src/app/App.tsx'
 * Exibe a tela branca minimalista apenas com o nome "Uthant Magalhães" e a barra de progresso animada.
 */
export function Preloader() {
  const preloader = portfolioService.getPreloaderData()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[999] bg-white flex items-center justify-center text-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-4 px-6 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          {preloader.displayName}
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
          className="h-px bg-black/20 w-32"
        />
      </motion.div>
    </motion.div>
  )
}
