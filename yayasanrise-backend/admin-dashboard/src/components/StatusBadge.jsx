export default function StatusBadge({ status }) {
  const styles = {
    draft: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    published: 'bg-green-100 text-green-800 border-green-200',
  };
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${styles[status] || styles.draft}`}>
      {status === 'published' ? 'Published' : 'Draft'}
    </span>
  );
}
