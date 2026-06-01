import { motion } from 'framer-motion'

function StatCard({ title, value, caption, type = '' }) {
  return (
    <motion.article className={`stat-card ${type}`} whileHover={{ y: -4 }}>
      <span>{title}</span>
      <strong>{value}</strong>
      <small>{caption}</small>
    </motion.article>
  )
}
export default StatCard
