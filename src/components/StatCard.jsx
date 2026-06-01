import { motion } from 'framer-motion'

function StatCard({ title, value, caption, variant = '' }) {
  return (
    <motion.article className={`stat-card ${variant}`} whileHover={{ y: -4 }}>
      <span>{title}</span>
      <strong>{value}</strong>
      <small>{caption}</small>
    </motion.article>
  )
}

export default StatCard
