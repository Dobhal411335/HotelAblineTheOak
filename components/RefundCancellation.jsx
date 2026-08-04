import React from 'react'

const RefundCancellation = () => {
  return (
    <section className="bg-[#fffaf3] py-10 px-4 md:px-12 w-full mx-auto rounded-lg shadow-sm">
      <div className="border border-black p-4 rounded-xl shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-start">Cancellation & Refund Policy</h2>
        <p className="mb-4">
          Guests are requested to cancel reservation within the stipulated period as mentioned below to avoid
          any cancellation charges.
        </p>

        <div className="space-y-6 text-justify">
          {/* 1. Cancellation Policy */}
          <div>
            <strong>1. Cancellation Policy</strong>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Free Cancellation:</strong> Cancellations made 7 days prior to check-in are eligible for a full refund.</li>
              <li><strong>Partial Refund:</strong> Cancellations made within 3–6 days prior to check-in will incur a 50% charge of the total booking amount.</li>
              <li><strong>No Refund:</strong> Cancellations made less than 72 hours prior to check-in or in case of a no-show will not be eligible for a refund.</li>
            </ul>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>No refunds for unused nights or early check-out.</li>
              <li>No refunds for cancellation during peak season period.</li>
              <li>No refund in case the booking is cancelled due to cancellation of flights/trains/ferries or road blocks due to climatic changes/natural calamities/political disturbances, etc.</li>
              <li>The cancellation policy for some rates/offers and room category may differ from the standard cancellation policy of the hotel.</li>
            </ul>
          </div>

          {/* 2. Arrival and Departure Policy */}
          <div>
            <strong>2. Arrival and Departure Policy</strong>
            <p className="mt-2">
              A recent Government notification requires guests to present proof of identity at the time of check in.
              Guests are requested to carry with them the required document during their travel.
            </p>
            <div className="mt-5">
              <strong>Early Arrivals and Late Departures:</strong>
              <p className="mt-2">
                If you expect to arrive early in the day and would like immediate access to your room, we recommend booking the room for the prior night to guarantee immediate access. Similarly, for late departures, reserving an additional night will guarantee access to your guest room until you depart. If you choose not to reserve, we will be glad to store your luggage while you relax in the lobby.
              </p>
            </div>
          </div>

          {/* 3. Guarantee Policy */}
          <div>
            <strong>3. Guarantee Policy</strong>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>All bookings must be guaranteed at time of reservation by Credit Card or Travel Agency. All major credit cards are accepted.</li>
              <li>At Hotel Abline The Oaks Rishikesh, a guaranteed reservation assures you of a room even if you check in late (after 6:00 pm), on receipt of advance payment. All reservations made through the website must be guaranteed by a major credit card. Deposits are required for confirmed bookings only. Please check for full deposit requirements at time of booking.</li>
            </ul>
          </div>

          {/* 4. Credit Cards */}
          <div>
            <strong>4. Credit Cards</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Visa and MasterCard</li>
            </ul>
          </div>

          {/* 5. Child Policy */}
          <div>
            <strong>5. Child Policy</strong>
            <p className="mt-2">
              Hotel Abline The Oaks Rishikesh charges no additional fee for children 5 years of age and younger occupying the same room as their parents or guardians (space permitting). Special rates may be available for children between 6–12 years occupying the same room as their parents or guardians. Meals for children can be availed on extra charges.
            </p>
          </div>

          {/* 6. Banking Policy */}
          <div>
            <strong>6. Banking Policy</strong>
            <p className="mt-2">
              We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring Bank from time to time.
            </p>
          </div>

          {/* 7. Disclaimer – Hotel Abline The Oaks */}
          <div>
            <strong>7. Disclaimer – Hotel Abline The Oaks</strong>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>All bookings at Hotel Abline The Oaks are subject to availability and confirmation.</li>
              <li>The hotel reserves the right to modify, amend, or update the cancellation and refund policy without prior notice.</li>
              <li>Guests are responsible for providing accurate contact details at the time of booking. The hotel will not be held liable for any communication failure due to incorrect information.</li>
              <li>Refunds, where applicable, are processed only through the original payment method used during booking. Transaction or processing fees (if any) charged by banks/payment gateways are non-refundable.</li>
              <li>The hotel shall not be held responsible for cancellations arising due to circumstances beyond its control, including but not limited to natural disasters, pandemics, government restrictions, or transportation delays. In such cases, alternate solutions such as date changes or credit vouchers may be offered at the hotel’s discretion.</li>
              <li>By confirming a booking, guests acknowledge and agree to abide by the hotel’s policies, house rules, and terms of stay.</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <strong>Contact Information for Refund and Cancellation Related Queries:</strong>
            <div className="mt-2">
              "https://hotelablinetheoaks.com (Website)" is a registered trade mark.<br />
              <strong>PAN Number:</strong>  <br />
              <strong>GST Registration Number:</strong> <br />
              <strong>Phone Number:</strong> +91 9410326904, +7409242920   
              <br />
              <strong>Working Hours:</strong> 8:30 am - 18:30 pm <br />
              <strong>Email:</strong> <a href="mailto:hotelablinetheoaks@gmail.com" className="text-blue-600 underline font-semibold">hotelablinetheoaks@gmail.com</a> <br />
              <a href="mailto:info@hotelablinetheoaks.com" className="text-blue-600 underline font-semibold">info@hotelablinetheoaks.com</a> <br />
              <a href="mailto:Care@hotelablinetheoaks.com" className="text-blue-600 underline font-semibold">Care@hotelablinetheoaks.com</a> <br />
              <strong>Web:</strong> <a href="https://hotelablinetheoaks.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">https://hotelablinetheoaks.com</a> <br />
              <strong>Hotel Address:</strong>Secret Waterfall Rd, near Kundan Restaurant, Upper Tapovan, Rishikesh, Uttarakhand 249192
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RefundCancellation
