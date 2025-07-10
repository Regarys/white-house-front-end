
function RupiahFormat ({nominal}){
  const formatted = new Intl.NumberFormat('id-ID', {
    style : 'currency',
    currency : 'IDR',
    minimumFractionDigits: 0,
  }).format(Number(nominal));

  return <span>{formatted}</span>
}

export default RupiahFormat;
