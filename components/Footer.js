import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center border-t bg-gray-50 p-8">
      <div className="content text-xs">
        <p className="mb-4"><strong>© FairRate</strong></p>
        <p className="mb-2">25ᵃ Avenida Nte. 473, Centro, 77600 San Miguel de Cozumel, Quintana Roo, Mexico</p>
        <p>Disclaimer: stem cell therapies are constantly being researched and developed, with many promising results recorded every day. However, no cellular therapies are widely considered standard practice as of today. No treatment offered by CZMStem is intended as a cure for any condition, disease, or injury. All statements and opinions provided by this website are provided for educational and informational purposes only, and we cannot guarantee the effectiveness of any treatment on any one individual. The results will vary for each patient. It is vital that each potential patient does their own research based on the options we provide during the consultation so that they can make an informed decision on treatment.</p>
      </div>
    </footer>


  )
}
